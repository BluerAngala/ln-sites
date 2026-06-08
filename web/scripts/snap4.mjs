import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new', args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.setCacheEnabled(false);
for (const [name, url] of [
  ['v2-en-team',  'http://localhost:4322/en/team/'],
  ['v2-en-home',  'http://localhost:4322/en/'],
  ['v2-en-news',  'http://localhost:4322/en/news/'],
  ['v2-en-case',  'http://localhost:4322/en/cases/cross-border-acquisition-2023/'],
  ['v2-en-about', 'http://localhost:4322/en/about/'],
  ['v2-en-contact', 'http://localhost:4322/en/contact/'],
]) {
  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: `/Users/bluer/Documents/trae_projects/岭南所官网/preview/${name}.png`, fullPage: false });
    console.log(`✓ ${name}`);
  } catch (e) { console.error(`✗ ${name}: ${e.message}`); }
}
await browser.close();
