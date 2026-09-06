/**
 * Нелокализуемые данные компании. TODO: заменить плейсхолдеры реальными
 * контактами (телефоны, e-mail, мессенджеры) после получения брифа.
 */
export const company = {
  /** Домен/бренд для schema.org и OG. */
  brand: 'Made in Russia · Cement',
  phones: {
    ru: { display: '+7 000 000-00-00', href: 'tel:+70000000000' }, // TODO
    in: { display: '+91 00000 00000', href: 'tel:+910000000000' }, // TODO
  },
  email: 'sales@example.com', // TODO
  whatsapp: 'https://wa.me/70000000000', // TODO
  telegram: 'https://t.me/example', // TODO
  foundedYear: 2000, // TODO
} as const;
