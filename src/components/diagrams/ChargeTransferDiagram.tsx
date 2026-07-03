'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChargeTransferDiagram() {
  const [mode, setMode] = useState<'lmct' | 'mlct' | null>(null);

  return (
    <div className="space-y-3">
      <div className="flex gap-2 mb-2">
        <motion.button
          onClick={() => setMode(mode === 'lmct' ? null : 'lmct')}
          className={`flex-1 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold cursor-pointer transition-all border ${
            mode === 'lmct'
              ? 'bg-orange-500/15 text-orange-400 border-orange-500/30'
              : 'bg-[#1e293b]/50 text-slate-400 border-[#334155]/50 hover:text-white'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          LMCT
        </motion.button>
        <motion.button
          onClick={() => setMode(mode === 'mlct' ? null : 'mlct')}
          className={`flex-1 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold cursor-pointer transition-all border ${
            mode === 'mlct'
              ? 'bg-purple-500/15 text-purple-400 border-purple-500/30'
              : 'bg-[#1e293b]/50 text-slate-400 border-[#334155]/50 hover:text-white'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          MLCT
        </motion.button>
      </div>

      <div className="bg-[#0f172a]/60 rounded-xl p-4 border border-[#334155]/50">
        <svg viewBox="0 0 380 220" className="w-full h-auto">
          {/* Metal Orbital */}
          <motion.rect
            x="40" y="60" width="120" height="100" rx="12"
            fill={mode === 'mlct' ? '#a78bfa' : '#1e293b'}
            stroke={mode === 'mlct' ? '#a78bfa' : '#475569'}
            strokeWidth="2"
            animate={{ y: mode === 'mlct' ? [60, 55, 60] : 60 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <text x="100" y="100" fill={mode === 'mlct' ? '#a78bfa' : '#94a3b8'} fontSize="14" fontWeight="bold" textAnchor="middle">Metal</text>
          <text x="100" y="120" fill={mode === 'mlct' ? '#a78bfa' : '#94a3b8'} fontSize="11" textAnchor="middle">d-orbitals</text>
          {mode === 'mlct' && (
            <motion.circle
              cx="80" cy="135" r="5" fill="#a78bfa"
              animate={{ cx: [80, 100, 80] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          )}

          {/* Ligand Orbital */}
          <motion.rect
            x="220" y="60" width="120" height="100" rx="12"
            fill={mode === 'lmct' ? '#fb923c' : '#1e293b'}
            stroke={mode === 'lmct' ? '#fb923c' : '#475569'}
            strokeWidth="2"
            animate={{ y: mode === 'lmct' ? [60, 55, 60] : 60 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <text x="280" y="100" fill={mode === 'lmct' ? '#fb923c' : '#94a3b8'} fontSize="14" fontWeight="bold" textAnchor="middle">Ligand</text>
          <text x="280" y="120" fill={mode === 'lmct' ? '#fb923c' : '#94a3b8'} fontSize="11" textAnchor="middle">p-orbitals</text>
          {mode === 'lmct' && (
            <motion.circle
              cx="260" cy="135" r="5" fill="#fb923c"
              animate={{ cx: [260, 280, 260] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          )}

          {/* Transfer Arrow LMCT */}
          {mode === 'lmct' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.line
                x1="220" y1="110" x2="165" y2="110"
                stroke="#fb923c" strokeWidth="3"
                animate={{ strokeDashoffset: [0, -20] }}
              />
              <polygon points="165,110 173,106 173,114" fill="#fb923c" />
              <text x="192" y="100" fill="#fb923c" fontSize="10" fontWeight="bold" textAnchor="middle">e-</text>
              <motion.path
                d="M 175 80 Q 192 55 210 80"
                fill="none" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="4 3"
                animate={{ strokeDashoffset: [0, -14] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <text x="192" y="50" fill="#fb923c" fontSize="9" textAnchor="middle">h nu (UV-Vis)</text>
            </motion.g>
          )}

          {/* Transfer Arrow MLCT */}
          {mode === 'mlct' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.line
                x1="160" y1="110" x2="215" y2="110"
                stroke="#a78bfa" strokeWidth="3"
                animate={{ strokeDashoffset: [0, -20] }}
              />
              <polygon points="215,110 207,106 207,114" fill="#a78bfa" />
              <text x="188" y="100" fill="#a78bfa" fontSize="10" fontWeight="bold" textAnchor="middle">e-</text>
              <motion.path
                d="M 175 80 Q 192 55 210 80"
                fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4 3"
                animate={{ strokeDashoffset: [0, -14] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <text x="192" y="50" fill="#a78bfa" fontSize="9" textAnchor="middle">h nu (UV-Vis)</text>
            </motion.g>
          )}

          {/* Bottom labels */}
          {mode === 'lmct' && (
            <text x="190" y="195" fill="#fb923c" fontSize="11" textAnchor="middle" fontWeight="bold">
              Ligand to Metal Charge Transfer
            </text>
          )}
          {mode === 'mlct' && (
            <text x="190" y="195" fill="#a78bfa" fontSize="11" textAnchor="middle" fontWeight="bold">
              Metal to Ligand Charge Transfer
            </text>
          )}
          {!mode && (
            <text x="190" y="195" fill="#64748b" fontSize="11" textAnchor="middle">
              Select LMCT or MLCT to see the transfer
            </text>
          )}

          {/* Examples */}
          {mode === 'lmct' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <rect x="90" y="200" width="200" height="18" rx="4" fill="#fb923c" fillOpacity="0.1" />
              <text x="190" y="213" fill="#fb923c" fontSize="9" textAnchor="middle">
                Example: MnO4- (purple), CrO42- (yellow), TiCl4
              </text>
            </motion.g>
          )}
          {mode === 'mlct' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <rect x="90" y="200" width="200" height="18" rx="4" fill="#a78bfa" fillOpacity="0.1" />
              <text x="190" y="213" fill="#a78bfa" fontSize="9" textAnchor="middle">
                Example: [Ru(bpy)3]2+ (MLCT), [Fe(CN)6]3-
              </text>
            </motion.g>
          )}
        </svg>
      </div>
    </div>
  );
}