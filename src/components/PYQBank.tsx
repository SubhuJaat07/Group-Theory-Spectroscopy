'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Star, ChevronDown, BookOpen } from 'lucide-react';

interface PYQ {
  year: number;
  q: string;
  unit: number;
  topic: string;
  marks: string;
  answer: string;
  isGuess?: boolean;
}

const pyqData: PYQ[] = [
  // ── 2024 ──────────────────────────────────────────────
  { year: 2024, q: 'Explain the classical theory of Raman effect (Polarizability Ellipsoid).', unit: 1, topic: 'Raman Spectroscopy', marks: '10', answer: 'The classical theory of Raman effect is based on the polarizability of molecules. When a molecule is placed in the oscillating electric field of incident light, the electron cloud gets distorted, inducing a dipole moment: mu_ind = alpha * E, where alpha is the polarizability tensor. For anisotropic molecules, alpha has 6 independent components (alpha_xx, alpha_yy, alpha_zz, alpha_xy, alpha_yz, alpha_zx), represented visually as the polarizability ellipsoid. During molecular vibration, if the polarizability changes (d(alpha)/dt != 0), Raman scattering occurs. The scattered light contains three frequencies: nu_0 (Rayleigh, elastic), nu_0 - nu_vib (Stokes, molecule gains vibrational energy), and nu_0 + nu_vib (Anti-Stokes, molecule loses vibrational energy). The polarizability ellipsoid changes size, shape, or orientation during vibration for Raman-active modes.' },
  { year: 2024, q: 'Explain the Franck-Condon Principle with a diagram.', unit: 2, topic: 'Franck-Condon', marks: '10', answer: 'The Franck-Condon Principle states that electronic transitions occur much faster (~10^-15 s) than nuclear motion. During an electronic transition, nuclear positions and momenta remain essentially unchanged, resulting in a vertical transition on the potential energy diagram. The probability of a vibrational transition (v to v-prime) is proportional to the square of the overlap integral |&lt;psi_v|psi_v-prime&gt;|^2, called the Franck-Condon factor. The most probable transition is to a vibrational level where ground and excited state potential curves are closest vertically (often v=0 to v-prime=2, not v-prime=0). This explains the Stokes shift: emission occurs at longer wavelength than absorption because the molecule relaxes vibrationally before emitting.' },
  { year: 2024, q: 'Explain the KLL process in Auger Electron Spectroscopy.', unit: 2, topic: 'Auger Process', marks: '10', answer: 'The KLL Auger process occurs in four steps: (1) A high-energy X-ray photon ejects a core electron from the K-shell, creating a core vacancy. (2) An electron from the L-shell drops to fill the K-shell vacancy, releasing energy E(K) - E(L1). (3) Instead of emitting a fluorescent X-ray, this energy ejects another L-shell electron as the Auger electron. (4) The kinetic energy of the Auger electron is: E(Auger) = E(K) - E(L1) - E(L2). The final state has two holes. The notation KLL means: initial hole in K, transition electron from L, ejected electron from L. Auger effect dominates in lighter elements (Z &lt; 30); X-ray fluorescence dominates in heavier elements.' },
  { year: 2024, q: 'Explain the basic principle of ESR, Zeeman splitting, and resonance condition.', unit: 3, topic: 'ESR Principle', marks: '10', answer: 'ESR (Electron Spin Resonance) spectroscopy detects species with unpaired electrons. In an external magnetic field B0, the two degenerate electron spin states (ms = +1/2 and ms = -1/2) split due to the Zeeman effect. The energy separation is: delta_E = g * beta_e * B0, where g is the g-factor (2.0023 for a free electron) and beta_e is the Bohr magneton (9.274 x 10^-24 J/T). Resonance occurs when microwave radiation satisfies: h nu = g * beta_e * B0. Energy is absorbed and detected as the ESR signal. Water and alcohol are unsuitable solvents because their protons cause severe line broadening through unresolved hyperfine coupling.' },
  { year: 2024, q: 'Explain hyperfine coupling constants (isotropic and anisotropic).', unit: 3, topic: 'Hyperfine Splitting', marks: '10', answer: 'Hyperfine coupling arises from interaction between the unpaired electron and nuclear magnetic moments. Isotropic coupling (a_iso) is observed in solution due to rapid molecular tumbling that averages out directional effects. It originates from the Fermi contact interaction (electron density at the nucleus). Anisotropic coupling (T tensor) is observed in solid-state ESR and depends on molecular orientation relative to B0, arising from through-space dipolar interaction. Number of hyperfine lines = 2nI + 1 (n = equivalent nuclei, I = nuclear spin). One proton (I = 1/2) gives 2 lines; two equivalent protons give 3 lines; CH3 radical gives 4 lines.' },
  { year: 2024, q: 'Write the Spin Hamiltonian equation and explain it.', unit: 3, topic: 'Spin Hamiltonian', marks: '5', answer: 'The complete ESR Spin Hamiltonian is: H = g * beta_e * B.S + S.A.I. The first term (g beta_e B.S) represents the electron Zeeman interaction between electron spin S and external magnetic field B. The second term (S.A.I) represents the hyperfine interaction between electron spin S and nuclear spin I through coupling tensor A. In isotropic solution, this simplifies to: H = g beta_e B.S + a_iso S.I, where a_iso is the isotropic coupling constant measured in Gauss.' },
  { year: 2024, q: 'Explain spin densities and the McConnell Relationship.', unit: 3, topic: 'Spin Densities', marks: '5', answer: 'Spin density (rho) is the probability of finding the unpaired electron at a particular atomic position in a molecule. It can be positive (direct electron density) or negative (spin polarization effects). The McConnell Relationship connects the hyperfine coupling constant to the spin density: a_H = Q * rho, where a_H is the proton coupling constant, Q is approximately 23-28 Gauss for aromatic pi-radical systems, and rho is the spin density at that carbon position. This equation allows mapping of spin distribution in organic radicals like the benzene radical anion.' },
  { year: 2024, q: 'Explain g-value and the factors affecting it.', unit: 3, topic: 'g-value', marks: '5', answer: 'The g-value is determined from: g = h nu / (beta_e * B0). For a free electron, g_e = 2.0023. Deviations occur due to: (1) Spin-orbit coupling — mixing of ground and excited states, (2) Orbital contribution — unpaired electron having orbital angular momentum character, (3) Heavy atom effect — greater spin-orbit coupling in heavier elements. Organic radicals show g close to 2.0023; transition metal complexes can range from 1.5 to over 4.0.' },
  { year: 2024, q: 'Symmetry elements and operations with examples.', unit: 1, topic: 'Symmetry Operations', marks: '10', answer: 'There are five fundamental symmetry operations: (1) Identity (E) — leaves the molecule unchanged. Every molecule has this operation. (2) Proper rotation (Cn) — rotation by 360/n degrees about an axis. E.g., H2O has a C2 axis. (3) Reflection (sigma) — mirror reflection through a plane. Types: sigma_v (vertical, containing the principal axis), sigma_h (horizontal, perpendicular to principal axis), sigma_d (dihedral, bisecting angles between C2 axes). (4) Inversion (i) — every point (x,y,z) maps to (-x,-y,-z) through a center. E.g., benzene has an inversion center. (5) Improper rotation (Sn) — rotation by 360/n followed by reflection perpendicular to the axis. E.g., methane has S4 axes.' },
  { year: 2024, q: 'Charge Transfer Spectra with examples.', unit: 2, topic: 'Charge Transfer', marks: '10', answer: 'Charge Transfer (CT) spectra arise from electron transfer between metal and ligand orbitals. In LMCT (Ligand-to-Metal), an electron transfers from ligand to metal, occurring when the metal is in a high oxidation state. Examples: MnO4- (purple, O 2p to Mn 7+), CrO4 2- (yellow), FeCl4- (yellow). In MLCT (Metal-to-Ligand), an electron transfers from metal d-orbital to ligand pi* orbital, occurring with pi-acceptor ligands. Example: [Ru(bpy)3]2+ (orange). CT bands are intense (epsilon = 10^3-10^5) because they are Laporte-allowed (centrosymmetry is broken during transfer).' },
  { year: 2024, q: 'RRS (Resonance Raman Spectroscopy).', unit: 1, topic: 'RRS', marks: '5', answer: 'Resonance Raman Spectroscopy (RRS) occurs when the excitation laser wavelength coincides with or is close to an electronic absorption band. The Raman scattering intensity is enhanced by 10^3 to 10^6 times compared to normal Raman. Only vibrations coupled to the electronic transition are enhanced, making RRS highly selective for chromophoric groups. Applications include studying biological chromophores (heme proteins, retinal) and trace analysis.' },
  { year: 2024, q: 'Explain Kramer&apos;s degeneracy.', unit: 3, topic: 'Kramer&apos;s Degeneracy', marks: '5', answer: 'Kramer&apos;s theorem states that for a system with an odd number of unpaired electrons (half-integer total spin, S = 1/2, 3/2, etc.), every energy level is at least two-fold degenerate (Kramer&apos;s doublet) in the absence of an external magnetic field. This degeneracy is lifted only by an external magnetic field (or magnetic impurities). This is why ESR transitions are always allowed for half-integer spin systems.' },

  // ── 2023 ──────────────────────────────────────────────
  { year: 2023, q: 'Explain the quantum theory of Raman effect (Stokes, Anti-Stokes).', unit: 1, topic: 'Raman Spectroscopy', marks: '10', answer: 'The quantum theory explains Raman effect as inelastic photon-molecule collisions. In Stokes scattering, a photon h nu_0 interacts with a molecule in v=0, reaches a virtual state, and re-emits h(nu_0 - nu_vib) while the molecule reaches v=1. In Anti-Stokes scattering, the molecule starts in v=1, absorbs h nu_0, reaches virtual state, emits h(nu_0 + nu_vib) while returning to v=0. Stokes lines are more intense because the Boltzmann distribution favors v=0 over v=1 at room temperature. The intensity ratio: I_AS/I_S = ((nu_0 + nu_vib)/(nu_0 - nu_vib))^4 * exp(-h nu_vib/kT).' },
  { year: 2023, q: 'Explain CARS principle.', unit: 1, topic: 'CARS', marks: '5', answer: 'CARS (Coherent Anti-Stokes Raman Spectroscopy) is a nonlinear Raman technique using three laser beams: two pump beams at omega_1 and one Stokes beam at omega_2. When omega_1 - omega_2 matches a vibrational frequency, a coherent signal at 2*omega_1 - omega_2 (anti-Stokes) is generated. Advantages: much stronger signal, coherent directional beam (easy collection), and inherent fluorescence rejection.' },
  { year: 2023, q: 'Point groups Cnv, Dnh, Dnd, Td, Oh with examples.', unit: 1, topic: 'Point Groups', marks: '10', answer: 'Cnv: Cn axis + n sigma_v planes. Examples: C2v (H2O, SO2), C3v (NH3), C4v (BrF5). Dnh: Cn axis + n C2 perpendicular + sigma_h + n sigma_v. Examples: D3h (BF3), D4h (XeF4), D6h (benzene). Dnd: Cn + n C2 perpendicular + n sigma_d, NO sigma_h. Example: D3d (staggered ethane). Td: 4 C3 + 3 C2 + 6 sigma_d. Example: CH4, CCl4. Oh: 3 C4 + 4 C3 + 6 C2 + 3 sigma_h + 6 sigma_d + i. Example: SF6, [Fe(CN)6]4-.' },
  { year: 2023, q: 'Franck-Condon Principle with potential energy diagram.', unit: 2, topic: 'Franck-Condon', marks: '10', answer: 'See 2024 Q2. The Franck-Condon Principle explains why electronic transitions are vertical on potential energy diagrams. Because electronic transitions (~10^-15 s) are much faster than nuclear motion, the internuclear distance does not change during the transition. The transition probability is governed by the Franck-Condon factor (overlap integral of vibrational wavefunctions). The most intense absorption band corresponds to the vertical transition from v=0 to the vibrational level in the excited state closest in internuclear distance.' },
  { year: 2023, q: 'Radiative and non-radiative decay processes with Jablonski diagram.', unit: 2, topic: 'Decay Processes', marks: '10', answer: 'Radiative: Fluorescence (S1 to S0, ~10^-9 s, same multiplicity, spin-allowed); Phosphorescence (T1 to S0, ~10^-3 s to hours, different multiplicity, spin-forbidden). Non-radiative: Vibrational Relaxation (VR, excess vibrational energy lost to surroundings, ~10^-12 s); Internal Conversion (IC, same multiplicity non-radiative transition e.g. S1 to S0 through vibronic coupling); Intersystem Crossing (ISC, different multiplicity transition S1 to T1, facilitated by spin-orbit coupling). IC and ISC compete with fluorescence, reducing quantum yield.' },
  { year: 2023, q: 'Charge Transfer Spectra — LMCT and MLCT with examples.', unit: 2, topic: 'Charge Transfer', marks: '10', answer: 'See 2024 Q10. LMCT: ligand to metal, high oxidation state metal. Examples: MnO4- (purple), CrO4 2- (yellow). MLCT: metal to ligand, pi-acceptor ligands. Example: [Ru(bpy)3]2+ (orange). CT bands are intense and Laporte-allowed because electron transfer breaks centrosymmetry.' },
  { year: 2023, q: 'KLL Auger process with diagram.', unit: 2, topic: 'Auger Process', marks: '10', answer: 'See 2024 Q3. Step-by-step: (1) X-ray ejects K electron, (2) L electron fills K vacancy, releasing energy, (3) Another L electron is ejected as Auger electron. E(Auger) = E(K) - E(L1) - E(L2). Final state: doubly ionized with holes in K and L shells.' },
  { year: 2023, q: 'ESR basic principle — Zeeman splitting, resonance condition.', unit: 3, topic: 'ESR Principle', marks: '10', answer: 'See 2024 Q4. ESR studies unpaired electrons. Zeeman effect splits degenerate spin states. delta_E = g * beta_e * B0. Resonance: h nu = g beta_e B0. Detected as absorption of microwave radiation.' },
  { year: 2023, q: 'Hyperfine splitting and coupling constants.', unit: 3, topic: 'Hyperfine Splitting', marks: '10', answer: 'See 2024 Q5. Isotropic (solution, Fermi contact) vs anisotropic (solid, dipolar). Lines = 2nI + 1. One proton = 2 lines, two equivalent protons = 3 lines, CH3 = 4 lines.' },
  { year: 2023, q: 'Differences between ESR and NMR.', unit: 3, topic: 'ESR vs NMR', marks: '5', answer: 'ESR studies unpaired electrons (spin 1/2) while NMR studies nuclei with non-zero spin. ESR uses microwave frequencies (~9-10 GHz) while NMR uses radio frequencies (~100-1000 MHz). ESR detects paramagnetic species (free radicals, transition metal ions) while NMR detects all NMR-active nuclei. ESR sensitivity is much higher than NMR.' },
  { year: 2023, q: 'Internal Conversion.', unit: 2, topic: 'Decay Processes', marks: '5', answer: 'Internal Conversion (IC) is a non-radiative transition between electronic states of the SAME spin multiplicity (e.g., S2 to S1, or S1 to S0) without photon emission. It occurs through vibronic coupling when vibrational levels of two electronic states overlap. IC from S1 to S0 is a major reason for low fluorescence quantum yields.' },
  { year: 2023, q: 'Photoelectric effect basic principle.', unit: 2, topic: 'Photoelectric Effect', marks: '5', answer: 'When a photon of sufficient energy strikes a material, it ejects an electron. Einstein&apos;s equation: E_kinetic = h nu - phi, where phi is the work function. Threshold frequency: nu_0 = phi/h. Below this frequency, no electrons are emitted regardless of intensity.' },
  { year: 2023, q: 'PAS — principle and applications.', unit: 2, topic: 'PAS', marks: '5', answer: 'Photoacoustic Spectroscopy (PAS): when a sample absorbs modulated light, periodic heating generates pressure waves (sound) detected by a microphone. Applications: (1) Study of opaque/scattering samples (powders, gels), (2) Depth profiling of layered materials, (3) Trace gas analysis.' },
  { year: 2023, q: 'RRS (Resonance Raman Spectroscopy).', unit: 1, topic: 'RRS', marks: '5', answer: 'See 2024 Q11. RRS uses excitation wavelength near an electronic absorption band, enhancing Raman intensity by 10^3-10^6 times. Highly selective for chromophoric groups.' },
  { year: 2023, q: 'Spin densities and McConnell relationship.', unit: 3, topic: 'Spin Densities', marks: '5', answer: 'See 2024 Q7. a_H = Q * rho, where Q is ~23-28 G for aromatic pi-radicals. Maps spin distribution in organic radicals.' },

  // ── 2022 ──────────────────────────────────────────────
  { year: 2022, q: 'Mutual Exclusion Principle for centrosymmetric molecules.', unit: 1, topic: 'Mutual Exclusion', marks: '5', answer: 'For centrosymmetric molecules (having inversion center i), a vibrational mode that is IR active is Raman inactive, and vice versa. Modes active in both, or inactive in both, are also possible. Example: CO2 (D-inf-h) — asymmetric stretch is IR active only; symmetric stretch is Raman active only; bending mode appears in both (actually IR active, Raman inactive for CO2).' },
  { year: 2022, q: 'Point groups with flowchart to determine.', unit: 1, topic: 'Point Groups', marks: '10', answer: 'See 2023 Q11 for examples. Flowchart: (1) Is it linear? Yes: Has sigma_h? Yes = D-inf-h, No = C-inf-v. (2) Not linear: Has Cn (n>2)? Yes: 3+ C2 perpendicular? Yes: Has 3 C4? Yes = Oh, No = Td. No high Cn: Find highest Cn, check for perpendicular C2, sigma_h, sigma_v, sigma_d, S2n to determine Dnh, Dnd, Cnv, Cnh, Cn, Sn. (3) No Cn: Has sigma? Yes = Cs, Has i? Yes = Ci, No = C1.' },
  { year: 2022, q: 'Franck-Condon Principle with diagram.', unit: 2, topic: 'Franck-Condon', marks: '10', answer: 'See 2024 Q2.' },
  { year: 2022, q: 'Koopman&apos;s theorem and PES applications.', unit: 2, topic: 'PES', marks: '10', answer: 'Koopman&apos;s theorem states that the binding energy of an electron in a molecule equals the negative of its Hartree-Fock orbital energy: BE = -epsilon_i. This is an approximation (neglects electron relaxation). In PES, a photon ejects an electron; measuring its kinetic energy gives BE = h nu - E_kinetic. Applications: identifying molecular orbitals, determining electronic structure, studying surface composition (XPS), and analyzing valence orbitals (UPS).' },
  { year: 2022, q: 'Radiative and non-radiative decay processes — Jablonski diagram.', unit: 2, topic: 'Decay Processes', marks: '10', answer: 'See 2023 Q13.' },
  { year: 2022, q: 'Auger process KLL diagram.', unit: 2, topic: 'Auger Process', marks: '10', answer: 'See 2024 Q3.' },
  { year: 2022, q: 'ESR basic principle.', unit: 3, topic: 'ESR Principle', marks: '10', answer: 'See 2024 Q4.' },
  { year: 2022, q: 'Spin Hamiltonian complete equation.', unit: 3, topic: 'Spin Hamiltonian', marks: '10', answer: 'See 2024 Q6. H = g beta_e B.S + S.A.I. The Zeeman term describes electron-magnetic field interaction; the hyperfine term describes electron-nuclear spin interaction.' },
  { year: 2022, q: 'Hyperfine coupling constants.', unit: 3, topic: 'Hyperfine Splitting', marks: '10', answer: 'See 2024 Q5.' },
  { year: 2022, q: 'Spin densities and McConnell relationship.', unit: 3, topic: 'Spin Densities', marks: '5', answer: 'See 2024 Q7.' },
  { year: 2022, q: 'Kramer&apos;s degeneracy.', unit: 3, topic: 'Kramer&apos;s Degeneracy', marks: '5', answer: 'See 2024 Q12.' },
  { year: 2022, q: 'Symmetry operations on H2O, NH3, CH4.', unit: 1, topic: 'Symmetry Operations', marks: '10', answer: 'H2O (C2v): E, C2 (180 deg rotation through O along bisector), sigma_v (molecular plane), sigma_v-prime (perpendicular plane through C2). NH3 (C3v): E, 2C3 (120 deg and 240 deg rotations through N), 3 sigma_v (each containing N and one H). CH4 (Td): E, 8C3 (through each C-H bond), 3C2 (bisecting opposite H-C-H angles), 6 sigma_d (each containing two H atoms), 3S4.' },

  // ── 2021 ──────────────────────────────────────────────
  { year: 2021, q: 'Raman effect — Classical theory (Polarizability Ellipsoid).', unit: 1, topic: 'Raman Spectroscopy', marks: '10', answer: 'See 2024 Q1.' },
  { year: 2021, q: 'Selection rules for Raman Spectroscopy.', unit: 1, topic: 'Raman Spectroscopy', marks: '5', answer: 'For a vibration to be Raman active, the polarizability must change during the vibration: d(alpha)/dq != 0. The polarizability derivative with respect to the normal coordinate must be non-zero. For centrosymmetric molecules, the Mutual Exclusion Principle applies: IR-active modes are Raman-inactive and vice versa.' },
  { year: 2021, q: 'Symmetry operations on molecules (E, Cn, sigma, i, Sn).', unit: 1, topic: 'Symmetry Operations', marks: '10', answer: 'See 2024 Q9. Five fundamental symmetry operations with definitions and examples.' },
  { year: 2021, q: 'Franck-Condon Principle.', unit: 2, topic: 'Franck-Condon', marks: '10', answer: 'See 2024 Q2.' },
  { year: 2021, q: 'Koopman&apos;s theorem and PES applications.', unit: 2, topic: 'PES', marks: '10', answer: 'See 2022 Q4.' },
  { year: 2021, q: 'Internal Conversion and Intersystem Crossing.', unit: 2, topic: 'Decay Processes', marks: '10', answer: 'IC: non-radiative transition between same spin multiplicity states (e.g., S1 to S0) through vibronic coupling. ISC: non-radiative transition between different spin multiplicities (S1 to T1) facilitated by spin-orbit coupling. ISC rate increases with heavy atoms (external heavy atom effect). Both compete with fluorescence and reduce quantum yield.' },
  { year: 2021, q: 'PAS principle and applications.', unit: 2, topic: 'PAS', marks: '5', answer: 'See 2023 Q21.' },
  { year: 2021, q: 'Auger process KLL.', unit: 2, topic: 'Auger Process', marks: '10', answer: 'See 2024 Q3.' },
  { year: 2021, q: 'ESR basic principle — Zeeman effect, resonance condition.', unit: 3, topic: 'ESR Principle', marks: '10', answer: 'See 2024 Q4.' },
  { year: 2021, q: 'Hyperfine splitting — isotropic and anisotropic.', unit: 3, topic: 'Hyperfine Splitting', marks: '10', answer: 'See 2024 Q5.' },
  { year: 2021, q: 'Spin densities and McConnell relationship.', unit: 3, topic: 'Spin Densities', marks: '5', answer: 'See 2024 Q7.' },
  { year: 2021, q: 'Kramer&apos;s degeneracy.', unit: 3, topic: 'Kramer&apos;s Degeneracy', marks: '5', answer: 'See 2024 Q12.' },
  { year: 2021, q: 'PAS applications for gases and condensed systems.', unit: 2, topic: 'PAS', marks: '5', answer: 'PAS applications: (1) Trace gas detection at ppb levels using tunable lasers. (2) Surface and subsurface analysis of solids. (3) Study of condensed phase samples (powders, biological tissues) that are opaque to conventional spectroscopy. (4) Non-destructive depth profiling.' },
  { year: 2021, q: 'd-d transitions in transition metal complexes.', unit: 2, topic: 'd-d Transitions', marks: '10', answer: 'd-d transitions occur between split d-orbitals in transition metal complexes under crystal field. They are Laporte-forbidden (same parity) and spin-forbidden (if spin changes), making them weak (epsilon = 1-100 L mol^-1 cm^-1). This is why d-d complexes have pale colors. The number of d-d bands depends on the geometry: octahedral gives 1-3 bands, tetrahedral gives 2-3 bands. Orgel diagrams predict the number and positions of d-d bands based on the electronic configuration.' },

  // ── 2018 ──────────────────────────────────────────────
  { year: 2018, q: 'Raman effect — Classical and Quantum theory.', unit: 1, topic: 'Raman Spectroscopy', marks: '10', answer: 'Classical theory (see 2024 Q1): Based on polarizability changes during vibration. Quantum theory (see 2023 Q9): Inelastic photon-molecule collisions giving Stokes and Anti-Stokes lines. Both explain why Stokes lines are more intense than Anti-Stokes lines.' },
  { year: 2018, q: 'Point groups with examples.', unit: 1, topic: 'Point Groups', marks: '10', answer: 'See 2023 Q11 for detailed examples of Cnv, Dnh, Dnd, Td, Oh groups with molecular examples.' },
  { year: 2018, q: 'CARS principle.', unit: 1, topic: 'CARS', marks: '5', answer: 'See 2023 Q10.' },
  { year: 2018, q: 'Franck-Condon Principle.', unit: 2, topic: 'Franck-Condon', marks: '10', answer: 'See 2024 Q2.' },
  { year: 2018, q: 'Koopman&apos;s theorem.', unit: 2, topic: 'PES', marks: '5', answer: 'BE = -epsilon_i (orbital energy). Approximation in PES that neglects electron relaxation after ionization.' },
  { year: 2018, q: 'Photoelectric effect basic principle.', unit: 2, topic: 'Photoelectric Effect', marks: '5', answer: 'See 2023 Q20. E_kinetic = h nu - phi.' },
  { year: 2018, q: 'Auger Electron Spectroscopy.', unit: 2, topic: 'Auger Process', marks: '10', answer: 'See 2024 Q3. AES is a surface analytical technique based on the Auger effect, useful for elemental analysis of surfaces (top 1-5 nm).' },
  { year: 2018, q: 'ESR basic principle.', unit: 3, topic: 'ESR Principle', marks: '10', answer: 'See 2024 Q4.' },
  { year: 2018, q: 'Hyperfine coupling.', unit: 3, topic: 'Hyperfine Splitting', marks: '10', answer: 'See 2024 Q5.' },
  { year: 2018, q: 'ESR vs NMR differences.', unit: 3, topic: 'ESR vs NMR', marks: '5', answer: 'See 2023 Q18.' },

  // ── 2016 ──────────────────────────────────────────────
  { year: 2016, q: 'Raman effect — Classical theory (Polarizability Ellipsoid).', unit: 1, topic: 'Raman Spectroscopy', marks: '10', answer: 'See 2024 Q1.' },
  { year: 2016, q: 'Fundamental symmetry operations with examples.', unit: 1, topic: 'Symmetry Operations', marks: '10', answer: 'See 2024 Q9.' },
  { year: 2016, q: 'Mutual Exclusion Principle.', unit: 1, topic: 'Mutual Exclusion', marks: '5', answer: 'See 2022 Q23.' },
  { year: 2016, q: 'Point groups with examples.', unit: 1, topic: 'Point Groups', marks: '10', answer: 'See 2023 Q11.' },
  { year: 2016, q: 'CARS principle.', unit: 1, topic: 'CARS', marks: '5', answer: 'See 2023 Q10.' },
  { year: 2016, q: 'Franck-Condon Principle with diagram.', unit: 2, topic: 'Franck-Condon', marks: '10', answer: 'See 2024 Q2.' },
  { year: 2016, q: 'Koopman&apos;s theorem and PES.', unit: 2, topic: 'PES', marks: '10', answer: 'See 2022 Q4.' },
  { year: 2016, q: 'Charge Transfer Spectra (LMCT, MLCT).', unit: 2, topic: 'Charge Transfer', marks: '10', answer: 'See 2024 Q10.' },
  { year: 2016, q: 'Photoelectric effect.', unit: 2, topic: 'Photoelectric Effect', marks: '5', answer: 'See 2023 Q20.' },
  { year: 2016, q: 'Auger Electron Spectroscopy KLL process.', unit: 2, topic: 'Auger Process', marks: '10', answer: 'See 2024 Q3.' },
  { year: 2016, q: 'PAS applications.', unit: 2, topic: 'PAS', marks: '5', answer: 'See 2023 Q21.' },
  { year: 2016, q: 'ESR basic principle.', unit: 3, topic: 'ESR Principle', marks: '10', answer: 'See 2024 Q4.' },
  { year: 2016, q: 'Hyperfine splitting.', unit: 3, topic: 'Hyperfine Splitting', marks: '10', answer: 'See 2024 Q5.' },
  { year: 2016, q: 'Spin densities and McConnell relationship.', unit: 3, topic: 'Spin Densities', marks: '5', answer: 'See 2024 Q7.' },

  // ── 2017 ──────────────────────────────────────────────
  { year: 2017, q: 'Charge Transfer Spectra — LMCT and MLCT with examples.', unit: 2, topic: 'Charge Transfer', marks: '10', answer: 'See 2024 Q10.' },

  // ── GUESS PAPER 2025 ──────────────────────────────────
  { year: 2025, q: 'What is a plane of symmetry? What do you mean by Rayleigh Scattering?', unit: 1, topic: 'Symmetry Operations', marks: '5', isGuess: true, answer: 'A plane of symmetry (sigma) is a mirror plane that divides the molecule into two identical halves. When the molecule is reflected through this plane, the reflected configuration is indistinguishable from the original. Types: sigma_v (vertical, contains principal axis), sigma_h (horizontal, perpendicular to principal axis), sigma_d (dihedral, bisects C2 axes). Rayleigh Scattering is elastic scattering where the scattered photon has the same frequency as the incident photon. The molecule returns to its original vibrational state. Rayleigh scattering accounts for ~99.9% of scattered light.' },
  { year: 2025, q: 'Why are Anti-Stokes lines weaker than Stokes lines?', unit: 1, topic: 'Raman Spectroscopy', marks: '5', isGuess: true, answer: 'Anti-Stokes lines are weaker because they require the molecule to be in an excited vibrational state (v=1) before the scattering event. At room temperature, the Boltzmann distribution means very few molecules populate v=1 compared to v=0. The population ratio is: N(v=1)/N(v=0) = exp(-h nu_vib/kT). For typical vibrations (~1000 cm-1), only about 1% of molecules are in v=1 at room temperature. Additionally, the frequency factor ((nu_0 + nu_vib)/(nu_0 - nu_vib))^4 further favors Stokes lines.' },
  { year: 2025, q: 'Two applications of PAS.', unit: 2, topic: 'PAS', marks: '5', isGuess: true, answer: '(1) Study of highly absorbing or scattering samples (powders, gels, biological tissues) where conventional transmission spectroscopy fails, since PAS measures absorbed energy directly. (2) Depth profiling of layered materials — by varying the modulation frequency, one can control the thermal diffusion length and probe different depths non-destructively.' },
  { year: 2025, q: 'Define Internal Conversion.', unit: 2, topic: 'Decay Processes', marks: '5', isGuess: true, answer: 'Internal Conversion (IC) is a non-radiative process in which a molecule undergoes a transition between two electronic states of the SAME spin multiplicity without emission of a photon. It occurs through vibronic coupling — when vibrational energy levels of the two electronic states overlap, providing an isoenergetic pathway for the crossover. For example, S1 to S0 internal conversion is a major deactivation pathway that competes with fluorescence.' },
  { year: 2025, q: 'Define Emission Spectrum.', unit: 2, topic: 'Decay Processes', marks: '5', isGuess: true, answer: 'An emission spectrum is produced when excited molecules return to lower energy states by emitting photons. It consists of lines or bands at wavelengths corresponding to the energy differences between electronic, vibrational, and rotational states. Types include fluorescence emission (from S1 to S0) and phosphorescence emission (from T1 to S0). The emission spectrum is typically red-shifted (Stokes shift) compared to the absorption spectrum.' },
  { year: 2025, q: 'What do you mean by zero-field splitting?', unit: 3, topic: 'ESR Principle', marks: '5', isGuess: true, answer: 'Zero-field splitting (ZFS) is the splitting of energy levels in paramagnetic systems (especially S &gt; 1/2) even in the absence of an external magnetic field. It arises from spin-spin interactions (dipolar and exchange) between unpaired electrons within the same ion or molecule. For example, in a high-spin d5 Mn(II) complex (S = 5/2), the six spin levels split into three Kramers doublets at B0 = 0. ZFS is described by the D and E parameters in the spin Hamiltonian.' },
  { year: 2025, q: 'Why are alcohol and water not suitable solvents for ESR?', unit: 3, topic: 'ESR Principle', marks: '5', isGuess: true, answer: 'Water and alcohols contain protons (I = 1/2) that couple with the unpaired electron, causing hyperfine splitting. In liquid solution, rapid exchange of protons between solvent molecules leads to unresolved hyperfine coupling, which appears as severe line broadening. This broadens the ESR signal beyond detection. Instead, deuterated solvents (D2O, CD3OD) or aprotic solvents (benzene, CCl4, toluene) are used for ESR studies.' },
  { year: 2025, q: 'Give two differences between ESR and NMR.', unit: 3, topic: 'ESR vs NMR', marks: '5', isGuess: true, answer: '(1) Frequency range: ESR operates at microwave frequencies (~9-10 GHz, X-band) while NMR operates at radio frequencies (~100-1000 MHz). This is because the electron magnetic moment is ~658 times larger than the nuclear magnetic moment. (2) Sample requirement: ESR requires paramagnetic species (unpaired electrons), while NMR can study any NMR-active nucleus regardless of paramagnetism.' },
  { year: 2025, q: 'Give four factors affecting g-value.', unit: 3, topic: 'g-value', marks: '5', isGuess: true, answer: '(1) Spin-orbit coupling — the primary factor causing g-shift from 2.0023. (2) Orbital angular momentum contribution — if the ground state has orbital degeneracy or mixes with excited states. (3) Heavy atom effect — heavier elements have stronger spin-orbit coupling, causing larger g-shifts. (4) Molecular environment — polarity, hydrogen bonding, and coordination geometry can all affect the g-value through their influence on orbital energies and spin-orbit coupling.' },
  { year: 2025, q: 'Explain Mutual Exclusion Principle.', unit: 1, topic: 'Mutual Exclusion', marks: '5', isGuess: true, answer: 'See 2022 Q23. For centrosymmetric molecules, IR-active modes are Raman-inactive and vice versa.' },
  { year: 2025, q: 'Franck-Condon Principle.', unit: 2, topic: 'Franck-Condon', marks: '10', isGuess: true, answer: 'See 2024 Q2.' },
  { year: 2025, q: 'Koopman&apos;s theorem.', unit: 2, topic: 'PES', marks: '5', isGuess: true, answer: 'BE = -epsilon_i. The ionization energy of an electron approximately equals the negative of its Hartree-Fock orbital energy. This neglects electron relaxation after ionization.' },
  { year: 2025, q: 'Kramer&apos;s degeneracy.', unit: 3, topic: 'Kramer&apos;s Degeneracy', marks: '5', isGuess: true, answer: 'See 2024 Q12. Odd number of unpaired electrons = 2-fold degeneracy at B0 = 0.' },
  { year: 2025, q: 'Discuss the Spin Hamiltonian equation of ESR.', unit: 3, topic: 'Spin Hamiltonian', marks: '10', isGuess: true, answer: 'See 2024 Q6. H = g beta_e B.S + S.A.I. Includes electron Zeeman term and hyperfine coupling term. In solution (isotropic): H = g beta_e B.S + a_iso S.I. Each term is explained with physical significance.' },
];

const years = [2025, 2024, 2023, 2022, 2021, 2018, 2017, 2016];
const units = [1, 2, 3];

export default function PYQBank() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);
  const [showGuess, setShowGuess] = useState(false);
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = pyqData.filter(q => {
    if (selectedYear && q.year !== selectedYear) return false;
    if (selectedUnit && q.unit !== selectedUnit) return false;
    if (!showGuess && q.isGuess) return false;
    if (search && !q.q.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const topicCounts: Record<string, number> = {};
  pyqData.forEach(q => { topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1; });

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
          {pyqData.length} questions from 2016-2025 with model answers
        </p>
      </motion.div>

      {/* Filters */}
      <div className="space-y-3 mb-6">
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
                {y === 2025 ? 'Guess' : y}
              </motion.button>
            ))}
          </div>

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

          <motion.button
            onClick={() => setShowGuess(!showGuess)}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-all ${
              showGuess
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                : 'bg-[#1e293b]/50 text-slate-400 border border-transparent hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="w-3 h-3 inline mr-1" />
            Guess Paper
          </motion.button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1" style={{ scrollbarWidth: 'thin' }}>
        <AnimatePresence>
          {filtered.map((q, i) => (
            <motion.div
              key={`${q.year}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: Math.min(i * 0.02, 0.3) }}
              className="rounded-xl bg-[#1e293b]/60 border border-[#334155]/50 hover:border-emerald-500/20 transition-colors overflow-hidden"
            >
              {/* Question Header - Clickable */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-3 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 text-center pt-0.5">
                    <span className={`text-lg font-black ${q.isGuess ? 'text-purple-400' : 'text-amber-400'}`}>
                      {q.year}
                    </span>
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
                      {q.isGuess && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          Guess Paper
                        </span>
                      )}
                      {topicCounts[q.topic] >= 5 && (
                        <span className="text-[10px] text-amber-400 star-pulse">
                          {topicCounts[q.topic]}x repeated
                        </span>
                      )}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 pt-1"
                  >
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </motion.div>
                </div>
              </button>

              {/* Answer - Expandable */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-3 pl-16">
                      <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                        <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1.5">
                          Model Answer
                        </p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {q.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-8 text-slate-500">
            <p className="text-sm">No questions found</p>
            <p className="text-xs mt-1">Try changing the filters</p>
          </div>
        )}
      </div>
    </section>
  );
}