'use client';

import { motion } from 'framer-motion';
import TopicCard from './TopicCard';
import type { ReactNode } from 'react';

export interface TopicData {
  title: string;
  pyqCount: number;
  pyqYears?: string;
  content: ReactNode;
  isImportant?: boolean;
}

interface UnitSectionProps {
  unitNumber: number;
  unitTitle: string;
  topics: TopicData[];
}

export default function UnitSection({ unitNumber, unitTitle, topics }: UnitSectionProps) {
  const colors = ['from-emerald-500 to-teal-500', 'from-teal-500 to-cyan-500', 'from-cyan-400 to-emerald-400'];
  const gradientClass = colors[(unitNumber - 1) % 3];

  return (
    <section id={`unit-${unitNumber}`} className="py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
            UNIT {unitNumber}
          </span>
          <div className={`flex-1 h-px bg-gradient-to-r ${gradientClass} opacity-30`} />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white/90">{unitTitle}</h2>
        <p className="text-sm text-slate-400 mt-1">10 Marks | {topics.length} Topics</p>
      </motion.div>

      <div className="space-y-3">
        {topics.map((topic, i) => (
          <TopicCard
            key={topic.title}
            title={topic.title}
            pyqCount={topic.pyqCount}
            pyqYears={topic.pyqYears}
            index={i}
            isImportant={topic.isImportant}
          >
            {topic.content}
          </TopicCard>
        ))}
      </div>
    </section>
  );
}