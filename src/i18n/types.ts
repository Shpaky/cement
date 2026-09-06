/** Поддерживаемые локали. Порядок = порядок в переключателе языков. */
export const LANGS = ['en', 'hi', 'ru'] as const;
export type Lang = (typeof LANGS)[number];

/** Якоря секций лендинга. Порядок = порядок в навигации. */
export const SECTION_IDS = [
  'about',
  'products',
  'advantages',
  'logistics',
  'certificates',
  'faq',
  'contacts',
] as const;
export type SectionId = (typeof SECTION_IDS)[number];

/** Единая схема всех текстов. Каждый словарь обязан ей соответствовать (`satisfies`). */
export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  common: {
    skipToContent: string;
    mainNav: string;
    footerNav: string;
    language: string;
    menuOpen: string;
    menuClose: string;
    contactCta: string;
    brandLine: string;
    brandTagline: string;
  };
  nav: Record<SectionId, string>;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaCall: string;
    ctaWhatsapp: string;
    badges: string[];
    illustrationAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
    highlights: { title: string; text: string }[];
    imageAlt: string;
  };
  company: {
    name: string;
    address: string;
  };
  footer: {
    aboutText: string;
    navTitle: string;
    contactsTitle: string;
    phoneRu: string;
    phoneIn: string;
    email: string;
    whatsapp: string;
    telegram: string;
    rights: string;
    draftNotice?: string;
  };
}
