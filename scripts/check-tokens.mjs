// Правило CLAUDE.md: только токены из @theme (src/styles/global.css).
// Запрещены: произвольные значения Tailwind (`text-[13px]`, `bg-[#a3a3a3]`, `w-[42%]`)
// и hex-цвета в разметке/скриптах. Исключение — сам файл токенов.
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = 'src';
const ALLOW = new Set(['src/styles/global.css']);
const EXT = /\.(astro|ts|tsx|mjs|js|css|svg)$/;

const ARBITRARY = /(?:^|[\s"'`:!])[a-z][a-z0-9-]*-\[[^\]\s]+\]/g; // класс с `-[...]`
const HEX = /#[0-9a-fA-F]{3,8}\b/g;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (EXT.test(entry.name)) yield p;
  }
}

const problems = [];
for await (const file of walk(ROOT)) {
  if (ALLOW.has(file)) continue;
  const text = await readFile(file, 'utf8');
  const lines = text.split('\n');
  lines.forEach((line, i) => {
    if (line.includes('tokens-ignore')) return;
    for (const m of line.matchAll(ARBITRARY)) {
      problems.push(`${file}:${i + 1}: произвольное значение Tailwind: ${m[0].trim()}`);
    }
    for (const m of line.matchAll(HEX)) {
      // допускаем hex в комментариях с TODO/ссылками на токены? — нет, правило жёсткое
      problems.push(`${file}:${i + 1}: hex-цвет вне токенов: ${m[0]}`);
    }
  });
}

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} нарушений правила «только токены»`);
  process.exit(1);
}
console.log('Токены: нарушений нет');
