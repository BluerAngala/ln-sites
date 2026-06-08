import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new', args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.setCacheEnabled(false);
for (const [name, url] of [
  ['full-zh-cases',  'http://localhost:4321/cases'],
  ['full-en-cases',  'http://localhost:4321/en/cases'],
  ['full-en-team',   'http://localhost:4321/en/team'],
]) {
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 500));
  // 滚动到案例区域
  await page.evaluate(() => window.scrollTo(0, 600));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `/Users/bluer/Documents/trae_projects/岭南所官网/preview/${name}.png`, fullPage: false });
  console.log(`✓ ${name}`);
}
await browser.close();
