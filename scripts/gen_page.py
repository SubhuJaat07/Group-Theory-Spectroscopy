import os

content = """'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import UnitSection, { type TopicData } from '@/components/UnitSection';
import PYQBank from '@/components/PYQBank';
import QuickRevision from '@/components/QuickRevision';
import Footer from '@/components/Footer';
import SymmetryOperations from '@/components/diagrams/SymmetryOperations';
import PointGroupFlowchart from '@/components/diagrams/PointGroupFlowchart';
import RamanDiagram from '@/components/diagrams/RamanDiagram';
import FranckCondonDiagram from '@/components/diagrams/FranckCondonDiagram';
import JablonskiDiagram from '@/components/diagrams/JablonskiDiagram';
import AugerProcess from '@/components/diagrams/AugerProcess';
import ESRDiagram from '@/components/diagrams/ESRDiagram';
import ChargeTransferDiagram from '@/components/diagrams/ChargeTransferDiagram';

const unit1Topics: TopicData[] = [
  {
    title: 'Symmetry Elements and Operations (E, Cn, sigma, i, Sn)',
    pyqCount: 6,
    pyqYears: '2016, 2018, 2021, 2022, 2023, 2024',
    isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          A <b className="text-emerald-400">symmetry element</b> is a geometrical entity (a point, line, or plane) with respect to which a symmetry operation is performed. A <b className="text-emerald-400">symmetry operation</b> is an action that transforms the molecule into a configuration indistinguishable from the original. There are exactly five fundamental symmetry operations that every chemist must know.
        </p>
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
          <p className="text-emerald-400 font-bold text-sm mb-2">The Five Fundamental Symmetry Operations</p>
          <div className="space-y-3">
            {[
              { op: 'E (Identity)', desc: 'Leaves the molecule completely unchanged. Every molecule possesses this operation. It is mathematically essential for forming a complete group.' },
              { op: 'Cn (Proper Rotation)', desc: 'Rotation by 360/n degrees about an axis. H2O has a C2 axis (180 deg through O). BF3 has a C3 axis perpendicular to its plane. CH4 has multiple C3 and C2 axes.' },
              { op: 'sigma (Reflection)', desc: 'Three types: sigma_v (vertical, containing principal axis), sigma_h (horizontal, perpendicular to principal axis), sigma_d (dihedral, bisects C2 axes). H2O has two sigma_v planes.' },
              { op: 'i (Inversion)', desc: 'Every atom at (x,y,z) moves to (-x,-y,-y,z) through the center. Only molecules with an inversion center possess this. Examples: benzene, CO2. H2O does NOT have i.' },
              { op: 'Sn (Improper Rotation)', desc: 'Rotation by 360/n followed by reflection perpendicular to the axis. CH4 has S4 axes. S1 = sigma, S2 = i.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0f172a]/60 rounded-lg p-3">
                <p className="text-white font-semibold text-sm">{item.op}</p>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <SymmetryOperations />
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
          <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">Memory Trick</p>
          <p className="text-slate-300 text-sm leading-relaxed"><b>ECRIS</b> - <b>E</b>ntity, <b>C</b> Rotation, <b>R</b>eflection, <b>I</b>nversion, <b>S</b>n. "Every Chemist Really Inspects Symmetry."</p>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">What to Write in Exam (10 marks)</p>
          <p className="text-slate-300 text-sm leading-relaxed">Define symmetry element and operation. Describe all five with molecular examples. Draw symmetry elements on H2O and NH3. Mention that all elements intersect at one point. Connect to spectroscopy (selection rules, character tables).</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Point Groups and Determination Flowchart',
    pyqCount: 6, pyqYears: '2016, 2018, 2022, 2023, 2024', isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">A <b className="text-emerald-400">point group</b> is the complete set of symmetry operations describing a molecule's symmetry. Assigning the correct point group is the first step in applying group theory to spectroscopy and determining IR/Raman activity of vibrations.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { pg: 'Cnv', desc: 'Cn + n sigma_v planes', ex: 'C2v: H2O, SO2 | C3v: NH3, CH3Cl' },
            { pg: 'Dnh', desc: 'Cn + n C2 perp + sigma_h + n sigma_v', ex: 'D3h: BF3 | D4h: XeF4 | D6h: benzene' },
            { pg: 'Dnd', desc: 'Cn + n C2 perp + n sigma_d, NO sigma_h', ex: 'D3d: staggered ethane' },
            { pg: 'Td', desc: '4C3 + 3C2 + 6sigma_d (tetrahedral)', ex: 'CH4, CCl4' },
            { pg: 'Oh', desc: '3C4 + 4C3 + 6C2 + sigma_h + sigma_d + i', ex: 'SF6, [Fe(CN)6]4-' },
            { pg: 'D-inf-h', desc: 'Linear + sigma_h + i', ex: 'CO2, H2, N2' },
            { pg: 'C-inf-v', desc: 'Linear, no sigma_h', ex: 'HCN, CO, NO' },
            { pg: 'C1 / Cs / Ci', desc: 'No symmetry / sigma only / i only', ex: 'CHFClBr / CH2ClF / anti-C2H2Cl2' },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0f172a]/60 rounded-lg p-3 border border-[#334155]/30">
              <p className="text-emerald-400 font-bold text-sm">{item.pg}</p>
              <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
              <p className="text-slate-300 text-xs mt-1 italic">{item.ex}</p>
            </div>
          ))}
        </div>
        <PointGroupFlowchart />
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
          <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">Exam Tip</p>
          <p className="text-slate-300 text-sm leading-relaxed">Follow the flowchart systematically: "Is it linear?" then check for high-order Cn, then perpendicular C2, then mirror planes. Memorize: H2O (C2v), NH3 (C3v), CH4 (Td), SF6 (Oh), benzene (D6h), CO2 (D-inf-h).</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Character Tables and Representation Theory',
    pyqCount: 3, pyqYears: '2018, 2021, 2023',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">A <b className="text-emerald-400">character table</b> summarizes all symmetry information of a point group. It has four parts: (1) Top row: symmetry operations grouped into classes. (2) Left column: irreducible representation labels (A1, A2, B1, B2, E, T). A = symmetric under Cn; B = antisymmetric. E = doubly degenerate; T = triply degenerate. (3) Body: characters (traces of representation matrices). (4) Right columns: basis functions - x, y, z (for IR activity), and quadratic functions x^2, xy, etc. (for Raman activity).</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">Key Rule:</b> If a vibration belongs to the same irrep as x, y, or z, it is IR active. If it matches x^2, xy, etc., it is Raman active. In C2v: A1 matches z and x^2+y^2 (both IR and Raman active); A2 matches Rz and xy (Raman active only); B1 and B2 each match one of x/y (IR active) and one quadratic function (Raman active).</p>
      </div>
    ),
  },
  {
    title: 'Selection Rules for IR and Raman Spectroscopy',
    pyqCount: 4, pyqYears: '2021, 2022, 2023, 2024',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">IR Selection Rule:</b> A vibration is IR active if the dipole moment changes during vibration. The mode must belong to the same irrep as x, y, or z.</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">Raman Selection Rule:</b> A vibration is Raman active if polarizability changes during vibration. The mode must belong to the same irrep as quadratic functions (x^2, y^2, xy, xz, yz).</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-amber-400">Mutual Exclusion Principle:</b> For centrosymmetric molecules (having inversion center i), a mode cannot be simultaneously IR and Raman active. If IR active, it is Raman inactive and vice versa. Example: CO2 - symmetric stretch is Raman only; asymmetric stretch is IR only.</p>
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
          <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">Memory Trick</p>
          <p className="text-slate-300 text-sm leading-relaxed"><b>"IR = Dipole Dance, Raman = Polarizability Party."</b> For centrosymmetric molecules: "If i is present, IR and Raman mutually exclude each other."</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Raman Spectroscopy - Classical and Quantum Theory',
    pyqCount: 6, pyqYears: '2016, 2018, 2021, 2023, 2024', isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">Classical Theory:</b> When light's electric field hits a molecule, the electron cloud distorts, inducing a dipole: mu_ind = alpha * E. The polarizability tensor alpha has 6 independent components for anisotropic molecules, visualized as the polarizability ellipsoid. If alpha changes during vibration (d(alpha)/dq != 0), Raman scattering occurs with new frequencies.</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">Quantum Theory:</b> Three outcomes: (1) <b>Rayleigh</b> - elastic, same frequency (~99.9% of scattering). (2) <b>Stokes</b> - molecule gains vibrational energy, photon loses energy: nu_0 - nu_vib. (3) <b>Anti-Stokes</b> - molecule loses vibrational energy, photon gains energy: nu_0 + nu_vib.</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-amber-400">Why Stokes is stronger:</b> Boltzmann distribution favors v=0 over v=1 at room temperature. More molecules available for Stokes (starting from v=0) than Anti-Stokes (starting from v=1). Ratio: I_AS/I_S = exp(-h nu_vib / kT).</p>
        <RamanDiagram />
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">Real-Life Application</p>
          <p className="text-slate-300 text-sm leading-relaxed">Raman spectroscopy is non-destructive and works through glass. The Mars Rover uses it to identify minerals. Used in forensics, art conservation, and pharmaceutical quality control.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'CARS and RRS - Advanced Raman Techniques',
    pyqCount: 4, pyqYears: '2016, 2018, 2022, 2023',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">CARS:</b> Uses THREE laser beams (2 pump at omega_1, 1 Stokes at omega_2). When omega_1 - omega_2 matches a vibrational frequency, coherent anti-Stokes signal at 2*omega_1 - omega_2 is generated. Advantages: 10^4-10^5x stronger signal, coherent directional beam, inherent fluorescence rejection. Used in combustion diagnostics and gas analysis.</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">RRS:</b> When excitation wavelength matches an electronic absorption band, Raman intensity enhances 10^3-10^6 times. Only vibrations coupled to the electronic transition are enhanced, making it highly selective for specific chromophores (heme, retinal).</p>
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
          <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">Memory Trick</p>
          <p className="text-slate-300 text-sm leading-relaxed"><b>CARS = 3 Lasers producing Coherent signal.</b> <b>RRS = Resonance Magic</b> - laser matches absorption, intensity skyrockets.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Vibrational Spectra of Diatomic and Polyatomic Molecules',
    pyqCount: 3, pyqYears: '2018, 2022, 2024',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">Degrees of Freedom:</b> 3N total. Subtract 3 translation + 3 rotation (2 for linear). Vibrational modes = <b>3N-6</b> (non-linear) or <b>3N-5</b> (linear). H2O: 3 modes. CO2: 4 modes (3 distinct frequencies, bending is doubly degenerate).</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">Diatomic:</b> One vibrational mode (stretching). Harmonic: E_v = (v+1/2)h nu. Anharmonic: E_v = (v+1/2)h nu_e - (v+1/2)^2 h nu_e x_e. Overtones and combination bands appear at slightly lower frequencies than multiples due to anharmonicity.</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">Fermi Resonance:</b> When a fundamental and an overtone/combination band have similar energy AND the same symmetry, they interact and split into two bands with shifted intensities. Example: CO2 symmetric stretch (~1330 cm-1) and 2*bending (~1334 cm-1), both Sigma_g+, split into 1285 and 1388 cm-1.</p>
      </div>
    ),
  },
];

const unit2Topics: TopicData[] = [
  {
    title: 'Franck-Condon Principle',
    pyqCount: 6, pyqYears: '2016, 2018, 2021, 2022, 2023, 2024', isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">The <b className="text-emerald-400">Franck-Condon Principle</b> states that electronic transitions (~10^-15 s) are much faster than nuclear motion, so nuclei remain frozen during the transition. The transition is <b>vertical</b> on the potential energy diagram.</p>
        <p className="text-slate-300 leading-relaxed">The transition probability from v to v-prime is proportional to the Franck-Condon factor: P(v,v-prime) = |&lt;psi_v | psi_v-prime&gt;|^2. The most intense transition is to the vibrational level with maximum wavefunction overlap at the ground-state equilibrium geometry (often v=0 to v-prime=2 or 3, NOT v-prime=0).</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-amber-400">Stokes Shift:</b> After absorption (vertical up, often to v-prime=2), vibrational relaxation occurs to v-prime=0. Emission is vertical down to v=1 or v=2. Energy lost to relaxation means emission wavelength > absorption wavelength.</p>
        <FranckCondonDiagram />
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
          <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">Memory Trick</p>
          <p className="text-slate-300 text-sm leading-relaxed"><b>"Fast electron, frozen nuclei = VERTICAL arrow."</b> Like taking a photo - nuclei are frozen during the transition.</p>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">Real-Life Example</p>
          <p className="text-slate-300 text-sm leading-relaxed">Explains why fluorescent dyes absorb blue and emit green (Stokes shift). GFP (Green Fluorescent Protein) in biological imaging works on this principle.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Jablonski Diagram - Radiative and Non-Radiative Decay',
    pyqCount: 4, pyqYears: '2021, 2022, 2023, 2024', isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">The <b className="text-emerald-400">Jablonski diagram</b> shows all electronic transitions and relaxation pathways in a molecule.</p>
        <JablonskiDiagram />
        <div className="space-y-3">
          <div className="bg-[#0f172a]/60 rounded-lg p-3 border border-[#334155]/30">
            <p className="text-emerald-400 font-semibold text-sm">Radiative Processes</p>
            <p className="text-slate-300 text-xs mt-1"><b>Fluorescence:</b> S1 to S0, spin-allowed, ~10^-9 s, observed during excitation.</p>
            <p className="text-slate-300 text-xs mt-1"><b>Phosphorescence:</b> T1 to S0, spin-forbidden, ~10^-3 s to hours, persists after excitation (glow-in-dark).</p>
          </div>
          <div className="bg-[#0f172a]/60 rounded-lg p-3 border border-[#334155]/30">
            <p className="text-purple-400 font-semibold text-sm">Non-Radiative Processes</p>
            <p className="text-slate-300 text-xs mt-1"><b>Vibrational Relaxation (VR):</b> Excess vibrational energy transferred to surroundings, ~10^-12 s.</p>
            <p className="text-slate-300 text-xs mt-1"><b>Internal Conversion (IC):</b> Same multiplicity, non-radiative (e.g., S1 to S0 through vibronic coupling).</p>
            <p className="text-slate-300 text-xs mt-1"><b>Intersystem Crossing (ISC):</b> Different multiplicity (S1 to T1), facilitated by spin-orbit coupling.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-[#0f172a]/60 rounded p-2"><b className="text-emerald-400">Fluorescence</b><br/><span className="text-slate-400">S1-S0 | 10^-9 s | spin allowed</span></div>
          <div className="bg-[#0f172a]/60 rounded p-2"><b className="text-amber-400">Phosphorescence</b><br/><span className="text-slate-400">T1-S0 | 10^-3 s+ | spin forbidden</span></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Auger Effect and KLL Process',
    pyqCount: 6, pyqYears: '2016, 2018, 2021, 2022, 2023, 2024', isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">The <b className="text-emerald-400">Auger effect</b> is a two-step relaxation after core ionization: instead of emitting X-rays, the atom transfers energy to eject a second electron (the Auger electron).</p>
        <AugerProcess />
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">KLL Process:</b> (1) X-ray ejects K electron. (2) L electron fills K vacancy, releasing energy E(K)-E(L1). (3) Energy ejects another L electron. (4) <b>E(Auger) = E(K) - E(L1) - E(L2)</b>. Final state: doubly ionized.</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-amber-400">Auger vs X-ray Fluorescence:</b> Auger dominates for lighter elements (Z &lt; 30), XRF for heavier. KLL notation: initial hole (K), filler (L), ejected (L).</p>
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
          <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">Memory Trick</p>
          <p className="text-slate-300 text-sm leading-relaxed"><b>"KLL = K hole, L fills, L ejected."</b> A chain reaction inside the atom. The notation reads: initial hole, filler, ejected.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Photoelectron Spectroscopy (PES) and Koopman&apos;s Theorem',
    pyqCount: 5, pyqYears: '2016, 2018, 2021, 2022, 2023',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">PES</b> irradiates a sample with monochromatic radiation and measures ejected electron kinetic energy. Using <b>E_kinetic = h nu - BE</b>, binding energies are obtained. XPS uses X-rays (probes core levels), UPS uses UV (probes valence orbitals).</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">Koopman&apos;s Theorem:</b> BE = -epsilon_i (orbital energy). Approximation neglecting electron relaxation after ionization. Connects computed orbital energies to experimental PES data directly.</p>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">Real-Life Application</p>
          <p className="text-slate-300 text-sm leading-relaxed">XPS analyzes surface composition (top 1-10 nm). Used in: corrosion analysis, catalytic surface studies, semiconductor quality control, forensic analysis of inks and paints.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Charge Transfer Spectra (LMCT and MLCT)',
    pyqCount: 5, pyqYears: '2016, 2017, 2023, 2024', isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">CT spectra</b> arise from electron transfer between metal and ligand orbitals. Extremely intense (epsilon = 10^3-10^5) because Laporte-allowed (transfer breaks centrosymmetry).</p>
        <ChargeTransferDiagram />
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">LMCT:</b> Ligand to metal. Occurs with high oxidation state metals. Examples: <b>MnO4- (purple)</b> - O 2p to Mn(VII) d. <b>CrO4 2- (yellow)</b>. <b>FeCl4- (yellow)</b>.</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">MLCT:</b> Metal to ligand. Requires pi-acceptor ligands (bpy, CO, CN-). Example: <b>[Ru(bpy)3]2+ (orange)</b>. Basis for photovoltaic and photocatalytic applications.</p>
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
          <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">Memory Trick</p>
          <p className="text-slate-300 text-sm leading-relaxed"><b>"LMCT = Poor metal begs electrons from ligand"</b> (Mn(VII) in MnO4- pulls from O). <b>"MLCT = Rich metal donates to pi-acceptor ligand."</b></p>
        </div>
      </div>
    ),
  },
  {
    title: 'Photoelectric Effect and PAS',
    pyqCount: 4, pyqYears: '2016, 2018, 2021, 2023',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">Photoelectric Effect:</b> E_kinetic = h nu - phi (work function). Key: threshold frequency nu_0 = phi/h; KE depends on frequency not intensity; number of electrons depends on intensity. Demonstrated particle nature of light.</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">PAS:</b> Modulated light absorbed by sample generates periodic heating, producing sound waves detected by microphone. Useful for: opaque/scattering samples (powders, gels, tissues), depth profiling (varying modulation frequency), trace gas detection at ppb levels.</p>
      </div>
    ),
  },
  {
    title: 'd-d Transitions in Transition Metal Complexes',
    pyqCount: 2, pyqYears: '2021, 2024',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">d-d transitions</b> occur between split d-orbitals (t2g/eg in octahedral; e/t2 in tetrahedral). They are <b>doubly forbidden</b>: (1) Laporte-forbidden (same parity), (2) often spin-forbidden. This is why d-d bands are weak (epsilon = 1-100) and colors are pale.</p>
        <p className="text-slate-300 leading-relaxed">Vibronic coupling weakly allows these transitions by temporarily breaking centrosymmetry. Octahedral complexes show 1-3 d-d bands; tetrahedral show 2-3. The number and positions are predicted by Orgel diagrams.</p>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">Real-Life Example</p>
          <p className="text-slate-300 text-sm leading-relaxed">[Ti(H2O)6]3+ is pale violet (weak d-d). MnO4- is deep purple (intense LMCT, not d-d). Ruby (Cr3+ in Al2O3) is red from weak d-d transitions.</p>
        </div>
      </div>
    ),
  },
];

const unit3Topics: TopicData[] = [
  {
    title: 'ESR Principle - Zeeman Splitting and Resonance Condition',
    pyqCount: 6, pyqYears: '2016, 2018, 2021, 2022, 2023, 2024', isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">ESR</b> detects species with unpaired electrons (radicals, paramagnetic metal ions). In external field B0, degenerate spin states split (Zeeman effect): <b>delta_E = g * beta_e * B0</b>. Resonance when <b>h nu = g * beta_e * B0</b>. Free electron g = 2.0023, beta_e = 9.274 x 10^-24 J/T.</p>
        <p className="text-slate-300 leading-relaxed">X-band ESR (~9.5 GHz) gives resonance at ~3390 G for free electron. <b>Water/alcohol are NOT suitable solvents</b> - their protons cause severe line broadening through unresolved hyperfine coupling. Use deuterated or aprotic solvents instead.</p>
        <ESRDiagram />
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">Real-Life Application</p>
          <p className="text-slate-300 text-sm leading-relaxed">Used in biology (reactive oxygen species in aging/disease), materials science (semiconductor defects), chemistry (radical reaction monitoring), and radiation dosimetry.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Hyperfine Splitting and Coupling Constants',
    pyqCount: 6, pyqYears: '2016, 2018, 2021, 2022, 2023, 2024', isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">Hyperfine splitting</b> arises from interaction between unpaired electron and nuclear magnetic moments. <b>Isotropic coupling (a_iso):</b> Solution phase, from Fermi contact interaction (electron density at nucleus). <b>Anisotropic coupling:</b> Solid state, depends on orientation, from dipolar interaction.</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-amber-400">Number of lines = 2nI + 1</b> (n = equivalent nuclei, I = nuclear spin). Examples: 1H (I=1/2) = 2 lines (doublet); 2 equivalent H = 3 lines (triplet); CH3 = 4 lines (quartet); 14N (I=1) = 3 lines (triplet). For I=1/2, intensities follow Pascal's triangle.</p>
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
          <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">Memory Trick</p>
          <p className="text-slate-300 text-sm leading-relaxed"><b>"2nI+1 = How many lines?"</b> For I=1/2 (H, C-13, F-19), simplifies to n+1. Pattern: 1:1, 1:2:1, 1:3:3:1, 1:4:6:4:1...</p>
        </div>
      </div>
    ),
  },
  {
    title: 'g-Value and Factors Affecting It',
    pyqCount: 3, pyqYears: '2022, 2023, 2024',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed"><b>g = h nu / (beta_e * B0)</b>. Free electron g_e = 2.0023. <b className="text-emerald-400">Factors:</b> (1) Spin-orbit coupling (primary cause of deviation). (2) Orbital contribution (unquenched orbital angular momentum). (3) Heavy atom effect (stronger SOC in heavier elements). (4) Molecular environment (solvent, geometry, H-bonding). Organic radicals: g ~ 2.002-2.006. Transition metals: g can be 1.5-4.0+.</p>
      </div>
    ),
  },
  {
    title: 'Spin Hamiltonian Equation',
    pyqCount: 3, pyqYears: '2022, 2023, 2024',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">The <b className="text-emerald-400">Spin Hamiltonian</b> describes the energy of an unpaired electron in a magnetic field:</p>
        <div className="bg-[#0f172a]/80 rounded-xl p-4 border border-emerald-500/20 text-center">
          <p className="font-mono text-emerald-400 text-lg font-bold">H = g beta_e B.S + S.A.I</p>
        </div>
        <p className="text-slate-300 leading-relaxed"><b>Term 1 (Zeeman):</b> g beta_e B.S - electron spin interaction with external field. g is scalar (solution) or tensor (solid). <b>Term 2 (Hyperfine):</b> S.A.I - electron-nuclear spin interaction through coupling tensor A. Isotropic: A = a_iso. For multiple nuclei: add SUM(S.A_i.I_i). For S &gt; 1/2: add zero-field splitting term S.D.S.</p>
      </div>
    ),
  },
  {
    title: 'Spin Densities and McConnell Relationship',
    pyqCount: 3, pyqYears: '2022, 2023, 2024',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">Spin density (rho)</b> = probability of finding unpaired electron at an atomic position. Can be positive (SOMO amplitude) or negative (spin polarization). <b className="text-emerald-400">McConnell Relationship:</b> <b>a_H = Q * rho_C</b>, where Q ~ 23-28 G for aromatic pi-radicals. Converts experimental coupling constants into spin distribution maps. Example: benzene radical anion - equal coupling for all 6 protons means rho = 1/6 at each carbon.</p>
      </div>
    ),
  },
  {
    title: 'Kramer&apos;s Degeneracy and ESR vs NMR',
    pyqCount: 3, pyqYears: '2021, 2022, 2024',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">Kramer&apos;s Theorem:</b> Systems with odd unpaired electrons (half-integer spin) have at least 2-fold degenerate levels at B0 = 0. Only lifted by external magnetic field. Guarantees ESR transitions are always allowed for such systems.</p>
        <p className="text-slate-300 leading-relaxed"><b className="text-emerald-400">ESR vs NMR:</b> ESR: unpaired electrons, microwave (~9-10 GHz), 658x larger magnetic moment, paramagnetic samples only, much higher sensitivity. NMR: any NMR-active nucleus, radio frequency (~100-1000 MHz), all sample types, lower sensitivity.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead><tr className="border-b border-[#334155]"><th className="text-left p-2 text-emerald-400">Feature</th><th className="text-left p-2 text-emerald-400">ESR</th><th className="text-left p-2 text-emerald-400">NMR</th></tr></thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-[#334155]/30"><td className="p-2">Particle</td><td className="p-2">Electrons (spin 1/2)</td><td className="p-2">Nuclei (I &gt; 0)</td></tr>
              <tr className="border-b border-[#334155]/30"><td className="p-2">Frequency</td><td className="p-2">~9-10 GHz (microwave)</td><td className="p-2">~100-1000 MHz (radio)</td></tr>
              <tr className="border-b border-[#334155]/30"><td className="p-2">Magnetic moment</td><td className="p-2">658x larger (Bohr magneton)</td><td className="p-2">Nuclear magneton</td></tr>
              <tr><td className="p-2">Sensitivity</td><td className="p-2">10^6-10^8 spins</td><td className="p-2">~10^15 nuclei</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
      <Navigation />
      <HeroSection />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <UnitSection unitNumber={1} unitTitle="Molecular Spectroscopy &amp; Group Theory" topics={unit1Topics} />
        <UnitSection unitNumber={2} unitTitle="Electronic Spectroscopy" topics={unit2Topics} />
        <UnitSection unitNumber={3} unitTitle="ESR Spectroscopy" topics={unit3Topics} />
        <PYQBank />
        <QuickRevision />
      </div>
      <Footer />
    </main>
  );
}
"""

path = '/home/z/my-project/src/app/page.tsx'
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print(f"Written {len(content)} bytes, {content.count(chr(10))} lines to {path}")