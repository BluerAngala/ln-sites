#!/usr/bin/env node
/**
 * 性能诊断：抓首页网络瀑布图，列出所有资源的：
 *   - URL
 *   - 大小
 *   - 耗时
 *   - 是不是字体
 */
import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
  args: ['--no-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

const resources = [];
page.on('response', async (res) => {
  try {
    const url = res.url();
    const ct = res.headers()['content-type'] || '';
    const isFont = /\.(woff2?|ttf|otf|eot)(\?|$)/i.test(url) || /font/i.test(ct);
    if (isFont) {
      const buf = await res.buffer().catch(() => null);
      resources.push({
        url: url.replace('https://fonts.gstatic.com/', 'gstatic/'),
        size: buf?.length ?? 0,
        type: '字体',
        status: res.status(),
      });
    }
  } catch {}
});

const t0 = Date.now();
await page.goto('http://localhost:4322/', { waitUntil: 'domcontentloaded', timeout: 30000 });
const loadTime = Date.now() - t0;
await new Promise((r) => setTimeout(r, 4000)); // 等字体下载完

console.log(`\n⏱  首屏加载总耗时：${loadTime} ms\n`);
console.log('字体资源（按大小排序）：\n');
resources.sort((a, b) => b.size - a.size);
let totalFont = 0;
for (const r of resources) {
  totalFont += r.size;
  console.log(
    `  ${(r.size / 1024).toFixed(1).padStart(8)} KB  ${r.type}  ${r.status}  ${r.url.slice(0, 100)}`,
  );
}
console.log(`\n字体总大小：${(totalFont / 1024 / 1024).toFixed(2)} MB`);

// 触发一次 layout 看 FCP / LCP
const perf = await page.evaluate(() => {
  const nav = performance.getEntriesByType('navigation')[0];
  const paints = performance.getEntriesByType('paint');
  return {
    domContentLoaded: nav?.domContentLoadedEventEnd,
    loadEvent: nav?.loadEventEnd,
    fcp: paints.find((p) => p.name === 'first-contentful-paint')?.startTime,
  };
});
console.log('\n关键指标：');
console.log(`  FCP（首内容绘制）: ${perf.fcp?.toFixed(0)} ms`);
console.log(`  DOMContentLoaded:  ${perf.domContentLoaded?.toFixed(0)} ms`);
console.log(`  Load:              ${perf.loadEvent?.toFixed(0)} ms`);

await browser.close();
