import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

for (const [name, url] of [
  ['en-home', 'http://localhost:4322/en/'],
  ['en-about', 'http://localhost:4322/en/about/'],
  ['en-team', 'http://localhost:4322/en/team/'],
  ['en-lawyer', 'http://localhost:4322/en/team/wang-bo/'],
  ['en-case', 'http://localhost:4322/en/cases/cross-border-acquisition-2023/'],
]) {
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({
    path: `/Users/bluer/Documents/trae_projects/岭南所官网/preview/${name}.png`,
    fullPage: false,
  });
  console.log(`✓ ${name}`);
}
await browser.close();
