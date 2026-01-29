'use client';

import { motion } from 'framer-motion';
import { Bike, Clock, MapPin, ShoppingBag } from 'lucide-react';
import { deliveryLinks, i18n } from '@/site.config';
import { useLocale, t } from '@/hooks/useLocale';

const deliveryOptions = [
  { name: 'Wolt', icon: '🛵', color: 'from-cyan-500 to-blue-500', link: deliveryLinks.wolt },
  { name: 'Glovo', icon: '🍔', color: 'from-yellow-500 to-orange-500', link: deliveryLinks.glovo },
  { name: 'Bolt Food', icon: '⚡', color: 'from-green-500 to-emerald-500', link: deliveryLinks.bolt },
];

const deliveryFeatureKeys = [
  { icon: Clock, key: 'fast' as const },
  { icon: MapPin, key: 'zone' as const },
  { icon: ShoppingBag, key: 'package' as const },
  { icon: Bike, key: 'track' as const },
];

export default function Delivery() {
  const { locale } = useLocale();
  return (
    <section id="delivery" className="relative py-20 md:py-32 overflow-hidden">
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
            <span className="text-6xl">🚚</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-donut-chocolate">
            {t(i18n.delivery.title, locale)}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t(i18n.delivery.subtitle, locale)}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Delivery Options */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {t(i18n.delivery.partnersTitle, locale)}
            </h3>
            <div className="space-y-4 mb-8">
              {deliveryOptions.map((option, index) => (
                <motion.a
                  key={option.name}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: 'tween', duration: 0.12, ease: 'easeOut', delay: 0 },
                  }}
                  className="glass-card p-6 rounded-2xl flex items-center gap-4 cursor-pointer"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800">{option.name}</h4>
                    <p className="text-gray-600">{t(i18n.products.orderBtn, locale)}</p>
                  </div>
                  <div className="text-2xl text-gray-400">→</div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{
                scale: 1.05,
                transition: { type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' },
              }}
              className="glass-card p-6 rounded-2xl flex items-center gap-4 cursor-pointer"
              onClick={() => {
                document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="w-16 h-16 bg-donut-chocolate rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-800">
                  {t(i18n.delivery.pickupTitle, locale)}
                </h4>
              </div>
              <div className="text-2xl text-gray-400">→</div>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {deliveryFeatureKeys.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' },
                  }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-donut-chocolate rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{t(i18n.delivery.features[feature.key].title, locale)}</h4>
                  <p className="text-gray-600 text-sm">{t(i18n.delivery.features[feature.key].description, locale)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
