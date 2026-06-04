/** @type {import('../types').Product[]} */
export const PRODUCTS = [
  // ── Мегафон ──────────────────────────────────────────────
  { id: 1,  name: 'Все включено',             category: 'megafon',    speed: 500, channels: 250, price: 1100, imageUrl: '/megafon_logo.svg' },
  { id: 2,  name: 'Стандартный Пакет',        category: 'megafon',    speed: 200, channels: 250, price:  900, imageUrl: '/megafon_logo.svg' },
  { id: 3,  name: 'VIP Пакет',                category: 'megafon',    speed: 500, channels: 200, price: 1000, imageUrl: '/megafon_logo.svg' },
  { id: 4,  name: 'Супер VIP Пакет',          category: 'megafon',    speed: 700, channels: 300, price: 2700, imageUrl: '/megafon_logo.svg' },
  { id: 5,  name: 'Базовый минимум',          category: 'megafon',    speed: 300, channels: 180, price:  770, imageUrl: '/megafon_logo.svg' },
  { id: 6,  name: 'Пакет Нормисов',           category: 'megafon',    speed: 200, channels: 180, price:  670, imageUrl: '/megafon_logo.svg' },
  { id: 7,  name: 'Пакет Бедни',              category: 'megafon',    speed: 300, channels: 150, price:  620, imageUrl: '/megafon_logo.svg' },
  { id: 8,  name: 'Пакет Нищий',              category: 'megafon',    speed: 200, channels: 150, price:  520, imageUrl: '/megafon_logo.svg' },
  { id: 9,  name: 'Супер VIP Дачный',         category: 'megafon',    speed: 500, channels: 250, price: 1300, imageUrl: '/megafon_logo.svg' },
  { id: 10, name: 'Стандартный Дачный',       category: 'megafon',    speed: 300, channels: 250, price: 1050, imageUrl: '/megafon_logo.svg' },
  { id: 11, name: 'VIP Дачный',               category: 'megafon',    speed: 500, channels: 230, price: 1200, imageUrl: '/megafon_logo.svg' },
  { id: 12, name: 'ДАЧНЫЙ РОСКОШНЫЙ',         category: 'megafon',    speed: 600, channels: 350, price: 3100, imageUrl: '/megafon_logo.svg' },
  { id: 13, name: 'Дачный Бедни',             category: 'megafon',    speed: 300, channels: 180, price:  550, imageUrl: '/megafon_logo.svg' },
  { id: 14, name: 'Дачный Нищий',             category: 'megafon',    speed: 100, channels: 180, price:  450, imageUrl: '/megafon_logo.svg' },

  // ── Ростелеком ──────────────────────────────────────────────
  { id: 15, name: 'Технологии развлечений',   category: 'rostelecom', speed: 100, channels: 224, price:  700, imageUrl: '/rostelecom_logo.svg' },
  { id: 16, name: 'Экспресс 100',             category: 'rostelecom', speed: 100, channels: 247, price:  725, imageUrl: '/rostelecom_logo.svg' },
  { id: 17, name: 'Макси 1000',               category: 'rostelecom', speed: 100, channels: 270, price:  850, imageUrl: '/rostelecom_logo.svg' },
  { id: 18, name: 'Технологии развлечений 2', category: 'rostelecom', speed: 300, channels: 180, price:  850, imageUrl: '/rostelecom_logo.svg' },
  { id: 19, name: 'Технологии выгоды',        category: 'rostelecom', speed: 500, channels: 224, price: 1040, imageUrl: '/rostelecom_logo.svg' },
  { id: 20, name: 'Весенний Пакет',           category: 'rostelecom', speed: 100, channels: 180, price:  525, imageUrl: '/rostelecom_logo.svg' },
  { id: 21, name: 'Технологии развлечений',   category: 'rostelecom', speed: 100, channels: 224, price:  700, imageUrl: '/rostelecom_logo.svg' },
  { id: 22, name: 'Экспресс 100',             category: 'rostelecom', speed: 100, channels: 247, price:  725, imageUrl: '/rostelecom_logo.svg' },
  { id: 23, name: 'Макси 1000',               category: 'rostelecom', speed: 100, channels: 270, price:  850, imageUrl: '/rostelecom_logo.svg' },
  { id: 24, name: 'Технологии развлечений 2', category: 'rostelecom', speed: 200, channels: 180, price:  850, imageUrl: '/rostelecom_logo.svg' },
  { id: 25, name: 'Технологии выгоды',        category: 'rostelecom', speed: 500, channels: 224, price: 1040, imageUrl: '/rostelecom_logo.svg' },
  { id: 26, name: 'Весенний Пакет',           category: 'rostelecom', speed: 100, channels: 180, price:  525, imageUrl: '/rostelecom_logo.svg' },

  // ── Билайн ────────────────────────────────────────────
  { id: 27, name: 'Удобный для дома',         category: 'beeline',    speed: 500, channels: 220, price:  700, imageUrl: '/beeline_logo.svg' },
  { id: 28, name: 'Удобный для дома 2',       category: 'beeline',    speed: 100, channels: 300, price:  700, imageUrl: '/beeline_logo.svg' },
  { id: 29, name: 'bee SUPER HIT',            category: 'beeline',    speed: 500, channels: 280, price: 1150, imageUrl: '/beeline_logo.svg' },
  { id: 30, name: 'bee SUPER HIT 2',          category: 'beeline',    speed: 100, channels: 350, price: 1100, imageUrl: '/beeline_logo.svg' },
  { id: 31, name: 'Удобный для дома 3',       category: 'beeline',    speed: 500, channels: 240, price:  750, imageUrl: '/beeline_logo.svg' },
  { id: 32, name: 'bee HIT',                  category: 'beeline',    speed: 100, channels: 330, price:  990, imageUrl: '/beeline_logo.svg' },
  { id: 33, name: 'bee HIT 2',                category: 'beeline',    speed: 500, channels: 210, price: 1040, imageUrl: '/beeline_logo.svg' },
  { id: 34, name: 'Удобный для дома 4',       category: 'beeline',    speed: 999, channels: 240, price: 1090, imageUrl: '/beeline_logo.svg' },
  { id: 35, name: 'bee Развлечений',          category: 'beeline',    speed: 600, channels: 260, price: 1050, imageUrl: '/beeline_logo.svg' },
  { id: 36, name: 'bee LITE',                 category: 'beeline',    speed: 500, channels: 200, price:  900, imageUrl: '/beeline_logo.svg' },
  { id: 37, name: 'Удобный для дома 5',       category: 'beeline',    speed: 500, channels: 180, price:  650, imageUrl: '/beeline_logo.svg' },
  { id: 38, name: 'bee LITE 2',               category: 'beeline',    speed: 200, channels: 250, price:  850, imageUrl: '/beeline_logo.svg' },
  { id: 39, name: 'Удобный для дома 6',       category: 'beeline',    speed: 200, channels: 200, price:  600, imageUrl: '/beeline_logo.svg' },
  { id: 40, name: 'Удобный для дома 7',       category: 'beeline',    speed: 999, channels: 220, price:  990, imageUrl: '/beeline_logo.svg' },
]

/** @type {Record<import('../types').ProductCategory, string>} */
export const CATEGORY_NAMES = {
  megafon:     'Мегафон',
  rostelecom:  'Ростелеком',
  beeline:     'Билайн',
}

export const ITEMS_PER_PAGE = 8
