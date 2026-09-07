/**
 * Нелокализуемые данные компании. TODO: заменить плейсхолдеры реальными
 * контактами (телефоны, e-mail, мессенджеры) после получения брифа.
 */
const whatsappNumber = '70000000000'; // TODO: номер WhatsApp в международном формате без «+»

export const company = {
  /** Домен/бренд для schema.org и OG. */
  brand: 'Made in Russia · Cement',
  phones: {
    ru: { display: '+7 000 000-00-00', href: 'tel:+70000000000' }, // TODO
    in: { display: '+91 00000 00000', href: 'tel:+910000000000' }, // TODO
  },
  email: 'sales@example.com', // TODO
  whatsapp: `https://wa.me/${whatsappNumber}`,
  telegram: 'https://t.me/example', // TODO
  foundedYear: 2000, // TODO
  maps: {
    india: 'https://maps.google.com/?q=Mumbai', // TODO: точный адрес офиса в Индии
    plant: 'https://maps.google.com/?q=Russia', // TODO: адрес завода
  },
} as const;

/** Ссылка на WhatsApp с заранее заполненным текстом сообщения. */
export function whatsappLink(text?: string): string {
  return text ? `${company.whatsapp}?text=${encodeURIComponent(text)}` : company.whatsapp;
}
