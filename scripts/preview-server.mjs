// Общий помощник: поднимает `astro preview` на свободном порту и ждёт готовности.
import { spawn } from 'node:child_process';

export const BASE_PATH = '/cement';

/**
 * @param {number} port
 * @returns {Promise<{ url: string, close: () => void }>}
 */
export async function startPreview(port = 4321) {
  // ASTRO_PREVIEW_BACKGROUND отключает авто-фон в среде AI-агента (Astro 7),
  // --ignore-lock позволяет держать несколько preview на разных портах.
  const child = spawn('npx', ['astro', 'preview', '--port', String(port), '--ignore-lock'], {
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, FORCE_COLOR: '0', ASTRO_PREVIEW_BACKGROUND: 'false' },
  });
  child.stderr.on('data', (d) => process.stderr.write(d));

  const url = `http://localhost:${port}${BASE_PATH}`;
  const deadline = Date.now() + 60_000;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`${url}/`);
      if (res.ok) return { url, close: () => child.kill('SIGTERM') };
    } catch {
      /* сервер ещё не поднялся */
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  child.kill('SIGTERM');
  throw new Error(`astro preview не поднялся за 60с на ${url}`);
}
