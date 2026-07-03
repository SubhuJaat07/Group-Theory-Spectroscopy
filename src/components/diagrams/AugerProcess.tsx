'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AugerProcess() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Step 1: Photoionization',
      desc: 'A high-energy X-ray photon ejects an electron from the K-shell. A vacancy (hole) is created in the K-shell.',
      highlight: 'k_eject',
    },
    {
      title: 'Step 2: Electron Transition (L to K)',
      desc: 'An electron from the L-shell fills the K-shell vacancy. This transition releases energy.',
      highlight: 'l_transition',
    },
    {
      title: 'Step 3: Auger Electron Emission',
      desc: 'The released energy is absorbed by a second L-shell electron, which is ejected — this is the Auger electron (KLL process).',
      highlight: 'auger',
    },
    {
      title: 'Step 4: Final State',
      desc: 'The molecule now has two holes (in the K and L shells). This is a doubly ionized state. The kinetic energy of the Auger electron is measured.',
      highlight: 'final',
    },
  ];

  return (
    <div className="space-y-3">
      <div className="bg-[#0f172a]/60 rounded-xl p-3 sm:p-4 border border-[#334155]/50">
        <svg viewBox="0 0 320 300" className="w-full h-auto">
          {/* Nucleus */}
          <circle cx="160" cy="260" r="18" fill="#ef4444" opacity="0.2" stroke="#ef4444" strokeWidth="1" />
          <text x="160" y="265" fill="#ef4444" fontSize="11" textAnchor="middle" fontWeight="bold">Nucleus</text>

          {/* K Shell */}
          <circle cx="160" cy="220" r="40" fill="none" stroke={step >= 1 && step < 4 ? '#f59e0b' : '#475569'} strokeWidth="1.5" strokeDasharray={step >= 1 && step < 4 ? "none" : "4 3"} />
          <text x="210" y="215" fill={step >= 1 && step < 4 ? '#f59e0b' : '#475569'} fontSize="12" fontWeight="bold">K</text>

          {/* K Shell electrons */}
          {step === 0 ? (
            <>
              <motion.circle cx="145" cy="215" r="8" fill="#60a5fa" opacity="0.8" animate={{ cx: [145, 175, 145] }} transition={{ duration: 3, repeat: Infinity }} />
              <motion.circle cx="175" cy="215" r="8" fill="#60a5fa" opacity="0.8" animate={{ cx: [175, 145, 175] }} transition={{ duration: 3, repeat: Infinity }} />
            </>
          ) : step < 4 ? (
            <motion.circle cx="175" cy="215" r="8" fill="#60a5fa" opacity="0.8" />
          ) : (
            <motion.circle cx="175" cy="215" r="8" fill="#60a5fa" opacity="0.8" />
          )}

          {/* K Hole indicator */}
          {step >= 1 && step < 4 && (
            <motion.circle cx="145" cy="215" r="10" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
          )}
          {step >= 1 && step < 4 && (
            <text x="145" y="219" fill="#ef4444" fontSize="8" textAnchor="middle">vacancy</text>
          )}

          {/* L Shell */}
          <circle cx="160" cy="220" r="75" fill="none" stroke={step >= 2 ? '#f59e0b' : '#475569'} strokeWidth="1.5" strokeDasharray={step >= 2 ? "none" : "4 3"} />
          <text x="245" y="165" fill={step >= 2 ? '#f59e0b' : '#475569'} fontSize="12" fontWeight="bold">L</text>

          {/* L Shell electrons */}
          {step === 0 && (
            <>
              <motion.circle cx="120" cy="185" r="7" fill="#34d399" opacity="0.7" animate={{ cx: [120, 200, 120] }} transition={{ duration: 4, repeat: Infinity }} />
              <motion.circle cx="200" cy="185" r="7" fill="#34d399" opacity="0.7" animate={{ cx: [200, 120, 200] }} transition={{ duration: 4, repeat: Infinity }} />
              <motion.circle cx="130" cy="260" r="7" fill="#34d399" opacity="0.7" animate={{ cx: [130, 190, 130] }} transition={{ duration: 3.5, repeat: Infinity }} />
              <motion.circle cx="190" cy="260" r="7" fill="#34d399" opacity="0.7" animate={{ cx: [190, 130, 190] }} transition={{ duration: 3.5, repeat: Infinity }} />
            </>
          )}
          {step === 1 && (
            <>
              <motion.circle cx="120" cy="185" r="7" fill="#34d399" opacity="0.7" />
              <motion.circle cx="200" cy="185" r="7" fill="#34d399" opacity="0.7" />
              <motion.circle cx="130" cy="260" r="7" fill="#34d399" opacity="0.7" />
              <motion.circle cx="190" cy="260" r="7" fill="#34d399" opacity="0.7" />
            </>
          )}
          {step === 2 && (
            <>
              <motion.circle cx="200" cy="185" r="7" fill="#34d399" opacity="0.7" />
              <motion.circle cx="130" cy="260" r="7" fill="#34d399" opacity="0.7" />
              <motion.circle cx="190" cy="260" r="7" fill="#34d399" opacity="0.7" />
              {/* One L electron moving to K */}
              <motion.circle cx="120" cy="185" r="7" fill="#f59e0b" opacity="0.9" animate={{ cx: [120, 145], cy: [185, 215] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} />
            </>
          )}
          {step >= 3 && (
            <>
              <motion.circle cx="130" cy="260" r="7" fill="#34d399" opacity="0.7" />
              <motion.circle cx="190" cy="260" r="7" fill="#34d399" opacity="0.7" />
              {/* L hole */}
              <motion.circle cx="200" cy="185" r="9" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            </>
          )}

          {/* Incoming photon */}
          {step === 0 && (
            <motion.g animate={{ x: [0, 0], opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }}>
              <line x1="80" y1="100" x2="140" y2="195" stroke="#fbbf24" strokeWidth="2" />
              <text x="60" y="95" fill="#fbbf24" fontSize="10" fontWeight="bold">h nu (X-ray)</text>
              <polygon points="140,195 133,188 137,197" fill="#fbbf24" />
            </motion.g>
          )}

          {/* Ejected K electron (Step 0 → 1) */}
          {step >= 1 && (
            <motion.g animate={{ x: [0, 40], y: [0, -30], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}>
              <circle cx="120" cy="185" r="7" fill="#60a5fa" />
              <text x="125" y="180" fill="#60a5fa" fontSize="8">e-</text>
            </motion.g>
          )}

          {/* Auger electron (Step 3 → 4) */}
          {step >= 3 && (
            <motion.g animate={{ x: [0, 60], y: [0, -40], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}>
              <circle cx="200" cy="185" r="7" fill="#f472b6" />
              <text x="205" y="180" fill="#f472b6" fontSize="8">e- (Auger)</text>
            </motion.g>
          )}

          {/* Labels */}
          <text x="160" y="295" fill="#94a3b8" fontSize="11" textAnchor="middle" fontWeight="bold">KLL Auger Process</text>
        </svg>
      </div>

      {/* Steps */}
      <div className="flex gap-1.5">
        {steps.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setStep(i)}
            className={`flex-1 h-2 rounded-full cursor-pointer transition-all ${
              step >= i ? 'bg-emerald-500' : 'bg-[#334155]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#0f172a]/40 rounded-lg p-3 border border-[#334155]/30"
      >
        <div className="text-emerald-400 font-semibold text-sm mb-1">{steps[step].title}</div>
        <p className="text-xs sm:text-sm text-slate-300">{steps[step].desc}</p>
      </motion.div>

      {/* Energy equation */}
      <div className="bg-amber-500/10 rounded-lg p-3 border border-amber-500/20">
        <p className="text-xs text-amber-300 font-mono text-center">
          E(Auger) = E(K) - E(L1) - E(L2)
        </p>
        <p className="text-[10px] text-slate-400 text-center mt-1">
          Kinetic energy of the Auger electron = K binding energy - 2 x L binding energy
        </p>
      </div>
    </div>
  );
}