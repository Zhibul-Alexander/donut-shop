'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Languages } from 'lucide-react';
import { scrollToSection } from '@/utils/scroll';
import { useLocale, t } from '@/hooks/useLocale';
import { locales, i18n, type Locale } from '@/site.config';

const localeLabels: Record<Locale, string> = { ru: 'RU', en: 'EN', ge: 'GE' };

const navItemKeys = [
  { id: 'home', key: 'home' as const },
  { id: 'products', key: 'donuts' as const },
  { id: 'about', key: 'about' as const },
  { id: 'delivery', key: 'delivery' as const },
  { id: 'contacts', key: 'contacts' as const },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, isClient } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    // На узких экранах (планшет/мобилка) скролл после закрытия меню
    const isNarrow = typeof window !== 'undefined' && window.innerWidth < 1024;
    if (isNarrow) {
      setTimeout(() => scrollToSection(id), 320);
    } else {
      scrollToSection(id);
    }
  };

  const handleLocaleClick = (loc: Locale) => {
    setLocale(loc);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between h-16 lg:h-20 gap-4">
          {/* Колонка 1: Логотип */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-1.5 lg:space-x-2 cursor-pointer min-w-0 justify-start"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <div className="text-2xl lg:text-3xl shrink-0">🍩</div>
            <span className="text-xl lg:text-2xl font-bold text-donut-chocolate truncate">
              Donut Dreams
            </span>
          </motion.div>

          {/* Колонка 2: Навигация (Главная … Контакты) — только на десктопе */}
          <div className="hidden lg:flex items-center justify-center gap-3 xl:gap-6">
            {navItemKeys.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' }}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-gray-800 hover:text-donut-chocolate transition-colors font-medium bg-transparent border-0 cursor-pointer text-sm xl:text-base whitespace-nowrap"
              >
                {t(i18n.nav[item.key], locale)}
              </motion.button>
            ))}
          </div>

          {/* Колонка 3: Язык + Заказать — только на десктопе */}
          <div className="hidden lg:flex items-center justify-end gap-2 xl:gap-3">
            {isClient && (
              <div className="flex items-center gap-0.5 xl:gap-1 glass-card px-1.5 xl:px-2 py-0.5 xl:py-1 rounded-full shrink-0">
                <Languages size={14} className="text-gray-500 mr-0.5 xl:mr-1 shrink-0 hidden xl:block" />
                <Languages size={12} className="text-gray-500 xl:hidden shrink-0" />
                {locales.map((loc) => (
                  <motion.button
                    key={loc}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' }}
                    onClick={() => handleLocaleClick(loc)}
                    className={`px-1.5 xl:px-2 py-0.5 xl:py-1 rounded-md text-xs xl:text-sm font-medium transition-colors ${
                      locale === loc
                        ? 'bg-donut-chocolate text-white'
                        : 'text-gray-600 hover:text-donut-chocolate'
                    }`}
                  >
                    {localeLabels[loc]}
                  </motion.button>
                ))}
              </div>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' }}
              onClick={(e) => handleNavClick(e, 'delivery')}
              className="bg-donut-chocolate text-white px-4 xl:px-6 py-1.5 xl:py-2 rounded-full font-semibold shadow-lg hover:bg-donut-chocolate/90 transition-all text-sm xl:text-base whitespace-nowrap"
            >
              {t(i18n.nav.orderNow, locale)}
            </motion.button>
          </div>

          {/* Кнопка меню — до lg (планшеты и узкие экраны) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg glass-card shrink-0 col-start-3 row-start-1 justify-self-end"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Выдвижное меню — до lg (планшеты и узкие экраны) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-card-dark overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItemKeys.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="block w-full text-left text-gray-800 hover:text-donut-chocolate transition-colors font-medium py-2 bg-transparent border-0 cursor-pointer"
                >
                  {t(i18n.nav[item.key], locale)}
                </motion.button>
              ))}
              {isClient && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItemKeys.length * 0.1 }}
                  className="flex gap-2 py-2"
                >
                  {locales.map((loc) => (
                    <motion.button
                      key={loc}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' }}
                      onClick={() => handleLocaleClick(loc)}
                      className={`flex-1 py-2 rounded-full text-sm font-medium ${
                        locale === loc
                          ? 'bg-donut-chocolate text-white'
                          : 'glass-card text-gray-600'
                      }`}
                    >
                      {localeLabels[loc]}
                    </motion.button>
                  ))}
                </motion.div>
              )}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navItemKeys.length + 1) * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleNavClick(e, 'delivery')}
                className="w-full bg-donut-chocolate text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-donut-chocolate/90 transition-all"
              >
                {t(i18n.nav.orderNow, locale)}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
