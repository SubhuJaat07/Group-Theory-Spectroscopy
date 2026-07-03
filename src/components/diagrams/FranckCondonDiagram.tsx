'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FranckCondonDiagram() {
  const [step, setStep] = useState(0);
  const steps = [
    'Ground state (S₀) ke vibrational levels dekho — energy lowest pe hai',
    'Absorption! Electron jump karta hai ground state se excited state (S₁) pe — VERTICAL transition (Franck-Condon)',
    'Kyunki vertical transition hai, nuclear position change nahi hota — isliye v\' = 2 pe maximum probability',
    'Relaxation — vibrational energy lose hoti hai aur molecule lowest excited level (v\' = 0) pe aata hai',
    'Emission! Electron wapas ground state pe aata hai — phir se VERTICAL transition',
    'Stokes shift — Emission wavelength absorption se zyada hoti hai (energy loss ke karan)',
  ];

  return (
    <div className="space-y-3">
      <div className="bg-[#0f172a]/60 rounded-xl p-3 sm:p-4 border border-[#334155]/50">
        <svg viewBox="0 0 400 280" className="w-full h-auto">
          {/* Ground State Curve (S₀) */}
          <motion.path
            d="M 60,220 Q 120,218 180,200 Q 230,180 260,200 Q 290,220 340,220"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.text
            x="30" y="224"
            fill="#10b981"
            fontSize="14"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            S₀
          </motion.text>

          {/* Vibrational levels S₀ */}
          {[0, 1, 2].map((v) => (
            <motion.line
              key={`g${v}`}
              x1={130 + v * 25}
              y1={220 - v * 10 - 2}
              x2={270 - v * 20}
              y2={220 - v * 10 - 2}
              stroke="#10b981"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity={0.4}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.5 + v * 0.2 }}
            />
          ))}

          {/* Excited State Curve (S₁) */}
          <motion.path
            d="M 100,80 Q 150,60 200,55 Q 250,60 300,80 Q 330,110 360,160"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.text
            x="365" y="165"
            fill="#f59e0b"
            fontSize="14"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            S₁
          </motion.text>

          {/* Vibrational levels S₁ */}
          {[0, 1, 2, 3].map((v) => (
            <motion.line
              key={`e${v}`}
              x1={155 + v * 10}
              y1={85 + v * 8 + 3}
              x2={265 - v * 15}
              y2={85 + v * 8 + 3}
              stroke="#f59e0b"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity={0.4}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.8 + v * 0.15 }}
            />
          ))}

          {/* Vertical arrow - Absorption */}
          {step >= 1 && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <line x1="195" y1="215" x2="195" y2="103" stroke="#60a5fa" strokeWidth="2.5" />
              <polygon points="195,98 190,108 200,108" fill="#60a5fa" />
              <text x="200" y="165" fill="#60a5fa" fontSize="11" fontWeight="bold">Absorption</text>
              <text x="200" y="178" fill="#60a5fa" fontSize="9">(v=0→v&apos;=2)</text>
            </motion.g>
          )}

          {/* Vibrational Relaxation */}
          {step >= 3 && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <line x1="195" y1="103" x2="170" y2="88" stroke="#a78bfa" strokeWidth="2" strokeDasharray="5 3" />
              <polygon points="168,90 175,85 170,92" fill="#a78bfa" />
              <text x="115" y="78" fill="#a78bfa" fontSize="9">VR Relaxation</text>
            </motion.g>
          )}

          {/* Vertical arrow - Emission */}
          {step >= 4 && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <line x1="170" y1="88" x2="155" y2="210" stroke="#f472b6" strokeWidth="2.5" />
              <polygon points="155,215 150,205 160,205" fill="#f472b6" />
              <text x="100" y="155" fill="#f472b6" fontSize="11" fontWeight="bold">Emission</text>
              <text x="95" y="168" fill="#f472b6" fontSize="9">(v&apos;=0→v=1)</text>
            </motion.g>
          )}

          {/* Stokes shift bracket */}
          {step >= 5 && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <line x1="50" y1="215" x2="50" y2="103" stroke="#fbbf24" strokeWidth="1.5" />
              <line x1="45" y1="215" x2="55" y2="215" stroke="#fbbf24" strokeWidth="1.5" />
              <line x1="45" y1="103" x2="55" y2="103" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="10" y="163" fill="#fbbf24" fontSize="9" fontWeight="bold">Stokes</text>
              <text x="10" y="174" fill="#fbbf24" fontSize="9" fontWeight="bold">Shift</text>
            </motion.g>
          )}

          {/* Energy axis */}
          <line x1="50" y1="240" x2="50" y2="40" stroke="#475569" strokeWidth="1" />
          <polygon points="50,38 47,45 53,45" fill="#475569" />
          <text x="30" y="35" fill="#94a3b8" fontSize="10">Energy</text>

          {/* Internuclear distance axis */}
          <line x1="50" y1="240" x2="390" y2="240" stroke="#475569" strokeWidth="1" />
          <polygon points="392,240 385,237 385,243" fill="#475569" />
          <text x="350" y="255" fill="#94a3b8" fontSize="9">r (Internuclear distance)</text>
        </svg>
      </div>

      {/* Step buttons */}
      <div className="flex flex-wrap gap-1.5">
        {steps.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setStep(i)}
            className={`w-7 h-7 rounded-lg text-xs font-bold cursor-pointer transition-all ${
              step >= i
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-[#334155]/50 text-slate-500 border border-transparent'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {i + 1}
          </motion.button>
        ))}
      </div>
      <motion.p
        key={step}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs sm:text-sm text-slate-300 bg-[#0f172a]/40 rounded-lg p-3 border border-[#334155]/30"
      >
        <span className="text-emerald-400 font-semibold">Step {step + 1}:</span> {steps[step]}
      </motion.p>
    </div>
  );
}