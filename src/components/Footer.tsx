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
              <span className="text-white font-black text-base">S</span>
            </div>
            <span className="font-bold text-white">Subhu Creation</span>
          </div>
          <p className="text-slate-400 text-sm">
            Created by <span className="text-emerald-400 font-semibold">Subhu Jaat</span> |{' '}
            <span className="text-teal-400">Tagore College, Kuchaman City</span>
          </p>
          <p className="text-slate-500 text-xs mt-2">
            M.Sc. Chemistry Paper IX — Group Theory &amp; Spectroscopy • Interactive Study Material
          </p>
        </motion.div>
      </div>
    </footer>
  );
}