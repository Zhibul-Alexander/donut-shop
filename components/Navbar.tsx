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

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="text-3xl">🍩</div>
            <span className="text-2xl font-bold text-donut-chocolate">
              Donut Dreams
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItemKeys.map((item) => (
              <motion.a
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' }}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-800 hover:text-donut-chocolate transition-colors font-medium"
              >
                {t(i18n.nav[item.key], locale)}
              </motion.a>
            ))}
            {isClient && (
              <div className="flex items-center gap-1 glass-card px-2 py-1 rounded-full">
                <Languages size={16} className="text-gray-500 mr-1" />
                {locales.map((loc) => (
                  <motion.button
                    key={loc}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' }}
                    onClick={() => handleLocaleClick(loc)}
                    className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
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
              onClick={() => handleNavClick('delivery')}
              className="bg-donut-chocolate text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-donut-chocolate/90 transition-all"
            >
              {t(i18n.nav.orderNow, locale)}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-card"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card-dark overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItemKeys.map((item, index) => (
                <motion.a
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left text-gray-800 hover:text-donut-chocolate transition-colors font-medium py-2"
                >
                  {t(i18n.nav[item.key], locale)}
                </motion.a>
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
                onClick={() => handleNavClick('delivery')}
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
