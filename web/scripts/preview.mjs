#!/usr/bin/env node
/**
 * 截图脚本：把首页和关键内页截下来给老板/设计师看
 * 用 macOS 自带的 Google Chrome（通过 puppeteer-core 驱动）
 */
import puppeteer from 'puppeteer-core';
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'preview');
if (!existsSync(OUT)) mkdirSync(OUT);

const BASE = process.env.PREVIEW_URL || 'http://localhost:4322';

const pages = [
  { name: '01-home',          url: `${BASE}/`,                                          desc: '首页' },
  { name: '02-home-stats',    url: `${BASE}/#about`,                                    desc: '首页（向下滚动）' },
  { name: '03-about',         url: `${BASE}/about`,                                     desc: '关于岭南' },
  { name: '04-practice',      url: `${BASE}/practice`,                                  desc: '业务领域' },
  { name: '05-team-list',     url: `${BASE}/team`,                                      desc: '律师列表' },
  { name: '06-team-detail',   url: `${BASE}/team/wang-bo`,                              desc: '律师详情' },
  { name: '07-cases-list',    url: `${BASE}/cases`,                                     desc: '案例列表' },
  { name: '08-case-detail',   url: `${BASE}/cases/cross-border-acquisition-2023`,       desc: '案例详情' },
  { name: '09-news-list',     url: `${BASE}/news`,                                      desc: '资讯列表' },
  { name: '10-news-detail',   url: `${BASE}/news/2025-chambers-ranking`,                desc: '资讯详情' },
  { name: '11-honors',        url: `${BASE}/honors`,                                    desc: '荣誉奖项' },
  { name: '12-contact',       url: `${BASE}/contact`,                                   desc: '委托咨询' },
];

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  for (const p of pages) {
    console.log(`▶ ${p.desc.padEnd(20)} ${p.url}`);
    await page.goto(p.url, { waitUntil: 'networkidle0', timeout: 30000 });
    // 等字体加载
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(r => setTimeout(r, 500));
    const out = join(OUT, `${p.name}.png`);
    await page.screenshot({ path: out, fullPage: true });
    console.log(`  ✓ ${out}`);
  }

  // 再截一张首页的「首屏」（不滚动）
  console.log('▶ 首页首屏');
  await page.goto(BASE + '/', { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: join(OUT, '00-home-fold.png'), fullPage: false });
  console.log(`  ✓ ${join(OUT, '00-home-fold.png')}`);

  console.log('\n✨ 完成。所有截图在 preview/ 目录。');
} catch (e) {
  console.error('❌ 截图失败：', e.message);
  process.exit(1);
} finally {
  await browser.close();
}
