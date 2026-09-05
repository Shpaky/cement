// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: https://shpaky.github.io/cement/
// При переезде на кастомный домен: поменять `site`, убрать `base`.
export default defineConfig({
  site: 'https://shpaky.github.io',
  base: '/cement',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-IN', hi: 'hi-IN', ru: 'ru-RU' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
