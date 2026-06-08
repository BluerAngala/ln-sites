import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new', args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.setCacheEnabled(false);
for (const [name, url] of [
  ['cards-zh-cases', 'http://localhost:4321/cases'],
  ['cards-zh-team',  'http://localhost:4321/team'],
  ['cards-en-cases', 'http://localhost:4321/en/cases'],
  ['cards-en-team',  'http://localhost:4321/en/team'],
  ['cards-zh-home',  'http://localhost:4321/'],
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
