'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-[#334155] mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <span className="font-bold text-white">Paper IX - Group Theory & Spectroscopy</span>
          </div>
          <p className="text-slate-400 text-sm">
            Created by <span className="text-emerald-400 font-semibold">Subhu Jaat</span> |{' '}
            <span className="text-teal-400">Tagore College, Chuchaman City</span>
          </p>
          <p className="text-slate-500 text-xs mt-2">
            M.Sc. Chemistry • Interactive Study Material • All PYQs Covered
          </p>
        </motion.div>
      </div>
    </footer>
  );
}