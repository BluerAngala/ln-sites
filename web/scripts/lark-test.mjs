#!/usr/bin/env node
/**
 * 飞书连通性测试脚本
 * 用途：跑一遍 auth + list 一张表，验证 App 凭证 / 表格 ID 正确
 *
 * 用法：
 *   1. 复制 web/.env.example 为 web/.env，填入凭证
 *   2. npm run lark:test
 */

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

// 简易 .env 加载
function loadEnv() {
  const file = join(process.cwd(), '.env');
  if (!existsSync(file)) return;
  const text = readFileSync(file, 'utf-8');
  for (const line of text.split('\n')) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*?)\s*$/i);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}
loadEnv();

const LARK_API = 'https://open.feishu.cn/open-apis';

async function getToken() {
  const res = await fetch(`${LARK_API}/auth/v3/tenant_access_token/internal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      app_id: process.env.LARK_APP_ID,
      app_secret: process.env.LARK_APP_SECRET,
    }),
  });
  const data = await res.json();
  if (data.code !== 0) throw new Error(`code=${data.code} msg=${data.msg}`);
  return data.tenant_access_token;
}

async function listOne(token, tableId) {
  const res = await fetch(`${LARK_API}/bitable/v1/apps/${process.env.LARK_BASE_TOKEN}/tables/${tableId}/records`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ page_size: 3, automatic_fields: false }),
  });
  const data = await res.json();
  if (data.code !== 0) throw new Error(`code=${data.code} msg=${data.msg}`);
  return data.data;
}

function check(label, envKey) {
  const v = process.env[envKey];
  console.log(`  ${v ? '✅' : '❌'} ${label.padEnd(18)} ${v || '(未配置)'}`);
  return !!v;
}

async function main() {
  console.log('🔍 飞书连通性测试\n');
  check('App ID',       'LARK_APP_ID');
  check('App Secret',   'LARK_APP_SECRET');
  check('Base Token',   'LARK_BASE_TOKEN');
  console.log('');

  if (!process.env.LARK_APP_ID || !process.env.LARK_APP_SECRET) {
    console.error('❌ LARK_APP_ID / LARK_APP_SECRET 未配置，无法测试。');
    console.error('   请复制 web/.env.example 为 web/.env，填入凭证。');
    process.exit(1);
  }

  // 1. 鉴权
  try {
    console.log('▶ Step 1 / 3: 获取 tenant_access_token ...');
    const token = await getToken();
    console.log(`  ✅ 成功：${token.slice(0, 20)}...\n`);
  } catch (e) {
    console.error('  ❌ 鉴权失败：', e.message);
    process.exit(1);
  }

  // 2. 律师表
  if (process.env.LARK_TABLE_LAWYERS && process.env.LARK_BASE_TOKEN) {
    try {
      console.log('▶ Step 2 / 3: 列出律师表 (前 3 条) ...');
      const token = await getToken();
      const data = await listOne(token, process.env.LARK_TABLE_LAWYERS);
      console.log(`  ✅ 成功：共 ${data.total} 条，已获取 ${data.items.length} 条`);
      data.items.forEach((item, i) => {
        const f = item.fields;
        console.log(`     ${i + 1}. [${item.record_id}] ${f.name ?? '(无名)'} · ${f.level ?? ''}`);
      });
    } catch (e) {
      console.error('  ❌ 拉取失败：', e.message);
    }
  } else {
    console.log('▶ Step 2 / 3: 跳过（未配置 LARK_TABLE_LAWYERS / LARK_BASE_TOKEN）');
  }

  // 3. 全部 8 张表
  const tables = [
    ['律师',     'LARK_TABLE_LAWYERS'],
    ['案例',     'LARK_TABLE_CASES'],
    ['资讯',     'LARK_TABLE_NEWS'],
    ['荣誉',     'LARK_TABLE_HONORS'],
    ['业务领域', 'LARK_TABLE_PRACTICES'],
    ['办公室',   'LARK_TABLE_OFFICES'],
    ['公益',     'LARK_TABLE_SOCIAL'],
    ['网站配置', 'LARK_TABLE_SITE_CONFIG'],
  ];
  console.log('\n▶ Step 3 / 3: 检查全部 8 张表 ...');
  for (const [label, envKey] of tables) {
    const tid = process.env[envKey];
    if (!tid) { console.log(`  ⏭  ${label.padEnd(8)} (${envKey}) 未配置`); continue; }
    if (!process.env.LARK_BASE_TOKEN) { console.log(`  ⏭  ${label.padEnd(8)} 缺 LARK_BASE_TOKEN`); continue; }
    try {
      const token = await getToken();
      const data = await listOne(token, tid);
      console.log(`  ✅ ${label.padEnd(8)} 共 ${data.total} 条`);
    } catch (e) {
      console.log(`  ❌ ${label.padEnd(8)} 失败：${e.message}`);
    }
  }

  console.log('\n✨ 测试完成。');
}

main().catch(e => { console.error('💥', e); process.exit(1); });
