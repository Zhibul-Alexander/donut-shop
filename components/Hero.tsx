'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { scrollToSection } from '@/utils/scroll';
import { useLocale, t } from '@/hooks/useLocale';
import { i18n } from '@/site.config';

export default function Hero() {
  const { locale } = useLocale();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block mb-4 px-4 py-2 glass-card rounded-full"
            >
              <span className="text-donut-berry font-semibold">{t(i18n.hero.badge, locale)}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-donut-berry via-donut-pink to-donut-chocolate bg-clip-text text-transparent">
                Donut Dreams
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t(i18n.hero.subtitle, locale)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(231, 117, 151, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('delivery')}
                className="bg-gradient-to-r from-donut-berry to-donut-pink text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all"
              >
                {t(i18n.hero.cta, locale)}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: '100%', label: t(i18n.hero.stats.natural, locale) },
                { value: t(i18n.hero.stats.delivery, locale), label: t(i18n.nav.delivery, locale) },
                { value: '5+', label: t(i18n.hero.stats.flavors, locale) },
              ].map((stat, index) => (
                <div key={index} className="text-center glass-card p-4 rounded-2xl">
                  <div className="text-2xl font-bold text-donut-berry">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Donut */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
            >
              {/* Main donut - using CSS instead of image for demo */}
              <div className="relative w-full h-full">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-donut-pink via-donut-berry to-donut-chocolate shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(231, 117, 151, 0.5))',
                  }}
                >
                  {/* Donut hole */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/3 h-1/3 rounded-full bg-gradient-to-br from-donut-cream to-donut-peach" />
                  </div>
                  
                  {/* Sprinkles on donut */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                      className="absolute w-3 h-8 rounded-full"
                      style={{
                        background: ['#fff', '#E77597', '#8B5E3C', '#FFCDB2'][i % 4],
                        top: `${20 + (i % 3) * 25}%`,
                        left: `${15 + (i % 4) * 20}%`,
                        transform: `rotate(${i * 30}deg)`,
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-donut-berry to-donut-pink opacity-30 blur-3xl animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('products')}
      >
        <ArrowDown size={32} className="text-donut-berry" />
      </motion.div>
    </section>
  );
}
