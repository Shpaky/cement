import type { Dictionary } from './types';

export const en = {
  meta: {
    title: 'Russian Cement for India — Made in Russia',
    description:
      'Cement manufacturer from Russia: OPC and PPC grades for the Indian market. Direct factory supply, sea freight to Indian ports, quality certified.',
  },
  common: {
    skipToContent: 'Skip to content',
    mainNav: 'Main navigation',
    footerNav: 'Footer navigation',
    language: 'Language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    contactCta: 'Contact us',
    brandLine: 'Made in Russia',
    brandTagline: 'Cement',
  },
  nav: {
    about: 'About',
    products: 'Products',
    advantages: 'Why us',
    logistics: 'Logistics',
    certificates: 'Certificates',
    faq: 'FAQ',
    contacts: 'Contacts',
  },
  hero: {
    eyebrow: 'Cement manufacturer · Russia → India',
    title: 'Russian cement for India’s construction market',
    lead: 'Direct supply of OPC and PPC cement from a Russian plant to Indian ports. Stable quality, competitive pricing, full export documentation.',
    ctaCall: 'Call India office',
    ctaWhatsapp: 'Write on WhatsApp',
    badges: ['OPC 43 / 53', 'PPC', 'Bulk & 50 kg bags', 'FOB / CIF'],
    illustrationAlt: 'Stylised cement blocks in brand colours',
  },
  about: {
    eyebrow: 'About the company',
    title: 'A Russian cement plant with a dedicated export desk for India',
    lead: 'We produce Portland cement at our own plant and ship it to Indian buyers under direct contracts — without intermediaries.',
    paragraphs: [
      'TODO: Company name operates a full-cycle cement plant in Russia: own limestone quarry, rotary kilns, grinding and packing lines, and an in-house laboratory that tests every batch before dispatch.',
      'Our export team works in Indian business hours, prepares documents for Indian customs and BIS requirements, and coordinates sea freight to the ports closest to your site.',
    ],
    highlights: [
      {
        title: 'Own production',
        text: 'Full cycle from quarry to packed product, batch-level quality control.',
      },
      {
        title: 'India-focused export',
        text: 'Contracts in USD/INR, Incoterms FOB / CIF, documents for Indian customs.',
      },
      {
        title: 'Predictable supply',
        text: 'Planned monthly volumes and shipping schedules agreed in advance.',
      },
    ],
    imageAlt: 'Cement plant: preheater tower, rotary kiln and storage silos (placeholder image)',
  },
  advantages: {
    eyebrow: 'Why us',
    title: 'What Indian buyers get from working with us directly',
    lead: 'No trading intermediaries: factory price, factory quality control and one responsible partner from contract to port.',
    items: [
      {
        title: 'Certified quality',
        text: 'Every batch is tested in our laboratory; certificates of analysis (COA) ship with each consignment.',
      },
      {
        title: 'Factory pricing',
        text: 'Direct contracts with the manufacturer — no trader margin. Prices fixed per shipment in USD or INR.',
      },
      {
        title: 'Volumes for large projects',
        text: 'Monthly volumes from a few thousand tonnes to full-vessel lots, planned quarters ahead.',
      },
      {
        title: 'Logistics to Indian ports',
        text: 'FOB or CIF delivery to Mundra, Nhava Sheva, Chennai and other ports — we arrange the vessel and insurance.',
      },
      {
        title: 'Full export documentation',
        text: 'Certificate of origin, packing list, COA, bill of lading and the documents Indian customs expects.',
      },
      {
        title: 'Support in your time zone',
        text: 'Export managers work Indian business hours and answer in English on phone, e-mail, WhatsApp and Telegram.',
      },
    ],
  },
  company: {
    name: 'TODO: Company name', // TODO: официальное название компании
    address: 'TODO: Registered address, Russia', // TODO: адрес
  },
  footer: {
    aboutText:
      'Russian cement manufacturer supplying OPC and PPC grades to India. Direct contracts, sea freight, full export documentation.',
    navTitle: 'Sections',
    contactsTitle: 'Contacts',
    phoneRu: 'Russia',
    phoneIn: 'India',
    email: 'E-mail',
    whatsapp: 'WhatsApp',
    telegram: 'Telegram',
    rights: 'All rights reserved.',
  },
} satisfies Dictionary;
