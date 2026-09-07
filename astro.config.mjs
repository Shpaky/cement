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
      // Страница застройщиков есть только на EN и HI — убираем ru-RU из alternates.
      serialize(item) {
        if (item.url.includes('/home-builders/') && item.links) {
          item.links = item.links.filter((link) => link.lang !== 'ru-RU');
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
