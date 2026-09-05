// Пороги из CLAUDE.md: Perf/A11y/BP >= 95, SEO = 100. Проверяются все три локали.
const BASE = 'http://localhost:4323/cement';

module.exports = {
  ci: {
    collect: {
      // ASTRO_PREVIEW_BACKGROUND отключает авто-фон preview в среде AI-агента (Astro 7)
      startServerCommand:
        'ASTRO_PREVIEW_BACKGROUND=false npx astro preview --port 4323 --ignore-lock',
      startServerReadyPattern: 'localhost:4323',
      startServerReadyTimeout: 60000,
      url: [`${BASE}/`, `${BASE}/hi/`, `${BASE}/ru/`],
      numberOfRuns: 1,
      settings: {
        preset: 'desktop',
        chromeFlags: '--headless=new --no-sandbox',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 1 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lighthouseci',
    },
  },
};
