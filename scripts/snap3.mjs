import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.setCacheEnabled(false);
for (const [name, url] of [
  ['final-en-lawyer', 'http://localhost:4322/en/team/wang-bo/'],
  ['final-en-case', 'http://localhost:4322/en/cases/cross-border-acquisition-2023/'],
  ['final-en-news', 'http://localhost:4322/en/news/2025-chambers-ranking/'],
  ['final-en-contact', 'http://localhost:4322/en/contact/'],
  ['final-en-about', 'http://localhost:4322/en/about/'],
  ['final-en-team', 'http://localhost:4322/en/team/'],
]) {
  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.evaluateHandle('document.fonts.ready');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({
      path: `/Users/bluer/Documents/trae_projects/岭南所官网/preview/${name}.png`,
      fullPage: false,
    });
    console.log(`✓ ${name}`);
  } catch (e) {
    console.error(`✗ ${name}: ${e.message}`);
  }
}
await browser.close();
