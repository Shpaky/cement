import type { DocId } from '../data/docs';
import type { ProductGroup, ProductId, SpecKey } from '../data/products';

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

/** Страницы сайта → сегмент пути после префикса локали ('' = корень локали). */
export const PAGES = {
  home: '',
  homeBuilders: 'home-builders',
} as const;
export type PageId = keyof typeof PAGES;

/** На каких локалях существует страница (hreflang, переключатель языков). */
export const PAGE_LANGS: Record<PageId, readonly Lang[]> = {
  home: LANGS,
  homeBuilders: ['en', 'hi'],
};

/** Пункт навигации, собранный оболочкой страницы (Landing / HomeBuilders). */
export interface NavItem {
  href: string;
  label: string;
  /** Текущая страница (aria-current="page"). */
  current?: boolean;
}

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
  products: {
    eyebrow: string;
    title: string;
    lead: string;
    groups: Record<ProductGroup, { title: string; lead: string }>;
    specLabels: Record<SpecKey | 'benefits' | 'applications', string>;
    /** Тексты карточек; структура и набор строк — в src/data/products.ts. null = скрыть строку. */
    items: Record<
      ProductId,
      {
        name: string;
        tagline: string;
        specs: Partial<Record<SpecKey, string | null>>;
        benefits?: string[];
        applications: string[];
      }
    >;
    tdsNote: string;
    packaging: { title: string; items: { title: string; text: string }[] };
    cta: string;
    /** Текст префилла WhatsApp для кнопки «Запросить прайс-лист». */
    rfqText: string;
    note: string;
  };
  logistics: {
    eyebrow: string;
    title: string;
    lead: string;
    routeLabel: string;
    steps: { title: string; text: string }[];
    details: { title: string; items: string[] }[];
    note: string;
  };
  certificates: {
    eyebrow: string;
    title: string;
    lead: string;
    /** Группы стандартов: цемент, гидроизоляция. */
    groups: { title: string; standards: { code: string; title: string; text: string }[] }[];
    documentsTitle: string;
    /** Документы на отгрузку; `files` — TDS/SDS из src/data/docs.ts (ссылка или «скоро»). */
    documents: { text: string; files?: DocId[] }[];
    docLabels: Record<DocId, string>;
    comingSoon: string;
    scansTitle: string;
    scansPlaceholder: string;
    note: string;
  };
  facts: {
    label: string;
    items: { value: string; label: string }[];
    note: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { q: string; a: string }[];
    moreTitle: string;
    moreCta: string;
  };
  contacts: {
    eyebrow: string;
    title: string;
    lead: string;
    channels: {
      key: 'phoneIn' | 'phoneRu' | 'email' | 'whatsapp' | 'telegram';
      label: string;
      hint: string;
    }[];
    hoursTitle: string;
    hours: string[];
    locations: { title: string; name: string; address: string; mapCta: string }[];
    note: string;
  };
  advantages: {
    eyebrow: string;
    title: string;
    lead: string;
    /** Акцентная карточка на всю ширину (один поставщик цемента и гидроизоляции). */
    featured: { title: string; text: string };
    items: { title: string; text: string }[];
    /** Блок «Кому поставляем»: заголовок и типы покупателей. */
    buyersTitle: string;
    buyers: string[];
  };
  company: {
    name: string;
    address: string;
  };
  notFound: {
    title: string;
    text: string;
    cta: string;
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
