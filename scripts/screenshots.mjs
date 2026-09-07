// Скриншоты страниц на контрольных ширинах (CLAUDE.md: 360/768/1280).
// Использование (после `npm run build`):
//   npm run shots                      — все локали, полная страница
//   npm run shots -- --lang=en,hi      — только указанные локали
//   npm run shots -- --section=hero    — только элемент с id="hero"
//   npm run shots -- --page=home-builders — страница /home-builders/ (только её локали)
import { mkdir } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import { startPreview } from './preview-server.mjs';

const LOCALES = { en: '/', hi: '/hi/', ru: '/ru/' };
/** Страницы → локали, на которых они существуют (см. PAGE_LANGS в src/i18n/types.ts). */
const PAGES = { '': Object.keys(LOCALES), 'home-builders': ['en', 'hi'] };
const WIDTHS = [360, 768, 1280];

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v = 'true'] = a.replace(/^--/, '').split('=');
    return [k, v];
  }),
);
const pageSlug = args.page && args.page in PAGES ? args.page : '';
const langs = (args.lang ? args.lang.split(',') : PAGES[pageSlug]).filter((l) =>
  PAGES[pageSlug].includes(l),
);
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
      await page.goto(`${server.url}${LOCALES[lang]}${pageSlug ? `${pageSlug}/` : ''}`, {
        waitUntil: 'networkidle',
      });
      // Прокручиваем страницу, чтобы сработал loading="lazy", и ждём шрифты/картинки.
      await page.evaluate(async () => {
        const step = window.innerHeight;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo(0, 0);
        await document.fonts.ready;
        await Promise.all(
          Array.from(document.images)
            .filter((img) => !img.complete)
            .map((img) => new Promise((r) => img.addEventListener('load', r, { once: true }))),
        );
      });
      const file = `${outDir}/${section ? `${section}-` : ''}${pageSlug ? `${pageSlug}-` : ''}${lang}-${width}.png`;
      if (section) {
        // Липкий хедер перекрывал бы элементный снимок — скрываем его только для скриншота.
        await page.addStyleTag({ content: 'header { visibility: hidden !important; }' });
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
