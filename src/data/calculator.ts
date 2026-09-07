/**
 * Коэффициенты калькулятора мешков (страница /home-builders/).
 *
 * Цементные нормы — ориентировочные для типовых индийских составов
 * (подтвердить у завода). Всё, что относится к D5, = `null` до получения TDS:
 * при `null` соответствующая строка результата заменяется подсказкой
 * «по TDS — спросите эксперта».
 *
 * Объект сериализуется в <script type="application/json"> и читается
 * клиентским скриптом калькулятора — держите его plain-JSON.
 */
export type WorkId = 'concreteM20' | 'concreteM25' | 'brickwork' | 'plaster' | 'aquaStopPlaster';

export interface Work {
  /** Рекомендуемая марка / продукт (нелокализуемое имя). */
  grade: string;
  /** Мешков 50 кг на м³ (бетон, кладка): считаем от объёма или площадь × толщина. */
  bagsPerM3?: number;
  /** Мешков 50 кг на м² по толщине слоя, мм (штукатурка). */
  bagsPerM2?: Record<string, number>;
  /** Расход сухой смеси, кг на м² на 1 мм слоя (Aqua Stop). null = ждём TDS. */
  kgPerM2PerMm?: number | null;
  /** Варианты толщины, мм (первый — по умолчанию). */
  thicknessMm: number[];
  /** Работа выполняется с добавкой D5. */
  d5?: boolean;
}

export interface CalculatorConfig {
  wastage: number;
  bagKg: number;
  sqftToM2: number;
  works: Record<WorkId, Work>;
  d5: { kgPerM3: number | null; kgPerBag: number | null };
}

export const CALCULATOR: CalculatorConfig = {
  wastage: 0.05,
  bagKg: 50,
  sqftToM2: 0.0929,
  works: {
    concreteM20: { grade: 'OPC 53', bagsPerM3: 8.0, thicknessMm: [125, 100, 150], d5: true },
    concreteM25: { grade: 'OPC 53', bagsPerM3: 10.5, thicknessMm: [125, 150, 200], d5: true },
    brickwork: { grade: 'OPC 43', bagsPerM3: 1.3, thicknessMm: [230, 115] },
    plaster: {
      grade: 'OPC 43',
      bagsPerM2: { '12': 0.1, '15': 0.125, '20': 0.17 },
      thicknessMm: [12, 15, 20],
    },
    aquaStopPlaster: { grade: 'D5 Aqua Stop', kgPerM2PerMm: null, thicknessMm: [10, 15, 20] }, // TODO: расход из TDS
  },
  d5: { kgPerM3: null, kgPerBag: null }, // TODO: дозировка из TDS
};

export const WORK_IDS = Object.keys(CALCULATOR.works) as WorkId[];
