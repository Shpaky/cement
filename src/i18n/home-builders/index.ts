import type { HbDictionary, HbLang, HbSectionId } from './types';
import { HB_SECTION_IDS } from './types';
import { hbEn } from './en';
import { hbHi } from './hi';

export { HB_SECTION_IDS };
export type { HbDictionary, HbLang, HbSectionId };

const DICTS: Record<HbLang, HbDictionary> = { en: hbEn, hi: hbHi };

export function getHbDict(lang: HbLang): HbDictionary {
  return DICTS[lang];
}

/** Ссылка на секцию страницы застройщиков. */
export function hbSectionHref(id: HbSectionId): string {
  return `#${id}`;
}
