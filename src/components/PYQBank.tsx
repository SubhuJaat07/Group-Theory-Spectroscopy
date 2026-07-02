'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Star } from 'lucide-react';

const pyqData = [
  { year: 2024, q: 'Classical theory of Raman effect (Polarizability Ellipsoid) explain karo.', unit: 1, topic: 'Raman Spectroscopy', marks: '10' },
  { year: 2024, q: 'Franck-Condon Principle explain karo with diagram.', unit: 2, topic: 'Franck-Condon Principle', marks: '10' },
  { year: 2024, q: 'Auger Electron Spectroscopy ka KLL process explain karo.', unit: 2, topic: 'AES', marks: '10' },
  { year: 2024, q: 'ESR ka basic principle, Zeeman splitting, aur resonance condition batao.', unit: 3, topic: 'ESR Principle', marks: '10' },
  { year: 2024, q: 'Hyperfine coupling constants (isotropic & anisotropic) explain karo.', unit: 3, topic: 'Hyperfine Splitting', marks: '10' },
  { year: 2024, q: 'Spin Hamiltonian equation likho aur explain karo.', unit: 3, topic: 'Spin Hamiltonian', marks: '5' },
  { year: 2024, q: 'Spin densities aur McConnell Relationship explain karo.', unit: 3, topic: 'Spin Densities', marks: '5' },
  { year: 2024, q: 'g-value aur isko affect karne wale factors batao.', unit: 3, topic: 'g-value', marks: '5' },
  { year: 2023, q: 'Quantum theory of Raman effect (Stokes, Anti-Stokes) explain karo.', unit: 1, topic: 'Raman Spectroscopy', marks: '10' },
  { year: 2023, q: 'CARS (Coherent Anti-Stokes Raman Spectroscopy) ka principle batao.', unit: 1, topic: 'CARS', marks: '5' },
  { year: 2023, q: 'Point groups Cnv, Dnh, Dnd, Td, Oh with examples.', unit: 1, topic: 'Point Groups', marks: '10' },
  { year: 2023, q: 'Franck-Condon Principle with potential energy diagram.', unit: 2, topic: 'Franck-Condon Principle', marks: '10' },
  { year: 2023, q: 'Radiative (Fluorescence, Phosphorescence) aur Non-radiative (IC, ISC) decay processes explain karo with Jablonski diagram.', unit: 2, topic: 'Decay Processes', marks: '10' },
  { year: 2023, q: 'Charge Transfer Spectra — LMCT aur MLCT explain karo with examples.', unit: 2, topic: 'Charge Transfer', marks: '10' },
  { year: 2023, q: 'KLL Auger process diagram ke saath explain karo.', unit: 2, topic: 'AES', marks: '10' },
  { year: 2023, q: 'ESR ka basic principle — Zeeman splitting, resonance condition.', unit: 3, topic: 'ESR Principle', marks: '10' },
  { year: 2023, q: 'Hyperfine splitting aur coupling constants.', unit: 3, topic: 'Hyperfine Splitting', marks: '10' },
  { year: 2023, q: 'ESR vs NMR mein differences batao.', unit: 3, topic: 'ESR vs NMR', marks: '5' },
  { year: 2022, q: 'Mutual Exclusion Principle — centrosymmetric molecules ke liye.', unit: 1, topic: 'Mutual Exclusion', marks: '5' },
  { year: 2022, q: 'CARS ka principle aur advantages.', unit: 1, topic: 'CARS', marks: '5' },
  { year: 2022, q: 'Point groups with flowchart to determine.', unit: 1, topic: 'Point Groups', marks: '10' },
  { year: 2022, q: 'Franck-Condon Principle with diagram.', unit: 2, topic: 'Franck-Condon Principle', marks: '10' },
  { year: 2022, q: 'Koopman&apos;s theorem state karo aur PES mein applications.', unit: 2, topic: 'PES', marks: '10' },
  { year: 2022, q: 'Radiative aur non-radiative decay processes — Jablonski diagram.', unit: 2, topic: 'Decay Processes', marks: '10' },
  { year: 2022, q: 'Auger process KLL diagram.', unit: 2, topic: 'AES', marks: '10' },
  { year: 2022, q: 'ESR basic principle.', unit: 3, topic: 'ESR Principle', marks: '10' },
  { year: 2022, q: 'Spin Hamiltonian complete equation.', unit: 3, topic: 'Spin Hamiltonian', marks: '10' },
  { year: 2022, q: 'Hyperfine coupling constants.', unit: 3, topic: 'Hyperfine Splitting', marks: '10' },
  { year: 2022, q: 'Spin densities aur McConnell relationship.', unit: 3, topic: 'Spin Densities', marks: '5' },
  { year: 2022, q: 'Kramer&apos;s degeneracy explain karo.', unit: 3, topic: 'Kramer\'s Degeneracy', marks: '5' },
  { year: 2021, q: 'Raman effect — Classical theory (Polarizability Ellipsoid).', unit: 1, topic: 'Raman Spectroscopy', marks: '10' },
  { year: 2021, q: 'Selection rules for Raman Spectroscopy.', unit: 1, topic: 'Raman Spectroscopy', marks: '5' },
  { year: 2021, q: 'Symmetry operations on molecules (E, Cn, σ, i, Sn).', unit: 1, topic: 'Symmetry Operations', marks: '10' },
  { year: 2021, q: 'Franck-Condon Principle with animated diagram.', unit: 2, topic: 'Franck-Condon Principle', marks: '10' },
  { year: 2021, q: 'Koopman&apos;s theorem aur PES applications.', unit: 2, topic: 'PES', marks: '10' },
  { year: 2021, q: 'Internal Conversion aur Intersystem Crossing explain karo.', unit: 2, topic: 'Decay Processes', marks: '10' },
  { year: 2021, q: 'PAS (Photoacoustic Spectroscopy) principle aur applications.', unit: 2, topic: 'PAS', marks: '5' },
  { year: 2021, q: 'Auger process KLL explain karo.', unit: 2, topic: 'AES', marks: '10' },
  { year: 2021, q: 'ESR basic principle — Zeeman effect, resonance condition.', unit: 3, topic: 'ESR Principle', marks: '10' },
  { year: 2021, q: 'Hyperfine splitting — isotropic aur anisotropic.', unit: 3, topic: 'Hyperfine Splitting', marks: '10' },
  { year: 2021, q: 'Spin densities aur McConnell relationship.', unit: 3, topic: 'Spin Densities', marks: '5' },
  { year: 2021, q: 'Kramer&apos;s degeneracy.', unit: 3, topic: 'Kramer\'s Degeneracy', marks: '5' },
  { year: 2018, q: 'Raman effect — Classical aur Quantum theory dono explain karo.', unit: 1, topic: 'Raman Spectroscopy', marks: '10' },
  { year: 2018, q: 'Point groups with examples.', unit: 1, topic: 'Point Groups', marks: '10' },
  { year: 2018, q: 'CARS ka principle batao.', unit: 1, topic: 'CARS', marks: '5' },
  { year: 2018, q: 'Franck-Condon Principle.', unit: 2, topic: 'Franck-Condon Principle', marks: '10' },
  { year: 2018, q: 'Koopman&apos;s theorem.', unit: 2, topic: 'PES', marks: '5' },
  { year: 2018, q: 'Photoelectric effect basic principle.', unit: 2, topic: 'Photoelectric Effect', marks: '5' },
  { year: 2018, q: 'Auger Electron Spectroscopy.', unit: 2, topic: 'AES', marks: '10' },
  { year: 2018, q: 'ESR basic principle.', unit: 3, topic: 'ESR Principle', marks: '10' },
  { year: 2018, q: 'Hyperfine coupling.', unit: 3, topic: 'Hyperfine Splitting', marks: '10' },
  { year: 2018, q: 'ESR vs NMR differences.', unit: 3, topic: 'ESR vs NMR', marks: '5' },
  { year: 2016, q: 'Raman effect — Classical theory (Polarizability Ellipsoid) explain karo.', unit: 1, topic: 'Raman Spectroscopy', marks: '10' },
  { year: 2016, q: 'Fundamental symmetry operations with examples.', unit: 1, topic: 'Symmetry Operations', marks: '10' },
  { year: 2016, q: 'Mutual Exclusion Principle for centrosymmetric molecules.', unit: 1, topic: 'Mutual Exclusion', marks: '5' },
  { year: 2016, q: 'Point groups determine karna with examples.', unit: 1, topic: 'Point Groups', marks: '10' },
  { year: 2016, q: 'CARS principle.', unit: 1, topic: 'CARS', marks: '5' },
  { year: 2016, q: 'Franck-Condon Principle with diagram.', unit: 2, topic: 'Franck-Condon Principle', marks: '10' },
  { year: 2016, q: 'Koopman&apos;s theorem aur PES.', unit: 2, topic: 'PES', marks: '10' },
  { year: 2016, q: 'Charge Transfer Spectra (LMCT, MLCT).', unit: 2, topic: 'Charge Transfer', marks: '10' },
  { year: 2016, q: 'Photoelectric effect.', unit: 2, topic: 'Photoelectric Effect', marks: '5' },
  { year: 2016, q: 'Auger Electron Spectroscopy KLL process.', unit: 2, topic: 'AES', marks: '10' },
  { year: 2016, q: 'PAS applications.', unit: 2, topic: 'PAS', marks: '5' },
  { year: 2016, q: 'ESR basic principle.', unit: 3, topic: 'ESR Principle', marks: '10' },
  { year: 2016, q: 'Hyperfine splitting.', unit: 3, topic: 'Hyperfine Splitting', marks: '10' },
  { year: 2016, q: 'Spin densities aur McConnell relationship.', unit: 3, topic: 'Spin Densities', marks: '5' },
  { year: 2017, q: 'Charge Transfer Spectra — LMCT aur MLCT with examples.', unit: 2, topic: 'Charge Transfer', marks: '10' },
  { year: 2024, q: 'Fundamental symmetry operations (E, Cn, σ, i, Sn) with examples.', unit: 1, topic: 'Symmetry Operations', marks: '10' },
  { year: 2023, q: 'PAS (Photoacoustic Spectroscopy) — principle aur applications.', unit: 2, topic: 'PAS', marks: '5' },
  { year: 2021, q: 'Selection rules for Raman.', unit: 1, topic: 'Raman Spectroscopy', marks: '5' },
  { year: 2023, q: 'Internal Conversion explain karo.', unit: 2, topic: 'Decay Processes', marks: '5' },
  { year: 2024, q: 'RRS (Resonance Raman Spectroscopy).', unit: 1, topic: 'RRS', marks: '5' },
  { year: 2021, q: 'd-d transitions in transition metal complexes.', unit: 2, topic: 'd-d Transitions', marks: '10' },
  { year: 2023, q: 'Photoelectric effect ka basic principle.', unit: 2, topic: 'Photoelectric Effect', marks: '5' },
  { year: 2021, q: 'PAS ke applications for gases and condensed systems.', unit: 2, topic: 'PAS', marks: '5' },
  { year: 2024, q: 'Symmetry elements aur operations with examples.', unit: 1, topic: 'Symmetry Operations', marks: '10' },
  { year: 2023, q: 'RRS (Resonance Raman Spectroscopy).', unit: 1, topic: 'RRS', marks: '5' },
  { year: 2022, q: 'Symmetry operations on H₂O, NH₃, CH₄.', unit: 1, topic: 'Symmetry Operations', marks: '10' },
  { year: 2024, q: 'Charge Transfer Spectra with examples.', unit: 2, topic: 'Charge Transfer', marks: '10' },
  { year: 2024, q: 'Kramer&apos;s degeneracy explain karo.', unit: 3, topic: 'Kramer\'s Degeneracy', marks: '5' },
  { year: 2023, q: 'Spin densities aur McConnell relationship.', unit: 3, topic: 'Spin Densities', marks: '5' },
  { year: 2022, q: 'Mutual Exclusion Principle.', unit: 1, topic: 'Mutual Exclusion', marks: '5' },
];

const years = [2024, 2023, 2022, 2021, 2018, 2017, 2016];
const units = [1, 2, 3];

export default function PYQBank() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const filtered = pyqData.filter(q => {
    if (selectedYear && q.year !== selectedYear) return false;
    if (selectedUnit && q.unit !== selectedUnit) return false;
    if (search && !q.q.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  // Count questions per topic for highlighting
  const topicCounts: Record<string, number> = {};
  pyqData.forEach(q => {
    topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;
  });

  return (
    <section id="pyq-bank" className="py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <Star className="w-8 h-8 text-amber-400" />
          <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
            PYQ BANK
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-500 to-transparent opacity-30" />
        </div>
        <p className="text-sm text-slate-400">
          {pyqData.length} questions from 2016-2024 • Filter by year, unit, or search
        </p>
      </motion.div>

      {/* Filters */}
      <div className="space-y-3 mb-6">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-[#1e293b] border border-[#334155] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
          />
          <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        </div>

        <div className="flex flex-wrap gap-2">
          {/* Year filter */}
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-500 mr-1">Year:</span>
            {years.map(y => (
              <motion.button
                key={y}
                onClick={() => setSelectedYear(selectedYear === y ? null : y)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                  selectedYear === y
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'bg-[#1e293b]/50 text-slate-400 border border-transparent hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {y}
              </motion.button>
            ))}
          </div>

          {/* Unit filter */}
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-500 mr-1">Unit:</span>
            {units.map(u => (
              <motion.button
                key={u}
                onClick={() => setSelectedUnit(selectedUnit === u ? null : u)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                  selectedUnit === u
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-[#1e293b]/50 text-slate-400 border border-transparent hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Unit {u}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1" style={{ scrollbarWidth: 'thin' }}>
        <AnimatePresence>
          {filtered.map((q, i) => (
            <motion.div
              key={`${q.year}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: Math.min(i * 0.02, 0.3) }}
              className="flex items-start gap-3 p-3 rounded-xl bg-[#1e293b]/60 border border-[#334155]/50 hover:border-emerald-500/20 transition-colors"
            >
              <div className="shrink-0 w-10 text-center">
                <span className="text-lg font-black text-amber-400">{q.year}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-200 leading-relaxed">{q.q}</p>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Unit {q.unit}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#334155] text-slate-400">
                    {q.marks} marks
                  </span>
                  {topicCounts[q.topic] >= 5 && (
                    <span className="text-[10px] text-amber-400 star-pulse">
                      ⭐ {topicCounts[q.topic]}x repeated
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-8 text-slate-500">
            <p className="text-sm">Koi question nahi mila</p>
            <p className="text-xs mt-1">Filters change karke try karo</p>
          </div>
        )}
      </div>
    </section>
  );
}