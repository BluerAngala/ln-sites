/**
 * 内容获取层
 * - 选数据源（飞书 / mock，自动降级）
 * - 字段映射（飞书 → I18n<T> 格式）
 * - 缓存
 * - 便利方法
 */
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import {
  listAllRecords, getAttachmentUrl, richTextToPlain, richTextToImages, dateFieldToISO, linkedIdsField,
} from './lark';
import { mockBundle } from './mock';
import type {
  ContentBundle, ContentSource, Lawyer, CaseItem, NewsItem, Honor, Practice, Office, SocialItem, SiteConfig, I18n,
} from './types';

const CACHE_DIR = join(process.cwd(), '.cache');
const CACHE_FILE = join(CACHE_DIR, 'website-content.json');
const CACHE_TTL = 1000 * 60 * 60 * 2; // 2 hours

/* ============================================================
   源选择
   ============================================================ */
function resolveSource(): 'lark' | 'mock' {
  const flag = (process.env.CONTENT_SOURCE ?? 'auto').toLowerCase() as ContentSource;
  if (flag === 'mock') return 'mock';
  if (flag === 'lark') return 'lark';
  if (process.env.LARK_APP_ID && process.env.LARK_APP_SECRET && process.env.LARK_BASE_TOKEN) return 'lark';
  return 'mock';
}

/* ============================================================
   磁盘缓存
   ============================================================ */
function loadDiskCache(): ContentBundle | null {
  if (!existsSync(CACHE_FILE)) return null;
  try {
    const stat = require('node:fs').statSync(CACHE_FILE);
    if (Date.now() - stat.mtimeMs > CACHE_TTL) return null;
    return JSON.parse(readFileSync(CACHE_FILE, 'utf-8')) as ContentBundle;
  } catch { return null; }
}
function saveDiskCache(bundle: ContentBundle) {
  try { mkdirSync(CACHE_DIR, { recursive: true }); } catch {}
  try { writeFileSync(CACHE_FILE, JSON.stringify(bundle, null, 2)); } catch {}
}

/* ============================================================
   飞书 → I18n<T> 映射
   ============================================================ */
type LarkRecord = { record_id: string; fields: Record<string, unknown> };

const i18nStr  = (zh: unknown, en?: unknown): I18n<string>  => ({ zh: String(zh ?? ''), en: en ? String(en) : undefined });
const i18nStrA = (zh: unknown, en?: unknown): I18n<string[]> => ({
  zh: Array.isArray(zh) ? (zh as string[]) : [],
  en: Array.isArray(en) ? (en as string[]) : undefined,
});

function mapLawyer(rec: LarkRecord): Lawyer {
  const f = rec.fields;
  return {
    id: rec.record_id,
    slug: String(f.slug ?? rec.record_id),
    name:        i18nStr(f.name, f.nameEn),
    level:       i18nStr(f.level, f.levelEn),
    licenseNo:   f.licenseNo as string | undefined,
    phone:       f.phone as string | undefined,
    email:       f.email as string | undefined,
    bio:         i18nStr(richTextToPlain(f.bio, 300) || f.bio, f.bioEn),
    bioLong:     i18nStr(f.bioLong, f.bioLongEn),
    avatar:      getAttachmentUrl(f.avatar),
    practiceAreas: i18nStrA(f.practiceAreas, f.practiceAreasEn),
    expertise:     i18nStrA(f.expertise, f.expertiseEn),
    education:     i18nStrA(f.education, f.educationEn),
    languages:     Array.isArray(f.languages) ? f.languages as string[] : [],
    office:        i18nStr(f.office, f.officeEn),
    status: (f.status as Lawyer['status']) ?? '在职',
    order: typeof f.order === 'number' ? f.order : 999,
  };
}

function mapCase(rec: LarkRecord): CaseItem {
  const f = rec.fields;
  const content = typeof f.content === 'string' ? f.content : '';
  const contentEn = typeof f.contentEn === 'string' ? f.contentEn : '';
  const firstImg = richTextToImages(f.content)[0] ?? getAttachmentUrl(f.cover);
  return {
    id: rec.record_id,
    slug: String(f.slug ?? rec.record_id),
    title:    i18nStr(f.title, f.titleEn),
    type:     i18nStr(f.type, f.typeEn),
    industry: i18nStr(f.industry, f.industryEn),
    client:   i18nStr(f.client, f.clientEn),
    year:     typeof f.year === 'number' ? f.year : Number(f.year) || new Date().getFullYear(),
    summary:  i18nStr(f.summary, f.summaryEn),
    content:  i18nStr(content, contentEn),
    highlights: i18nStrA(f.highlights, f.highlightsEn),
    leadLawyerId: linkedIdsField(f.leadLawyer)[0],
    lawyerIds:    linkedIdsField(f.lawyers),
    practiceArea: i18nStr(f.practiceArea, f.practiceAreaEn),
    isFeatured: !!f.isFeatured,
    status: (f.status as CaseItem['status']) ?? 'published',
    cover: firstImg,
  };
}

function mapNews(rec: LarkRecord): NewsItem {
  const f = rec.fields;
  const content = typeof f.content === 'string' ? f.content : '';
  const contentEn = typeof f.contentEn === 'string' ? f.contentEn : '';
  return {
    id: rec.record_id,
    slug: String(f.slug ?? rec.record_id),
    title:    i18nStr(f.title, f.titleEn),
    category: i18nStr(f.category, f.categoryEn),
    date:     dateFieldToISO(f.date) || String(f.date ?? ''),
    summary:  i18nStr(f.summary, f.summaryEn),
    content:  i18nStr(content, contentEn),
    cover:    getAttachmentUrl(f.cover) ?? richTextToImages(f.content)[0],
    author:   f.author as string | undefined,
    isFeatured: !!f.isFeatured,
    status: (f.status as NewsItem['status']) ?? 'published',
  };
}

function mapHonor(rec: LarkRecord): Honor {
  const f = rec.fields;
  return {
    id: rec.record_id,
    title:       i18nStr(f.title, f.titleEn),
    issuer:      i18nStr(f.issuer, f.issuerEn),
    date:        dateFieldToISO(f.date) || String(f.date ?? ''),
    description: i18nStr(f.description, f.descriptionEn),
    category:    i18nStr(f.category, f.categoryEn),
    ranking:     f.ranking as string | undefined,
  };
}

function mapPractice(rec: LarkRecord): Practice {
  const f = rec.fields;
  return {
    id: rec.record_id,
    name:        i18nStr(f.name),
    nameEn:      String(f.nameEn ?? ''),
    description: i18nStr(f.description, f.descriptionEn),
    content:     i18nStr(f.content, f.contentEn),
    caseCount:   typeof f.caseCount === 'number' ? f.caseCount : undefined,
    icon:        f.icon as string | undefined,
    order:       typeof f.order === 'number' ? f.order : 999,
  };
}

function mapOffice(rec: LarkRecord): Office {
  const f = rec.fields;
  return {
    id: rec.record_id,
    city:        i18nStr(f.city),
    cityEn:      String(f.cityEn ?? ''),
    address:     i18nStr(f.address, f.addressEn),
    phone:       String(f.phone ?? ''),
    fax:         f.fax as string | undefined,
    email:       f.email as string | undefined,
    description: i18nStr(f.description, f.descriptionEn),
    isHeadquarters: !!f.isHeadquarters,
    order:       typeof f.order === 'number' ? f.order : 999,
    image:       f.image as string | undefined,
    lng:         typeof f.lng === 'number' ? f.lng : undefined,
    lat:         typeof f.lat === 'number' ? f.lat : undefined,
    mapUrl:      f.mapUrl as string | undefined,
    mapEmbedUrl: f.mapEmbedUrl as string | undefined,
    mapAmap:     f.mapAmap as string | undefined,
    mapBaidu:    f.mapBaidu as string | undefined,
  };
}

function mapSocial(rec: LarkRecord): SocialItem {
  const f = rec.fields;
  return {
    id: rec.record_id,
    title:       i18nStr(f.title, f.titleEn),
    date:        dateFieldToISO(f.date) || String(f.date ?? ''),
    location:    i18nStr(f.location, f.locationEn),
    lawyerIds:   linkedIdsField(f.lawyers),
    category:    i18nStr(f.category, f.categoryEn),
    description: i18nStr(f.description, f.descriptionEn),
    content:     i18nStr(f.content, f.contentEn),
  };
}

function mapConfig(rec: LarkRecord): Record<string, string> {
  const f = rec.fields;
  const key = String(f.key ?? '');
  const val = f.value == null ? '' : String(f.value);
  return { [key]: val };
}

async function loadFromLark(): Promise<ContentBundle> {
  const baseToken = process.env.LARK_BASE_TOKEN;
  const need = (name: string) => {
    const v = process.env[name];
    if (!v) throw new Error(`${name} 未配置`);
    return v;
  };

  const [lawyersRaw, casesRaw, newsRaw, honorsRaw, practicesRaw, officesRaw, socialRaw, configRaw] = await Promise.all([
    listAllRecords(need('LARK_TABLE_LAWYERS'), {}, baseToken),
    listAllRecords(need('LARK_TABLE_CASES'), {}, baseToken),
    listAllRecords(need('LARK_TABLE_NEWS'), {}, baseToken),
    listAllRecords(need('LARK_TABLE_HONORS'), {}, baseToken),
    listAllRecords(need('LARK_TABLE_PRACTICES'), {}, baseToken),
    listAllRecords(need('LARK_TABLE_OFFICES'), {}, baseToken),
    listAllRecords(need('LARK_TABLE_SOCIAL'), {}, baseToken),
    listAllRecords(need('LARK_TABLE_SITE_CONFIG'), {}, baseToken),
  ]);

  // site_config 表：{ key, value }，以 key 为字段
  const flatConfig: Record<string, string> = {};
  for (const r of configRaw) Object.assign(flatConfig, mapConfig(r));
  // 把 flatConfig 还原成 SiteConfig（值都在 zh，en 留空走 fallback）
  const config: SiteConfig = {
    ...mockBundle.config,
    heroKicker:    { zh: flatConfig.heroKicker    ?? mockBundle.config.heroKicker.zh },
    heroBadge:     { zh: flatConfig.heroBadge     ?? mockBundle.config.heroBadge.zh },
    heroTitle:     { zh: flatConfig.heroTitle     ?? mockBundle.config.heroTitle.zh },
    heroSubtitle:  { zh: flatConfig.heroSubtitle  ?? mockBundle.config.heroSubtitle.zh },
    heroLede:      { zh: flatConfig.heroLede      ?? mockBundle.config.heroLede.zh },
    aboutQuote:    { zh: flatConfig.aboutQuote    ?? mockBundle.config.aboutQuote.zh },
    aboutQuoteAttr:{ zh: flatConfig.aboutQuoteAttr?? mockBundle.config.aboutQuoteAttr.zh },
    aboutBody:     { zh: flatConfig.aboutBody     ?? mockBundle.config.aboutBody.zh },
    tagline:       { zh: flatConfig.tagline       ?? mockBundle.config.tagline.zh },
    taglineAttr:   { zh: flatConfig.taglineAttr   ?? mockBundle.config.taglineAttr.zh },
    tagline2:      { zh: flatConfig.tagline2      ?? mockBundle.config.tagline2.zh },
    tagline2Attr:  { zh: flatConfig.tagline2Attr  ?? mockBundle.config.tagline2Attr.zh },
    contactAddress:{ zh: flatConfig.contactAddress?? mockBundle.config.contactAddress.zh },
    contactPhone:  flatConfig.contactPhone  ?? mockBundle.config.contactPhone,
    contactEmail:  flatConfig.contactEmail  ?? mockBundle.config.contactEmail,
    copyright:     { zh: flatConfig.copyright     ?? mockBundle.config.copyright.zh },
    icpNo:         flatConfig.icpNo         ?? mockBundle.config.icpNo,
  };
  // stats 是数组，单独处理（如果飞书表存了 4 个 key）
  // 简化：先保持 mockBundle.config.stats

  return {
    source: 'lark',
    generatedAt: new Date().toISOString(),
    lawyers:  lawyersRaw.map(mapLawyer).sort((a, b) => (a.order ?? 999) - (b.order ?? 999)),
    cases:    casesRaw.map(mapCase).sort((a, b) => b.year - a.year),
    news:     newsRaw.map(mapNews).sort((a, b) => b.date.localeCompare(a.date)),
    honors:   honorsRaw.map(mapHonor).sort((a, b) => b.date.localeCompare(a.date)),
    practices: practicesRaw.map(mapPractice).sort((a, b) => (a.order ?? 999) - (b.order ?? 999)),
    offices:  officesRaw.map(mapOffice).sort((a, b) => (a.order ?? 999) - (b.order ?? 999)),
    social:   socialRaw.map(mapSocial).sort((a, b) => b.date.localeCompare(a.date)),
    config,
  };
}

/* ============================================================
   对外 API
   ============================================================ */
let _bundle: ContentBundle | null = null;

export async function getContent(force = false): Promise<ContentBundle> {
  if (_bundle && !force) return _bundle;
  const cached = !force ? loadDiskCache() : null;
  if (cached) { _bundle = cached; return cached; }

  const source = resolveSource();
  try {
    if (source === 'lark') {
      const bundle = await loadFromLark();
      _bundle = bundle;
      saveDiskCache(bundle);
      return bundle;
    }
  } catch (err) {
    console.warn('[content] 飞书拉取失败，降级到 mock:', (err as Error).message);
  }
  _bundle = mockBundle;
  return mockBundle;
}

/* ---------- 便利方法 ---------- */
export async function getLawyers(): Promise<Lawyer[]> {
  return (await getContent()).lawyers.filter(l => l.status === '在职');
}
export async function getLawyerBySlug(slug: string): Promise<Lawyer | undefined> {
  return (await getLawyers()).find(l => l.slug === slug);
}
export async function getFeaturedLawyers(limit = 6): Promise<Lawyer[]> {
  return (await getLawyers()).slice(0, limit);
}

export async function getCases(opts: { practiceArea?: string; featured?: boolean; limit?: number } = {}): Promise<CaseItem[]> {
  let list = (await getContent()).cases.filter(c => c.status === 'published');
  if (opts.practiceArea) list = list.filter(c => c.practiceArea.zh === opts.practiceArea || c.practiceArea.en === opts.practiceArea);
  if (opts.featured) list = list.filter(c => c.isFeatured);
  if (opts.limit) list = list.slice(0, opts.limit);
  return list;
}
export async function getCaseBySlug(slug: string): Promise<CaseItem | undefined> {
  return (await getContent()).cases.find(c => c.slug === slug && c.status === 'published');
}
export async function getFeaturedCases(limit = 3): Promise<CaseItem[]> {
  return getCases({ featured: true, limit });
}

export async function getNews(opts: { category?: string; featured?: boolean; limit?: number } = {}): Promise<NewsItem[]> {
  let list = (await getContent()).news.filter(n => n.status === 'published');
  list = list.sort((a, b) => b.date.localeCompare(a.date));
  if (opts.category) list = list.filter(n => n.category.zh === opts.category || n.category.en === opts.category);
  if (opts.featured) list = list.filter(n => n.isFeatured);
  if (opts.limit) list = list.slice(0, opts.limit);
  return list;
}
export async function getNewsBySlug(slug: string): Promise<NewsItem | undefined> {
  return (await getContent()).news.find(n => n.slug === slug && n.status === 'published');
}
export async function getLatestNews(limit = 3): Promise<NewsItem[]> {
  return getNews({ limit });
}
export async function getNewsCategories(): Promise<string[]> {
  const set = new Set<string>();
  (await getContent()).news.forEach(n => set.add(n.category.zh));
  return Array.from(set);
}

export async function getHonors(): Promise<Honor[]> {
  return (await getContent()).honors;
}
export async function getHonorsByCategory(): Promise<Record<string, Honor[]>> {
  const result: Record<string, Honor[]> = {};
  for (const h of await getHonors()) {
    const key = h.category.zh;
    (result[key] ??= []).push(h);
  }
  return result;
}

export async function getPractices(): Promise<Practice[]> {
  return (await getContent()).practices;
}

export async function getOffices(): Promise<Office[]> {
  return (await getContent()).offices;
}
export async function getHeadquarters(): Promise<Office | undefined> {
  return (await getOffices()).find(o => o.isHeadquarters);
}

export async function getSocial(): Promise<SocialItem[]> {
  return (await getContent()).social;
}

export async function getSiteConfig(): Promise<SiteConfig> {
  return (await getContent()).config;
}

export function _resetCache() { _bundle = null; }
