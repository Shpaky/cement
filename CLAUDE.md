# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Правила проекта

## Продукт
Сайт-визитка (лендинг) российского производителя цемента для рынка Индии
под маркой «Made in Russia». B2B-аудитория. Целевое действие — связаться
(телефон / e-mail / WhatsApp / Telegram), форм нет. Визуальный стиль —
по мотивам madeinrussia.com (navy `brand-800`, blue `brand-600/500`,
белый фон, карточная сетка).

Локали: `en` (основная, корень `/`), `hi` (`/hi/`), `ru` (`/ru/`).
Хинди-тексты — черновик до вычитки носителем.

## Стек
Astro 7 (Node >= 22.12), TypeScript strict, Tailwind 4 (`@tailwindcss/vite`).
Статическая сборка, клиентских фреймворков нет.
Никаких новых зависимостей без явного согласования. Утверждённый набор
dev-зависимостей — см. `package.json` (astro, sitemap, check, sharp,
tailwind, eslint/prettier с astro-плагинами, playwright + axe, lhci).

## Команды
```
npm run dev            # dev-сервер
npm run build          # сборка в dist/ (base=/cement)
npm run preview        # отдать dist/ (Astro 7 в среде агента уводит preview в фон:
                       #   ASTRO_PREVIEW_BACKGROUND=false npx astro preview --ignore-lock)
npm run lint           # astro check + eslint + prettier --check + lint:tokens
npm run format         # prettier --write
npm run test:a11y      # Playwright + axe, 3 локали x 3 вьюпорта (сам поднимает preview)
npm run shots          # скриншоты 360/768/1280 -> screenshots/<lang>-<w>.png (нужен build)
npm run shots -- --lang=en,hi --section=hero   # только локали / только элемент #hero
npm run check:budget   # JS на страницу в dist/ <= 50 КБ
npm run lighthouse     # LHCI на Chromium из Playwright, пороги в lighthouserc.cjs
```
Один тест: `npx playwright test -g "a11y hi @ 360px"`.

## Структура
- `src/styles/global.css` — ЕДИНСТВЕННЫЙ источник токенов (`@theme`), `@font-face`,
  базовые стили, отключение анимаций при `prefers-reduced-motion`.
- `src/assets/fonts/` — self-hosted woff2: Manrope (latin/cyrillic), Noto Sans Devanagari
  (подключается только для `lang="hi"` через `html[lang='hi'] body`).
- `src/i18n/` — `types.ts` (тип Dictionary), `en.ts`/`hi.ts`/`ru.ts`, `index.ts`
  (getDict, localePath). Все тексты только здесь, компоненты получают `dict` пропсом.
- `src/layouts/Base.astro` — `<html lang>`, meta/OG/canonical/hreflang, JSON-LD.
- `src/components/` — Header, Footer, LangSwitcher, примитивы; `sections/` — секции лендинга.
- `src/Landing.astro` — порядок секций, единый для всех локалей.
- `src/pages/index.astro`, `hi/index.astro`, `ru/index.astro` — рендерят Landing.
- `scripts/` — screenshots, check-budget, check-tokens, lighthouse, preview-server.
- `tests/a11y.spec.ts` — axe по всем локалям и вьюпортам.

## Жёсткие ограничения
- Бюджет JS: <= 50 КБ на страницу (`npm run check:budget`)
- Lighthouse: Perf/A11y/BP >= 95, SEO = 100 (`npm run lighthouse`)
- Только токены из `@theme` в `src/styles/global.css`. Произвольные значения
  (`text-[13px]`, `bg-[#a3a3a3]`, hex в разметке/SVG) запрещены — `npm run lint:tokens`.
  В инлайн-SVG использовать `currentColor` и классы.
- Ссылки и ассеты учитывают `base` (`import.meta.env.BASE_URL`), сайт живёт
  на `https://shpaky.github.io/cement/`.
- Семантический HTML. Каждая интерактивная сущность доступна с клавиатуры.
  Компилятор Astro 7 строгий: все не-void теги закрываются.
- Все анимации отключаются при prefers-reduced-motion
- Изображения только через `<Image />`/`<Picture />` из astro:assets, avif/webp

## Процесс
- Рабочая ветка `devel`; `master` — только релизы (деплой на Pages по push в `master`
  через `.github/workflows/deploy.yml`; CI — `ci.yml` на push в `devel` и PR в `master`).
- Одна секция лендинга = один коммит (`feat(<section>): ...`), push после коммита.
- Перед коммитом: `npm run build && npm run lint && npm run test:a11y`
- После каждой секции сделать скриншоты на 360/768/1280 (`npm run shots`) и показать.
