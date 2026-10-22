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
/* Figure shell + SVG primitives (local to this chapter)               */
/* ------------------------------------------------------------------ */

const WAVE = "#e11d48";
const SECONDARY = "#10b981";
const VIOLET = "#8b5cf6";
const AMBER = "#f59e0b";
const STRUCT = "var(--foreground)";
const MUTED = "var(--muted-foreground)";

function Figure({ n, caption, children }: { n: string; caption: string; children: ReactNode }) {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
          Fig. {n}
        </span>
      </div>
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
    <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={color === MUTED ? 500 : 700} fill={color}>
      {children}
    </text>
  );
}

function Ray({
  d,
  color = WAVE,
  dash,
  width = 1.8,
}: {
  d: string;
  color?: string;
  dash?: string;
  width?: number;
}) {
  return (
    <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash} />
  );
}

function Arrow({ x, y, angle = 0, color = WAVE, size = 5 }: { x: number; y: number; angle?: number; color?: string; size?: number }) {
  return (
    <polygon
      points={`0,0 ${-size * 1.8},${-size * 0.8} ${-size * 1.8},${size * 0.8}`}
      fill={color}
      transform={`translate(${x} ${y}) rotate(${angle})`}
    />
  );
}

/* ------------------------------------------------------------------ */
/* 10.1 / 10.2 — wavefronts and the Huygens construction               */
/* ------------------------------------------------------------------ */

function WavefrontShapes() {
  return (
    <Figure
      n="10.1"
      caption="(a) A point source sends out spherical wavefronts. (b) Far from the source a small patch of the sphere is practically flat — a plane wave. The rays are always perpendicular to the wavefronts."
    >
      <svg viewBox="0 0 520 205" className="h-auto w-full" role="img" aria-label="Spherical and plane wavefronts">
        <circle cx="40" cy="100" r="42" fill="none" stroke={WAVE} strokeWidth="1.6" />
        <circle cx="40" cy="100" r="82" fill="none" stroke={WAVE} strokeWidth="1.4" strokeOpacity="0.7" />
        <circle cx="40" cy="100" r="122" fill="none" stroke={WAVE} strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="40" cy="100" r="3.4" fill={STRUCT} />
        <Ray d="M 44 100 L 168 100" color={MUTED} dash="4 4" width={1.1} />
        <Ray d="M 44 78 L 150 22" color={MUTED} dash="4 4" width={1.1} />
        <Ray d="M 44 122 L 150 178" color={MUTED} dash="4 4" width={1.1} />
        <Arrow x={166} y={100} angle={0} color={MUTED} />
        <Lbl x={40} y={118} color={STRUCT}>O</Lbl>
        <Lbl x={92} y={40} anchor="start">spherical wavefront</Lbl>
        <Lbl x={60} y={196}>(a) point source</Lbl>

        <line x1="300" y1="22" x2="300" y2="178" stroke={WAVE} strokeWidth="1.6" />
        <line x1="352" y1="22" x2="352" y2="178" stroke={WAVE} strokeWidth="1.5" strokeOpacity="0.75" />
        <line x1="404" y1="22" x2="404" y2="178" stroke={WAVE} strokeWidth="1.4" strokeOpacity="0.5" />
        <Ray d="M 258 100 L 446 100" color={MUTED} width={1.3} />
        <Arrow x={444} y={100} color={MUTED} />
        <Lbl x={420} y={88} anchor="middle">ray</Lbl>
        <Lbl x={300} y={196}>(b) plane wavefronts</Lbl>
        <Lbl x={420} y={40} anchor="middle">direction of</Lbl>
        <Lbl x={420} y={52} anchor="middle">propagation</Lbl>
      </svg>
    </Figure>
  );
}

function HuygensConstruction() {
  return (
    <Figure
      n="10.2"
      caption="F₁F₂ is the spherical wavefront at t = 0. Secondary wavelets of radius vτ are drawn from every point of it; their forward envelope G₁G₂ is the wavefront at the later time τ. The backward envelope D₁D₂ (dashed) is the backwave, which does not exist."
    >
      <svg viewBox="0 0 460 205" className="h-auto w-full" role="img" aria-label="Huygens construction for a spherical wavefront">
        <circle cx="70" cy="100" r="90" fill="none" stroke={WAVE} strokeWidth="1.9" />
        <circle cx="70" cy="100" r="116" fill="none" stroke={SECONDARY} strokeWidth="1.9" />
        <circle cx="70" cy="100" r="64" fill="none" stroke={MUTED} strokeWidth="1.2" strokeDasharray="4 4" />
        <circle cx="158.9" cy="42.1" r="26" fill="none" stroke={AMBER} strokeWidth="1.1" strokeDasharray="3 3" />
        <circle cx="160" cy="100" r="26" fill="none" stroke={AMBER} strokeWidth="1.1" strokeDasharray="3 3" />
        <circle cx="158.9" cy="157.9" r="26" fill="none" stroke={AMBER} strokeWidth="1.1" strokeDasharray="3 3" />
        <Ray d="M 70 100 L 158.9 42.1" color={MUTED} dash="3 3" width={1} />
        <Ray d="M 70 100 L 186 100" color={MUTED} dash="3 3" width={1} />
        <Ray d="M 70 100 L 158.9 157.9" color={MUTED} dash="3 3" width={1} />
        <circle cx="70" cy="100" r="3.2" fill={STRUCT} />
        <circle cx="158.9" cy="42.1" r="2.6" fill={STRUCT} />
        <circle cx="160" cy="100" r="2.6" fill={STRUCT} />
        <circle cx="158.9" cy="157.9" r="2.6" fill={STRUCT} />
        <Lbl x={70} y={118} color={STRUCT}>O</Lbl>
        <Lbl x={176} y={30} color={WAVE} anchor="start">F₁</Lbl>
        <Lbl x={176} y={176} color={WAVE} anchor="start">F₂</Lbl>
        <Lbl x={196} y={24} color={SECONDARY} anchor="start">G₁</Lbl>
        <Lbl x={196} y={186} color={SECONDARY} anchor="start">G₂</Lbl>
        <Lbl x={60} y={40} color={MUTED} anchor="start" size={9}>D₁</Lbl>
        <Lbl x={60} y={172} color={MUTED} anchor="start" size={9}>D₂</Lbl>
        <Lbl x={268} y={96} anchor="start">secondary</Lbl>
        <Lbl x={268} y={108} anchor="start">wavelets (radius vτ)</Lbl>
        <Lbl x={268} y={140} anchor="start" color={SECONDARY}>envelope =</Lbl>
        <Lbl x={268} y={152} anchor="start" color={SECONDARY}>new wavefront</Lbl>
        <Lbl x={84} y={140} color={MUTED} size={9}>backwave</Lbl>
      </svg>
    </Figure>
  );
}

function RefractionHuygens() {
  const hatch = [40, 90, 140, 190, 240, 290, 340, 380];
  return (
    <Figure
      n="10.4"
      caption="A plane wave AB falls at angle i on the surface PP′ between medium 1 (speed v₁) and medium 2 (speed v₂ < v₁). While B travels to C, the wavelet from A grows to AE; the tangent CE is the refracted wavefront, and it is tilted towards the normal."
    >
      <svg viewBox="0 0 410 215" className="h-auto w-full" role="img" aria-label="Refraction of a plane wavefront at a denser medium">
        <line x1="18" y1="110" x2="392" y2="110" stroke={STRUCT} strokeWidth="2.2" />
        {hatch.map((x) => (
          <line key={x} x1={x} y1="110" x2={x - 12} y2="123" stroke={MUTED} strokeWidth="1" strokeOpacity="0.45" />
        ))}
        <Ray d="M 150 28 L 150 200" color={MUTED} dash="5 4" width={1.1} />
        <Ray d="M 330 34 L 330 172" color={MUTED} dash="5 4" width={1.1} />
        <circle cx="150" cy="110" r="76.4" fill="none" stroke={AMBER} strokeWidth="1.1" strokeDasharray="3 3" />
        <Ray d="M 54 10 L 150 110" color={WAVE} width={1.9} />
        <Ray d="M 255.6 21.4 L 330 110" color={WAVE} width={1.9} />
        <Ray d="M 330 110 L 349 133" color={WAVE} width={1.2} dash="4 4" />
        <Ray d="M 150 110 L 182.4 179.2" color={SECONDARY} width={1.9} />
        <Ray d="M 150 110 L 255.6 21.4" color={VIOLET} width={2.4} />
        <Ray d="M 330 110 L 182.4 179.2" color={VIOLET} width={2.4} />
        <Arrow x={140} y={100} angle={140} color={WAVE} size={4} />
        <Arrow x={170} y={148} angle={65} color={SECONDARY} size={4} />
        <Ray d="M 330 80 A 30 30 0 0 0 311 87" color={AMBER} width={1.3} />
        <Ray d="M 150 140 A 30 30 0 0 1 162.7 137.2" color={AMBER} width={1.3} />
        <circle cx="150" cy="110" r="2.8" fill={STRUCT} />
        <circle cx="330" cy="110" r="2.8" fill={STRUCT} />
        <Lbl x={140} y={104} color={STRUCT}>A</Lbl>
        <Lbl x={264} y={18} color={VIOLET}>B</Lbl>
        <Lbl x={338} y={104} color={STRUCT}>C</Lbl>
        <Lbl x={176} y={194} color={VIOLET}>E</Lbl>
        <Lbl x={10} y={104} color={STRUCT}>P</Lbl>
        <Lbl x={378} y={104} color={STRUCT}>P′</Lbl>
        <Lbl x={316} y={72} color={AMBER}>i</Lbl>
        <Lbl x={172} y={150} color={AMBER}>r</Lbl>
        <Lbl x={34} y={48} anchor="start">medium 1 (v₁)</Lbl>
        <Lbl x={34} y={152} anchor="start">medium 2 (v₂)</Lbl>
        <Lbl x={262} y={58} anchor="start" size={9}>BC = v₁τ</Lbl>
        <Lbl x={196} y={196} anchor="start" size={9}>AE = v₂τ</Lbl>
      </svg>
    </Figure>
  );
}

function RarerRefraction() {
  return (
    <Figure
      n="10.5"
      caption="The same construction for a rarer second medium (v₂ > v₁). The refracted wavefront is now tilted away from the normal, so r > i — and at i = i_c the refracted ray would graze the surface (r = 90°)."
    >
      <svg viewBox="0 0 400 225" className="h-auto w-full" role="img" aria-label="Refraction of a plane wavefront at a rarer medium">
        <line x1="18" y1="120" x2="382" y2="120" stroke={STRUCT} strokeWidth="2.2" />
        <Ray d="M 130 40 L 130 190" color={MUTED} dash="5 4" width={1.1} />
        <Ray d="M 290 40 L 290 190" color={MUTED} dash="5 4" width={1.1} />
        <Ray d="M 44 22 L 130 120" color={WAVE} width={1.9} />
        <Ray d="M 250 40.7 L 290 120" color={WAVE} width={1.9} />
        <Ray d="M 130 120 L 208.4 200" color={SECONDARY} width={1.9} />
        <Ray d="M 130 120 L 250 40.7" color={VIOLET} width={2.4} />
        <Ray d="M 290 120 L 208.4 200" color={VIOLET} width={2.4} />
        <Ray d="M 290 94 A 26 26 0 0 0 274.3 99" color={AMBER} width={1.3} />
        <Ray d="M 130 146 A 26 26 0 0 1 148.2 138.6" color={AMBER} width={1.3} />
        <circle cx="130" cy="120" r="2.8" fill={STRUCT} />
        <circle cx="290" cy="120" r="2.8" fill={STRUCT} />
        <Lbl x={120} y={114} color={STRUCT}>A</Lbl>
        <Lbl x={256} y={36} color={VIOLET}>B</Lbl>
        <Lbl x={298} y={114} color={STRUCT}>C</Lbl>
        <Lbl x={202} y={214} color={VIOLET}>E</Lbl>
        <Lbl x={278} y={88} color={AMBER}>i</Lbl>
        <Lbl x={156} y={158} color={AMBER}>r</Lbl>
        <Lbl x={26} y={60} anchor="start">medium 1 (v₁)</Lbl>
        <Lbl x={26} y={164} anchor="start">medium 2 (v₂ &gt; v₁)</Lbl>
        <Lbl x={210} y={140} anchor="start" size={9}>r &gt; i</Lbl>
      </svg>
    </Figure>
  );
}

function ReflectionHuygens() {
  const hatch = [70, 120, 170, 220, 270, 320, 370];
  return (
    <Figure
      n="10.6"
      caption="Reflection of the plane wavefront AB by the surface MN. While B reaches C, the wavelet from A grows to AE = BC; the tangent CE is the reflected wavefront. Triangles EAC and BAC are congruent, so i = r."
    >
      <svg viewBox="0 0 410 200" className="h-auto w-full" role="img" aria-label="Reflection of a plane wavefront at a plane surface">
        <line x1="30" y1="150" x2="392" y2="150" stroke={STRUCT} strokeWidth="2.4" />
        {hatch.map((x) => (
          <line key={x} x1={x} y1="150" x2={x - 12} y2={163} stroke={MUTED} strokeWidth="1" strokeOpacity="0.45" />
        ))}
        <Ray d="M 110 60 L 110 150" color={MUTED} dash="5 4" width={1.1} />
        <Ray d="M 330 60 L 330 150" color={MUTED} dash="5 4" width={1.1} />
        <Ray d="M 26 40 L 110 150" color={WAVE} width={1.9} />
        <Ray d="M 239.1 31.7 L 330 150" color={WAVE} width={1.9} />
        <Ray d="M 110 150 L 200.9 31.7" color={SECONDARY} width={1.9} />
        <Ray d="M 110 150 L 239.1 31.7" color={VIOLET} width={2.4} />
        <Ray d="M 330 150 L 200.9 31.7" color={VIOLET} width={2.4} />
        <Arrow x={272} y={75} angle={129} color={WAVE} size={4} />
        <Arrow x={150} y={98} angle={-50} color={SECONDARY} size={4} />
        <Ray d="M 330 120 A 30 30 0 0 0 311 127" color={AMBER} width={1.3} />
        <Ray d="M 110 120 A 30 30 0 0 1 129.3 127" color={AMBER} width={1.3} />
        <circle cx="110" cy="150" r="2.8" fill={STRUCT} />
        <circle cx="330" cy="150" r="2.8" fill={STRUCT} />
        <Lbl x={100} y={144} color={STRUCT}>A</Lbl>
        <Lbl x={238} y={24} color={VIOLET}>B</Lbl>
        <Lbl x={338} y={144} color={STRUCT}>C</Lbl>
        <Lbl x={196} y={24} color={VIOLET}>E</Lbl>
        <Lbl x={316} y={112} color={AMBER}>i</Lbl>
        <Lbl x={124} y={112} color={AMBER}>r</Lbl>
        <Lbl x={30} y={142} anchor="start" color={STRUCT}>M</Lbl>
        <Lbl x={376} y={142} anchor="start" color={STRUCT}>N</Lbl>
        <Lbl x={244} y={186} anchor="start" size={9}>AB — incident wavefront</Lbl>
        <Lbl x={244} y={198} anchor="start" size={9}>CE — reflected wavefront</Lbl>
      </svg>
    </Figure>
  );
}
/* ------------------------------------------------------------------ */
/* 10.3.3 — what the wavefront does inside a prism and a lens          */
/* ------------------------------------------------------------------ */

function WavefrontsThroughOptics() {
  return (
    <Figure
      n="10.7"
      caption="Wavefronts (a) through a thin prism, (b) through a convex lens, (c) reflected by a concave mirror. Glass slows the wave, so the part of the wavefront that travels through the most glass is delayed the most — and the flat wavefront tilts (prism) or becomes spherical and converges (lens, mirror)."
    >
      <svg viewBox="0 0 560 200" className="h-auto w-full" role="img" aria-label="Wavefronts through a prism, a lens and a concave mirror">
        <polygon points="60,40 130,150 20,150" fill={VIOLET} fillOpacity="0.12" stroke={STRUCT} strokeWidth="1.6" />
        <line x1="16" y1="46" x2="34" y2="86" stroke={WAVE} strokeWidth="1.4" />
        <line x1="44" y1="40" x2="62" y2="80" stroke={WAVE} strokeWidth="1.4" />
        <line x1="134" y1="70" x2="152" y2="110" stroke={SECONDARY} strokeWidth="1.4" />
        <line x1="152" y1="66" x2="170" y2="106" stroke={SECONDARY} strokeWidth="1.4" strokeOpacity="0.7" />
        <Ray d="M 168 138 L 190 152" color={AMBER} width={1.2} />
        <Lbl x={76} y={168}>(a) prism — wavefront tilts</Lbl>

        <ellipse cx="290" cy="95" rx="17" ry="52" fill={VIOLET} fillOpacity="0.12" stroke={STRUCT} strokeWidth="1.6" />
        <line x1="214" y1="45" x2="214" y2="145" stroke={WAVE} strokeWidth="1.5" />
        <line x1="240" y1="45" x2="240" y2="145" stroke={WAVE} strokeWidth="1.4" strokeOpacity="0.75" />
        <Ray d="M 272 60 Q 330 78 396 92" color={SECONDARY} width={1.5} />
        <Ray d="M 272 130 Q 330 112 396 98" color={SECONDARY} width={1.5} />
        <Ray d="M 272 95 L 396 95" color={SECONDARY} width={1.4} />
        <circle cx="398" cy="95" r="3" fill={AMBER} />
        <Lbl x={404} y={99} color={AMBER} anchor="start">F</Lbl>
        <Lbl x={290} y={168}>(b) convex lens — flat → spherical</Lbl>

        <path d="M 500 30 Q 532 95 500 160" fill="none" stroke={STRUCT} strokeWidth="2.4" />
        <line x1="428" y1="46" x2="428" y2="144" stroke={WAVE} strokeWidth="1.5" />
        <line x1="452" y1="46" x2="452" y2="144" stroke={WAVE} strokeWidth="1.4" strokeOpacity="0.75" />
        <Ray d="M 488 48 L 522 48" color={SECONDARY} width={1.3} />
        <Ray d="M 488 142 L 522 142" color={SECONDARY} width={1.3} />
        <circle cx="470" cy="95" r="3" fill={AMBER} />
        <Lbl x={462} y={112} color={AMBER}>F</Lbl>
        <Lbl x={470} y={168}>(c) concave mirror</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 10.5 — Young's double slit geometry                                 */
/* ------------------------------------------------------------------ */

function DoubleSlitGeometry() {
  return (
    <Figure
      n="10.12"
      caption="Young's arrangement. Light from S falls on the two pinholes S₁ and S₂; the two sets of spherical waves overlap on the screen GG′. For a point P at distance x from the centre C, the path difference is S₂P − S₁P ≈ d sinθ ≈ xd/D."
    >
      <svg viewBox="0 0 500 215" className="h-auto w-full" role="img" aria-label="Young's double slit geometry">
        <line x1="150" y1="18" x2="150" y2="78" stroke={STRUCT} strokeWidth="3.4" />
        <line x1="150" y1="122" x2="150" y2="182" stroke={STRUCT} strokeWidth="3.4" />
        <line x1="430" y1="14" x2="430" y2="192" stroke={MUTED} strokeWidth="1.4" />
        <circle cx="48" cy="100" r="3.4" fill={AMBER} />
        <Ray d="M 51 97 L 150 80" color={AMBER} dash="4 3" width={1.2} />
        <Ray d="M 51 103 L 150 120" color={AMBER} dash="4 3" width={1.2} />
        <Ray d="M 150 80 L 430 50" color={WAVE} width={1.5} />
        <Ray d="M 150 120 L 430 50" color={SECONDARY} width={1.5} />
        <Ray d="M 150 100 L 430 108" color={MUTED} dash="5 4" width={1.1} />
        <Ray d="M 137 103 L 149 84" color={VIOLET} dash="3 3" width={1.2} />
        <Ray d="M 150 100 A 42 42 0 0 1 189.6 92.6" color={AMBER} width={1.2} />
        <circle cx="150" cy="80" r="2.8" fill={STRUCT} />
        <circle cx="150" cy="120" r="2.8" fill={STRUCT} />
        <circle cx="430" cy="50" r="3" fill={WAVE} />
        <circle cx="430" cy="108" r="3" fill={STRUCT} />
        <Lbl x={44} y={116} color={AMBER}>S</Lbl>
        <Lbl x={160} y={72} color={STRUCT} anchor="start">S₁</Lbl>
        <Lbl x={160} y={136} color={STRUCT} anchor="start">S₂</Lbl>
        <Lbl x={127} y={110} color={STRUCT}>M</Lbl>
        <Lbl x={196} y={92} color={AMBER}>θ</Lbl>
        <Lbl x={438} y={54} color={WAVE} anchor="start">P</Lbl>
        <Lbl x={438} y={112} color={STRUCT} anchor="start">C</Lbl>
        <Lbl x={438} y={22} color={STRUCT} anchor="start">G</Lbl>
        <Lbl x={438} y={190} color={STRUCT} anchor="start">G′</Lbl>
        <Lbl x={444} y={84} anchor="start" size={9}>x</Lbl>
        <Ray d="M 132 88 L 132 112" color={AMBER} width={1.2} />
        <Lbl x={120} y={104} color={AMBER} size={9}>d</Lbl>
        <Ray d="M 150 200 L 430 200" color={MUTED} width={1} />
        <Lbl x={290} y={196} size={9}>D</Lbl>
        <Lbl x={250} y={34} anchor="start" size={9}>coherent spherical waves</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 10.5 — the fringe pattern and its intensity                         */
/* ------------------------------------------------------------------ */

const FRINGE_SPACING = 52;
const FRINGE_CENTRE = 268;

const fringeCurve = Array.from({ length: 181 }, (_, i) => {
  const x = 44 + (i * 448) / 180;
  const k = (x - FRINGE_CENTRE) / FRINGE_SPACING;
  const y = 168 - 62 * Math.pow(Math.cos(Math.PI * k), 2);
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}).join(" ");

const fringeBands = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

function FringePattern() {
  return (
    <Figure
      n="10.13"
      caption="Interference fringes from two point sources: equally spaced bright bands of equal brightness, with dark bands between them. The graph below is I = 4I₀ cos²(φ/2) — the peaks are all at the same height."
    >
      <svg viewBox="0 0 500 215" className="h-auto w-full" role="img" aria-label="Double slit fringe pattern and intensity graph">
        <rect x="44" y="22" width="448" height="30" fill={STRUCT} fillOpacity="0.08" />
        {fringeBands.map((k) => (
          <rect
            key={k}
            x={FRINGE_CENTRE + k * FRINGE_SPACING - 11}
            y="22"
            width="22"
            height="30"
            fill={AMBER}
            fillOpacity={0.55}
          />
        ))}
        <line x1="44" y1="168" x2="492" y2="168" stroke={MUTED} strokeWidth="1.2" />
        <polyline points={fringeCurve} fill="none" stroke={WAVE} strokeWidth="1.9" />
        <text x="268" y="70" textAnchor="middle" fontSize="9" fill={MUTED} fontWeight="500">
          screen
        </text>
        <Lbl x={64} y={190} anchor="start" size={9}>I = 4I₀ at every bright fringe</Lbl>
        <Ray d="M 216 178 L 216 162" color={VIOLET} width={1.2} />
        <Ray d="M 320 178 L 320 162" color={VIOLET} width={1.2} />
        <Lbl x={268} y={190} color={VIOLET} size={9}>β</Lbl>
        <Lbl x={44} y={204} anchor="start" size={9}>fringe width β = λD/d — the same for bright and dark fringes</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 10.6.1 — single slit geometry, and the sinc² intensity curve        */
/* ------------------------------------------------------------------ */

function SingleSlitGeometry() {
  return (
    <Figure
      n="10.14"
      caption="Diffraction at a single slit. A parallel beam falls normally on the slit LN of width a; M is its midpoint. Rays from different points of the slit reach P making an angle θ with the normal MC, and their phase differences decide whether P is bright or dark."
    >
      <svg viewBox="0 0 480 210" className="h-auto w-full" role="img" aria-label="Single slit diffraction geometry">
        <line x1="150" y1="18" x2="150" y2="68" stroke={STRUCT} strokeWidth="3.4" />
        <line x1="150" y1="132" x2="150" y2="182" stroke={STRUCT} strokeWidth="3.4" />
        <line x1="420" y1="14" x2="420" y2="190" stroke={MUTED} strokeWidth="1.4" />
        <line x1="60" y1="80" x2="150" y2="80" stroke={WAVE} strokeWidth="1.3" />
        <line x1="60" y1="100" x2="150" y2="100" stroke={WAVE} strokeWidth="1.3" />
        <line x1="60" y1="120" x2="150" y2="120" stroke={WAVE} strokeWidth="1.3" />
        <line x1="60" y1="60" x2="150" y2="60" stroke={WAVE} strokeWidth="1.2" strokeOpacity="0.6" />
        <line x1="60" y1="140" x2="150" y2="140" stroke={WAVE} strokeWidth="1.2" strokeOpacity="0.6" />
        <Ray d="M 150 68 L 420 30" color={SECONDARY} width={1.4} />
        <Ray d="M 150 100 L 420 30" color={SECONDARY} width={1.4} />
        <Ray d="M 150 132 L 420 30" color={SECONDARY} width={1.4} />
        <Ray d="M 150 100 L 420 100" color={MUTED} dash="5 4" width={1.1} />
        <Ray d="M 150 100 A 50 50 0 0 1 199.4 90.4" color={AMBER} width={1.2} />
        <circle cx="150" cy="68" r="2.6" fill={STRUCT} />
        <circle cx="150" cy="100" r="2.6" fill={STRUCT} />
        <circle cx="150" cy="132" r="2.6" fill={STRUCT} />
        <circle cx="420" cy="30" r="3" fill={WAVE} />
        <circle cx="420" cy="100" r="3" fill={STRUCT} />
        <Lbl x={158} y={62} color={STRUCT} anchor="start">L</Lbl>
        <Lbl x={158} y={104} color={STRUCT} anchor="start">M</Lbl>
        <Lbl x={158} y={140} color={STRUCT} anchor="start">N</Lbl>
        <Lbl x={428} y={34} color={WAVE} anchor="start">P</Lbl>
        <Lbl x={428} y={104} color={STRUCT} anchor="start">C</Lbl>
        <Lbl x={206} y={90} color={AMBER}>θ</Lbl>
        <Ray d="M 132 76 L 132 124" color={AMBER} width={1.2} />
        <Lbl x={120} y={104} color={AMBER} size={9}>a</Lbl>
        <Lbl x={252} y={52} anchor="start" size={9}>diffracted</Lbl>
        <Lbl x={252} y={64} anchor="start" size={9}>rays ≈ parallel</Lbl>
      </svg>
    </Figure>
  );
}

const slitCurve = Array.from({ length: 241 }, (_, i) => {
  const t = -3 + (i * 6) / 240;
  const x = 46 + (i * 440) / 240;
  const beta = Math.PI * t;
  const ratio = Math.abs(t) < 1e-6 ? 1 : Math.sin(beta) / beta;
  const y = 176 - 128 * ratio * ratio;
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}).join(" ");

function SingleSlitIntensity() {
  return (
    <Figure
      n="10.15"
      caption="Intensity distribution for a single slit: a broad central maximum at θ = 0, zero at θ = ±λ/a, ±2λ/a …, and much weaker secondary maxima roughly half-way between the minima."
    >
      <svg viewBox="0 0 520 205" className="h-auto w-full" role="img" aria-label="Single slit diffraction intensity curve">
        <line x1="46" y1="176" x2="500" y2="176" stroke={MUTED} strokeWidth="1.2" />
        <polyline points={slitCurve} fill="none" stroke={WAVE} strokeWidth="1.9" />
        {[-2, -1, 1, 2].map((n) => (
          <line
            key={n}
            x1={266 + (n * 440) / 6}
            y1="176"
            x2={266 + (n * 440) / 6}
            y2="170"
            stroke={MUTED}
            strokeWidth="1.2"
          />
        ))}
        <Lbl x={266} y={192} color={STRUCT} size={9}>0</Lbl>
        <Lbl x={266 + 440 / 6} y={192} size={9}>λ/a</Lbl>
        <Lbl x={266 + 880 / 6} y={192} size={9}>2λ/a</Lbl>
        <Lbl x={266 - 440 / 6} y={192} size={9}>−λ/a</Lbl>
        <Lbl x={266 - 880 / 6} y={192} size={9}>−2λ/a</Lbl>
        <Lbl x={266} y={26} color={STRUCT} size={9}>central maximum</Lbl>
        <Ray d="M 266 32 L 266 46" color={MUTED} width={1} />
        <Lbl x={92} y={150} anchor="start" size={9}>secondary maxima</Lbl>
        <Lbl x={44} y={30} anchor="start" size={9}>sin θ</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 10.7 — polaroids and Malus' law                                     */
/* ------------------------------------------------------------------ */

const malusCurve = Array.from({ length: 121 }, (_, i) => {
  const theta = (i * Math.PI) / 120;
  const x = 336 + (i * 168) / 120;
  const y = 168 - 92 * Math.pow(Math.cos(theta), 2);
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}).join(" ");

function PolaroidTrain() {
  return (
    <Figure
      n="10.18"
      caption="(a) Unpolarised light through P₁ emerges linearly polarised with half the intensity; a second polaroid P₂ passes only the component E cosθ, so the transmitted intensity falls from I₀ to zero as θ goes from 0° to 90°. (b) Malus' law, I = I₀ cos²θ — two maxima and two minima in a full turn of 2π."
    >
      <svg viewBox="0 0 520 205" className="h-auto w-full" role="img" aria-label="Two polaroids and Malus law curve">
        <Ray d="M 18 78 L 44 78" color={VIOLET} width={1.4} />
        <Ray d="M 28 92 L 40 106" color={VIOLET} width={1.4} />
        <Ray d="M 48 96 L 30 104" color={VIOLET} width={1.4} />
        <Ray d="M 22 66 L 42 88" color={VIOLET} width={1.4} />
        <Ray d="M 46 66 L 26 90" color={VIOLET} width={1.4} />
        <Lbl x={10} y={38} anchor="start" size={9}>unpolarised</Lbl>

        <rect x="72" y="48" width="16" height="84" fill={VIOLET} fillOpacity="0.18" stroke={STRUCT} strokeWidth="1.3" />
        {[54, 62, 70, 78, 86, 94, 102, 110, 118].map((y) => (
          <line key={y} x1="94" y1={y} x2="114" y2={y} stroke={MUTED} strokeWidth="0.9" strokeOpacity="0.6" />
        ))}
        <Ray d="M 94 88 L 114 88" color={AMBER} width={2.2} />
        <Lbl x={80} y={46} size={9} color={STRUCT}>P₁</Lbl>
        <Lbl x={104} y={148} size={9}>pass-axis</Lbl>

        {[136, 168, 200].map((x) => (
          <Ray key={x} d={`M ${x} 62 L ${x} 118`} color={AMBER} width={2} />
        ))}

        <rect x="222" y="48" width="16" height="84" fill={VIOLET} fillOpacity="0.18" stroke={STRUCT} strokeWidth="1.3" />
        <Ray d="M 214 114 L 246 66" color={AMBER} width={2.2} />
        <Lbl x={230} y={46} size={9} color={STRUCT}>P₂</Lbl>
        <Lbl x={252} y={150} size={9}>axis at θ</Lbl>

        <Ray d="M 268 110 L 296 78" color={SECONDARY} width={2} />
        <Lbl x={266} y={130} anchor="start" size={9}>E cos θ</Lbl>
        <Lbl x={266} y={142} anchor="start" size={9}>I = I₀ cos²θ</Lbl>

        <line x1="336" y1="168" x2="504" y2="168" stroke={MUTED} strokeWidth="1.2" />
        <polyline points={malusCurve} fill="none" stroke={WAVE} strokeWidth="1.9" />
        <Lbl x={336} y={184} size={9}>0°</Lbl>
        <Lbl x={420} y={184} size={9}>90°</Lbl>
        <Lbl x={504} y={184} size={9}>180°</Lbl>
        <Lbl x={420} y={26} size={9}>I₀ cos²θ</Lbl>
        <Ray d="M 378 168 L 378 160" color={MUTED} width={1} />
        <Ray d="M 462 168 L 462 160" color={MUTED} width={1} />
      </svg>
    </Figure>
  );
}
export default function WaveOpticsChapter() {
  return (
    <>
      <h2 id="h-10-1">10.1 Introduction</h2>
      <p>
        In 1637 Descartes gave the corpuscular model of light and derived Snell&apos;s law. It explained the laws of
        reflection and refraction at an interface. Two rival pictures of light then competed for two centuries — and
        the chapter you are reading is the story of the one that won.
      </p>
      <TableCard
        title="How the wave picture was established"
        headers={["Year", "Who", "What it settled"]}
        rows={[
          { cells: ["1637", "Descartes", "Corpuscular (particle) model; derived Snell\u2019s law and explained reflection and refraction at an interface."] },
          { cells: ["later 1600s", "Isaac Newton", "Developed the corpuscular model in OPTICKS; its popularity meant the model was very often attributed to Newton."] },
          { cells: ["1678", "Christiaan Huygens", "Put forward the wave theory of light — the model used throughout this chapter."] },
          { cells: ["1801", "Thomas Young", "Interference experiment; from then on it was firmly established that light is a wave phenomenon."] },
          { cells: ["1850", "L\u00e9on Foucault", "Measured the speed of light in water: less than in air — exactly what the wave model predicted."] },
          { cells: ["around 1855", "James Clerk Maxwell", "Electromagnetic theory of light: light is an electromagnetic wave, so it needs no medium to travel through vacuum."] },
        ]}
        caption="The wave model was not readily accepted at first — partly because of Newton's authority, and partly because a wave was thought to need a medium, while light travels through vacuum."
      />
      <Comparison
        columns={[
          {
            title: "Corpuscular model (Descartes, Newton)",
            children: (
              <ul>
                <li>Light is a stream of particles.</li>
                <li>Explains reflection and refraction, and gives Snell&apos;s law.</li>
                <li>Predicts that if the ray bends towards the normal, light is <em>faster</em> in the second medium.</li>
              </ul>
            ),
          },
          {
            title: "Wave model (Huygens)",
            children: (
              <ul>
                <li>Light is a wave spreading out from a source.</li>
                <li>Explains reflection, refraction and — through superposition — interference and diffraction.</li>
                <li>Predicts that if the ray bends towards the normal, light is <em>slower</em> in the second medium: <Formula>{String.raw`v_2 < v_1`}</Formula>.</li>
              </ul>
            ),
          },
        ]}
      />
      <p>
        The two models made opposite predictions about the speed of light in water, so one experiment could decide
        between them. Foucault&apos;s measurement of 1850 showed that the speed of light in water is less than the speed
        in air — the prediction of the wave model.
      </p>
      <p>
        The wavelength of visible light turned out to be extremely small — about <Formula>{String.raw`0.6\ \mu\text{m}`}</Formula>{" "}
        for yellow light. Compared with the dimensions of ordinary mirrors and lenses, that is nearly nothing, which is
        why light appears to travel in straight lines.
      </p>
      <Callout type="important" title="Geometrical optics and the ray">
        The branch of optics in which one completely neglects the finiteness of the wavelength is called{" "}
        <strong>geometrical optics</strong>, and a <strong>ray</strong> is defined as the path of energy propagation in
        the limit of wavelength tending to zero.
      </Callout>
      <MetricCard
        label="Wavelength of yellow light"
        value="≈ 0.6"
        unit="µm"
        description="About a hundredth of the width of a human hair. Because λ is so small next to the size of lenses and mirrors, light can be treated as travelling in straight lines — the ray picture of Chapter 9."
      />
      <Callout type="note" title="Maxwell's prediction — and its confirmation">
        <p>
          Maxwell derived the wave equation from his equations of electricity and magnetism and predicted the existence
          of electromagnetic waves around 1855. The theoretical speed in free space came out very close to the measured
          speed of light, so he propounded that light must be an electromagnetic wave.
        </p>
        <p className="mt-2">
          Radio waves were produced in the laboratory much later, around 1890, by Heinrich Hertz; J. C. Bose and
          G. Marconi made the practical applications of the Hertzian waves.
        </p>
      </Callout>
      <KeyPoint title="The road through this chapter">
        <ul>
          <li>
            Huygens&apos; principle → the laws of <strong>reflection and refraction</strong> (§10.3).
          </li>
          <li>
            Superposition of waves → <strong>coherent and incoherent</strong> addition, and <strong>interference</strong>{" "}
            in Young&apos;s double slit (§10.4, §10.5).
          </li>
          <li>
            Huygens–Fresnel principle → <strong>diffraction</strong> at a single slit (§10.6).
          </li>
          <li>
            The transverse nature of the electromagnetic wave → <strong>polarisation</strong> (§10.7).
          </li>
        </ul>
      </KeyPoint>

      <h2 id="h-10-2">10.2 Huygens Principle</h2>
      <p>
        Drop a small stone on a calm pool of water and waves spread out from the point of impact. Every point on the
        surface starts oscillating with time, and at any instant a photograph of the surface would show circular rings on
        which the disturbance is maximum.
      </p>
      <Callout type="important" title="Wavefront">
        A <strong>wavefront</strong> is defined as a <strong>surface of constant phase</strong>. All points on such a
        circle are oscillating in phase because they are at the same distance from the source; the locus of points which
        oscillate in phase is called a wavefront.
      </Callout>
      <ul>
        <li>The speed with which the wavefront moves outwards from the source is called the <strong>speed of the wave</strong>.</li>
        <li>The energy of the wave travels in a direction <strong>perpendicular to the wavefront</strong>.</li>
        <li>A line drawn perpendicular to the wavefront, showing the direction of energy flow, is a <strong>ray</strong>.</li>
      </ul>
      <FactCard
        icon="◯"
        title="Spherical wave"
        definition="From a point source emitting uniformly in all directions, the locus of points with the same amplitude and the same phase is a sphere — a spherical wave."
      />
      <FactCard
        icon="▭"
        title="Plane wave"
        definition="At a large distance from the source a small portion of the sphere can be considered as a plane — a plane wave."
      />
      <WavefrontShapes />
      <Callout type="important" title="Huygens principle">
        According to Huygens principle, each point of the wavefront is the source of a secondary disturbance and the
        wavelets emanating from these points spread out in all directions with the speed of the wave. These wavelets are
        referred to as <strong>secondary wavelets</strong>, and if we draw a common tangent to all these spheres we obtain
        the new position of the wavefront at a later time.
      </Callout>
      <p>
        Huygens principle is essentially a geometrical construction: given the shape of the wavefront at any time, it
        allows us to determine the shape of the wavefront at a later time.
      </p>
      <Stepper
        steps={[
          {
            label: "Start from the wavefront at t = 0",
            description: <>Take the surface F₁F₂ as the wavefront at t = 0, as in Fig. 10.2.</>,
          },
          {
            label: "Treat every point of it as a source",
            description: (
              <>
                Each point of F₁F₂ emits a secondary wavelet that travels with the wave speed <Formula>{String.raw`v`}</Formula>.
              </>
            ),
          },
          {
            label: "Draw spheres of radius vτ",
            description: (
              <>
                After a time τ each wavelet has become a sphere of radius{" "}
                <Formula>{String.raw`v\tau`}</Formula> around its point of origin.
              </>
            ),
          },
          {
            label: "Take the common tangent",
            description: <>The forward tangent plane or surface — the envelope G₁G₂ — is the new wavefront at t = τ.</>,
          },
          {
            label: "Draw the rays",
            description: <>Rays are drawn perpendicular to both wavefronts; the wavefront travels along the rays.</>,
          },
        ]}
      />
      <HuygensConstruction />
      <Callout type="note" title="Where is the backwave?">
        <p>
          The construction above also produces a wavefront travelling backwards, shown as D₁D₂ in Fig. 10.2. Huygens
          argued that the amplitude of the secondary wavelets is maximum in the forward direction and zero in the
          backward direction.
        </p>
        <p className="mt-2">
          By making this ad hoc assumption, Huygens could explain the absence of the backwave — but the assumption itself
          is not satisfactory. The absence of the backwave is really justified only by more rigorous wave theory.
        </p>
      </Callout>
      <p>
        In exactly the same manner the principle gives the shape of the wavefront of a plane wave propagating through a
        medium: the secondary spheres are drawn from every point of the plane wavefront, and their envelope is again a
        plane, parallel to the first.
      </p>
      <h2 id="h-10-3">10.3 Refraction and Reflection of Plane Waves Using Huygens Principle</h2>
      <p>
        We now use Huygens principle to derive the laws of refraction and reflection — the same laws that Chapter 9
        used, but now obtained from the wave picture instead of being assumed.
      </p>

      <h3 id="h-10-3-1">10.3.1 Refraction of a Plane Wave</h3>
      <p>
        Let PP′ represent the surface separating medium 1 and medium 2, with light speeds{" "}
        <Formula>{String.raw`v_1`}</Formula> and <Formula>{String.raw`v_2`}</Formula> respectively. A plane wavefront AB
        travelling in the direction A′A is incident on the interface at an angle <Formula>{String.raw`i`}</Formula>.
        Let τ be the time taken by the wavefront to travel the distance BC.
      </p>
      <RefractionHuygens />
      <Stepper
        steps={[
          {
            label: "Distance covered while the wavefront reaches the surface",
            description: (
              <>
                In time τ the end B of the wavefront travels to C, so{" "}
                <Formula>{String.raw`BC=v_1\tau`}</Formula>.
              </>
            ),
          },
          {
            label: "Construct the refracted wavefront",
            description: (
              <>
                Draw a sphere of radius <Formula>{String.raw`v_2\tau`}</Formula> from the point A in the second medium.
                The tangent plane drawn from C to this sphere touches it at E, so{" "}
                <Formula>{String.raw`AE=v_2\tau`}</Formula> and CE is the refracted wavefront.
              </>
            ),
          },
          {
            label: "Two right triangles",
            description: (
              <>
                In triangle ABC, <Formula>{String.raw`\sin i=\frac{BC}{AC}=\frac{v_1\tau}{AC}`}</Formula>; in triangle
                AEC, <Formula>{String.raw`\sin r=\frac{AE}{AC}=\frac{v_2\tau}{AC}`}</Formula>.
              </>
            ),
          },
          {
            label: "Divide the two equations",
            description: (
              <>
                The common factor <Formula>{String.raw`\tau/AC`}</Formula> cancels, leaving{" "}
                <Formula>{String.raw`\frac{\sin i}{\sin r}=\frac{v_1}{v_2}`}</Formula>.
              </>
            ),
          },
          {
            label: "Put in the refractive indices",
            description: (
              <>
                With <Formula>{String.raw`n_1=\frac{c}{v_1}`}</Formula> and{" "}
                <Formula>{String.raw`n_2=\frac{c}{v_2}`}</Formula>, the ratio of speeds becomes{" "}
                <Formula>{String.raw`\frac{v_1}{v_2}=\frac{n_2}{n_1}`}</Formula>, giving Snell&apos;s law.
              </>
            ),
          },
        ]}
      />
      <FormulaBlock latex={String.raw`\sin i=\frac{BC}{AC}=\frac{v_1\tau}{AC}`} tag="Eq. (10.1)" />
      <FormulaBlock latex={String.raw`\sin r=\frac{AE}{AC}=\frac{v_2\tau}{AC}`} tag="Eq. (10.2)" />
      <FormulaBlock
        latex={String.raw`\frac{\sin i}{\sin r}=\frac{v_1}{v_2}`}
        label="Ratio of the sines equals the ratio of the speeds"
        tag="Eq. (10.3)"
      />
      <p>
        From Eq. (10.3) comes the important result: if <Formula>{String.raw`r < i`}</Formula> — that is, if the ray
        bends towards the normal — the speed of the light wave in the second medium is <em>less</em> than the speed in
        the first medium. This prediction is opposite to the prediction of the corpuscular model, and experiments have
        shown that the wave theory is correct.
      </p>
      <FormulaBlock latex={String.raw`n_1=\frac{c}{v_1}`} label="Refractive index of medium 1" tag="Eq. (10.4)" />
      <FormulaBlock latex={String.raw`n_2=\frac{c}{v_2}`} label="Refractive index of medium 2" tag="Eq. (10.5)" />
      <FormulaBlock
        latex={String.raw`n_1\sin i=n_2\sin r`}
        label="Snell's law of refraction"
        tag="Eq. (10.6)"
        important
      />
      <p>
        If <Formula>{String.raw`\lambda_1`}</Formula> and <Formula>{String.raw`\lambda_2`}</Formula> denote the
        wavelengths in the two media, and the distance BC is equal to <Formula>{String.raw`\lambda_1`}</Formula>, then AE
        will be equal to <Formula>{String.raw`\lambda_2`}</Formula> — because if the crest from B has reached C in time τ,
        the crest from A should also have reached E in the same time τ.
      </p>
      <FormulaBlock
        latex={String.raw`\frac{\lambda_1}{\lambda_2}=\frac{v_1}{v_2}`}
        label="Wavelength changes with speed"
        tag="Eq. (10.7)"
        important
      />
      <ul>
        <li>When a wave is refracted into a denser medium <Formula>{String.raw`(v_1>v_2)`}</Formula>, the wavelength and the speed of propagation both decrease.</li>
        <li>The frequency <Formula>{String.raw`\nu=v/\lambda`}</Formula> remains the same in the two media.</li>
        <li>What changes at an interface is the speed and the wavelength; what stays fixed is the colour, i.e. the frequency.</li>
      </ul>
      <MistakeCard
        mistake="Assuming the frequency of light changes when it enters glass, because the wavelength and speed change."
        correction="Frequency is set by the source and is unchanged by refraction. Only v and λ change, and they change by the same factor, so ν = v/λ stays constant across the interface."
        example="589 nm yellow sodium light in water: λ becomes 443 nm and v becomes 2.26 × 10⁸ m s⁻¹, but ν stays 5.09 × 10¹⁴ Hz."
      />

      <h3 id="h-10-3-2">10.3.2 Refraction at a Rarer Medium</h3>
      <p>
        Now consider a plane wave refracted into a rarer medium, so that <Formula>{String.raw`v_2>v_1`}</Formula>.
        Proceeding in exactly the same manner, the refracted wavefront is constructed as shown in Fig. 10.5.
      </p>
      <RarerRefraction />
      <ul>
        <li>The angle of refraction is now <em>greater</em> than the angle of incidence — the wave bends away from the normal.</li>
        <li>Snell&apos;s law still holds in the form <Formula>{String.raw`n_1\sin i=n_2\sin r`}</Formula>.</li>
        <li>The critical angle <Formula>{String.raw`i_c`}</Formula> is defined by the condition that the refracted ray grazes the surface.</li>
      </ul>
      <FormulaBlock
        latex={String.raw`\sin i_c=\frac{n_2}{n_1}`}
        label="Critical angle (light going to the rarer medium)"
        tag="Eq. (10.8)"
        important
      />
      <ul>
        <li>If <Formula>{String.raw`i=i_c`}</Formula>, then <Formula>{String.raw`\sin r=1`}</Formula> and <Formula>{String.raw`r=90^\circ`}</Formula>.</li>
        <li>For <Formula>{String.raw`i>i_c`}</Formula> there can be no refracted wave at all.</li>
        <li>
          The wave is then entirely reflected back into the denser medium — the phenomenon of{" "}
          <strong>total internal reflection</strong>, discussed with its applications in Chapter 9.
        </li>
      </ul>
      <Callout type="note" title="Same result, two routes">
        Eq. (10.8) is the critical-angle condition you already met in ray optics — here it comes out of the Huygens
        construction rather than out of the ray picture. Total internal reflection is the reason optical fibres and
        sparkling diamonds behave as they do.
      </Callout>

      <h3 id="h-10-3-3">10.3.3 Reflection of a Plane Wave by a Plane Surface</h3>
      <p>
        Next, a plane wavefront AB is incident at an angle <Formula>{String.raw`i`}</Formula> on a reflecting surface MN.
        Let <Formula>{String.raw`v`}</Formula> be the speed of the wave in the medium and τ the time taken by the
        wavefront to advance from the point B to C, so that <Formula>{String.raw`BC=v\tau`}</Formula>.
      </p>
      <Stepper
        steps={[
          {
            label: "Draw the reflected wavelet from A",
            description: (
              <>
                A sphere of radius <Formula>{String.raw`v\tau`}</Formula> is drawn from the point A.
              </>
            ),
          },
          {
            label: "Draw the tangent from C",
            description: (
              <>
                CE is the tangent plane drawn from C to this sphere, and obviously{" "}
                <Formula>{String.raw`AE=BC=v\tau`}</Formula>.
              </>
            ),
          },
          {
            label: "Compare the two triangles",
            description: <>The triangles EAC and BAC are right-angled, share the hypotenuse AC, and have equal legs AE = BC. They are therefore congruent.</>,
          },
          {
            label: "Conclusion",
            description: (
              <>
                The angles <Formula>{String.raw`i`}</Formula> and <Formula>{String.raw`r`}</Formula> subtend equal sides
                in congruent triangles, so <Formula>{String.raw`i=r`}</Formula>.
              </>
            ),
          },
        ]}
      />
      <ReflectionHuygens />
      <FormulaBlock latex={String.raw`i=r`} label="Law of reflection" important />
      <Highlight color="yellow">
        The incident ray, the reflected ray and the normal lie in one plane, and the angle of reflection equals the angle
        of incidence.
      </Highlight>
      <p>
        Once the laws of reflection and refraction are in hand, the behaviour of prisms, lenses and mirrors follows.
        Chapter 9 described these devices using rectilinear propagation; here we watch what happens to the wavefronts
        themselves.
      </p>
      <WavefrontsThroughOptics />
      <ul>
        <li>
          <strong>Thin prism:</strong> the lower part of the wavefront passes through the greatest thickness of glass and
          is delayed the most, so the emerging wavefront is tilted.
        </li>
        <li>
          <strong>Convex lens:</strong> the central part of the wavefront crosses the thickest portion and is delayed the
          most, so the emerging wavefront has a depression at the centre, becomes spherical, and converges to the focus F.
        </li>
        <li>
          <strong>Concave mirror:</strong> the reflected wavefront is spherical and converges to the focal point F.
        </li>
        <li>Concave lenses and convex mirrors are understood in the same way, with the wavefronts diverging instead.</li>
      </ul>
      <Highlight color="blue">
        The total time taken from a point on the object to the corresponding point on the image is the same measured along
        any ray.
      </Highlight>
      <p>
        When a convex lens focusses light to form a real image, the ray going through the centre traverses a shorter
        path, but because of the slower speed in glass the time taken is the same as for rays travelling near the edge of
        the lens.
      </p>

      <Expandable title="Example 10.1 — Frequency, speed and intensity of reflected and refracted light" variant="example">
        <ProblemSolution.Problem>
          <p>
            (a) When monochromatic light is incident on a surface separating two media, the reflected and refracted light
            both have the same frequency as the incident frequency. Explain why.
          </p>
          <p>
            (b) When light travels from a rarer to a denser medium, the speed decreases. Does the reduction in speed imply
            a reduction in the energy carried by the light wave?
          </p>
          <p>
            (c) In the wave picture of light, intensity of light is determined by the square of the amplitude of the wave.
            What determines the intensity of light in the photon picture of light?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            <strong>(a)</strong> Reflection and refraction arise through interaction of incident light with the atomic
            constituents of matter. Atoms may be viewed as oscillators, which take up the frequency of the external agency
            (light) causing forced oscillations. The frequency of light emitted by a charged oscillator equals its
            frequency of oscillation. Thus, the frequency of scattered light equals the frequency of incident light.
          </p>
          <p className="mt-2">
            <strong>(b)</strong> No. Energy carried by a wave depends on the amplitude of the wave, not on the speed of
            wave propagation.
          </p>
          <p className="mt-2">
            <strong>(c)</strong> For a given frequency, intensity of light in the photon picture is determined by the
            number of photons crossing a unit area per unit time.
          </p>
        </ProblemSolution.Solution>
      </Expandable>
      <h2 id="h-10-4">10.4 Coherent and Incoherent Addition of Waves</h2>
      <p>
        The entire field of interference is based on the <strong>superposition principle</strong>, which you met in
        Class XI.
      </p>
      <Callout type="important" title="Principle of superposition">
        At a particular point in the medium, the resultant displacement produced by a number of waves is the{" "}
        <strong>vector sum</strong> of the displacements produced by each of the waves.
      </Callout>
      <p>
        Consider two needles S₁ and S₂ moving periodically up and down in an identical fashion in a trough of water. They
        produce two water waves, and at a particular point the phase difference between the displacements produced by each
        of the waves does not change with time.
      </p>
      <Callout type="important" title="Coherent sources">
        When the phase difference between the displacements produced by two sources does not change with time, the two
        sources are said to be <strong>coherent</strong>.
      </Callout>
      <FactCard
        icon="≈"
        title="The nodal and antinodal lines"
        definition="At any instant the crests of the two water waves are circles about S₁ and S₂. Where a crest meets a crest (or a trough meets a trough) the water is violently disturbed — an antinodal line A; where a crest meets a trough the water does not move at all — a nodal line N."
      />
      <p>
        Take a point P for which <Formula>{String.raw`S_1P=S_2P`}</Formula>. The waves from S₁ and S₂ take the same time
        to reach P, so waves that leave the two needles in phase also arrive at P in phase.
      </p>
      <Stepper
        steps={[
          {
            label: "Displacement due to S₁",
            description: (
              <>
                <Formula>{String.raw`y_1=a\cos\omega t`}</Formula>
              </>
            ),
          },
          {
            label: "Displacement due to S₂ at the same point",
            description: (
              <>
                Equal path, so equal phase: <Formula>{String.raw`y_2=a\cos\omega t`}</Formula>
              </>
            ),
          },
          {
            label: "Add them",
            description: (
              <>
                <Formula>{String.raw`y=y_1+y_2=2a\cos\omega t`}</Formula> — the amplitude has doubled.
              </>
            ),
          },
          {
            label: "Square the amplitude",
            description: (
              <>
                Intensity is proportional to the square of the amplitude, so{" "}
                <Formula>{String.raw`I=4I_0`}</Formula>, where <Formula>{String.raw`I_0`}</Formula> is the intensity of
                one source alone and is proportional to <Formula>{String.raw`a^2`}</Formula>.
              </>
            ),
          },
        ]}
      />
      <p>
        At any point on the perpendicular bisector of S₁S₂ the intensity is therefore{" "}
        <Formula>{String.raw`4I_0`}</Formula>: the two sources interfere <strong>constructively</strong>.
      </p>
      <p>
        Now take a point Q for which <Formula>{String.raw`S_2Q-S_1Q=2\lambda`}</Formula>. The waves from S₁ arrive two
        full cycles earlier than those from S₂ and are again in phase, because a path difference of{" "}
        <Formula>{String.raw`2\lambda`}</Formula> corresponds to a phase difference of{" "}
        <Formula>{String.raw`4\pi`}</Formula>.
      </p>
      <FormulaBlock latex={String.raw`y_2=a\cos\left(\omega t-4\pi\right)=a\cos\omega t`} label="Two cycles of path difference change nothing" />
      <p>
        The intensity is again <Formula>{String.raw`4I_0`}</Formula> — constructive interference once more. In this
        analysis the distances S₁Q and S₂Q are much greater than d, the separation of the sources, so that although the
        two distances are not exactly equal, the amplitudes of the two waves are very nearly the same.
      </p>
      <p>
        Next take a point R for which <Formula>{String.raw`S_2R-S_1R=-2.5\lambda`}</Formula>. Now a path difference of{" "}
        <Formula>{String.raw`2.5\lambda`}</Formula> corresponds to a phase difference of{" "}
        <Formula>{String.raw`5\pi`}</Formula>.
      </p>
      <FormulaBlock latex={String.raw`y_2=a\cos\left(\omega t+5\pi\right)=-a\cos\omega t`} label="Two and a half cycles of path difference invert the wave" />
      <p>
        The two displacements are now out of phase and cancel exactly, giving zero intensity. This is{" "}
        <strong>destructive interference</strong>.
      </p>
      <FormulaBlock
        latex={String.raw`S_1P\sim S_2P=n\lambda,\qquad n=0,1,2,3,\dots`}
        label="Constructive interference — resultant intensity 4I₀"
        tag="Eq. (10.9)"
        important
      />
      <FormulaBlock
        latex={String.raw`S_1P\sim S_2P=\left(n+\tfrac{1}{2}\right)\lambda,\qquad n=0,1,2,3,\dots`}
        label="Destructive interference — resultant intensity zero"
        tag="Eq. (10.10)"
        important
      />
      <p>
        The sign ~ between <Formula>{String.raw`S_1P`}</Formula> and <Formula>{String.raw`S_2P`}</Formula> represents the
        difference between the two distances. For any other arbitrary point G, let the phase difference between the two
        displacements be <Formula>{String.raw`\phi`}</Formula>.
      </p>
      <Stepper
        steps={[
          {
            label: "The two displacements",
            description: (
              <>
                <Formula>{String.raw`y_1=a\cos\omega t`}</Formula> and{" "}
                <Formula>{String.raw`y_2=a\cos\left(\omega t+\phi\right)`}</Formula>.
              </>
            ),
          },
          {
            label: "Resultant displacement",
            description: (
              <>
                <Formula>{String.raw`y=a\left[\cos\omega t+\cos\left(\omega t+\phi\right)\right]`}</Formula>.
              </>
            ),
          },
          {
            label: "Use the sum-to-product identity",
            description: (
              <>
                <Formula>{String.raw`y=2a\cos\frac{\phi}{2}\cos\left(\omega t+\frac{\phi}{2}\right)`}</Formula>, so the
                amplitude is <Formula>{String.raw`2a\cos(\phi/2)`}</Formula>.
              </>
            ),
          },
          {
            label: "Square it for the intensity",
            description: (
              <>
                <Formula>{String.raw`I=4I_0\cos^2\frac{\phi}{2}`}</Formula>.
              </>
            ),
          },
        ]}
      />
      <FormulaBlock latex={String.raw`I=4I_0\cos^2\left(\frac{\phi}{2}\right)`} label="Intensity at an arbitrary point" tag="Eq. (10.11)" important />
      <ul>
        <li>
          If <Formula>{String.raw`\phi=0,\pm2\pi,\pm4\pi,\dots`}</Formula> — the condition of Eq. (10.9) — the intensity is
          maximum, <Formula>{String.raw`4I_0`}</Formula>.
        </li>
        <li>
          If <Formula>{String.raw`\phi=\pm\pi,\pm3\pi,\pm5\pi,\dots`}</Formula> — the condition of Eq. (10.10) — the
          intensity is zero.
        </li>
        <li>
          Path difference and phase difference are locked together:{" "}
          <Formula>{String.raw`\Delta\phi=\frac{2\pi}{\lambda}\,\Delta x`}</Formula>.
        </li>
      </ul>
      <MistakeCard
        mistake="Treating a path difference of λ and a phase difference of λ as the same thing, or mixing λ with π in the conditions for maxima and minima."
        correction="A path difference of one wavelength is a phase difference of 2π — not π. Maxima need Δx = nλ (Δφ = 2nπ); minima need Δx = (n + ½)λ (Δφ = (2n+1)π)."
        example="Δx = 2λ → Δφ = 4π → bright. Δx = 2.5λ → Δφ = 5π → dark. Δx = λ/3 → Δφ = 2π/3 → neither."
      />
      <p>
        If the two needles go up and down regularly, the phase difference φ at any point does not change with time and the
        interference pattern is stable: the positions of maxima and minima stay put. If the two needles do not maintain a
        constant phase difference, the pattern changes with time; when the phase difference changes very rapidly we see a
        &ldquo;time-averaged&rdquo; intensity distribution.
      </p>
      <FormulaBlock latex={String.raw`I=2I_0`} label="Incoherent sources — intensities simply add" tag="Eq. (10.12)" important />
      <p>
        When the phase difference between the two vibrating sources changes rapidly with time, we say the sources are{" "}
        <strong>incoherent</strong> — and then the intensities just add up. This is exactly what happens when two separate
        light sources illuminate a wall.
      </p>

      <h2 id="h-10-5">10.5 Interference of Light Waves and Young&apos;s Experiment</h2>
      <p>
        If two sodium lamps illuminate two pinholes, no interference fringes are seen. The light wave emitted from an
        ordinary source undergoes abrupt phase changes in times of the order of{" "}
        <Formula>{String.raw`10^{-10}\ \text{s}`}</Formula>, so waves from two independent sources have no fixed phase
        relationship and are incoherent — the intensities on the screen simply add.
      </p>
      <p>
        Thomas Young used an ingenious technique to &ldquo;lock&rdquo; the phases of the waves emanating from S₁ and S₂. He
        made two pinholes S₁ and S₂, very close to each other, on an opaque screen. These were illuminated by another
        pinhole that was in turn lit by a bright source.
      </p>
      <Callout type="important" title="Why S₁ and S₂ are coherent">
        S₁ and S₂ behave like two coherent sources because light waves coming out of S₁ and S₂ are derived from the same
        original source, and any abrupt phase change in S will manifest in exactly similar phase changes in the light
        coming out from S₁ and from S₂. Thus the two sources are locked in phase.
      </Callout>
      <DoubleSlitGeometry />
      <p>
        The spherical waves from S₁ and S₂ overlap on the screen GG′ and produce interference fringes. To find where the
        maxima and minima fall, we need the path difference at a point P.
      </p>
      <Stepper
        steps={[
          {
            label: "Set up the distances",
            description: (
              <>
                Let d be the separation of the slits, D the distance from the slit plane to the screen, and x the distance
                of P from the centre C. We assume <Formula>{String.raw`D\gg d`}</Formula>, so the rays from S₁ and S₂ to
                P are very nearly parallel.
              </>
            ),
          },
          {
            label: "Measure the extra path",
            description: (
              <>
                Drop a perpendicular from S₁ on to the ray S₂P. The extra distance travelled by the wave from S₂ is{" "}
                <Formula>{String.raw`d\sin\theta`}</Formula>.
              </>
            ),
          },
          {
            label: "Use the small-angle approximation",
            description: (
              <>
                For small θ, <Formula>{String.raw`\sin\theta\approx\tan\theta=\frac{x}{D}`}</Formula>.
              </>
            ),
          },
          {
            label: "Write the path difference",
            description: (
              <>
                <Formula>{String.raw`S_2P-S_1P\approx\frac{xd}{D}`}</Formula> — this single expression decides whether P
                is bright or dark.
              </>
            ),
          },
        ]}
      />
      <FormulaBlock latex={String.raw`S_2P-S_1P\approx d\sin\theta\approx\frac{xd}{D}`} label="Path difference at P" />
      <p>Constructive interference — a bright region — occurs when this path difference is a whole number of wavelengths.</p>
      <FormulaBlock
        latex={String.raw`\frac{xd}{D}=n\lambda\ \ \Longrightarrow\ \ x_n=n\frac{\lambda D}{d},\qquad n=0,\pm1,\pm2,\dots`}
        label="Positions of bright fringes"
        tag="Eq. (10.13)"
        important
      />
      <p>Destructive interference — a dark region — occurs when it is a half-odd number of wavelengths.</p>
      <FormulaBlock
        latex={String.raw`\frac{xd}{D}=\left(n+\tfrac{1}{2}\right)\lambda\ \ \Longrightarrow\ \ x_n=\left(n+\tfrac{1}{2}\right)\frac{\lambda D}{d},\qquad n=0,\pm1,\pm2,\dots`}
        label="Positions of dark fringes"
        tag="Eq. (10.14)"
        important
      />
      <p>
        Thus dark and bright bands — <strong>fringes</strong> — appear on the screen, and Eqs. (10.13) and (10.14) show
        that the dark and bright fringes are equally spaced.
      </p>

      <h3 id="h-10-5-1">10.5.1 Fringe Width</h3>
      <p>
        The spacing between two consecutive bright fringes follows at once from Eq. (10.13): subtract the position of the
        n-th fringe from that of the (n+1)-th.
      </p>
      <Stepper
        steps={[
          {
            label: "Write two consecutive bright fringes",
            description: (
              <>
                <Formula>{String.raw`x_{n+1}=\left(n+1\right)\frac{\lambda D}{d}`}</Formula> and{" "}
                <Formula>{String.raw`x_n=n\frac{\lambda D}{d}`}</Formula>.
              </>
            ),
          },
          {
            label: "Subtract",
            description: (
              <>
                <Formula>{String.raw`x_{n+1}-x_n=\frac{\lambda D}{d}`}</Formula> — the n cancels completely.
              </>
            ),
          },
          {
            label: "Repeat for the dark fringes",
            description: (
              <>
                Using Eq. (10.14) gives the same difference{" "}
                <Formula>{String.raw`\frac{\lambda D}{d}`}</Formula>, so bright and dark fringes are equally spaced.
              </>
            ),
          },
        ]}
      />
      <FormulaBlock latex={String.raw`\beta=\frac{\lambda D}{d}`} label="Fringe width — identical for bright and dark fringes" important />
      <Highlight color="yellow">
        Neighbouring bright fringes are separated by the same distance β = λD/d, and the dark fringes sit exactly half-way
        between them — the pattern is a set of equally spaced, equally bright bands.
      </Highlight>
      <FringePattern />
      <ul>
        <li>β increases with wavelength: red fringes are wider than blue fringes.</li>
        <li>β increases with the slit-to-screen distance D.</li>
        <li>β decreases as the slit separation d is increased.</li>
        <li>Changing the brightness of the source changes how bright the fringes are, not how far apart they are.</li>
      </ul>
      <MistakeCard
        mistake="Thinking a brighter source spreads the fringes farther apart."
        correction="The fringe width is β = λD/d — it contains λ, D and d only. A brighter source raises the intensity of every fringe (I = 4I₀ at each maximum) but leaves the spacing unchanged."
        example="Doubling the source intensity doubles I₀ everywhere; the maxima stay at x = 0, ±λD/d, ±2λD/d …"
      />
      <KeyPoint title="Young's experiment measures a wavelength">
        β, D and d are all measurable, so <Formula>{String.raw`\lambda=\beta d/D`}</Formula> gives the wavelength of the
        light. In the classic demonstration d = 0.025 mm, D = 5 cm and{" "}
        <Formula>{String.raw`\lambda=5\times10^{-7}\ \text{m}`}</Formula> — a fringe width of only about a millimetre,
        which is why the slits must be very close together.
      </KeyPoint>
      <h2 id="h-10-6">10.6 Diffraction</h2>
      <p>
        Look closely at the shadow cast by an opaque object: close to the region of geometrical shadow there are alternate
        dark and bright regions, just as in interference. This happens due to the phenomenon of{" "}
        <strong>diffraction</strong>.
      </p>
      <ul>
        <li>Diffraction is a general characteristic exhibited by all types of waves — sound waves, light waves, water waves or matter waves.</li>
        <li>Because the wavelength of light is much smaller than the dimensions of most obstacles, we do not encounter diffraction effects of light in everyday observations.</li>
        <li>The finite resolution of our eye, and of optical instruments such as telescopes or microscopes, is limited by diffraction.</li>
        <li>The colours seen when a CD is viewed are due to diffraction effects.</li>
      </ul>
      <Highlight color="blue">
        Diffraction phenomena define the limits of ray optics: no optical instrument can resolve detail much finer than
        the wavelength of the light it uses.
      </Highlight>

      <h3 id="h-10-6-1">10.6.1 The Single Slit</h3>
      <p>
        In the discussion of Young&apos;s experiment we stated that a single narrow slit acts as a new source from which
        light spreads out. Even before Young, early experimenters — including Newton — had noticed that light spreads out
        from narrow holes and slits: it seems to turn around corners and enter regions where we would expect a shadow.
      </p>
      <p>
        When the double slit is replaced by a single narrow slit, illuminated by a monochromatic source, a broad pattern
        with a central bright region is seen. On both sides there are alternate dark and bright regions, the intensity
        becoming weaker away from the centre.
      </p>
      <SingleSlitGeometry />
      <ul>
        <li>A parallel beam falls normally on the slit LN of width a; M is the midpoint of the slit.</li>
        <li>A straight line through M perpendicular to the slit plane meets the screen at C.</li>
        <li>Straight lines joining the point P on the screen to the different points L, M, N can be treated as parallel, making an angle θ with the normal MC.</li>
        <li>The slit is divided into much smaller parts, and their contributions at P are added with the proper phase differences.</li>
        <li>Different parts of the wavefront at the slit are treated as secondary sources; because the incoming wavefront is parallel to the plane of the slit, these sources are in phase.</li>
      </ul>
      <Callout type="important" title="Single-slit diffraction pattern">
        The intensity has a central maximum at <Formula>{String.raw`\theta=0`}</Formula> and other secondary maxima at{" "}
        <Formula>{String.raw`\theta\simeq\left(n+\tfrac{1}{2}\right)\lambda/a`}</Formula>, which go on becoming weaker and
        weaker with increasing n. The minima, of zero intensity, are at{" "}
        <Formula>{String.raw`\theta\simeq n\lambda/a`}</Formula>, <Formula>{String.raw`n=\pm1,\pm2,\pm3,\dots`}</Formula>
      </Callout>
      <FormulaBlock latex={String.raw`a\sin\theta=n\lambda\ \ \Longrightarrow\ \ \theta\simeq\frac{n\lambda}{a}`} label="Minima (zero intensity)" important />
      <FormulaBlock latex={String.raw`\theta\simeq\left(n+\tfrac{1}{2}\right)\frac{\lambda}{a}`} label="Secondary maxima (weaker as n grows)" />
      <TableCard
        title="Where the pattern falls"
        headers={["Angle", "What is seen"]}
        rows={[
          { cells: ["θ = 0", "central maximum — the brightest part of the pattern"] },
          { cells: ["θ ≈ ± λ/a", "first minimum (zero intensity)"] },
          { cells: ["θ ≈ ± 1.5 λ/a", "first secondary maximum — much weaker than the centre"] },
          { cells: ["θ ≈ ± 2 λ/a", "second minimum"] },
          { cells: ["θ ≈ ± 2.5 λ/a", "second secondary maximum — weaker still"] },
        ]}
        caption="The secondary maxima lie roughly half-way between the minima and fade rapidly with increasing n."
      />
      <SingleSlitIntensity />
      <Callout type="note" title="Feynman on interference and diffraction">
        <p>
          &ldquo;No one has ever been able to define the difference between interference and diffraction satisfactorily.
          It is just a question of usage, and there is no specific, important physical difference between them. The best
          we can do is, roughly speaking, to say that when there are only a few sources, say two interfering sources, then
          the result is usually called interference, but if there is a large number of them, it seems that the word
          diffraction is more often used.&rdquo;
        </p>
      </Callout>
      <p>
        In the double-slit experiment the pattern on the screen is actually a superposition of single-slit diffraction
        from each slit or hole and the double-slit interference pattern.
      </p>
      <Comparison
        columns={[
          {
            title: "Interference (two sources)",
            children: (
              <ul>
                <li>Result of superposing waves from a few (here two) coherent sources.</li>
                <li>All the bright fringes have the same intensity, 4I₀.</li>
                <li>Fringes of equal width on both sides of the centre.</li>
                <li>The minima are perfectly dark.</li>
              </ul>
            ),
          },
          {
            title: "Diffraction (one slit, many sources)",
            children: (
              <ul>
                <li>Result of superposing the infinite number of secondary wavelets from one wavefront.</li>
                <li>The central maximum is the brightest; each secondary maximum is weaker than the one before.</li>
                <li>The central maximum is twice as wide as the others.</li>
                <li>Minima are at θ ≈ nλ/a; the pattern is produced even by a single narrow slit.</li>
              </ul>
            ),
          },
        ]}
      />

      <h3 id="h-10-6-2">10.6.2 Width of the Central Maximum</h3>
      <p>
        The whole pattern is extremely narrow because λ is small, so the small-angle approximation can be used throughout.
      </p>
      <Stepper
        steps={[
          {
            label: "Locate a point on the screen",
            description: (
              <>
                If D is the slit-to-screen distance, a point at angle θ is at a distance{" "}
                <Formula>{String.raw`y=D\tan\theta`}</Formula> from the centre C.
              </>
            ),
          },
          {
            label: "Small angles",
            description: (
              <>
                <Formula>{String.raw`\tan\theta\approx\theta`}</Formula>, so{" "}
                <Formula>{String.raw`y\approx D\theta`}</Formula>.
              </>
            ),
          },
          {
            label: "First minimum",
            description: (
              <>
                The first dark point on either side is at <Formula>{String.raw`\theta=\lambda/a`}</Formula>, i.e. at{" "}
                <Formula>{String.raw`y=\frac{\lambda D}{a}`}</Formula> from C.
              </>
            ),
          },
          {
            label: "Double it",
            description: (
              <>
                The central maximum is symmetrically placed, so its full width is twice this distance.
              </>
            ),
          },
        ]}
      />
      <FormulaBlock latex={String.raw`w=2\,\frac{\lambda D}{a}`} label="Width of the central maximum" important />
      <ul>
        <li>The width is proportional to the wavelength — red light gives a wider central maximum than blue.</li>
        <li>The width is proportional to D, the distance to the screen.</li>
        <li>The width is inversely proportional to the slit width a: a narrower slit produces a broader spread of light.</li>
      </ul>
      <MistakeCard
        mistake="Using θ = (n + ½)λ/a to locate the first dark fringe of a single slit."
        correction="For a single slit the minima are at a sinθ = nλ, i.e. θ ≈ nλ/a — the half-odd multiples locate the weak secondary maxima, not the minima."
        example="Slit 0.2 mm wide, λ = 600 nm: first minimum at sinθ = 3 × 10⁻³, θ ≈ 0.17° — a fraction of a degree."
      />
      <p>
        In interference and diffraction, light energy is redistributed. If it reduces in one region, producing a dark
        fringe, it increases in another region, producing a bright fringe.
      </p>
      <Highlight color="green">
        There is no gain or loss of energy in interference or diffraction — only a redistribution of it, which is
        consistent with the principle of conservation of energy.
      </Highlight>

      <h3 id="h-10-6-3">10.6.3 Seeing the Single Slit Diffraction Pattern</h3>
      <p>It is surprisingly easy to see the single-slit diffraction pattern for oneself. The equipment needed can be found in most homes.</p>
      <ul>
        <li>Take two razor blades and one clear glass electric bulb, preferably with a straight filament.</li>
        <li>Hold the two blades so that the edges are parallel, with a narrow slit in between — easily done with the thumb and forefingers.</li>
        <li>Keep the slit parallel to the filament, right in front of the eye, and wear spectacles if you normally do.</li>
        <li>With a slight adjustment of the width of the slit and the parallelism of the edges, the bright and dark bands appear.</li>
        <li>The position of every band except the central one depends on wavelength, so the bands show some colours.</li>
        <li>A red or blue filter makes the fringes clearer; with both filters available, the wider fringes for red compared to blue can be seen.</li>
        <li>In this experiment the filament plays the role of the first slit S, and the lens of the eye focusses the pattern on the retina.</li>
      </ul>
      <Callout type="note" title="A home-made double slit">
        With some effort a double slit can be cut in aluminium foil with a blade, and the bulb filament viewed through it to
        repeat Young&apos;s experiment. A bright source for daytime is the reflection of the Sun in a shiny convex surface,
        such as a cycle bell. Do not use direct sunlight — it can damage the eye, and it gives no fringes anyway, because
        the Sun subtends an angle of about (1/2)°.
      </Callout>

      <h2 id="h-10-7">10.7 Polarisation</h2>
      <p>
        Hold a long string horizontally with the other end fixed. Move the free end up and down in a periodic manner and a
        wave travels along the string in the +x direction, described by
      </p>
      <FormulaBlock latex={String.raw`y\left(x,t\right)=a\sin\left(kx-\omega t\right)`} tag="Eq. (10.15)" />
      <ul>
        <li>
          <Formula>{String.raw`a`}</Formula> and <Formula>{String.raw`\omega=2\pi\nu`}</Formula> are the amplitude and the
          angular frequency of the wave.
        </li>
        <li>
          The wave number is <Formula>{String.raw`k=\frac{2\pi}{\lambda}`}</Formula>.
        </li>
        <li>The displacement is along y, at right angles to the direction of propagation, so the wave is <strong>transverse</strong>.</li>
        <li>Since the displacement is along y, the wave is referred to as a <strong>y-polarised</strong> wave.</li>
        <li>Each point on the string moves on a straight line, so the wave is also called <strong>linearly polarised</strong>.</li>
        <li>The string stays confined to the x-y plane, so the wave is also called <strong>plane polarised</strong>.</li>
      </ul>
      <FormulaBlock latex={String.raw`k=\frac{2\pi}{\lambda}`} label="Wave number" tag="Eq. (10.16)" />
      <p>Vibrating the string in the x-z plane instead generates a z-polarised wave, with the same frequency and speed.</p>
      <FormulaBlock latex={String.raw`z\left(x,t\right)=a\sin\left(kx-\omega t\right)`} tag="Eq. (10.17)" />
      <p>
        If the plane of vibration of the string is changed randomly in very short intervals of time, the wave is{" "}
        <strong>unpolarised</strong>: its displacement changes randomly with time, though it is always perpendicular to the
        direction of propagation.
      </p>
      <Callout type="important" title="Light is transverse">
        Light waves are transverse in nature; that is, the electric field associated with a propagating light wave is
        always at right angles to the direction of propagation of the wave. This can be easily demonstrated using a simple
        polaroid.
      </Callout>
      <p>
        A <strong>polaroid</strong> consists of long chain molecules aligned in a particular direction. The electric
        vectors associated with the propagating light wave which lie along the direction of the aligned molecules get
        absorbed.
      </p>
      <Highlight color="yellow">
        If an unpolarised light wave is incident on a polaroid, the transmitted wave is linearly polarised with the
        electric vector oscillating perpendicular to the aligned molecules — that direction is the pass-axis of the
        polaroid.
      </Highlight>

      <h3 id="h-10-7-1">10.7.1 Polaroids and Malus&apos; Law</h3>
      <p>Light from an ordinary source, such as a sodium lamp, is passed through a polaroid sheet P₁:</p>
      <ul>
        <li>Its intensity is reduced by half.</li>
        <li>Rotating P₁ has no effect on the transmitted beam — the transmitted intensity remains constant.</li>
      </ul>
      <p>Now place an identical polaroid P₂ before P₁:</p>
      <ul>
        <li>The light is reduced in intensity on passing through P₂ alone.</li>
        <li>Rotating P₁ now has a dramatic effect on the light coming through P₂.</li>
        <li>In one position the intensity transmitted by P₂ followed by P₁ is nearly zero.</li>
        <li>Turned by 90° from that position, P₁ transmits nearly the full intensity emerging from P₂.</li>
      </ul>
      <PolaroidTrain />
      <p>
        The experiment is understood by assuming that light passing through P₂ gets polarised along the pass-axis of P₂.
        If the pass-axis of P₂ makes an angle θ with the pass-axis of P₁, then when the polarised beam passes through P₂,
        the component <Formula>{String.raw`E\cos\theta`}</Formula> along the pass-axis of P₂ passes through, while the
        perpendicular component is absorbed.
      </p>
      <FormulaBlock latex={String.raw`I=I_0\cos^2\theta`} label="Malus' law" tag="Eq. (10.18)" important />
      <ul>
        <li>
          <Formula>{String.raw`I_0`}</Formula> is the intensity of the polarised light after passing through P₁.
        </li>
        <li>The intensity coming out of a single polaroid is half the incident intensity.</li>
        <li>With a second polaroid the intensity can be controlled from 50% down to zero by adjusting the angle between the two pass-axes.</li>
        <li>At θ = 90° the polaroids are <strong>crossed</strong> and no light is transmitted.</li>
      </ul>

      <Expandable title="Example 10.2 — A polaroid rotated between two crossed polaroids" variant="example">
        <ProblemSolution.Problem>
          <p>Discuss the intensity of transmitted light when a polaroid sheet is rotated between two crossed polaroids.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Let <Formula>{String.raw`I_0`}</Formula> be the intensity of polarised light after passing through the first
            polariser P₁. Then the intensity of light after passing through the second polariser P₂ will be{" "}
            <Formula>{String.raw`I=I_0\cos^2\theta`}</Formula>, where θ is the angle between the pass-axes of P₁ and P₂.
          </p>
          <p className="mt-2">
            Since P₁ and P₃ are crossed, the angle between the pass-axes of P₂ and P₃ will be{" "}
            <Formula>{String.raw`\left(\pi/2-\theta\right)`}</Formula>. Hence the intensity of light emerging from P₃ will
            be
          </p>
          <FormulaBlock
            latex={String.raw`I=I_0\cos^2\theta\,\cos^2\!\left(\frac{\pi}{2}-\theta\right)=I_0\cos^2\theta\,\sin^2\theta=\frac{I_0}{4}\sin^2 2\theta`}
          />
          <p>
            Therefore the transmitted intensity will be maximum when{" "}
            <Formula>{String.raw`\theta=\pi/4`}</Formula> — that is, when the middle polaroid sits at 45° to the other two.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-10-7-2">10.7.2 Uses of Polaroids</h3>
      <ul>
        <li>Polaroids can be used to control the intensity — in sunglasses and windowpanes.</li>
        <li>They are used in photographic cameras, to cut glare reflected from surfaces.</li>
        <li>They are used in 3D movie cameras, where the two eyes are shown differently polarised images.</li>
      </ul>
      <Callout type="note" title="Exam supplement — polarisation by reflection (Brewster's law)">
        <p>
          This short addition is beyond the section printed above, but is a standard board-exam companion to Malus&apos;
          law. When unpolarised light is reflected from a transparent surface, the reflected light is completely plane
          polarised at one particular angle of incidence:
        </p>
        <FormulaBlock latex={String.raw`\tan\theta_B=\frac{n_2}{n_1}`} label="Brewster's law — n₂ = 1 for air above a medium of index n₂" />
        <p>
          At this angle the reflected and refracted rays are mutually perpendicular, and the reflected beam carries only
          the component of the electric field perpendicular to the plane of incidence.
        </p>
      </Callout>

      <h2 id="h-10-equations">Key Equations — Revision Board</h2>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Refraction (Huygens)</p>
          <FormulaBlock latex={String.raw`\frac{\sin i}{\sin r}=\frac{v_1}{v_2},\qquad n_1\sin i=n_2\sin r`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Speed, wavelength, index</p>
          <FormulaBlock latex={String.raw`n=\frac{c}{v},\qquad \frac{\lambda_1}{\lambda_2}=\frac{v_1}{v_2}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Critical angle</p>
          <FormulaBlock latex={String.raw`\sin i_c=\frac{n_2}{n_1}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Two-source intensity</p>
          <FormulaBlock latex={String.raw`I=4I_0\cos^2\left(\frac{\phi}{2}\right),\qquad \Delta\phi=\frac{2\pi}{\lambda}\Delta x`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Interference conditions</p>
          <FormulaBlock latex={String.raw`\Delta x=n\lambda\ \text{(bright)},\qquad \Delta x=\left(n+\tfrac{1}{2}\right)\lambda\ \text{(dark)}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Young&apos;s fringes</p>
          <FormulaBlock latex={String.raw`x_n=n\frac{\lambda D}{d},\qquad \beta=\frac{\lambda D}{d}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Single-slit diffraction</p>
          <FormulaBlock latex={String.raw`a\sin\theta=n\lambda\ \text{(minima)},\qquad w=\frac{2\lambda D}{a}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Polarisation</p>
          <FormulaBlock latex={String.raw`I=I_0\cos^2\theta,\qquad \tan\theta_B=\frac{n_2}{n_1}`} important />
        </FormulaCard>
      </div>

      <h2 id="h-10-exercises">Back-of-Chapter Exercises</h2>
      <p className="text-sm text-muted-foreground">
        Every exercise of this chapter&apos;s text with the complete answer key. Work each one out before opening the panel.
      </p>
      <Expandable title="Exercises 10.1 – 10.6 — questions and answer key" variant="exercise">
        <ExerciseQa
          questions={[
            "Monochromatic light of wavelength 589 nm is incident from air on a water surface. What are the wavelength, frequency and speed of (a) reflected, and (b) refracted light? Refractive index of water is 1.33.",
            "What is the shape of the wavefront in each of the following cases: (a) Light diverging from a point source. (b) Light emerging out of a convex lens when a point source is placed at its focus. (c) The portion of the wavefront of light from a distant star intercepted by the Earth.",
            "(a) The refractive index of glass is 1.5. What is the speed of light in glass? (Speed of light in vacuum is 3.0 × 10⁸ m s⁻¹.) (b) Is the speed of light in glass independent of the colour of light? If not, which of the two colours red and violet travels slower in a glass prism?",
            "In a Young's double-slit experiment, the slits are separated by 0.28 mm and the screen is placed 1.4 m away. The distance between the central bright fringe and the fourth bright fringe is measured to be 1.2 cm. Determine the wavelength of light used in the experiment.",
            "In Young's double-slit experiment using monochromatic light of wavelength λ, the intensity of light at a point on the screen where the path difference is λ, is K units. What is the intensity of light at a point where the path difference is λ/3?",
            "A beam of light consisting of two wavelengths, 650 nm and 520 nm, is used to obtain interference fringes in a Young's double-slit experiment. (a) Find the distance of the third bright fringe on the screen from the central maximum for wavelength 650 nm. (b) What is the least distance from the central maximum where the bright fringes due to both the wavelengths coincide? (The slits are 2 mm apart and the screen is 1.2 m away.)",
          ]}
          answers={[
            "Reflected light: the frequency and speed are unchanged, so λ = 589 nm, v = 3.0 × 10⁸ m s⁻¹ and ν = c/λ = 5.09 × 10¹⁴ Hz. Refracted light: the frequency stays 5.09 × 10¹⁴ Hz, while v = c/n = 2.26 × 10⁸ m s⁻¹ and λ = 589/1.33 = 443 nm.",
            "(a) Spherical, diverging, centred on the point source. (b) Plane — the rays emerging from the lens are parallel, so the wavefront is a plane surface. (c) Plane — the Earth intercepts such a small part of the enormous sphere centred on the star that the patch is practically flat.",
            "(a) v = c/n = 3.0 × 10⁸/1.5 = 2.0 × 10⁸ m s⁻¹. (b) No — the refractive index depends on colour (dispersion), and n is larger for violet than for red, so violet travels slower than red in the prism.",
            "The fourth bright fringe is at 4β from the centre, so β = 1.2/4 = 0.3 cm = 3 × 10⁻³ m. Then λ = βd/D = (3 × 10⁻³ × 0.28 × 10⁻³)/1.4 = 6.0 × 10⁻⁷ m ≈ 600 nm.",
            "A path difference of λ means a phase difference of 2π, so I = 4I₀ = K, giving I₀ = K/4. For a path difference of λ/3 the phase difference is 2π/3, so I = 4I₀ cos²(π/3) = K × (1/2)² = K/4.",
            "(a) β = λD/d = (650 × 10⁻⁹ × 1.2)/(2 × 10⁻³) = 3.9 × 10⁻⁴ m, so the third bright fringe is at 3β = 1.17 mm from the centre. (b) The fringes coincide when n₁λ₁ = n₂λ₂, i.e. 650n₁ = 520n₂, or n₁ : n₂ = 4 : 5. The first coincidence is at n₁ = 4, i.e. x = 4β = 1.56 mm.",
          ]}
        />
      </Expandable>
    </>
  );
}





