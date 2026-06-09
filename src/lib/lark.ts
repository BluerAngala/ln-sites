/**
 * 飞书开放平台 API 客户端
 * 文档：
 *  - 鉴权: https://open.feishu.cn/document/server-docs/authentication-management/access-token/tenant_access_token_internal
 *  - 多维表格记录: https://open.feishu.cn/document/server-docs/docs/bitable-v1/app-table-record/list
 *
 * 设计原则：
 *  - 只用最少的依赖（不引第三方 SDK，直接 fetch）
 *  - token 内存缓存 + 文件兜底缓存（2 小时过期，提前 5 分钟刷新）
 *  - 任何 IO 失败都要抛出明确错误，由调用方决定是否降级到 mock
 */

import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const LARK_API_BASE = 'https://open.feishu.cn/open-apis';
const TOKEN_TTL = 7200; // 2 小时
const TOKEN_REFRESH_BEFORE = 300; // 提前 5 分钟刷新

const CACHE_DIR = join(process.cwd(), '.cache', 'lark');

interface TokenCache {
  token: string;
  expireAt: number; // ms
}

let tokenCache: TokenCache | null = null;

function ensureCacheDir() {
  try {
    mkdirSync(CACHE_DIR, { recursive: true });
  } catch {}
}

function loadTokenCacheFromDisk(): TokenCache | null {
  const file = join(CACHE_DIR, 'tenant_token.json');
  if (!existsSync(file)) return null;
  try {
    const raw = readFileSync(file, 'utf-8');
    const data = JSON.parse(raw) as TokenCache;
    if (data.expireAt > Date.now() + TOKEN_REFRESH_BEFORE * 1000) {
      return data;
    }
  } catch {}
  return null;
}

function saveTokenCacheToDisk(cache: TokenCache) {
  ensureCacheDir();
  try {
    writeFileSync(join(CACHE_DIR, 'tenant_token.json'), JSON.stringify(cache));
  } catch {}
}

export async function getTenantAccessToken(): Promise<string> {
  if (tokenCache && tokenCache.expireAt > Date.now() + TOKEN_REFRESH_BEFORE * 1000) {
    return tokenCache.token;
  }
  const disk = loadTokenCacheFromDisk();
  if (disk) {
    tokenCache = disk;
    return disk.token;
  }

  const appId = process.env.LARK_APP_ID;
  const appSecret = process.env.LARK_APP_SECRET;
  if (!appId || !appSecret) {
    throw new Error('LARK_APP_ID / LARK_APP_SECRET 未配置');
  }

  const res = await fetch(`${LARK_API_BASE}/auth/v3/tenant_access_token/internal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ app_id: appId, app_secret: appSecret }),
  });
  if (!res.ok) throw new Error(`飞书鉴权 HTTP ${res.status}`);
  const data = (await res.json()) as {
    code: number;
    msg?: string;
    tenant_access_token?: string;
    expire?: number;
  };
  if (data.code !== 0 || !data.tenant_access_token) {
    throw new Error(`飞书鉴权失败: code=${data.code} msg=${data.msg}`);
  }

  tokenCache = {
    token: data.tenant_access_token,
    expireAt: Date.now() + (data.expire ?? TOKEN_TTL) * 1000,
  };
  saveTokenCacheToDisk(tokenCache);
  return tokenCache.token;
}

/* ============================================================
   多维表格 API
   ============================================================ */

export interface LarkListParams {
  pageSize?: number; // 默认 500，上限 500
  pageToken?: string;
  viewId?: string;
  filter?: {
    conjunction: 'and' | 'or';
    conditions: Array<{ field_name: string; operator: string; value: unknown[] }>;
  };
  sort?: Array<{ field_name: string; desc?: boolean }>;
  fieldNames?: string[];
  textFieldAsArray?: boolean;
  automaticFields?: boolean;
}

export interface LarkListResponse<T = Record<string, unknown>> {
  items: Array<{
    record_id: string;
    fields: T;
    created_time?: number;
    last_modified_time?: number;
  }>;
  hasMore: boolean;
  pageToken?: string;
  total: number;
}

export async function listRecords<T = Record<string, unknown>>(
  tableId: string,
  params: LarkListParams = {},
  baseToken?: string,
): Promise<LarkListResponse<T>> {
  baseToken = baseToken ?? process.env.LARK_BASE_TOKEN;
  if (!baseToken) throw new Error('LARK_BASE_TOKEN 未配置');

  const token = await getTenantAccessToken();
  const url = new URL(`${LARK_API_BASE}/bitable/v1/apps/${baseToken}/tables/${tableId}/records`);
  const body: Record<string, unknown> = {
    page_size: params.pageSize ?? 500,
    automatic_fields: params.automaticFields ?? false,
  };
  if (params.pageToken) body.page_token = params.pageToken;
  if (params.viewId) body.view_id = params.viewId;
  if (params.filter) body.filter = params.filter;
  if (params.sort) body.sort = params.sort;
  if (params.fieldNames) body.field_names = params.fieldNames;
  if (params.textFieldAsArray) body.text_field_as_array = true;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`飞书 list ${tableId} HTTP ${res.status}`);
  const data = (await res.json()) as {
    code: number;
    msg?: string;
    data?: {
      items?: Array<{
        record_id: string;
        fields: T;
        created_time?: number;
        last_modified_time?: number;
      }>;
      has_more?: boolean;
      page_token?: string;
      total?: number;
    };
  };
  if (data.code !== 0) {
    throw new Error(`飞书 list ${tableId} 失败: code=${data.code} msg=${data.msg}`);
  }
  return {
    items: data.data?.items ?? [],
    hasMore: !!data.data?.has_more,
    pageToken: data.data?.page_token,
    total: data.data?.total ?? 0,
  };
}

/**
 * 拉取一张表的所有记录（自动翻页）
 */
export async function listAllRecords<T = Record<string, unknown>>(
  tableId: string,
  params: Omit<LarkListParams, 'pageToken'> = {},
  baseToken?: string,
): Promise<LarkListResponse<T>['items']> {
  const all: LarkListResponse<T>['items'] = [];
  let pageToken: string | undefined;
  do {
    const page = await listRecords<T>(tableId, { ...params, pageToken }, baseToken);
    all.push(...page.items);
    pageToken = page.hasMore ? page.pageToken : undefined;
  } while (pageToken);
  return all;
}

/* ============================================================
   字段映射工具
   ============================================================ */

/** 从飞书附件字段取值 */
export function getAttachmentUrl(field: unknown): string | undefined {
  if (!Array.isArray(field) || field.length === 0) return undefined;
  const first = field[0] as { url?: string; tmp_url?: string };
  return first.tmp_url || first.url;
}

/** 从飞书富文本字段里抽取纯文本（用于摘要、SEO） */
export function richTextToPlain(field: unknown, maxLen = 200): string {
  if (!Array.isArray(field)) return typeof field === 'string' ? field : '';
  const parts: string[] = [];
  for (const node of field) {
    const n = node as { text?: string; content?: unknown };
    if (typeof n.text === 'string') parts.push(n.text);
    else if (Array.isArray(n.content)) parts.push(richTextToPlain(n.content));
  }
  const text = parts.join('').replace(/\s+/g, ' ').trim();
  return text.length > maxLen ? text.slice(0, maxLen) + '…' : text;
}

/** 从飞书富文本字段里抽取所有图片 URL（用于首图） */
export function richTextToImages(field: unknown): string[] {
  if (!Array.isArray(field)) return [];
  const urls: string[] = [];
  const walk = (nodes: unknown[]) => {
    for (const node of nodes) {
      const n = node as { type?: string; url?: string; content?: unknown };
      if (n.type === 'image' && typeof n.url === 'string') urls.push(n.url);
      else if (Array.isArray(n.content)) walk(n.content);
    }
  };
  walk(field);
  return urls;
}

/** 飞书日期（ms 时间戳）→ ISO date string */
export function dateFieldToISO(field: unknown): string {
  if (typeof field === 'number') return new Date(field).toISOString().slice(0, 10);
  if (typeof field === 'string') return field.slice(0, 10);
  return '';
}

/** 飞书关联字段 → 关联记录 id 数组 */
export function linkedIdsField(field: unknown): string[] {
  if (!Array.isArray(field)) return [];
  return field
    .map((item) => (item as { record_id?: string }).record_id)
    .filter((id): id is string => typeof id === 'string');
}
