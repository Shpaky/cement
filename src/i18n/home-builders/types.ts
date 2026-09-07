import type { WorkId } from '../../data/calculator';
import type { Lang } from '../types';

/** Локали, на которых существует страница /home-builders/ (см. PAGE_LANGS). */
export type HbLang = Extract<Lang, 'en' | 'hi'>;

/** Якоря секций страницы. Порядок = порядок в навигации. */
export const HB_SECTION_IDS = [
  'materials',
  'waterproofing',
  'calculator',
  'steps',
  'whereToBuy',
  'faq',
] as const;
export type HbSectionId = (typeof HB_SECTION_IDS)[number];

/** Схема текстов страницы для частных застройщиков. */
export interface HbDictionary {
  meta: { title: string; description: string };
  nav: Record<HbSectionId, string>;
  /** Ссылка в шапке обратно на B2B-главную. */
  forBusiness: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaExpert: string;
    ctaCalc: string;
    ctaGuide: string;
    /** Префилл WhatsApp для «Спросить эксперта». */
    whatsappText: string;
    illustrationAlt: string;
  };
  materials: {
    eyebrow: string;
    title: string;
    lead: string;
    labels: { task: string; material: string; why: string };
    rows: { task: string; material: string; why: string }[];
    fullSpecs: string;
  };
  waterproofing: {
    eyebrow: string;
    title: string;
    lead: string;
    zones: { title: string; text: string }[];
    thesis: string;
    illustrationAlt: string;
  };
  calculator: {
    eyebrow: string;
    title: string;
    lead: string;
    workLabel: string;
    works: Record<WorkId, string>;
    modeLabel: string;
    modeArea: string;
    modeVolume: string;
    areaLabel: string;
    volumeLabel: string;
    thicknessLabel: string;
    resultTitle: string;
    gradeLabel: string;
    bagsLabel: string;
    d5Label: string;
    aquaStopLabel: string;
    /** Подпись вместо числа, пока коэффициент D5 = null. */
    perTds: string;
    emptyHint: string;
    whatsappCta: string;
    /** Шаблон префилла: {work}, {qty}, {bags}, {grade}. */
    whatsappText: string;
    /** Шаблон префилла для сухих смесей без расчёта мешков: {work}, {qty}. */
    whatsappTextNoBags: string;
    disclaimer: string;
  };
  steps: {
    eyebrow: string;
    title: string;
    lead: string;
    cementLabel: string;
    waterproofingLabel: string;
    items: { title: string; text: string; cement: string; waterproofing: string }[];
  };
  whereToBuy: {
    eyebrow: string;
    title: string;
    lead: string;
    statesTitle: string;
    states: string[];
    cta: string;
    /** Префилл WhatsApp; город пользователь вписывает сам. */
    whatsappText: string;
    /** Подпись контейнера под будущую таблицу дилеров по штатам. */
    dealersNote: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { q: string; a: string }[];
    moreTitle: string;
    moreCta: string;
  };
  sticky: {
    label: string;
    call: string;
    whatsapp: string;
  };
}
