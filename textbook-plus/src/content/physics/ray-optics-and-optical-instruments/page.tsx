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

const INCIDENT = "#e11d48";
const REFRACTED = "#10b981";
const VIRTUAL = "#8b5cf6";
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

function Ray({
  d,
  color = INCIDENT,
  dash,
  width = 1.8,
}: {
  d: string;
  color?: string;
  dash?: string;
  width?: number;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeDasharray={dash}
    />
  );
}

/* ------------------------------------------------------------------ */
/* 9.1 — ray picture                                                  */
/* ------------------------------------------------------------------ */

function ReflectionLawDiagram() {
  const hatch = [60, 100, 140, 180, 260, 300, 340, 380];
  return (
    <Figure n="9.1" caption="At every point of a reflecting surface the reflected ray, the incident ray and the normal lie in one plane, and i = r.">
      <svg viewBox="0 0 440 205" className="h-auto w-full" role="img" aria-label="Law of reflection at a plane surface">
        <line x1="40" y1="158" x2="400" y2="158" stroke={STRUCT} strokeWidth="2.5" />
        {hatch.map((x) => (
          <line key={x} x1={x} y1="158" x2={x - 14} y2="174" stroke={MUTED} strokeWidth="1" strokeOpacity="0.5" />
        ))}
        <Ray d="M 220 38 L 220 158" color={MUTED} dash="5 4" width={1.3} />
        <Ray d="M 120 58 L 220 158" />
        <Ray d="M 220 158 L 320 58" />
        <Ray d="M 188 126 A 45 45 0 0 1 220 113" color={AMBER} width={1.4} />
        <Ray d="M 220 113 A 45 45 0 0 1 252 126" color={AMBER} width={1.4} />
        <circle cx="220" cy="158" r="3.2" fill={STRUCT} />
        <Lbl x={194} y={146} color={AMBER}>i</Lbl>
        <Lbl x={246} y={146} color={AMBER}>r</Lbl>
        <Lbl x={92} y={48} anchor="start">Incident ray</Lbl>
        <Lbl x={332} y={48} anchor="start">Reflected ray</Lbl>
        <Lbl x={228} y={42} anchor="start">Normal</Lbl>
        <Lbl x={300} y={192}>Reflecting surface</Lbl>
      </svg>
    </Figure>
  );
}

function CartesianSignDiagram() {
  return (
    <Figure n="9.2" caption="Cartesian sign convention. Distances along the incident light are positive, against it negative; heights above the axis positive, below it negative.">
      <svg viewBox="0 0 440 200" className="h-auto w-full" role="img" aria-label="Cartesian sign convention on the principal axis">
        <line x1="30" y1="105" x2="412" y2="105" stroke={STRUCT} strokeWidth="1.8" />
        <polygon points="420,105 408,100 408,110" fill={STRUCT} />
        <line x1="222" y1="28" x2="222" y2="182" stroke={STRUCT} strokeWidth="2.5" />
        <Lbl x={228} y={188} anchor="start">P (pole) / O (optical centre)</Lbl>
        <Ray d="M 60 62 L 120 62" color={STRUCT} width={1.4} />
        <polygon points="128,62 116,57 116,67" fill={STRUCT} />
        <Lbl x={60} y={50} anchor="start">incident light</Lbl>
        <Ray d="M 222 105 L 222 55" color={AMBER} width={1.6} />
        <polygon points="222,48 217,60 227,60" fill={AMBER} />
        <Lbl x={232} y={60} anchor="start" color={AMBER}>height: +</Lbl>
        <Ray d="M 222 105 L 222 158" color={INCIDENT} width={1.6} />
        <polygon points="222,165 217,153 227,153" fill={INCIDENT} />
        <Lbl x={232} y={158} anchor="start" color={INCIDENT}>height: −</Lbl>
        <Ray d="M 232 132 L 92 132" color={REFRACTED} width={1.4} />
        <polygon points="84,132 96,127 96,137" fill={REFRACTED} />
        <Lbl x={100} y={124} anchor="start" color={REFRACTED}>distances against the light: −</Lbl>
        <Ray d="M 212 168 L 380 168" color={VIRTUAL} width={1.4} />
        <polygon points="388,168 376,163 376,173" fill={VIRTUAL} />
        <Lbl x={300} y={160} anchor="middle" color={VIRTUAL}>distances along the light: +</Lbl>
      </svg>
    </Figure>
  );
}

function MirrorFocusDiagram() {
  return (
    <Figure n="9.3" caption="A parallel paraxial beam converges at F for a concave mirror (a) and appears to diverge from F for a convex mirror (b).">
      <svg viewBox="0 0 520 190" className="h-auto w-full" role="img" aria-label="Focus of concave and convex mirrors">
        <Ray d="M 165 95 L 30 95" color={STRUCT} dash="4 4" width={1.1} />
        <path d="M 150 28 Q 180 95 150 162" fill="none" stroke={STRUCT} strokeWidth="2.5" />
        <Ray d="M 25 60 L 160 60" />
        <Ray d="M 160 60 L 120 95 L 100 118" />
        <Ray d="M 25 130 L 160 130" />
        <Ray d="M 160 130 L 120 95 L 100 72" />
        <circle cx="120" cy="95" r="3" fill={AMBER} />
        <circle cx="75" cy="95" r="3" fill={VIRTUAL} />
        <circle cx="165" cy="95" r="3" fill={STRUCT} />
        <Lbl x={120} y={112} color={AMBER}>F</Lbl>
        <Lbl x={75} y={112} color={VIRTUAL}>C</Lbl>
        <Lbl x={165} y={80} color={STRUCT}>P</Lbl>
        <Lbl x={88} y={178}>(a) concave — real focus</Lbl>

        <Ray d="M 315 95 L 450 95" color={STRUCT} dash="4 4" width={1.1} />
        <path d="M 330 28 Q 300 95 330 162" fill="none" stroke={STRUCT} strokeWidth="2.5" />
        <Ray d="M 215 60 L 316 60" />
        <Ray d="M 316 60 L 250 44" />
        <Ray d="M 316 60 L 360 95" color={VIRTUAL} dash="4 3" width={1.3} />
        <Ray d="M 215 130 L 316 130" />
        <Ray d="M 316 130 L 250 146" />
        <Ray d="M 316 130 L 360 95" color={VIRTUAL} dash="4 3" width={1.3} />
        <circle cx="315" cy="95" r="3" fill={STRUCT} />
        <circle cx="360" cy="95" r="3" fill={AMBER} />
        <circle cx="405" cy="95" r="3" fill={VIRTUAL} />
        <Lbl x={315} y={80} color={STRUCT}>P</Lbl>
        <Lbl x={360} y={112} color={AMBER}>F</Lbl>
        <Lbl x={405} y={112} color={VIRTUAL}>C</Lbl>
        <Lbl x={350} y={178}>(b) convex — virtual focus</Lbl>
      </svg>
    </Figure>
  );
}

function ConcaveImageDiagram() {
  return (
    <Figure n="9.5" caption="Ray diagram for a real image by a concave mirror: one ray parallel to the axis, one through C, one through F.">
      <svg viewBox="0 0 460 210" className="h-auto w-full" role="img" aria-label="Real image formed by a concave mirror">
        <line x1="20" y1="105" x2="450" y2="105" stroke={STRUCT} strokeWidth="1.3" />
        <path d="M 400 25 Q 437 105 400 185" fill="none" stroke={STRUCT} strokeWidth="2.5" />
        <Ray d="M 180 65 L 400 65" />
        <Ray d="M 400 65 L 340 125" />
        <Ray d="M 180 65 L 400 145" color={VIRTUAL} width={1.4} />
        <Ray d="M 180 65 L 340 125" color={VIRTUAL} width={1.4} />
        <Ray d="M 180 65 L 180 105" color={AMBER} width={2.2} />
        <polygon points="180,60 175,72 185,72" fill={AMBER} />
        <Ray d="M 340 105 L 340 125" color={VIRTUAL} width={2.2} />
        <polygon points="340,130 335,118 345,118" fill={VIRTUAL} />
        <circle cx="300" cy="105" r="3" fill={VIRTUAL} />
        <circle cx="358" cy="105" r="3" fill={AMBER} />
        <circle cx="419" cy="105" r="3" fill={STRUCT} />
        <Lbl x={180} y={52} color={AMBER}>B</Lbl>
        <Lbl x={172} y={120} color={AMBER}>A</Lbl>
        <Lbl x={334} y={142} color={VIRTUAL}>B′</Lbl>
        <Lbl x={332} y={120} color={VIRTUAL}>A′</Lbl>
        <Lbl x={300} y={122} color={VIRTUAL}>C</Lbl>
        <Lbl x={358} y={122} color={AMBER}>F</Lbl>
        <Lbl x={418} y={122} color={STRUCT}>P</Lbl>
        <Lbl x={250} y={196}>object beyond C → image between C and F</Lbl>
      </svg>
    </Figure>
  );
}

function ConvexMirrorImageDiagram() {
  return (
    <Figure n="9.6" caption="A convex mirror always gives a virtual, erect, diminished image between P and F, whatever the object position.">
      <svg viewBox="0 0 440 200" className="h-auto w-full" role="img" aria-label="Virtual image formed by a convex mirror">
        <line x1="20" y1="105" x2="430" y2="105" stroke={STRUCT} strokeWidth="1.3" />
        <path d="M 300 35 Q 268 105 300 175" fill="none" stroke={STRUCT} strokeWidth="2.5" />
        <Ray d="M 140 65 L 283 65" />
        <Ray d="M 283 65 L 200 40" />
        <Ray d="M 283 65 L 335 105" color={VIRTUAL} dash="4 3" width={1.2} />
        <Ray d="M 140 65 L 283 94" color={VIRTUAL} width={1.3} />
        <Ray d="M 283 94 L 400 110" color={VIRTUAL} dash="4 3" width={1.2} />
        <Ray d="M 140 65 L 140 105" color={AMBER} width={2.2} />
        <polygon points="140,60 135,72 145,72" fill={AMBER} />
        <Ray d="M 310 105 L 310 94" color={VIRTUAL} width={2.2} />
        <circle cx="285" cy="105" r="3" fill={STRUCT} />
        <circle cx="335" cy="105" r="3" fill={AMBER} />
        <circle cx="385" cy="105" r="3" fill={VIRTUAL} />
        <Lbl x={134} y={52} color={AMBER}>B</Lbl>
        <Lbl x={130} y={120} color={AMBER}>A</Lbl>
        <Lbl x={314} y={86} color={VIRTUAL}>B′</Lbl>
        <Lbl x={314} y={120} color={VIRTUAL}>A′</Lbl>
        <Lbl x={284} y={122} color={STRUCT}>P</Lbl>
        <Lbl x={335} y={122} color={AMBER}>F</Lbl>
        <Lbl x={385} y={122} color={VIRTUAL}>C</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 9.3 / 9.4 — refraction, TIR                                        */
/* ------------------------------------------------------------------ */

function SlabShiftDiagram() {
  return (
    <Figure n="9.9" caption="A parallel-sided slab: the emergent ray is parallel to the incident ray (r₂ = i₁) but laterally displaced.">
      <svg viewBox="0 0 420 210" className="h-auto w-full" role="img" aria-label="Lateral shift through a parallel-sided glass slab">
        <rect x="140" y="60" width="160" height="90" fill={VIRTUAL} fillOpacity="0.08" stroke={STRUCT} strokeWidth="1.8" />
        <Lbl x={150} y={76} anchor="start" color={MUTED}>glass</Lbl>
        <Ray d="M 60 38 L 170 60" />
        <Ray d="M 170 60 L 235 150" color={REFRACTED} />
        <Ray d="M 235 150 L 340 169" />
        <Ray d="M 170 30 L 170 84" color={MUTED} dash="4 3" width={1.1} />
        <Ray d="M 235 128 L 235 172" color={MUTED} dash="4 3" width={1.1} />
        <Ray d="M 170 60 L 340 91" color={MUTED} dash="3 3" width={1.1} />
        <Ray d="M 300 85 L 300 165" color={AMBER} width={1.3} />
        <polygon points="300,82 296,92 304,92" fill={AMBER} />
        <polygon points="300,168 296,158 304,158" fill={AMBER} />
        <Lbl x={308} y={128} anchor="start" color={AMBER}>lateral shift</Lbl>
        <Lbl x={178} y={52} anchor="start" color={AMBER}>i₁</Lbl>
        <Lbl x={180} y={80} anchor="start" color={REFRACTED}>r₁</Lbl>
        <Lbl x={226} y={146} anchor="end" color={REFRACTED}>r₂</Lbl>
        <Lbl x={248} y={168} anchor="start" color={AMBER}>i₂ = i₁</Lbl>
      </svg>
    </Figure>
  );
}

function ApparentDepthDiagram() {
  return (
    <Figure n="9.10" caption="The bottom of a tank appears raised: apparent depth h₁ = real depth h₂ / n.">
      <svg viewBox="0 0 420 200" className="h-auto w-full" role="img" aria-label="Apparent depth of a tank of water">
        <rect x="70" y="88" width="240" height="94" fill="#38bdf8" fillOpacity="0.12" stroke="none" />
        <line x1="70" y1="88" x2="310" y2="88" stroke={STRUCT} strokeWidth="2" />
        <line x1="70" y1="88" x2="70" y2="182" stroke={STRUCT} strokeWidth="1.6" />
        <line x1="310" y1="88" x2="310" y2="182" stroke={STRUCT} strokeWidth="1.6" />
        <Lbl x={150} y={104} anchor="start">water</Lbl>
        <circle cx="190" cy="178" r="3.4" fill={AMBER} />
        <Lbl x={198} y={192} anchor="start" color={AMBER}>needle (real)</Lbl>
        <Ray d="M 190 88 L 190 178" color={AMBER} width={1.4} />
        <Lbl x={198} y={140} anchor="start" color={AMBER}>h₂ (real depth)</Lbl>
        <circle cx="190" cy="140" r="3" fill={VIRTUAL} />
        <Ray d="M 176 88 L 176 140" color={VIRTUAL} width={1.3} />
        <Lbl x={168} y={120} anchor="end" color={VIRTUAL}>h₁</Lbl>
        <Ray d="M 190 178 L 232 88" color={INCIDENT} />
        <Ray d="M 232 88 L 280 40" color={INCIDENT} />
        <Ray d="M 232 88 L 190 178" color={VIRTUAL} dash="3 3" width={1.1} />
        <Ray d="M 232 60 L 232 100" color={MUTED} dash="4 3" width={1.1} />
        <circle cx="286" cy="30" r="6" fill="none" stroke={STRUCT} strokeWidth="1.4" />
        <Lbl x={286} y={50}>eye</Lbl>
      </svg>
    </Figure>
  );
}

function TirDiagram() {
  return (
    <Figure n="9.11" caption="Rays from a source A in water: r grows with i, the ray AO₃ grazes the surface at i = i_c, and AO₄ is totally internally reflected.">
      <svg viewBox="0 0 440 205" className="h-auto w-full" role="img" aria-label="Total internal reflection at a water-air interface">
        <line x1="35" y1="72" x2="405" y2="72" stroke={STRUCT} strokeWidth="2.2" />
        {[60, 110, 160, 210, 260, 310, 360].map((x) => (
          <line key={x} x1={x} y1="72" x2={x - 10} y2="60" stroke={MUTED} strokeWidth="1" strokeOpacity="0.45" />
        ))}
        <Lbl x={340} y={44}>rarer medium (air)</Lbl>
        <Lbl x={100} y={190}>denser medium (water)</Lbl>
        <circle cx="80" cy="178" r="3.4" fill={AMBER} />
        <Lbl x={72} y={192} anchor="end" color={AMBER}>A</Lbl>
        <Ray d="M 80 178 L 165 72" />
        <Ray d="M 165 72 L 250 34" color={REFRACTED} />
        <Ray d="M 165 72 L 220 140" color={VIRTUAL} width={1.2} />
        <Ray d="M 80 178 L 245 72" color={REFRACTED} />
        <Ray d="M 245 72 L 405 72" color={REFRACTED} width={2.2} />
        <Ray d="M 80 178 L 310 72" />
        <Ray d="M 310 72 L 380 148" color={INCIDENT} width={2.2} />
        <Ray d="M 165 42 L 165 96" color={MUTED} dash="4 3" width={1.1} />
        <Ray d="M 245 42 L 245 96" color={MUTED} dash="4 3" width={1.1} />
        <Ray d="M 310 42 L 310 96" color={MUTED} dash="4 3" width={1.1} />
        <Lbl x={172} y={56} anchor="start" color={AMBER}>i</Lbl>
        <Lbl x={252} y={50} anchor="start" color={REFRACTED}>r</Lbl>
        <Lbl x={252} y={88} anchor="start" color={REFRACTED}>i_c</Lbl>
        <Lbl x={318} y={62} anchor="start" color={INCIDENT}>i &gt; i_c</Lbl>
        <Lbl x={300} y={168} color={INCIDENT}>total internal reflection</Lbl>
      </svg>
    </Figure>
  );
}

function PrismTirDiagram() {
  return (
    <Figure n="9.13" caption="Prisms that bend light by 90° (a) and by 180° (b) using total internal reflection; the same prism inverts an image without changing its size.">
      <svg viewBox="0 0 480 170" className="h-auto w-full" role="img" aria-label="Totally reflecting prisms bending light by 90 and 180 degrees">
        <path d="M 60 40 L 60 120 L 140 120 Z" fill={VIRTUAL} fillOpacity="0.10" stroke={STRUCT} strokeWidth="1.8" />
        <Ray d="M 12 80 L 112 80" />
        <Ray d="M 112 80 L 95 35" color={INCIDENT} width={1.6} />
        <Ray d="M 95 40 L 95 12" color={INCIDENT} width={1.6} />
        <polygon points="95,4 90,16 100,16" fill={INCIDENT} />
        <Lbl x={60} y={140}>(a) 90°</Lbl>

        <path d="M 300 40 L 300 120 L 420 120 Z" fill={VIRTUAL} fillOpacity="0.10" stroke={STRUCT} strokeWidth="1.8" />
        <Ray d="M 250 60 L 335 60" />
        <Ray d="M 335 60 L 250 100" color={INCIDENT} width={1.6} />
        <Ray d="M 258 104 L 220 104" color={INCIDENT} width={1.4} />
        <polygon points="212,104 224,99 224,109" fill={INCIDENT} />
        <Lbl x={340} y={140}>(b) 180°</Lbl>
      </svg>
    </Figure>
  );
}

function OpticalFibreDiagram() {
  return (
    <Figure n="9.14" caption="Light zig-zags down an optical fibre by repeated total internal reflection at the core–cladding boundary.">
      <svg viewBox="0 0 460 155" className="h-auto w-full" role="img" aria-label="Optical fibre with repeated total internal reflections">
        <rect x="30" y="42" width="400" height="72" rx="6" fill={MUTED} fillOpacity="0.10" stroke={STRUCT} strokeWidth="1.4" strokeOpacity="0.4" />
        <rect x="30" y="62" width="400" height="32" rx="3" fill="#38bdf8" fillOpacity="0.16" stroke={STRUCT} strokeWidth="1" strokeOpacity="0.35" />
        <Ray d="M 30 78 L 90 63 L 150 93 L 210 63 L 270 93 L 330 63 L 390 93 L 430 78" color={INCIDENT} width={2} />
        <Ray d="M 6 78 L 30 78" color={INCIDENT} width={2} />
        <polygon points="4,78 14,74 14,82" fill={INCIDENT} />
        <Lbl x={40} y={54} anchor="start">cladding — lower n</Lbl>
        <Lbl x={40} y={80} anchor="start" color={MUTED}>core — higher n</Lbl>
        <Lbl x={120} y={132} color={VIRTUAL}>repeated total internal reflection</Lbl>
        <Ray d="M 430 78 L 448 78" color={INCIDENT} width={2} />
        <polygon points="456,78 444,73 444,83" fill={INCIDENT} />
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 9.5 — spherical surfaces, lenses, power, combinations              */
/* ------------------------------------------------------------------ */

function SphericalSurfaceDiagram() {
  return (
    <Figure n="9.15" caption="Refraction at a single spherical surface: object O, centre of curvature C, image I, with the normal CN through C.">
      <svg viewBox="0 0 440 195" className="h-auto w-full" role="img" aria-label="Refraction at a spherical surface separating two media">
        <line x1="20" y1="100" x2="425" y2="100" stroke={STRUCT} strokeWidth="1.3" />
        <path d="M 222 28 Q 182 100 222 172" fill="none" stroke={STRUCT} strokeWidth="2.5" />
        <Ray d="M 30 100 L 196 62" />
        <Ray d="M 196 62 L 350 100" color={REFRACTED} />
        <Ray d="M 110 100 L 196 62 L 205 50" color={VIRTUAL} dash="4 3" width={1.2} />
        <Ray d="M 196 62 L 196 100" color={MUTED} dash="4 3" width={1.1} />
        <circle cx="30" cy="100" r="3.2" fill={AMBER} />
        <circle cx="110" cy="100" r="3" fill={VIRTUAL} />
        <circle cx="196" cy="100" r="3" fill={STRUCT} />
        <circle cx="196" cy="62" r="3" fill={INCIDENT} />
        <circle cx="350" cy="100" r="3.2" fill={REFRACTED} />
        <Lbl x={24} y={116} anchor="start" color={AMBER}>O</Lbl>
        <Lbl x={110} y={116} color={VIRTUAL}>C</Lbl>
        <Lbl x={196} y={118} color={STRUCT}>M</Lbl>
        <Lbl x={190} y={54} color={INCIDENT}>N</Lbl>
        <Lbl x={350} y={116} color={REFRACTED}>I</Lbl>
        <Lbl x={150} y={88} anchor="middle" color={VIRTUAL}>R</Lbl>
        <Lbl x={90} y={44} anchor="middle">n₁</Lbl>
        <Lbl x={330} y={44} anchor="middle">n₂</Lbl>
      </svg>
    </Figure>
  );
}

function LensMakerDiagram() {
  return (
    <Figure n="9.16" caption="Image formation by a double convex lens in two steps: the first surface forms I₁, which acts as a virtual object for the second surface and gives I.">
      <svg viewBox="0 0 460 175" className="h-auto w-full" role="img" aria-label="Two-step refraction through a double convex lens">
        <line x1="15" y1="95" x2="445" y2="95" stroke={STRUCT} strokeWidth="1.3" />
        <path d="M 228 30 Q 262 95 228 160 Q 194 95 228 30 Z" fill="#38bdf8" fillOpacity="0.14" stroke={STRUCT} strokeWidth="1.6" />
        <Ray d="M 55 95 L 55 65" color={AMBER} width={2.2} />
        <polygon points="55,58 50,70 60,70" fill={AMBER} />
        <Lbl x={48} y={110} anchor="end" color={AMBER}>O</Lbl>
        <Ray d="M 55 65 L 213 68" />
        <Ray d="M 213 68 L 350 95" color={REFRACTED} />
        <Ray d="M 55 65 L 350 95" color={VIRTUAL} dash="3 3" width={1.1} />
        <circle cx="350" cy="95" r="3" fill={VIRTUAL} />
        <Lbl x={350} y={112} color={VIRTUAL}>I₁ (first surface)</Lbl>
        <circle cx="420" cy="95" r="3" fill={REFRACTED} />
        <Lbl x={410} y={80} color={REFRACTED}>I</Lbl>
        <Lbl x={200} y={130} anchor="middle">first surface</Lbl>
        <Lbl x={268} y={130} anchor="middle">second surface</Lbl>
        <circle cx="150" cy="95" r="2.6" fill={MUTED} />
        <Lbl x={150} y={82} color={MUTED}>C₁</Lbl>
        <circle cx="330" cy="95" r="2.6" fill={MUTED} />
        <Lbl x={330} y={82} color={MUTED}>C₂</Lbl>
      </svg>
    </Figure>
  );
}

function LensRayRulesDiagram() {
  return (
    <Figure n="9.17" caption="Standard rays through (a) a convex lens and (b) a concave lens: a parallel ray goes (or appears to come) from the second focus, and a ray through the optical centre is undeviated.">
      <svg viewBox="0 0 520 195" className="h-auto w-full" role="img" aria-label="Ray tracing rules for convex and concave lenses">
        <line x1="15" y1="100" x2="250" y2="100" stroke={STRUCT} strokeWidth="1.2" />
        <ellipse cx="140" cy="100" rx="9" ry="44" fill={VIRTUAL} fillOpacity="0.16" stroke={STRUCT} strokeWidth="1.5" />
        <Ray d="M 20 66 L 139 66" />
        <Ray d="M 139 66 L 200 100 L 240 112" />
        <Ray d="M 20 134 L 139 100 L 240 72" color={REFRACTED} />
        <Ray d="M 20 100 L 139 100" color={MUTED} dash="4 3" width={1.1} />
        <circle cx="200" cy="100" r="2.8" fill={AMBER} />
        <Lbl x={200} y={118} color={AMBER}>F′</Lbl>
        <circle cx="80" cy="100" r="2.8" fill={AMBER} />
        <Lbl x={80} y={118} color={AMBER}>F</Lbl>
        <Lbl x={120} y={182}>(a) convex lens</Lbl>

        <line x1="270" y1="100" x2="505" y2="100" stroke={STRUCT} strokeWidth="1.2" />
        <ellipse cx="380" cy="100" rx="9" ry="44" fill={VIRTUAL} fillOpacity="0.16" stroke={STRUCT} strokeWidth="1.5" />
        <Ray d="M 275 66 L 379 66" />
        <Ray d="M 379 66 L 505 40" />
        <Ray d="M 379 66 L 330 100" color={VIRTUAL} dash="4 3" width={1.2} />
        <Ray d="M 275 134 L 379 100 L 505 78" color={REFRACTED} />
        <circle cx="330" cy="100" r="2.8" fill={AMBER} />
        <Lbl x={330} y={118} color={AMBER}>F</Lbl>
        <circle cx="440" cy="100" r="2.8" fill={MUTED} />
        <Lbl x={440} y={118} color={MUTED}>F′</Lbl>
        <Lbl x={360} y={182}>(b) concave lens</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 9.6 — prism, dispersion                                            */
/* ------------------------------------------------------------------ */

function PrismDeviationDiagram() {
  return (
    <Figure n="9.21" caption="Light through a triangular prism: deviation at the first face is i − r₁, at the second e − r₂, so δ = i + e − A.">
      <svg viewBox="0 0 460 225" className="h-auto w-full" role="img" aria-label="Refraction of light through a triangular glass prism">
        <path d="M 230 34 L 150 170 L 330 170 Z" fill={VIRTUAL} fillOpacity="0.09" stroke={STRUCT} strokeWidth="1.8" />
        <Ray d="M 55 84 L 176 127" />
        <Ray d="M 176 127 L 311 145" color={REFRACTED} />
        <Ray d="M 311 145 L 425 178" />
        <Ray d="M 176 127 L 232 79" color={MUTED} dash="4 3" width={1.1} />
        <Ray d="M 311 145 L 288 219" color={MUTED} dash="4 3" width={1.1} />
        <Ray d="M 55 84 L 425 178" color={MUTED} dash="3 4" width={1} />
        <circle cx="230" cy="34" r="2.6" fill={STRUCT} />
        <circle cx="150" cy="170" r="2.6" fill={STRUCT} />
        <circle cx="330" cy="170" r="2.6" fill={STRUCT} />
        <circle cx="176" cy="127" r="2.8" fill={INCIDENT} />
        <circle cx="311" cy="145" r="2.8" fill={INCIDENT} />
        <Lbl x={230} y={26}>A</Lbl>
        <Lbl x={142} y={186}>B</Lbl>
        <Lbl x={338} y={186}>C</Lbl>
        <Lbl x={46} y={78} anchor="end">P</Lbl>
        <Lbl x={170} y={144} color={INCIDENT}>Q</Lbl>
        <Lbl x={318} y={136} color={INCIDENT}>R</Lbl>
        <Lbl x={430} y={192} anchor="end">S</Lbl>
        <Lbl x={188} y={112} color={AMBER}>i</Lbl>
        <Lbl x={196} y={132} color={REFRACTED}>r₁</Lbl>
        <Lbl x={294} y={162} color={REFRACTED}>r₂</Lbl>
        <Lbl x={330} y={166} color={AMBER}>e</Lbl>
        <Lbl x={378} y={152} color={VIRTUAL}>δ</Lbl>
      </svg>
    </Figure>
  );
}

function MinimumDeviationGraph() {
  return (
    <Figure n="9.22" caption="δ against i for a prism: the curve is symmetric about i = e, and the minimum deviation Dₘ occurs when the ray inside the prism is parallel to the base.">
      <svg viewBox="0 0 440 215" className="h-auto w-full" role="img" aria-label="Graph of angle of deviation versus angle of incidence for a prism">
        <line x1="62" y1="182" x2="405" y2="182" stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="413,182 401,177 401,187" fill={STRUCT} />
        <line x1="62" y1="182" x2="62" y2="28" stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="62,20 57,32 67,32" fill={STRUCT} />
        <path d="M 92 62 C 150 176 322 176 380 62" fill="none" stroke={VIRTUAL} strokeWidth="2.2" />
        <Ray d="M 62 152 L 236 152" color={AMBER} dash="4 3" width={1.2} />
        <Ray d="M 236 152 L 236 182" color={AMBER} dash="4 3" width={1.2} />
        <circle cx="236" cy="152" r="3" fill={AMBER} />
        <Lbl x={54} y={156} anchor="end" color={AMBER}>Dₘ</Lbl>
        <Lbl x={236} y={198} color={AMBER}>i = e</Lbl>
        <Lbl x={54} y={36} anchor="end">δ</Lbl>
        <Lbl x={398} y={200}>i</Lbl>
      </svg>
    </Figure>
  );
}

function DispersionPrismDiagram() {
  const fan = [
    { c: "#ef4444", y: 168 },
    { c: "#f97316", y: 176 },
    { c: "#eab308", y: 184 },
    { c: "#10b981", y: 192 },
    { c: "#3b82f6", y: 200 },
    { c: "#8b5cf6", y: 208 },
  ];
  return (
    <Figure n="9.21a" caption="Supplementary — dispersion: white light splits into its constituent colours because the refractive index depends on wavelength — red is deviated least, violet most.">
      <svg viewBox="0 0 440 225" className="h-auto w-full" role="img" aria-label="White light dispersed into colours by a prism">
        <path d="M 215 34 L 140 165 L 300 165 Z" fill={VIRTUAL} fillOpacity="0.09" stroke={STRUCT} strokeWidth="1.8" />
        <Ray d="M 30 92 L 178 133" color={STRUCT} width={2.4} />
        <Lbl x={34} y={82} anchor="start">white light</Lbl>
        <Ray d="M 178 133 L 275 158" color={MUTED} width={1.6} />
        {fan.map((f) => (
          <Ray key={f.c} d={`M 275 158 L 420 ${f.y}`} color={f.c} width={2} />
        ))}
        <Lbl x={392} y={162} color="#ef4444">R</Lbl>
        <Lbl x={420} y={220} color="#8b5cf6">V</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 9.7 — optical instruments                                          */
/* ------------------------------------------------------------------ */

function SimpleMicroscopeDiagram() {
  return (
    <Figure n="9.23" caption="Simple microscope: the object is inside the focal length, so the image is virtual, erect and magnified, at the near point D or at infinity.">
      <svg viewBox="0 0 460 190" className="h-auto w-full" role="img" aria-label="Simple microscope with object inside the focal length">
        <line x1="20" y1="115" x2="440" y2="115" stroke={STRUCT} strokeWidth="1.2" />
        <ellipse cx="260" cy="115" rx="9" ry="42" fill={VIRTUAL} fillOpacity="0.16" stroke={STRUCT} strokeWidth="1.5" />
        <Ray d="M 222 100 L 222 120" color={AMBER} width={2.2} />
        <Lbl x={222} y={136} color={AMBER}>object</Lbl>
        <Ray d="M 222 100 L 259 92" />
        <Ray d="M 259 92 L 420 122" color={INCIDENT} width={1.6} />
        <Ray d="M 259 92 L 120 60" color={VIRTUAL} dash="4 3" width={1.2} />
        <Ray d="M 222 100 L 259 115" color={REFRACTED} width={1.4} />
        <Ray d="M 259 115 L 420 132" color={REFRACTED} width={1.4} />
        <Ray d="M 259 115 L 120 60" color={VIRTUAL} dash="4 3" width={1.2} />
        <Ray d="M 120 60 L 120 115" color={VIRTUAL} width={2.4} />
        <polygon points="120,54 115,66 125,66" fill={VIRTUAL} />
        <Lbl x={118} y={132} color={VIRTUAL}>image at D</Lbl>
        <circle cx="180" cy="115" r="2.6" fill={AMBER} />
        <Lbl x={180} y={132} color={AMBER}>F</Lbl>
        <circle cx="424" cy="126" r="6" fill="none" stroke={STRUCT} strokeWidth="1.3" />
        <Lbl x={424} y={146}>eye</Lbl>
      </svg>
    </Figure>
  );
}

function CompoundMicroscopeDiagram() {
  return (
    <Figure n="9.24" caption="Compound microscope: the objective forms a real inverted image, and the eyepiece magnifies it into a final virtual, inverted image.">
      <svg viewBox="0 0 500 200" className="h-auto w-full" role="img" aria-label="Ray diagram of a compound microscope">
        <line x1="20" y1="105" x2="478" y2="105" stroke={STRUCT} strokeWidth="1.2" />
        <ellipse cx="150" cy="105" rx="8" ry="34" fill={VIRTUAL} fillOpacity="0.16" stroke={STRUCT} strokeWidth="1.5" />
        <ellipse cx="350" cy="105" rx="7" ry="26" fill={VIRTUAL} fillOpacity="0.16" stroke={STRUCT} strokeWidth="1.5" />
        <Ray d="M 118 90 L 118 108" color={AMBER} width={2.2} />
        <Lbl x={118} y={124} color={AMBER}>object</Lbl>
        <Ray d="M 118 90 L 149 98" />
        <Ray d="M 149 98 L 270 132" color={REFRACTED} />
        <Ray d="M 270 132 L 349 118" color={REFRACTED} />
        <Ray d="M 349 118 L 470 92" color={INCIDENT} width={1.5} />
        <Ray d="M 270 132 L 270 105" color={VIRTUAL} width={2.2} />
        <polygon points="270,138 265,126 275,126" fill={VIRTUAL} />
        <Lbl x={264} y={150} color={VIRTUAL}>first image (real, inverted)</Lbl>
        <Ray d="M 40 105 L 40 178" color={VIRTUAL} dash="4 3" width={2} />
        <Lbl x={46} y={176} anchor="start" color={VIRTUAL}>final image (virtual, at ∞)</Lbl>
        <Lbl x={150} y={168}>objective (f₀)</Lbl>
        <Lbl x={350} y={168}>eyepiece (fₑ)</Lbl>
        <Ray d="M 150 182 L 350 182" color={AMBER} width={1.2} />
        <Lbl x={250} y={194} color={AMBER}>tube length L</Lbl>
      </svg>
    </Figure>
  );
}

function TelescopeDiagram() {
  return (
    <Figure n="9.25" caption="Refracting telescope: a parallel beam at angle α from a distant object is focused in the tube, and the eyepiece gives an angular magnification β/α = f₀/fₑ.">
      <svg viewBox="0 0 500 205" className="h-auto w-full" role="img" aria-label="Ray diagram of a refracting telescope">
        <line x1="15" y1="105" x2="480" y2="105" stroke={STRUCT} strokeWidth="1.2" />
        <ellipse cx="175" cy="105" rx="9" ry="58" fill={VIRTUAL} fillOpacity="0.14" stroke={STRUCT} strokeWidth="1.6" />
        <ellipse cx="390" cy="105" rx="7" ry="26" fill={VIRTUAL} fillOpacity="0.14" stroke={STRUCT} strokeWidth="1.5" />
        <Ray d="M 20 40 L 174 76" />
        <Ray d="M 20 70 L 174 106" color={INCIDENT} width={1.5} />
        <Ray d="M 174 76 L 310 100" color={REFRACTED} />
        <Ray d="M 174 106 L 310 100" color={REFRACTED} />
        <Ray d="M 310 100 L 389 112" color={REFRACTED} />
        <Ray d="M 389 112 L 470 130" color={INCIDENT} width={1.5} />
        <Ray d="M 310 100 L 310 105" color={VIRTUAL} width={2} />
        <Lbl x={310} y={92} color={VIRTUAL}>image</Lbl>
        <Lbl x={110} y={70} anchor="end">α</Lbl>
        <Lbl x={398} y={138} anchor="start" color={AMBER}>β</Lbl>
        <Lbl x={175} y={182}>objective (f₀)</Lbl>
        <Lbl x={390} y={182}>eyepiece (fₑ)</Lbl>
        <Ray d="M 175 192 L 390 192" color={AMBER} width={1.2} />
        <Lbl x={282} y={204} color={AMBER}>f₀ + fₑ</Lbl>
      </svg>
    </Figure>
  );
}

function CassegrainDiagram() {
  return (
    <Figure n="9.26" caption="Cassegrain reflecting telescope: a convex secondary mirror sends the light back through a hole in the primary, giving a long focal length in a short tube.">
      <svg viewBox="0 0 460 230" className="h-auto w-full" role="img" aria-label="Cassegrain reflecting telescope with primary and secondary mirrors">
        <path d="M 115 178 Q 230 214 345 178" fill="none" stroke={STRUCT} strokeWidth="2.6" />
        <path d="M 200 40 Q 230 62 260 40" fill="none" stroke={STRUCT} strokeWidth="2.4" />
        <Ray d="M 160 18 L 160 190" />
        <Ray d="M 160 190 L 214 62" color={INCIDENT} width={1.5} />
        <Ray d="M 300 18 L 300 190" />
        <Ray d="M 300 190 L 246 62" color={INCIDENT} width={1.5} />
        <Ray d="M 214 62 L 226 222" color={REFRACTED} width={1.5} />
        <Ray d="M 246 62 L 234 222" color={REFRACTED} width={1.5} />
        <Lbl x={78} y={186} anchor="start">primary (concave)</Lbl>
        <Lbl x={270} y={38} anchor="start">secondary (convex)</Lbl>
        <Lbl x={230} y={24}>incoming parallel light</Lbl>
        <Lbl x={230} y={228} color={REFRACTED}>final image (through the hole)</Lbl>
      </svg>
    </Figure>
  );
}

export default function RayOpticsAndOpticalInstrumentsChapter() {
  return (
    <>
      <h2 id="h-9-1">9.1 Introduction</h2>
      <p>
        Nature has endowed the human eye (retina) with the sensitivity to detect electromagnetic waves within a small
        range of the electromagnetic spectrum. Radiation in that range is what we call light.
      </p>
      <Callout type="important" title="What is light?">
        Electromagnetic radiation belonging to this region of the spectrum (wavelength of about 400 nm to 750 nm) is
        called <strong>light</strong>. It is mainly through light and the sense of vision that we know and interpret the
        world around us.
      </Callout>
      <ul>
        <li>Two things are obvious from common experience: light travels with enormous speed, and it travels in a straight line.</li>
        <li>That speed is finite and measurable.</li>
        <li>
          Its presently accepted value in vacuum is{" "}
          <Formula>{String.raw`c = 2.99792458\times10^{8}\ \text{m s}^{-1}`}</Formula>.
        </li>
        <li>
          For many purposes it suffices to take <Formula>{String.raw`c = 3\times10^{8}\ \text{m s}^{-1}`}</Formula>.
        </li>
        <li>The speed of light in vacuum is the highest speed attainable in nature.</li>
      </ul>
      <MetricCard
        label="Speed of light in vacuum"
        value="2.99792458 × 10⁸"
        unit="m s⁻¹"
        description={
          <>
            Highest speed attainable in nature. In calculations use{" "}
            <Formula>{String.raw`c \approx 3\times10^{8}\ \text{m s}^{-1}`}</Formula>.
          </>
        }
      />
      <Callout type="note" title="Straight line — yet a wave">
        <p>
          The straight-line picture seems to contradict Chapter 8, where light is an electromagnetic wave of wavelength
          belonging to the visible part of the spectrum. The resolution lies in the size of the wavelength.
        </p>
        <p className="mt-2">
          The wavelength of light is very small compared to the size of ordinary objects (generally a few cm or larger).
          In this situation a light wave can be considered to travel from one point to another along a straight line
          joining them (Chapter 10).
        </p>
      </Callout>
      <FactCard
        icon="➡"
        title="Ray and beam"
        definition="The straight-line path is called a ray of light, and a bundle of such rays constitutes a beam of light."
      />
      <KeyPoint title="Scope of this chapter">
        Reflection, refraction and dispersion in the <strong>ray picture</strong> of light: plane and spherical reflecting
        and refracting surfaces, the images they form, and the optical instruments built from them — including the human
        eye.
      </KeyPoint>

      <h2 id="h-9-2">9.2 Reflection of Light by Spherical Mirrors</h2>
      <Callout type="important" title="Laws of reflection">
        The angle of reflection (i.e., the angle between reflected ray and the normal to the reflecting surface or the
        mirror) equals the angle of incidence (angle between incident ray and the normal). Also, the incident ray, the
        reflected ray and the normal to the reflecting surface at the point of incidence lie in the same plane.
      </Callout>
      <ReflectionLawDiagram />
      <ul>
        <li>These laws are valid at each point on any reflecting surface, whether plane or curved.</li>
        <li>For a curved surface the normal is taken as the normal to the tangent to the surface at the point of incidence.</li>
        <li>That is, the normal is along the radius — the line joining the centre of curvature of the mirror to the point of incidence.</li>
        <li>The geometric centre of a spherical mirror is called its <strong>pole</strong>; that of a spherical lens is its <strong>optical centre</strong>.</li>
        <li>The line joining the pole and the centre of curvature of the mirror is the <strong>principal axis</strong>.</li>
        <li>For a spherical lens, the principal axis is the line joining the optical centre with its principal focus.</li>
      </ul>

      <h3 id="h-9-2-1">9.2.1 Sign Convention</h3>
      <p>Before deriving any formula we must fix how distances are measured.</p>
      <Callout type="important" title="Cartesian sign convention">
        All distances are measured from the pole of the mirror or the optical centre of the lens. The distances measured
        in the same direction as the incident light are taken as positive and those measured in the direction opposite to
        the direction of incident light are taken as negative. The heights measured upwards with respect to the x-axis
        (normal to the principal axis) are taken as positive; the heights measured downwards are taken as negative.
      </Callout>
      <CartesianSignDiagram />
      <TableCard
        title="Signs at a glance"
        headers={["Quantity", "Positive", "Negative"]}
        rows={[
          { cells: ["Distance from pole / optical centre", "measured along the incident light", "measured against the incident light"] },
          { cells: ["Height of object or image", "above the principal axis", "below the principal axis"] },
          { cells: ["Focal length f", "convex mirror; convex (converging) lens", "concave mirror; concave (diverging) lens"] },
        ]}
        caption="With this one convention, a single mirror formula and a single lens formula handle every case."
      />
      <MistakeCard
        mistake="Putting in every distance as a positive number, then being surprised by the sign of v."
        correction="Substitute u and f with their signs first and solve. The sign of v then tells you the side, hence the nature of the image."
        example="Concave mirror: u = −10 cm, f = −7.5 cm gives v = −30 cm — a real image on the same side as the object."
      />

      <h3 id="h-9-2-2">9.2.2 Focal Length of Spherical Mirrors</h3>
      <p>
        A parallel beam of light is incident on a concave mirror and on a convex mirror. We assume the rays are{" "}
        <strong>paraxial</strong> — incident at points close to the pole P and making small angles with the principal
        axis.
      </p>
      <MirrorFocusDiagram />
      <FactCard
        title="Principal focus (F)"
        icon="⊙"
        definition="The point on the principal axis at which the reflected paraxial rays converge (concave mirror) or from which they appear to diverge (convex mirror)."
      />
      <FactCard
        title="Focal plane"
        icon="▤"
        definition="If the parallel beam makes some angle with the principal axis, the reflected rays converge (or appear to diverge) from a point in a plane through F normal to the principal axis — the focal plane."
      />
      <p>
        The distance between the focus F and the pole P is the <strong>focal length</strong> f. The geometry of Fig. 9.4
        shows that f is half the radius of curvature R.
      </p>
      <Stepper
        steps={[
          {
            label: "Draw the ray and the perpendicular",
            description: (
              <>
                A ray parallel to the axis strikes the mirror at M, so CM (the radius) is perpendicular to the mirror at
                M. MD is the perpendicular from M on the principal axis.
              </>
            ),
          },
          {
            label: "Relate the two angles",
            description: (
              <>
                <Formula>{String.raw`\angle MCP = \theta`}</Formula> and{" "}
                <Formula>{String.raw`\angle MFP = 2\theta`}</Formula>, so{" "}
                <Formula>{String.raw`\tan\theta = \frac{MD}{CD}`}</Formula> and{" "}
                <Formula>{String.raw`\tan 2\theta = \frac{MD}{FD}`}</Formula>.
              </>
            ),
          },
          {
            label: "Use the paraxial (small-angle) approximation",
            description: (
              <>
                <Formula>{String.raw`\tan\theta \approx \theta`}</Formula>,{" "}
                <Formula>{String.raw`\tan 2\theta \approx 2\theta`}</Formula>, hence{" "}
                <Formula>{String.raw`\frac{MD}{FD} = 2\,\frac{MD}{CD}`}</Formula> and{" "}
                <Formula>{String.raw`FD = \frac{CD}{2}`}</Formula>.
              </>
            ),
          },
          {
            label: "Let D approach P",
            description: (
              <>
                For small θ the point D is very close to P, so <Formula>{String.raw`FD = f`}</Formula> and{" "}
                <Formula>{String.raw`CD = R`}</Formula>.
              </>
            ),
          },
        ]}
      />
      <FormulaBlock
        latex={String.raw`f=\frac{R}{2}`}
        label="Focal length of a spherical mirror"
        tag="Eq. (9.3)"
        important
      />

      <h3 id="h-9-2-3">9.2.3 The Mirror Equation</h3>
      <Callout type="important" title="Image — real and virtual">
        If rays emanating from a point actually meet at another point after reflection and/or refraction, that point is
        called the image of the first point. The image is <strong>real</strong> if the rays actually converge to the
        point; it is <strong>virtual</strong> if the rays do not actually meet but appear to diverge from the point when
        produced backwards. An image is thus a point-to-point correspondence with the object established through
        reflection and/or refraction.
      </Callout>
      <p>In principle any two rays from a point of the object fix its image. In practice these four are convenient:</p>
      <ul>
        <li>A ray parallel to the principal axis — the reflected ray goes through the focus.</li>
        <li>
          A ray through the centre of curvature (or appearing to pass through it, for a convex mirror) — the reflected ray
          retraces its path.
        </li>
        <li>
          A ray through (or directed towards) the focus — the reflected ray is parallel to the principal axis.
        </li>
        <li>A ray incident at any angle at the pole — the reflected ray follows the laws of reflection.</li>
      </ul>
      <ConcaveImageDiagram />
      <p>
        Point A′ is the image of A only because <em>every</em> ray from A, after reflection, passes through A′. An infinite
        number of rays leave any point; three are enough to draw.
      </p>
      <Stepper
        steps={[
          {
            label: "Similar triangles A′B′F and MPF",
            description: (
              <>
                <Formula>{String.raw`\frac{B'A'}{PM}=\frac{B'F}{FP}`}</Formula>, and since{" "}
                <Formula>{String.raw`PM = AB`}</Formula>,{" "}
                <Formula>{String.raw`\frac{B'A'}{BA}=\frac{B'F}{FP}`}</Formula>.
              </>
            ),
          },
          {
            label: "Similar triangles A′B′P and ABP",
            description: (
              <>
                <Formula>{String.raw`\frac{B'A'}{BA}=\frac{B'P}{BP}`}</Formula>.
              </>
            ),
          },
          {
            label: "Compare the two ratios",
            description: (
              <>
                <Formula>{String.raw`\frac{B'F}{FP}=\frac{B'P}{BP}=\frac{B'P-FP}{FP}`}</Formula>.
              </>
            ),
          },
          {
            label: "Apply the sign convention",
            description: (
              <>
                Light travels from the object to the mirror, so{" "}
                <Formula>{String.raw`B'P=-v`}</Formula>, <Formula>{String.raw`FP=-f`}</Formula> and{" "}
                <Formula>{String.raw`BP=-u`}</Formula>.
              </>
            ),
          },
          {
            label: "Simplify",
            description: (
              <>
                <Formula>{String.raw`\frac{-v+f}{-f}=\frac{v}{u}\ \Rightarrow\ \frac{v}{f}=\frac{v}{u}+1`}</Formula>,
                and dividing by v gives the mirror equation.
              </>
            ),
          },
        ]}
      />
      <FormulaBlock latex={String.raw`\frac{1}{v}+\frac{1}{u}=\frac{1}{f}`} label="Mirror equation" tag="Eq. (9.7)" important />
      <p>
        The size of the image relative to the object is the <strong>linear magnification</strong> m:
      </p>
      <FormulaBlock latex={String.raw`m=\frac{h'}{h}`} label="Linear magnification" tag="Eq. (9.8)" />
      <p>From the similar triangles A′B′P and ABP, with the sign convention applied:</p>
      <FormulaBlock latex={String.raw`m=\frac{h'}{h}=-\frac{v}{u}`} label="Magnification — spherical mirror" tag="Eq. (9.9)" important />
      <p>
        Both equations were derived for a real, inverted image from a concave mirror, but with the sign convention they
        hold for every case of reflection — concave or convex, real or virtual image.
      </p>
      <ConvexMirrorImageDiagram />
      <TableCard
        title="Image by a concave mirror — consequences of Eq. (9.7)"
        headers={["Object position", "Image position", "Nature", "Size"]}
        rows={[
          { cells: ["beyond C", "between F and C", "real, inverted", "diminished"] },
          { cells: ["at C", "at C", "real, inverted", "same size"] },
          { cells: ["between C and F", "beyond C", "real, inverted", "enlarged"] },
          { cells: ["at F", "at infinity", "real, inverted", "highly enlarged"] },
          { cells: ["between F and P", "behind the mirror", "virtual, erect", "enlarged"] },
          { cells: ["any position (convex mirror)", "between P and F, behind the mirror", "virtual, erect", "diminished"] },
        ]}
        caption="Each row follows from 1/v + 1/u = 1/f with the Cartesian signs — draw the ray diagram for each and check."
      />
      <MistakeCard
        mistake="Calling any image seen &ldquo;in the mirror&rdquo; a virtual image."
        correction="A virtual image cannot be caught on a screen: the rays only appear to come from it. For a mirror, v &lt; 0 means real (same side as the object), v &gt; 0 means virtual (behind the mirror)."
        example="Convex mirror, u = −12 cm, f = +15 cm gives v = +6.7 cm: virtual, behind the mirror."
      />

      <Expandable title="Example 9.1 — Half of the mirror covered" variant="example">
        <ProblemSolution.Problem>
          <p>
            Suppose that the lower half of the concave mirror&apos;s reflecting surface in Fig. 9.6 is covered with an
            opaque (non-reflective) material. What effect will this have on the image of an object placed in front of the
            mirror?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            You may think that the image will now show only half of the object, but taking the laws of reflection to be
            true for all points of the remaining part of the mirror, <Highlight color="yellow">the image will be that of
            the whole object</Highlight>.
          </p>
          <p>
            However, as the area of the reflecting surface has been reduced, the <strong>intensity</strong> of the image
            will be low (in this case, half).
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 9.2 — A mobile phone along the principal axis" variant="example">
        <ProblemSolution.Problem>
          <p>
            A mobile phone lies along the principal axis of a concave mirror, as shown in Fig. 9.7. Show by suitable
            diagram the formation of its image. Explain why the magnification is not uniform. Will the distortion of the
            image depend on the location of the phone with respect to the mirror?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The image is formed as in Fig. 9.7. The part of the phone on a plane perpendicular to the principal axis has
            its image on the same plane, and it is of the same size, i.e.,{" "}
            <Formula>{String.raw`B'C = BC`}</Formula>.
          </p>
          <p>
            Magnification is <Formula>{String.raw`m=-v/u`}</Formula>, and u is different for different points along the
            axis while f is fixed — so v, and with it the magnification, changes from point to point. The image is
            therefore distorted.
          </p>
          <p>
            Yes: the distortion depends on where the phone lies. Points at different distances from the pole are magnified
            differently, so moving the phone changes the pattern of distortion.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 9.3 — Object at 10 cm and at 5 cm from a concave mirror" variant="example">
        <ProblemSolution.Problem>
          <p>
            An object is placed at (i) 10 cm, (ii) 5 cm in front of a concave mirror of radius of curvature 15 cm. Find
            the position, nature, and magnification of the image in each case.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The focal length is <Formula>{String.raw`f=-\frac{15}{2}\ \text{cm}=-7.5\ \text{cm}`}</Formula>.
          </p>
          <p>
            <strong>(i)</strong> The object distance is <Formula>{String.raw`u=-10\ \text{cm}`}</Formula>. Then Eq. (9.7)
            gives
          </p>
          <FormulaBlock latex={String.raw`\frac{1}{v}+\frac{1}{-10}=\frac{1}{-7.5}`} />
          <FormulaBlock latex={String.raw`v=\frac{10\times(-7.5)}{-7.5+10}=-30\ \text{cm}`} important />
          <p>The image is 30 cm from the mirror on the same side as the object. Also,</p>
          <FormulaBlock latex={String.raw`m=-\frac{v}{u}=-\frac{-30}{-10}=-3`} />
          <p>
            The image is <Highlight color="green">magnified, real and inverted</Highlight>.
          </p>
          <p>
            <strong>(ii)</strong> The object distance is <Formula>{String.raw`u=-5\ \text{cm}`}</Formula>. Then from
            Eq. (9.7),
          </p>
          <FormulaBlock latex={String.raw`\frac{1}{v}+\frac{1}{-5}=\frac{1}{-7.5}`} />
          <FormulaBlock latex={String.raw`v=\frac{5\times(-7.5)}{-7.5+5}=+15\ \text{cm}`} important />
          <p>This image is formed at 15 cm behind the mirror. It is a virtual image.</p>
          <FormulaBlock latex={String.raw`m=-\frac{v}{u}=-\frac{15}{-5}=+3`} />
          <p>
            The image is <Highlight color="green">magnified, virtual and erect</Highlight>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 9.4 — The jogger in the side-view mirror" variant="example">
        <ProblemSolution.Problem>
          <p>
            Suppose while sitting in a parked car, you notice a jogger approaching towards you in the side view mirror of
            R = 2 m. If the jogger is running at a speed of 5 m s⁻¹, how fast does the image of the jogger appear to move
            when the jogger is (a) 39 m, (b) 29 m, (c) 19 m, and (d) 9 m away?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>From the mirror equation, Eq. (9.7),</p>
          <FormulaBlock latex={String.raw`v=\frac{fu}{u-f}`} />
          <p>
            For the convex mirror, since R = 2 m, <Formula>{String.raw`f=1\ \text{m}`}</Formula>. Then for u = −39 m,
          </p>
          <FormulaBlock latex={String.raw`v=\frac{(-39)\times1}{-39-1}=\frac{39}{40}\ \text{m}`} />
          <p>
            Since the jogger moves at a constant speed of 5 m s⁻¹, after 1 s the position of the image v (for u = −39 + 5 =
            −34) is <Formula>{String.raw`34/35\ \text{m}`}</Formula>. The shift in the position of the image in 1 s is
          </p>
          <FormulaBlock latex={String.raw`\frac{39}{40}-\frac{34}{35}=\frac{1365-1360}{1400}=\frac{5}{1400}=\frac{1}{280}\ \text{m}`} important />
          <p>
            Therefore the average speed of the image, when the jogger is between 39 m and 34 m from the mirror, is{" "}
            <Formula>{String.raw`1/280\ \text{m s}^{-1}`}</Formula>.
          </p>
          <p>
            Similarly, for u = −29 m, −19 m and −9 m, the speed with which the image appears to move is{" "}
            <Formula>{String.raw`\frac{1}{150}\ \text{m s}^{-1}`}</Formula>,{" "}
            <Formula>{String.raw`\frac{1}{60}\ \text{m s}^{-1}`}</Formula> and{" "}
            <Formula>{String.raw`\frac{1}{10}\ \text{m s}^{-1}`}</Formula> respectively.
          </p>
          <p>
            Although the jogger moves with a constant speed, the speed of the image increases substantially as he moves
            closer to the mirror. Anyone sitting in a stationary car or bus can notice this — and the same happens when a
            vehicle behind you closes in at constant speed.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-9-3">9.3 Refraction</h2>
      <p>
        When a beam of light encounters another transparent medium, a part of the light gets reflected back into the first
        medium while the rest enters the other. A ray of light represents a beam.
      </p>
      <Callout type="important" title="Refraction">
        The direction of propagation of an obliquely incident (0° &lt; i &lt; 90°) ray of light that enters the other
        medium changes at the interface of the two media. This phenomenon is called <strong>refraction</strong> of light.
      </Callout>
      <Callout type="important" title="Snell&apos;s laws of refraction">
        (i) The incident ray, the refracted ray and the normal to the interface at the point of incidence, all lie in the
        same plane.
        <br />
        (ii) The ratio of the sine of the angle of incidence to the sine of angle of refraction is constant.
      </Callout>
      <p>
        The angles of incidence (i) and refraction (r) are measured with the normal. Then
      </p>
      <FormulaBlock
        latex={String.raw`n_{21}=\frac{\sin i}{\sin r}`}
        label="Snell's law"
        tag="Eq. (9.10)"
        important
      />
      <ul>
        <li>
          <Formula>{String.raw`n_{21}`}</Formula> is a constant called the <strong>refractive index of the second medium
          with respect to the first medium</strong>.
        </li>
        <li>It is a characteristic of the pair of media.</li>
        <li>It depends on the wavelength of light.</li>
        <li>It is independent of the angle of incidence.</li>
      </ul>
      <Comparison
        columns={[
          {
            title: "n₂₁ > 1 — denser second medium",
            children: (
              <ul>
                <li>
                  <Formula>{String.raw`r<i`}</Formula>
                </li>
                <li>The refracted ray bends <strong>towards</strong> the normal.</li>
                <li>Medium 2 is optically denser than medium 1.</li>
              </ul>
            ),
          },
          {
            title: "n₂₁ < 1 — rarer second medium",
            children: (
              <ul>
                <li>
                  <Formula>{String.raw`r>i`}</Formula>
                </li>
                <li>The refracted ray bends <strong>away from</strong> the normal.</li>
                <li>The incident ray is in the denser medium.</li>
              </ul>
            ),
          },
        ]}
      />
      <p>
        If <Formula>{String.raw`n_{21}`}</Formula> is the refractive index of medium 2 with respect to medium 1, and{" "}
        <Formula>{String.raw`n_{12}`}</Formula> the refractive index of medium 1 with respect to medium 2, then
      </p>
      <FormulaBlock latex={String.raw`n_{12}=\frac{1}{n_{21}}`} tag="Eq. (9.11)" />
      <p>It also follows that</p>
      <FormulaBlock latex={String.raw`n_{32}=n_{31}\times n_{12}`} label="Refractive index through an intermediate medium" />
      <Callout type="note" title="Optical density is not mass density">
        <p>
          Optical density should not be confused with mass density, which is mass per unit volume. It is possible that the
          mass density of an optically denser medium is <em>less</em> than that of an optically rarer medium — optical
          density is the ratio of the speed of light in the two media.
        </p>
        <p className="mt-2">
          For example, turpentine and water: the mass density of turpentine is less than that of water, but its optical
          density is higher.
        </p>
      </Callout>
      <SlabShiftDiagram />
      <p>
        For a rectangular slab refraction takes place at two interfaces (air–glass and glass–air). It follows that{" "}
        <Formula>{String.raw`r_2=i_1`}</Formula>: the emergent ray is parallel to the incident ray. There is no deviation,
        but the ray does suffer a <strong>lateral displacement</strong> with respect to the incident ray.
      </p>
      <ApparentDepthDiagram />
      <p>
        The bottom of a tank filled with water appears raised. For viewing near the normal direction, the apparent depth
        h₁ is the real depth h₂ divided by the refractive index of the medium:
      </p>
      <FormulaBlock latex={String.raw`h_1=\frac{h_2}{n}`} label="Apparent depth (near-normal viewing)" />
      <MistakeCard
        mistake="Treating &ldquo;optically denser&rdquo; as &ldquo;heavier&rdquo; and expecting turpentine to float on the wrong side of the argument."
        correction="Optical density is about the speed of light in the medium, not mass per unit volume. Compare refractive indices, not mass densities."
      />

      <h2 id="h-9-4">9.4 Total Internal Reflection</h2>
      <Callout type="important" title="Internal reflection">
        When light travels from an optically denser medium to a rarer medium at the interface, it is partly reflected back
        into the same medium and partly refracted to the second medium. This reflection is called the{" "}
        <strong>internal reflection</strong>.
      </Callout>
      <p>
        When a ray of light enters from a denser medium to a rarer medium, it bends away from the normal — ray AO₁B in
        Fig. 9.11. The incident ray AO₁ is partially reflected (O₁C) and partially transmitted (O₁B), with{" "}
        <Formula>{String.raw`r>i`}</Formula>.
      </p>
      <TirDiagram />
      <ul>
        <li>As the angle of incidence increases, so does the angle of refraction.</li>
        <li>
          For the ray AO₃ the angle of refraction is <Formula>{String.raw`\pi/2`}</Formula>: the refracted ray grazes the
          interface.
        </li>
        <li>If the angle of incidence is increased still further (ray AO₄), refraction is not possible and the ray is totally reflected.</li>
      </ul>
      <Callout type="important" title="Total internal reflection">
        If the angle of incidence is increased beyond the value for which the refracted ray grazes the surface, refraction
        is not possible, and the incident ray is totally reflected. This is called <strong>total internal reflection</strong>.
      </Callout>
      <Callout type="note" title="No transmission at all">
        When light is reflected by a surface, normally some fraction of it gets transmitted, so the reflected ray is always
        less intense than the incident ray, however smooth the surface. In total internal reflection, on the other hand,
        no transmission of light takes place.
      </Callout>
      <Callout type="important" title="Critical angle">
        The angle of incidence corresponding to an angle of refraction 90° is called the <strong>critical angle</strong>{" "}
        <Formula>{String.raw`i_c`}</Formula> for the given pair of media.
      </Callout>
      <p>
        From Snell&apos;s law: if the relative refractive index of the refracting medium is less than one, then since the
        maximum value of <Formula>{String.raw`\sin r`}</Formula> is unity, there is an upper limit to{" "}
        <Formula>{String.raw`\sin i`}</Formula> for which the law can be satisfied. That limit is
      </p>
      <FormulaBlock latex={String.raw`\sin i_c = n_{21}`} label="Critical angle" tag="Eq. (9.12)" important />
      <p>
        For values of i larger than i_c, Snell&apos;s law of refraction cannot be satisfied, and hence no refraction is
        possible. The refractive index of the denser medium 1 with respect to the rarer medium 2 is{" "}
        <Formula>{String.raw`n_{12}=1/\sin i_c`}</Formula>.
      </p>
      <TableCard
        title="Table 9.1 — Critical angle of some transparent media with respect to air"
        headers={["Medium", "Refractive index", "Critical angle (°)"]}
        rows={[
          { cells: ["Water", "1.33", "48.75"] },
          { cells: ["Crown glass", "1.52", "41.14"] },
          { cells: ["Dense flint glass", "1.62", "37.31"] },
          { cells: ["Diamond", "2.42", "24.41"] },
        ]}
        caption="The larger the refractive index, the smaller the critical angle — diamond sparkles because light entering it is totally reflected at very small angles."
      />
      <Callout type="note" title="A demonstration with a laser pointer">
        <p>
          Take a beaker of clear water, add a few drops of milk and stir until the water is slightly turbid. Shine a laser
          pointer through the water: the path of the beam inside shines brightly because the suspended particles scatter
          light sideways.
        </p>
        <p className="mt-2">
          Shine the beam from below so that it strikes the upper water surface: part is reflected (a spot on the table) and
          part refracted (a spot on the roof). Now tilt the beam until the refraction above the surface disappears
          completely — that is total internal reflection at its simplest.
        </p>
        <p className="mt-2">
          Pour the water into a long test tube and shine the laser from the top, adjusting the direction until the beam is
          totally internally reflected at every strike on the wall. This is what happens in an optical fibre.
        </p>
        <p className="mt-2">
          <strong>Never look into a laser beam directly, and never point it at anyone&apos;s face.</strong>
        </p>
      </Callout>

      <h3 id="h-9-4-1">Total Internal Reflection in Nature and Its Technological Applications</h3>
      <p>
        <strong>(i) Prism.</strong> Prisms designed to bend light by 90° or by 180° make use of total internal reflection.
        Such a prism is also used to invert images without changing their size.
      </p>
      <PrismTirDiagram />
      <ul>
        <li>
          In the 90° and 180° cases the critical angle <Formula>{String.raw`i_c`}</Formula> of the prism material must be
          less than 45°.
        </li>
        <li>Table 9.1 shows this is true for both crown glass and dense flint glass.</li>
      </ul>
      <p>
        <strong>(ii) Optical fibres.</strong> Optical fibres are extensively used for transmitting audio and video signals
        over long distances, and they too work by total internal reflection.
      </p>
      <OpticalFibreDiagram />
      <ul>
        <li>Fibres are fabricated from high quality composite glass/quartz fibres.</li>
        <li>Each fibre consists of a <strong>core</strong> and a <strong>cladding</strong>.</li>
        <li>The refractive index of the core material is higher than that of the cladding.</li>
        <li>
          Light directed at one end at a suitable angle undergoes repeated total internal reflections and finally comes out
          at the other end.
        </li>
        <li>Because each reflection is total, there is no appreciable loss in the intensity of the signal.</li>
        <li>Fibres are fabricated so that light reflected at one side of the inner surface strikes the other at an angle larger than the critical angle.</li>
        <li>Even if the fibre is bent, light travels along its length — the fibre acts as an optical pipe.</li>
        <li>A bundle of fibres is used to transmit and receive electrical signals converted to light by suitable transducers.</li>
        <li>They serve as a &ldquo;light pipe&rdquo; in visual examination of internal organs such as the esophagus, stomach and intestines.</li>
        <li>Decorative lamps use fine plastic fibres whose free ends form a fountain of light dots.</li>
        <li>In silica glass fibres more than 95% of the light can be transmitted over a fibre length of 1 km.</li>
      </ul>
      <KeyPoint title="Three conditions for total internal reflection">
        Light must travel from a <strong>denser to a rarer</strong> medium; the angle of incidence must exceed the critical
        angle <Formula>{String.raw`i_c`}</Formula> with <Formula>{String.raw`\sin i_c = n_{21}`}</Formula>; and then{" "}
        <Highlight color="yellow">no light is transmitted at all</Highlight> — the reflection is total, not partial.
      </KeyPoint>
      <h2 id="h-9-5">9.5 Refraction at Spherical Surfaces and by Lenses</h2>
      <p>
        We have so far considered refraction at a plane interface. An infinitesimal part of a spherical surface can be
        regarded as planar, and the same laws of refraction can be applied at every point on the surface.
      </p>
      <ul>
        <li>As for a spherical mirror, the normal at the point of incidence is perpendicular to the tangent plane and therefore passes through the centre of curvature.</li>
        <li>A <strong>thin lens</strong> is a transparent optical medium bounded by two surfaces, at least one of which is spherical.</li>
        <li>Applying the single-surface result successively at the two surfaces gives the lens maker&apos;s formula and then the lens formula.</li>
      </ul>

      <h3 id="h-9-5-1">9.5.1 Refraction at a Spherical Surface</h3>
      <p>
        Fig. 9.15 shows the formation of the image I of an object O on the principal axis of a spherical surface with
        centre of curvature C and radius of curvature R. Rays pass from a medium of refractive index n₁ to one of
        refractive index n₂.
      </p>
      <SphericalSurfaceDiagram />
      <p>
        The aperture is small compared to the other distances, so small-angle approximations are allowed. In particular
        NM is taken nearly equal to the perpendicular from N to the principal axis.
      </p>
      <Expandable title="Derivation — refraction at a single spherical surface">
        <Stepper
          steps={[
            {
              label: "Write the three tangents",
              description: (
                <>
                  <Formula>{String.raw`\tan\angle NOM=\frac{MN}{OM}`}</Formula>,{" "}
                  <Formula>{String.raw`\tan\angle NCM=\frac{MN}{MC}`}</Formula>,{" "}
                  <Formula>{String.raw`\tan\angle NIM=\frac{MN}{MI}`}</Formula>.
                </>
              ),
            },
            {
              label: "Exterior angle of triangle NOC",
              description: (
                <>
                  i is the exterior angle, so{" "}
                  <Formula>{String.raw`i=\angle NOM+\angle NCM=\frac{MN}{OM}+\frac{MN}{MC}`}</Formula>.
                </>
              ),
            },
            {
              label: "Exterior angle for the refracted ray",
              description: (
                <>
                  <Formula>{String.raw`r=\angle NCM-\angle NIM=\frac{MN}{MC}-\frac{MN}{MI}`}</Formula>.
                </>
              ),
            },
            {
              label: "Snell's law for small angles",
              description: (
                <>
                  <Formula>{String.raw`n_1\sin i=n_2\sin r\ \Rightarrow\ n_1 i=n_2 r`}</Formula>, and substituting
                  the expressions above gives{" "}
                  <Formula>{String.raw`\frac{n_1}{OM}+\frac{n_2}{MI}=\frac{n_2-n_1}{MC}`}</Formula>.
                </>
              ),
            },
            {
              label: "Apply the sign convention",
              description: (
                <>
                  <Formula>{String.raw`OM=-u`}</Formula>, <Formula>{String.raw`MI=+v`}</Formula>,{" "}
                  <Formula>{String.raw`MC=+R`}</Formula>.
                </>
              ),
            },
          ]}
        />
      </Expandable>
      <FormulaBlock
        latex={String.raw`\frac{n_2}{v}-\frac{n_1}{u}=\frac{n_2-n_1}{R}`}
        label="Refraction at a spherical surface"
        tag="Eq. (9.16)"
        important
      />
      <p>
        This gives the relation between object and image distance in terms of the refractive index of the medium and the
        radius of curvature — it holds for any curved spherical surface.
      </p>
      <Expandable title="Example 9.5 — Point source in front of a spherical glass surface" variant="example">
        <ProblemSolution.Problem>
          <p>
            Light from a point source in air falls on a spherical glass surface (n = 1.5 and radius of curvature = 20 cm).
            The distance of the light source from the glass surface is 100 cm. At what position is the image formed?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            We use Eq. (9.16) with{" "}
            <Formula>{String.raw`u=-100\ \text{cm}`}</Formula>, <Formula>{String.raw`R=+20\ \text{cm}`}</Formula>,{" "}
            <Formula>{String.raw`n_1=1`}</Formula> and <Formula>{String.raw`n_2=1.5`}</Formula>. Then
          </p>
          <FormulaBlock latex={String.raw`\frac{1.5}{v}+\frac{1}{100}=\frac{0.5}{20}`} />
          <FormulaBlock latex={String.raw`v=+100\ \text{cm}`} important />
          <p>
            The image is formed at a distance of 100 cm from the glass surface, in the direction of the incident light.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-9-5-2">9.5.2 Refraction by a Lens</h3>
      <p>
        Image formation by a double convex lens is seen in two steps: the first refracting surface forms the image I₁ of
        the object O, and I₁ acts as a virtual object for the second surface, which forms the final image I.
      </p>
      <LensMakerDiagram />
      <Expandable title="Derivation — the lens maker&apos;s formula">
        <Stepper
          steps={[
            {
              label: "First interface ABC",
              description: (
                <>
                  <Formula>{String.raw`\frac{n_1}{OB}+\frac{n_2}{BI_1}=\frac{n_2-n_1}{BC_1}`}</Formula>
                </>
              ),
            },
            {
              label: "Second interface ADC",
              description: (
                <>
                  <Formula>{String.raw`\frac{n_2}{DI_1}-\frac{n_1}{DI}=\frac{n_2-n_1}{DC_2}`}</Formula> — the medium
                  on the right of ADC is now n₁, and <Formula>{String.raw`DI_1`}</Formula> is negative (measured against
                  the incident light).
                </>
              ),
            },
            {
              label: "Add, using BI₁ = DI₁ for a thin lens",
              description: (
                <>
                  <Formula>{String.raw`\left(\frac{n_1}{OB}+\frac{n_1}{DI}\right)=(n_2-n_1)\left(\frac{1}{BC_1}+\frac{1}{DC_2}\right)`}</Formula>
                </>
              ),
            },
            {
              label: "Put the object at infinity",
              description: (
                <>
                  <Formula>{String.raw`OB\to\infty`}</Formula> and <Formula>{String.raw`DI=f`}</Formula>, so{" "}
                  <Formula>{String.raw`\frac{n_1}{f}=(n_2-n_1)\left(\frac{1}{BC_1}+\frac{1}{DC_2}\right)`}</Formula>.
                </>
              ),
            },
            {
              label: "Apply the sign convention to the radii",
              description: (
                <>
                  <Formula>{String.raw`BC_1=+R_1`}</Formula> and <Formula>{String.raw`DC_2=-R_2`}</Formula>.
                </>
              ),
            },
          ]}
        />
      </Expandable>
      <FormulaBlock
        latex={String.raw`\frac{1}{f}=\left(\frac{n_2}{n_1}-1\right)\left(\frac{1}{R_1}-\frac{1}{R_2}\right)`}
        label="Lens maker's formula"
        tag="Eq. (9.21)"
        important
      />
      <ul>
        <li>The formula is used to design lenses of a desired focal length from surfaces of suitable radii of curvature.</li>
        <li>It is true for a concave lens also: there R₁ is negative, R₂ positive, so f comes out negative.</li>
        <li>The point where the image of an object at infinity is formed is the <strong>focus</strong> F, and the distance f is the focal length.</li>
        <li>A lens has two foci F and F′ on either side, equidistant from the optical centre.</li>
        <li>The focus on the side of the source is the <strong>first focal point</strong>; the other is the <strong>second focal point</strong>.</li>
      </ul>
      <p>Combining Eqs. (9.19) and (9.20) and using BO = −u, DI = +v gives the familiar relation:</p>
      <FormulaBlock latex={String.raw`\frac{1}{v}-\frac{1}{u}=\frac{1}{f}`} label="Thin lens formula" tag="Eq. (9.23)" important />
      <p>
        Though derived for a real image from a convex lens, it is valid for both convex and concave lenses and for both
        real and virtual images.
      </p>
      <p>Two of the following rays fix the image by a lens:</p>
      <ul>
        <li>A ray parallel to the principal axis — after refraction it passes through F′ (convex) or appears to diverge from F (concave).</li>
        <li>A ray through the optical centre — it emerges without any deviation.</li>
        <li>A ray through the first principal focus (convex) — after refraction it emerges parallel to the principal axis.</li>
        <li>A ray appearing to meet the axis at the second focus (concave) — after refraction it emerges parallel to the principal axis.</li>
      </ul>
      <LensRayRulesDiagram />
      <p>
        Magnification produced by a lens is defined, like that for a mirror, as the ratio of the size of the image to that
        of the object. Proceeding as for spherical mirrors:
      </p>
      <FormulaBlock latex={String.raw`m=\frac{h'}{h}=\frac{v}{u}`} label="Magnification — thin lens" tag="Eq. (9.24)" important />
      <p>
        With the sign convention, m is <strong>positive</strong> for an erect (and virtual) image from a convex or concave
        lens, and <strong>negative</strong> for an inverted (and real) image.
      </p>
      <MistakeCard
        mistake="Using m = −v/u (the mirror form) for a lens."
        correction="For a lens m = v/u; the minus sign belongs to the mirror formula only. Check the sign of m against the ray diagram."
        example="Convex lens, u = −12 cm, v = −24 cm gives m = +2: virtual, erect and magnified."
      />
      <Expandable title="Example 9.6 — The disappearing glass lens" variant="example">
        <ProblemSolution.Problem>
          <p>
            A magician during a show makes a glass lens with n = 1.47 disappear in a trough of liquid. What is the
            refractive index of the liquid? Could the liquid be water?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The refractive index of the liquid must be equal to 1.47 in order to make the lens disappear. This means
            n₁ = n₂, which gives <Formula>{String.raw`1/f=0`}</Formula> or{" "}
            <Formula>{String.raw`f\to\infty`}</Formula>.
          </p>
          <p>
            The lens in the liquid then acts like a plane sheet of glass. No, the liquid is not water — it could be
            glycerine.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-9-5-3">9.5.3 Power of a Lens</h3>
      <Callout type="important" title="Power of a lens">
        Power of a lens is a measure of the convergence or divergence, which a lens introduces in the light falling on it.
        The power P of a lens is defined as the tangent of the angle by which it converges or diverges a beam of light
        parallel to the principal axis falling at unit distance from the optical centre.
      </Callout>
      <p>
        A lens of shorter focal length bends the incident light more. From{" "}
        <Formula>{String.raw`\tan\delta=h/f`}</Formula> with <Formula>{String.raw`h=1`}</Formula> and small δ,{" "}
        <Formula>{String.raw`\delta=1/f`}</Formula>, hence
      </p>
      <FormulaBlock latex={String.raw`P=\frac{1}{f}`} label="Power of a lens" tag="Eq. (9.25)" important />
      <MetricCard
        label="SI unit of power — dioptre"
        value="1 D"
        unit="= 1 m⁻¹"
        description="The power of a lens of focal length 1 metre is one dioptre. Positive for a converging lens, negative for a diverging lens."
      />
      <ul>
        <li>A prescribed power of +2.5 D means a convex lens of focal length +40 cm.</li>
        <li>A prescribed power of −4.0 D means a concave lens of focal length −25 cm.</li>
      </ul>
      <Expandable title="Example 9.7 — Power, refractive index and focal length in water" variant="example">
        <ProblemSolution.Problem>
          <p>
            (i) If f = 0.5 m for a glass lens, what is the power of the lens?
            <br />
            (ii) The radii of curvature of the faces of a double convex lens are 10 cm and 15 cm, and its focal length is
            12 cm. What is the refractive index of glass?
            <br />
            (iii) A convex lens has 20 cm focal length in air. What is its focal length in water? (Refractive index of
            air–water = 1.33, air–glass = 1.5.)
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            <strong>(i)</strong>{" "}
            <Formula>{String.raw`P=1/f=1/0.5=+2\ \text{dioptre}`}</Formula>.
          </p>
          <p>
            <strong>(ii)</strong> Here <Formula>{String.raw`f=+12\ \text{cm}`}</Formula>,{" "}
            <Formula>{String.raw`R_1=+10\ \text{cm}`}</Formula>, <Formula>{String.raw`R_2=-15\ \text{cm}`}</Formula>, and
            the refractive index of air is taken as unity. Applying the lens maker&apos;s formula with the sign
            convention:
          </p>
          <FormulaBlock latex={String.raw`\frac{1}{12}=(n-1)\left(\frac{1}{10}-\frac{1}{-15}\right)`} />
          <FormulaBlock latex={String.raw`n=1.5`} important />
          <p>
            <strong>(iii)</strong> For the glass lens in air, <Formula>{String.raw`n_2=1.5`}</Formula>,{" "}
            <Formula>{String.raw`n_1=1`}</Formula>, <Formula>{String.raw`f=+20\ \text{cm}`}</Formula>. The lens formula
            gives
          </p>
          <FormulaBlock latex={String.raw`\frac{1}{20}=0.5\left(\frac{1}{R_1}-\frac{1}{R_2}\right)`} />
          <p>
            For the same lens in water, <Formula>{String.raw`n_2=1.5`}</Formula> and{" "}
            <Formula>{String.raw`n_1=1.33`}</Formula>, so
          </p>
          <FormulaBlock latex={String.raw`\frac{1.33}{f}=(1.5-1.33)\left(\frac{1}{R_1}-\frac{1}{R_2}\right)`} tag="Eq. (9.26)" />
          <p>Combining the two equations,</p>
          <FormulaBlock latex={String.raw`f=+78.2\ \text{cm}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-9-5-4">9.5.4 Combination of Thin Lenses in Contact</h3>
      <p>
        Consider two lenses A and B of focal length f₁ and f₂ placed in contact. The first lens produces an image at I₁,
        which serves as a virtual object for the second lens, producing the final image at I. Since the lenses are thin,
        the optical centres are taken to be coincident at a point P.
      </p>
      <Stepper
        steps={[
          {
            label: "Image formed by the first lens",
            description: (
              <>
                <Formula>{String.raw`\frac{1}{v_1}-\frac{1}{u}=\frac{1}{f_1}`}</Formula>
              </>
            ),
          },
          {
            label: "Image formed by the second lens",
            description: (
              <>
                <Formula>{String.raw`\frac{1}{v}-\frac{1}{v_1}=\frac{1}{f_2}`}</Formula>
              </>
            ),
          },
          {
            label: "Add the two equations",
            description: (
              <>
                <Formula>{String.raw`\frac{1}{v}-\frac{1}{u}=\frac{1}{f_1}+\frac{1}{f_2}`}</Formula>
              </>
            ),
          },
          {
            label: "Compare with a single lens of focal length f",
            description: (
              <>
                <Formula>{String.raw`\frac{1}{v}-\frac{1}{u}=\frac{1}{f}`}</Formula> forces the combination rule below.
              </>
            ),
          },
        ]}
      />
      <FormulaBlock latex={String.raw`\frac{1}{f}=\frac{1}{f_1}+\frac{1}{f_2}`} label="Two thin lenses in contact" tag="Eq. (9.30)" important />
      <p>The derivation is valid for any number of thin lenses in contact:</p>
      <FormulaBlock latex={String.raw`\frac{1}{f}=\frac{1}{f_1}+\frac{1}{f_2}+\frac{1}{f_3}+\dots`} tag="Eq. (9.31)" />
      <FormulaBlock latex={String.raw`P=P_1+P_2+P_3+\dots`} label="Net power of the combination" tag="Eq. (9.32)" important />
      <ul>
        <li>The sum for power is algebraic: terms for convex lenses are positive, those for concave lenses negative.</li>
        <li>Combination of lenses helps obtain diverging or converging lenses of desired magnification.</li>
        <li>It also enhances the sharpness of the image.</li>
        <li>Such combinations are used in lenses for cameras, microscopes, telescopes and other optical instruments.</li>
      </ul>
      <p>Since the image formed by the first lens becomes the object for the second, the total magnification is a product:</p>
      <FormulaBlock latex={String.raw`m=m_1m_2m_3\dots`} tag="Eq. (9.33)" />
      <Expandable title="Example 9.8 — Image through a three-lens combination" variant="example">
        <ProblemSolution.Problem>
          <p>
            Find the position of the image formed by the lens combination of Fig. 9.20: a convex lens of focal length
            10 cm with the object 30 cm in front of it, a concave lens of focal length 10 cm placed 5 cm to its right, and
            a convex lens of focal length 30 cm after it.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Image formed by the first lens:</p>
          <FormulaBlock latex={String.raw`\frac{1}{v_1}-\frac{1}{u_1}=\frac{1}{f_1}\ \Rightarrow\ \frac{1}{v_1}-\frac{1}{-30}=\frac{1}{10}`} />
          <FormulaBlock latex={String.raw`v_1=15\ \text{cm}`} important />
          <p>
            The image formed by the first lens serves as the object for the second. It is at a distance of
            (15 − 5) cm = 10 cm to the right of the second lens. Though the image is real, it serves as a{" "}
            <strong>virtual object</strong> for the second lens — the rays appear to come from it.
          </p>
          <FormulaBlock latex={String.raw`\frac{1}{v_2}-\frac{1}{10}=\frac{1}{-10}\ \Rightarrow\ v_2=\infty`} />
          <p>
            The virtual image is formed at an infinite distance to the left of the second lens. This acts as an object for
            the third lens.
          </p>
          <FormulaBlock latex={String.raw`\frac{1}{v_3}=\frac{1}{30}+\frac{1}{\infty}\ \Rightarrow\ v_3=30\ \text{cm}`} important />
          <p>The final image is formed 30 cm to the right of the third lens.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <Comparison
        columns={[
          {
            title: "Spherical mirror",
            children: (
              <ul>
                <li>
                  <Formula>{String.raw`\frac{1}{v}+\frac{1}{u}=\frac{1}{f}`}</Formula>
                </li>
                <li>
                  <Formula>{String.raw`m=-\frac{v}{u}`}</Formula>
                </li>
                <li>
                  <Formula>{String.raw`f=\frac{R}{2}`}</Formula>
                </li>
                <li>Light stays in one medium — it is reflected.</li>
                <li>v &lt; 0 means a real image, on the object side.</li>
              </ul>
            ),
          },
          {
            title: "Thin lens",
            children: (
              <ul>
                <li>
                  <Formula>{String.raw`\frac{1}{v}-\frac{1}{u}=\frac{1}{f}`}</Formula>
                </li>
                <li>
                  <Formula>{String.raw`m=\frac{v}{u}`}</Formula>
                </li>
                <li>
                  <Formula>{String.raw`\frac{1}{f}=(n-1)\left(\frac{1}{R_1}-\frac{1}{R_2}\right)`}</Formula>
                </li>
                <li>Light passes into a second medium — it is refracted.</li>
                <li>v &gt; 0 means a real image, on the far side.</li>
              </ul>
            ),
          },
        ]}
      />

      <h2 id="h-9-6">9.6 Refraction Through a Prism</h2>
      <PrismDeviationDiagram />
      <ul>
        <li>
          At the first face AB the angles of incidence and refraction are <Formula>{String.raw`i`}</Formula> and{" "}
          <Formula>{String.raw`r_1`}</Formula>.
        </li>
        <li>
          At the second face AC the angle of incidence (glass to air) is <Formula>{String.raw`r_2`}</Formula> and the
          angle of refraction, or emergence, is <Formula>{String.raw`e`}</Formula>.
        </li>
        <li>
          The angle between the emergent ray RS and the direction of the incident ray PQ is the{" "}
          <strong>angle of deviation</strong> δ.
        </li>
      </ul>
      <Stepper
        steps={[
          {
            label: "Quadrilateral AQNR",
            description: (
              <>
                Two angles (at Q and R) are right angles, so the other two add to 180°:{" "}
                <Formula>{String.raw`\angle A+\angle QNR=180^{\circ}`}</Formula>.
              </>
            ),
          },
          {
            label: "Triangle QNR",
            description: (
              <>
                <Formula>{String.raw`r_1+r_2+\angle QNR=180^{\circ}`}</Formula>.
              </>
            ),
          },
          {
            label: "Compare the two relations",
            description: (
              <>
                <Formula>{String.raw`r_1+r_2=A`}</Formula>
              </>
            ),
          },
          {
            label: "Add the deviations at the two faces",
            description: (
              <>
                <Formula>{String.raw`\delta=(i-r_1)+(e-r_2)=i+e-(r_1+r_2)`}</Formula>, hence{" "}
                <Formula>{String.raw`\delta=i+e-A`}</Formula>.
              </>
            ),
          },
        ]}
      />
      <FormulaBlock latex={String.raw`r_1+r_2=A`} label="Prism relation" tag="Eq. (9.34)" important />
      <FormulaBlock latex={String.raw`\delta=i+e-A`} label="Angle of deviation" tag="Eq. (9.35)" important />
      <MinimumDeviationGraph />
      <ul>
        <li>The angle of deviation depends on the angle of incidence.</li>
        <li>
          Except at <Formula>{String.raw`i=e`}</Formula>, any given value of δ corresponds to two values of i, and hence
          of e.
        </li>
        <li>
          This is expected from the symmetry of i and e in <Formula>{String.raw`\delta=i+e-A`}</Formula>.
        </li>
        <li>Physically, the path of the ray can be traced back, giving the same angle of deviation.</li>
        <li>
          At the minimum deviation Dₘ the refracted ray inside the prism is parallel to its base, so{" "}
          <Formula>{String.raw`\delta=D_m`}</Formula>, <Formula>{String.raw`i=e`}</Formula> and{" "}
          <Formula>{String.raw`r_1=r_2`}</Formula>.
        </li>
      </ul>
      <FormulaBlock latex={String.raw`2r=A\ \Rightarrow\ r=\frac{A}{2}`} tag="Eq. (9.36)" />
      <FormulaBlock latex={String.raw`D_m=2i-A\ \Rightarrow\ i=\frac{A+D_m}{2}`} tag="Eq. (9.37)" />
      <p>With Snell&apos;s law at either face, the refractive index of the prism is</p>
      <FormulaBlock
        latex={String.raw`n_{21}=\frac{n_2}{n_1}=\frac{\sin\left[(A+D_m)/2\right]}{\sin\left[A/2\right]}`}
        label="Refractive index from minimum deviation"
        tag="Eq. (9.38)"
        important
      />
      <p>
        A and Dₘ can be measured experimentally, so Eq. (9.38) provides a method of determining the refractive index of the
        material of the prism.
      </p>
      <p>
        For a small-angle (thin) prism Dₘ is also very small, so the sines may be replaced by their angles:
      </p>
      <FormulaBlock latex={String.raw`D_m=(n_{21}-1)A`} label="Thin prism" important />
      <p>It follows that thin prisms do not deviate light much.</p>

      <h3 id="h-9-6-1">9.6.1 Dispersion by a Prism</h3>
      <Callout type="note" title="Scope of this subsection">
        The rationalised edition of this chapter keeps only the one-line definition of dispersion (Summary, item 7). The
        working below and the scattering subsection are carried over from the earlier edition of the chapter so that the
        topic stays complete.
      </Callout>
      <Callout type="important" title="Dispersion">
        Dispersion is the splitting of light into its constituent colours.
      </Callout>
      <DispersionPrismDiagram />
      <ul>
        <li>The refractive index of a medium is not a single number — it depends on the wavelength of the light.</li>
        <li>Violet light has the larger refractive index in glass, red the smaller.</li>
        <li>Each colour therefore leaves the prism at a slightly different angle.</li>
        <li>Red is deviated least, violet most, so the emergent beam spreads into a band of colours — the spectrum.</li>
        <li>For the same reason thick lenses give coloured images, an effect called chromatic aberration.</li>
      </ul>
      <p>For a thin prism the deviation of a colour is <Formula>{String.raw`\delta=(n-1)A`}</Formula>, so the spread between the extremes is</p>
      <FormulaBlock latex={String.raw`\delta_V-\delta_R=(n_V-n_R)A`} label="Angular dispersion (thin prism)" />

      <h3 id="h-9-6-2">9.6.2 Scattering of Light</h3>
      <p>
        Sunlight passing through the atmosphere is scattered by molecules and fine particles. For particles much smaller
        than the wavelength, the scattered intensity varies as{" "}
        <Formula>{String.raw`1/\lambda^{4}`}</Formula> — short wavelengths are scattered far more strongly than long ones.
      </p>
      <ul>
        <li>Blue light is scattered most, and it reaches the eye from every direction of the sky — so the sky looks blue.</li>
        <li>At sunrise and sunset the light travels a much longer path through the atmosphere.</li>
        <li>Most of the blue is scattered out of the direct beam on the way, so the Sun and the sky near it look red.</li>
        <li>Red is scattered least, which is why danger signals and brake lights are red — they stay visible from far away.</li>
        <li>Above the atmosphere there is nothing to scatter light, so the sky appears black to an astronaut.</li>
      </ul>
      <FactCard
        icon="🌇"
        title="One law, two skies"
        definition="Blue sky and red sunset are the same phenomenon seen from two directions: the 1/λ⁴ scattering law of the atmosphere."
      />

      <h2 id="h-9-7">9.7 Optical Instruments</h2>
      <p>
        A number of optical devices and instruments have been designed utilising the reflecting and refracting properties
        of mirrors, lenses and prisms: periscope, kaleidoscope, binoculars, telescopes, microscopes. Our eye is one of the
        most important optical devices nature has endowed us with. We now describe the microscope and the telescope.
      </p>

      <h3 id="h-9-7-1">9.7.1 The Microscope</h3>
      <p>
        A <strong>simple magnifier</strong> or microscope is a converging lens of small focal length. The lens is held near
        the object, one focal length away or less, and the eye is positioned close to the lens on the other side.
      </p>
      <SimpleMicroscopeDiagram />
      <ul>
        <li>The idea is to get an erect, magnified and virtual image at a distance at which it can be viewed comfortably — 25 cm or more.</li>
        <li>If the object is at a distance f, the image is at infinity.</li>
        <li>If the object is slightly less than f away, the image is virtual and closer than infinity.</li>
        <li>The closest comfortable distance is the near point, D ≈ 25 cm, but viewing there causes some strain on the eye.</li>
        <li>An image at infinity is therefore often considered most suitable for viewing by the relaxed eye.</li>
      </ul>
      <p>
        For the image formed at the near point D, the linear magnification follows from the lens relation{" "}
        <Formula>{String.raw`m=v/u=v\left(1/v-1/f\right)`}</Formula>. With v negative and equal in magnitude to D,
      </p>
      <FormulaBlock latex={String.raw`m=1+\frac{D}{f}`} label="Simple microscope — image at the near point" tag="Eq. (9.39)" important />
      <ul>
        <li>Since D is about 25 cm, a magnification of six needs a convex lens of focal length f = 5 cm.</li>
        <li>
          Here <Formula>{String.raw`m=h'/h`}</Formula>, the ratio of image size to object size — also the ratio of the angle
          subtended by the image to that subtended by the object placed at D.
        </li>
        <li>It is not the angle actually subtended by the object at the eye, which is h/u.</li>
        <li>What the single-lens magnifier achieves is that it allows the object to be brought closer to the eye than D.</li>
      </ul>
      <p>
        Now take the image at infinity. The maximum angle the object can subtend and still be clearly visible without a
        lens is when it is at the near point:
      </p>
      <FormulaBlock latex={String.raw`\tan\theta_o=\frac{h}{D}\approx\theta_o`} tag="Eq. (9.40)" />
      <p>
        The angle subtended by the image, when the object is at <Formula>{String.raw`u=-f`}</Formula>, is
      </p>
      <FormulaBlock latex={String.raw`\theta_i=\frac{h}{f}`} tag="Eq. (9.41)" />
      <p>The angular magnification is therefore</p>
      <FormulaBlock latex={String.raw`m=\frac{\theta_i}{\theta_o}=\frac{D}{f}`} label="Simple microscope — image at infinity" tag="Eq. (9.42)" important />
      <p>
        This is one less than the magnification at the near point, but the viewing is more comfortable and the difference
        in magnification is usually small. In the rest of this section the image is assumed to be at infinity.
      </p>
      <p>
        A simple microscope has a limited maximum magnification (≤ 9) for realistic focal lengths. Much larger
        magnifications need two lenses, one compounding the effect of the other — the <strong>compound microscope</strong>.
      </p>
      <CompoundMicroscopeDiagram />
      <ul>
        <li>The lens nearest the object, the <strong>objective</strong>, forms a real, inverted, magnified image.</li>
        <li>This image serves as the object for the second lens, the <strong>eyepiece</strong>, which works essentially like a simple magnifier.</li>
        <li>The final image is enlarged and virtual, and inverted with respect to the original object.</li>
        <li>The first image lies near (at or within) the focal plane of the eyepiece — at a distance giving the final image at infinity, or a little closer for the near point.</li>
      </ul>
      <p>The linear magnification due to the objective is</p>
      <FormulaBlock latex={String.raw`m_o=\frac{h'}{h}=\frac{L}{f_o}`} tag="Eq. (9.43)" important />
      <p>
        where the result <Formula>{String.raw`\tan\beta=h/f_o=h'/L`}</Formula> is used. L is the distance between the
        second focal point of the objective and the first focal point of the eyepiece — the <strong>tube length</strong>.
      </p>
      <p>The angular magnification due to the eyepiece is, at the near point,</p>
      <FormulaBlock latex={String.raw`m_e=1+\frac{D}{f_e}`} tag="Eq. (9.44a)" />
      <p>and, when the final image is at infinity,</p>
      <FormulaBlock latex={String.raw`m_e=\frac{D}{f_e}`} tag="Eq. (9.44b)" />
      <p>Thus the total magnification, when the image is at infinity, is</p>
      <FormulaBlock latex={String.raw`m=m_om_e=\left(\frac{L}{f_o}\right)\left(\frac{D}{f_e}\right)`} label="Compound microscope" tag="Eq. (9.45)" important />
      <ul>
        <li>To achieve a large magnification, both the objective and the eyepiece should have small focal lengths.</li>
        <li>In practice it is difficult to make a focal length much smaller than 1 cm.</li>
        <li>
          Large lenses are required to make L large: with f₀ = 1.0 cm, fₑ = 2.0 cm and L = 20 cm,{" "}
          <Formula>{String.raw`m=(20/1)(25/2)=250`}</Formula>.
        </li>
        <li>Illumination of the object also affects the quality and visibility of the image.</li>
        <li>Modern microscopes use multi-component lenses for objective and eyepiece to minimise optical aberrations.</li>
      </ul>

      <h3 id="h-9-7-2">9.7.2 Telescope</h3>
      <p>
        The telescope provides angular magnification of distant objects. It also has an objective and an eyepiece, but here
        the objective has a large focal length and a much larger aperture than the eyepiece.
      </p>
      <TelescopeDiagram />
      <ul>
        <li>Light from a distant object enters the objective and a real image is formed in the tube at its second focal point.</li>
        <li>The eyepiece magnifies this image, producing a final inverted image.</li>
        <li>
          The magnifying power m is the ratio of the angle β subtended at the eye by the final image to the angle α which
          the object subtends at the lens or the eye.
        </li>
      </ul>
      <FormulaBlock latex={String.raw`m=\frac{\beta}{\alpha}=\frac{f_o}{f_e}`} label="Telescope in normal adjustment" tag="Eq. (9.46)" important />
      <ul>
        <li>The length of the telescope tube is f₀ + fₑ.</li>
        <li>Terrestrial telescopes have, in addition, a pair of inverting lenses to make the final image erect.</li>
        <li>Refracting telescopes can be used for both terrestrial and astronomical observations.</li>
        <li>
          Example: an objective of 100 cm and an eyepiece of 1 cm give <Formula>{String.raw`m=100/1=100`}</Formula>.
        </li>
        <li>
          A pair of stars 1′ apart then appears separated by 100 × 1′ = 100′ = 1.67°.
        </li>
        <li>The light gathering power depends on the area of the objective — larger diameters show fainter objects.</li>
        <li>The resolving power, the ability to see two nearly parallel objects distinctly, also depends on the objective diameter.</li>
        <li>The largest lens objective in use has a diameter of 40 inch (~1.02 m), at the Yerkes Observatory, Wisconsin, USA.</li>
        <li>Such big lenses are heavy, difficult to support by their edges, and hard to make free of chromatic aberration and distortion.</li>
      </ul>
      <p>
        For these reasons modern telescopes use a concave mirror rather than a lens for the objective —{" "}
        <strong>reflecting telescopes</strong>.
      </p>
      <CassegrainDiagram />
      <ul>
        <li>There is no chromatic aberration in a mirror.</li>
        <li>Mechanical support is much less of a problem: a mirror weighs less than a lens of equivalent optical quality and can be supported over its entire back surface.</li>
        <li>One obvious problem is that the objective mirror focusses light inside the tube, so the observer sits there and obstructs some light — as in the 200 inch (~5.08 m) Mt. Palomar telescope.</li>
        <li>Another solution is to deflect the converging light with a secondary mirror: the Cassegrain telescope uses a convex secondary mirror and the light passes through a hole in the primary.</li>
        <li>It has the advantage of a large focal length in a short telescope.</li>
        <li>The largest telescope in India is the 2.34 m reflecting (Cassegrain) telescope at Kavalur, Tamil Nadu, used by the Indian Institute of Astrophysics, Bangalore.</li>
        <li>The largest reflecting telescopes in the world are the pair of Keck telescopes in Hawaii, USA, with 10 metre reflectors.</li>
      </ul>
      <Comparison
        columns={[
          {
            title: "Refracting telescope",
            children: (
              <ul>
                <li>Objective is a lens of large focal length.</li>
                <li>Tube length f₀ + fₑ.</li>
                <li>Suffers chromatic aberration and distortion.</li>
                <li>Large lenses are heavy and hard to support by the rim.</li>
              </ul>
            ),
          },
          {
            title: "Reflecting telescope",
            children: (
              <ul>
                <li>Objective is a concave mirror.</li>
                <li>No chromatic aberration at all.</li>
                <li>Mirror is lighter and supported over its whole back.</li>
                <li>Focus lies inside the tube — solved by the Cassegrain secondary mirror and the hole in the primary.</li>
              </ul>
            ),
          },
        ]}
      />

      <h2 id="h-9-equations">Key Equations — Revision Board</h2>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Mirror equation</p>
          <FormulaBlock latex={String.raw`\frac{1}{v}+\frac{1}{u}=\frac{1}{f},\qquad f=\frac{R}{2}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Mirror magnification</p>
          <FormulaBlock latex={String.raw`m=\frac{h'}{h}=-\frac{v}{u}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Snell&apos;s law and critical angle</p>
          <FormulaBlock latex={String.raw`n_{21}=\frac{\sin i}{\sin r},\qquad \sin i_c=n_{21}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Single spherical surface</p>
          <FormulaBlock latex={String.raw`\frac{n_2}{v}-\frac{n_1}{u}=\frac{n_2-n_1}{R}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Lens maker &amp; thin lens</p>
          <FormulaBlock latex={String.raw`\frac{1}{f}=\left(\frac{n_2}{n_1}-1\right)\left(\frac{1}{R_1}-\frac{1}{R_2}\right)`} important />
          <FormulaBlock latex={String.raw`\frac{1}{v}-\frac{1}{u}=\frac{1}{f},\quad m=\frac{v}{u}`} />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Power and combination</p>
          <FormulaBlock latex={String.raw`P=\frac{1}{f},\qquad P=P_1+P_2+P_3+\dots`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Prism</p>
          <FormulaBlock latex={String.raw`\delta=i+e-A,\qquad n_{21}=\frac{\sin\left[(A+D_m)/2\right]}{\sin\left[A/2\right]}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Instruments</p>
          <FormulaBlock latex={String.raw`m_{\text{simple}}=1+\frac{D}{f},\quad m_{\text{compound}}=\frac{L}{f_o}\frac{D}{f_e},\quad m_{\text{telescope}}=\frac{f_o}{f_e}`} important />
        </FormulaCard>
      </div>

      <h2 id="h-9-exercises">Back-of-Chapter Exercises</h2>
      <p className="text-sm text-muted-foreground">
        All 31 NCERT exercises with the complete answer key. Try each one before opening the panel.
      </p>
      <Expandable title="Exercises 9.1 – 9.31 — questions and answer key" variant="exercise">
        <ExerciseQa
          questions={[
            "A small candle, 2.5 cm in size is placed at 27 cm in front of a concave mirror of radius of curvature 36 cm. At what distance from the mirror should a screen be placed in order to obtain a sharp image? Describe the nature and size of the image. If the candle is moved closer to the mirror, how would the screen have to be moved?",
            "A 4.5 cm needle is placed 12 cm away from a convex mirror of focal length 15 cm. Give the location of the image and the magnification. Describe what happens as the needle is moved farther from the mirror.",
            "A tank is filled with water to a height of 12.5 cm. The apparent depth of a needle lying at the bottom of the tank is measured by a microscope to be 9.4 cm. What is the refractive index of water? If water is replaced by a liquid of refractive index 1.63 up to the same height, by what distance would the microscope have to be moved to focus on the needle again?",
            "Figures 9.27(a) and (b) show refraction of a ray in air incident at 60° with the normal to a glass-air and water-air interface, respectively. Predict the angle of refraction in glass when the angle of incidence in water is 45° with the normal to a water-glass interface [Fig. 9.27(c)].",
            "A small bulb is placed at the bottom of a tank containing water to a depth of 80 cm. What is the area of the surface of water through which light from the bulb can emerge out? Refractive index of water is 1.33. (Consider the bulb to be a point source.)",
            "A prism is made of glass of unknown refractive index. A parallel beam of light is incident on a face of the prism. The angle of minimum deviation is measured to be 40°. What is the refractive index of the material of the prism? The refracting angle of the prism is 60°. If the prism is placed in water (refractive index 1.33), predict the new angle of minimum deviation of a parallel beam of light.",
            "Double-convex lenses are to be manufactured from a glass of refractive index 1.55, with both faces of the same radius of curvature. What is the radius of curvature required if the focal length is to be 20 cm?",
            "A beam of light converges at a point P. Now a lens is placed in the path of the convergent beam 12 cm from P. At what point does the beam converge if the lens is (a) a convex lens of focal length 20 cm, and (b) a concave lens of focal length 16 cm?",
            "An object of size 3.0 cm is placed 14 cm in front of a concave lens of focal length 21 cm. Describe the image produced by the lens. What happens if the object is moved further away from the lens?",
            "What is the focal length of a convex lens of focal length 30 cm in contact with a concave lens of focal length 20 cm? Is the system a converging or a diverging lens? Ignore thickness of the lenses.",
            "A compound microscope consists of an objective lens of focal length 2.0 cm and an eyepiece of focal length 6.25 cm separated by a distance of 15 cm. How far from the objective should an object be placed in order to obtain the final image at (a) the least distance of distinct vision (25 cm), and (b) at infinity? What is the magnifying power of the microscope in each case?",
            "A person with a normal near point (25 cm) using a compound microscope with objective of focal length 8.0 mm and an eyepiece of focal length 2.5 cm can bring an object placed at 9.0 mm from the objective in sharp focus. What is the separation between the two lenses? Calculate the magnifying power of the microscope.",
            "A small telescope has an objective lens of focal length 144 cm and an eyepiece of focal length 6.0 cm. What is the magnifying power of the telescope? What is the separation between the objective and the eyepiece?",
            "(a) A giant refracting telescope at an observatory has an objective lens of focal length 15 m. If an eyepiece of focal length 1.0 cm is used, what is the angular magnification of the telescope? (b) If this telescope is used to view the moon, what is the diameter of the image of the moon formed by the objective lens? The diameter of the moon is 3.48 × 10⁶ m, and the radius of lunar orbit is 3.8 × 10⁸ m.",
            "Use the mirror equation to deduce that: (a) an object placed between f and 2f of a concave mirror produces a real image beyond 2f. (b) a convex mirror always produces a virtual image independent of the location of the object. (c) the virtual image produced by a convex mirror is always diminished in size and is located between the focus and the pole. (d) an object placed between the pole and focus of a concave mirror produces a virtual and enlarged image.",
            "A small pin fixed on a table top is viewed from above from a distance of 50 cm. By what distance would the pin appear to be raised if it is viewed from the same point through a 15 cm thick glass slab held parallel to the table? Refractive index of glass = 1.5. Does the answer depend on the location of the slab?",
            "(a) Figure 9.28 shows a cross-section of a 'light pipe' made of a glass fibre of refractive index 1.68. The outer covering of the pipe is made of a material of refractive index 1.44. What is the range of the angles of the incident rays with the axis of the pipe for which total reflections inside the pipe take place? (b) What is the answer if there is no outer covering of the pipe?",
            "The image of a small electric bulb fixed on the wall of a room is to be obtained on the opposite wall 3 m away by means of a large convex lens. What is the maximum possible focal length of the lens required for the purpose?",
            "A screen is placed 90 cm from an object. The image of the object on the screen is formed by a convex lens at two different locations separated by 20 cm. Determine the focal length of the lens.",
            "(a) Determine the 'effective focal length' of the combination of the two lenses in Exercise 9.10, if they are placed 8.0 cm apart with their principal axes coincident. Does the answer depend on which side of the combination a beam of parallel light is incident? Is the notion of effective focal length of this system useful at all? (b) An object 1.5 cm in size is placed on the side of the convex lens in the arrangement (a) above. The distance between the object and the convex lens is 40 cm. Determine the magnification produced by the two-lens system, and the size of the image.",
            "At what angle should a ray of light be incident on the face of a prism of refracting angle 60° so that it just suffers total internal reflection at the other face? The refractive index of the material of the prism is 1.524.",
            "A card sheet divided into squares each of size 1 mm² is being viewed at a distance of 9 cm through a magnifying glass (a converging lens of focal length 9 cm) held close to the eye. (a) What is the magnification produced by the lens? How much is the area of each square in the virtual image? (b) What is the angular magnification (magnifying power) of the lens? (c) Is the magnification in (a) equal to the magnifying power in (b)? Explain.",
            "(a) At what distance should the lens be held from the card sheet in Exercise 9.22 in order to view the squares distinctly with the maximum possible magnifying power? (b) What is the magnification in this case? (c) Is the magnification equal to the magnifying power in this case? Explain.",
            "What should be the distance between the object in Exercise 9.23 and the magnifying glass if the virtual image of each square is to have an area of 6.25 mm²? Would you be able to see the squares distinctly with your eyes very close to the magnifier?",
            "Answer the following questions: (a) The angle subtended at the eye by an object is equal to the angle subtended at the eye by the virtual image produced by a magnifying glass. In what sense then does a magnifying glass provide angular magnification? (b) In viewing through a magnifying glass, one usually positions one's eyes very close to the lens. Does angular magnification change if the eye is moved back? (c) Magnifying power of a simple microscope is inversely proportional to the focal length of the lens. What then stops us from using a convex lens of smaller and smaller focal length and achieving greater and greater magnifying power? (d) Why must both the objective and the eyepiece of a compound microscope have short focal lengths? (e) When viewing through a compound microscope, our eyes should be positioned not on the eyepiece but a short distance away from it for best viewing. Why? How much should be that short distance between the eye and eyepiece?",
            "An angular magnification (magnifying power) of 30X is desired using an objective of focal length 1.25 cm and an eyepiece of focal length 5 cm. How will you set up the compound microscope?",
            "A small telescope has an objective lens of focal length 140 cm and an eyepiece of focal length 5.0 cm. What is the magnifying power of the telescope for viewing distant objects when (a) the telescope is in normal adjustment (i.e., when the final image is at infinity)? (b) the final image is formed at the least distance of distinct vision (25 cm)?",
            "(a) For the telescope described in Exercise 9.27 (a), what is the separation between the objective lens and the eyepiece? (b) If this telescope is used to view a 100 m tall tower 3 km away, what is the height of the image of the tower formed by the objective lens? (c) What is the height of the final image of the tower if it is formed at 25 cm?",
            "A Cassegrain telescope uses two mirrors as shown in Fig. 9.26. Such a telescope is built with the mirrors 20 mm apart. If the radius of curvature of the large mirror is 220 mm and the small mirror is 140 mm, where will the final image of an object at infinity be?",
            "Light incident normally on a plane mirror attached to a galvanometer coil retraces backwards as shown in Fig. 9.29. A current in the coil produces a deflection of 3.5° of the mirror. What is the displacement of the reflected spot of light on a screen placed 1.5 m away?",
            "Figure 9.30 shows an equiconvex lens (of refractive index 1.50) in contact with a liquid layer on top of a plane mirror. A small needle with its tip on the principal axis is moved along the axis until its inverted image is found at the position of the needle. The distance of the needle from the lens is measured to be 45.0 cm. The liquid is removed and the experiment is repeated. The new distance is measured to be 30.0 cm. What is the refractive index of the liquid?",
          ]}
          answers={[
            "f = −18 cm. 1/v = 1/f − 1/u gives v = −54 cm, so the screen goes 54 cm in front of the mirror. m = −v/u = −2: the image is real, inverted and 5 cm tall. Moving the candle closer increases |v|, so the screen must be moved farther away.",
            "1/v = 1/f − 1/u with f = +15 cm and u = −12 cm gives v = +6.7 cm: the image is 6.7 cm behind the mirror, virtual and erect, and m = +0.56 so it is about 2.5 cm tall. As the needle moves farther the image moves towards the focus and becomes still smaller.",
            "n = real depth / apparent depth = 12.5/9.4 = 1.33. With the liquid (n = 1.63) the apparent depth is 12.5/1.63 = 7.7 cm, so the microscope is lowered by 9.4 − 7.7 = 1.7 cm.",
            "From the two figures n_glass = sin 60°/sin 35° = 1.5 and n_water = sin 60°/sin 41° ≈ 1.33. For water to glass n_wg = 1.5/1.33 = 1.13, so sin r = sin 45°/1.13 = 0.63 and r ≈ 39°.",
            "sin i_c = 1/1.33 gives i_c = 48.75°. Light emerges through a circle of radius r = h tan i_c = 80 × 1.14 = 91 cm, so the area is πr² = 2.61 m².",
            "n = sin[(A + Dₘ)/2] / sin(A/2) = sin 50°/sin 30° = 1.53. In water n_rel = 1.53/1.33 = 1.15, so sin[(60° + D′)/2] = 1.15 × 0.5 = 0.576, giving (60° + D′)/2 = 35.2° and D′ ≈ 10°.",
            "With R₁ = R₂ = R, 1/f = (n − 1)(2/R): 1/20 = 0.55 × 2/R, so R = 22 cm.",
            "Here u = +12 cm (virtual object). (a) Convex, f = +20 cm: 1/v = 1/20 + 1/12 gives v = 7.5 cm; the beam converges 7.5 cm beyond the lens. (b) Concave, f = −16 cm: 1/v = −1/16 + 1/12 = 1/48 gives v = 48 cm; the beam converges 48 cm beyond the lens.",
            "1/v = 1/f + 1/u = −1/21 − 1/14 gives v = −8.4 cm and m = v/u = +0.6. The image is 1.8 cm tall, virtual, erect and 8.4 cm from the lens on the object side. Moving the object farther makes the image smaller and closer to the focal point.",
            "1/f = 1/30 − 1/20 = −1/60, so f = −60 cm: the combination behaves as a diverging lens.",
            "(a) With the final image at 25 cm, u_e = −5 cm, so the objective must form its image 10 cm from it: u_o = −2.5 cm and m = 4 × 5 = 20. (b) With the final image at infinity, u_e = −6.25 cm, the objective image is at 8.75 cm, u_o = −2.6 cm and m = 3.4 × 4 = 13.5.",
            "For the objective v_o = 7.2 cm. With the final image at 25 cm, u_e = −2.3 cm, so the separation is 7.2 + 2.3 = 9.5 cm and m = (7.2/0.9)(1 + 25/2.5) = 8 × 11 = 88.",
            "m = 144/6.0 = 24; separation = f₀ + fₑ = 150 cm.",
            "(a) m = 15/0.01 = 1500. (b) The moon subtends 3.48 × 10⁶/3.8 × 10⁸ = 9.2 × 10⁻³ rad at the objective, so the image diameter is 15 × 9.2 × 10⁻³ = 0.14 m ≈ 14 cm.",
            <>
              (a) Concave mirror: put f = −F and u = −x with F &lt; x &lt; 2F. Then 1/v = (F − x)/Fx gives a negative v, a real image, with |v| = Fx/(x − F) &gt; 2F. (b) Convex mirror: f &gt; 0 and u &lt; 0, so 1/v = 1/f − 1/u &gt; 0 for every u — v is always positive, so the image is always virtual. (c) With v = fx/(x + f), 0 &lt; v &lt; f, so the image lies between P and F, and m = f/(x + f) &lt; 1 — diminished. (d) Concave mirror with 0 &lt; x &lt; F: 1/v = (F − x)/Fx &gt; 0, so v &gt; 0 (virtual, behind the mirror) and |m| = F/(F − x) &gt; 1 — enlarged and erect.
            </>,
            "Shift = t(1 − 1/n) = 15(1 − 2/3) = 5 cm, so the pin appears raised by 5 cm. The answer does not depend on the location of the slab, only on its thickness.",
            "(a) sin i_c = 1.44/1.68 gives i_c = 59°. Inside, the ray must strike the wall at ≥ 59°, i.e. make at most 31° with the axis, so sin i ≤ 1.68 sin 31° = 0.865 and i ≤ 60°: all rays with 0 &lt; i &lt; 60° are totally reflected. (b) Without cladding sin i_c = 1/1.68 gives i_c = 36.5°, so r ≤ 53.5° and sin i ≤ 1.68 sin 53.5° = 1.35 &gt; 1 — every ray entering the pipe is totally reflected.",
            "With u + v = 3 m fixed, f = uv/(u + v) is largest when u = v = 1.5 m, so f_max = 0.75 m = 75 cm.",
            "Displacement method: f = (D² − d²)/4D = (90² − 20²)/(4 × 90) = 21.4 cm.",
            <>
              (a) 1/F = 1/f₁ + 1/f₂ − d/(f₁f₂) = 1/30 − 1/20 + 8/600, so F = −300 cm — a diverging combination. The expression is symmetric in the two lenses, so the value is the same from either side, but the principal planes are not at the lenses; the notion of effective focal length is therefore of limited use for locating images. (b) For the convex lens v₁ = +120 cm; for the concave lens u = +112 cm gives v = −24 cm, so m = (−3)(−0.22) = +0.65 and the image is about 1.0 cm tall.
            </>,
            "Just at total internal reflection r₂ = c, and sin c = 1/1.524 gives c = 41°. Then r₁ = 60° − 41° = 19° and sin i = 1.524 sin 19° = 0.50, so i ≈ 30°.",
            "(a) With the card at 9 cm = f the image is at infinity, so the apparent linear magnification equals the angular magnification D/f = 25/9 = 2.8; a 1 mm² square then appears about 7.7 mm². (b) The magnifying power is 25/9 = 2.8. (c) Yes — with the image at infinity the two definitions coincide.",
            "(a) For maximum magnifying power the image must be at D, so u = −6.6 cm: the lens is held 6.6 cm from the card. (b) m = v/u = 25/6.6 = 3.8. (c) This equals the magnifying power 1 + D/f = 3.8, because the eye is close to the lens.",
            "An area of 6.25 mm² means a linear magnification of 2.5. With v = 2.5u on the same side, u = 5.4 cm and the image is at 13.5 cm — closer than the near point of 25 cm, so the squares cannot be seen distinctly.",
            "(a) The lens lets the eye come closer than D: the object is brought to a distance less than 25 cm, so the angle it subtends (h/f) is larger than h/D, even though image and object subtend the same angle at the eye. (b) With the image at infinity the rays from each point are parallel, so the angular magnification does not change; only the field of view shrinks as the eye moves back. (c) Very small focal lengths mean very small lenses with tiny apertures, poor light gathering and severe aberrations — the image becomes too dim and too imperfect. (d) Only small focal lengths give the large ratios m₀ = L/f₀ and mₑ = D/fₑ. (e) The rays emerging from the eyepiece are not all parallel, and the eye must sit where the whole bundle enters the pupil — at the eye-ring, a few cm from the eyepiece. Right at the lens the field of view is cut down.",
            "Take the final image at infinity: mₑ = 25/5 = 5, so m₀ = 30/5 = 6. Then u_o = −1.5 cm, v_o = 8.75 cm, and the separation is 8.75 + 5 = 13.75 cm. The object is placed 1.5 cm from the objective.",
            "(a) In normal adjustment m = 140/5 = 28. (b) With the image at 25 cm, m = (f₀/fₑ)(1 + fₑ/D) = 28 × 1.2 = 33.6.",
            "(a) Separation = f₀ + fₑ = 140 + 5 = 145 cm. (b) The tower subtends 100/3000 = 1/30 rad, so the image height at the objective focus is 140 × 1/30 = 4.7 cm. (c) The eyepiece magnifies it 6 times, so the final image is 28 cm tall.",
            "The primary has f₁ = 110 mm, so it would focus 110 mm behind itself — that is 90 mm behind the secondary mirror, which therefore has u = +90 mm (virtual object). With f₂ = +70 mm, 1/v = 1/70 − 1/90 = 1/315, so v = 315 mm. The final image forms 315 mm behind the small mirror, i.e. 295 mm behind the large one.",
            "The reflected ray turns through twice the mirror rotation: θ = 7° = 0.122 rad, so the spot moves 1.5 × 0.122 = 0.18 m on the screen.",
            "Without the liquid the image coincides with the needle at 30 cm; for a lens in contact with a plane mirror that distance equals the focal length, so f = 30 cm. With the liquid, 45 cm plays the same role, so 1/45 = 1/30 + 1/f_l, giving f_l = −90 cm. For the plano-concave liquid lens 1/f_l = −(n − 1)/R with R = 30 cm, hence n = 1.33.",
          ]}
        />
      </Expandable>
    </>
  );
}
