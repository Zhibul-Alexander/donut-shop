'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { products, i18n, type Locale } from '@/site.config';
import { useLocale, t } from '@/hooks/useLocale';
import { scrollToSection } from '@/utils/scroll';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const getBadgeColor = (badge?: string) => {
  switch (badge) {
    case 'hit':
      return 'bg-gradient-to-r from-red-500 to-pink-500';
    case 'new':
      return 'bg-gradient-to-r from-green-500 to-emerald-500';
    case 'sugar-free':
      return 'bg-gradient-to-r from-blue-500 to-cyan-500';
    case 'vegan':
      return 'bg-gradient-to-r from-green-600 to-teal-500';
    case 'chef-choice':
      return 'bg-gradient-to-r from-amber-500 to-orange-500';
    default:
      return '';
  }
};

const getBadgeText = (badge: string, locale: Locale) => {
  const b = i18n.products.badges as Record<string, Record<Locale, string>>;
  return b[badge] ? t(b[badge], locale) : '';
};

export default function Products() {
  const { locale } = useLocale();
  return (
    <section id="products" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">🍩</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-donut-berry to-donut-chocolate bg-clip-text text-transparent">
            {t(i18n.products.title, locale)}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t(i18n.products.subtitle, locale)}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((donut) => (
            <motion.div
              key={donut.id}
              variants={item}
              // Ховер — сразу, без задержки (отдельный transition от анимации появления)
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2, delay: 0 },
              }}
              className="glass-card rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 bg-gradient-to-br from-donut-cream to-donut-peach overflow-hidden">
                {/* Badge */}
                {donut.badges?.[0] && (
                  <div className={`absolute top-4 right-4 ${getBadgeColor(donut.badges[0])} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10`}>
                    {getBadgeText(donut.badges[0], locale)}
                  </div>
                )}

                <Image
                  src={donut.image}
                  alt={t((i18n.products.items as Record<string, { title: Record<Locale, string> }>)[donut.id]?.title ?? { en: '', ru: '', ge: '' }, locale)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-donut-berry transition-colors">
                    {t((i18n.products.items as Record<string, { title: Record<Locale, string> }>)[donut.id]?.title ?? { en: '', ru: '', ge: '' }, locale)}
                  </h3>
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-sm font-semibold">5.0</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {t((i18n.products.items as Record<string, { description: Record<Locale, string> }>)[donut.id]?.description ?? { en: '', ru: '', ge: '' }, locale)}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 glass-card px-3 py-1 rounded-full">
                    {t(donut.quantityLabel, locale)}
                  </span>
                  <span className="text-2xl font-bold text-donut-berry">
                    {donut.price} GEL
                  </span>
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    transition: { type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' },
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('delivery')}
                  className="w-full bg-gradient-to-r from-donut-berry to-donut-pink text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingCart size={20} />
                  {t(i18n.products.orderBtn, locale)}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
