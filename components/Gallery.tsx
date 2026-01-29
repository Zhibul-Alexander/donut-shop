'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { galleryImages, i18n } from '@/site.config';
import { useLocale, t } from '@/hooks/useLocale';

// Раскладка мозаики: 1 — квадрат, 4 и 5 — горизонтально, 2/3/6 — вертикально. 5 в верхнем ряду с основными.
const mosaicLayout = [
  { col: '1/2', row: '1/2', aspect: 'aspect-square' }, // 1 — квадрат
  { col: '2/3', row: '1/2', aspect: 'aspect-[3/4]' }, // 2 — вертикально
  { col: '1/2', row: '2/3', aspect: 'aspect-[3/4]' }, // 3 — вертикально
  { col: '2/4', row: '2/3', aspect: 'aspect-video' }, // 4 — горизонтально, внизу
  { col: '3/5', row: '1/2', aspect: 'aspect-video' }, // 5 — горизонтально, в верхнем ряду
  { col: '4/5', row: '2/3', aspect: 'aspect-[3/4]' }, // 6 — вертикально
];

export default function Gallery() {
  const { locale } = useLocale();
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-donut-chocolate">
            {t(i18n.gallery.title, locale)}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t(i18n.gallery.subtitle, locale)}
          </p>
        </motion.div>

        {/* Мобильная сетка: 2 колонки */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`relative overflow-hidden rounded-2xl shadow-lg ${
                item.format === 'square'
                  ? 'aspect-square'
                  : item.format === 'horizontal'
                    ? 'aspect-video col-span-2'
                    : 'aspect-[3/4]'
              }`}
            >
              <Image
                src={item.src}
                alt={`Gallery ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Десктопная мозаика: 4 колонки */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hidden md:grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: 'minmax(160px, 1fr)',
          }}
        >
          {galleryImages.map((item, index) => {
            const layout = mosaicLayout[index];
            return (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // Задержка только для появления карточки
                transition={{ delay: index * 0.1, duration: 0.4 }}
                // При ховере масштабируем сразу, без задержки
                whileHover={{
                  scale: 1.02,
                  zIndex: 10,
                  transition: { duration: 0.2, delay: 0 },
                }}
                className={`relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/20 ${
                  layout.aspect
                }`}
                style={{
                  gridColumn: layout.col,
                  gridRow: layout.row,
                }}
              >
                <Image
                  src={item.src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
