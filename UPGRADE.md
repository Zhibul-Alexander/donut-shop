# 🔄 Upgrade Guide - Добавление i18n и новых функций

Этот файл объясняет, как обновить существующие компоненты для поддержки мультиязычности и новых требований.

## Что нужно обновить

Текущая версия проекта содержит базовую структуру. Для полной поддержки всех новых требований нужно обновить компоненты:

### 1. Navbar - Добавить переключатель языка

**Что добавить:**
- Выпадающее меню выбора языка (EN/RU/KA)
- Флаги или названия языков
- Сохранение выбора в localStorage (уже есть в useLocale)

**Код:**
```tsx
'use client';

import { Locale } from '@/site.config';
import { Globe } from 'lucide-react';

// В компоненте Navbar:
interface NavbarProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

// Добавить кнопку переключения:
<div className="flex items-center gap-2">
  <button className="glass-card p-2 rounded-lg">
    <Globe size={20} />
  </button>
  {/* Выпадающее меню с языками */}
</div>
```

### 2. Products - Обновить кнопку "Заказать"

**Что изменить:**
- Убрать кнопку "Посмотреть все вкусы" (если есть)
- Каждая карточка должна иметь кнопку "Заказать"
- Кнопка "Заказать" должна скроллить к `#delivery`

**Код:**
```tsx
import { useScrollTo } from '@/hooks/useScrollTo';
import { t } from '@/hooks/useLocale';
import { i18n } from '@/site.config';

export default function Products({ locale }: { locale: Locale }) {
  const { scrollToSection } = useScrollTo();
  
  return (
    <button
      onClick={() => scrollToSection('delivery')}
      className="..."
    >
      {t(i18n.products.orderBtn, locale)}
    </button>
  );
}
```

### 3. Все компоненты - Добавить поддержку i18n

**Паттерн для каждого компонента:**

```tsx
'use client';

import { Locale } from '@/site.config';
import { t } from '@/hooks/useLocale';
import { i18n } from '@/site.config';

interface ComponentProps {
  locale: Locale;
}

export default function Component({ locale }: ComponentProps) {
  return (
    <div>
      <h2>{t(i18n.section.title, locale)}</h2>
      <p>{t(i18n.section.subtitle, locale)}</p>
    </div>
  );
}
```

### 4. Delivery - Обновить кнопки сервисов

**Текущее состояние:** 3 кнопки (Wolt, Glovo, Bolt)  
**Нужно:** 4 кнопки (Wolt, Glovo, Bolt, Yandex Food)

**Код:**
```tsx
import { deliveryLinks } from '@/site.config';

const services = [
  { name: 'Wolt', url: deliveryLinks.wolt, icon: '🛵', color: 'from-cyan-500 to-blue-500' },
  { name: 'Glovo', url: deliveryLinks.glovo, icon: '🍔', color: 'from-yellow-500 to-orange-500' },
  { name: 'Bolt Food', url: deliveryLinks.bolt, icon: '⚡', color: 'from-green-500 to-emerald-500' },
  { name: 'Yandex Food', url: deliveryLinks.yandex, icon: '🍕', color: 'from-red-500 to-pink-500' },
];

return services.map(service => (
  <a 
    href={service.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`bg-gradient-to-br ${service.color} ...`}
  >
    {service.icon} {service.name}
  </a>
));
```

### 5. ParallaxDonuts → ParallaxScene

**Переименовать компонент:**
- `ParallaxDonuts.tsx` → `ParallaxScene.tsx`
- Импорт в `page.tsx`

**Добавить больше элементов:**
- 4 фоновых пончика вместо 3
- Больше "sprinkles" (посыпки)
- Более сложный параллакс

## Быстрые замены во всех компонентах

### Замена 1: Импорт переводов
```tsx
// Старое:
const text = "Static text";

// Новое:
import { t } from '@/hooks/useLocale';
import { i18n } from '@/site.config';

const text = t(i18n.section.key, locale);
```

### Замена 2: Проп locale
```tsx
// Добавить в каждый компонент:
interface Props {
  locale: Locale;
}

export default function Component({ locale }: Props) {
  // ...
}
```

### Замена 3: Данные из конфига
```tsx
// Старое:
const products = [{ name: "Classic", price: 2.5 }];

// Новое:
import { products, i18n } from '@/site.config';

products.map(product => ({
  name: t(i18n.products.items[product.id].title, locale),
  price: product.price,
}))
```

## Приоритет обновлений

**Обязательно (высокий приоритет):**
1. ✅ Navbar - добавить языковой переключатель
2. ✅ Products - кнопка "Заказать" → скролл к Delivery
3. ✅ Delivery - добавить 4-ю кнопку (Yandex Food)
4. ✅ Все компоненты - поддержка `locale` prop

**Желательно (средний приоритет):**
1. Улучшить анимации переключения языка
2. Добавить больше параллакс-элементов
3. Улучшить премиальный дизайн

**Опционально (низкий приоритет):**
1. Добавить больше микро-анимаций
2. Оптимизировать производительность
3. Добавить тесты

## Полный чеклист обновления

- [ ] site.config.ts создан ✅
- [ ] hooks/useLocale.ts создан ✅
- [ ] hooks/useScrollTo.ts создан ✅
- [ ] Navbar: добавлен языковой переключатель
- [ ] Navbar: используются переводы из i18n
- [ ] Hero: получает locale prop
- [ ] Hero: использует t() для текстов
- [ ] Products: кнопка "Заказать" скроллит к #delivery
- [ ] Products: убрана кнопка "Посмотреть все"
- [ ] Products: карточки используют данные из site.config
- [ ] About: получает locale prop
- [ ] About: тексты переведены
- [ ] Gallery: locale support
- [ ] Delivery: 4 кнопки сервисов (не 3)
- [ ] Delivery: ссылки из deliveryLinks
- [ ] Contacts: контакты из site.config
- [ ] Contacts: Google Maps из mapEmbedUrl
- [ ] Footer: тексты переведены
- [ ] page.tsx: передает locale всем компонентам
- [ ] ParallaxDonuts → ParallaxScene (переименован)

## Тестирование после обновления

1. **Переключение языка:**
   - Нажмите на селектор языка
   - Проверьте что весь контент меняется
   - Обновите страницу - язык должен сохраниться

2. **Кнопка "Заказать":**
   - Нажмите на любой карточке товара
   - Должен произойти плавный скролл к секции Delivery
   - Offset должен учитывать высоту навбара

3. **Сервисы доставки:**
   - Проверьте что отображаются все 4 кнопки
   - Клик должен открывать внешнюю ссылку в новой вкладке

4. **Адаптивность:**
   - Desktop: меню горизонтальное, языки видны
   - Mobile: hamburger меню, языки в меню
   - Tablet: должно корректно адаптироваться

## Готовые сниппеты кода

### Navbar с языками (полный пример)
```tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Locale, locales } from '@/site.config';
import { useScrollTo } from '@/hooks/useScrollTo';
import { t } from '@/hooks/useLocale';
import { i18n } from '@/site.config';

interface NavbarProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export default function Navbar({ locale, setLocale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { scrollToSection } = useScrollTo();

  const languageNames = {
    en: 'EN',
    ru: 'RU',
    ka: 'KA',
  };

  return (
    <nav>
      {/* Desktop language switcher */}
      <div className="relative">
        <button onClick={() => setShowLangMenu(!showLangMenu)}>
          <Globe size={20} />
          <span>{languageNames[locale]}</span>
        </button>
        
        {showLangMenu && (
          <div className="absolute top-full mt-2 glass-card rounded-lg">
            {locales.map(lang => (
              <button
                key={lang}
                onClick={() => {
                  setLocale(lang);
                  setShowLangMenu(false);
                }}
                className={locale === lang ? 'active' : ''}
              >
                {languageNames[lang]}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
```

### Products с кнопкой заказа
```tsx
'use client';

import { motion } from 'framer-motion';
import { products, i18n } from '@/site.config';
import { t } from '@/hooks/useLocale';
import { useScrollTo } from '@/hooks/useScrollTo';
import { Locale } from '@/site.config';

export default function Products({ locale }: { locale: Locale }) {
  const { scrollToSection } = useScrollTo();

  return (
    <section id="products">
      {products.map(product => (
        <div key={product.id}>
          <h3>{t(i18n.products.items[product.id].title, locale)}</h3>
          <p>{t(i18n.products.items[product.id].description, locale)}</p>
          <p>{t(product.quantityLabel, locale)}</p>
          <p>${product.price}</p>
          
          <button onClick={() => scrollToSection('delivery')}>
            {t(i18n.products.orderBtn, locale)}
          </button>
        </div>
      ))}
    </section>
  );
}
```

## Помощь и поддержка

Если что-то не работает после обновления:
1. Проверьте консоль браузера на ошибки
2. Убедитесь что все файлы из site.config.ts импортированы корректно
3. Очистите кэш браузера и localStorage
4. Перезапустите dev сервер

---

Удачи с обновлением! 🚀
