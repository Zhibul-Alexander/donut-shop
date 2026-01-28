# 🍩 Donut Dreams Premium

**Премиальный одностраничный сайт для магазина пончиков**  
Next.js 14+ • TypeScript • Tailwind • Framer Motion • i18n (EN/RU/KA)

## ✨ Основные возможности

✅ **3 языка**: English, Russian, Georgian (переключение мгновенное)  
✅ **Единый конфиг**: Весь контент в `site.config.ts`  
✅ **Премиум дизайн**: Glassmorphism, роскошные градиенты, элегантная типографика  
✅ **Плавные анимации**: Framer Motion, параллакс, микро-взаимодействия  
✅ **Полная адаптивность**: Desktop / Tablet / Mobile  
✅ **Доступность**: ARIA, фокус-стили, reduced-motion  

## 🚀 Быстрый старт

```bash
# 1. Установите зависимости
npm install

# 2. Добавьте изображения (см. раздел ниже)
# public/donuts/*.webp
# public/gallery/*.jpg

# 3. Настройте site.config.ts

# 4. Запустите
npm run dev
```

## 📸 ПРОМПТЫ ДЛЯ ГЕНЕРАЦИИ ИЗОБРАЖЕНИЙ

### Параметры для всех изображений:
- **Размер**: 1024x1024px (квадрат)
- **Стиль**: Высококачественная студийная фуд-фотография
- **Освещение**: Мягкий профессиональный свет
- **Фон**: Чистый кремовый/нейтральный градиент
- **Ракурс**: Сверху или небольшой угол
- **Качество**: Фотореалистичность, четкие детали

---

### 1. Classic Glaze (`classic-glaze.webp`)
```
High-end studio food photography of a gourmet vanilla glazed donut, 
perfect circular shape, smooth glossy vanilla glaze with subtle sheen,
fluffy golden-brown dough visible, soft studio lighting,
cream colored gradient background, top-down view,
professional commercial quality, 8k resolution, photorealistic
```

### 2. Choco Crunch (`choco-crunch.webp`)
```
Luxury food photography of a chocolate donut with crunchy toppings,
rich dark chocolate glaze, colorful crispy rice cereal pieces on top,
golden dough, professional studio lighting with soft shadows,
neutral beige background, top-down perspective,
commercial bakery quality, ultra-detailed, photorealistic, 8k
```

### 3. Berry Cloud (`berry-cloud.webp`)
```
Premium donut photography, berry-glazed donut with pink glaze,
fresh raspberry and blueberry pieces, white cream filling visible,
airy fluffy dough, soft professional lighting,
pastel pink to cream gradient background, top-down view,
high-end patisserie style, photorealistic details, 8k quality
```

### 4. Salted Caramel (`salted-caramel.webp`)
```
Gourmet food photography of salted caramel donut,
smooth amber caramel glaze with visible sea salt crystals,
glossy finish, golden-brown dough, professional studio lighting,
warm beige gradient background, slight angle view,
luxury bakery quality, photorealistic, ultra-sharp, 8k
```

### 5. Matcha Dream (`matcha-dream.webp`)
```
High-end donut photography, Japanese matcha green tea glazed donut,
vibrant green matcha glaze, white chocolate drizzle,
light fluffy dough, soft professional lighting,
cream to pale green gradient background, top-down view,
premium patisserie quality, photorealistic, 8k resolution
```

### 6. Peanut Bomb (`peanut-bomb.webp`)
```
Premium food photography of peanut butter chocolate donut,
rich chocolate glaze with peanut butter swirl,
crushed peanuts on top, golden dough, professional studio lighting,
warm brown gradient background, top-down perspective,
commercial bakery quality, photorealistic details, 8k
```

---

### Фото галереи (5 изображений)

**Где взять:**
- **Unsplash**: "bakery interior", "donut shop", "pastry kitchen"
- **Pexels**: "bakery", "cafe interior", "fresh donuts"  
- **Pixabay**: "bakery shop", "dessert cafe"

**Или сгенерировать:**
```
Professional bakery interior photography, modern minimalist donut shop,
glass display cases with colorful donuts, warm ambient lighting,
cream and pink color scheme, clean aesthetic, wide angle,
commercial photography quality, 8k
```

## 📁 Структура проекта

```
donut-dreams-premium/
├── site.config.ts          ⭐ ЕДИНЫЙ ИСТОЧНИК ДАННЫХ
│                              Весь контент, переводы, настройки
├── app/
│   ├── layout.tsx            Корневой layout со шрифтами
│   ├── page.tsx              Главная страница (все секции)
│   └── globals.css           Премиальные стили
├── components/
│   ├── Navbar.tsx            Навигация с переключателем языка
│   ├── Hero.tsx              Hero секция
│   ├── ParallaxDonuts.tsx    Фоновые плавающие пончики
│   ├── Products.tsx          Карточки товаров с кнопками "Заказать"
│   ├── About.tsx             О магазине
│   ├── Gallery.tsx           Фото-галерея
│   ├── Delivery.tsx          Кнопки сервисов доставки
│   ├── Contacts.tsx          Контакты + карта
│   └── Footer.tsx            Футер с CTA
├── hooks/
│   ├── useLocale.ts          Управление языком
│   └── useScrollTo.ts        Плавный скролл
└── public/
    ├── donuts/               Изображения товаров (6 шт)
    └── gallery/              Фото магазина (5 шт)
```

## ⚙️ Конфигурация

Весь контент находится в **`site.config.ts`**:

### Бренд
```typescript
export const brand = {
  name: 'Donut Dreams',
  tagline: {
    en: 'Premium Handcrafted Donuts',
    ru: 'Премиальные пончики ручной работы',
    ka: 'პრემიუმ ხელნაკეთი დონატები',
  },
};
```

### Товары
```typescript
export const products: DonutProduct[] = [
  {
    id: 'classic-glaze',
    image: '/donuts/classic-glaze.webp',
    badges: ['hit', 'chef-choice'],
    quantityLabel: { en: '1 pc', ru: '1 шт', ka: '1 ც' },
    price: 2.5,
  },
  // ... остальные
];
```

### Контакты
```typescript
export const contacts = {
  address: {
    en: '42 Donut Street, Tbilisi',
    ru: 'ул. Пончиковая, 42, Тбилиси',
    ka: 'დონატის ქუჩა 42, თბილისი',
  },
  phone: '+995 555 123 456',
  email: 'hello@donutdreams.ge',
  social: {
    instagram: 'https://instagram.com/donutdreams',
    facebook: 'https://facebook.com/donutdreams',
    tiktok: 'https://tiktok.com/@donutdreams',
  },
};
```

### Доставка
```typescript
export const deliveryLinks = {
  wolt: 'https://wolt.com/...',
  glovo: 'https://glovoapp.com/...',
  bolt: 'https://food.bolt.eu/...',
  yandex: 'https://eda.yandex/...',
};
```

### Google Maps
```typescript
export const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=...';
```

## 🌍 Многоязычность (i18n)

Поддерживается 3 языка:
- 🇬🇧 **EN** - English
- 🇷🇺 **RU** - Russian
- 🇬🇪 **KA** - Georgian (ქართული)

### Как это работает
1. Все переводы в `site.config.ts` → объект `i18n`
2. Хук `useLocale()` управляет текущим языком (хранится в localStorage)
3. Переключатель в Navbar
4. Каждый компонент получает `locale` и использует функцию `t()`

### Редактирование переводов

Откройте `site.config.ts`:
```typescript
export const i18n = {
  nav: {
    home: { en: 'Home', ru: 'Главная', ka: 'მთავარი' },
    donuts: { en: 'Donuts', ru: 'Пончики', ka: 'დონატები' },
    // ... добавьте больше
  },
};
```

## 🎯 Ключевые особенности

### Одностраничная навигация
- Все секции имеют ID: `#home`, `#products`, `#about`, и т.д.
- Ссылки в Navbar плавно скроллят к секциям
- Кнопки "Заказать" на товарах → скролл к `#delivery`
- Никаких отдельных страниц

### Карточки товаров
Каждый пончик включает:
- Качественное изображение
- Название и описание на 3 языках
- Бейджи (Хит/Новинка/Без сахара/Веган/Выбор шефа)
- Количество (1 шт / 6 шт / 12 шт)
- Цена
- **Кнопка "Заказать"** → скролл к Delivery

**ВАЖНО**: Нет кнопки "посмотреть все". Все товары на главной странице.

### Секция доставки
4 большие кнопки сервисов:
- Wolt
- Glovo
- Bolt Food  
- Yandex Food

Ссылки настраиваются в `site.config.ts` → `deliveryLinks`

Пользователь нажимает "Заказать" на товаре → авто-скролл сюда → выбирает сервис

## 🎨 Кастомизация

### Цвета
`tailwind.config.ts`:
```typescript
colors: {
  cream: '#FFF5E1',
  peach: '#FFCDB2',
  'rose-gold': '#B76E79',
  chocolate: '#8B5E3C',
  'soft-pink': '#FFB4D6',
}
```

### Шрифты
Текущие: Playfair Display + Inter

Изменить в `app/layout.tsx`:
```typescript
import { Inter, Your_Font } from 'next/font/google';
```

### Google Maps
1. Откройте Google Maps
2. Найдите ваш адрес
3. "Поделиться" → "Встроить карту"
4. Скопируйте URL из iframe `src`
5. Вставьте в `site.config.ts` → `mapEmbedUrl`

## ✅ Чеклист перед запуском

- [ ] `npm install` выполнен
- [ ] Добавлены 6 изображений пончиков в `/public/donuts/`
- [ ] Добавлены 5 фото галереи в `/public/gallery/`
- [ ] Обновлено название бренда в `site.config.ts`
- [ ] Переведен весь контент на 3 языка
- [ ] Обновлены контакты (адрес, телефон, email)
- [ ] Настроен Google Maps embed
- [ ] Обновлены ссылки на соцсети
- [ ] Обновлены ссылки сервисов доставки
- [ ] Протестировано на desktop/tablet/mobile
- [ ] Протестированы все 3 языка
- [ ] Проверен плавный скролл
- [ ] Проверены все кнопки "Заказать"

## 🐛 Решение проблем

**Изображения не загружаются**
- Проверьте пути к файлам (учитывается регистр)
- Формат: WebP/JPG
- Перезапустите dev сервер

**Переводы не работают**
- Очистите localStorage: `localStorage.clear()`
- Проверьте консоль на ошибки
- Убедитесь что все ключи переведены на 3 языка

**Анимации тормозят**
- Уменьшите количество элементов в `ParallaxDonuts.tsx`
- Отключите тяжелые эффекты на мобильных
- Проверьте `prefers-reduced-motion`

## 🚀 Деплой

### Vercel (рекомендуется)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Загрузите папку .next на Netlify
```

## 📝 Лицензия

MIT

---

**Создано с 💖 для любителей пончиков по всему миру**

🍩✨
