// Бюджет JS: суммарный размер скриптов на каждой HTML-странице в dist/ <= 50 КБ.
// Учитываются внешние <script src> (файлы из dist) и инлайновые <script>.
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = 'dist';
const LIMIT = 50 * 1024;
const BASE_PATH = '/cement';

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.name.endsWith('.html')) yield p;
  }
}

let failed = false;
const rows = [];

for await (const html of walk(DIST)) {
  const src = await readFile(html, 'utf8');
  let total = 0;
  const scriptTag = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  for (const m of src.matchAll(scriptTag)) {
    const attrs = m[1];
    const srcAttr = /\bsrc=["']([^"']+)["']/i.exec(attrs);
    if (srcAttr) {
      let url = srcAttr[1];
      if (/^https?:/i.test(url)) continue; // внешние не считаем (их и не должно быть)
      if (url.startsWith(BASE_PATH)) url = url.slice(BASE_PATH.length);
      const file = join(DIST, url);
      try {
        total += (await stat(file)).size;
      } catch {
        console.warn(`  ! не найден ${file} (из ${html})`);
      }
    } else if (!/\btype=["'](application\/ld\+json|application\/json)["']/i.test(attrs)) {
      total += Buffer.byteLength(m[2], 'utf8');
    }
  }
  const ok = total <= LIMIT;
  if (!ok) failed = true;
  rows.push({
    page: relative(DIST, html),
    js: `${(total / 1024).toFixed(1)} KB`,
    ok: ok ? 'ok' : 'OVER',
  });
}

console.table(rows);
if (failed) {
  console.error(`Бюджет JS превышен (лимит ${LIMIT / 1024} KB)`);
  process.exit(1);
}
console.log(`JS-бюджет соблюдён (лимит ${LIMIT / 1024} KB на страницу)`);
