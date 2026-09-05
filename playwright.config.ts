import { defineConfig, devices } from '@playwright/test';

export const BASE_PATH = '/cement';
export const PORT = 4321;
export const BASE_URL = `http://localhost:${PORT}${BASE_PATH}`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    // Astro 7 в среде AI-агента уводит preview в фон; ASTRO_PREVIEW_BACKGROUND (любое
    // непустое значение) отключает автодетект, --ignore-lock не трогает lock-файл.
    command: `npx astro preview --port ${PORT} --ignore-lock`,
    env: { ASTRO_PREVIEW_BACKGROUND: 'false' },
    url: `${BASE_URL}/`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
