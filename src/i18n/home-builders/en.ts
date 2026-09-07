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
} satisfies HbDictionary;
