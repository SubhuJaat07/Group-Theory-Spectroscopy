'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RamanDiagram() {
  const [activeMode, setActiveMode] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      <div className="bg-[#0f172a]/60 rounded-xl p-3 sm:p-4 border border-[#334155]/50">
        <svg viewBox="0 0 400 260" className="w-full h-auto">
          {/* Ground and excited virtual states */}
          {/* Ground v=0 */}
          <line x1="80" y1="220" x2="170" y2="220" stroke="#10b981" strokeWidth="2.5" />
          <text x="60" y="224" fill="#10b981" fontSize="12" fontWeight="bold">v=0</text>

          {/* Ground v=1 */}
          <line x1="80" y1="185" x2="170" y2="185" stroke="#10b981" strokeWidth="2" opacity="0.6" />
          <text x="60" y="189" fill="#10b981" fontSize="12" fontWeight="bold" opacity="0.6">v=1</text>

          {/* Virtual states */}
          <motion.rect
            x="180" y="70" width="80" height="160" rx="8"
            fill="#334155" fillOpacity="0.2"
            stroke="#475569" strokeWidth="1" strokeDasharray="6 3"
          />
          <text x="200" y="60" fill="#94a3b8" fontSize="10" textAnchor="middle">Virtual State</text>

          {/* Rayleigh Scattering */}
          <g>
            <motion.line
              x1="130" y1="218"
              x2="130" y2="82"
              stroke="#94a3b8"
              strokeWidth={activeMode === 'rayleigh' ? 3 : 1.5}
              strokeDasharray="none"
              opacity={activeMode && activeMode !== 'rayleigh' ? 0.15 : 1}
            />
            <motion.line
              x1="140" y1="82"
              x2="140" y2="218"
              stroke="#94a3b8"
              strokeWidth={activeMode === 'rayleigh' ? 3 : 1.5}
              opacity={activeMode && activeMode !== 'rayleigh' ? 0.15 : 1}
            />
            <motion.polygon
              points="140,218 137,210 143,210"
              fill="#94a3b8"
              opacity={activeMode && activeMode !== 'rayleigh' ? 0.15 : 1}
            />
            {activeMode === 'rayleigh' && (
              <motion.circle cx="135" cy="82" r="6" fill="#94a3b8" animate={{ r: [6, 14, 6], opacity: [0.8, 0.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }} />
            )}
          </g>

          {/* Stokes Scattering */}
          <g>
            <motion.line
              x1="220" y1="218"
              x2="220" y2="82"
              stroke="#60a5fa"
              strokeWidth={activeMode === 'stokes' ? 3 : 1.5}
              opacity={activeMode && activeMode !== 'stokes' ? 0.15 : 1}
            />
            <motion.line
              x1="230" y1="82"
              x2="230" y2={183}
              stroke="#f472b6"
              strokeWidth={activeMode === 'stokes' ? 3 : 1.5}
              opacity={activeMode && activeMode !== 'stokes' ? 0.15 : 1}
            />
            <motion.polygon
              points="230,183 227,190 233,190"
              fill="#f472b6"
              opacity={activeMode && activeMode !== 'stokes' ? 0.15 : 1}
            />
            {activeMode === 'stokes' && (
              <>
                <motion.circle cx="225" cy="82" r="5" fill="#60a5fa" animate={{ r: [5, 12, 5], opacity: [0.8, 0.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <motion.circle cx="230" cy="183" r="5" fill="#f472b6" animate={{ r: [5, 12, 5], opacity: [0.8, 0.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.7 }} />
              </>
            )}
          </g>

          {/* Anti-Stokes Scattering */}
          <g>
            <motion.line
              x1="300" y1={183}
              x2="300" y2="82"
              stroke="#60a5fa"
              strokeWidth={activeMode === 'anti-stokes' ? 3 : 1.5}
              opacity={activeMode && activeMode !== 'anti-stokes' ? 0.15 : 1}
            />
            <motion.line
              x1="310" y1="82"
              x2="310" y2="218"
              stroke="#34d399"
              strokeWidth={activeMode === 'anti-stokes' ? 3 : 1.5}
              opacity={activeMode && activeMode !== 'anti-stokes' ? 0.15 : 1}
            />
            <motion.polygon
              points="310,218 307,210 313,210"
              fill="#34d399"
              opacity={activeMode && activeMode !== 'anti-stokes' ? 0.15 : 1}
            />
            {activeMode === 'anti-stokes' && (
              <>
                <motion.circle cx="305" cy="82" r="5" fill="#60a5fa" animate={{ r: [5, 12, 5], opacity: [0.8, 0.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <motion.circle cx="310" cy="218" r="5" fill="#34d399" animate={{ r: [5, 12, 5], opacity: [0.8, 0.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.7 }} />
              </>
            )}
          </g>

          {/* Labels */}
          <text x="120" y="250" fill="#94a3b8" fontSize="10" textAnchor="middle">Rayleigh</text>
          <text x="225" y="250" fill="#f472b6" fontSize="10" textAnchor="middle">Stokes</text>
          <text x="305" y="250" fill="#34d399" fontSize="10" textAnchor="middle">Anti-Stokes</text>

          {/* Energy arrows on the right */}
          {activeMode === 'stokes' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <line x1="350" y1="220" x2="350" y2="82" stroke="#f472b6" strokeWidth="1" markerEnd="url(#arrow)" />
              <text x="358" y="155" fill="#f472b6" fontSize="8">hν₀</text>
              <line x1="360" y1="220" x2="360" y2="185" stroke="#f472b6" strokeWidth="1" />
              <text x="368" y="207" fill="#f472b6" fontSize="8">hν₀-hν</text>
              <text x="355" y="175" fill="#f472b6" fontSize="7">← Lower E</text>
            </motion.g>
          )}
          {activeMode === 'anti-stokes' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <line x1="350" y1="185" x2="350" y2="82" stroke="#34d399" strokeWidth="1" />
              <text x="358" y="140" fill="#34d399" fontSize="8">hν₀+hν</text>
              <text x="355" y="175" fill="#34d399" fontSize="7">← Higher E</text>
            </motion.g>
          )}

          {/* Energy axis */}
          <line x1="40" y1="240" x2="40" y2="55" stroke="#475569" strokeWidth="1" />
          <polygon points="40,53 37,60 43,60" fill="#475569" />
          <text x="25" y="50" fill="#64748b" fontSize="9">Energy</text>
        </svg>
      </div>

      {/* Mode buttons */}
      <div className="flex flex-wrap gap-1.5">
        {[
          { id: 'rayleigh', label: 'Rayleigh', color: 'text-slate-300', desc: 'Same frequency — elastic scattering. Incident photon ki energy same rehti hai. Sabse zyada intense hota hai (~99.9%).' },
          { id: 'stokes', label: 'Stokes', color: 'text-pink-400', desc: 'Lower frequency — inelastic. Molecule vibrational energy gain karta hai, toh emitted photon ki energy kam hoti hai. ν_scattered < ν_incident.' },
          { id: 'anti-stokes', label: 'Anti-Stokes', color: 'text-emerald-400', desc: 'Higher frequency — inelastic. Molecule already excited vibrational state mein tha, energy lose karta hai. ν_scattered > ν_incident. Kam intense.' },
        ].map((mode) => (
          <motion.button
            key={mode.id}
            onClick={() => setActiveMode(activeMode === mode.id ? null : mode.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all border ${
              activeMode === mode.id
                ? `${mode.color} bg-white/5`
                : 'text-slate-400 border-[#334155]/50 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mode.label}
          </motion.button>
        ))}
      </div>

      {activeMode && (
        <motion.p
          key={activeMode}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs sm:text-sm text-slate-300 bg-[#0f172a]/40 rounded-lg p-3 border border-[#334155]/30"
        >
          {[{ id: 'rayleigh', desc: 'Same frequency — elastic scattering. Incident photon ki energy same rehti hai. Sabse zyada intense hota hai (~99.9%).' },
            { id: 'stokes', desc: 'Lower frequency — inelastic. Molecule vibrational energy gain karta hai, toh emitted photon ki energy kam hoti hai. ν_scattered < ν_incident.' },
            { id: 'anti-stokes', desc: 'Higher frequency — inelastic. Molecule already excited vibrational state mein tha, energy lose karta hai. ν_scattered > ν_incident. Kam intense.' },
          ].find(m => m.id === activeMode)?.desc}
        </motion.p>
      )}
    </div>
  );
}