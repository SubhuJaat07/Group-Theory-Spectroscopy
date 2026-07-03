'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const formulas = [
  {
    category: 'ESR Key Formulas ⭐',
    items: [
      { formula: 'ΔE = gβₑB₀', desc: 'ESR resonance condition — energy gap between Zeeman levels' },
      { formula: 'hν = gβₑB₀', desc: 'Resonance frequency — when microwave energy = energy gap' },
      { formula: 'H = gβₑB·S + S·A·I', desc: 'Spin Hamiltonian — complete ESR Hamiltonian equation' },
      { formula: 'g = hν / βₑB₀', desc: 'g-value calculation from resonance frequency and field' },
      { formula: 'ge = 2.0023', desc: 'Free electron g-value (exact: 2.0023193)' },
      { formula: 'ρ = aC / Q', desc: 'McConnell Relationship — spin density from coupling constant' },
      { formula: 'a = Aiso (Gauss)', desc: 'Hyperfine coupling constant — measures electron-nuclear interaction' },
      { formula: 'Lines = 2nI + 1', desc: 'Number of hyperfine lines (n = equivalent nuclei, I = nuclear spin)' },
    ],
  },
  {
    category: 'Spectroscopy Key Formulas',
    items: [
      { formula: 'ΔE = hν = hc/λ = hcν̃', desc: 'Basic energy-wavelength-frequency relation' },
      { formula: 'Selection rule: ΔJ = ±1', desc: 'Rotational spectroscopy selection rule (microwave)' },
      { formula: 'ν̃ = 2B(J+1)', desc: 'Rotational spectrum line positions (rigid rotor)' },
      { formula: 'DOF = 3N', desc: 'Total degrees of freedom for N-atom molecule' },
      { formula: 'Vib DOF = 3N - 5 (linear)', desc: 'Vibrational degrees for linear molecule' },
      { formula: 'Vib DOF = 3N - 6 (non-linear)', desc: 'Vibrational degrees for non-linear molecule' },
      { formula: 'E(Kinetic) = hν - BE', desc: 'Photoelectric effect: Einstein equation' },
      { formula: 'BE = -εK', desc: 'Koopman\'s theorem: Binding Energy = negative of orbital energy' },
    ],
  },
  {
    category: 'Important Definitions ⭐',
    items: [
      { term: 'Franck-Condon Principle', def: 'Electronic transition itni fast hoti hai (~10⁻¹⁵s) ki nuclei ka position change nahi hota — vertical transition hota hai potential energy curves pe.' },
      { term: 'Mutual Exclusion Principle', def: 'Centrosymmetric molecules (inversion center wale) mein woh modes jo IR active hain woh Raman inactive hote hain aur vice versa.' },
      { term: 'Kramer\'s Degeneracy', def: 'Jab system mein odd number of unpaired electrons ho (half-integer spin) toh zero magnetic field mein har energy level kam se kam 2-fold degenerate hota hai.' },
      { term: 'CARS', def: 'Coherent Anti-Stokes Raman Spectroscopy — nonlinear Raman technique jismein 3 laser beams use hote hain (2 pump + 1 Stokes) aur anti-Stokes signal coherent hota hai.' },
      { term: 'RRS', def: 'Resonance Raman Spectroscopy — jab excitation wavelength electronic absorption band ke paas ho toh Raman scattering ka intensity bahut badh jaata hai (10³-10⁶ times).' },
      { term: 'PES (Photoelectron Spectroscopy)', def: 'Photon se electron eject karke uski kinetic energy measure karna. Koopman\'s theorem se orbital energies milti hain.' },
    ],
  },
];

export default function QuickRevision() {
  return (
    <section id="quick-revision" className="py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <Zap className="w-8 h-8 text-emerald-400" />
          <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            QUICK REVISION
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500 to-transparent opacity-30" />
        </div>
        <p className="text-sm text-slate-400">Exam se pehle 30 mins mein yeh sab revise karo 🎯</p>
      </motion.div>

      <div className="grid gap-6">
        {formulas.map((section, si) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: si * 0.1 }}
          >
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-emerald-500 to-teal-500" />
              {section.category}
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="p-3 rounded-xl bg-[#1e293b]/60 border border-[#334155]/50 hover:border-emerald-500/20 transition-colors"
                >
                  {'formula' in item ? (
                    <>
                      <div className="font-mono text-emerald-400 text-sm mb-1 font-semibold">
                        {item.formula}
                      </div>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </>
                  ) : (
                    <>
                      <div className="text-amber-400 text-sm font-semibold mb-1">
                        {item.term}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.def}</p>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}