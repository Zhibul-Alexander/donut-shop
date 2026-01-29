'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Clock, Leaf } from 'lucide-react';
import { useLocale, t } from '@/hooks/useLocale';
import { i18n } from '@/site.config';

export default function About() {
  const { locale } = useLocale();
  const features = [
    { icon: Heart, key: 'love' as const },
    { icon: Clock, key: 'fresh' as const },
    { icon: Leaf, key: 'natural' as const },
  ];
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="text-6xl">✨</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-donut-chocolate">
              {t(i18n.about.title, locale)}
            </h2>

            <div className="space-y-4 text-lg text-gray-700 mb-8">
              <p>{t(i18n.about.text1, locale)}</p>
              <p>{t(i18n.about.text2, locale)}</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' }}
                    className="glass-card p-6 rounded-2xl flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-donut-chocolate rounded-xl flex items-center justify-center">
                      <feature.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {t(i18n.about.features[feature.key].title, locale)}
                      </h3>
                      <p className="text-gray-600">
                        {t(i18n.about.features[feature.key].description, locale)}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats and Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6 shrink-0">
                {[
                { valueKey: 'customersValue' as const, labelKey: 'customersLabel' as const },
                { valueKey: 'years' as const, labelKey: 'yearsLabel' as const },
                { valueKey: 'flavorsValue' as const, labelKey: 'flavorsLabel' as const },
                { valueKey: 'naturalValue' as const, labelKey: 'naturalLabel' as const },
                ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4, ease: 'easeOut' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' }}
                    className="glass-card p-6 rounded-2xl text-center"
                  >
                    <div className="text-3xl font-bold text-donut-chocolate mb-2">
                      {t(i18n.about.stats[stat.valueKey], locale)}
                    </div>
                    {stat.labelKey && (
                      <div className="text-sm text-gray-600">
                        {t(i18n.about.stats[stat.labelKey], locale)}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Изображение магазина */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex-1 min-h-0"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' }}
                className="glass-card rounded-3xl overflow-hidden relative h-full"
              >
                <Image
                  src="/logo.webp"
                  alt="Donut Dreams — наш магазин"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
