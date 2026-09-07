import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';
import type { Dictionary, Lang, NavItem, PageId, SectionId } from './types';
import { LANGS, PAGES, PAGE_LANGS, SECTION_IDS } from './types';
import { en } from './en';
import { hi } from './hi';
import { ru } from './ru';

export { LANGS, PAGES, PAGE_LANGS, SECTION_IDS };
export type { Dictionary, Lang, NavItem, PageId, SectionId };

const DICTS: Record<Lang, Dictionary> = { en, hi, ru };

/** BCP-47 теги для hreflang / og:locale. */
export const LOCALE_TAGS: Record<Lang, string> = {
  en: 'en-IN',
  hi: 'hi-IN',
  ru: 'ru-RU',
};

/** Самоназвания языков (для переключателя). */
export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  hi: 'हिन्दी',
  ru: 'Русский',
};

/** Короткие подписи для компактного переключателя (мобильный хедер). */
export const LANG_SHORT: Record<Lang, string> = {
  en: 'EN',
  hi: 'हिं',
  ru: 'RU',
};

export function getDict(lang: Lang): Dictionary {
  return DICTS[lang];
}

/** Относительный путь к странице `page` на локали `lang` с учётом base и trailingSlash. */
export function pagePath(lang: Lang, page: PageId = 'home', hash?: SectionId | string): string {
  const segment = PAGES[page];
  const path = segment ? getRelativeLocaleUrl(lang, segment) : getRelativeLocaleUrl(lang);
  return hash ? `${path}#${hash}` : path;
}

/** Абсолютный URL страницы `page` на локали `lang` (canonical, hreflang, og:url). */
export function pageUrl(lang: Lang, page: PageId = 'home'): string {
  const segment = PAGES[page];
  return segment ? getAbsoluteLocaleUrl(lang, segment) : getAbsoluteLocaleUrl(lang);
}

/** Относительный путь к корню локали (главная). */
export function localePath(lang: Lang, hash?: SectionId | string): string {
  return pagePath(lang, 'home', hash);
}

/** Абсолютный URL корня локали. */
export function localeUrl(lang: Lang): string {
  return pageUrl(lang, 'home');
}

/** Навигация по секциям главной: якоря на самой главной, полные ссылки с других страниц. */
export function sectionNav(lang: Lang, dict: Dictionary, onHome = true): NavItem[] {
  return SECTION_IDS.map((id) => ({
    href: onHome ? sectionHref(id) : pagePath(lang, 'home', id),
    label: dict.nav[id],
  }));
}

/** Ссылка на секцию текущей страницы. */
export function sectionHref(id: SectionId): string {
  return `#${id}`;
}
