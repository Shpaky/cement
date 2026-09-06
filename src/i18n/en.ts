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
  products: {
    eyebrow: 'Products',
    title: 'Cement grades for the Indian market',
    lead: 'Portland cement produced to Russian GOST and matched to the Indian IS standards your engineers specify.',
    specLabels: {
      standard: 'Standard',
      strength: '28-day strength',
      setting: 'Initial setting',
      applications: 'Typical use',
    },
    items: [
      {
        name: 'OPC 53',
        tagline: 'High early strength for structural concrete',
        standard: 'IS 269:2015 (53 grade) · GOST 31108 CEM I 52.5',
        strength: '≥ 53 MPa',
        setting: '≥ 30 min',
        applications: ['RCC & high-rise', 'Precast', 'Bridges', 'Prestressed'],
      },
      {
        name: 'OPC 43',
        tagline: 'General-purpose grade for everyday construction',
        standard: 'IS 269:2015 (43 grade) · GOST 31108 CEM I 42.5',
        strength: '≥ 43 MPa',
        setting: '≥ 30 min',
        applications: ['Residential', 'Plaster & masonry', 'Roads', 'Blocks'],
      },
      {
        name: 'PPC',
        tagline: 'Pozzolana cement for durability and mass concrete',
        standard: 'IS 1489 (Part 1) · GOST 31108 CEM II/B-P',
        strength: '≥ 33 MPa',
        setting: '≥ 30 min',
        applications: ['Mass concrete', 'Dams & canals', 'Marine', 'Sewage works'],
      },
      {
        name: 'SRC',
        tagline: 'Sulphate-resisting cement for aggressive soils',
        standard: 'IS 12330 · GOST 22266',
        strength: '≥ 33 MPa',
        setting: '≥ 30 min',
        applications: ['Foundations', 'Coastal', 'Sulphate soils', 'Pipes'],
      },
    ],
    packaging: {
      title: 'Packaging & shipment',
      items: [
        { title: '50 kg bags', text: 'PP/paper bags, palletised or loose in containers.' },
        { title: 'Big bags 1–1.5 t', text: 'Sling bags for port handling and site delivery.' },
        { title: 'Bulk', text: 'Bulk vessels and containers with liners for large volumes.' },
      ],
    },
    cta: 'Request price list',
    note: 'TODO: confirm the grade list and figures with the plant laboratory before publishing.',
  },
  logistics: {
    eyebrow: 'Logistics',
    title: 'From the plant gate to an Indian port — one supply chain',
    lead: 'We manage the whole route: rail to the loading port, vessel chartering or container booking, insurance and the paperwork Indian customs expects on arrival.',
    routeLabel: 'Delivery route',
    steps: [
      {
        title: 'Plant',
        text: 'Batch tested, bagged or loaded in bulk, COA issued.',
      },
      {
        title: 'Rail to port',
        text: 'Covered wagons or containers to the loading port in Russia.',
      },
      {
        title: 'Sea freight',
        text: 'Bulk carrier or container vessel; insurance under CIF.',
      },
      {
        title: 'Indian port & customs',
        text: 'Discharge at Mundra, Nhava Sheva, Chennai or Kolkata; documents ready for clearance.',
      },
    ],
    details: [
      {
        title: 'Incoterms & payment',
        items: [
          'FOB loading port',
          'CFR / CIF Indian port',
          'USD or INR contracts',
          'L/C or T/T (TODO)',
        ],
      },
      {
        title: 'Indian ports',
        items: ['Mundra (Gujarat)', 'Nhava Sheva / JNPT (Mumbai)', 'Chennai', 'Kolkata / Haldia'],
      },
      {
        title: 'Transit & schedule',
        items: [
          'Sea transit: TODO 25–35 days',
          'Monthly vessel or container lots',
          'Schedules agreed a quarter ahead',
          'Tracking and ETA updates by e-mail',
        ],
      },
    ],
    note: 'TODO: confirm loading ports, transit times and payment terms with the export department.',
  },
  certificates: {
    eyebrow: 'Certificates & standards',
    title: 'Quality you can verify before the vessel sails',
    lead: 'Production is certified to Russian and international standards; each consignment ships with laboratory results and origin documents accepted by Indian customs.',
    standards: [
      {
        code: 'GOST 31108',
        title: 'Russian national standard',
        text: 'General construction cements — composition, strength classes and test methods.',
      },
      {
        code: 'EN 197-1',
        title: 'European harmonised standard',
        text: 'CEM I / CEM II classification used for export contracts and third-party inspection.',
      },
      {
        code: 'IS 269 / IS 1489',
        title: 'Indian standards (BIS)',
        text: 'Conformity of OPC 43/53 and PPC grades to BIS requirements; BIS licence status: TODO.',
      },
      {
        code: 'ISO 9001',
        title: 'Quality management',
        text: 'Certified quality management system at the plant; annual surveillance audits.',
      },
    ],
    documentsTitle: 'Documents per shipment',
    documents: [
      'Certificate of Analysis (COA) from the plant laboratory',
      'Certificate of Origin (Chamber of Commerce)',
      'Commercial invoice & packing list',
      'Bill of Lading',
      'Third-party inspection report (SGS / Bureau Veritas) on request',
    ],
    scansTitle: 'Certificate scans',
    scansPlaceholder: 'Scan placeholder',
    note: 'TODO: replace placeholders with real certificate scans and licence numbers.',
  },
  facts: {
    label: 'Key figures',
    items: [
      { value: '1.2M t', label: 'annual capacity (TODO)' },
      { value: '20+', label: 'years in production (TODO)' },
      { value: '300k t', label: 'shipped for export (TODO)' },
      { value: '4', label: 'Indian ports served' },
    ],
    note: 'TODO: replace placeholder figures with audited numbers from the plant.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions Indian buyers ask first',
    lead: 'Short answers on ordering, quality and delivery. Anything else — call or write, we answer in Indian business hours.',
    items: [
      {
        q: 'What is the minimum order?',
        a: 'Container lots start from about 500 t (TODO). Bulk vessel shipments are planned from 5,000 t per lot. Smaller trial batches can be arranged for qualification tests.',
      },
      {
        q: 'Can you supply cement matching IS 269 / IS 1489?',
        a: 'Yes. OPC 43/53 and PPC grades are produced to GOST 31108 and tested against the corresponding IS requirements; a certificate of analysis is issued per batch. BIS licence status: TODO.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Rail to the loading port takes about a week; sea transit to western Indian ports is roughly 25–35 days (TODO). Schedules are agreed a quarter ahead for regular volumes.',
      },
      {
        q: 'What are the payment terms?',
        a: 'Letter of credit or bank transfer in USD or INR; advance and balance shares are negotiated per contract (TODO).',
      },
      {
        q: 'Do you offer samples and third-party inspection?',
        a: 'Yes. Samples are shipped by courier for lab qualification, and SGS or Bureau Veritas inspection at loading can be arranged at the buyer’s request.',
      },
      {
        q: 'Which documents do we receive?',
        a: 'Commercial invoice, packing list, certificate of origin, certificate of analysis, bill of lading and insurance certificate (for CIF).',
      },
    ],
    moreTitle: 'Have a question we haven’t covered?',
    moreCta: 'Ask on WhatsApp',
  },
  contacts: {
    eyebrow: 'Contacts',
    title: 'Talk to the export desk',
    lead: 'Call, write or message — an export manager replies in English within one business day. For a quotation, tell us the grade, volume, packaging and destination port.',
    channels: [
      { key: 'phoneIn', label: 'India office', hint: 'Call in Indian business hours' },
      { key: 'phoneRu', label: 'Plant, Russia', hint: 'Export department' },
      { key: 'email', label: 'E-mail', hint: 'Requests for quotation and documents' },
      { key: 'whatsapp', label: 'WhatsApp', hint: 'Quick questions and samples' },
      { key: 'telegram', label: 'Telegram', hint: 'Alternative messenger' },
    ],
    hoursTitle: 'Working hours',
    hours: ['Mon–Sat 9:00–18:00 IST (India office)', 'Mon–Fri 9:00–18:00 MSK (plant)'],
    locations: [
      {
        title: 'India office',
        name: 'TODO: Representative office',
        address: 'TODO: Address, Mumbai, Maharashtra, India',
        mapCta: 'Open in Google Maps',
      },
      {
        title: 'Plant',
        name: 'TODO: Company name',
        address: 'TODO: Plant address, Russia',
        mapCta: 'Open in Google Maps',
      },
    ],
    note: 'TODO: replace placeholder phone numbers, e-mail, messenger links and addresses.',
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
