'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const operations = [
  {
    id: 'E',
    label: 'E (Identity)',
    desc: 'Kuch nahi hota - molecule apni original position mein rehta hai',
  },
  {
    id: 'C2',
    label: 'C₂ (Rotation)',
    desc: '180° rotation ke baad bhi molecule same dikhta hai',
  },
  {
    id: 'sv',
    label: "σv (Vertical Plane)",
    desc: 'Ek vertical plane mein reflection - left-right mirror image',
  },
  {
    id: 'svp',
    label: "σv' (Vertical Plane)",
    desc: 'Doosri vertical plane mein reflection - upar-niche mirror image',
  },
];

function H2OMolecule({ mode }: { mode: string }) {
  const getTransform = () => {
    switch (mode) {
      case 'E': return {};
      case 'C2': return { transform: 'rotateY(180deg)' };
      case 'sv': return { transform: 'scaleX(-1)' };
      case 'svp': return { transform: 'scaleY(-1)' };
      default: return {};
    }
  };

  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto">
      {/* Reference planes */}
      {mode === 'sv' && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-amber-400/40 -translate-x-1/2 z-0"
        />
      )}
      {mode === 'svp' && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          className="absolute left-0 right-0 top-1/2 h-0.5 bg-amber-400/40 -translate-y-1/2 z-0"
        />
      )}
      {mode === 'C2' && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-teal-400/40 -translate-x-1/2 z-0 border-l-2 border-dashed border-teal-400/60"
        />
      )}

      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full relative z-10"
        style={{ perspective: '800px' }}
      >
        {/* H-O-H Molecule */}
        <motion.g
          animate={mode === 'C2' ? {
            rotate: [0, 180],
          } : mode === 'sv' ? {
            scaleX: [1, -1],
          } : mode === 'svp' ? {
            scaleY: [1, -1],
          } : {}}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{ transformOrigin: '100px 80px' }}
        >
          {/* O atom */}
          <circle cx="100" cy="80" r="22" fill="#ef4444" opacity="0.9" />
          <text x="100" y="86" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">O</text>

          {/* H atom left */}
          <circle cx="40" cy="150" r="16" fill="#60a5fa" opacity="0.9" />
          <text x="40" y="156" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">H</text>

          {/* H atom right */}
          <circle cx="160" cy="150" r="16" fill="#60a5fa" opacity="0.9" />
          <text x="160" y="156" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">H</text>

          {/* Bonds */}
          <line x1="100" y1="100" x2="52" y2="138" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
          <line x1="100" y1="100" x2="148" y2="138" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
        </motion.g>
      </motion.svg>
    </div>
  );
}

export default function SymmetryOperations() {
  const [activeOp, setActiveOp] = useState('E');

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {operations.map((op) => (
          <motion.button
            key={op.id}
            onClick={() => setActiveOp(op.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeOp === op.id
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                : 'bg-[#334155]/50 text-slate-400 border border-transparent hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {op.label}
          </motion.button>
        ))}
      </div>

      <div className="bg-[#0f172a]/60 rounded-xl p-4 border border-[#334155]/50">
        <H2OMolecule mode={activeOp} />
        <AnimatePresence mode="wait">
          <motion.p
            key={activeOp}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-center text-sm text-slate-300 mt-2"
          >
            {operations.find(o => o.id === activeOp)?.desc}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="bg-[#0f172a]/40 rounded-lg p-3 border border-[#334155]/30">
        <p className="text-xs text-slate-400">
          <span className="text-emerald-400 font-semibold">H₂O Point Group: C₂v</span> — Total 4 symmetry operations: E, C₂, σv(xz), σv&apos;(yz).
          H₂O ke paas inversion center (i) nahi hota aur improper rotation (Sₙ) bhi nahi hota.
        </p>
      </div>
    </div>
  );
}