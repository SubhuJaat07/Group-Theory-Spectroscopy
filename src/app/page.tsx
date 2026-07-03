'use client';

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
    title: 'Symmetry Elements & Operations (E, Cn, σ, i, Sn)',
    pyqCount: 6,
    pyqYears: '2016, 2018, 2021, 2022, 2023, 2024',
    isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">Symmetry</b> ka matlab hai — jab bhi koi operation apply karo molecule pe, woh APNE JESA HI dikhe. Matlab molecule ka appearance change nahi hona chahiye. Ye concept Group Theory ka foundation hai aur spectroscopy mein selection rules derive karne ke liye zaroori hai.
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { op: 'E (Identity)', desc: 'Kuch nahi karo — molecule waise hi rehta hai. Har molecule mein hota hai. Ye trivial operation hai lekin group theory mein zaroori hai kyunki closure property ke liye chahiye.' },
            { op: 'Cn (Proper Rotation)', desc: 'Molecule ko kisi axis ke around 360°/n rotate karo. Agar same dikhta hai toh Cn symmetry hai. C2 = 180°, C3 = 120°, C4 = 90°, C6 = 60°. H2O mein C2 axis hota hai (O se guzre).' },
            { op: 'σ (Reflection/Plane)', desc: 'Ek plane ke through mirror image banana. 3 types: σv (vertical, bond ke through), σh (horizontal, perpendicular to principal axis), σd (dihedral, angle bisector). H2O mein 2 σv planes hain.' },
            { op: 'i (Inversion Center)', desc: 'Har point (x,y,z) ko (-x,-y,-z) pe bhejo. Agar molecule same dikhta hai toh inversion center hai. Example: CO2, C6H6 (benzene) mein hai. H2O, NH3 mein NAHI hai. Important: Agar i hai toh σh AUR C2 DONO honge.' },
            { op: 'Sn (Improper Rotation)', desc: 'Pehle Cn rotation, phir σh reflection — ya phir pehle σh, phir Cn. Dono order mein same result aata hai. S4 = 90° rotate + reflect. CH4 mein S4 axis hota hai. Sn = Cn + σh (equivalent).' },
          ].map((item, i) => (
            <div key={i} className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
              <p className="text-emerald-400 font-semibold text-sm mb-1">{item.op}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm mb-1">H2O ki Symmetry Operations:</p>
          <p className="text-xs text-slate-300">E, C2 (O atom se guzri), σv (molecular plane), σv&apos; (perpendicular to molecular plane) — Total 4 operations → Point Group C2v</p>
        </div>

        <SymmetryOperations />
      </div>
    ),
  },
  {
    title: 'Point Groups (Cnv, Dnh, Dnd, Td, Oh) with Flowchart',
    pyqCount: 7,
    pyqYears: '2016, 2018, 2021, 2022, 2023, 2024',
    isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">Point Group</b> ek aisa collection hai symmetry operations ka jo ek specific symmetry pattern follow karte hain. Molecule ka point group determine karna spectroscopy mein SABSE IMPORTANT hai kyunki selection rules directly point group se derive hote hain. Schoenflies notation use hota hai.
        </p>

        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { pg: 'C1', ex: 'CHFClBr', desc: 'No symmetry (kuch nahi)' },
            { pg: 'Cs', ex: 'CH2ClF (cis)', desc: 'Only σ plane' },
            { pg: 'C2', ex: 'H2O2 (twisted)', desc: 'Only C2 axis' },
            { pg: 'C2v', ex: 'H2O, SO2', desc: 'C2 + 2σv' },
            { pg: 'C3v', ex: 'NH3, CHCl3', desc: 'C3 + 3σv' },
            { pg: 'C∞v', ex: 'CO, HCl, NO', desc: 'Linear, no i center' },
            { pg: 'D2h', ex: 'C2H4 (ethylene)', desc: 'C2 + 2C2⊥ + σh + 2σv + i' },
            { pg: 'D3h', ex: 'BF3, CO3²⁻', desc: 'C3 + 3C2⊥ + σh + 3σv' },
            { pg: 'D6h', ex: 'C6H6 (benzene)', desc: 'C6 + 6C2⊥ + σh + 6σv + i' },
            { pg: 'D∞h', ex: 'CO2, H2, C2H2', desc: 'Linear with i center' },
            { pg: 'Td', ex: 'CH4, CCl4', desc: 'Tetrahedral' },
            { pg: 'Oh', ex: 'SF6, [Fe(CN)6]³⁻', desc: 'Octahedral' },
          ].map((item, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40 flex items-start gap-2">
              <span className="shrink-0 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">{item.pg}</span>
              <div>
                <p className="text-xs text-white font-medium">{item.ex}</p>
                <p className="text-[10px] text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Exam Tip:</p>
          <p className="text-xs text-slate-300 mt-1">Linear molecules: agar i center hai → D∞h (CO2), nahi hai → C∞v (CO). Tetrahedral → Td (CH4). Octahedral → Oh (SF6). Ye 4 point groups BAHUT baar puche jaate hain!</p>
        </div>

        <PointGroupFlowchart />
      </div>
    ),
  },
  {
    title: 'Group, Subgroup & Conjugacy Classes',
    pyqCount: 3,
    pyqYears: '2016, 2021, 2022',
    content: (
      <div className="space-y-4">
        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Group (Mathematical Definition)</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ek set of elements joi 4 properties follow kare — <b>Closure</b> (A·B bhi group mein hai), <b>Associativity</b> ((A·B)·C = A·(B·C)), <b>Identity</b> (E hai group mein), <b>Inverse</b> (har element ka inverse bhi group mein hai). Example: C2v group = &#123;E, C2, σv, σv&#x2032;&#125; — 4 elements, order = 4.
          </p>
        </div>
        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Subgroup</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Group G ke kuch elements khud ek group banate hain → woh subgroup hain. Condition: subgroup ka order, parent group ke order ka factor hona chahiye (Lagrange&apos;s theorem). Example: C2v has elements E, C2, σv, σv&apos;. Its subgroups include: just E; E+C2; E+σv; E+σv&apos;. Note: Order of subgroup MUST divide order of group.
          </p>
        </div>
        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Conjugacy Classes</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Do elements A aur B conjugate hain agar koi element X exist kare jisse: XAX⁻¹ = B. Same conjugacy class ke elements ka CHARACTER (character table mein) same hota hai. C2v mein 4 classes hain: each element is in its own class — E, C2, σv, σv&apos; are all in separate classes. Oh mein kam classes hote hain kyunki 3 C4 axes equivalent hain. Oh mein kam classes hote hain kyunki 3 C4 axes equivalent hain.
          </p>
        </div>
        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Key Formula:</p>
          <p className="text-xs text-slate-300 mt-1 font-mono">Order of group (h) = total number of symmetry operations. C2v → h=4, C3v → h=6, Td → h=24, Oh → h=48. Sum of squares of dimensions of irreducible representations = h.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'IR Spectroscopy — Selection Rules, Rotational & Vibrational',
    pyqCount: 3,
    pyqYears: '2016, 2018, 2021',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">IR Spectroscopy</b> mein molecule IR radiation absorb karta hai aur vibrational/rotational energy levels ke beech transition hota hai. Dipole moment change hona ZAROORI hai IR active hone ke liye.
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Degrees of Freedom</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            N atoms wale molecule mein total DOF = 3N. Translational = 3, Rotational = 2 (linear) ya 3 (non-linear). Vibrational = 3N-5 (linear) ya 3N-6 (non-linear). Example: H2O (N=3) → 3(3)-6 = 3 vibrational modes (symmetric stretch, asymmetric stretch, bending). CO2 (N=3, linear) → 3(3)-5 = 4 vibrational modes (but symmetric stretch IR inactive!).
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Selection Rules</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            <b>Rotational:</b> ΔJ = ±1 (microwave region, 0.1-100 cm⁻¹). Diatomic/polar linear molecules only. Formula: ν̃ = 2B(J+1) where B = rotational constant. Symmetric molecules (H2, CO2 rotation) microwave inactive.
          </p>
          <p className="text-xs text-slate-300 leading-relaxed mt-2">
            <b>Vibrational:</b> Transition IR active tab hota hai jab dipole moment change ho (∂μ/∂Q ≠ 0). Symmetric stretch of CO2 is IR INACTIVE (no dipole change). Asymmetric stretch IS active (dipole changes). Bending mode of CO2 IS active.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { mode: 'Symmetric Stretch', mol: 'H2O', active: true, note: 'O-H bonds dono stretch, dipole change hota hai' },
            { mode: 'Asymmetric Stretch', mol: 'H2O', active: true, note: 'Ek bond stretch, ek compress — dipole change' },
            { mode: 'Bending (Scissoring)', mol: 'H2O', active: true, note: 'Bond angle change → dipole moment change' },
            { mode: 'Symmetric Stretch', mol: 'CO2', active: false, note: 'Dono C=O equally stretch, dipole CANCEL → IR inactive' },
          ].map((item, i) => (
            <div key={i} className={`p-2.5 rounded-lg border ${item.active ? 'bg-emerald-500/5 border-emerald-500/30' : 'bg-red-500/5 border-red-500/30'}`}>
              <p className="text-xs font-semibold text-white">{item.mode} ({item.mol})</p>
              <p className={`text-[10px] mt-0.5 ${item.active ? 'text-emerald-400' : 'text-red-400'}`}>
                {item.active ? '✓ IR Active' : '✗ IR Inactive'}
              </p>
              <p className="text-[10px] text-slate-400 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Raman Spectroscopy — Classical & Quantum Theory',
    pyqCount: 6,
    pyqYears: '2016, 2018, 2021, 2022, 2023, 2024',
    isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">Raman Effect</b> (1928 - C.V. Raman) mein light scatter hota hai aur scattered light mein frequency change ho jata hai — ye inelastic scattering hai. Ye IR spectroscopy ka COMPLEMENT hai. Dono saath mein use karke pura vibrational spectrum mil jata hai.
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Classical Theory (Polarizability Ellipsoid)</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Jab light aata hai toh molecule mein induced dipole moment banta hai: μ_ind = α·E. α = <b>polarizability tensor</b>. Raman active tab hota hai jab vibration ke dauran polarizability CHANGE ho (dα/dQ ≠ 0). Polarizability ellipsoid ko socho — agar vibration ke dauran ye ellipsoid ki shape/size change hoti hai toh Raman active hai. CO2 ka symmetric stretch → ellipsoid size change → Raman ACTIVE (lekin IR inactive!).
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Quantum Theory</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Quantum mechanically, photon molecule se interact karta hai aur ek virtual state ke through guzarta hai. <b>Rayleigh scattering</b> (99.9%) — same frequency, elastic. <b>Stokes lines</b> — molecule vibrational energy GAIN karta hai, emitted photon ka frequency KAM (ν₀ - ν). <b>Anti-Stokes lines</b> — molecule already excited state mein tha, energy LOSE karta hai, frequency ZYADA (ν₀ + ν). Anti-Stokes KAM intense hote hain kyunki room temperature pe zyada molecules ground state pe hote hain (Boltzmann distribution).
          </p>
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Selection Rule:</p>
          <p className="text-xs text-slate-300 mt-1">Raman: Δv = ±1 (dα/dQ ≠ 0, polarizability change). IR: Δv = ±1 (dμ/dQ ≠ 0, dipole change). Stokes is more intense than Anti-Stokes (Boltzmann). Laser source use hota hai (visible light) — isliye fluorescent samples problematic hoti hain.</p>
        </div>

        <RamanDiagram />
      </div>
    ),
  },
  {
    title: 'Mutual Exclusion Principle',
    pyqCount: 5,
    pyqYears: '2016, 2018, 2021, 2022, 2023',
    isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">Mutual Exclusion Principle</b> kehta hai ki agar koi molecule mein <b>center of inversion (i)</b> hai, toh woh vibrational modes jo IR active hain woh Raman INACTIVE hote hain, aur jo Raman active hain woh IR INACTIVE hote hain. Koi bhi mode DONO mein active nahi ho sakta (lekin DONO mein inactive ho sakta hai — called &quot;silent mode&quot;).
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Why? (Mathematical Reason)</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            IR activity dipole moment change pe depend karta hai (μ → vector quantity, ungerade/u symmetry). Raman activity polarizability change pe depend karta hai (α → tensor quantity, gerade/g symmetry). Center of inversion wale molecules mein IR active modes ungerade hain aur Raman active modes gerade hain — isliye kabhi overlap nahi hota.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { mol: 'CO2 (D∞h)', has: true, modes: '4 modes: Sym. stretch (R only), Asym. stretch (IR only), 2 Bending (IR only)' },
            { mol: 'H2O (C2v)', has: false, modes: 'No i center → 3 modes, some can be BOTH IR and Raman active' },
            { mol: 'C6H6 (D6h)', has: true, modes: '30 modes, some Raman only, some IR only, some silent' },
            { mol: 'CH4 (Td)', has: false, modes: 'No i center → modes can be both active' },
          ].map((item, i) => (
            <div key={i} className={`p-2.5 rounded-lg border ${item.has ? 'bg-emerald-500/5 border-emerald-500/30' : 'bg-[#0f172a]/50 border-[#334155]/40'}`}>
              <p className="text-xs font-semibold text-white">{item.mol}</p>
              <p className={`text-[10px] mt-0.5 ${item.has ? 'text-emerald-400' : 'text-slate-400'}`}>
                {item.has ? '✓ Has inversion center' : '✗ No inversion center'}
              </p>
              <p className="text-[10px] text-slate-400 mt-1">{item.modes}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Exam Tip:</p>
          <p className="text-xs text-slate-300 mt-1">CO2 ka symmetric stretch — ONLY Raman active, IR inactive. Asymmetric stretch — ONLY IR active, Raman inactive. Ye example HAR BAAR pucha jaata hai! Benzene (D6h) bhi bahut common example hai.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'CARS (Coherent Anti-Stokes Raman Spectroscopy)',
    pyqCount: 5,
    pyqYears: '2016, 2018, 2021, 2023, 2024',
    isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">CARS</b> ek <b>non-linear Raman technique</b> hai jismein 3 laser beams use hote hain — 2 pump beams (frequency ω₁) aur 1 Stokes beam (frequency ω₂). Inka frequency difference ω₁ - ω₂ = vibrational frequency (ωᵥ) ke barabar hota hai. Anti-Stokes signal at frequency 2ω₁ - ω₂ generate hota hai jo COHERENT hota hai (directional beam).
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Principle & Process</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Step 1: Pump (ω₁) + Stokes (ω₂) beams milke vibrational coherence create karte hain (ω₁ - ω₂ = ωᵥ). Step 2: Third pump photon (ω₁) is coherent vibration se scatter hota hai aur anti-Stokes photon (2ω₁ - ω₂) emit hota hai. Ye signal COHERENT hai — matlab specific direction mein jaata hai, sara direction pe nahi (normal Raman mein 4π solid angle pe scatter hota hai).
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Advantages over Normal Raman</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            1. COHERENT signal → strong, directional, easy to collect. 2. Fluorescence rejection → anti-Stokes frequency alag hota hai, fluorescence se separate. 3. High spatial resolution → confocal capability. 4. Fast acquisition → real-time imaging possible. 5. No slit needed → high throughput.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Applications</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Combustion studies (flame temperature), biological imaging (tissue mapping), gas-phase diagnostics, pharmaceutical analysis, material science. CARS microscopy se cellular structures bina staining ke dikh jaate hain.
          </p>
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Key Difference from Normal Raman:</p>
          <p className="text-xs text-slate-300 mt-1">Normal Raman = spontaneous, incoherent, weak signal, 4π scatter. CARS = stimulated, COHERENT, strong signal, directional. CARS mein non-linear optical process hai (third-order susceptibility χ³).</p>
        </div>
      </div>
    ),
  },
  {
    title: 'RRS (Resonance Raman Spectroscopy)',
    pyqCount: 2,
    pyqYears: '2023, 2024',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">RRS</b> mein excitation wavelength ko electronic absorption band ke PAAS choose kiya jaata hai. Jab laser frequency electronic transition ke kareeb hota hai, toh Raman scattering ka intensity <b>10³ to 10⁶ times</b> increase ho jaata hai! Ye resonance enhancement kehlaata hai.
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Principle</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Normal Raman mein virtual state kai orders upar hota hai. RRS mein laser frequency electronic excited state ke kareeb hota hai — toh virtual state ab REAL excited state ke paas hai. Isse polarizability bahut BADH jaati hai (resonance condition) aur Raman signal bahut strong ho jaata hai. Khandwalla&apos;s theory se enhance hota hai — A-term (totally symmetric modes) aur B-term (non-totally symmetric modes) enhancement.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Advantages & Applications</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            1. Bahut dilute samples bhi detect ho sakti hain (low concentration). 2. Selective enhancement — sirf woh modes enhance hote hain jo chromophore se connected hain. 3. Biological molecules (heme proteins, carotenoids, retinal) study karne ke liye excellent. 4. Short notes mein 2-3 points enough hain exam mein.
          </p>
        </div>
      </div>
    ),
  },
];

const unit2Topics: TopicData[] = [
  {
    title: 'Franck-Condon Principle',
    pyqCount: 6,
    pyqYears: '2016, 2018, 2021, 2022, 2023, 2024',
    isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">Franck-Condon Principle</b> kehta hai ki electronic transition itni FAST hoti hai (~10⁻¹⁵ seconds, Born-Oppenheimer approximation) ki nuclei ka position change nahi hota during transition. Isliye transition <b>VERTICAL</b> hota hai potential energy diagram pe — internuclear distance same rehta hai, sirf electronic state change hota hai.
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Key Concepts</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ground state (S₀) mein molecule equilibrium bond length pe hota hai (v=0). Excited state (S₁) ka equilibrium bond length ALAG hota hai (usually zyada, kyunki antibonding orbital hai). Vertical transition se molecule excited state ke HIGHER vibrational level pe land karta hai (v&apos;=2 ya 3, not v&apos;=0). Ye &quot;Franck-Condon factor&quot; proportional hota hai overlap integral ke — jis vibrational level ka wavefunction maximum overlap kare, wahan maximum transition probability.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Stokes Shift</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Absorption (v=0 → v&apos;=2) aur Emission (v&apos;=0 → v=1) alag vibrational levels ke beech hoti hai. Isliye emission ki wavelength ABSORPTION se zyada hoti hai (kam energy). Ye difference ko <b>Stokes shift</b> kehte hain. Fluorescence always red-shifted hoti hai absorption se.
          </p>
        </div>

        <FranckCondonDiagram />

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Exam Tip:</p>
          <p className="text-xs text-slate-300 mt-1">Diagram ZAROOR banana — vertical transition arrows, ground & excited state curves, vibrational levels, Stokes shift label. 10 marker hai, toh 5 marks diagram + explanation + Stokes shift + vibrational progression.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Radiative & Non-Radiative Decay (Jablonski Diagram)',
    pyqCount: 5,
    pyqYears: '2018, 2021, 2022, 2023, 2024',
    isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          Jab molecule excited state pe jaata hai (absorption ke baad), toh wapas ground state aane ke <b>2 main raaste</b> hote hain: <b>Radiative</b> (light emit karta hai) aur <b>Non-radiative</b> (bina light ke energy lose karta hai). Poora process Jablonski diagram se samajhte hain.
        </p>

        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { type: 'Fluorescence', kind: 'Radiative', color: 'text-emerald-400', time: '~10⁻⁹ s', desc: 'S₁ → S₀, same spin multiplicity (singlet→singlet). Quick process. Emission wavelength > absorption (Stokes shift). Mirrors absorption spectrum shape.' },
            { type: 'Phosphorescence', kind: 'Radiative', color: 'text-amber-400', time: '~10⁻³ s to hours', desc: 'T₁ → S₀, spin-forbidden (triplet→singlet). Bahut slow. Glow effect dikhata hai after UV off. SOC (spin-orbit coupling) se possible hota hai.' },
            { type: 'Internal Conversion (IC)', kind: 'Non-Radiative', color: 'text-pink-400', time: '~10⁻¹² s', desc: 'Same spin multiplicity ke beech — S₂→S₁ ya S₁→S₀. Vibrational energy ko surrounding molecules ko transfer karta hai (heat form). Energy gap law se depend karta hai.' },
            { type: 'Intersystem Crossing (ISC)', kind: 'Non-Radiative', color: 'text-orange-400', time: '~10⁻¹⁰ s', desc: 'Different spin multiplicity — S₁→T₁. Spin-orbit coupling se possible. Heavy atoms (Br, I) present hone pe ISC fast hota hai (heavy atom effect).' },
          ].map((item, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs font-bold text-white">{item.type}</p>
                <span className={`text-[9px] px-1.5 py-0.5 rounded ${item.color} bg-white/5`}>{item.kind}</span>
              </div>
              <p className="text-[10px] text-slate-400 mb-1">Time: {item.time}</p>
              <p className="text-[10px] text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <JablonskiDiagram />

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Vibrational Relaxation (VR):</p>
          <p className="text-xs text-slate-300 mt-1">IC/ISC se pehle hamesha VR hota hai — excited vibrational levels se lowest vibrational level pe aata hai within same electronic state (~10⁻¹²s). Ye non-radiative hai. Fluorescence ALWAYS VR ke BAAD hota hai.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Charge Transfer Spectra (LMCT & MLCT)',
    pyqCount: 5,
    pyqYears: '2016, 2017, 2018, 2023, 2024',
    isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">Charge Transfer (CT) Spectra</b> mein transition hota hai metal aur ligand ke beech — electron ek se dusre pe transfer hota hai. Ye transitions d-d transitions se KHUD bahut different hain: CT transitions bahut INTENSE hote hain (ε ~ 10³-10⁴ L mol⁻¹ cm⁻¹ vs d-d ~ 10-100) aur usually UV region mein aate hain.
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
            <p className="text-emerald-400 font-semibold text-sm mb-1">LMCT (Ligand → Metal)</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Electron ligand se metal pe transfer hota hai. Ligand donor orbital se metal acceptor orbital pe. Common in: oxoanions (MnO₄⁻ — purple, CrO₄²⁻ — yellow), Fe³⁺-halide complexes. <b>Rule: jab metal high oxidation state mein ho aur ligand easily oxidizable ho.</b> Example: KMnO₄ ka deep purple color LMCT se aata hai (O²⁻ → Mn⁷⁺).
            </p>
          </div>
          <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
            <p className="text-amber-400 font-semibold text-sm mb-1">MLCT (Metal → Ligand)</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Electron metal se ligand pe transfer hota hai. Metal d-orbital se ligand π* orbital pe. Common in: low-spin d⁶ complexes like [Ru(bpy)₃]²⁺, [Fe(phen)₃]²⁺. <b>Rule: jab metal low oxidation state mein ho aur ligand mein empty π* orbitals hon.</b> Important in photocatalysis and solar cells.
            </p>
          </div>
        </div>

        <ChargeTransferDiagram />

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">CT vs d-d Transitions:</p>
          <p className="text-xs text-slate-300 mt-1">CT: very intense (ε ~ 10⁴), usually UV, Laporte allowed (no selection rule restriction). d-d: weak (ε ~ 10-100), usually visible, Laporte forbidden (partially allowed by vibronic coupling). KMnO₄ color = LMCT (not d-d! Mn⁷⁺ has d⁰ config, no d-d possible).</p>
        </div>
      </div>
    ),
  },
  {
    title: 'PES (Photoelectron Spectroscopy) & Koopman\'s Theorem',
    pyqCount: 5,
    pyqYears: '2016, 2018, 2021, 2022, 2023',
    isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">PES</b> mein high-energy photon (UV ya X-ray) se molecule se electron eject kiya jaata hai aur uski kinetic energy measure ki jaati hai. Kinetic energy se BINDING ENERGY calculate hoti hai jo directly molecular orbital energy se related hai.
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Koopman&apos;s Theorem</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            <b>BE = -εᵢ</b> (Binding Energy = negative of orbital energy). Ye theorem kehta hai ki ionization potential approximately orbital ke energy ke barabar hota hai (negative sign ke saath). Koopman&apos;s theorem mein assumption hai ki orbital relaxation nahi hota (frozen orbital approximation) aur electron correlation ignore hota hai — isliye exact nahi hota lekin good first approximation hai.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Types of PES</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            <b>UPS (UV-PES):</b> He I (21.22 eV) ya He II (40.8 eV) source. Valence electron ionization. Orbital energies directly measure karta hai. Molecular orbital ordering confirm karne ke liye use hota hai.
          </p>
          <p className="text-xs text-slate-300 leading-relaxed mt-2">
            <b>XPS (X-ray PES / ESCA):</b> Al Kα (1486.6 eV) ya Mg Kα (1253.6 eV) source. Core electron ionization. Elemental analysis, oxidation state determination, surface analysis ke liye use hota hai. XPS = ESCA (Electron Spectroscopy for Chemical Analysis).
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Applications</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            1. Molecular orbital energy levels measure karna. 2. Oxidation state determination (XPS binding energy shift se). 3. Surface composition analysis (surface sensitive, ~1-10 nm depth). 4. Elemental identification (har element ka unique binding energy). 5. Catalyst characterization.
          </p>
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Key Formula:</p>
          <p className="text-xs text-slate-300 mt-1 font-mono">E(kinetic) = hν - BE - φ (work function). So BE = hν - E(kinetic) - φ. Koopman: BE ≈ -εᵢ. For exam: Koopman&apos;s theorem statement + PES principle + UPS vs XPS difference — 10 marks complete.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'AES (Auger Electron Spectroscopy) — KLL Process',
    pyqCount: 6,
    pyqYears: '2016, 2018, 2021, 2022, 2023, 2024',
    isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">Auger Effect</b> (1925 - Pierre Auger) mein jab inner shell electron eject hota hai (photoionization ke baad), toh outer shell electron andar aata hai aur uski energy DOOSRE outer shell electron ko eject kar deti hai. Ye second ejected electron = <b>Auger electron</b>.
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">KLL Process (Step by Step)</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            <b>Step 1 (K):</b> X-ray photon aata hai aur K-shell (1s) se electron eject kar deta hai → K-shell mein vacancy/hole banta hai. <b>Step 2 (L→K):</b> L-shell (2s ya 2p) ka electron K-shell ki vacancy fill karne aata hai → energy release hoti hai (E_K - E_L). <b>Step 3 (L ejection):</b> Ye released energy DOOSRE L-shell electron ko absorb karke use bahar nikal deti hai → ye Auger electron hai. <b>Notation:</b> KLL means — initial hole in K, transition from L, ejected from L.
          </p>
        </div>

        <AugerProcess />

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">AES vs XPS</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            AES mein Auger electron KINETIC energy measure hoti hai (independent of X-ray source). XPS mein photoelectron ki kinetic energy measure hoti hai (depends on source). AES is more surface sensitive (~1-5 nm) than XPS. AES is better for light elements (Z &lt; 30). AES can do elemental mapping (scanning Auger microscopy).
          </p>
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Exam Tip:</p>
          <p className="text-xs text-slate-300 mt-1">KLL diagram ZAROOR draw karo — K shell, L shell, nucleus, electrons, transition arrows. Auger electron ki KE = E(K) - E(L₁) - E(L₂). AES applications: surface analysis, thin films, corrosion studies, semiconductor characterization.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'PAS (Photoacoustic Spectroscopy)',
    pyqCount: 3,
    pyqYears: '2016, 2021, 2023',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">PAS</b> mein sample modulated light absorb karta hai aur non-radiative deexcitation (heat) se pressure waves (sound/acoustic signal) generate hote hain. Ye acoustic signal microphone se detect hota hai. PAS ka advantage hai ki ye <b>scattered light insensitive</b> hai aur opaque/turbid samples bhi study ho sakti hain.
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Principle</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Modulated/chopped light sample pe fall hota hai. Sample absorb karta hai → excited state → non-radiative decay (IC) → heat generate. Heat se sample ke around gas expand/contract hota hai (periodic) → pressure wave = acoustic signal. Microphone ya piezoelectric detector se signal detect hota hai. Signal strength ∝ absorption coefficient.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Applications</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            <b>Chemical:</b> Solid samples jahan transmission/reflectance difficult ho (powders, gels, biological tissues). <b>Surface:</b> Surface absorption studies, thin film characterization, semiconductor surface states. <b>Advantage over UV-Vis:</b> Scattering nahi affect karta, opaque samples work karte hain, minimal sample preparation.
          </p>
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Why PAS is more effective than conventional absorption?</p>
          <p className="text-xs text-slate-300 mt-1">Conventional absorption = transmitted light measure karta hai (scattering = problem). PAS = absorbed energy DIRECTLY measure karta hai via heat → acoustic signal. Scattered light microphone ko affect nahi karta. Opaque, turbid, highly scattering samples ke liye PAS is superior.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Spectra of Transition Metal Complexes (d-d Transitions)',
    pyqCount: 2,
    pyqYears: '2021, 2024',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          Transition metal complexes ke electronic spectra mainly <b>d-d transitions</b> aur <b>charge transfer transitions</b> se aate hain. d-d transitions incomplete d-subshell ke beech hote hain — partially forbidden hain (Laporte + spin selection rules), isliye weak hote hain.
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Selection Rules for d-d Transitions</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            <b>Spin Selection Rule:</b> ΔS = 0 (spin multiplicity change nahi hona chahiye). Spin-allowed transitions zyada intense hote hain. <b>Laporte Selection Rule:</b> Δl = ±1 (d→d is LAPORTE FORBIDDEN for centrosymmetric complexes — g→g transition). But: vibronic coupling, asymmetric vibrations, orbital mixing se partially allowed ho jaata hai.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Factors Affecting d-d Spectra</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            1. <b>Oxidation state:</b> Higher OS → greater Δ₀ → blue shift. 2. <b>Ligand field strength:</b> Strong field ligands (CN⁻ is strongest, then NH₃, then H₂O, then F⁻ is weakest). 3. <b>Geometry:</b> Octahedral vs tetrahedral (Δt ≈ 4/9 Δ₀). 4. <b>Number of d-electrons:</b> d¹, d⁹ = 1 peak; d², d⁸ = 3 peaks; d⁵ (high spin) = weak/spin-forbidden. 5. <b>Nephelauxetic effect:</b> Covalent bonding se Racah parameter B decreases → peaks shift.
          </p>
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Common Exam Points:</p>
          <p className="text-xs text-slate-300 mt-1">[Ti(H₂O)₆]³⁺ (d¹) = 1 peak at ~20,000 cm⁻¹ (purple). [Cu(H₂O)₆]²⁺ (d⁹) = 1 broad peak (~12,500 cm⁻¹, blue → solution appears blue). [Co(H₂O)₆]²⁺ (d⁷, high spin) = multiple peaks (pink). [Mn(H₂O)₆]²⁺ (d⁵, high spin) = very weak (all spin-forbidden).</p>
        </div>
      </div>
    ),
  },
];

const unit3Topics: TopicData[] = [
  {
    title: 'Basic Principle of ESR (Electron Spin Resonance)',
    pyqCount: 6,
    pyqYears: '2016, 2018, 2021, 2022, 2023, 2024',
    isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">ESR (Electron Spin Resonance)</b>, also called <b>EPR (Electron Paramagnetic Resonance)</b>, unpaired electrons wale systems study karta hai. Jab unpaired electron ko external magnetic field (B₀) mein rakha jaata hai toh 2 energy levels mein split hota hai (Zeeman effect). Microwave radiation se resonance hota hai aur signal detect hota hai.
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Resonance Condition</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            <b className="text-amber-300 font-mono">ΔE = g·βₑ·B₀ = hν</b> — Jab microwave energy (hν) = energy gap between Zeeman levels, tab resonance hota hai. g = g-factor (free electron: 2.0023), βₑ = Bohr magneton (9.274 × 10⁻²⁴ J/T), B₀ = external magnetic field, ν = microwave frequency (typically ~9.5 GHz, X-band). Typical field: ~3400 Gauss (0.34 Tesla) for g=2.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">ESR vs NMR</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            ESR: unpaired ELECTRONS study karta hai, microwave frequency (GHz), Bohr magneton, sensitive technique. NMR: nuclear SPIN study karta hai, radio frequency (MHz), nuclear magneton (1836× smaller), less sensitive. ESR mein g-value, NMR mein chemical shift. Water/alcohol ESR mein USE NAHI kar sakte (dielectric loss + proton coupling broadening). DPPH (2,2-diphenyl-1-picrylhydrazyl) = standard calibration sample (g=2.0036).
          </p>
        </div>

        <ESRDiagram />

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Numerical Example:</p>
          <p className="text-xs text-slate-300 mt-1 font-mono">Q: ESR frequency at B=25000 G, g=2? → ν = gβₑB₀/h = 2 × 9.27×10⁻²⁴ × 2.5 × 10⁻²¹ / 6.626×10⁻³⁴ ≈ 70 GHz (Q-band). For X-band (ν=9.5 GHz): B₀ = hν/gβₑ = 6.626×10⁻³⁴ × 9.5×10⁹ / (2 × 9.27×10⁻²⁴) ≈ 3390 Gauss.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Zero Field Splitting & Kramer\'s Degeneracy',
    pyqCount: 3,
    pyqYears: '2021, 2022, 2024',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">Zero Field Splitting (ZFS)</b> bina external magnetic field ke bhi energy levels split ho jaate hain. Ye spin-spin interactions (dipolar) aur spin-orbit coupling ke karan hota hai. Sirf S ≥ 1 (2+ unpaired electrons) wale systems mein hota hai — single electron (S=½) mein ZFS NAHI hota.
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Kramer&apos;s Degeneracy</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            <b>Kramer&apos;s theorem:</b> Agar system mein <b>odd number of unpaired electrons</b> ho (half-integer spin: S = ½, 3/2, 5/2...), toh ZERO magnetic field mein har energy level <b>at least 2-fold degenerate</b> hota hai. Ye degeneracy ko sirf external magnetic field (jisko time reversal symmetry break kare) tod sakta hai. Example: S=½ (1 unpaired e⁻) → always 2-fold degenerate at B=0. S=1 (2 unpaired e⁻, integer) → ZFS can lift degeneracy even at B=0.
          </p>
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Key Points for Exam:</p>
          <p className="text-xs text-slate-300 mt-1">ZFS parameters: D (axial) and E (rhombic). S=½ → no ZFS (only g and A). S≥1 → ZFS possible. Kramer&apos;s degeneracy = half-integer spin systems mein B=0 pe at least 2-fold degeneracy. Transition metal ions with S≥1: Mn²⁺(S=5/2), Fe³⁺(S=5/2), Cr³⁺(S=3/2) show ZFS.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Hyperfine Splitting (Isotropic & Anisotropic)',
    pyqCount: 6,
    pyqYears: '2016, 2018, 2021, 2022, 2023, 2024',
    isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">Hyperfine splitting</b> unpaired electron aur magnetic nucleus ke beech interaction se aata hai. Electron apne aap me Zeeman split hota hai, aur agar paas mein koi magnetic nucleus hai (I ≠ 0) toh AUR split hota hai — ye hyperfine splitting kehlaata hai. ESR spectrum mein lines ka pattern se nuclear information milti hai.
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Isotropic Hyperfine Coupling (Solution Phase)</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Fast tumbling (solution) mein anisotropic part average out ho jaata hai. Sirf <b>Fermi contact interaction</b> bachta hai — ye electron density ke PROPORTIONAL hota hai nucleus pe. <b>Number of lines = 2nI + 1</b> (n = equivalent nuclei, I = nuclear spin). Example: 1 H (I=½) → 2 lines (doublet). 2 equivalent H (I=½) → 3 lines (1:2:1 triplet, like CH₂ radical). ¹⁴N (I=1) → 3 lines (1:1:1). Coupling constant &quot;a&quot; measured in Gauss (G) or mT.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Anisotropic Hyperfine Coupling (Solid State)</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Solid/crystal mein tumbling nahi hota → dipolar interaction + g-anisotropy DONO contribute karte hain. Hyperfine coupling TENSOR hota hai (A_iso + A_dipolar). Different crystal orientations pe different spectra milte hain. Single crystal ESR se tensor elements (Axx, Ayy, Azz) measure kiye jaate hain. g-value bhi anisotropic hota hai solid mein.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { radical: 'H atom (1 H, I=½)', lines: '2 (doublet)', a: '507 G' },
            { radical: 'CH₃ radical (3 H, I=½)', lines: '4 (1:3:3:1 quartet)', a: '~23 G' },
            { radical: 'Benzene radical anion (6 H)', lines: '7 (1:6:15:20:15:6:1)', a: '~3.75 G' },
            { radical: 'Cu²⁺ (I=3/2 for ⁶³Cu)', lines: '4 (1:1:1:1 quartet)', a: '~100-200 G' },
          ].map((item, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
              <p className="text-xs font-semibold text-white">{item.radical}</p>
              <p className="text-[10px] text-emerald-400 mt-0.5">Lines: {item.lines}</p>
              <p className="text-[10px] text-slate-400">a = {item.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Exam Tip:</p>
          <p className="text-xs text-slate-300 mt-1">BH₄ radical spectrum predict karna (2024 PYQ) — B has I=3/2 for ¹¹B → 4 lines from B, each further split by 4 H (I=½) → complex pattern. 2nI+1 formula ZAROOR yaad karo. Selection rule: Δm_I = 0.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Spin Hamiltonian',
    pyqCount: 3,
    pyqYears: '2022, 2023, 2024',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">Spin Hamiltonian</b> ESR spectrum ko mathematically describe karta hai. Ye ESR ke sabse important equation hai — ismein Zeeman interaction, hyperfine interaction, zero field splitting, aur nuclear Zeeman interaction SHAMIL hain.
        </p>

        <div className="p-4 rounded-xl bg-[#0f172a]/60 border border-emerald-500/30">
          <p className="text-center font-mono text-emerald-400 text-sm font-bold mb-3">
            H = gβₑB·S + S·A·I - gₙβₙB·I + S·D·S
          </p>
          <div className="space-y-2">
            {[
              { term: 'gβₑB·S', name: 'Electron Zeeman Term', desc: 'Electron spin ke interaction with external B field. g = g-tensor, βₑ = Bohr magneton, B = magnetic field, S = electron spin operator.' },
              { term: 'S·A·I', name: 'Hyperfine Interaction', desc: 'Electron-nuclear interaction. A = hyperfine coupling TENSOR. Isotropic (Fermi contact) + Anisotropic (dipolar).' },
              { term: '-gₙβₙB·I', name: 'Nuclear Zeeman Term', desc: 'Nuclear spin ke interaction with B field. Usually CHHOTA hota hai electron Zeeman se (βₙ << βₑ). Often neglected.' },
              { term: 'S·D·S', name: 'Zero Field Splitting', desc: 'Only for S ≥ 1. D = ZFS tensor. Dipolar + spin-orbit contributions. S=½ mein ye term NAHI hota.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-2 items-start">
                <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/15 text-amber-400 border border-amber-500/20">{item.term}</span>
                <div>
                  <p className="text-[10px] font-semibold text-white">{item.name}</p>
                  <p className="text-[10px] text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Important:</p>
          <p className="text-xs text-slate-300 mt-1">S=½ systems mein: H = gβₑB·S + S·A·I (no D term, no nuclear Zeeman usually). Solid state mein S aur A DONO tensors hain. Solution mein isotropic values use hote hain (scalar g and a). Spin Hamiltonian parameters se structural information milti hai.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'g-Value & Factors Affecting g-Value',
    pyqCount: 2,
    pyqYears: '2023, 2024',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">g-value</b> ESR spectrum ka sabse important parameter hai. Free electron ka g = 2.0023193 (exact). Real molecules mein g-value thoda different hota hai kyunki spin-orbit coupling aur orbital contributions mix ho jaate hain. g-value se electron ke environment ke baare mein information milti hai.
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Factors Affecting g-Value</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            <b>1. Spin-Orbit Coupling (SOC):</b> Main factor. Heavy atoms (high Z) mein zyada SOC → g-value zyada deviate from 2.0023. <b>2. Orbital Angular Momentum Contribution:</b> Pure spin (s-orbitals) → g ≈ 2.0023. Orbital contribution (p, d orbitals) → g shifts. <b>3. Molecular Environment:</b> Ligand field strength, geometry, oxidation state — sab affect karte hain. <b>4. Anisotropy:</b> Single crystal mein g tensor: gxx, gyy, gzz. Solution mein isotropic average: g_avg = (gx+gy+gz)/3. <b>5. Temperature:</b> Low temperature pe anisotropic effects clearly dikhte hain.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Typical g-values</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Free radical (organic) → g ≈ 2.0023 (very close to free electron). Cu²⁺ → g∥ ≈ 2.2-2.4, g⊥ ≈ 2.05-2.10 (axial symmetry, dx²-y² ground state). Fe³⁺ (high spin) → g ≈ 2.0 (S=5/2, half-filled, minimal SOC). Mn²⁺ → g ≈ 2.0 (S=5/2, isotropic, 6-line hyperfine from ⁵⁵Mn, I=5/2). VO²⁺ → g∥ ≈ 1.93, g⊥ ≈ 1.98.
          </p>
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Key Formula:</p>
          <p className="text-xs text-slate-300 mt-1 font-mono">g = hν / (βₑ · B_res). B_res = resonance field position. ν = microwave frequency. Agar g is greater than 2.0023 → SOC contribution significant (usually transition metal). Agar g ≈ 2.0023 → pure organic radical (minimal SOC).</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Spin Densities & McConnell Relationship',
    pyqCount: 5,
    pyqYears: '2016, 2021, 2022, 2023, 2024',
    isImportant: true,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          <b className="text-emerald-400">Spin Density (ρ)</b> batata hai ki unpaired electron ka probability kis position pe kitna hai. ESR hyperfine coupling constant (a) se spin density calculate ki ja sakti hai — ye McConnell Relationship se hota hai. Spin density information se molecular structure (radical character, delocalization) samajh aata hai.
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">McConnell Relationship</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            <b className="font-mono text-amber-300">a = Q · ρC</b> — where a = hyperfine coupling constant (for H atom at position C), Q = McConnell constant (approximately -23 to -28 Gauss for π-radicals, depends on system), ρC = spin density at the carbon atom. Ye relationship π-electron systems (like benzene radical anion, methyl radical) ke liye kaam karta hai. Agar a known hai toh ρC calculate kar sakte ho — isse pata chalta hai electron KITNA DELIBERIZED hai.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Example: Benzene Radical Anion (C₆H₆⁻)</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            ESR spectrum: 7 lines (6 equivalent H, I=½, 2(6)(½)+1 = 7). Intensity ratio: 1:6:15:20:15:6:1 (Pascal&apos;s triangle for n=6). Coupling constant a ≈ 3.75 G. Using McConnell: ρC = a/Q = 3.75/23 ≈ 0.163. For 6 equivalent positions: 6 × 0.163 ≈ 1.0 — confirms electron is EQUALLY delocalized over all 6 carbons.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Spin Density Calculation Methods</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            1. <b>From ESR:</b> McConnell relationship (π-systems). 2. <b>From Theory:</b> Hückel MO theory, DFT calculations. 3. <b>Spin population:</b> Σρ = 1 (total spin density = 1 for S=½). Positive spin density = same spin as unpaired electron. Negative spin density = opposite spin (spin polarization effect, common at positions adjacent to radical center).
          </p>
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">Exam Tip:</p>
          <p className="text-xs text-slate-300 mt-1">McConnell equation LIKHO + explain karo + benzene anion example DO. Q ≈ 23 G for C-H systems. ρC = a/Q. 7 lines ka 1:6:15:20:15:6:1 pattern bhi yaad karo — binomial coefficients for n=6.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'ESR Measurement Techniques & Applications',
    pyqCount: 3,
    pyqYears: '2021, 2022, 2023',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          ESR spectroscopy ki measurement technique aur applications bhi important hain exam ke liye. Basic setup mein microwave bridge, resonant cavity, electromagnet, aur detector hote hain.
        </p>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">ESR Spectrometer Components</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            <b>Klystron/MICROWAVE source:</b> Microwave generate karta hai (X-band: 8-12 GHz). <b>Waveguide:</b> Microwave ko cavity tak le jaata hai. <b>Resonant cavity:</b> Sample rakhi jaati hai — standing waves create hoti hain. TE₁₀₂ mode most common. <b>Electromagnet:</b> Magnetic field provide karta hai (0-10000 G range). Field SLOWLY sweep hota hai. <b>Detector:</b> Crystal detector microwave power detect karta hai. First derivative signal recorded hoti hai (field modulation technique).
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0f172a]/50 border border-[#334155]/40">
          <p className="text-emerald-400 font-semibold text-sm mb-1">Applications of ESR</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            <b>Biological:</b> Free radical biology — oxidative stress, ROS (reactive oxygen species) detection, spin trapping (DMPO, PBN trap adducts form karke short-lived radicals detect). Metalloproteins (Fe-S clusters, Cu proteins) study.
          </p>
          <p className="text-xs text-slate-300 leading-relaxed mt-2">
            <b>Inorganic Chemistry:</b> Transition metal complex characterization (oxidation state, geometry, ligand field). Free radicals study — organic radicals, inorganic radicals. Reaction mechanism study — radical intermediates detect. Radiation damage studies — irradiated materials mein trapped electrons/holes.
          </p>
          <p className="text-xs text-slate-300 leading-relaxed mt-2">
            <b>Material Science:</b> Defects in solids (F-centers, color centers in alkali halides). Conducting polymers, semiconductor characterization. Catalysis — surface radicals on catalyst surface. Dosimetry — radiation dose measurement (alanine dosimetry).
          </p>
        </div>

        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <p className="text-amber-300 font-semibold text-sm">DPPH Calibration:</p>
          <p className="text-xs text-slate-300 mt-1">DPPH (2,2-diphenyl-1-picrylhydrazyl) = stable free radical, g = 2.0036. Used to calibrate g-value and magnetic field. 5-line ESR spectrum (2 N atoms, I=1 each, equivalent → 2(2×1)+1 = 5 lines). Narrow linewidth, room temperature stable.</p>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <Navigation />
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <UnitSection unitNumber={1} unitTitle="Molecular Spectroscopy & Group Theory" topics={unit1Topics} />
        <UnitSection unitNumber={2} unitTitle="Electronic Spectroscopy" topics={unit2Topics} />
        <UnitSection unitNumber={3} unitTitle="ESR Spectroscopy" topics={unit3Topics} />
        <PYQBank />
        <QuickRevision />
      </div>
      <Footer />
    </main>
  );
}