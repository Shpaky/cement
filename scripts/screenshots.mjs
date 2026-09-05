// Скриншоты страниц на контрольных ширинах (CLAUDE.md: 360/768/1280).
// Использование (после `npm run build`):
//   npm run shots                      — все локали, полная страница
//   npm run shots -- --lang=en,hi      — только указанные локали
//   npm run shots -- --section=hero    — только элемент с id="hero"
import { mkdir } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import { startPreview } from './preview-server.mjs';

const LOCALES = { en: '/', hi: '/hi/', ru: '/ru/' };
const WIDTHS = [360, 768, 1280];

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v = 'true'] = a.replace(/^--/, '').split('=');
    return [k, v];
  }),
);
const langs = (args.lang ? args.lang.split(',') : Object.keys(LOCALES)).filter((l) => l in LOCALES);
const section = args.section;
const outDir = 'screenshots';

await mkdir(outDir, { recursive: true });
const server = await startPreview(4322);
const browser = await chromium.launch();

try {
  for (const lang of langs) {
    for (const width of WIDTHS) {
      const page = await browser.newPage({
        viewport: { width, height: 900 },
        deviceScaleFactor: 1,
        reducedMotion: 'reduce',
      });
      await page.goto(`${server.url}${LOCALES[lang]}`, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const file = `${outDir}/${section ? `${section}-` : ''}${lang}-${width}.png`;
      if (section) {
        const el = page.locator(`#${section}`);
        await el.scrollIntoViewIfNeeded();
        await el.screenshot({ path: file });
      } else {
        await page.screenshot({ path: file, fullPage: true });
      }
      console.log(file);
      await page.close();
    }
  }
} finally {
  await browser.close();
  server.close();
}
