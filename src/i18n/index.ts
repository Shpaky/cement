import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';
import type { Dictionary, Lang, SectionId } from './types';
import { LANGS, SECTION_IDS } from './types';
import { en } from './en';
import { hi } from './hi';
import { ru } from './ru';

export { LANGS, SECTION_IDS };
export type { Dictionary, Lang, SectionId };

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

/** Относительный путь к странице локали с учётом base и trailingSlash. */
export function localePath(lang: Lang, hash?: SectionId | string): string {
  const path = getRelativeLocaleUrl(lang);
  return hash ? `${path}#${hash}` : path;
}

/** Абсолютный URL страницы локали (canonical, hreflang, og:url). */
export function localeUrl(lang: Lang): string {
  return getAbsoluteLocaleUrl(lang);
}

/** Ссылка на секцию текущей страницы. */
export function sectionHref(id: SectionId): string {
  return `#${id}`;
}
