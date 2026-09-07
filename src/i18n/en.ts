import type { Dictionary } from './types';

export const en = {
  meta: {
    title: 'Russian Cement & D5 Waterproofing for India — Made in Russia',
    description:
      'Cement manufacturer from Russia: OPC and PPC grades plus D5 waterproofing admixture and D5 Aqua Stop ready-mix for the Indian market. Direct factory supply, sea freight to Indian ports, quality certified.',
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
    lead: 'Direct supply of OPC and PPC cement, D5 waterproofing admixture and D5 Aqua Stop ready-mix from a Russian plant to Indian ports. Stable quality, competitive pricing, full export documentation.',
    ctaCall: 'Call India office',
    ctaWhatsapp: 'Write on WhatsApp',
    badges: [
      'OPC 43 / 53',
      'PPC',
      'D5 admixture',
      'D5 Aqua Stop',
      'Bulk & 50 kg bags',
      'FOB / CIF',
    ],
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
    title: 'Cement and waterproofing for the Indian market',
    lead: 'Portland cement produced to Russian GOST and matched to the Indian IS standards your engineers specify — plus the D5 waterproofing line for concrete, mortar and plaster.',
    groups: {
      cement: {
        title: 'Cement',
        lead: 'OPC, PPC and sulphate-resisting grades in 50 kg bags, big bags and bulk.',
      },
      waterproofing: {
        title: 'Waterproofing & admixtures',
        lead: 'D5 integral waterproofing admixture and the D5 Aqua Stop ready-mix built on it — ordered together with cement or on their own.',
      },
    },
    specLabels: {
      standard: 'Standard',
      strength: '28-day strength',
      setting: 'Initial setting',
      form: 'Form',
      dosage: 'Dosage',
      impermeability: 'Water impermeability',
      strengthGain: 'Strength gain',
      consumption: 'Consumption',
      layer: 'Layer thickness',
      packaging: 'Packaging',
      benefits: 'What it does',
      applications: 'Typical use',
    },
    items: {
      opc53: {
        name: 'OPC 53',
        tagline: 'High early strength for structural concrete',
        specs: {
          standard: 'IS 269:2015 (53 grade) · GOST 31108 CEM I 52.5',
          strength: '≥ 53 MPa',
          setting: '≥ 30 min',
        },
        applications: ['RCC & high-rise', 'Precast', 'Bridges', 'Prestressed'],
      },
      opc43: {
        name: 'OPC 43',
        tagline: 'General-purpose grade for everyday construction',
        specs: {
          standard: 'IS 269:2015 (43 grade) · GOST 31108 CEM I 42.5',
          strength: '≥ 43 MPa',
          setting: '≥ 30 min',
        },
        applications: ['Residential', 'Plaster & masonry', 'Roads', 'Blocks'],
      },
      ppc: {
        name: 'PPC',
        tagline: 'Pozzolana cement for durability and mass concrete',
        specs: {
          standard: 'IS 1489 (Part 1) · GOST 31108 CEM II/B-P',
          strength: '≥ 33 MPa',
          setting: '≥ 30 min',
        },
        applications: ['Mass concrete', 'Dams & canals', 'Marine', 'Sewage works'],
      },
      src: {
        name: 'SRC',
        tagline: 'Sulphate-resisting cement for aggressive soils',
        specs: {
          standard: 'IS 12330 · GOST 22266',
          strength: '≥ 33 MPa',
          setting: '≥ 30 min',
        },
        applications: ['Foundations', 'Coastal', 'Sulphate soils', 'Pipes'],
      },
      d5: {
        name: 'D5',
        tagline: 'Integral waterproofing admixture for concrete and mortar',
        specs: {
          standard: 'EN 934-2 · IS 2645 / IS 9103 — conformity being registered',
          form: 'Dry powder, mixed with water before dosing into the mix',
          dosage: null, // TODO: из TDS производителя (% от массы цемента / кг на м³)
          impermeability: null, // TODO: класс W из TDS
          strengthGain: null, // TODO: из TDS
          packaging: null, // TODO: фасовка и паллетирование из TDS
        },
        benefits: [
          'Waterproof concrete without an external membrane',
          'Self-healing of hairline cracks in service',
          'Better workability, sulphate resistance and faster hardening',
          'Works with any Portland cement — a trial mix is recommended',
        ],
        applications: [
          'RCC & foundations',
          'Basements',
          'Water tanks',
          'Plaster & screeds',
          'Shotcrete',
          'Precast',
        ],
      },
      d5AquaStop: {
        name: 'D5 Aqua Stop',
        tagline: 'Ready-mix waterproof plaster, screed and coating',
        specs: {
          standard: null, // TODO: стандарты из TDS
          form: 'Dry mix — add water and apply',
          consumption: null, // TODO: кг/м² на мм из TDS
          layer: null, // TODO: толщина слоя из TDS
          impermeability: null, // TODO: из TDS
          packaging: null, // TODO: из TDS
        },
        benefits: [
          'Waterproof layer in one mix — no separate primer or membrane',
          'For wet rooms, roofs, tanks and basements',
          'Also used as a repair layer on leaking surfaces',
        ],
        applications: [
          'Bathrooms & kitchens',
          'Roofs & terraces',
          'Water tanks',
          'Basements',
          'Balconies',
        ],
      },
    },
    tdsNote:
      'Dosage, consumption and performance figures for D5 products are published from the manufacturer’s technical data sheet — ask us for the TDS and SDS.',
    packaging: {
      title: 'Packaging & shipment',
      items: [
        { title: '50 kg bags', text: 'PP/paper bags, palletised or loose in containers.' },
        { title: 'Big bags 1–1.5 t', text: 'Sling bags for port handling and site delivery.' },
        { title: 'Bulk', text: 'Bulk vessels and containers with liners for large volumes.' },
        {
          title: 'Admixtures & dry mixes',
          text: 'Palletised bags in 20/40 ft containers, consolidated with bagged cement. From one pallet for trials.',
        },
      ],
    },
    cta: 'Request price list',
    rfqText:
      'Hello! Please send a price list for cement (OPC / PPC / SRC) and the D5 waterproofing line (D5 admixture, D5 Aqua Stop).',
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
        text: 'Cement batch tested, bagged or loaded in bulk; D5 batched and packed on pallets. COA issued for each.',
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
          'D5 products ship palletised in 20/40 ft containers, consolidated with bagged cement',
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
    groups: [
      {
        title: 'Cement',
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
      },
      {
        title: 'Waterproofing & admixtures',
        standards: [
          {
            code: 'EN 934-2',
            title: 'Concrete admixtures',
            text: 'European requirements for admixtures for concrete — the reference standard for D5 test reports.',
          },
          {
            code: 'IS 2645 / IS 9103',
            title: 'Indian standards for waterproofing compounds and admixtures',
            text: 'Integral waterproofing compounds and concrete admixtures; conformity of D5 is being registered.',
          },
          {
            code: 'Potable water',
            title: 'Contact with drinking water',
            text: 'Certificate for use in potable-water tanks — to be published with the TDS.',
          },
        ],
      },
    ],
    documentsTitle: 'Documents per shipment',
    documents: [
      { text: 'Certificate of Analysis (COA) from the plant laboratory' },
      { text: 'Certificate of Origin (Chamber of Commerce)' },
      { text: 'Commercial invoice & packing list' },
      { text: 'Bill of Lading' },
      { text: 'Third-party inspection report (SGS / Bureau Veritas) on request' },
      { text: 'TDS and SDS for D5 products', files: ['d5Tds', 'd5Sds', 'aquaStopTds'] },
    ],
    docLabels: {
      d5Tds: 'D5 — technical data sheet',
      d5Sds: 'D5 — safety data sheet',
      aquaStopTds: 'D5 Aqua Stop — technical data sheet',
    },
    comingSoon: 'coming soon',
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
        q: 'What is the minimum order for cement?',
        a: 'Container lots start from about 500 t (TODO). Bulk vessel shipments are planned from 5,000 t per lot. Smaller trial batches can be arranged for qualification tests.',
      },
      {
        q: 'What is the minimum order for D5?',
        a: 'D5 admixture and D5 Aqua Stop ship palletised: the minimum is one pallet, which we can consolidate into a container with bagged cement. Exact pallet weight is stated in the TDS.',
      },
      {
        q: 'What is the D5 dosage per m³ of concrete or per bag of cement?',
        a: 'Dosage depends on the mix and the required impermeability class and is set by the manufacturer’s technical data sheet. Ask us for the TDS — we will send it with a recommended dosage for your application.',
      },
      {
        q: 'Does D5 work with Indian OPC / PPC?',
        a: 'Yes. D5 is compatible with any Portland cement, including Indian OPC 43/53 and PPC. We recommend a trial mix with your cement and aggregates before the first production batch.',
      },
      {
        q: 'Can we get D5 samples for lab trials?',
        a: 'Yes. Trial packs of D5 and D5 Aqua Stop are sent by courier together with the TDS and SDS so your laboratory can run its own tests.',
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
    lead: 'Call, write or message — an export manager replies in English within one business day. For a quotation, tell us the product (cement grade or D5 line), volume, packaging and destination port.',
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
    featured: {
      title: 'One supplier for cement and waterproofing',
      text: 'Order cement and the D5 admixture in one contract, one set of documents, one vessel or container.',
    },
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
        text: 'Monthly cement volumes from a few thousand tonnes to full-vessel lots, planned quarters ahead. Admixtures from one pallet for trials.',
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
    buyersTitle: 'Who we supply',
    buyers: [
      'Importers & port terminals',
      'Distributors & dealers',
      'Ready-mix concrete plants',
      'Precast & prestressed producers',
      'Waterproofing contractors',
      'Dry-mix manufacturers',
      'Infrastructure & water-tank projects',
    ],
  },
  company: {
    name: 'TODO: Company name', // TODO: официальное название компании
    address: 'TODO: Registered address, Russia', // TODO: адрес
  },
  notFound: {
    title: 'Page not found',
    text: 'The page may have been moved or the address contains a typo.',
    cta: 'Go to the home page',
  },
  footer: {
    aboutText:
      'Russian cement manufacturer supplying OPC and PPC grades and the D5 waterproofing line to India. Direct contracts, sea freight, full export documentation.',
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
