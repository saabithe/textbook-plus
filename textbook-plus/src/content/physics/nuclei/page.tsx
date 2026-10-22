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

const NUCLEUS = "#8b5cf6";
const PROTON = "#e11d48";
const NEUTRON = "#0ea5e9";
const ENERGY = "#10b981";
const AMBER = "#f59e0b";
const STRUCT = "var(--foreground)";
const MUTED = "var(--muted-foreground)";

function Figure({
  n,
  caption,
  children,
}: {
  n: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5"><span className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">Fig. {n}</span></div>
      <div className="px-2 py-3">{children}</div>
      <figcaption className="px-4 pb-3 text-center text-[0.72rem] leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
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
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={size}
      fontWeight={color === MUTED ? 500 : 700}
      fill={color}
    >
      {children}
    </text>
  );
}

/* ------------------------------------------------------------------ */
/* 13.1 — how empty an atom is                                        */
/* ------------------------------------------------------------------ */

function AtomScaleDiagram() {
  return (
    <Figure
      n="13.S1"
      caption="An atom is almost empty: the nuclear radius is about 10⁻⁴ of the atomic radius, so the nucleus occupies only about 10⁻¹² of the atomic volume — yet it holds more than 99.9% of the mass."
    >
      <svg viewBox="0 0 460 168" className="h-auto w-full" role="img" aria-label="Scale of an atom compared with its nucleus">
        <circle cx="95" cy="80" r="52" fill="none" stroke={STRUCT} strokeWidth="1.8" />
        <circle cx="95" cy="80" r="10" fill={NUCLEUS} fillOpacity="0.10" stroke={NUCLEUS} strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="95" cy="80" r="2" fill={NUCLEUS} />
        <Lbl x={95} y={150}>atom — radius ≈ 10⁻¹⁰ m</Lbl>
        <Lbl x={95} y={163} size={9}>the dot at the centre is the nucleus, to scale</Lbl>
        <path d="M 105 68 L 300 58" fill="none" stroke={MUTED} strokeWidth="0.8" strokeDasharray="4 3" />
        <path d="M 105 92 L 300 102" fill="none" stroke={MUTED} strokeWidth="0.8" strokeDasharray="4 3" />
        <circle cx="330" cy="80" r="52" fill="none" stroke={MUTED} strokeWidth="1.2" strokeDasharray="4 4" />
        <circle cx="330" cy="80" r="21" fill={NUCLEUS} fillOpacity="0.14" stroke={NUCLEUS} strokeWidth="1.6" />
        <circle cx="323" cy="73" r="4.5" fill={PROTON} />
        <circle cx="338" cy="85" r="4.5" fill={NEUTRON} />
        <circle cx="325" cy="90" r="4.5" fill={PROTON} />
        <Lbl x={330} y={150}>nucleus enlarged 10⁴ ×</Lbl>
        <Lbl x={330} y={163} size={9} color={ENERGY}>radius ≈ 10⁻¹⁴ m, mass ≈ 99.9%</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* Fig. 13.1 — binding energy per nucleon curve                       */
/* ------------------------------------------------------------------ */

function BindingEnergyCurve() {
  const x = (a: number) => 50 + (a * 400) / 260;
  const y = (e: number) => 210 - e * 20;
  const curve = [
    [2, 1.1],
    [4, 7.07],
    [6, 5.3],
    [7, 5.6],
    [9, 6.5],
    [10, 6.9],
    [12, 7.7],
    [16, 8.0],
    [20, 8.1],
    [30, 8.4],
    [40, 8.6],
    [56, 8.75],
    [70, 8.7],
    [90, 8.65],
    [120, 8.5],
    [140, 8.3],
    [170, 8.0],
    [200, 7.9],
    [238, 7.6],
    [250, 7.5],
  ];
  const points = curve.map(([a, e]) => `${x(a).toFixed(1)},${y(e).toFixed(1)}`).join(" ");

  return (
    <Figure
      n="13.1"
      caption="Binding energy per nucleon Ebn against mass number A. The curve is flat at about 8 MeV between A = 30 and A = 170, peaks at 8.75 MeV near A = 56, and falls to about 7.6 MeV at A = 238."
    >
      <svg viewBox="0 0 480 240" className="h-auto w-full" role="img" aria-label="Binding energy per nucleon versus mass number">
        <rect x={x(30)} y="25" width={x(170) - x(30)} height="185" fill={ENERGY} fillOpacity="0.06" />
        <line x1="50" y1="210" x2="456" y2="210" stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="462,210 450,205.5 450,214.5" fill={STRUCT} />
        <line x1="50" y1="210" x2="50" y2="22" stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="50,16 45.5,28 54.5,28" fill={STRUCT} />
        {[2, 4, 6, 8].map((e) => (
          <g key={e}>
            <line x1="46" y1={y(e)} x2="50" y2={y(e)} stroke={MUTED} strokeWidth="1" />
            <Lbl x={42} y={y(e) + 3} anchor="end">{e}</Lbl>
          </g>
        ))}
        {[
          [0, "0"],
          [56, "56"],
          [120, "120"],
          [170, "170"],
          [238, "238"],
        ].map(([a, label]) => (
          <g key={String(label)}>
            <line x1={x(Number(a))} y1="210" x2={x(Number(a))} y2="214" stroke={MUTED} strokeWidth="1" />
            <Lbl x={x(Number(a))} y={224}>{label}</Lbl>
          </g>
        ))}
        <polyline points={points} fill="none" stroke={NUCLEUS} strokeWidth="2.2" strokeLinejoin="round" />
        <line x1={x(56)} y1={y(8.75)} x2={x(56)} y2="210" stroke={AMBER} strokeWidth="1" strokeDasharray="4 3" />
        <circle cx={x(56)} cy={y(8.75)} r="3.4" fill={AMBER} />
        <Lbl x={x(56) + 8} y={y(8.75) - 8} anchor="start" color={AMBER}>8.75 MeV at A = 56</Lbl>
        <circle cx={x(238)} cy={y(7.6)} r="3.2" fill={PROTON} />
        <Lbl x={x(238) - 8} y={y(7.6) + 18} anchor="end" color={PROTON}>7.6 MeV at A = 238</Lbl>
        <Lbl x={176} y={38} color={ENERGY}>flat region 30 &lt; A &lt; 170</Lbl>
        <Lbl x={20} y={30} anchor="start">Ebn</Lbl>
        <Lbl x={20} y={24} anchor="start" size={8}>(MeV)</Lbl>
        <Lbl x={420} y={200} anchor="end">mass number A</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* Fig. 13.2 — potential energy of a nucleon pair                     */
/* ------------------------------------------------------------------ */

function NucleonPotentialDiagram() {
  return (
    <Figure
      n="13.2"
      caption="Potential energy of a pair of nucleons against their separation. The minimum at r₀ ≈ 0.8 fm means the force is attractive beyond r₀ and strongly repulsive below it."
    >
      <svg viewBox="0 0 460 232" className="h-auto w-full" role="img" aria-label="Potential energy of two nucleons versus separation">
        <line x1="50" y1="95" x2="446" y2="95" stroke={STRUCT} strokeWidth="1.5" />
        <polygon points="452,95 440,90.5 440,99.5" fill={STRUCT} />
        <line x1="50" y1="205" x2="50" y2="30" stroke={STRUCT} strokeWidth="1.5" />
        <polygon points="50,24 45.5,36 54.5,36" fill={STRUCT} />
        <path
          d="M 58 35 C 66 120 100 168 150 175 C 205 172 255 140 310 118 C 360 102 410 96 440 95"
          fill="none"
          stroke={NUCLEUS}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <line x1="150" y1="175" x2="150" y2="95" stroke={AMBER} strokeWidth="1" strokeDasharray="4 3" />
        <circle cx="150" cy="175" r="3.2" fill={AMBER} />
        <Lbl x={150} y={88} color={AMBER}>r₀ ≈ 0.8 fm</Lbl>
        <Lbl x={438} y={88} anchor="end">U = 0</Lbl>
        <Lbl x={78} y={58} anchor="start" color={PROTON}>strongly repulsive</Lbl>
        <Lbl x={78} y={70} anchor="start" color={PROTON} size={9}>r &lt; r₀</Lbl>
        <Lbl x={330} y={140} anchor="middle" color={ENERGY}>attractive</Lbl>
        <Lbl x={330} y={152} anchor="middle" color={ENERGY} size={9}>r &gt; r₀</Lbl>
        <Lbl x={200} y={222}>separation r</Lbl>
        <Lbl x={22} y={44}>U(r)</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* Fission and fusion schematics                                      */
/* ------------------------------------------------------------------ */

function FissionSchematic() {
  return (
    <Figure
      n="13.S2"
      caption="Neutron-induced fission of ²³⁵U: the compound nucleus ²³⁶U splits into two intermediate-mass fragments plus two to four neutrons, releasing about 200 MeV."
    >
      <svg viewBox="0 0 480 190" className="h-auto w-full" role="img" aria-label="Neutron induced fission of uranium-235">
        <circle cx="34" cy="92" r="8" fill={NEUTRON} />
        <Lbl x={34} y={112} color={NEUTRON}>n</Lbl>
        <line x1="46" y1="92" x2="104" y2="92" stroke={MUTED} strokeWidth="1.5" />
        <polygon points="112,92 100,87.5 100,96.5" fill={MUTED} />
        <circle cx="146" cy="92" r="33" fill={AMBER} fillOpacity="0.16" stroke={AMBER} strokeWidth="2" />
        <Lbl x={146} y={96} color={AMBER} size={12}>²³⁵U</Lbl>
        <Lbl x={146} y={140} size={9}>92 protons + 143 neutrons</Lbl>
        <line x1="180" y1="80" x2="286" y2="56" stroke={MUTED} strokeWidth="1.4" />
        <polygon points="294,54 282,51 284,60" fill={MUTED} />
        <line x1="180" y1="106" x2="286" y2="128" stroke={MUTED} strokeWidth="1.4" />
        <polygon points="294,130 284,124 282,133" fill={MUTED} />
        <circle cx="320" cy="52" r="23" fill={NUCLEUS} fillOpacity="0.14" stroke={NUCLEUS} strokeWidth="1.8" />
        <Lbl x={320} y={56} color={NUCLEUS} size={11}>¹⁴⁴Ba</Lbl>
        <circle cx="320" cy="130" r="21" fill={PROTON} fillOpacity="0.12" stroke={PROTON} strokeWidth="1.8" />
        <Lbl x={320} y={134} color={PROTON} size={11}>⁸⁹Kr</Lbl>
        {[
          [392, 34],
          [412, 74],
          [396, 148],
        ].map(([cx, cy]) => (
          <g key={String(cx) + String(cy)}>
            <circle cx={cx} cy={cy} r="7" fill={NEUTRON} />
            <Lbl x={cx + 14} y={cy + 4} anchor="start" color={NEUTRON} size={9}>n</Lbl>
          </g>
        ))}
        <Lbl x={240} y={182} color={ENERGY}>Q ≈ 200 MeV per fissioning nucleus</Lbl>
      </svg>
    </Figure>
  );
}

function FusionSchematic() {
  return (
    <Figure
      n="13.S3"
      caption="The proton–proton cycle net result: four hydrogen nuclei fuse into one helium nucleus, with two positrons, two neutrinos and gamma photons, releasing 26.7 MeV."
    >
      <svg viewBox="0 0 480 180" className="h-auto w-full" role="img" aria-label="Fusion of four protons into helium">
        {[
          [48, 56],
          [76, 44],
          [48, 92],
          [76, 80],
        ].map(([cx, cy]) => (
          <g key={String(cx) + String(cy)}>
            <circle cx={cx} cy={cy} r="9" fill={PROTON} fillOpacity="0.18" stroke={PROTON} strokeWidth="1.6" />
            <Lbl x={cx} y={cy + 4} color={PROTON} size={9}>p</Lbl>
          </g>
        ))}
        <Lbl x={62} y={124}>4 ¹H</Lbl>
        <line x1="104" y1="68" x2="228" y2="68" stroke={MUTED} strokeWidth="1.5" />
        <polygon points="236,68 224,63.5 224,72.5" fill={MUTED} />
        <Lbl x={168} y={58} size={9}>fusion</Lbl>
        <circle cx="286" cy="68" r="28" fill={NUCLEUS} fillOpacity="0.14" stroke={NUCLEUS} strokeWidth="2" />
        <Lbl x={286} y={72} color={NUCLEUS} size={12}>⁴He</Lbl>
        <Lbl x={286} y={124} color={ENERGY}>+ 2e⁺ + 2ν + 6γ</Lbl>
        <Lbl x={286} y={140} color={ENERGY}>+ 26.7 MeV</Lbl>
        <Lbl x={286} y={164} size={9}>the ash is helium, the energy is the sunlight</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* Chapter component                                                  */
/* ------------------------------------------------------------------ */

export default function NucleiPage() {
  return (
    <>
      <h2 id="h-13-1">13.1 Introduction</h2>
      <p>In every atom the positive charge and the mass are densely concentrated at the centre, forming its <strong>nucleus</strong>. Experiments on the scattering of α-particles showed that the radius of a nucleus is smaller than the radius of an atom by a factor of about <Formula>{String.raw`10^{4}`}</Formula>, so the volume of a nucleus is about <Formula>{String.raw`10^{-12}`}</Formula> times the volume of the atom.</p>
      <Highlight>An atom is almost empty — enlarged to the size of a classroom, its nucleus would be the size of a pinhead — yet the nucleus carries more than 99.9% of the mass of the atom.</Highlight>
      <AtomScaleDiagram />
      <p>The chapter asks what the nucleus is made of, how its parts are held together, and what its size, mass and stability are. It then takes up the nuclear phenomena that follow from these properties: <strong>radioactivity</strong>, <strong>fission</strong> and <strong>fusion</strong>.</p>

      <h2 id="h-13-2">13.2 Atomic Masses and Composition of the Nucleus</h2>
      <p>The mass of an atom is very small compared with a kilogram — the mass of a carbon atom, <Formula>{String.raw`{}^{12}\text{C}`}</Formula>, is <Formula>{String.raw`1.992647\times 10^{-26}\ \text{kg}`}</Formula>. The kilogram is therefore not a convenient unit for atomic masses, and a different mass unit is used.</p>

      <h3 id="h-13-2-1">13.2.1 The Atomic Mass Unit and Isotopes</h3>
      <Callout type="important" title="Atomic mass unit (u)">
        <p>The <strong>atomic mass unit</strong> (u) is defined as 1/12<sup>th</sup> of the mass of the carbon (<Formula>{String.raw`{}^{12}\text{C}`}</Formula>) atom.</p>
      </Callout>
      <FormulaBlock
        tag="Eq. 13.1"
        latex={String.raw`1\ \text{u}=\frac{1}{12}\times 1.992647\times 10^{-26}\ \text{kg}=1.660539\times 10^{-27}\ \text{kg}`}
      />
      <ul>
        <li>Atomic masses in u are close to integral multiples of the mass of a hydrogen atom.</li>
        <li>There are striking exceptions: the atomic mass of a chlorine atom is 35.46 u, not an integer.</li>
        <li>Accurate atomic masses are measured with a <strong>mass spectrometer</strong>.</li>
        <li>Such measurements revealed atoms of the same element with identical chemical properties but different masses.</li>
      </ul>
      <Callout type="important" title="Isotopes">
        <p>Atomic species of the same element differing in mass are called <strong>isotopes</strong>. (In Greek, isotope means the same place — they occur in the same place in the periodic table of elements.)</p>
      </Callout>
      <p>Practically every element is a mixture of several isotopes, and the relative abundance differs from element to element. Chlorine has two isotopes of masses 34.98 u and 36.98 u, with relative abundances of 75.4 and 24.6 per cent. The atomic mass of chlorine is the weighted average:</p>
      <FormulaBlock
        latex={String.raw`\frac{75.4\times 34.98 + 24.6\times 36.98}{100}=35.47\ \text{u}`}
      />
      <p>which agrees with the measured atomic mass of chlorine. Even the lightest element has three isotopes.</p>
      <Highlight>An atomic mass is a weighted average over the natural abundances of the isotopes, which is why it need not be a whole number of u.</Highlight>
      <TableCard
        title="The three isotopes of hydrogen"
        headers={["Isotope", "Mass (u)", "What it is"]}
        rows={[
          {
            cells: [
              <Formula key="h1">{String.raw`{}^{1}_{1}\text{H}`}</Formula>,
              "1.0078",
              "Relative abundance 99.985%; its nucleus is the proton.",
            ],
          },
          {
            cells: [
              <Formula key="h2">{String.raw`{}^{2}_{1}\text{H}`}</Formula>,
              "2.0141",
              "Deuterium — one proton and one neutron.",
            ],
          },
          {
            cells: [
              <Formula key="h3">{String.raw`{}^{3}_{1}\text{H}`}</Formula>,
              "3.0160",
              "Tritium — unstable, does not occur naturally, produced artificially in laboratories.",
            ],
          },
        ]}
        caption="The proton is the nucleus of the lightest hydrogen atom (relative abundance 99.985%)."
      />
      <FormulaBlock
        tag="Eq. 13.2"
        label="proton"
        latex={String.raw`m_p = 1.00727\ \text{u} = 1.67262\times 10^{-27}\ \text{kg}`}
      />
      <p>This equals the mass of the hydrogen atom (1.00783 u) minus the mass of a single electron (<Formula>{String.raw`m_e = 0.00055\ \text{u}`}</Formula>).</p>
      <ul>
        <li>The positive charge of the nucleus is that of its protons. A proton carries one unit of fundamental charge and is stable.</li>
        <li>An earlier idea that the nucleus also contains electrons was ruled out by arguments based on quantum theory.</li>
        <li>All the electrons of an atom lie outside the nucleus, and their number is <Formula>{String.raw`Z`}</Formula>, the atomic number.</li>
        <li>The atomic electrons carry a total charge of <Formula>{String.raw`-Ze`}</Formula>; a neutral atom therefore has a nuclear charge of <Formula>{String.raw`+Ze`}</Formula>, so the number of protons is exactly <Formula>{String.raw`Z`}</Formula>.</li>
      </ul>

      <h3 id="h-13-2-2">13.2.2 Discovery of the Neutron</h3>
      <p>The nuclei of deuterium and tritium are isotopes of hydrogen, so each contains only one proton. Yet their masses are in the ratio 1 : 2 : 3 — so they must contain neutral matter as well.</p>
      <Stepper
        steps={[
          {
            label: "Neutral matter comes in whole units",
            description:
              "Expressed in units of the proton mass, the neutral matter in deuterium and tritium is about one and two. Nuclei therefore contain neutral matter in multiples of a basic unit.",
          },
          {
            label: "Chadwick's experiment, 1932",
            description:
              "James Chadwick observed emission of neutral radiation when beryllium nuclei were bombarded with α-particles (helium nuclei).",
          },
          {
            label: "The radiation knocks out protons",
            description:
              "This neutral radiation could knock out protons from light nuclei such as helium, carbon and nitrogen.",
          },
          {
            label: "Photons ruled out",
            description:
              "The only neutral radiation known then was photons. Conservation of energy and momentum showed that photons would need an energy much higher than the bombarding α-particles could supply.",
          },
          {
            label: "A new neutral particle",
            description:
              "Chadwick assumed the radiation consists of a new neutral particle, the neutron, and from conservation of energy and momentum found its mass to be very nearly the mass of the proton. He received the 1935 Nobel Prize in Physics.",
          },
        ]}
      />
      <FormulaBlock
        tag="Eq. 13.3"
        label="neutron"
        latex={String.raw`m_n = 1.00866\ \text{u} = 1.6749\times 10^{-27}\ \text{kg}`}
      />
      <ul>
        <li>A free neutron is unstable: it decays into a proton, an electron and an antineutrino, with a mean life of about 1000 s.</li>
        <li>Inside a nucleus, the neutron is stable.</li>
      </ul>

      <h3 id="h-13-2-3">13.2.3 Composition and Notation of Nuclei</h3>
      <Callout type="important" title="Defining Z, N and A">
        <ul>
          <li><Formula>{String.raw`Z`}</Formula> — atomic number = number of protons. [13.4(a)]</li>
          <li><Formula>{String.raw`N`}</Formula> — neutron number = number of neutrons. [13.4(b)]</li>
          <li><Formula>{String.raw`A`}</Formula> — mass number = <Formula>{String.raw`Z+N`}</Formula> = total number of protons and neutrons. [13.4(c)]</li>
        </ul>
      </Callout>
      <p>A proton or a neutron is called a <strong>nucleon</strong>, so the number of nucleons in an atom is its mass number <Formula>{String.raw`A`}</Formula>. A nuclear species, or <strong>nuclide</strong>, is written with the chemical symbol carrying A and Z:</p>
      <FormulaBlock latex={String.raw`{}^{A}_{Z}\text{X}`} />
      <Highlight>A nuclide is fixed by the pair (Z, A): Z names the element, and A = Z + N fixes the nucleus.</Highlight>
      <p>
        For example the nucleus of gold, <Formula>{String.raw`{}^{197}_{79}\text{Au}`}</Formula>,
        contains 197 nucleons, of which 79 are protons and the remaining 118 are neutrons.
      </p>
      <ul>
        <li>The nuclei of isotopes of an element contain the same number of protons but differ in their number of neutrons.</li>
        <li>Deuterium <Formula>{String.raw`{}^{2}_{1}\text{H}`}</Formula> has one proton and one neutron; tritium <Formula>{String.raw`{}^{3}_{1}\text{H}`}</Formula> has one proton and two neutrons.</li>
        <li>Gold has 32 isotopes, ranging from <Formula>{String.raw`A=173`}</Formula> to <Formula>{String.raw`A=204`}</Formula>.</li>
        <li>Chemical properties depend on the electronic structure; isotopes have identical electronic structure, hence identical chemical behaviour, and sit in the same place in the periodic table.</li>
        <li>
          Nuclides with the same mass number <Formula>{String.raw`A`}</Formula> are <strong>isobars</strong>
          {" "}— for example <Formula>{String.raw`{}^{3}_{1}\text{H}`}</Formula> and{" "}
          <Formula>{String.raw`{}^{3}_{2}\text{He}`}</Formula>.
        </li>
        <li>Nuclides with the same neutron number <Formula>{String.raw`N`}</Formula> but different <Formula>{String.raw`Z`}</Formula> are <strong>isotones</strong> — for example <Formula>{String.raw`{}^{198}_{80}\text{Hg}`}</Formula> and <Formula>{String.raw`{}^{197}_{79}\text{Au}`}</Formula>.</li>
      </ul>

      <h2 id="h-13-3">13.3 Size of the Nucleus</h2>
      <p>Rutherford postulated and established the existence of the atomic nucleus. At his suggestion Geiger and Marsden performed their classic experiment on the scattering of α-particles from thin gold foils.</p>
      <ul>
        <li>Their experiments showed that the distance of closest approach to a gold nucleus of an α-particle of kinetic energy 5.5 MeV is about <Formula>{String.raw`4.0\times 10^{-14}\ \text{m}`}</Formula>.</li>
        <li>Rutherford understood the scattering by assuming that the Coulomb repulsive force alone was responsible.</li>
        <li>Since the positive charge is confined to the nucleus, the actual size of the nucleus must be less than <Formula>{String.raw`4.0\times 10^{-14}\ \text{m}`}</Formula>.</li>
        <li>With α-particles of higher energy the distance of closest approach is smaller; at some point the short-range nuclear force begins to affect the scattering and the result departs from the pure-Coulomb prediction.</li>
        <li>The distance at which the deviations set in gives the nuclear size.</li>
        <li>Accurate sizes are measured by scattering fast electrons from targets of various elements.</li>
      </ul>
      <Callout type="important" title="Nuclear radius">
        <p>A nucleus of mass number <Formula>{String.raw`A`}</Formula> has a radius</p>
        <FormulaBlock
          tag="Eq. 13.5"
          latex={String.raw`R=R_0 A^{1/3}`}
          important
        />
        <p>where <Formula>{String.raw`R_0=1.2\times 10^{-15}\ \text{m}`}</Formula> (1.2 fm; <Formula>{String.raw`1\ \text{fm}=10^{-15}\ \text{m}`}</Formula>).</p>
      </Callout>
      <p>The volume, proportional to <Formula>{String.raw`R^{3}`}</Formula>, is therefore proportional to <Formula>{String.raw`A`}</Formula>, so the density of a nucleus is a constant, independent of <Formula>{String.raw`A`}</Formula>. Different nuclei are like a drop of liquid of constant density.</p>
      <Highlight>Because the volume grows in step with the number of nucleons, every nucleus has practically the same density — about 2.3 × 10¹⁷ kg m⁻³, some 10¹⁴ times the density of water.</Highlight>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <MetricCard
          label="Nuclear radius constant"
          value="1.2"
          unit="fm"
          description="R₀ = 1.2 × 10⁻¹⁵ m in R = R₀A¹ᐟ³"
        />
        <MetricCard
          label="Density of nuclear matter"
          value="2.3 × 10¹⁷"
          unit="kg m⁻³"
          description="Independent of A; water is only 10³ kg m⁻³, so an atom is mostly empty space."
        />
      </div>
      <KeyPoint title="A nucleus behaves like a liquid drop">Because every nucleon adds the same volume and the same mass, nuclear density is the same for all nuclei. That is also why the density of matter in neutron stars, which is comparable to this value, means their matter has been compressed until the star resembles one big nucleus.</KeyPoint>

      <Expandable title="Example 13.1 — Nuclear density of iron" variant="example">
        <ProblemSolution.Problem>
          <p>Given the mass of the iron nucleus as 55.85 u and <Formula>{String.raw`A=56`}</Formula>, find the nuclear density.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Mass of the nucleus, <Formula>{String.raw`m_{\text{Fe}}=55.85\ \text{u}=55.85\times 1.66\times 10^{-27}\ \text{kg}=9.27\times 10^{-26}\ \text{kg}`}</Formula>.</p>
          <p>Nuclear density = mass / volume. Working per nucleon:</p>
          <FormulaBlock
            latex={String.raw`\rho=\frac{m_{\text{Fe}}/A}{\frac{4}{3}\pi R_0^{3}}=\frac{9.27\times 10^{-26}/56}{\frac{4}{3}\pi\left(1.2\times 10^{-15}\right)^{3}}`}
          />
          <p>With <Formula>{String.raw`\frac{4}{3}\pi\left(1.2\times 10^{-15}\right)^{3}=7.24\times 10^{-45}\ \text{m}^{3}`}</Formula>:</p>
          <FormulaBlock
            latex={String.raw`\rho=\frac{1.66\times 10^{-27}}{7.24\times 10^{-45}}=2.29\times 10^{17}\ \text{kg m}^{-3}`}
            important
          />
          <p>The density of matter in neutron stars is comparable to this value — their matter is compressed to such an extent that these objects resemble a big nucleus.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-13-4">13.4 Mass–Energy and Nuclear Binding Energy</h2>

      <h3 id="h-13-4-1">13.4.1 Mass – Energy</h3>
      <p>Einstein showed from his theory of special relativity that mass must be treated as another form of energy. Before that theory it was presumed that mass and energy were conserved separately in a reaction; Einstein showed that mass is another form of energy, and that one can convert mass-energy into other forms of energy, say kinetic energy, and vice-versa.</p>
      <Callout type="important" title="Mass–energy equivalence">
        <p>The famous mass-energy equivalence relation given by Einstein is</p>
        <FormulaBlock
          tag="Eq. 13.6"
          latex={String.raw`E=mc^{2}`}
          important
        />
        <p>
          Here the energy equivalent of mass <Formula>{String.raw`m`}</Formula> is related by this
          equation, and <Formula>{String.raw`c`}</Formula> is the velocity of light in vacuum,
          approximately <Formula>{String.raw`3\times 10^{8}\ \text{m s}^{-1}`}</Formula>.
        </p>
      </Callout>
      <Expandable title="Example 13.2 — Energy equivalent of one gram" variant="example">
        <ProblemSolution.Problem>
          <p>Calculate the energy equivalent of 1 g of substance.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Energy, <Formula>{String.raw`E=10^{-3}\times\left(3\times 10^{8}\right)^{2}\ \text{J}`}</Formula></p>
          <FormulaBlock
            latex={String.raw`E=10^{-3}\times 9\times 10^{16}=9\times 10^{13}\ \text{J}`}
            important
          />
          <p>If one gram of matter is converted to energy, there is a release of an enormous amount of energy.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <ul>
        <li>The relation has been verified experimentally in the study of nuclear reactions amongst nucleons, nuclei, electrons and other particles.</li>
        <li>In a reaction, energy conservation states that the initial and final energies are equal — provided the energy associated with mass is also included.</li>
      </ul>

      <h3 id="h-13-4-2">13.4.2 Mass Defect and Nuclear Binding Energy</h3>
      <p>Since a nucleus is made of neutrons and protons, its mass might be expected to equal the total mass of its individual protons and neutrons. The nuclear mass <Formula>{String.raw`M`}</Formula> is found to be always less than this. Consider <Formula>{String.raw`{}^{16}_{8}\text{O}`}</Formula>, a nucleus with 8 neutrons and 8 protons.</p>
      <TableCard
        title="Expected vs measured mass of the ¹⁶O nucleus"
        headers={["Constituent", "Number", "Mass of one (u)", "Total (u)"]}
        rows={[
          { cells: ["Protons", "8", "1.00727", "8.05816"] },
          { cells: ["Neutrons", "8", "1.00866", "8.06928"] },
          { cells: ["Expected mass of the ¹⁶O nucleus", "16 nucleons", "—", "16.12744"] },
          { cells: ["Electrons (atomic mass → nuclear mass)", "8", "0.00055", "0.00440"] },
        ]}
        caption="The atomic mass of ¹⁶O from mass spectroscopy is 15.99493 u. Subtracting the mass of 8 electrons gives the experimental nuclear mass 15.99053 u."
      />
      <p>The mass of the <Formula>{String.raw`{}^{16}_{8}\text{O}`}</Formula> nucleus is therefore less than the total mass of its constituents by <Formula>{String.raw`0.13691\ \text{u}`}</Formula>.</p>
      <Callout type="important" title="Mass defect">
        <p>The difference in mass of a nucleus and its constituents, <Formula>{String.raw`\Delta M`}</Formula>, is called the <strong>mass defect</strong>, and is given by</p>
        <FormulaBlock
          tag="Eq. 13.7"
          latex={String.raw`\Delta M=\left[Zm_p+(A-Z)m_n\right]-M`}
          important
        />
      </Callout>
      <p>Einstein&apos;s equivalence of mass and energy explains its meaning. The mass of the oxygen nucleus is less than the sum of the masses of its constituents in the unbound state, so its equivalent energy is less than the sum of the equivalent energies of the constituents. To break the nucleus into 8 protons and 8 neutrons, this extra energy <Formula>{String.raw`\Delta M c^{2}`}</Formula> has to be supplied.</p>
      <FormulaBlock
        tag="Eq. 13.8"
        label="binding energy"
        latex={String.raw`E_b=\Delta M c^{2}`}
        important
      />
      <Expandable title="Example 13.3 — Energy equivalent of one atomic mass unit" variant="example">
        <ProblemSolution.Problem>
          <p>Find the energy equivalent of one atomic mass unit, first in joules and then in MeV. Using this, express the mass defect of <Formula>{String.raw`{}^{16}_{8}\text{O}`}</Formula> in MeV/c².</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><Formula>{String.raw`1\ \text{u}=1.6605\times 10^{-27}\ \text{kg}`}</Formula></p>
          <p>Multiplying by <Formula>{String.raw`c^{2}`}</Formula>:</p>
          <FormulaBlock
            latex={String.raw`\begin{aligned}\text{energy equivalent} &= 1.6605\times 10^{-27}\times\left(2.9979\times 10^{8}\right)^{2}\ \text{kg m}^{2}\text{s}^{-2}\\ &= 1.4924\times 10^{-10}\ \text{J}\\ &= \frac{1.4924\times 10^{-10}}{1.602\times 10^{-19}}\ \text{eV}=0.9315\times 10^{9}\ \text{eV}=931.5\ \text{MeV}\end{aligned}`}
            important
          />
          <p>or <Formula>{String.raw`1\ \text{u}=931.5\ \text{MeV}/c^{2}`}</Formula>.</p>
          <p>For <Formula>{String.raw`{}^{16}_{8}\text{O}`}</Formula>, <Formula>{String.raw`\Delta M=0.13691\ \text{u}=0.13691\times 931.5\ \text{MeV}/c^{2}=127.5\ \text{MeV}/c^{2}`}</Formula>.</p>
          <p>The energy needed to separate <Formula>{String.raw`{}^{16}_{8}\text{O}`}</Formula> into its constituents is thus 127.5 MeV.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <p>If a certain number of neutrons and protons are brought together to form a nucleus, an energy <Formula>{String.raw`E_b`}</Formula> is released. This energy is called the <strong>binding energy</strong> of the nucleus; separating the nucleus into its nucleons would require supplying the same total energy to those particles.</p>
      <ul>
        <li>We cannot actually tear a nucleus apart in this way, but the binding energy is still a convenient measure of how well a nucleus is held together.</li>
        <li>A more useful measure is the <strong>binding energy per nucleon</strong>, the ratio of the binding energy of a nucleus to its number of nucleons.</li>
      </ul>
      <FormulaBlock
        tag="Eq. 13.9"
        latex={String.raw`E_{bn}=E_b/A`}
        important
      />
      <p>Binding energy per nucleon is the average energy per nucleon needed to separate a nucleus into its individual nucleons.</p>

      <h3 id="h-13-4-3">13.4.3 Binding Energy per Nucleon and the Mass Number</h3>
      <p>Figure 13.1 plots <Formula>{String.raw`E_{bn}`}</Formula> against the mass number <Formula>{String.raw`A`}</Formula> for a large number of nuclei.</p>
      <BindingEnergyCurve />
      <p>The plot shows the following features:</p>
      <ul>
        <li><Formula>{String.raw`E_{bn}`}</Formula> is practically constant — practically independent of the atomic number — for middle mass numbers, <Formula>{String.raw`30<A<170`}</Formula>.</li>
        <li>Within that range the curve has a maximum of about <strong>8.75 MeV at A = 56</strong>, and it has a value of <strong>7.6 MeV at A = 238</strong>.</li>
        <li><Formula>{String.raw`E_{bn}`}</Formula> is lower for both light nuclei (<Formula>{String.raw`A<30`}</Formula>) and heavy nuclei (<Formula>{String.raw`A>170`}</Formula>).</li>
      </ul>
      <Highlight>The binding energy per nucleon peaks near A = 56, so moving <em>towards</em> that peak — by splitting heavy nuclei or by fusing light ones — releases energy.</Highlight>
      <p>The conclusions drawn from these observations:</p>
      <ul>
        <li>The nuclear force is attractive and sufficiently strong to produce a binding energy of a few MeV per nucleon.</li>
        <li>The constancy of the binding energy in <Formula>{String.raw`30<A<170`}</Formula> is a consequence of the short range of the nuclear force: a nucleon inside a large nucleus is influenced only by the neighbours that come within that range.</li>
        <li>If a nucleon can have at most <Formula>{String.raw`p`}</Formula> neighbours within range, its binding energy is proportional to <Formula>{String.raw`p`}</Formula>. With binding energy <Formula>{String.raw`pk`}</Formula> for the nucleus (<Formula>{String.raw`k`}</Formula> a constant with dimensions of energy), adding nucleons does not change the binding energy of a nucleon inside; most nucleons in a large nucleus lie inside and not on the surface.</li>
        <li>A very heavy nucleus, say <Formula>{String.raw`A=240`}</Formula>, has a lower binding energy per nucleon than a nucleus with <Formula>{String.raw`A=120`}</Formula>. So if <Formula>{String.raw`A=240`}</Formula> breaks into two <Formula>{String.raw`A=120`}</Formula> nuclei, the nucleons become more tightly bound and energy is released — the basis of energy production by fission.</li>
        <li>Two very light nuclei (<Formula>{String.raw`A\le 10`}</Formula>) joining to form a heavier nucleus give a final system that is more tightly bound than the initial one, so energy is released — the basis of fusion and of the energy source of the Sun.</li>
      </ul>
      <KeyPoint title="Saturation of nuclear force">The property that a given nucleon influences only nucleons close to it is called the <strong>saturation property</strong> of the nuclear force. It is what makes binding energy per nucleon a constant, about <Formula>{String.raw`pk`}</Formula>, instead of growing with <Formula>{String.raw`A`}</Formula>.</KeyPoint>
      <MistakeCard
        mistake="Reading the curve as proof that the heaviest nuclei are the most tightly bound."
        correction="The maximum of Ebn is near A = 56 (about 8.75 MeV); heavy nuclei such as A = 238 sit lower, at 7.6 MeV, so energy is released by heavy nuclei splitting and by light nuclei fusing."
        example="Fission of A = 240 into two A = 120 fragments, and fusion of two A ≤ 10 nuclei, both move the nucleons towards the peak of the curve."
      />

      <h2 id="h-13-5">13.5 Nuclear Force</h2>
      <p>The force that determines the motion of atomic electrons is the familiar Coulomb force. For average-mass nuclei the binding energy per nucleon is approximately 8 MeV — much larger than the binding energy in atoms. To hold a nucleus together there must therefore be a strong attractive force of a totally different kind: strong enough to overcome the repulsion between the positively charged protons and to bind both protons and neutrons into a tiny nuclear volume.</p>
      <p>Many features of the nuclear binding force, obtained from experiments between 1930 and 1950:</p>
      <ul>
        <li>The nuclear force is much stronger than the Coulomb force acting between charges or the gravitational force between masses.</li>
        <li>It has to dominate over the Coulomb repulsion between protons inside the nucleus, and this happens only because it is much stronger; the gravitational force is much weaker than even the Coulomb force.</li>
        <li>The nuclear force between two nucleons falls rapidly to zero once their separation is more than a few femtometres.</li>
        <li>That short range is what produces saturation of forces in a medium or large nucleus, and hence the constancy of the binding energy per nucleon.</li>
        <li>The nuclear force between neutron-neutron, proton-neutron and proton-proton pairs is approximately the same — it does not depend on electric charge.</li>
      </ul>
      <NucleonPotentialDiagram />
      <p>The potential energy is a minimum at a separation <Formula>{String.raw`r_0`}</Formula> of about <strong>0.8 fm</strong>. The force is attractive at distances larger than 0.8 fm and repulsive at distances smaller than 0.8 fm.</p>
      <Callout type="note" title="No simple formula">
        <p>Unlike Coulomb&apos;s law or Newton&apos;s law of gravitation there is no simple mathematical form of the nuclear force.</p>
      </Callout>
      <FactCard
        title="Charge independence"
        icon="⚛"
        definition="The nuclear force is the same for n–n, p–n and p–p pairs: it binds nucleons without regard to their electric charge."
      />

      <h2 id="h-13-6">13.6 Radioactivity</h2>
      <p>A. H. Becquerel discovered radioactivity in 1896, purely by accident. While studying the fluorescence and phosphorescence of compounds irradiated with visible light, he observed an interesting phenomenon.</p>
      <ul>
        <li>He illuminated pieces of uranium-potassium sulphate with visible light.</li>
        <li>He wrapped them in black paper and separated the package from a photographic plate by a piece of silver.</li>
        <li>After several hours of exposure the developed plate showed blackening — something emitted by the compound had penetrated both the black paper and the silver.</li>
      </ul>
      <p>Experiments performed subsequently showed that radioactivity was a nuclear phenomenon in which an unstable nucleus undergoes a decay.</p>
      <Callout type="important" title="Radioactivity">
        <p><strong>Radioactivity</strong> is a nuclear phenomenon in which an unstable nucleus undergoes a decay; this is referred to as <strong>radioactive decay</strong>. Three types of radioactive decay occur in nature.</p>
      </Callout>
      <Highlight>Radioactivity comes from the nucleus, not from the electron cloud: the emitted α-particles, β-particles and γ-photons are all produced when the nucleus itself rearranges.</Highlight>
      <TableCard
        title="The three types of radioactive decay"
        headers={["Decay", "Emitted entity", "What is emitted"]}
        rows={[
          {
            cells: [
              "α-decay",
              <Formula key="a">{String.raw`{}^{4}_{2}\text{He}`}</Formula>,
              "A helium nucleus.",
            ],
          },
          {
            cells: [
              "β-decay",
              "Electrons or positrons",
              "Positrons are particles with the same mass as electrons but a charge exactly opposite to that of the electron.",
            ],
          },
          {
            cells: [
              "γ-decay",
              "High-energy photons",
              "Photons of hundreds of keV or more.",
            ],
          },
        ]}
        caption="Only the emitted entity distinguishes the three modes; all three originate in the nucleus, not in the electron cloud."
      />
      <p>The quantities used to describe a radioactive sample are collected in the table below. Note what each one means, because the units differ.</p>
      <TableCard
        title="Quantities of a radioactive sample"
        headers={["Quantity", "Symbol", "Unit", "Meaning"]}
        rows={[
          {
            cells: [
              "Atomic mass unit",
              "u",
              "u",
              "Unit of mass for expressing atomic or nuclear masses; one atomic mass unit equals 1/12th of the mass of a ¹²C atom.",
            ],
          },
          { cells: ["Disintegration (decay) constant", "λ", "s⁻¹", "The decay constant of the radioactive species."] },
          {
            cells: [
              "Half-life",
              "T₁/₂",
              "s",
              "Time taken for the decay of one-half of the initial number of nuclei present in a radioactive sample.",
            ],
          },
          {
            cells: [
              "Mean life",
              "τ",
              "s",
              "Time at which the number of nuclei has been reduced to e⁻¹ of its initial value.",
            ],
          },
          { cells: ["Activity of a radioactive sample", "R", "Bq", "Measure of the activity of a radioactive source."] },
        ]}
        caption="All four radioactive quantities have the dimension of time or inverse time — never of energy."
      />
      <MistakeCard
        mistake="Writing the activity of a source in MeV, or treating Bq as an energy unit."
        correction="Activity R is measured in becquerel (Bq), i.e. s⁻¹ — inverse time. Energy released per decay is a separate quantity, measured in MeV."
        example="A source may have an activity of 5 × 10⁴ Bq while each decay releases about 5 MeV; the two numbers answer different questions."
      />
      <MistakeCard
        mistake="Using half-life and mean life as if they were the same interval."
        correction="Half-life is the time for the number of nuclei to fall to one-half of its initial value; mean life is the time for it to fall to e⁻¹, about 37%. The mean life is therefore the longer of the two."
        example="After one half-life 50% of the nuclei remain; only after one mean life does the number drop to about 37%."
      />

      <h2 id="h-13-7">13.7 Nuclear Energy</h2>
      <p>The curve of binding energy per nucleon has a long flat middle region between <Formula>{String.raw`A=30`}</Formula> and <Formula>{String.raw`A=170`}</Formula>, where the binding energy per nucleon is nearly constant at about 8.0 MeV. For <Formula>{String.raw`A<30`}</Formula> and for <Formula>{String.raw`A>170`}</Formula> it is less than 8.0 MeV.</p>
      <ul>
        <li>The greater the binding energy, the less is the total mass of a bound system such as a nucleus.</li>
        <li>So if nuclei with less total binding energy transform into nuclei with greater binding energy, there is a net release of energy.</li>
        <li>This is what happens when a heavy nucleus decays into two or more intermediate-mass fragments (<strong>fission</strong>), or when light nuclei fuse into a heavier nucleus (<strong>fusion</strong>).</li>
        <li>Exothermic chemical reactions underlie conventional sources such as coal or petroleum, with energies in the range of electron volts.</li>
        <li>In a nuclear reaction the energy release is of the order of MeV, so for the same quantity of matter nuclear sources produce a million times more energy than a chemical source.</li>
      </ul>
      <FactCard
        title="The same mass, a million times the energy"
        icon="⚡"
        definition="Fission of 1 kg of uranium generates about 10¹⁴ J; burning 1 kg of coal gives about 10⁷ J."
      />

      <h3 id="h-13-7-1">13.7.1 Fission</h3>
      <p>New possibilities emerge when we go beyond natural radioactive decays and study nuclear reactions by bombarding nuclei with other nuclear particles such as protons, neutrons and α-particles. A most important neutron-induced nuclear reaction is fission: a uranium isotope <Formula>{String.raw`{}^{235}_{92}\text{U}`}</Formula> bombarded with a neutron breaks into two intermediate-mass nuclear fragments.</p>
      <FormulaBlock
        tag="Eq. 13.10"
        latex={String.raw`{}^{1}_{0}\text{n}+{}^{235}_{92}\text{U}\rightarrow{}^{236}_{92}\text{U}\rightarrow{}^{144}_{56}\text{Ba}+{}^{89}_{36}\text{Kr}+3\,{}^{1}_{0}\text{n}`}
      />
      <p>The same reaction can produce other pairs of intermediate-mass fragments:</p>
      <FormulaBlock
        tag="Eq. 13.11"
        latex={String.raw`{}^{1}_{0}\text{n}+{}^{235}_{92}\text{U}\rightarrow{}^{236}_{92}\text{U}\rightarrow{}^{133}_{51}\text{Sb}+{}^{99}_{41}\text{Nb}+4\,{}^{1}_{0}\text{n}`}
      />
      <p>Or, as another example:</p>
      <FormulaBlock
        tag="Eq. 13.12"
        latex={String.raw`{}^{1}_{0}\text{n}+{}^{235}_{92}\text{U}\rightarrow{}^{140}_{54}\text{Xe}+{}^{94}_{38}\text{Sr}+2\,{}^{1}_{0}\text{n}`}
      />
      <FissionSchematic />
      <Highlight>Each fission of a uranium nucleus releases about 200 MeV, against only a few eV for a chemical reaction.</Highlight>
      <ul>
        <li>The fragment products are radioactive nuclei; they emit β particles in succession to achieve stable end products.</li>
        <li>The energy released — the <strong>Q value</strong> — in the fission of nuclei like uranium is of the order of 200 MeV per fissioning nucleus.</li>
        <li>The disintegration energy first appears as the kinetic energy of the fragments and neutrons.</li>
        <li>Eventually it is transferred to the surrounding matter and appears as heat.</li>
        <li>The source of energy in nuclear reactors, which produce electricity, is nuclear fission; the enormous energy released in an atom bomb comes from uncontrolled nuclear fission.</li>
      </ul>
      <p>The 200 MeV figure follows from the binding energy curve:</p>
      <Stepper
        steps={[
          {
            label: "Take a nucleus with A = 240 breaking into two fragments each of A = 120",
            description: "The fission reactions above do exactly this: one heavy nucleus leaves behind two fragments of intermediate mass.",
          },
          {
            label: "Ebn for the A = 240 nucleus is about 7.6 MeV",
            description: "Read off the heavy end of the binding energy curve.",
          },
          {
            label: "Ebn for the two A = 120 fragment nuclei is about 8.5 MeV",
            description: "These fragments sit near the flat middle of the curve.",
          },
          {
            label: "Gain in binding energy per nucleon is about 0.9 MeV",
            description: "The difference 8.5 − 7.6 MeV: each nucleon becomes more tightly bound.",
          },
          {
            label: "Total gain in binding energy is 240 × 0.9 ≈ 216 MeV",
            description: "Of the same order as the observed Q of about 200 MeV per fissioning nucleus.",
          },
        ]}
      />

      <h3 id="h-13-7-2">13.7.2 Nuclear Fusion — Energy Generation in Stars</h3>
      <p>When two light nuclei fuse to form a larger nucleus, energy is released, because the larger nucleus is more tightly bound — as the binding energy curve shows. Some energy-liberating fusion reactions are:</p>
      <FormulaBlock
        tag="13.13(a)"
        latex={String.raw`{}^{1}_{1}\text{H}+{}^{1}_{1}\text{H}\rightarrow{}^{2}_{1}\text{H}+e^{+}+\nu+0.42\ \text{MeV}`}
      />
      <FormulaBlock
        tag="13.13(b)"
        latex={String.raw`{}^{2}_{1}\text{H}+{}^{2}_{1}\text{H}\rightarrow{}^{3}_{2}\text{He}+{}^{1}_{0}\text{n}+3.27\ \text{MeV}`}
      />
      <FormulaBlock
        tag="13.13(c)"
        latex={String.raw`{}^{2}_{1}\text{H}+{}^{2}_{1}\text{H}\rightarrow{}^{3}_{1}\text{H}+{}^{1}_{1}\text{H}+4.03\ \text{MeV}`}
      />
      <ul>
        <li>In the first reaction two protons combine to form a deuteron and a positron, releasing 0.42 MeV.</li>
        <li>In reaction [13.13(b)] two deuterons combine to form the light isotope of helium.</li>
        <li>In reaction [13.13(c)] two deuterons combine to form a triton and a proton.</li>
      </ul>
      <p>For fusion to take place the two nuclei must come close enough for the attractive short-range nuclear force to act. Both are positively charged, so they experience Coulomb repulsion and must have enough energy to overcome the <strong>Coulomb barrier</strong>.</p>
      <ul>
        <li>The height of the barrier depends on the charges and radii of the two interacting nuclei.</li>
        <li>For two protons the barrier height is about 400 keV, and it is higher for nuclei with higher charges.</li>
        <li>The temperature at which two protons in a proton gas would, on average, have enough energy is given by <Formula>{String.raw`(3/2)kT=K\simeq 400\ \text{keV}`}</Formula>, which gives <Formula>{String.raw`T\simeq 3\times 10^{9}\ \text{K}`}</Formula>.</li>
      </ul>
      <Callout type="important" title="Thermonuclear fusion">
        <p>When fusion is achieved by raising the temperature of the system so that particles have enough kinetic energy to overcome the Coulomb repulsive behaviour, it is called <strong>thermonuclear fusion</strong>.</p>
      </Callout>
      <p>Thermonuclear fusion is the source of energy output in the interior of stars. The interior of the Sun has a temperature of <Formula>{String.raw`1.5\times 10^{7}\ \text{K}`}</Formula>, considerably less than the estimated temperature required for fusion of particles of average energy — so fusion in the Sun involves protons whose energies are much above the average.</p>
      <p>The fusion reaction in the Sun is a multi-step process in which hydrogen is burned into helium; the fuel is the hydrogen in its core. The proton–proton (p, p) cycle is:</p>
      <ol>
        <li><Formula>{String.raw`{}^{1}_{1}\text{H}+{}^{1}_{1}\text{H}\rightarrow{}^{2}_{1}\text{H}+e^{+}+\nu+0.42\ \text{MeV}`}</Formula></li>
        <li><Formula>{String.raw`e^{+}+e^{-}\rightarrow\gamma+\gamma+1.02\ \text{MeV}`}</Formula></li>
        <li><Formula>{String.raw`{}^{2}_{1}\text{H}+{}^{1}_{1}\text{H}\rightarrow{}^{3}_{2}\text{He}+\gamma+5.49\ \text{MeV}`}</Formula></li>
        <li><Formula>{String.raw`{}^{3}_{2}\text{He}+{}^{3}_{2}\text{He}\rightarrow{}^{4}_{2}\text{He}+{}^{1}_{1}\text{H}+{}^{1}_{1}\text{H}+12.86\ \text{MeV}`}</Formula></li>
      </ol>
      <p>For the fourth reaction to occur the first three must occur twice, in which case two light helium nuclei unite to form an ordinary helium nucleus. Combining 2(i) + 2(ii) + 2(iii) + (iv) gives the net effect:</p>
      <FormulaBlock
        tag="Eq. 13.15"
        latex={String.raw`4\,{}^{1}_{1}\text{H}+4e^{-}\rightarrow{}^{4}_{2}\text{He}+2e^{-}+2\nu+6\gamma+26.7\ \text{MeV}`}
        important
      />
      <p>Thus four hydrogen atoms combine to form a <Formula>{String.raw`{}^{4}_{2}\text{He}`}</Formula> atom with a release of 26.7 MeV of energy.</p>
      <Highlight>Four protons in, one helium nucleus out, 26.7 MeV released — this is the reaction that keeps the Sun shining.</Highlight>
      <FusionSchematic />
      <ul>
        <li>Helium is not the only element synthesized in the interior of a star. As the hydrogen in the core is depleted and becomes helium, the core starts to cool.</li>
        <li>The star begins to collapse under its own gravity, which raises the temperature of the core.</li>
        <li>If this temperature rises to about <Formula>{String.raw`10^{8}\ \text{K}`}</Formula>, fusion takes place again, this time of helium nuclei into carbon.</li>
        <li>This kind of process can generate, through fusion, elements of higher and higher mass number.</li>
        <li>Elements more massive than those near the peak of the binding energy curve cannot be produced this way.</li>
        <li>The age of the Sun is about <Formula>{String.raw`5\times 10^{9}\ \text{y}`}</Formula>, and there is enough hydrogen to keep it going for another 5 billion years.</li>
        <li>After that hydrogen burning stops, the Sun cools and collapses under gravity, raising the core temperature; its outer envelope expands and it becomes a <strong>red giant</strong>.</li>
      </ul>

      <h3 id="h-13-7-3">13.7.3 Controlled Thermonuclear Fusion</h3>
      <p>The natural thermonuclear fusion process of a star is replicated in a thermonuclear fusion device. In controlled fusion reactors the aim is to generate steady power by heating the nuclear fuel to a temperature in the range of <Formula>{String.raw`10^{8}\ \text{K}`}</Formula>.</p>
      <ul>
        <li>At these temperatures the fuel is a mixture of positive ions and electrons — a <strong>plasma</strong>.</li>
        <li>The challenge is to confine this plasma, since no container can stand such a high temperature.</li>
        <li>Several countries around the world, including India, are developing techniques in this connection.</li>
        <li>If successful, fusion reactors will hopefully supply almost unlimited power to humanity.</li>
      </ul>
      <Comparison
        columns={[
          {
            title: "Fission",
            children: (
              <ul>
                <li>A heavy nucleus (e.g. ²³⁵U) splits into two intermediate-mass fragments.</li>
                <li>Triggered by absorbing a neutron; the fragments are radioactive and emit β particles in succession.</li>
                <li>Energy released: about 200 MeV per fissioning nucleus, appearing as kinetic energy of fragments and neutrons, then as heat.</li>
                <li>Already the working source of nuclear reactors producing electricity — and of the atom bomb when uncontrolled.</li>
              </ul>
            ),
          },
          {
            title: "Fusion",
            children: (
              <ul>
                <li>Light nuclei (e.g. hydrogen) join to form a heavier nucleus such as ⁴He.</li>
                <li>Needs enough energy to overcome the Coulomb barrier: about 400 keV for two protons, i.e. T ≈ 3 × 10⁹ K on average.</li>
                <li>Energy released: 26.7 MeV for four hydrogen nuclei fused into helium, the energy source of stars.</li>
                <li>Still at the stage of controlled reactors: the plasma at 10⁸ K must be confined without a container.</li>
              </ul>
            ),
          },
        ]}
      />

      <Expandable title="Example 13.4 — Balanced equations and mass-energy conversion" variant="example">
        <ProblemSolution.Problem>
          <p>Answer the following questions:</p>
          <p>(a) Are the equations of nuclear reactions (such as those given in Section 13.7) &ldquo;balanced&rdquo; in the sense a chemical equation (e.g., <Formula>{String.raw`2\text{H}_2+\text{O}_2\rightarrow 2\text{H}_2\text{O}`}</Formula>) is? If not, in what sense are they balanced on both sides?</p>
          <p>(b) If both the number of protons and the number of neutrons are conserved in each nuclear reaction, in what way is mass converted into energy (or vice-versa) in a nuclear reaction?</p>
          <p>(c) A general impression exists that mass-energy interconversion takes place only in nuclear reactions and never in chemical reactions. This is, strictly speaking, incorrect. Explain.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            <strong>(a)</strong> A chemical equation is balanced in the sense that the number of atoms
            of each element is the same on both sides. A chemical reaction merely alters the original
            combinations of atoms. In a nuclear reaction, elements may be transmuted, so the number of
            atoms of each element is not necessarily conserved. However, the number of protons and the
            number of neutrons are both separately conserved. (Actually even this is not strictly true
            at very high energies — what is strictly conserved is the total charge and total baryon
            number.) In Eq. 13.10 the number of protons and the number of neutrons are the same on the
            two sides of the equation.
          </p>
          <p>
            <strong>(b)</strong> The binding energy of a nucleus gives a negative contribution to the
            mass of the nucleus — the mass defect. Since proton number and neutron number are conserved
            in a nuclear reaction, the total rest mass of neutrons and protons is the same on either
            side. But the total binding energy of the nuclei on the left need not equal that on the
            right. The difference in these binding energies appears as energy released or absorbed. Since
            binding energy contributes to mass, we say that the difference in the total mass of the
            nuclei on the two sides is converted into energy or vice-versa. It is in this sense that a
            nuclear reaction is an example of mass-energy interconversion.
          </p>
          <p>
            <strong>(c)</strong> From the point of view of mass-energy interconversion a chemical
            reaction is similar to a nuclear reaction in principle. The energy released or absorbed can
            be traced to the difference in chemical (not nuclear) binding energies of atoms and
            molecules on the two sides. Since chemical binding energy also gives a negative contribution
            (mass defect) to the total mass, we can equally well say that the difference in total mass of
            atoms or molecules on the two sides gets converted into energy or vice-versa. However, the
            mass defects in a chemical reaction are almost a million times smaller than those in a
            nuclear reaction — which is the reason for the general impression, incorrect, that
            mass-energy interconversion does not take place in a chemical reaction.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-13-equations">Key Equations — Revision Board</h2>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Atomic mass unit</p>
          <FormulaBlock latex={String.raw`1\ \text{u}=1.660539\times 10^{-27}\ \text{kg}=931.5\ \text{MeV}/c^{2}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Nuclear radius and density</p>
          <FormulaBlock latex={String.raw`R=R_0A^{1/3},\qquad R_0=1.2\ \text{fm}`} important />
          <FormulaBlock latex={String.raw`\rho=\frac{m}{\frac{4}{3}\pi R^{3}}\approx 2.3\times 10^{17}\ \text{kg m}^{-3}`} />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Mass–energy equivalence</p>
          <FormulaBlock latex={String.raw`E=mc^{2}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Mass defect and binding energy</p>
          <FormulaBlock latex={String.raw`\Delta M=\left[Zm_p+(A-Z)m_n\right]-M`} important />
          <FormulaBlock latex={String.raw`E_b=\Delta Mc^{2}`} />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Binding energy per nucleon</p>
          <FormulaBlock latex={String.raw`E_{bn}=\frac{E_b}{A}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Fission of uranium-235</p>
          <FormulaBlock latex={String.raw`{}^{1}_{0}\text{n}+{}^{235}_{92}\text{U}\rightarrow{}^{144}_{56}\text{Ba}+{}^{89}_{36}\text{Kr}+3\,{}^{1}_{0}\text{n}+200\ \text{MeV}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Net fusion in the Sun</p>
          <FormulaBlock latex={String.raw`4\,{}^{1}_{1}\text{H}+4e^{-}\rightarrow{}^{4}_{2}\text{He}+2e^{-}+2\nu+6\gamma+26.7\ \text{MeV}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Q value of a reaction</p>
          <FormulaBlock latex={String.raw`Q=K_{\text{final}}-K_{\text{initial}}=\left(\sum m_{\text{initial}}-\sum m_{\text{final}}\right)c^{2}`} important />
        </FormulaCard>
      </div>

      <h2 id="h-13-exercises">Back-of-Chapter Exercises</h2>
      <p className="text-sm text-muted-foreground">All 10 NCERT exercises with the complete answer key. Useful data: 1 u = 931.5 MeV/c², e = 1.6 × 10⁻¹⁹ C, N = 6.023 × 10²³ per mole, 1/(4πε₀) = 9 × 10⁹ N m²/C², 1 MeV = 1.6 × 10⁻¹³ J, 1 year = 3.154 × 10⁷ s, m_H = 1.007825 u, m_n = 1.008665 u, m(⁴He) = 4.002603 u, m_e = 0.000548 u. Try each one before opening the panel.</p>
      <Expandable title="Exercises 13.1 – 13.10 — questions and answer key" variant="exercise">
        <ExerciseQa
          questions={[
            "Obtain the binding energy (in MeV) of a nitrogen nucleus (14,7 N), given m(14,7 N) = 14.00307 u.",
            "Obtain the binding energy of the nuclei 56,26 Fe and 209,83 Bi in units of MeV from the following data: m(56,26 Fe) = 55.934939 u, m(209,83 Bi) = 208.980388 u.",
            "A given coin has a mass of 3.0 g. Calculate the nuclear energy that would be required to separate all the neutrons and protons from each other. For simplicity assume that the coin is entirely made of 63,29 Cu atoms (of mass 62.92960 u).",
            "Obtain approximately the ratio of the nuclear radii of the gold isotope 197,79 Au and the silver isotope 107,47 Ag.",
            "The Q value of a nuclear reaction A + b -> C + d is defined by Q = [m_A + m_b - m_C - m_d]c^2, where the masses refer to the respective nuclei. Determine from the given data the Q value of the following reactions and state whether the reactions are exothermic or endothermic. (i) 1,1 H + 3,1 H -> 2,1 H + 2,1 H (ii) 12,6 C + 12,6 C -> 20,10 Ne + 4,2 He. Atomic masses: m(2,1 H) = 2.014102 u, m(3,1 H) = 3.016049 u, m(12,6 C) = 12.000000 u, m(20,10 Ne) = 19.992439 u.",
            "Suppose we think of fission of a 56,26 Fe nucleus into two equal fragments, 28,13 Al. Is the fission energetically possible? Argue by working out Q of the process. Given m(56,26 Fe) = 55.93494 u and m(28,13 Al) = 27.98191 u.",
            "The fission properties of 239,94 Pu are very similar to those of 235,92 U. The average energy released per fission is 180 MeV. How much energy, in MeV, is released if all the atoms in 1 kg of pure 239,94 Pu undergo fission?",
            "How long can an electric lamp of 100 W be kept glowing by fusion of 2.0 kg of deuterium? Take the fusion reaction as 2,1 H + 2,1 H -> 3,2 He + n + 3.27 MeV.",
            "Calculate the height of the potential barrier for a head-on collision of two deuterons. (Hint: the height of the potential barrier is given by the Coulomb repulsion between the two deuterons when they just touch each other. Assume that they can be taken as hard spheres of radius 2.0 fm.)",
            "From the relation R = R0 A^1/3, where R0 is a constant and A is the mass number of a nucleus, show that the nuclear matter density is nearly constant (i.e. independent of A).",
          ]}
          answers={[
            "7 protons and 7 neutrons. Delta M = 7(1.007825) + 7(1.008665) - 14.00307 = 0.11236 u. Binding energy = 0.11236 x 931.5 = 104.66 MeV, i.e. about 7.5 MeV per nucleon.",
            "For Fe: Delta M = 26(1.007825) + 30(1.008665) - 55.934939 = 0.528461 u, so Eb = 0.528461 x 931.5 = 492.26 MeV (8.79 MeV per nucleon). For Bi: Delta M = 83(1.007825) + 126(1.008665) - 208.980388 = 1.760878 u, so Eb = 1.760878 x 931.5 = 1640.2 MeV (7.85 MeV per nucleon).",
            "For Cu: Delta M = 29(1.007825) + 34(1.008665) - 62.92960 = 0.591935 u, so each nucleus needs 0.591935 x 931.5 = 551.4 MeV. Number of atoms = 3.0 x 10^-3 / (62.92960 x 1.66 x 10^-27) = 2.87 x 10^22. Total energy = 2.87 x 10^22 x 551.4 = 1.58 x 10^25 MeV, i.e. about 2.5 x 10^12 J.",
            "R is proportional to A^1/3, so R(Au)/R(Ag) = (197/107)^1/3 = (1.841)^1/3 = 1.23.",
            "(i) Q = [m(1,1 H) + m(3,1 H) - 2m(2,1 H)]c^2 = [1.007825 + 3.016049 - 4.028204] x 931.5 = -4.03 MeV: endothermic, energy must be supplied. (ii) Q = [2m(12,6 C) - m(20,10 Ne) - m(4,2 He)]c^2 = [24.000000 - 19.992439 - 4.002603] x 931.5 = +4.62 MeV: exothermic.",
            "Q = [m(56,26 Fe) - 2m(28,13 Al)]c^2 = [55.93494 - 55.96382] x 931.5 = -26.9 MeV. The Q value is negative, so energy would have to be supplied: the fission is not energetically possible.",
            "Number of atoms in 1 kg = (1000/239) x 6.023 x 10^23 = 2.52 x 10^24. Energy = 2.52 x 10^24 x 180 MeV = 4.54 x 10^26 MeV, i.e. about 7.3 x 10^13 J.",
            "Number of deuterium atoms in 2.0 kg = (2000/2.014) x 6.023 x 10^23 = 5.98 x 10^26, giving 2.99 x 10^26 fusions at 3.27 MeV each: total energy = 9.8 x 10^26 MeV = 1.57 x 10^14 J. Time = 1.57 x 10^14 / 100 = 1.57 x 10^12 s, i.e. about 5 x 10^4 years.",
            "The centres are 2R = 4.0 fm = 4.0 x 10^-15 m apart when the deuterons just touch, so V = (1/4 pi epsilon_0) e^2/(4.0 x 10^-15) = 9 x 10^9 x (1.6 x 10^-19)^2 / (4.0 x 10^-15) = 5.76 x 10^-14 J = 360 keV.",
            "Mass of the nucleus is about M = A m, and its volume is (4/3) pi R^3 = (4/3) pi R0^3 A. Hence density = M / volume = A m / [(4/3) pi R0^3 A] = m / [(4/3) pi R0^3], independent of A. With R0 = 1.2 fm this gives about 2.3 x 10^17 kg m^-3.",
          ]}
        />
      </Expandable>
    </>
  );
}
