'use client';

import { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/*
 * Позиции по горизонтали: сетка с шагом ~14%, чтобы пончики не накладывались.
 * Размер пончика макс ~8% ширины экрана — зазоры достаточные.
 */
const LEFT_SLOTS = ['4%', '18%', '32%', '46%', '60%', '74%', '88%'] as const;

const TOTAL_DONUTS = 14;
const FIRST_ITERATION_COUNT = Math.ceil(TOTAL_DONUTS / 3); // треть пончиков при первом срабатывании
const SECOND_ITERATION_COUNT = Math.ceil((TOTAL_DONUTS * 2) / 3); // 2/3 со второй итерации

/* Детерминированный «рандом»: индексы слотов и задержки перемешаны для визуально случайного вида */
const SLOT_ORDER = [0, 4, 1, 5, 2, 6, 3, 0, 4, 1, 5, 2, 4, 6];
const DELAYS = [0, 2.2, 4.5, 1, 3.8, 5.5, 0.5, 2.8, 4, 1.5, 3.2, 5, 2, 6];
/* Длительности на 30% больше (скорость падения на 30% ниже) */
const DURATIONS = [9.1, 9.75, 11.4, 8.2, 10.7, 12.2, 9.5, 10.1, 11.7, 8.5, 11, 12.7, 10, 11.2];

/* drift в px: 0 = прямо вниз, ненулевой = падение под углом. rotate = градусы за один проход (вращение при падении). */
const FALLING_DONUTS = [
  { size: 'w-16 h-16 md:w-22 md:h-22', rotate: 720, drift: 0 },
  { size: 'w-14 h-14 md:w-20 md:h-20', rotate: -900, drift: -70 },
  { size: 'w-20 h-20 md:w-28 md:h-28', rotate: 540, drift: 55 },
  { size: 'w-12 h-12 md:w-18 md:h-18', rotate: -720, drift: -85 },
  { size: 'w-18 h-18 md:w-24 md:h-24', rotate: 1080, drift: 0 },
  { size: 'w-16 h-16 md:w-22 md:h-22', rotate: -630, drift: -45 },
  { size: 'w-14 h-14 md:w-20 md:h-20', rotate: 810, drift: 65 },
  { size: 'w-20 h-20 md:w-26 md:h-26', rotate: -540, drift: -90 },
  { size: 'w-16 h-16 md:w-22 md:h-22', rotate: 720, drift: 50 },
  { size: 'w-18 h-18 md:w-24 md:h-24', rotate: -1080, drift: 0 },
  { size: 'w-14 h-14 md:w-20 md:h-20', rotate: 630, drift: -60 },
  { size: 'w-16 h-16 md:w-22 md:h-22', rotate: -720, drift: 75 },
  { size: 'w-10 h-10 md:w-14 md:h-14', rotate: 540, drift: -40 },
  { size: 'w-22 h-22 md:w-30 md:h-30', rotate: -810, drift: 60 },
] as const;

const GRADIENTS = [
  'from-donut-sand to-donut-chocolate',
  'from-donut-chocolate to-donut-peach',
  'from-donut-chocolate to-donut-sand',
  'from-donut-sand to-donut-peach',
] as const;

function DonutRing({ gradient, sizeClass }: { gradient: string; sizeClass: string }) {
  return (
    <div className={`relative ${sizeClass} shrink-0`}>
      <div className={`w-full h-full rounded-full bg-gradient-to-br ${gradient} opacity-60`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[32%] h-[32%] min-w-4 min-h-4 rounded-full bg-donut-cream" />
      </div>
    </div>
  );
}

/*
 * Пончики входят сверху и уходят вниз: старт чуть выше экрана, конец чуть ниже.
 * Сброс цикла (прыжок обратно наверх) происходит за границами экрана, поэтому
 * в середине экрана пончики не меняются и не телепортируются.
 */
const Y_START = '-12vh';
const Y_END = '112vh';

function getVisibleCount(iteration: number): number {
  if (iteration <= 0) return FIRST_ITERATION_COUNT;
  if (iteration === 1) return SECOND_ITERATION_COUNT;
  return TOTAL_DONUTS;
}

export default function ParallaxDonuts() {
  const [iteration, setIteration] = useState(0);
  const completedRef = useRef<Set<number>>(new Set());

  const visibleCount = getVisibleCount(iteration);

  const onCycleComplete = useCallback(
    (i: number) => {
      if (iteration >= 2) return;

      const prevCount = iteration === 0 ? 0 : FIRST_ITERATION_COUNT;
      const newInThisIteration = iteration === 0 ? FIRST_ITERATION_COUNT : SECOND_ITERATION_COUNT - FIRST_ITERATION_COUNT;

      if (i < prevCount || i >= prevCount + newInThisIteration) return;

      completedRef.current.add(i);
      if (completedRef.current.size >= newInThisIteration) {
        completedRef.current.clear();
        setIteration((prev) => Math.min(prev + 1, 2));
      }
    },
    [iteration]
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {FALLING_DONUTS.slice(0, visibleCount).map((donut, i) => (
        <motion.div
          key={i}
          className="absolute top-0 left-0 opacity-[0.18] blur-[2px] will-change-transform"
          style={{ left: LEFT_SLOTS[SLOT_ORDER[i] % LEFT_SLOTS.length] }}
          initial={{
            y: Y_START,
            x: 0,
            rotate: 0,
          }}
          animate={{
            y: Y_END,
            x: donut.drift,
            rotate: donut.rotate,
          }}
          transition={{
            y: {
              duration: DURATIONS[i],
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            },
            x: {
              duration: DURATIONS[i],
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            },
            rotate: {
              duration: DURATIONS[i],
              repeat: Infinity,
              ease: 'linear',
            },
            delay: DELAYS[i],
          }}
          onAnimationComplete={() => onCycleComplete(i)}
        >
          <DonutRing
            gradient={GRADIENTS[i % GRADIENTS.length]}
            sizeClass={donut.size}
          />
        </motion.div>
      ))}
    </div>
  );
}
