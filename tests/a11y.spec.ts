import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/** Локали → путь относительно base. Порядок совпадает с astro.config.mjs. */
const LOCALES: Record<string, string> = { en: '/', hi: '/hi/', ru: '/ru/' };

/** Контрольные вьюпорты из CLAUDE.md. */
const VIEWPORTS = [
  { name: 'mobile', width: 360, height: 780 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
];

for (const [lang, path] of Object.entries(LOCALES)) {
  for (const vp of VIEWPORTS) {
    test(`a11y ${lang} @ ${vp.width}px`, async ({ page, baseURL }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      const res = await page.goto(`${baseURL}${path}`);
      expect(res?.status(), 'page responds 200').toBe(200);

      await expect(page.locator('html')).toHaveAttribute('lang', lang);
      await expect(page.locator('main')).toHaveCount(1);
      await expect(page.locator('h1')).toHaveCount(1);

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
        .analyze();

      const report = results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        nodes: v.nodes.slice(0, 5).map((n) => n.target.join(' ')),
      }));

      expect(report, JSON.stringify(report, null, 2)).toEqual([]);
    });
  }
}
