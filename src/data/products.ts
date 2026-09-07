/**
 * Нелокализуемая структура ассортимента. Тексты (название, слоган, значения
 * характеристик) лежат в словарях `src/i18n/*.ts` под ключом `products.items[id]`.
 *
 * `specKeys` задаёт, какие строки характеристик показывает карточка данного типа.
 * Строка рендерится только если в словаре значение — непустая строка; `null`
 * означает «не подтверждено TDS производителя» и скрывает строку.
 *
 * Цифры по D5 из открытых источников (W20, +30–70 % прочности, экономия цемента
 * 15–20 %, самозалечивание трещин до 0,8 мм) НЕ публикуются до получения TDS —
 * см. PLAN.md §1 и §6.
 */
export type ProductType = 'cement' | 'admixture' | 'drymix';
export type ProductGroup = 'cement' | 'waterproofing';
export type ProductId = 'opc53' | 'opc43' | 'ppc' | 'src' | 'd5' | 'd5AquaStop';

export type SpecKey =
  | 'standard'
  | 'strength'
  | 'setting'
  | 'form'
  | 'dosage'
  | 'impermeability'
  | 'strengthGain'
  | 'consumption'
  | 'layer'
  | 'packaging';

export interface Product {
  id: ProductId;
  type: ProductType;
  group: ProductGroup;
  /** Порядок строк характеристик в карточке. */
  specKeys: readonly SpecKey[];
  /** Ключи строк, которые выводятся крупным шрифтом (ключевые показатели). */
  keySpecs: readonly SpecKey[];
}

const CEMENT_SPECS = ['standard', 'strength', 'setting'] as const;

export const PRODUCTS: readonly Product[] = [
  {
    id: 'opc53',
    type: 'cement',
    group: 'cement',
    specKeys: CEMENT_SPECS,
    keySpecs: ['strength', 'setting'],
  },
  {
    id: 'opc43',
    type: 'cement',
    group: 'cement',
    specKeys: CEMENT_SPECS,
    keySpecs: ['strength', 'setting'],
  },
  {
    id: 'ppc',
    type: 'cement',
    group: 'cement',
    specKeys: CEMENT_SPECS,
    keySpecs: ['strength', 'setting'],
  },
  {
    id: 'src',
    type: 'cement',
    group: 'cement',
    specKeys: CEMENT_SPECS,
    keySpecs: ['strength', 'setting'],
  },
  {
    id: 'd5',
    type: 'admixture',
    group: 'waterproofing',
    specKeys: ['standard', 'form', 'dosage', 'impermeability', 'strengthGain', 'packaging'],
    keySpecs: ['dosage', 'impermeability'],
  },
  {
    id: 'd5AquaStop',
    type: 'drymix',
    group: 'waterproofing',
    specKeys: ['standard', 'form', 'consumption', 'layer', 'impermeability', 'packaging'],
    keySpecs: ['consumption', 'layer'],
  },
];

export const PRODUCT_GROUPS: readonly ProductGroup[] = ['cement', 'waterproofing'];

export function productsByGroup(group: ProductGroup): Product[] {
  return PRODUCTS.filter((p) => p.group === group);
}
