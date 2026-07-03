'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ESRDiagram() {
  const [showZeeman, setShowZeeman] = useState(true);
  const [showHyperfine, setShowHyperfine] = useState(false);

  return (
    <div className="space-y-3">
      {/* Controls */}
      <div className="flex flex-wrap gap-2">
        <motion.button
          onClick={() => { setShowZeeman(!showZeeman); if (!showZeeman) setShowHyperfine(false); }}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all border ${
            showZeeman ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' : 'bg-[#1e293b]/50 text-slate-400 border-[#334155]/50'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Zeeman Splitting
        </motion.button>
        <motion.button
          onClick={() => setShowHyperfine(!showHyperfine)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all border ${
            showHyperfine ? 'bg-amber-500/15 text-amber-400 border-amber-500/30' : 'bg-[#1e293b]/50 text-slate-400 border-[#334155]/50'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hyperfine Splitting (I = 1/2)
        </motion.button>
      </div>

      <div className="bg-[#0f172a]/60 rounded-xl p-3 sm:p-4 border border-[#334155]/50">
        <svg viewBox="0 0 380 280" className="w-full h-auto">
          {/* Energy axis */}
          <line x1="50" y1="260" x2="50" y2="20" stroke="#475569" strokeWidth="1" />
          <polygon points="50,18 47,25 53,25" fill="#475569" />
          <text x="30" y="15" fill="#64748b" fontSize="9">Energy</text>

          {/* External Magnetic Field arrow */}
          <line x1="320" y1="250" x2="320" y2="30" stroke="#f59e0b" strokeWidth="1.5" />
          <polygon points="320,28 317,35 323,35" fill="#f59e0b" />
          <text x="330" y="15" fill="#f59e0b" fontSize="9" fontWeight="bold">B0</text>

          {/* No field - degenerate */}
          {!showZeeman && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <line x1="80" y1="150" x2="180" y2="150" stroke="#10b981" strokeWidth="3" />
              <text x="130" y="145" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">ms = +/-1/2</text>
              <text x="130" y="175" fill="#94a3b8" fontSize="10" textAnchor="middle">B = 0: Degenerate</text>
            </motion.g>
          )}

          {/* Zeeman Splitting */}
          {showZeeman && !showHyperfine && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {/* Upper level ms = -1/2 */}
              <motion.line
                x1="100" y1={100}
                x2="200" y2={100}
                stroke="#60a5fa" strokeWidth="3"
                initial={{ y1: 150, y2: 150 }}
                animate={{ y1: 100, y2: 100 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
              <motion.text
                x="210" y={104}
                fill="#60a5fa" fontSize="11" fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                ms = -1/2 (beta)
              </motion.text>

              {/* Lower level ms = +1/2 */}
              <motion.line
                x1="100" y1={200}
                x2="200" y2={200}
                stroke="#f472b6" strokeWidth="3"
                initial={{ y1: 150, y2: 150 }}
                animate={{ y1: 200, y2: 200 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
              <motion.text
                x="210" y={204}
                fill="#f472b6" fontSize="11" fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                ms = +1/2 (alpha)
              </motion.text>

              {/* Transition arrow */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                <motion.line
                  x1="150" y1="195" x2="150" y2="105"
                  stroke="#fbbf24" strokeWidth="2.5"
                  animate={{ strokeDashoffset: [0, -16] }}
                />
                <polygon points="150,105 146,115 154,115" fill="#fbbf24" />
                <motion.path
                  d="M 155 140 Q 170 130 155 120"
                  fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 3"
                  animate={{ strokeDashoffset: [0, -14] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <text x="170" y="155" fill="#fbbf24" fontSize="10" fontWeight="bold">h nu = g beta_e B0</text>
              </motion.g>

              {/* Gap label */}
              <motion.text
                x="80" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              >
                delta_E
              </motion.text>
              <motion.line
                x1="80" y1="105" x2="80" y2="195"
                stroke="#475569" strokeWidth="1"
                initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1 }}
              />

              {/* Spectrum hint */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                <rect x="80" y="230" width="140" height="40" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                <text x="150" y="245" fill="#94a3b8" fontSize="9" textAnchor="middle">ESR Signal</text>
                <motion.path
                  d="M 100 255 L 130 255 L 140 235 L 150 255 L 160 255 L 170 255"
                  fill="none" stroke="#fbbf24" strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                />
              </motion.g>
            </motion.g>
          )}

          {/* Hyperfine Splitting */}
          {showZeeman && showHyperfine && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {/* Upper level split into 2 */}
              <motion.line
                x1="90" y1={80} x2="170" y2={80}
                stroke="#60a5fa" strokeWidth="2.5"
                initial={{ x1: 100, x2: 200 }}
                animate={{ x1: 90, x2: 170 }}
              />
              <text x="175" y="84" fill="#60a5fa" fontSize="9">ms=-1/2, mI=+1/2</text>

              <motion.line
                x1="90" y1={120} x2="170" y2={120}
                stroke="#818cf8" strokeWidth="2.5"
                initial={{ x1: 100, x2: 200 }}
                animate={{ x1: 90, x2: 170 }}
              />
              <text x="175" y="124" fill="#818cf8" fontSize="9">ms=-1/2, mI=-1/2</text>

              {/* Lower level split into 2 */}
              <motion.line
                x1="90" y1={180} x2="170" y2={180}
                stroke="#f472b6" strokeWidth="2.5"
                initial={{ x1: 100, x2: 200 }}
                animate={{ x1: 90, x2: 170 }}
              />
              <text x="175" y="184" fill="#f472b6" fontSize="9">ms=+1/2, mI=+1/2</text>

              <motion.line
                x1="90" y1={220} x2="170" y2={220}
                stroke="#fb7185" strokeWidth="2.5"
                initial={{ x1: 100, x2: 200 }}
                animate={{ x1: 90, x2: 170 }}
              />
              <text x="175" y="224" fill="#fb7185" fontSize="9">ms=+1/2, mI=-1/2</text>

              {/* Selection rule transitions (delta mI = 0) */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                {/* Transition 1 */}
                <line x1="115" y1="176" x2="115" y2="84" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 2" />
                <polygon points="115,84 112,92 118,92" fill="#fbbf24" />
                {/* Transition 2 */}
                <line x1="145" y1="176" x2="145" y2="124" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 2" />
                <polygon points="145,124 142,132 148,132" fill="#34d399" />
              </motion.g>

              {/* Selection rule label */}
              <motion.text
                x="130" y="152" fill="#fbbf24" fontSize="9" textAnchor="middle" fontWeight="bold"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              >
                delta_ms = +/-1, delta_mI = 0
              </motion.text>

              {/* Doublet spectrum */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                <rect x="60" y="240" width="180" height="35" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                <text x="150" y="252" fill="#94a3b8" fontSize="8" textAnchor="middle">Hyperfine Doublet (I=1/2, 2I+1=2 lines)</text>
                <motion.path
                  d="M 75 268 L 110 268 L 120 252 L 128 268 L 155 268 L 163 252 L 172 268 L 210 268"
                  fill="none" stroke="#fbbf24" strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                />
                <text x="124" y="278" fill="#fbbf24" fontSize="7" textAnchor="middle">a/2</text>
                <text x="168" y="278" fill="#34d399" fontSize="7" textAnchor="middle">a/2</text>
                <line x1="146" y1="265" x2="146" y2="275" stroke="#94a3b8" strokeWidth="0.5" />
              </motion.g>
            </motion.g>
          )}
        </svg>
      </div>
    </div>
  );
}