/**
 * Технические документы (TDS/SDS) линейки D5. Пути — относительно base
 * (`import.meta.env.BASE_URL`), файлы кладутся в `public/docs/`.
 *
 * `href: null` = документ ещё не получен от производителя: в разметке
 * выводится метка «скоро», а не ссылка. Фальшивые PDF не публикуем.
 */
export type DocId = 'd5Tds' | 'd5Sds' | 'aquaStopTds';

export const DOCS: Record<DocId, { href: string | null }> = {
  d5Tds: { href: null }, // TODO: 'docs/d5-tds-en.pdf'
  d5Sds: { href: null }, // TODO: 'docs/d5-sds-en.pdf'
  aquaStopTds: { href: null }, // TODO: 'docs/aquastop-tds-en.pdf'
};
