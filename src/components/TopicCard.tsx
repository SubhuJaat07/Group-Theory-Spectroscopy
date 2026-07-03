'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import PYQBadge from './PYQBadge';
import type { ReactNode } from 'react';

interface TopicCardProps {
  title: string;
  pyqCount: number;
  pyqYears?: string;
  children: ReactNode;
  index: number;
  isImportant?: boolean;
}

export default function TopicCard({ title, pyqCount, pyqYears, children, index, isImportant }: TopicCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: 'easeOut' }}
      className="group"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
          isOpen
            ? 'bg-emerald-500/10 border-emerald-500/40 glow-emerald'
            : 'bg-[#1e293b]/80 border-[#334155] hover:border-emerald-500/30 hover:bg-[#1e293b]'
        }`}
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-base sm:text-lg font-semibold text-white truncate">
                {title}
              </h3>
              {isImportant && (
                <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/30">
                  Important
                </span>
              )}
            </div>
            <PYQBadge count={pyqCount} years={pyqYears} />
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
          >
            <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-emerald-400' : 'text-slate-400'}`} />
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-5 pt-2 rounded-b-xl border border-t-0 border-[#334155] bg-[#1e293b]/50">
              <div className="prose prose-invert prose-sm max-w-none">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}