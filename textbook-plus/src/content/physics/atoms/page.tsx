import type { ReactNode } from "react";

import { Callout } from "@/components/content/Callout";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FactCard } from "@/components/content/concept/FactCard";
import { TableCard } from "@/components/content/data/TableCard";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";

/* ------------------------------------------------------------------ */
/* Figure shell + SVG primitives (local to this chapter)              */
/* ------------------------------------------------------------------ */

const ALPHA = "#e11d48";
const NUCLEUS = "#f59e0b";
const LYMAN = "#7c3aed";
const BALMER = "#d946ef";
const PASCHEN = "#0ea5e9";
const STRUCT = "var(--foreground)";
const MUTED = "var(--muted-foreground)";

function Figure({ n, caption, children }: { n: string; caption: string; children: ReactNode }) {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">Fig. {n}</span>
      </div>
      <div className="px-2 py-3">{children}</div>
      <figcaption className="px-4 pb-3 text-center text-[0.72rem] leading-relaxed text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

function Lbl({
  x,
  y,
  children,
  anchor = "middle",
  color = MUTED,
  size = 10,
}: {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: "start" | "middle" | "end";
  color?: string;
  size?: number;
}) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={color === MUTED ? 500 : 700} fill={color}>
      {children}
    </text>
  );
}

function Ray({ d, color = ALPHA, dash, width = 1.6 }: { d: string; color?: string; dash?: string; width?: number }) {
  return <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash} />;
}

function Decay({ x, y1, y2, color }: { x: number; y1: number; y2: number; color: string }) {
  return (
    <>
      <line x1={x} y1={y1} x2={x} y2={y2 - 5} stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <polygon points={`${x},${y2} ${x - 3.4},${y2 - 8} ${x + 3.4},${y2 - 8}`} fill={color} />
    </>
  );
}

function circularWave(cx: number, cy: number, r: number, amp: number, loops: number) {
  let d = "";
  for (let i = 0; i <= 320; i += 1) {
    const t = (i / 320) * Math.PI * 2;
    const rr = r + amp * Math.sin(loops * t);
    d += `${i === 0 ? "M" : "L"} ${(cx + rr * Math.cos(t)).toFixed(2)} ${(cy + rr * Math.sin(t)).toFixed(2)} `;
  }
  return d.trim();
}

/* Fig. 12.2 — Geiger–Marsden apparatus */
function AlphaScatteringDiagram() {
  return (
    <Figure n="12.2" caption="Geiger–Marsden experiment. 5.5 MeV α-particles from a bismuth source are collimated by lead bricks, fall on a thin gold foil, and are counted by a rotatable zinc-sulphide screen with a microscope.">
      <svg viewBox="0 0 520 300" className="h-auto w-full" role="img" aria-label="Geiger-Marsden alpha-particle scattering apparatus">
        <rect x="24" y="133" width="46" height="34" rx="6" fill={ALPHA} fillOpacity="0.16" stroke={ALPHA} strokeWidth="1.6" />
        <Lbl x={47} y={126} color={ALPHA} size={9}>²¹⁴Bi</Lbl>
        <Lbl x={47} y={184} size={9}>source</Lbl>
        <rect x="94" y="83" width="24" height="56" rx="2" fill={STRUCT} fillOpacity="0.75" />
        <rect x="94" y="161" width="24" height="56" rx="2" fill={STRUCT} fillOpacity="0.75" />
        <Lbl x={106} y={72} size={9}>lead</Lbl>
        <Ray d="M 70 150 L 320 150" color={ALPHA} width={1.8} />
        <polygon points="330,150 314,144 314,156" fill={ALPHA} />
        <Lbl x={196} y={140} color={ALPHA} size={9}>narrow α beam</Lbl>
        <line x1="330" y1="45" x2="330" y2="255" stroke={NUCLEUS} strokeWidth="3" />
        <Lbl x={330} y={274} color={NUCLEUS} size={9}>gold foil (2.1 × 10⁻⁷ m)</Lbl>
        <Ray d="M 330 150 L 468 150" color={ALPHA} width={1.1} dash="4 4" />
        <Ray d="M 330 150 L 448 95" color={ALPHA} width={1.1} />
        <Ray d="M 330 150 L 448 205" color={ALPHA} width={1.1} dash="4 4" />
        <Ray d="M 330 150 L 414 50" color={ALPHA} width={1.1} />
        <Ray d="M 330 150 L 330 20" color={ALPHA} width={1.1} />
        <Ray d="M 330 150 L 246 50" color={ALPHA} width={1.1} />
        <path d="M 470 150 A 140 140 0 0 0 240 43" fill="none" stroke={MUTED} strokeWidth="1.2" strokeDasharray="5 5" strokeOpacity="0.8" />
        <rect x="441" y="84" width="14" height="22" rx="2" fill={STRUCT} fillOpacity="0.18" stroke={STRUCT} strokeWidth="1.2" />
        <line x1="455" y1="95" x2="486" y2="80" stroke={STRUCT} strokeWidth="1.4" />
        <circle cx="491" cy="77" r="5" fill="none" stroke={STRUCT} strokeWidth="1.3" />
        <Lbl x={330} y={24} size={9}>large θ</Lbl>
        <Lbl x={500} y={236} anchor="end" size={9}>rotatable ZnS screen + microscope</Lbl>
      </svg>
    </Figure>
  );
}

/* Fig. 12.3 — scattering data against Rutherford's prediction */
function ScatteringDataDiagram() {
  const points = [
    [74, 44], [92, 58], [112, 82], [134, 108], [158, 138], [184, 160],
    [214, 176], [252, 187], [300, 193], [364, 197], [432, 199],
  ];
  const curve = points.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
  return (
    <Figure n="12.3" caption="Geiger and Marsden's data (dots) for the number of α-particles scattered at each angle. The solid curve is Rutherford's nuclear-model prediction — the two agree over the whole range.">
      <svg viewBox="0 0 500 250" className="h-auto w-full" role="img" aria-label="Number of alpha particles against scattering angle">
        <line x1="62" y1="205" x2="466" y2="205" stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="472,205 460,200 460,210" fill={STRUCT} />
        <line x1="62" y1="205" x2="62" y2="34" stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="62,28 57,40 67,40" fill={STRUCT} />
        <Lbl x={470} y={228} anchor="end" size={9}>scattering angle θ (degrees)</Lbl>
        <Lbl x={66} y={28} anchor="start" size={9}>number of α-particles (log scale)</Lbl>
        <Ray d={curve} color={ALPHA} width={2} />
        {points.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x + 2} cy={y - 5} r="2.6" fill={STRUCT} />
        ))}
        <Lbl x={110} y={196} size={9}>θ &lt; 1° — most particles</Lbl>
        <Lbl x={300} y={150} size={9}>≈ 1 in 8000 beyond 90°</Lbl>
        <Lbl x={90} y={222} size={9}>0</Lbl>
        <Lbl x={270} y={222} size={9}>90</Lbl>
        <Lbl x={430} y={222} size={9}>180</Lbl>
      </svg>
    </Figure>
  );
}

/* Fig. 12.4 — impact parameter and trajectories */
function AlphaTrajectoryDiagram() {
  return (
    <Figure n="12.4" caption="Trajectories of α-particles in the Coulomb field of one nucleus. The impact parameter b fixes the deflection: b = 0 rebounds the particle (θ ≈ π), a large b lets it pass almost undeviated (θ ≈ 0).">
      <svg viewBox="0 0 520 230" className="h-auto w-full" role="img" aria-label="Alpha particle trajectories and impact parameter">
        <circle cx="300" cy="130" r="6" fill={NUCLEUS} />
        <Lbl x={314} y={152} anchor="start" color={NUCLEUS} size={9}>nucleus (+Ze)</Lbl>
        <Ray d="M 45 132 L 286 132" color={ALPHA} width={1.5} dash="5 4" />
        <Ray d="M 286 126 L 70 126" color={ALPHA} width={1.5} />
        <polygon points="58,126 72,121 72,131" fill={ALPHA} />
        <Ray d="M 45 118 L 210 118 C 292 118 318 96 266 33" color={ALPHA} width={1.7} />
        <polygon points="263,26 259,40 270,35" fill={ALPHA} />
        <Ray d="M 45 100 L 240 100 C 342 100 372 76 412 44" color={ALPHA} width={1.4} />
        <polygon points="417,39 406,41 413,49" fill={ALPHA} />
        <Ray d="M 45 78 L 250 78 C 370 78 412 74 468 72" color={ALPHA} width={1.2} />
        <polygon points="476,72 464,67 464,77" fill={ALPHA} />
        <Ray d="M 300 130 L 300 118" color={NUCLEUS} width={1.2} dash="3 3" />
        <Lbl x={308} y={122} anchor="start" color={NUCLEUS} size={9}>b</Lbl>
        <Ray d="M 236 118 A 18 18 0 0 1 254 112" color={MUTED} width={1.1} />
        <Lbl x={256} y={110} anchor="start" size={9}>θ</Lbl>
        <Lbl x={150} y={148} size={9}>head-on: b = 0, θ ≈ π</Lbl>
        <Lbl x={470} y={60} anchor="end" size={9}>large b: θ ≈ 0</Lbl>
        <Lbl x={60} y={66} anchor="start" size={9}>incoming α-particles</Lbl>
      </svg>
    </Figure>
  );
}

/* Fig. 12.7 — energy levels and the spectral series */
const LEVELS = [
  { y: 215, label: "n = 1", energy: "−13.6 eV" },
  { y: 140, label: "n = 2", energy: "−3.40 eV" },
  { y: 110, label: "n = 3", energy: "−1.51 eV" },
  { y: 94, label: "n = 4", energy: "−0.85 eV" },
  { y: 84, label: "n = 5", energy: "−0.54 eV" },
  { y: 62, label: "n = ∞", energy: "0 eV" },
];

function EnergyLevelDiagram() {
  return (
    <Figure n="12.7" caption="Energy level diagram of hydrogen from Eq. (12.10). Downward arrows are emitted photons: Lyman ends on n = 1, Balmer on n = 2, Paschen on n = 3. The levels crowd together and reach 0 eV at n = ∞.">
      <svg viewBox="0 0 520 270" className="h-auto w-full" role="img" aria-label="Hydrogen energy levels with Lyman, Balmer and Paschen transitions">
        {LEVELS.map((level) => (
          <g key={level.label}>
            <line x1="100" y1={level.y} x2="440" y2={level.y} stroke={STRUCT} strokeWidth={level.label === "n = 1" ? 2.4 : 1.4} />
            <Lbl x={92} y={level.y + 3.5} anchor="end" size={9}>{level.label}</Lbl>
            <Lbl x={448} y={level.y + 3.5} anchor="start" size={9}>{level.energy}</Lbl>
          </g>
        ))}
        <Lbl x={500} y={44} anchor="end" size={9}>continuum above 0 eV</Lbl>
        <Decay x={140} y1={140} y2={215} color={LYMAN} />
        <Decay x={152} y1={110} y2={215} color={LYMAN} />
        <Decay x={164} y1={94} y2={215} color={LYMAN} />
        <Decay x={250} y1={110} y2={140} color={BALMER} />
        <Decay x={262} y1={94} y2={140} color={BALMER} />
        <Decay x={274} y1={84} y2={140} color={BALMER} />
        <Decay x={340} y1={94} y2={110} color={PASCHEN} />
        <Decay x={352} y1={84} y2={110} color={PASCHEN} />
        <Lbl x={152} y={240} color={LYMAN} size={9}>Lyman — UV</Lbl>
        <Lbl x={262} y={240} color={BALMER} size={9}>Balmer — visible</Lbl>
        <Lbl x={346} y={240} color={PASCHEN} size={9}>Paschen — IR</Lbl>
        <Lbl x={262} y={256} size={9}>each arrow carries one photon of energy hν = Eᵢ − E_f</Lbl>
      </svg>
    </Figure>
  );
}

/* Fig. 12.5 — visible lines of hydrogen */
function HydrogenSpectrumDiagram() {
  const lines = [
    { nm: 656, name: "Hα", tone: "#dc2626" },
    { nm: 486, name: "Hβ", tone: "#0ea5e9" },
    { nm: 434, name: "Hγ", tone: "#4f46e5" },
    { nm: 410, name: "Hδ", tone: "#7c3aed" },
  ];
  const x = (nm: number) => 60 + ((nm - 400) / 300) * 400;
  return (
    <Figure n="12.5" caption="Emission lines of atomic hydrogen in the visible region. The four strong lines of the Balmer series lie at 656 nm, 486 nm, 434 nm and 410 nm — a pattern fixed for the element and identical in every hydrogen discharge tube.">
      <svg viewBox="0 0 500 200" className="h-auto w-full" role="img" aria-label="Visible emission lines of hydrogen">
        <defs>
          <linearGradient id="visibleBand" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="28%" stopColor="#2563eb" />
            <stop offset="52%" stopColor="#10b981" />
            <stop offset="76%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
        <rect x="60" y="86" width="400" height="38" fill="url(#visibleBand)" fillOpacity="0.55" stroke={STRUCT} strokeWidth="1" strokeOpacity="0.4" />
        {lines.map((line) => (
          <g key={line.name}>
            <line x1={x(line.nm)} y1="78" x2={x(line.nm)} y2="132" stroke={line.tone} strokeWidth="3" />
            <Lbl x={x(line.nm)} y={68} color={line.tone}>{line.name}</Lbl>
            <Lbl x={x(line.nm)} y={150} color={line.tone} size={9}>{line.nm} nm</Lbl>
          </g>
        ))}
        <Lbl x={60} y={172} size={9}>400 nm</Lbl>
        <Lbl x={460} y={172} size={9}>700 nm</Lbl>
        <Lbl x={260} y={186} size={9}>wavelength increasing</Lbl>
        <Lbl x={60} y={56} anchor="start" size={9}>increasing energy</Lbl>
      </svg>
    </Figure>
  );
}

/* Fig. 12.8 — de Broglie standing wave on an orbit */
function StandingWaveDiagram() {
  const wave = circularWave(230, 118, 70, 10, 4);
  return (
    <Figure n="12.8" caption="A standing particle wave on a circular orbit with four de Broglie wavelengths fitting the circumference: 2πrₙ = 4λ. Only such resonant waves close on themselves and can persist.">
      <svg viewBox="0 0 460 240" className="h-auto w-full" role="img" aria-label="Standing de Broglie wave on a circular orbit">
        <circle cx="230" cy="118" r="70" fill="none" stroke={MUTED} strokeWidth="1" strokeDasharray="4 5" strokeOpacity="0.7" />
        <Ray d={wave} color={LYMAN} width={2} />
        <circle cx="230" cy="118" r="7" fill={NUCLEUS} />
        <Lbl x={230} y={142} color={NUCLEUS} size={9}>nucleus</Lbl>
        <Lbl x={230} y={226}>2πrₙ = nλ,&#160;&#160;n = 1, 2, 3, …</Lbl>
        <Ray d="M 300 104 L 316 100" color={MUTED} width={1} />
        <Lbl x={324} y={100} anchor="start" size={9}>λ</Lbl>
      </svg>
    </Figure>
  );
}

export default function AtomsChapter() {
  return (
    <>
      <h2 id="h-12-1">12.1 Introduction</h2>
      <p>
        By the nineteenth century, enough evidence had accumulated in favour of the <strong>atomic hypothesis</strong> of matter. What was still missing was the arrangement of the charges inside the atom — its structure.
      </p>
      <ul>
        <li>In 1897, experiments on electric discharge through gases by J. J. Thomson showed that atoms of different elements contain negatively charged constituents — <strong>electrons</strong> — identical for all atoms.</li>
        <li>Atoms as a whole are electrically neutral, so an atom must also contain positive charge to neutralise the electrons.</li>
        <li>The open question was: how are the positive charge and the electrons arranged inside the atom?</li>
      </ul>
      <Callout type="important" title="Thomson's model of the atom (1898)">
        The positive charge of the atom is uniformly distributed throughout the volume of the atom and the negatively charged electrons are embedded in it like seeds in a watermelon. This model was picturesquely called <strong>plum pudding model</strong> of the atom.
      </Callout>
      <ul>
        <li>Subsequent studies on atoms showed that the distribution of the electrons and positive charges is very different from this model.</li>
        <li>The atom is not a continuous smear of positive charge with electrons planted in it.</li>
      </ul>

      <p>Two experimental facts about radiation carry the clue to atomic structure.</p>
      <ul>
        <li>Condensed matter (solids and liquids) and dense gases at all temperatures emit electromagnetic radiation in which a continuous distribution of several wavelengths is present, though with different intensities.</li>
        <li>That radiation is due to oscillations of atoms and molecules, governed by the interaction of each atom or molecule with its neighbours.</li>
        <li>In contrast, light emitted from rarefied gases heated in a flame, or excited electrically in a glow tube such as the familiar neon sign or mercury vapour light, has only certain discrete wavelengths.</li>
        <li>The spectrum of such a gas appears as a series of bright lines.</li>
        <li>In rarefied gases the average spacing between atoms is large, so the radiation can be considered due to individual atoms rather than to interactions between atoms or molecules.</li>
      </ul>
      <p>
        In the early nineteenth century it was also established that each element is associated with a characteristic spectrum of radiation: hydrogen always gives a set of lines with fixed relative position between the lines.
      </p>
      <ul>
        <li>This fact suggested an intimate relationship between the internal structure of an atom and the spectrum of radiation emitted by it.</li>
        <li>In 1885, Johann Jakob Balmer obtained a simple empirical formula which gave the wavelengths of a group of lines emitted by atomic hydrogen.</li>
        <li>Hydrogen is the simplest element known, so its spectrum is taken up in detail in this chapter.</li>
      </ul>
      <p>
        Ernst Rutherford, a former research student of J. J. Thomson, was engaged in experiments on α-particles emitted by some radioactive elements.
      </p>
      <ul>
        <li>In 1906 he proposed a classic experiment of scattering of these α-particles by atoms to investigate the atomic structure.</li>
        <li>The experiment was later performed around 1911 by Hans Geiger and Ernst Marsden — Marsden was a 20-year-old student who had not yet earned his bachelor&apos;s degree.</li>
        <li>The explanation of the results led to the birth of Rutherford&apos;s planetary model of the atom.</li>
      </ul>
      <Callout type="important" title="Rutherford's nuclear model">
        The entire positive charge and most of the mass of the atom is concentrated in a small volume called the <strong>nucleus</strong>, with electrons revolving around the nucleus just as planets revolve around the sun.
      </Callout>
      <ul>
        <li>Rutherford&apos;s nuclear model was a major step towards how we see the atom today.</li>
        <li>However, it could not explain why atoms emit light of only discrete wavelengths.</li>
        <li>How could an atom as simple as hydrogen, with a single electron and a single proton, emit a complex spectrum of specific wavelengths?</li>
        <li>In the classical picture the electron revolves round the nucleus much like a planet round the sun — and that picture runs into serious difficulties, as Section 12.4 shows.</li>
      </ul>
      <TableCard
        title="How the picture of the atom was built"
        headers={["Year", "Who", "Contribution"]}
        rows={[
          { cells: ["1885", "J. J. Balmer", "Empirical formula for the wavelengths of a group of lines of atomic hydrogen"] },
          { cells: ["1897", "J. J. Thomson", "Electric discharge experiments: every atom contains identical negatively charged electrons"] },
          { cells: ["1898", "J. J. Thomson", "Plum pudding model — positive charge spread through the whole volume, electrons embedded in it"] },
          { cells: ["1906", "Ernst Rutherford", "Proposes α-particle scattering by atoms as a probe of atomic structure"] },
          { cells: ["1911", "Geiger and Marsden", "Perform the α-scattering experiment; Rutherford reads the nucleus out of the data"] },
          { cells: ["1913", "Niels Bohr", "Three postulates: stationary orbits, quantised angular momentum, hν = Eᵢ − E_f"] },
          { cells: ["1923", "Louis de Broglie", "Explains the quantisation condition with matter waves"] },
          { cells: ["1927", "Davisson and Germer", "Verify the wave nature of electrons experimentally"] },
        ]}
        caption="Each row is a fix for a defect in the row above it — the chapter is a chain of models, not a list of facts."
      />

      <h2 id="h-12-2">12.2 Alpha-Particle Scattering and Rutherford&apos;s Nuclear Model of Atom</h2>
      <p>At the suggestion of Ernst Rutherford, in 1911, H. Geiger and E. Marsden performed some experiments. In one of them (Fig. 12.1) they directed a beam of α-particles at a thin metal foil made of gold.</p>
      <ul>
        <li>A beam of 5.5 MeV α-particles, emitted from a <Formula>{String.raw`{}^{214}_{83}\text{Bi}`}</Formula> radioactive source, was collimated into a narrow beam by passage through lead bricks.</li>
        <li>The beam fell on a thin foil of gold of thickness <Formula>{String.raw`2.1\times10^{-7}\ \text{m}`}</Formula>.</li>
        <li>The scattered α-particles were observed through a rotatable detector consisting of a zinc sulphide screen and a microscope.</li>
        <li>Scattered α-particles striking the screen produced brief light flashes, or <strong>scintillations</strong>, viewed through the microscope.</li>
        <li>The distribution of the number of scattered particles was studied as a function of the angle of scattering.</li>
      </ul>
      <AlphaScatteringDiagram />
      <TableCard
        title="What the detector counted"
        headers={["Observation", "How many", "What it means"]}
        rows={[
          { cells: ["Pass straight through the foil", "the great majority", "They suffer no collision — the atom is largely empty space"] },
          { cells: ["Scattered by more than 1°", "about 0.14% of the incident α-particles", "A close pass by a concentrated positive charge"] },
          { cells: ["Deflected by more than 90°", "about 1 in 8000", "A near head-on encounter with something small, massive and highly charged"] },
        ]}
        caption="Only a tiny tail of large deflections needs explaining — and that tail is what rules out the plum pudding."
      />
      <ScatteringDataDiagram />
      <Callout type="important" title="Rutherford's argument">
        To deflect the α-particle backwards, it must experience a large repulsive force. This force could be provided if the greater part of the mass of the atom and its positive charge were concentrated tightly at its centre. Then the incoming α-particle could get very close to the positive charge without penetrating it, and such a close encounter would result in a large deflection.
      </Callout>
      <p>This agreement supported the hypothesis of the nuclear atom — which is why Rutherford is credited with the discovery of the nucleus.</p>
      <ul>
        <li>In the nuclear model the entire positive charge and most of the mass of the atom are concentrated in the nucleus, with the electrons some distance away, moving in orbits about the nucleus just as the planets do around the sun.</li>
        <li>Rutherford&apos;s experiments suggested the size of the nucleus to be about <Formula>{String.raw`10^{-15}\ \text{m}`}</Formula> to <Formula>{String.raw`10^{-14}\ \text{m}`}</Formula>, while from kinetic theory the size of an atom was known to be about <Formula>{String.raw`10^{-10}\ \text{m}`}</Formula>.</li>
        <li>So the nucleus is 10,000 to 100,000 times smaller than the atom, and the electrons sit at that many nuclear radii from it.</li>
        <li><Highlight>Most of an atom is empty space</Highlight> — which is why most α-particles go right through a thin metal foil.</li>
        <li>When an α-particle happens to come near a nucleus, the intense electric field there scatters it through a large angle.</li>
        <li>The atomic electrons, being so light, do not appreciably affect the α-particles.</li>
      </ul>
      <p>The scattering data can be analysed using the nuclear model, under a short list of assumptions.</p>
      <ul>
        <li>The gold foil is very thin, so an α-particle suffers not more than one scattering during its passage; computing the trajectory for a single nucleus is enough.</li>
        <li>α-particles are nuclei of helium atoms: charge 2e and the mass of the helium atom.</li>
        <li>The charge of the gold nucleus is Ze, where Z is the atomic number; for gold, Z = 79.</li>
        <li>The gold nucleus is about 50 times heavier than an α-particle, so it is reasonable to assume it remains stationary throughout the scattering.</li>
        <li>The trajectory then follows from Newton&apos;s second law together with Coulomb&apos;s law for the electrostatic force of repulsion.</li>
      </ul>
      <FormulaBlock
        latex={String.raw`F=\frac{1}{4\pi\varepsilon_0}\frac{(2e)(Ze)}{r^{2}}`}
        label="Coulomb repulsion between α-particle and nucleus"
        tag="Eq. 12.1"
        important
      />
      <ul>
        <li><Formula>{String.raw`r`}</Formula> is the distance between the α-particle and the nucleus, and the force acts along the line joining them.</li>
        <li>The magnitude and direction of the force continuously change as the α-particle approaches the nucleus and recedes away from it.</li>
      </ul>
      <h3 id="h-12-2-1">12.2.1 Alpha-particle trajectory</h3>
      <p>The trajectory traced by an α-particle depends on the <strong>impact parameter</strong>, b, of the collision.</p>
      <Callout type="important" title="Impact parameter">
        The impact parameter is the perpendicular distance of the initial velocity vector of the α-particle from the centre of the nucleus.
      </Callout>
      <AlphaTrajectoryDiagram />
      <ul>
        <li>A given beam of α-particles has a distribution of impact parameters b, so the beam is scattered in various directions with different probabilities.</li>
        <li>In a beam, all particles have nearly the same kinetic energy.</li>
        <li>An α-particle close to the nucleus (small impact parameter) suffers large scattering.</li>
        <li>For a head-on collision the impact parameter is minimum and the α-particle rebounds back, <Formula>{String.raw`\theta\approx\pi`}</Formula>.</li>
        <li>For a large impact parameter the α-particle goes nearly undeviated and has a small deflection, <Formula>{String.raw`\theta\approx0`}</Formula>.</li>
        <li>Only a small fraction of the incident particles rebound back, so the number of α-particles undergoing head-on collision is small — which implies that the mass and positive charge of the atom are concentrated in a small volume.</li>
      </ul>
      <KeyPoint title="Why this experiment still matters">
        Rutherford scattering is a powerful way to determine an <Highlight>upper limit to the size of the nucleus</Highlight> — how close an α-particle can get before it is turned back bounds how far the nuclear charge can extend.
      </KeyPoint>

      <Expandable title="Example 12.1 — The atom as a scaled solar system" variant="example">
        <ProblemSolution.Problem>
          <p>
            In Rutherford&apos;s nuclear model of the atom, the nucleus (radius about <Formula>{String.raw`10^{-15}\ \text{m}`}</Formula>) is analogous to the sun, about which the electron moves in an orbit (radius about <Formula>{String.raw`10^{-10}\ \text{m}`}</Formula>) like the earth orbits around the sun. If the dimensions of the solar system had the same proportions as those of the atom, would the earth be closer to or farther away from the sun than actually it is? The radius of the earth&apos;s orbit is about <Formula>{String.raw`1.5\times10^{11}\ \text{m}`}</Formula>. The radius of sun is taken as <Formula>{String.raw`7\times10^{8}\ \text{m}`}</Formula>.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The ratio of the radius of the electron&apos;s orbit to the radius of the nucleus is</p>
          <FormulaBlock latex={String.raw`\frac{10^{-10}\ \text{m}}{10^{-15}\ \text{m}}=10^{5}`} />
          <p>that is, the radius of the electron&apos;s orbit is <Formula>{String.raw`10^{5}`}</Formula> times larger than the radius of the nucleus.</p>
          <p>If the radius of the earth&apos;s orbit around the sun were <Formula>{String.raw`10^{5}`}</Formula> times larger than the radius of the sun, that radius would be</p>
          <FormulaBlock latex={String.raw`10^{5}\times7\times10^{8}\ \text{m}=7\times10^{13}\ \text{m}`} />
          <p>This is more than 100 times greater than the actual orbital radius of the earth. Thus the earth would be much farther away from the sun. It implies that an atom contains a much greater fraction of empty space than our solar system does.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 12.2 — Distance of closest approach" variant="example">
        <ProblemSolution.Problem>
          <p>In a Geiger-Marsden experiment, what is the distance of closest approach to the nucleus of a 7.7 MeV α-particle before it comes momentarily to rest and reverses its direction?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Throughout the scattering process the total mechanical energy of the system consisting of an α-particle and a gold nucleus is conserved. The initial energy <Formula>{String.raw`E_i`}</Formula> is just the kinetic energy K of the incoming α-particle; the final energy <Formula>{String.raw`E_f`}</Formula> is just the electric potential energy U of the system, calculable from Eq. (12.1).</p>
          <p>Let d be the centre-to-centre distance between the α-particle and the gold nucleus when the α-particle is at its stopping point. Then conservation of energy <Formula>{String.raw`E_i=E_f`}</Formula> reads</p>
          <FormulaBlock latex={String.raw`K=\frac{1}{4\pi\varepsilon_0}\frac{(2e)(Ze)}{d}`} />
          <p>Thus the distance of closest approach d is given by</p>
          <FormulaBlock latex={String.raw`d=\frac{2Ze^{2}}{4\pi\varepsilon_0 K}`} label="Distance of closest approach" important />
          <p>The maximum kinetic energy found in α-particles of natural origin is 7.7 MeV, or <Formula>{String.raw`1.2\times10^{-12}\ \text{J}`}</Formula>. Since <Formula>{String.raw`1/4\pi\varepsilon_0=9.0\times10^{9}\ \text{N m}^{2}/\text{C}^{2}`}</Formula>, with <Formula>{String.raw`e=1.6\times10^{-19}\ \text{C}`}</Formula>, we have</p>
          <FormulaBlock latex={String.raw`d=\frac{(2)(9.0\times10^{9})(1.6\times10^{-19})^{2}Z}{1.2\times10^{-12}}=3.84\times10^{-16}Z\ \text{m}`} />
          <p>The atomic number of the foil material gold is Z = 79, so that</p>
          <FormulaBlock latex={String.raw`d(\text{Au})=3.0\times10^{-14}\ \text{m}=30\ \text{fm},\qquad 1\ \text{fm}=10^{-15}\ \text{m}`} />
          <p>
            The radius of the gold nucleus is therefore less than <Formula>{String.raw`3.0\times10^{-14}\ \text{m}`}</Formula>. This is not in very good agreement with the observed result, as the actual radius of the gold nucleus is 6 fm. The cause of the discrepancy is that the distance of closest approach is considerably larger than the sum of the radii of the gold nucleus and the α-particle: the α-particle reverses its motion without ever actually touching the gold nucleus.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-12-2-2">12.2.2 Electron orbits</h3>
      <ul>
        <li>The Rutherford nuclear model, which involves classical concepts, pictures the atom as an electrically neutral sphere with a very small, massive and positively charged nucleus at the centre, surrounded by revolving electrons in their respective dynamically stable orbits.</li>
        <li>The electrostatic force of attraction <Formula>{String.raw`F_e`}</Formula> between a revolving electron and the nucleus provides the requisite centripetal force <Formula>{String.raw`F_c`}</Formula> that keeps it in orbit.</li>
      </ul>
      <FormulaBlock latex={String.raw`F_e=F_c\ \ \Longrightarrow\ \ \frac{1}{4\pi\varepsilon_0}\frac{e^{2}}{r^{2}}=\frac{mv^{2}}{r}`} tag="Eq. 12.2" />
      <p>Thus the relation between the orbit radius and the electron velocity is</p>
      <FormulaBlock latex={String.raw`r=\frac{e^{2}}{4\pi\varepsilon_0 mv^{2}}`} tag="Eq. 12.3" important />
      <p>The kinetic energy K and the electrostatic potential energy U of the electron in the hydrogen atom are</p>
      <FormulaBlock latex={String.raw`K=\frac{1}{2}mv^{2}=\frac{e^{2}}{8\pi\varepsilon_0 r},\qquad U=-\frac{e^{2}}{4\pi\varepsilon_0 r}`} label="Kinetic and potential energy" />
      <ul>
        <li>The negative sign in U signifies that the electrostatic force is in the −r direction.</li>
      </ul>
      <p>Thus the total energy E of the electron in a hydrogen atom is</p>
      <FormulaBlock
        latex={String.raw`E=K+U=\frac{e^{2}}{8\pi\varepsilon_0 r}-\frac{e^{2}}{4\pi\varepsilon_0 r}=-\frac{e^{2}}{8\pi\varepsilon_0 r}`}
        tag="Eq. 12.4"
        important
      />
      <ul>
        <li>The total energy of the electron is negative, which implies that the electron is bound to the nucleus.</li>
        <li>If E were positive, an electron would not follow a closed orbit around the nucleus.</li>
      </ul>

      <Expandable title="Example 12.3 — Radius and speed from the binding energy" variant="example">
        <ProblemSolution.Problem>
          <p>It is found experimentally that 13.6 eV energy is required to separate a hydrogen atom into a proton and an electron. Compute the orbital radius and the velocity of the electron in a hydrogen atom.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Total energy of the electron in the hydrogen atom is <Formula>{String.raw`-13.6\ \text{eV}=-13.6\times1.6\times10^{-19}\ \text{J}=-2.2\times10^{-18}\ \text{J}`}</Formula>. Thus from Eq. (12.4),
          </p>
          <FormulaBlock latex={String.raw`E=-\frac{e^{2}}{8\pi\varepsilon_0 r}=-2.2\times10^{-18}\ \text{J}`} />
          <p>This gives the orbital radius</p>
          <FormulaBlock latex={String.raw`r=-\frac{e^{2}}{8\pi\varepsilon_0 E}=-\frac{(9\times10^{9})(1.6\times10^{-19})^{2}}{(2)(-2.2\times10^{-18})}=5.3\times10^{-11}\ \text{m}`} />
          <p>The velocity of the revolving electron can be computed from Eq. (12.3) with <Formula>{String.raw`m=9.1\times10^{-31}\ \text{kg}`}</Formula>,</p>
          <FormulaBlock latex={String.raw`v=\frac{e^{2}}{4\pi\varepsilon_0 mr}=2.2\times10^{6}\ \text{m/s}`} />
          <p>So the electron circles the proton at <Formula>{String.raw`5.3\times10^{-11}\ \text{m}`}</Formula> with a speed of <Formula>{String.raw`2.2\times10^{6}\ \text{m s}^{-1}`}</Formula>.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <h2 id="h-12-3">12.3 Atomic Spectra</h2>
      <p>As mentioned in Section 12.1, each element has a characteristic spectrum of radiation which it emits.</p>
      <Callout type="important" title="Emission line spectrum">
        When an atomic gas or vapour is excited at low pressure, usually by passing an electric current through it, the emitted radiation has a spectrum which contains certain specific wavelengths only. A spectrum of this kind is termed as <strong>emission line spectrum</strong> and it consists of bright lines on a dark background.
      </Callout>
      <HydrogenSpectrumDiagram />
      <ul>
        <li>Study of emission line spectra of a material can therefore serve as a type of &ldquo;fingerprint&rdquo; for identification of the gas.</li>
        <li>When white light passes through a gas and we analyse the transmitted light using a spectrometer, we find some dark lines in the spectrum.</li>
        <li>These dark lines correspond precisely to those wavelengths which were found in the emission line spectrum of the gas.</li>
      </ul>
      <Callout type="important" title="Absorption spectrum">
        The spectrum with these dark lines is called the <strong>absorption spectrum</strong> of the material of the gas.
      </Callout>
      <FactCard icon="≡" title="Line spectrum" definition="A spectrum consisting of a set of isolated parallel lines. It carries direct information about the energy levels inside the atom, and it is why a spectroscope can identify an element without touching it." />
      <KeyPoint title="Emission and absorption mirror each other">
        An atom absorbs only the wavelengths it can also emit, because both are set by the same pair of energy levels. Bright lines on dark (emission) and dark lines on bright (absorption) fall at identical positions.
      </KeyPoint>

      <h2 id="h-12-4">12.4 Bohr Model of the Hydrogen Atom</h2>
      <p>
        The model of the atom proposed by Rutherford assumes that the atom, consisting of a central nucleus and a revolving electron, is stable much like the sun-planet system which the model imitates. There are, however, some fundamental differences between the two situations.
      </p>
      <ul>
        <li>While the planetary system is held by gravitational force, the nucleus-electron system, being charged objects, interacts by Coulomb&apos;s law of force.</li>
        <li>An object which moves in a circle is constantly accelerated — the acceleration being centripetal in nature.</li>
        <li>According to classical electromagnetic theory, an accelerating charged particle emits radiation in the form of electromagnetic waves.</li>
        <li>The energy of the accelerating electron should therefore continuously decrease, so the electron would spiral inward and eventually fall into the nucleus — such an atom cannot be stable.</li>
        <li>Further, the frequency of the emitted waves equals the frequency of revolution; as the electron spirals inwards its angular velocity, and hence the frequency of the light, would change continuously.</li>
        <li>Thus it would emit a <Highlight>continuous spectrum</Highlight>, in contradiction to the line spectrum actually observed.</li>
      </ul>
      <p>Clearly the Rutherford model tells only part of the story, implying that the classical ideas are not sufficient to explain the atomic structure.</p>
      <Comparison
        columns={[
          {
            title: "Rutherford — classical atom",
            children: (
              <ul>
                <li>Electrons revolve in orbits, held by Coulomb attraction.</li>
                <li>An accelerating charge must radiate, so the electron loses energy.</li>
                <li>The orbit shrinks and the electron spirals into the nucleus.</li>
                <li>The frequency of revolution drifts, so the spectrum must be continuous.</li>
                <li>Cannot explain stability, nor the observed line spectra.</li>
              </ul>
            ),
          },
          {
            title: "Bohr — quantised atom",
            children: (
              <ul>
                <li>Electrons revolve only in certain stable orbits, without radiating.</li>
                <li>Angular momentum is quantised, <Formula>{String.raw`L=nh/2\pi`}</Formula>.</li>
                <li>Radiation appears only when the electron jumps between orbits.</li>
                <li>Each jump carries one photon, <Formula>{String.raw`h\nu=E_i-E_f`}</Formula>.</li>
                <li>Gives a discrete line spectrum and a stable ground state.</li>
              </ul>
            ),
          },
        ]}
      />
      <ul>
        <li>Bohr studied in Rutherford&apos;s laboratory for several months in 1912 and was convinced about the validity of the nuclear model.</li>
        <li>Faced with the dilemma above, Bohr concluded in 1913 that, in spite of the success of electromagnetic theory in explaining large-scale phenomena, it could not be applied to the processes at the atomic scale.</li>
        <li>A fairly radical departure from the established principles of classical mechanics and electromagnetism was needed.</li>
        <li>Bohr combined classical and early quantum concepts and gave his theory in the form of three postulates.</li>
      </ul>

      <Expandable title="Example 12.4 — Frequency of revolution, classically" variant="example">
        <ProblemSolution.Problem>
          <p>According to the classical electromagnetic theory, calculate the initial frequency of the light emitted by the electron revolving around a proton in hydrogen atom.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            From Example 12.3 the velocity of the electron moving around a proton in a hydrogen atom in an orbit of radius <Formula>{String.raw`5.3\times10^{-11}\ \text{m}`}</Formula> is <Formula>{String.raw`2.2\times10^{6}\ \text{m s}^{-1}`}</Formula>. Thus the frequency of the electron moving around the proton is
          </p>
          <FormulaBlock latex={String.raw`\nu=\frac{v}{2\pi r}=\frac{2.2\times10^{6}}{2\pi(5.3\times10^{-11})}\approx6.6\times10^{15}\ \text{Hz}`} />
          <p>According to the classical electromagnetic theory, the frequency of the electromagnetic waves emitted by the revolving electron is equal to the frequency of its revolution around the nucleus. Thus the initial frequency of the light emitted is <Formula>{String.raw`6.6\times10^{15}\ \text{Hz}`}</Formula>.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-12-4-1">12.4.1 The three postulates</h3>
      <Callout type="important" title="Bohr's postulates (1913)">
        <ol className="list-decimal space-y-2 ps-5">
          <li>
            An electron in an atom could revolve in certain stable orbits without the emission of radiant energy, contrary to the predictions of electromagnetic theory. According to this postulate, each atom has certain definite stable states in which it can exist, and each possible state has definite total energy. These are called the <strong>stationary states</strong> of the atom.
          </li>
          <li>
            The electron revolves around the nucleus only in those orbits for which the angular momentum is some integral multiple of <Formula>{String.raw`h/2\pi`}</Formula>, where h is the Planck&apos;s constant (<Formula>{String.raw`6.6\times10^{-34}\ \text{J s}`}</Formula>). Thus the angular momentum L of the orbiting electron is quantised.
          </li>
          <li>
            An electron might make a transition from one of its specified non-radiating orbits to another of lower energy. When it does so, a photon is emitted having energy equal to the energy difference between the initial and final states.
          </li>
        </ol>
      </Callout>
      <FormulaBlock latex={String.raw`L=\frac{nh}{2\pi},\qquad n=1,2,3,\dots`} label="Second postulate — quantised angular momentum" tag="Eq. 12.5" important />
      <FormulaBlock latex={String.raw`h\nu=E_i-E_f`} label="Third postulate — one photon per transition" tag="Eq. 12.6" important />
      <ul>
        <li><Formula>{String.raw`E_i`}</Formula> and <Formula>{String.raw`E_f`}</Formula> are the energies of the initial and final states, with <Formula>{String.raw`E_i>E_f`}</Formula>.</li>
        <li>n is an integer called the <strong>principal quantum number</strong>; it labels the stationary states in increasing order of energy.</li>
        <li>Equation (12.4) gives the energies of the different states, but it needs the radius r of the orbit — so Bohr&apos;s second postulate is used to find r.</li>
      </ul>
      <h3 id="h-12-4-2">12.4.2 Radius of the nth orbit</h3>
      <p>Two relations are in hand: the classical circular-orbit condition Eq. (12.3) and the quantum condition Eq. (12.5). Solving them together gives the allowed radii.</p>
      <Stepper
        steps={[
          { label: "Start from the circular-orbit condition", description: <Formula>{String.raw`r=\frac{e^{2}}{4\pi\varepsilon_0 mv^{2}}`}</Formula> },
          {
            label: "Write the speed in terms of the quantum number",
            description: <>From <Formula>{String.raw`mvr=nh/2\pi`}</Formula>, the speed in the nth orbit is <Formula>{String.raw`v=\frac{nh}{2\pi mr}`}</Formula>.</>,
          },
          {
            label: "Substitute that speed into the radius relation",
            description: <><Formula>{String.raw`r=\frac{e^{2}}{4\pi\varepsilon_0 m}\cdot\frac{4\pi^{2}m^{2}r^{2}}{n^{2}h^{2}}`}</Formula> leaves <Formula>{String.raw`1=\frac{\pi me^{2}r}{\varepsilon_0 n^{2}h^{2}}`}</Formula> after one factor of r cancels.</>,
          },
          { label: "Solve for rₙ", description: <Formula>{String.raw`r_n=\frac{n^{2}h^{2}\varepsilon_0}{\pi me^{2}}=n^{2}a_0`}</Formula> },
        ]}
      />
      <FormulaBlock
        latex={String.raw`r_n=\frac{n^{2}h^{2}\varepsilon_0}{\pi me^{2}},\qquad a_0=\frac{h^{2}\varepsilon_0}{\pi me^{2}}=5.3\times10^{-11}\ \text{m}`}
        label="Radius of the nth Bohr orbit"
        tag="Eq. 12.7"
        important
      />
      <ul>
        <li>The radius grows as <Formula>{String.raw`n^{2}`}</Formula>: the second orbit is four times, the third nine times the Bohr radius.</li>
        <li><Formula>{String.raw`a_0`}</Formula> is the <strong>Bohr radius</strong>, the radius of the innermost allowed orbit of hydrogen.</li>
        <li>Substituting <Formula>{String.raw`v=nh/2\pi mr_n`}</Formula> gives the speed in the nth orbit as well.</li>
      </ul>
      <FormulaBlock
        latex={String.raw`v_n=\frac{e^{2}}{2\varepsilon_0 nh}=\frac{2.2\times10^{6}}{n}\ \text{m s}^{-1}`}
        label="Speed of the electron in the nth orbit"
        important
      />
      <MetricCard label="Bohr radius a₀" value="5.3 × 10⁻¹¹" unit="m" description="Radius of the n = 1 orbit of hydrogen, 0.53 Å. Every other orbit is n² times this." />
      <MistakeCard mistake="Reading the principal quantum number as a ranking of binding strength — assuming the electron in n = 2 is more tightly bound because 2 is &ldquo;bigger&rdquo;."
        correction="Radius grows with n² and energy becomes less negative with n. The state of lowest energy, and the most tightly bound electron, is n = 1."
        example="r₂ = 4a₀ = 2.12 × 10⁻¹⁰ m and E₂ = −3.40 eV — farther out, and easier to remove than at n = 1." />

      <h3 id="h-12-4-3">12.4.3 Energy of the nth orbit</h3>
      <p>The total energy of the electron in the stationary states is obtained by substituting the orbital radius into Eq. (12.4).</p>
      <Stepper
        steps={[
          { label: "Take the classical total energy", description: <Formula>{String.raw`E=-\frac{e^{2}}{8\pi\varepsilon_0 r}`}</Formula> },
          {
            label: "Insert rₙ",
            description: <Formula>{String.raw`E_n=-\frac{e^{2}}{8\pi\varepsilon_0}\cdot\frac{\pi me^{2}}{n^{2}h^{2}\varepsilon_0}=-\frac{me^{4}}{8\varepsilon_0^{2}n^{2}h^{2}}`}</Formula>,
          },
          { label: "Put in the numbers", description: <Formula>{String.raw`E_n=-\frac{2.18\times10^{-18}}{n^{2}}\ \text{J}`}</Formula> },
          {
            label: "Convert to electron volts",
            description: <>Using <Formula>{String.raw`1\ \text{eV}=1.6\times10^{-19}\ \text{J}`}</Formula>, <Formula>{String.raw`E_n=-\frac{13.6}{n^{2}}\ \text{eV}`}</Formula>.</>,
          },
        ]}
      />
      <FormulaBlock
        latex={String.raw`E_n=-\frac{me^{4}}{8\varepsilon_0^{2}n^{2}h^{2}}=-\frac{2.18\times10^{-18}}{n^{2}}\ \text{J}`}
        label="Energy of the nth stationary state"
        tag="Eq. 12.8 – 12.9"
        important
      />
      <FormulaBlock latex={String.raw`E_n=-\frac{13.6}{n^{2}}\ \text{eV}`} label="Energy in electron volts" tag="Eq. 12.10" important />
      <ul>
        <li>The negative sign of the total energy means the electron is bound with the nucleus; energy is required to remove it to a distance infinitely far away.</li>
        <li>The energy is negative for every n and approaches zero as n grows.</li>
      </ul>

      <h3 id="h-12-4-4">12.4.4 Energy levels</h3>
      <ul>
        <li>The energy of an atom is the least (largest negative value) when its electron revolves in the orbit closest to the nucleus, i.e. the one for which n = 1.</li>
        <li>For n = 2, 3, … the absolute value of E is smaller, so the energy is progressively larger in the outer orbits.</li>
        <li>The lowest state, called the <strong>ground state</strong>, has the electron in the orbit of smallest radius, the Bohr radius <Formula>{String.raw`a_0`}</Formula>, with energy <Formula>{String.raw`E_1=-13.6\ \text{eV}`}</Formula>.</li>
        <li>The minimum energy required to free the electron from the ground state, 13.6 eV, is the <strong>ionisation energy</strong> of the hydrogen atom; this prediction agrees excellently with the experimental value.</li>
        <li>At room temperature most hydrogen atoms are in the ground state. Energy supplied by electron collisions may raise the electron to a higher state, and the atom is then in an <strong>excited state</strong>.</li>
        <li><Formula>{String.raw`E_2=-3.40\ \text{eV}`}</Formula>, so it costs <Formula>{String.raw`E_2-E_1=10.2\ \text{eV}`}</Formula> to reach the first excited state.</li>
        <li><Formula>{String.raw`E_3=-1.51\ \text{eV}`}</Formula>, so it costs <Formula>{String.raw`E_3-E_1=12.09\ \text{eV}`}</Formula> to reach the second excited state (n = 3), and so on.</li>
        <li>As the excitation of the atom increases, the value of minimum energy required to free the electron from the excited atom decreases.</li>
        <li>The highest energy state corresponds to <Formula>{String.raw`n=\infty`}</Formula> and has an energy of 0 eV — the atom when the electron is completely removed (<Formula>{String.raw`r=\infty`}</Formula>) and at rest.</li>
        <li>The energies of the excited states come closer and closer together as n increases.</li>
      </ul>
      <MetricCard label="Ionisation energy of hydrogen" value="13.6" unit="eV" description="Energy needed to take the electron from the ground state (n = 1) to rest at infinity. Bohr's value agrees with experiment." />
      <TableCard
        title="Stationary states of hydrogen"
        headers={["n", "Orbit radius", "Energy (eV)", "Energy (J)"]}
        rows={[
          { cells: ["1", "a₀ = 5.3 × 10⁻¹¹ m", "−13.6", "−2.18 × 10⁻¹⁸"] },
          { cells: ["2", "4a₀ = 2.12 × 10⁻¹⁰ m", "−3.40", "−5.44 × 10⁻¹⁹"] },
          { cells: ["3", "9a₀ = 4.77 × 10⁻¹⁰ m", "−1.51", "−2.42 × 10⁻¹⁹"] },
          { cells: ["4", "16a₀ = 8.48 × 10⁻¹⁰ m", "−0.85", "−1.36 × 10⁻¹⁹"] },
          { cells: ["5", "25a₀ = 1.33 × 10⁻⁹ m", "−0.54", "−8.7 × 10⁻²⁰"] },
          { cells: ["∞", "∞", "0", "0"] },
        ]}
        caption="Both rₙ and Eₙ follow from Eqs. (12.7) and (12.10); the levels crowd as n grows, and above 0 eV any energy is allowed."
      />
      <h2 id="h-12-5">12.5 The Line Spectra of the Hydrogen Atom</h2>
      <p>
        According to the third postulate, when an atom makes a transition from the higher energy state with quantum number <Formula>{String.raw`n_i`}</Formula> to the lower energy state with quantum number <Formula>{String.raw`n_f`}</Formula> (<Formula>{String.raw`n_f<n_i`}</Formula>), the difference of energy is carried away by a photon of frequency <Formula>{String.raw`\nu_{if}`}</Formula> such that
      </p>
      <FormulaBlock latex={String.raw`h\nu_{if}=E_{n_i}-E_{n_f}`} tag="Eq. 12.11" important />
      <ul>
        <li>Since both <Formula>{String.raw`n_f`}</Formula> and <Formula>{String.raw`n_i`}</Formula> are integers, light is radiated in various discrete frequencies.</li>
        <li>Lines produced when electrons jump from a higher to a lower energy state are <strong>emission lines</strong>.</li>
        <li>When an atom absorbs a photon with precisely the energy needed to raise the electron to a higher state, the process is called <strong>absorption</strong>.</li>
        <li>If photons with a continuous range of frequencies pass through a rarefied gas and are analysed with a spectrometer, a series of dark absorption lines appears in the continuous spectrum, at the frequencies absorbed by the atoms.</li>
        <li>The explanation of the hydrogen spectrum by Bohr&apos;s model was a brilliant achievement which stimulated progress towards modern quantum theory; Bohr received the Nobel Prize in Physics in 1922.</li>
      </ul>
      <EnergyLevelDiagram />
      <Callout type="note" title="Where the series come from">
        Equations (12.10) and (12.11) already contain the whole pattern. Putting <Formula>{String.raw`E_n=-13.6/n^{2}\ \text{eV}`}</Formula> into <Formula>{String.raw`hc/\lambda=E_{n_i}-E_{n_f}`}</Formula> and grouping the terms by the lower level <Formula>{String.raw`n_f`}</Formula> gives the <strong>spectral series</strong>: all transitions ending on the same level share a series limit and crowd towards it as <Formula>{String.raw`n_i`}</Formula> grows. This is exactly the regularity Balmer fitted empirically in 1885.
      </Callout>
      <FormulaBlock latex={String.raw`\frac{1}{\lambda}=R\left(\frac{1}{n_f^{2}}-\frac{1}{n_i^{2}}\right)`} label="Rydberg relation (from Eqs. 12.10 and 12.11)" important />
      <FormulaBlock latex={String.raw`R=\frac{me^{4}}{8\varepsilon_0^{2}h^{3}c}=1.097\times10^{7}\ \text{m}^{-1}`} label="Rydberg constant" />
      <TableCard
        title="The spectral series of hydrogen"
        headers={["Series", "Ends on", "Transitions from", "Region", "Landmark lines"]}
        rows={[
          { cells: ["Lyman", "n_f = 1", "n = 2, 3, 4, …", "ultraviolet", "121.6 nm (2→1); series limit 91 nm"] },
          { cells: ["Balmer", "n_f = 2", "n = 3, 4, 5, …", "visible", "656 nm Hα, 486 nm Hβ, 434 nm Hγ, 410 nm Hδ"] },
          { cells: ["Paschen", "n_f = 3", "n = 4, 5, 6, …", "infrared", "1875 nm (4→3)"] },
          { cells: ["Brackett", "n_f = 4", "n = 5, 6, 7, …", "infrared", "4050 nm (5→4)"] },
          { cells: ["Pfund", "n_f = 5", "n = 6, 7, 8, …", "infrared", "7460 nm (6→5)"] },
        ]}
        caption="One row per choice of n_f in 1/λ = R(1/n_f² − 1/n_i²). Only Balmer lands in the visible range, which is why the four lines of Fig. 12.5 are the ones seen in a discharge tube."
      />
      <MetricCard label="Rydberg constant R" value="1.097 × 10⁷" unit="m⁻¹" description="Sets the scale of every hydrogen wavelength; computed from me⁴/(8ε₀²h³c)." />
      <MistakeCard mistake="Treating a series limit as &ldquo;the shortest wavelength in hydrogen&rdquo;, or thinking the Lyman series is the visible one."
        correction="A series limit is the short-wavelength end of one series, reached as nᵢ → ∞ at fixed n_f. The shortest wavelength of all belongs to the 2→1 Lyman line, and only Balmer (n_f = 2) is visible."
        example="Balmer runs from 656 nm (3→2) down to its 365 nm limit; the whole Lyman series lies below 122 nm, in the ultraviolet." />
      <h2 id="h-12-6">12.6 de Broglie&apos;s Explanation of Bohr&apos;s Second Postulate of Quantisation</h2>
      <p>
        Of all the postulates Bohr made, perhaps the most puzzling is the second: the angular momentum of the electron orbiting the nucleus is quantised, <Formula>{String.raw`L_n=nh/2\pi`}</Formula>. Why should it have only values that are integral multiples of <Formula>{String.raw`h/2\pi`}</Formula>?
      </p>
      <ul>
        <li>The French physicist Louis de Broglie explained this puzzle in 1923, ten years after Bohr proposed his model.</li>
        <li>Material particles, such as electrons, also have a wave nature — the de Broglie hypothesis.</li>
        <li>C. J. Davisson and L. H. Germer experimentally verified the wave nature of electrons in 1927.</li>
      </ul>
      <Callout type="important" title="de Broglie's argument">
        The electron in its circular orbit, as proposed by Bohr, must be seen as a particle wave. In analogy to waves travelling on a string, particle waves too can lead to standing waves under resonant conditions.
      </Callout>
      <ul>
        <li>When a string is plucked, a vast number of wavelengths are excited, but only those survive which have nodes at the ends and form a standing wave in the string.</li>
        <li>Standing waves form when the total distance travelled by a wave down the string and back is one wavelength, two wavelengths, or any integral number of wavelengths.</li>
        <li>Waves with other wavelengths interfere with themselves upon reflection and their amplitudes quickly drop to zero.</li>
        <li>For an electron moving in the nth circular orbit of radius <Formula>{String.raw`r_n`}</Formula>, the total distance is the circumference of the orbit, <Formula>{String.raw`2\pi r_n`}</Formula>.</li>
      </ul>
      <FormulaBlock latex={String.raw`2\pi r_n=n\lambda,\qquad n=1,2,3,\dots`} tag="Eq. 12.12" important />
      <StandingWaveDiagram />
      <p>
        From the de Broglie hypothesis <Formula>{String.raw`\lambda=h/p`}</Formula>, where p is the magnitude of the electron&apos;s momentum. If the speed of the electron is much less than the speed of light the momentum is <Formula>{String.raw`mv_n`}</Formula>, so <Formula>{String.raw`\lambda=h/mv_n`}</Formula>. From Eq. (12.12),
      </p>
      <FormulaBlock latex={String.raw`2\pi r_n=\frac{nh}{mv_n}\ \ \Longrightarrow\ \ mv_nr_n=\frac{nh}{2\pi}`} />
      <ul>
        <li>This is exactly the quantum condition proposed by Bohr for the angular momentum of the electron, and it is the basis of explaining the discrete orbits and energy levels in hydrogen.</li>
        <li>The quantised electron orbits and energy states are due to the <Highlight>wave nature of the electron</Highlight>; only resonant standing waves can persist.</li>
      </ul>

      <h3 id="h-12-6-1">12.6.1 Limitations of the Bohr model</h3>
      <p>
        Bohr&apos;s model, involving a classical trajectory picture (a planet-like electron orbiting the nucleus), correctly predicts the gross features of the hydrogenic atoms, in particular the frequencies of the radiation emitted or selectively absorbed. This model, however, has many limitations.
      </p>
      <ul>
        <li>The Bohr model is applicable to <strong>hydrogenic atoms</strong> only; it cannot be extended even to a mere two electron atom such as helium.</li>
        <li>Attempts to analyse atoms with more than one electron on the lines of Bohr&apos;s model did not meet with any success, because each electron interacts not only with the nucleus but also with all other electrons.</li>
        <li>The formulation involves only the electrical force between the positively charged nucleus and an electron; it does not include the electrical forces between electrons.</li>
        <li>While the model correctly predicts the frequencies of the light emitted by hydrogenic atoms, it cannot explain the relative intensities of those frequencies.</li>
        <li>In the emission spectrum of hydrogen some visible frequencies are weak and others strong, because some transitions are more favoured than others; Bohr&apos;s model cannot account for these intensity variations.</li>
        <li>For complex atoms a new and radical theory based on quantum mechanics is needed, which provides a more complete picture of atomic structure.</li>
      </ul>
      <Callout type="note" title="Hydrogenic atoms">
        Hydrogenic atoms are atoms consisting of a nucleus with positive charge +Ze and a single electron, where Z is the proton number. Examples are the hydrogen atom, singly ionised helium and doubly ionised lithium; in these atoms more complex electron-electron interactions are nonexistent.
      </Callout>
      <KeyPoint title="What survives of Bohr">
        Three postulates account for almost all the general features of the hydrogen spectrum, so the model remains the working picture for one-electron atoms — even though the true description is quantum mechanical, and a given energy level there need not correspond to a single quantum state.
      </KeyPoint>

      <h2 id="h-12-equations">Key Equations — Revision Board</h2>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Coulomb force on the α-particle</p>
          <FormulaBlock latex={String.raw`F=\frac{1}{4\pi\varepsilon_0}\frac{(2e)(Ze)}{r^{2}}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Classical orbit and total energy</p>
          <FormulaBlock latex={String.raw`r=\frac{e^{2}}{4\pi\varepsilon_0 mv^{2}},\qquad E=-\frac{e^{2}}{8\pi\varepsilon_0 r}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Bohr quantisation condition</p>
          <FormulaBlock latex={String.raw`L=mvr=\frac{nh}{2\pi}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Radius and speed of the nth orbit</p>
          <FormulaBlock latex={String.raw`r_n=\frac{n^{2}h^{2}\varepsilon_0}{\pi me^{2}}=n^{2}a_0,\qquad v_n=\frac{e^{2}}{2\varepsilon_0 nh}`} />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Energy of the nth orbit</p>
          <FormulaBlock latex={String.raw`E_n=-\frac{me^{4}}{8\varepsilon_0^{2}n^{2}h^{2}}=-\frac{13.6}{n^{2}}\ \text{eV}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Photon energy and Rydberg relation</p>
          <FormulaBlock latex={String.raw`h\nu=E_{n_i}-E_{n_f},\qquad \frac{1}{\lambda}=R\left(\frac{1}{n_f^{2}}-\frac{1}{n_i^{2}}\right)`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">de Broglie standing-wave condition</p>
          <FormulaBlock latex={String.raw`2\pi r_n=n\lambda,\qquad \lambda=\frac{h}{mv_n}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Constants for numericals</p>
          <FormulaBlock latex={String.raw`a_0=5.3\times10^{-11}\ \text{m},\quad R=1.097\times10^{7}\ \text{m}^{-1},\quad hc=1240\ \text{eV nm}`} />
        </FormulaCard>
      </div>
      <h2 id="h-12-exercises">Back-of-Chapter Exercises</h2>
      <p className="text-sm text-muted-foreground">All 9 NCERT exercises with the complete answer key. Work each one out before opening the panel.</p>
      <Expandable title="Exercises 12.1 – 12.9 — questions and answer key" variant="exercise">
        <ExerciseQa
          questions={[
            <>
              Choose the correct alternative from the clues given at the end of each statement:
              <ul className="mt-2 space-y-1">
                <li>(a) The size of the atom in Thomson&apos;s model is .......... the atomic size in Rutherford&apos;s model. (much greater than / no different from / much less than)</li>
                <li>(b) In the ground state of .......... electrons are in stable equilibrium, while in .......... electrons always experience a net force. (Thomson&apos;s model / Rutherford&apos;s model)</li>
                <li>(c) A classical atom based on .......... is doomed to collapse. (Thomson&apos;s model / Rutherford&apos;s model)</li>
                <li>(d) An atom has a nearly continuous mass distribution in a .......... but has a highly non-uniform mass distribution in .......... (Thomson&apos;s model / Rutherford&apos;s model)</li>
                <li>(e) The positively charged part of the atom possesses most of the mass in .......... (Rutherford&apos;s model / both the models)</li>
              </ul>
            </>,
            "Suppose you are given a chance to repeat the alpha-particle scattering experiment using a thin sheet of solid hydrogen in place of the gold foil. (Hydrogen is a solid at temperatures below 14 K.) What results do you expect?",
            "A difference of 2.3 eV separates two energy levels in an atom. What is the frequency of radiation emitted when the atom make a transition from the upper level to the lower level?",
            "The ground state energy of hydrogen atom is −13.6 eV. What are the kinetic and potential energies of the electron in this state?",
            "A hydrogen atom initially in the ground level absorbs a photon, which excites it to the n = 4 level. Determine the wavelength and frequency of photon.",
            "(a) Using the Bohr's model calculate the speed of the electron in a hydrogen atom in the n = 1, 2, and 3 levels. (b) Calculate the orbital period in each of these levels.",
            "The radius of the innermost electron orbit of a hydrogen atom is 5.3 × 10⁻¹¹ m. What are the radii of the n = 2 and n = 3 orbits?",
            "A 12.5 eV electron beam is used to bombard gaseous hydrogen at room temperature. What series of wavelengths will be emitted?",
            "In accordance with the Bohr's model, find the quantum number that characterises the earth's revolution around the sun in an orbit of radius 1.5 × 10¹¹ m with orbital speed 3 × 10⁴ m/s. (Mass of earth = 6.0 × 10²⁴ kg.)",
          ]}
          answers={[
            "(a) no different from — both models keep the known atomic size. (b) Thomson's model; Rutherford's model. (c) Rutherford's model — the orbiting electron radiates and spirals in. (d) Thomson's model; Rutherford's model. (e) both the models.",
            "Nothing like the gold result. The proton is only about one quarter as heavy as the α-particle and carries just +e, so the repulsive force is 79 times weaker than for gold, and the target recoils instead of staying fixed. Expect almost every α-particle to pass nearly straight through, with far smaller deflections and practically no back-scattering beyond 90°.",
            <>
              <Formula>{String.raw`\nu=\frac{\Delta E}{h}=\frac{2.3\times1.6\times10^{-19}}{6.63\times10^{-34}}=5.6\times10^{14}\ \text{Hz}`}</Formula>
            </>,
            <>
              For a bound electron <Formula>{String.raw`E=-K`}</Formula> and <Formula>{String.raw`U=-2K`}</Formula>. With <Formula>{String.raw`E=-13.6\ \text{eV}`}</Formula>: <Formula>{String.raw`K=13.6\ \text{eV}`}</Formula> and <Formula>{String.raw`U=-27.2\ \text{eV}`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`\Delta E=E_4-E_1=-0.85-(-13.6)=12.75\ \text{eV}`}</Formula>, so <Formula>{String.raw`\lambda=hc/\Delta E=1240/12.75=97\ \text{nm}`}</Formula> and <Formula>{String.raw`\nu=c/\lambda=3.1\times10^{15}\ \text{Hz}`}</Formula>.
            </>,
            <>
              (a) <Formula>{String.raw`v_n=2.2\times10^{6}/n`}</Formula> gives <Formula>{String.raw`2.2\times10^{6}`}</Formula>, <Formula>{String.raw`1.1\times10^{6}`}</Formula> and <Formula>{String.raw`7.3\times10^{5}\ \text{m s}^{-1}`}</Formula>. (b) <Formula>{String.raw`T_n=2\pi r_n/v_n=n^{3}T_1`}</Formula> with <Formula>{String.raw`T_1=1.5\times10^{-16}\ \text{s}`}</Formula> gives <Formula>{String.raw`1.5\times10^{-16}`}</Formula>, <Formula>{String.raw`1.2\times10^{-15}`}</Formula> and <Formula>{String.raw`4.1\times10^{-15}\ \text{s}`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`r_n=n^{2}r_1`}</Formula>: <Formula>{String.raw`r_2=2.12\times10^{-10}\ \text{m}`}</Formula> and <Formula>{String.raw`r_3=4.77\times10^{-10}\ \text{m}`}</Formula>.
            </>,
            "12.5 eV can excite the atom to n = 2 (10.2 eV) and to n = 3 (12.09 eV), but not beyond. De-excitation gives three lines: 3→1 at 103 nm and 2→1 at 122 nm (both Lyman, ultraviolet) and 3→2 at 656 nm (Balmer, visible). So two Lyman lines and one Balmer line are emitted.",
            <>
              <Formula>{String.raw`n=\frac{2\pi mvr}{h}=\frac{2\pi(6.0\times10^{24})(3\times10^{4})(1.5\times10^{11})}{6.63\times10^{-34}}\approx2.6\times10^{74}`}</Formula> — so large that quantisation of angular momentum is utterly unobservable for a planet.
            </>,
          ]}
        />
      </Expandable>
    </>
  );
}

