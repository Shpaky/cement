# PLAN.md — Добавление продуктов D5 и D5 Aqua Stop (цемент остаётся)

Проект: лендинг «Russian Cement for India» (Astro 7, локали EN / HI / RU).
Прототип: https://shpaky.github.io/cement/
План страницы `/home-builders/` (разделы 3 и 4 ниже) включён сюда целиком с учётом D5.
Альтернативный сценарий без цемента — см. `PLAN-d5-only.md`.

---

## 0. Вводная и допущения

**Новые продукты**
- **D5** — комплексная гидроизоляционная добавка в бетон и раствор. Сухой порошок, замешивается с водой перед введением в смесь.
- **D5 Aqua Stop** — готовая сухая гидроизоляционная смесь на базе D5 (штукатурка / стяжка / обмазочный слой).

**Допущения**
- Цемент (OPC 53 / 43, PPC, SRC) остаётся в ассортименте. D5-линейка добавляется, а не заменяет.
- Все цифры по D5 ниже — из открытых описаний российских продавцов. **Перед публикацией сверить с TDS производителя.** По D5 Aqua Stop открытых данных нет — все поля TODO.

**Смена позиционирования**
- B2B: было «цемент напрямую с завода» → стало «цемент + гидроизоляционная химия от одного поставщика».
- B2C: было «какой цемент для дома» → стало «дом без протечек в муссон». Индийский бенчмарк категории — Dr. Fixit (Pidilite): интегральная добавка LW+, решения «от фундамента до террасы», горячая линия и сеть обученных подрядчиков.

---

## 1. Данные продуктов

Вынести все продукты в `src/data/products.json`, добавить поле `type`: `cement` | `admixture` | `drymix`. Карточки на обеих страницах рендерятся из этого файла. Числовые поля, не подтверждённые TDS, — `null`; компонент скрывает строки с `null`.

### 1.1 D5 — карточка (тип `admixture`)

| Поле | Значение | Статус |
|---|---|---|
| Name | D5 waterproofing admixture | ok |
| Form | Dry powder, mixed with water before dosing | ok |
| Dosage | TODO % от массы цемента / kg per m³ | **TDS** |
| Water impermeability | up to W20 (≈ ≥ 2.0 MPa) | подтвердить |
| Strength gain | +30–70 % vs plain concrete | подтвердить |
| Cement saving | 15–20 % at equal strength | подтвердить |
| Self-healing | cracks up to 0.8 mm | подтвердить |
| Workability | slump class P1 → P5 without extra plasticiser | подтвердить |
| Other | sulphate resistance, faster hardening, potable-water tanks approved | подтвердить |
| Applications | RCC, foundations, basements, tanks, plaster, shotcrete, screeds, dry mixes, foam concrete | ok |
| Standards | EN 934-2; IS 2645 (integral waterproofing compounds); IS 9103 (admixtures) | **статус — TODO** |
| Packaging | 15 kg bags (уточнить), palletised, containerised | **TDS** |
| Shelf life | TODO | **TDS** |

### 1.2 D5 Aqua Stop — карточка (тип `drymix`)

| Поле | Значение | Статус |
|---|---|---|
| Name | D5 Aqua Stop ready-mix | ok |
| Form | Dry mix, add water | ok |
| Use | waterproof plaster / screed / coating for wet areas, roofs, tanks, basements | уточнить |
| Consumption | kg per m² per mm | **TDS** |
| Water impermeability | TODO | **TDS** |
| Layer thickness | TODO | **TDS** |
| Standards | TODO | **TDS** |
| Packaging | TODO | **TDS** |

---

## 2. Изменения на главной странице (B2B)

### 2.1 Hero
- [ ] Подзаголовок: `Direct supply of OPC and PPC cement, D5 waterproofing admixture and D5 Aqua Stop ready-mix from a Russian plant to Indian ports.`
- [ ] Чипы: добавить `D5 admixture` и `D5 Aqua Stop` после `PPC`.
- [ ] Заголовок и CTA — без изменений.
- [ ] Строка-ссылка под CTA: `Building a house? See our guide for home builders →`

### 2.2 Products
- [ ] Разбить секцию на две группы: **Cement** (4 существующие карточки) и **Waterproofing & admixtures** (2 новые).
- [ ] Новые карточки — тот же компонент; для `admixture` заменить строки «28-day strength / Initial setting» на «Dosage / Water impermeability / Strength gain».
- [ ] Блок **Packaging & shipment** — добавить: `Admixtures & dry mixes — palletised bags in containers, MOQ from one pallet (TODO).`
- [ ] Кнопка `Request price list` — префилл RFQ/WhatsApp должен уметь подставлять D5.

### 2.3 Who we supply (новая секция или блок в Why us)
- [ ] Типы покупателей: импортёры и терминалы, дистрибьюторы, RMC-заводы, ЖБИ/precast, гидроизоляционные подрядчики, производители сухих смесей, инфраструктура и резервуары.

### 2.4 Why us
- [ ] Новая карточка **One supplier for cement and waterproofing** — `Order cement and D5 admixture in one contract, one set of documents, one vessel or container.`
- [ ] «Volumes for large projects» — дополнить: `Admixtures from one pallet for trials.`

### 2.5 Logistics
- [ ] Добавить строку: `D5 products ship palletised in 20/40 ft containers; can be consolidated with bagged cement.`
- [ ] Шаг 01 «Plant»: добавить `D5 batched and packed, COA issued` (если производство D5 не на том же заводе — отдельный пункт «Partner plant»).

### 2.6 Certificates & standards
- [ ] Добавить карточки: **EN 934-2**, **IS 2645 / IS 9103** (статус TODO), **Potable-water contact certificate** (TODO).
- [ ] «Documents per shipment» — добавить `TDS and SDS for D5 products` со ссылками на `public/docs/d5-tds-en.pdf`, `d5-sds-en.pdf`, `aquastop-tds-en.pdf` (плейсхолдеры).

### 2.7 FAQ
- [ ] `What is the D5 dosage per m³ / per bag of cement?` — TODO из TDS.
- [ ] `Does D5 work with Indian OPC / PPC?` — да, любой портландцемент; рекомендация провести пробный замес.
- [ ] `What is the minimum order for D5?` — от паллеты (TODO).
- [ ] `Can we get samples for lab trials?` — да, пробные упаковки курьером.
- [ ] Существующий `What is the minimum order?` — уточнить, что относится к цементу.

### 2.8 Contacts
- [ ] `tell us the product (cement grade or D5 line), volume, packaging and destination port.`

### 2.9 Навигация, футер, meta
- [ ] Пункт `Home builders` в шапке и в «Sections» футера — три локали.
- [ ] `title`: `Russian Cement & D5 Waterproofing for India — Made in Russia`; `description` — упомянуть D5.
- [ ] OG-картинки `og/{en,hi,ru}.png` — перегенерировать.
- [ ] Schema.org `Product` — добавить два объекта.

---

## 3. Страница `/home-builders/` (B2C)

Маршруты `src/pages/home-builders.astro` (EN) и `src/pages/hi/home-builders.astro` (HI). RU — ссылка на EN. Единицы: sq ft и мешки; m³ — только как альтернативный ввод.

### 3.1 Hero (`HbHero`)
- [ ] H1 в духе `Build your home on cement you can trust.` + второй тезис `Leak-free walls, roof and bathroom — monsoon after monsoon.`
- [ ] CTA: `Ask an expert on WhatsApp` (префилл `Hi, I'm building a house and need advice on cement and waterproofing.`) · `Calculate bags` (`#calculator`) · `Waterproofing guide` (`#waterproofing`)
- [ ] Визуал — стройка дома / семья, не завод.

### 3.2 Materials picker (`MaterialsPicker`)

| Задача | Материал | Почему |
|---|---|---|
| Foundation, columns, beams, slabs | OPC 53 | high early strength |
| Foundation & basement in wet soil | OPC 53 + D5 | waterproof concrete, no extra membrane |
| Brickwork, plaster, screed | OPC 43 | enough strength, lower cost |
| Roof slab, terrace, water tank | PPC + D5 | durability, self-healing cracks |
| Bathroom, kitchen, balcony plaster | D5 Aqua Stop | waterproof layer in one mix |
| Coastal / sulphate soils | SRC + D5 | sulphate resistance |

- [ ] Ссылка `Full specifications →` на `/#products`.

### 3.3 Waterproofing guide — `#waterproofing` (`WaterproofingGuide`)
Схема дома (SVG) с 5 зонами:
- [ ] Foundation & basement → concrete with D5
- [ ] External walls → D5 in plaster mix
- [ ] Roof / terrace → slab with D5, screed with Aqua Stop
- [ ] Bathroom & kitchen → Aqua Stop plaster
- [ ] Water tank → concrete with D5 (potable-water — подтвердить)
- [ ] Тезис: `Waterproof from the start costs less than repairing leaks later.`

### 3.4 Calculator (`BagCalculator`, `client:load`)
**Ввод:** тип работы (`Concrete M20` · `Concrete M25` · `Brickwork` · `Plaster` · `Waterproof plaster (Aqua Stop)`), площадь sq ft **или** объём m³, толщина для штукатурки (12/15/20 mm).
**Вывод:** мешки 50 kg (+5 % потери, округление вверх), рекомендуемая марка, для работ с D5 — `D5 needed: ~N kg`, для Aqua Stop — `Aqua Stop: ~N kg`; кнопка WhatsApp с префиллом; дисклеймер `Indicative estimate — confirm with your engineer.`
Коэффициенты в `src/data/calculator.json` (цементные — ориентировочные, подтвердить у завода; D5 — `null` до TDS, при `null` строка скрыта):

```json
{
  "wastage": 0.05,
  "bagKg": 50,
  "sqftToM2": 0.0929,
  "works": {
    "concrete_m20": { "grade": "OPC 53", "bagsPerM3": 8.0, "d5": true },
    "concrete_m25": { "grade": "OPC 53", "bagsPerM3": 10.5, "d5": true },
    "brickwork":    { "grade": "OPC 43", "bagsPerM3": 1.3 },
    "plaster":      { "grade": "OPC 43", "bagsPerM2": { "12": 0.10, "15": 0.125, "20": 0.17 } },
    "aquastop_plaster": { "grade": "D5 Aqua Stop", "kgPerM2PerMm": null }
  },
  "d5": { "kgPerBag": null, "kgPerM3": null, "_todo": "confirm with TDS" }
}
```

### 3.5 Your home in 5 steps (`BuildSteps`)
Planning → Foundation → Frame → Walls & plaster → Curing & care. На каждом шаге: `Cement at this stage: …` и `Waterproofing at this stage: …`. Без видео в v1.

### 3.6 Where to buy (`WhereToBuy`)
- [ ] v1: `Dealer network in India is being set up. Tell us your city — we'll connect you with the nearest dealer or supply directly for volume orders.`
- [ ] Приоритетные штаты: Gujarat, Maharashtra, Tamil Nadu, West Bengal.
- [ ] WhatsApp-префилл `I'm in {city}, where can I buy your cement and D5?`
- [ ] Разметка под будущую таблицу дилеров по штатам.

### 3.7 FAQ (`HbFaq`, Schema.org FAQPage)
- [ ] How long can I store a bag of cement? — до 3 месяцев, старше — проверить прочность.
- [ ] OPC or PPC for a house? — OPC 53 для каркаса, PPC для влажных зон и крыши.
- [ ] How many bags for a 10×10 ft room? — пример + ссылка на калькулятор.
- [ ] How do I check the bag / batch is genuine? — маркировка, номер партии, COA.
- [ ] Is D5 like the waterproofing liquid in my local store? — тот же класс, порошок; TODO отличия по TDS.
- [ ] Can I use D5 with any cement brand? — да.
- [ ] Can Aqua Stop fix a leaking roof or bathroom? — да, как ремонтный слой; ссылка на эксперта.
- [ ] How much D5 per bag of cement? — TODO, ссылка на калькулятор.
- [ ] How do I talk to an expert? — WhatsApp / звонок, часы IST.

### 3.8 Sticky-панель (`StickyCta`) — Call / WhatsApp, только мобильный (< 768 px), после hero, не перекрывает контент.

### 3.9 Meta
- [ ] `title` / `description` в EN и HI, с «waterproofing».
- [ ] OG `public/og/home-builders-{en,hi}.png`; hreflang EN ↔ HI.
- [ ] Schema.org `Product` × 6, `FAQPage`.

---

## 4. Техническая реализация

- [x] `src/data/products.ts` (TS вместо JSON — типизация `null`) — 6 продуктов, поле `type`, строки карточки по типу; значения в словарях, `null` скрывает строку
- [x] `src/data/calculator.ts` — по 3.4 (D5/Aqua Stop = `null` до TDS)
- [x] `src/components/ProductCard.astro` — рендер полей по `type`, скрытие `null`
- [x] Компоненты `src/components/home-builders/`: `HbHero`, `MaterialsPicker`, `WaterproofingGuide`, `BagCalculator` (единственный с client JS), `BuildSteps`, `WhereToBuy`, `HbFaq`, `StickyCta`
- [x] TDS/SDS — `src/data/docs.ts` с `href: null` и меткой «coming soon»; фальшивые PDF не публикуем, файлы кладутся в `public/docs/` по получении
- [x] Переводы: главная — EN/HI/RU; `/home-builders/` — EN/HI (HI — черновик до вычитки)
- [x] WhatsApp-префиллы через `whatsappLink()` в `src/data/company.ts`
- [x] Иллюстрации: схема дома с 5 зонами (SVG), дом в hero; без сторонних брендов

---

## 5. Чек-лист готовности

- [x] Products на главной разделён на Cement / Waterproofing & admixtures, 6 карточек, три локали
- [x] Hero главной и `/home-builders/` упоминают D5-линейку
- [x] Страница открывается по `/home-builders/` и `/hi/home-builders/`; обе точки входа с главной работают
- [x] `MaterialsPicker` — 6 строк, `WaterproofingGuide` — 5 зон
- [x] Калькулятор считает 5 типов работ; строки D5 / Aqua Stop скрыты при `null`
- [x] Sticky-панель только на мобильном
- [x] Ссылки на TDS/SDS ведут на файлы или помечены «coming soon»
- [x] Числовые характеристики D5 либо подтверждены TDS, либо не выведены
- [ ] Нет `TODO` в видимом тексте — по D5 выполнено; плейсхолдеры по цементу (MOQ, сроки, BIS, адреса) оставлены до брифа (решение от 07.09.2026)
- [x] `npm run build` без ошибок; Lighthouse desktop 100/100/100/100 на всех 5 URL (порог проекта ≥ 95, SEO = 100)

---

## 6. Оценка и зависимости

- Данные продуктов + карточки на главной — 0,5 дня
- Остальные правки главной — 0,5 дня
- `/home-builders/` полностью — 1,5–2 дня
- Переводы и OG — 0,5 дня
- **Блокер:** TDS/SDS производителя D5 (дозировка, расход, класс W, упаковка, срок хранения, статус IS 2645 / IS 9103). До получения — качественные формулировки без чисел.
