# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Правила проекта

## Продукт
Сайт-визитка (лендинг) российского производителя цемента и гидроизоляции
(добавка D5, сухая смесь D5 Aqua Stop) для рынка Индии под маркой «Made in Russia».
Главная — B2B; страница `/home-builders/` — B2C для частных застройщиков.
Целевое действие — связаться (телефон / e-mail / WhatsApp / Telegram), форм
отправки нет. Единственный клиентский расчёт — калькулятор мешков на
`/home-builders/` (ванильный `<script>`, без фреймворков). Визуальный стиль —
по мотивам madeinrussia.com (navy `brand-800`, blue `brand-600/500`,
белый фон, карточная сетка).

Локали: `en` (основная, корень `/`), `hi` (`/hi/`), `ru` (`/ru/`).
Страница `/home-builders/` есть только на `en` и `hi` (`PAGE_LANGS` в `src/i18n/types.ts`);
с RU ссылка ведёт на EN-версию. Хинди-тексты — черновик до вычитки носителем.

Цифры по D5 (дозировка, класс W, расход, упаковка) не публикуются до получения TDS
производителя: в словарях они `null`, строки скрыты; TDS/SDS в `src/data/docs.ts`
помечены «coming soon», фальшивые PDF не публикуем. См. `PLAN.md`.

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
npm run test:a11y      # Playwright + axe, 5 страниц x 3 вьюпорта (сам поднимает preview)
npm run shots          # скриншоты 360/768/1280 -> screenshots/<lang>-<w>.png (нужен build)
npm run shots -- --lang=en,hi --section=hero   # только локали / только элемент #hero
npm run shots -- --page=home-builders          # страница застройщиков (en, hi)
npm run og             # OG-картинки public/og/*.png (Chromium + шрифты сайта + sharp)
npm run check:budget   # JS на страницу в dist/ <= 50 КБ
npm run lighthouse     # LHCI на Chromium из Playwright, пороги в lighthouserc.cjs
```
Один тест: `npx playwright test -g "a11y hi /hi/ @ 360px"`.

## Структура
- `src/styles/global.css` — ЕДИНСТВЕННЫЙ источник токенов (`@theme`), `@font-face`,
  базовые стили, отключение анимаций при `prefers-reduced-motion`.
- `src/assets/fonts/` — self-hosted woff2: Manrope (latin/cyrillic), Noto Sans Devanagari
  (подключается только для `lang="hi"` через `html[lang='hi'] body`).
- `src/i18n/` — `types.ts` (тип Dictionary, реестр страниц `PAGES`/`PAGE_LANGS`),
  `en.ts`/`hi.ts`/`ru.ts`, `index.ts` (getDict, pagePath/pageUrl, sectionNav).
  `home-builders/` — отдельный словарь страницы застройщиков (en, hi).
  Все тексты только здесь, компоненты получают `dict`/`hb` пропсом.
- `src/data/` — нелокализуемые данные: `company.ts` (контакты, `whatsappLink`),
  `products.ts` (тип/группа продукта и набор строк карточки), `calculator.ts`
  (коэффициенты, `null` до TDS), `docs.ts` (TDS/SDS, `href: null` = «скоро»).
- `src/layouts/Base.astro` — `<html lang>`, meta/OG/canonical/hreflang по `page`,
  JSON-LD Organization + доп. объекты через проп `jsonLd`.
- `src/components/` — Header (nav-проп от оболочки страницы), Footer, LangSwitcher,
  ProductCard, примитивы; `sections/` — секции главной; `home-builders/` — секции
  страницы застройщиков (BagCalculator и StickyCta содержат `<script>`).
- `src/Landing.astro` / `src/HomeBuilders.astro` — порядок секций и навигация страницы.
- `src/pages/` — `index.astro`, `hi/`, `ru/` (Landing); `home-builders.astro`,
  `hi/home-builders.astro` (HomeBuilders); `404.astro`.
- `scripts/` — screenshots, og, check-budget, check-tokens, lighthouse, preview-server.
- `tests/a11y.spec.ts` — axe по всем страницам и вьюпортам (список `ROUTES`).

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
- Рабочая ветка `devel`; крупные задачи — в feature-ветках от `master` (сейчас
  `waterproofing-admixtures`, см. `PLAN.md`), слияние в `devel`/`master` только по команде.
  `master` — только релизы (деплой на Pages по push в `master` через
  `.github/workflows/deploy.yml`; CI — `ci.yml` на push в `devel`/feature-ветку и PR в `master`).
- Одна секция лендинга = один коммит (`feat(<section>): ...`), push после коммита.
- Перед коммитом: `npm run build && npm run lint && npm run test:a11y`
- После каждой секции сделать скриншоты на 360/768/1280 (`npm run shots`) и показать.
- Шапка: десктопное меню от `xl`, полные названия языков от `2xl` — при добавлении
  пунктов проверять ширину на 1280 (RU-подписи самые длинные).
