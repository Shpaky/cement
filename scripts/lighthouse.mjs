// Запускает Lighthouse CI на Chromium из Playwright (не требует системного Chrome).
import { spawn } from 'node:child_process';
import { chromium } from '@playwright/test';

const chromePath = chromium.executablePath();
const child = spawn('npx', ['lhci', 'autorun', ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: { ...process.env, CHROME_PATH: chromePath },
});
child.on('exit', (code) => process.exit(code ?? 1));
