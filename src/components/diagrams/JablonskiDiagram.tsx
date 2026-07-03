'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const transitions = [
  {
    id: 'absorption',
    label: 'Absorption (S0 to S1)',
    from: { x: 120, y: 210 },
    to: { x: 120, y: 120 },
    color: '#60a5fa',
    desc: 'The electron jumps from the ground state to the excited state. A photon is absorbed (occurs in ~10^-15 s).',
  },
  {
    id: 'vr',
    label: 'Vibrational Relaxation',
    from: { x: 120, y: 120 },
    to: { x: 120, y: 135 },
    color: '#a78bfa',
    desc: 'Non-radiative process — excess vibrational energy is transferred to surrounding molecules (~10^-12 s).',
  },
  {
    id: 'ic',
    label: 'Internal Conversion (S1 to S0)',
    from: { x: 140, y: 135 },
    to: { x: 140, y: 210 },
    color: '#f472b6',
    desc: 'Non-radiative transition between states of the same spin multiplicity. The molecule returns from S1 to S0 without emitting light.',
  },
  {
    id: 'isc',
    label: 'Intersystem Crossing (S1 to T1)',
    from: { x: 180, y: 135 },
    to: { x: 220, y: 145 },
    color: '#fb923c',
    desc: 'Transition between states of different spin multiplicity. The molecule goes from a singlet to a triplet state — spin-forbidden but made possible by spin-orbit coupling.',
  },
  {
    id: 'fluorescence',
    label: 'Fluorescence (S1 to S0)',
    from: { x: 100, y: 135 },
    to: { x: 100, y: 210 },
    color: '#34d399',
    desc: 'Radiative decay between states of the same spin multiplicity. A fast process (~10^-9 s). The emission wavelength is longer than the absorption wavelength (Stokes shift).',
  },
  {
    id: 'phosphorescence',
    label: 'Phosphorescence (T1 to S0)',
    from: { x: 220, y: 145 },
    to: { x: 250, y: 210 },
    color: '#fbbf24',
    desc: 'Spin-forbidden radiative decay. A very slow process (~10^-3 s to hours). This is why phosphorescent materials continue to glow after the excitation source is removed.',
  },
];

export default function JablonskiDiagram() {
  const [activeTransition, setActiveTransition] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      <div className="bg-[#0f172a]/60 rounded-xl p-3 sm:p-4 border border-[#334155]/50">
        <svg viewBox="0 0 340 270" className="w-full h-auto">
          {/* Singlet States */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            {/* S0 */}
            <line x1="50" y1="220" x2="170" y2="220" stroke="#10b981" strokeWidth="3" />
            <text x="35" y="224" fill="#10b981" fontSize="13" fontWeight="bold">S0</text>
            {/* S1 */}
            <line x1="70" y1="120" x2="170" y2="120" stroke="#10b981" strokeWidth="3" />
            <text x="55" y="124" fill="#10b981" fontSize="13" fontWeight="bold">S1</text>
            {/* S2 */}
            <line x1="80" y1="60" x2="170" y2="60" stroke="#10b981" strokeWidth="3" />
            <text x="65" y="64" fill="#10b981" fontSize="13" fontWeight="bold">S2</text>

            {/* VR arrows in S2 */}
            <motion.line x1="130" y1="60" x2="150" y2="70" stroke="#10b981" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
            <motion.line x1="130" y1="70" x2="150" y2="80" stroke="#10b981" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
            {/* VR arrows in S1 */}
            <motion.line x1="130" y1="120" x2="150" y2="130" stroke="#10b981" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
            <motion.line x1="130" y1="130" x2="150" y2="140" stroke="#10b981" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
          </motion.g>

          {/* Triplet States */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            {/* T1 */}
            <line x1="200" y1="140" x2="280" y2="140" stroke="#f59e0b" strokeWidth="3" />
            <text x="285" y="144" fill="#f59e0b" fontSize="13" fontWeight="bold">T1</text>
            {/* T2 */}
            <line x1="210" y1="75" x2="280" y2="75" stroke="#f59e0b" strokeWidth="3" />
            <text x="285" y="79" fill="#f59e0b" fontSize="13" fontWeight="bold">T2</text>

            {/* VR in T1 */}
            <motion.line x1="230" y1="140" x2="260" y2="150" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
          </motion.g>

          {/* Absorption arrows */}
          <motion.line x1="110" y1="218" x2="115" y2="62" stroke="#60a5fa" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
          <motion.polygon points="115,62 112,70 118,70" fill="#60a5fa" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />

          {/* Animated transitions */}
          {activeTransition === 'vr' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <line x1="100" y1="62" x2="95" y2="120" stroke="#a78bfa" strokeWidth="2.5" strokeDasharray="6 3" />
              <text x="60" y="95" fill="#a78bfa" fontSize="9">VR</text>
            </motion.g>
          )}
          {activeTransition === 'ic' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <line x1="160" y1="120" x2="160" y2="222" stroke="#f472b6" strokeWidth="2.5" strokeDasharray="6 3" />
              <text x="163" y="175" fill="#f472b6" fontSize="9">IC</text>
            </motion.g>
          )}
          {activeTransition === 'isc' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <path d="M 170,125 Q 185,125 200,140" fill="none" stroke="#fb923c" strokeWidth="2.5" strokeDasharray="6 3" />
              <text x="170" y="115" fill="#fb923c" fontSize="9">ISC</text>
            </motion.g>
          )}
          {activeTransition === 'fluorescence' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <line x1="85" y1="122" x2="80" y2="218" stroke="#34d399" strokeWidth="2.5" />
              <polygon points="80,218 77,210 83,210" fill="#34d399" />
              <text x="55" y="175" fill="#34d399" fontSize="8">Fluor.</text>
            </motion.g>
          )}
          {activeTransition === 'phosphorescence' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <line x1="240" y1="142" x2="245" y2="218" stroke="#fbbf24" strokeWidth="2.5" />
              <polygon points="245,218 242,210 248,210" fill="#fbbf24" />
              <text x="248" y="185" fill="#fbbf24" fontSize="8">Phos.</text>
            </motion.g>
          )}
          {activeTransition === 'absorption' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <circle cx="115" cy="62" r="4" fill="#60a5fa" />
              <motion.circle
                cx="115" cy="62" r="4" fill="#60a5fa"
                animate={{ r: [4, 12, 4], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.g>
          )}

          {/* Labels */}
          <text x="140" y="250" fill="#94a3b8" fontSize="10" textAnchor="middle">Singlet States (Spin = 0)</text>
          <text x="240" y="250" fill="#94a3b8" fontSize="10" textAnchor="middle">Triplet States (Spin = 1)</text>

          {/* Energy axis */}
          <line x1="30" y1="240" x2="30" y2="40" stroke="#475569" strokeWidth="1" />
          <polygon points="30,38 27,45 33,45" fill="#475569" />
          <text x="15" y="35" fill="#64748b" fontSize="9">E</text>
        </svg>
      </div>

      {/* Transition buttons */}
      <div className="flex flex-wrap gap-1.5">
        {transitions.map((t) => (
          <motion.button
            key={t.id}
            onClick={() => setActiveTransition(activeTransition === t.id ? null : t.id)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-medium cursor-pointer transition-all border ${
              activeTransition === t.id
                ? 'border-emerald-500/40 bg-emerald-500/10 text-white'
                : 'border-[#334155]/50 bg-[#1e293b]/50 text-slate-400 hover:text-white'
            }`}
            style={{ borderColor: activeTransition === t.id ? t.color + '60' : undefined }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTransition && (
          <motion.div
            key={activeTransition}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-xs sm:text-sm text-slate-300 bg-[#0f172a]/40 rounded-lg p-3 border border-[#334155]/30"
            style={{ borderLeftColor: transitions.find(t => t.id === activeTransition)?.color + '60' }}
          >
            {transitions.find(t => t.id === activeTransition)?.desc}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}