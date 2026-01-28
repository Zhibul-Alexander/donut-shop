'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { reviews } from '@/data/donuts';
import { useLocale, t } from '@/hooks/useLocale';
import { i18n } from '@/site.config';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export default function Reviews() {
  const { locale } = useLocale();
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
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
            <span className="text-6xl">💬</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-donut-berry to-donut-chocolate bg-clip-text text-transparent">
            {t(i18n.reviews.title, locale)}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t(i18n.reviews.subtitle, locale)}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={item}
              // Ховер — сразу, без задержки (отдельный transition от анимации появления)
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2, delay: 0 },
              }}
              className="glass-card p-6 rounded-3xl relative"
            >
              <Quote className="absolute top-4 right-4 text-donut-pink opacity-20" size={48} />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-donut-berry to-donut-pink flex items-center justify-center text-white font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{review.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#FFB800" className="text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 italic relative z-10">{review.text}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
