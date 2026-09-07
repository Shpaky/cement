import type { HbDictionary } from './types';

export const hbEn = {
  meta: {
    title: 'Cement & Waterproofing for Home Builders in India — Made in Russia',
    description:
      'Which cement for the foundation, walls and roof, how to keep a house leak-free with D5 waterproofing, and a bag calculator for your plan. Ask an expert on WhatsApp.',
  },
  nav: {
    materials: 'Materials',
    waterproofing: 'Waterproofing',
    calculator: 'Calculator',
    steps: 'Build steps',
    whereToBuy: 'Where to buy',
    faq: 'FAQ',
  },
  forBusiness: 'For business',
  hero: {
    eyebrow: 'For home builders · India',
    title: 'Build your home on cement you can trust',
    lead: 'Leak-free walls, roof and bathroom — monsoon after monsoon. Russian cement and D5 waterproofing, with plain advice on what to use where.',
    ctaExpert: 'Ask an expert on WhatsApp',
    ctaCalc: 'Calculate bags',
    ctaGuide: 'Waterproofing guide',
    whatsappText: 'Hi, I’m building a house and need advice on cement and waterproofing.',
    illustrationAlt: 'Stylised house with foundation, walls and roof in brand colours',
  },
  materials: {
    eyebrow: 'What to use where',
    title: 'The right material for each part of the house',
    lead: 'Six typical jobs on a house build and the cement or waterproofing product we recommend for each.',
    labels: { task: 'Job', material: 'Material', why: 'Why' },
    rows: [
      {
        task: 'Foundation, columns, beams, slabs',
        material: 'OPC 53',
        why: 'High early strength for the load-bearing frame.',
      },
      {
        task: 'Foundation & basement in wet soil',
        material: 'OPC 53 + D5',
        why: 'Waterproof concrete from the inside — no extra membrane.',
      },
      {
        task: 'Brickwork, plaster, screed',
        material: 'OPC 43',
        why: 'Enough strength at a lower cost.',
      },
      {
        task: 'Roof slab, terrace, water tank',
        material: 'PPC + D5',
        why: 'Durability and self-healing of hairline cracks.',
      },
      {
        task: 'Bathroom, kitchen, balcony plaster',
        material: 'D5 Aqua Stop',
        why: 'Waterproof layer in one mix.',
      },
      {
        task: 'Coastal or sulphate soils',
        material: 'SRC + D5',
        why: 'Sulphate resistance plus waterproofing.',
      },
    ],
    fullSpecs: 'Full specifications',
  },
  waterproofing: {
    eyebrow: 'Waterproofing guide',
    title: 'Waterproof from the start',
    lead: 'Five places where water gets into a house — and what to put there before it does.',
    zones: [
      {
        title: 'Foundation & basement',
        text: 'Concrete with D5 admixture: waterproof through the whole thickness, no membrane to tear.',
      },
      {
        title: 'External walls',
        text: 'D5 in the plaster mix keeps monsoon rain out of the brickwork.',
      },
      {
        title: 'Roof & terrace',
        text: 'Slab with D5, screed with D5 Aqua Stop — no ponding leaks into the rooms below.',
      },
      {
        title: 'Bathroom & kitchen',
        text: 'D5 Aqua Stop plaster on walls and floor before tiling.',
      },
      {
        title: 'Water tank',
        text: 'Concrete with D5 for the tank body — potable-water certificate to be published with the TDS.',
      },
    ],
    thesis: 'Waterproofing from the start costs less than repairing leaks later.',
    illustrationAlt: 'Section of a house with five numbered waterproofing zones',
  },
  calculator: {
    eyebrow: 'Bag calculator',
    title: 'How many bags do you need?',
    lead: 'Pick the job and enter the area or volume — the calculator estimates 50 kg bags with 5 % wastage.',
    workLabel: 'Type of work',
    works: {
      concreteM20: 'Concrete M20 — slabs, beams',
      concreteM25: 'Concrete M25 — columns, foundation',
      brickwork: 'Brickwork',
      plaster: 'Plaster',
      aquaStopPlaster: 'Waterproof plaster — D5 Aqua Stop',
    },
    modeLabel: 'Measure by',
    modeArea: 'Area, sq ft',
    modeVolume: 'Volume, m³',
    areaLabel: 'Area, sq ft',
    volumeLabel: 'Volume, m³',
    thicknessLabel: 'Thickness, mm',
    resultTitle: 'Estimate',
    gradeLabel: 'Recommended grade',
    bagsLabel: 'Bags of 50 kg',
    d5Label: 'D5 admixture',
    aquaStopLabel: 'D5 Aqua Stop',
    perTds: 'per TDS — ask an expert',
    emptyHint: 'Enter an area or volume to see the estimate.',
    whatsappCta: 'Send estimate on WhatsApp',
    whatsappText:
      'Hi! My estimate: {work}, {qty} — about {bags} bags of {grade}. Please advise on D5 dosage and price.',
    whatsappTextNoBags:
      'Hi! My estimate: {work}, {qty}. Please advise on D5 Aqua Stop consumption and price.',
    disclaimer: 'Indicative estimate — confirm with your engineer.',
  },
  steps: {
    eyebrow: 'Your home in 5 steps',
    title: 'From plan to move-in',
    lead: 'What happens at each stage of a house build — and which cement and waterproofing belong there.',
    cementLabel: 'Cement at this stage',
    waterproofingLabel: 'Waterproofing at this stage',
    items: [
      {
        title: 'Planning',
        text: 'Soil test, drawings, material list. Count the bags with the calculator above.',
        cement: 'Choose grades per job: OPC 53 for the frame, OPC 43 for masonry and plaster.',
        waterproofing: 'Decide where D5 goes: foundation, roof, wet rooms, water tank.',
      },
      {
        title: 'Foundation',
        text: 'Footings, plinth beam and basement if there is one.',
        cement: 'OPC 53 concrete, M20–M25 depending on the design.',
        waterproofing: 'D5 in the concrete mix — waterproof from below, no membrane.',
      },
      {
        title: 'Frame',
        text: 'Columns, beams and the roof slab.',
        cement: 'OPC 53 for columns and beams; PPC for the roof slab.',
        waterproofing: 'D5 in the slab concrete and in the terrace screed.',
      },
      {
        title: 'Walls & plaster',
        text: 'Brickwork, internal and external plaster, wet rooms.',
        cement: 'OPC 43 for masonry and plaster.',
        waterproofing: 'D5 in external plaster; D5 Aqua Stop in bathrooms, kitchen and balconies.',
      },
      {
        title: 'Curing & care',
        text: 'Keep concrete and plaster wet for 7–14 days, then finishing.',
        cement: 'Cure every pour — final strength depends on it.',
        waterproofing: 'Fill the tank and check the roof after the first rain.',
      },
    ],
  },
  whereToBuy: {
    eyebrow: 'Where to buy',
    title: 'Dealer network in India is being set up',
    lead: 'Tell us your city — we will connect you with the nearest dealer or supply directly for volume orders.',
    statesTitle: 'Priority states',
    states: ['Gujarat', 'Maharashtra', 'Tamil Nadu', 'West Bengal'],
    cta: 'Ask where to buy',
    whatsappText: 'Hi! I’m in [your city] — where can I buy your cement and D5?',
    dealersNote: 'The dealer list by state will appear here as partners come on board.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions from home builders',
    lead: 'Short answers on storage, choice of grade and waterproofing. Anything else — ask an expert on WhatsApp.',
    items: [
      {
        q: 'How long can I store a bag of cement?',
        a: 'Up to 3 months in a dry place, off the floor and away from walls. Older cement should be tested for strength before use, or used for non-structural work.',
      },
      {
        q: 'OPC or PPC for a house?',
        a: 'OPC 53 for the load-bearing frame — foundation, columns, beams. PPC for the roof slab and wet areas, where durability matters more than early strength.',
      },
      {
        q: 'How many bags for a 10 × 10 ft room?',
        a: 'A 100 sq ft slab 125 mm thick in M20 concrete needs about 10 bags; 12 mm plaster on the same area takes 1–2 bags. Use the calculator above for your own sizes.',
      },
      {
        q: 'How do I check the bag or batch is genuine?',
        a: 'Look for the brand marking, batch number and packing date on the bag. Every batch has a certificate of analysis — ask the dealer or us for the COA by batch number.',
      },
      {
        q: 'Is D5 like the waterproofing liquid in my local store?',
        a: 'Same class of product — an integral waterproofing admixture — but D5 is a dry powder mixed with water before dosing. Performance figures are published in the TDS.',
      },
      {
        q: 'Can I use D5 with any cement brand?',
        a: 'Yes. D5 works with any Portland cement, including Indian OPC and PPC. Do a small trial mix first.',
      },
      {
        q: 'Can D5 Aqua Stop fix a leaking roof or bathroom?',
        a: 'Yes — applied as a repair layer over the cleaned surface. For a large or recurring leak, ask an expert on WhatsApp before you start.',
      },
      {
        q: 'How much D5 per bag of cement?',
        a: 'The dosage is set in the manufacturer’s TDS; the calculator will show it once the sheet is published. Until then, ask an expert for the dosage for your job.',
      },
      {
        q: 'How do I talk to an expert?',
        a: 'Write on WhatsApp or call the India office, Mon–Sat 9:00–18:00 IST. Describe the job and send a photo if it is a repair.',
      },
    ],
    moreTitle: 'Still have a question?',
    moreCta: 'Ask on WhatsApp',
  },
  sticky: {
    label: 'Quick contact',
    call: 'Call',
    whatsapp: 'WhatsApp',
  },
} satisfies HbDictionary;
