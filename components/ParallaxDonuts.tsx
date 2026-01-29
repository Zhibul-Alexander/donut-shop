'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

export default function ParallaxDonuts() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -300]);
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 360]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -360]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Donut 1 - Top Right */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-20 right-10 opacity-20 blur-sm"
      >
        <div className="relative w-32 h-32 md:w-48 md:h-48 animate-spin-slow">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-donut-sand to-donut-chocolate opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-donut-cream" />
          </div>
        </div>
      </motion.div>

      {/* Donut 2 - Middle Left */}
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-1/3 left-5 opacity-15 blur-sm"
      >
        <div className="relative w-40 h-40 md:w-56 md:h-56 animate-spin-slower">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-donut-chocolate to-donut-peach opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-donut-cream" />
          </div>
        </div>
      </motion.div>

      {/* Donut 3 - Bottom Right */}
      <motion.div
        style={{ y: y3, rotate: rotate1 }}
        className="absolute bottom-40 right-20 opacity-10 blur-sm"
      >
        <div className="relative w-36 h-36 md:w-52 md:h-52 animate-spin-slow">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-donut-chocolate to-donut-sand opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 md:w-22 md:h-22 rounded-full bg-donut-cream" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
