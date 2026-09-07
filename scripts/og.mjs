// Генерация OG-картинок 1200×630 в public/og/.
// Рендерим HTML со шрифтами сайта (Manrope / Noto Sans Devanagari) в Chromium
// из Playwright, затем сжимаем PNG в палитру через sharp.
//   node scripts/og.mjs               — все карточки
//   node scripts/og.mjs --only=en,hi  — только указанные
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import sharp from 'sharp';

const OUT_DIR = 'public/og';
const FONT_DIR = 'src/assets/fonts';

/** Тексты карточек. Ключ = имя файла (public/og/<key>.png). */
const CARDS = {
  en: {
    lang: 'en',
    brand: 'Made in Russia · Cement',
    title: 'Russian cement & D5 waterproofing',
    subtitle: 'for India’s construction market',
    chips: ['OPC 43/53', 'PPC', 'D5 admixture', 'D5 Aqua Stop', 'FOB / CIF'],
  },
  hi: {
    lang: 'hi',
    brand: 'Made in Russia · सीमेंट',
    title: 'रूसी सीमेंट और D5 वॉटरप्रूफ़िंग',
    subtitle: 'भारत के निर्माण बाज़ार के लिए',
    chips: ['OPC 43/53', 'PPC', 'D5 एडमिक्सचर', 'D5 Aqua Stop', 'FOB / CIF'],
  },
  ru: {
    lang: 'ru',
    brand: 'Made in Russia · Цемент',
    title: 'Российский цемент и гидроизоляция D5',
    subtitle: 'для строительного рынка Индии',
    chips: ['OPC 43/53', 'PPC', 'Добавка D5', 'D5 Aqua Stop', 'FOB / CIF'],
  },
  'home-builders-en': {
    lang: 'en',
    brand: 'Made in Russia · Cement',
    title: 'Build your home on cement you can trust',
    subtitle: 'Leak-free walls, roof and bathroom — monsoon after monsoon',
    chips: ['Which cement for what', 'Waterproofing guide', 'Bag calculator'],
  },
  'home-builders-hi': {
    lang: 'hi',
    brand: 'Made in Russia · सीमेंट',
    title: 'भरोसेमंद सीमेंट पर अपना घर बनाएँ',
    subtitle: 'दीवारें, छत और बाथरूम — हर मानसून में रिसाव-मुक्त',
    chips: ['किस काम के लिए कौन-सा सीमेंट', 'वॉटरप्रूफ़िंग गाइड', 'बैग कैलकुलेटर'],
  },
};

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v = 'true'] = a.replace(/^--/, '').split('=');
    return [k, v];
  }),
);
const keys = (args.only ? args.only.split(',') : Object.keys(CARDS)).filter((k) => k in CARDS);

async function fontFace(family, file, range) {
  const data = (await readFile(`${FONT_DIR}/${file}`)).toString('base64');
  return `@font-face{font-family:'${family}';font-weight:400 800;font-display:block;
    src:url(data:font/woff2;base64,${data}) format('woff2');${range ? `unicode-range:${range};` : ''}}`;
}

const fonts = [
  await fontFace('Manrope', 'manrope-latin.woff2'),
  await fontFace('Manrope', 'manrope-cyrillic.woff2', 'U+0400-045F, U+0490-0491, U+2116'),
  await fontFace('Noto Sans Devanagari', 'noto-sans-devanagari.woff2'),
].join('\n');

/** Палитра = токены из src/styles/global.css (brand-800/900/500/400/100/50). */
function html(card) {
  const devanagari = card.lang === 'hi';
  const chips = card.chips.map((c) => `<span class="chip">${c}</span>`).join('');
  return `<!doctype html><html lang="${card.lang}"><head><meta charset="utf-8"><style>
${fonts}
html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{position:relative;box-sizing:border-box;padding:72px 80px;color:#fff;
  background:linear-gradient(135deg,#203b80 0%,#203b80 45%,#16295a 100%);
  font-family:${devanagari ? "'Noto Sans Devanagari','Manrope'" : "'Manrope'"},sans-serif}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),
  linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px);background-size:48px 48px}
.circle{position:absolute;right:-120px;top:-260px;width:620px;height:620px;border-radius:50%;background:#0052a4;opacity:.55}
.head{position:relative;display:flex;align-items:center;gap:20px}
.brand{font-size:26px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#94c6ff}
h1{position:relative;margin:${devanagari ? '56px' : '64px'} 0 0;font-size:${card.title.length > 32 ? 68 : 80}px;
  line-height:1.08;font-weight:800;letter-spacing:-.02em;max-width:980px}
.sub{position:relative;margin:22px 0 0;font-size:36px;font-weight:500;color:#d6e6ff;max-width:980px}
.chips{position:absolute;left:80px;bottom:64px;display:flex;flex-wrap:wrap;gap:14px}
.chip{display:inline-block;padding:12px 24px;border-radius:9999px;background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.22);font-size:26px;font-weight:600;color:#eef4ff}
</style></head><body>
<div class="grid"></div><div class="circle"></div>
<div class="head">
  <svg viewBox="0 0 40 40" width="64" height="64" aria-hidden="true">
    <path fill="#fff" d="M20 2 4 11l16 9 16-9L20 2Z"/>
    <path fill="#007bff" d="M4 11v18l16 9V20L4 11Z"/>
    <path fill="#2196f3" d="M36 11v18l-16 9V20l16-9Z"/>
  </svg>
  <span class="brand">${card.brand}</span>
</div>
<h1>${card.title}</h1>
<p class="sub">${card.subtitle}</p>
<div class="chips">${chips}</div>
</body></html>`;
}

await mkdir(OUT_DIR, { recursive: true });
const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  for (const key of keys) {
    await page.setContent(html(CARDS[key]), { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const raw = await page.screenshot({ type: 'png' });
    const png = await sharp(raw)
      .png({ palette: true, quality: 90, dither: 0, compressionLevel: 9 })
      .toBuffer();
    const file = `${OUT_DIR}/${key}.png`;
    await writeFile(file, png);
    console.log(`${file}  ${(png.length / 1024).toFixed(0)} KB`);
  }
} finally {
  await browser.close();
}
