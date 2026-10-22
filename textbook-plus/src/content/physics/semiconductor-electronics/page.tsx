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
import { TableCard } from "@/components/content/data/TableCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";

/* ---------- Figure shell + SVG primitives (local to this chapter) ---------- */

const ELECTRON = "#2563eb";
const HOLE = "#e11d48";
const ACCENT = "#8b5cf6";
const AMBER = "#f59e0b";
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

function Lbl({ x, y, children, anchor = "middle", color = MUTED, size = 10 }: { x: number; y: number; children: ReactNode; anchor?: "start" | "middle" | "end"; color?: string; size?: number }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={color === MUTED ? 500 : 700} fill={color}>
      {children}
    </text>
  );
}

function Band({ x, y, w, h, filled = false }: { x: number; y: number; w: number; h: number; filled?: boolean }) {
  return (
    <rect x={x} y={y} width={w} height={h} rx="3" fill={filled ? "#94a3b8" : "none"} fillOpacity={filled ? 0.3 : 0} stroke={MUTED} strokeWidth="1.2" strokeDasharray={filled ? undefined : "4 3"} />
  );
}

function Dot({ x, y, hole = false }: { x: number; y: number; hole?: boolean }) {
  return hole ? <circle cx={x} cy={y} r="3.4" fill="none" stroke={HOLE} strokeWidth="1.5" /> : <circle cx={x} cy={y} r="3.4" fill={ELECTRON} />;
}

function Arrow({ x1, y1, x2, y2, color = MUTED, width = 1.4 }: { x1: number; y1: number; x2: number; y2: number; color?: string; width?: number }) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const s = 6.5;
  const p1 = `${(x2 - s * Math.cos(a - 0.42)).toFixed(1)},${(y2 - s * Math.sin(a - 0.42)).toFixed(1)}`;
  const p2 = `${(x2 - s * Math.cos(a + 0.42)).toFixed(1)},${(y2 - s * Math.sin(a + 0.42)).toFixed(1)}`;
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={width} strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${p1} ${p2}`} fill={color} />
    </g>
  );
}

function sinePath(x0: number, y0: number, width: number, amp: number, cycles: number, phase = 0) {
  const steps = cycles * 20;
  let d = `M ${x0} ${y0}`;
  for (let i = 1; i <= steps; i++) {
    const x = x0 + (width * i) / steps;
    const y = y0 - amp * Math.sin((2 * Math.PI * cycles * i) / steps + phase);
    d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return d;
}

function halfWavePath(x0: number, y0: number, width: number, amp: number, cycles: number) {
  const per = width / cycles;
  let d = `M ${x0} ${y0}`;
  for (let c = 0; c < cycles; c++) {
    for (let i = 0; i <= 12; i++) {
      const x = x0 + c * per + (per / 2) * (i / 12);
      d += ` L ${x.toFixed(2)} ${(y0 - amp * Math.sin((Math.PI * i) / 12)).toFixed(2)}`;
    }
    d += ` L ${(x0 + (c + 1) * per).toFixed(2)} ${y0}`;
  }
  return d;
}

function ripplePath(x0: number, y0: number, width: number, amp: number, cycles: number) {
  const per = width / cycles;
  let d = `M ${x0} ${y0 - amp}`;
  for (let c = 0; c < cycles; c++) {
    const sx = x0 + c * per;
    for (let i = 1; i <= 8; i++) {
      d += ` L ${(sx + per * 0.82 * (i / 8)).toFixed(2)} ${(y0 - amp * (1 - 0.26 * (i / 8))).toFixed(2)}`;
    }
    d += ` Q ${(sx + per * 0.93).toFixed(2)} ${(y0 - amp * 1.06).toFixed(2)} ${(sx + per).toFixed(2)} ${y0 - amp}`;
  }
  return d;
}

/* ---------- 14.1/14.6 — energy bands of metal, insulator, semiconductor ---------- */

function BandClassificationDiagram() {
  return (
    <Figure n="14.2" caption="Energy bands of (a) metals — bands overlap or the conduction band is partly filled; (b) insulators — a large gap E_g > 3 eV; (c) semiconductors — a small gap E_g < 3 eV.">
      <svg viewBox="0 0 480 230" className="h-auto w-full" role="img" aria-label="Energy bands of metals, insulators and semiconductors">
        <Band x={45} y={62} w={95} h={50} /><Band x={45} y={110} w={95} h={50} filled />
        {[65, 85, 105, 125].map((x) => <Dot key={x} x={x} y={78} />)}
        <Arrow x1={148} y1={100} x2={166} y2={100} color={ACCENT} /><Lbl x={170} y={96} anchor="start" color={ACCENT} size={9}>overlap</Lbl><Lbl x={92} y={205}>Metal</Lbl>
        <Band x={205} y={50} w={95} h={40} /><Band x={205} y={150} w={95} h={40} filled />
        <Arrow x1={250} y1={93} x2={250} y2={147} color={AMBER} /><Arrow x1={250} y1={147} x2={250} y2={93} color={AMBER} />
        <Lbl x={260} y={124} anchor="start" color={AMBER} size={9}>E_g &gt; 3 eV</Lbl><Lbl x={252} y={205}>Insulator</Lbl>
        <Band x={360} y={98} w={95} h={35} /><Band x={360} y={153} w={95} h={35} filled />
        <Arrow x1={405} y1={136} x2={405} y2={150} color={AMBER} /><Arrow x1={405} y1={150} x2={405} y2={136} color={AMBER} />
        <Lbl x={415} y={148} anchor="start" color={AMBER} size={9}>E_g &lt; 3 eV</Lbl><Lbl x={407} y={205}>Semiconductor</Lbl>
        <line x1={28} y1={185} x2={455} y2={185} stroke={MUTED} strokeWidth="1" strokeDasharray="2 3" /><Lbl x={30} y={30} anchor="start" size={9}>energy</Lbl>
      </svg>
    </Figure>
  );
}

/* ---------- 14.1/14.6 — intrinsic bands at 0 K and above 0 K ---------- */

function IntrinsicBandDiagram() {
  return (
    <Figure n="14.1 / 14.6" caption="An intrinsic semiconductor at T = 0 K behaves like an insulator: valence band full, conduction band empty. At T > 0 K thermal energy creates equal numbers of conduction electrons and valence-band holes.">
      <svg viewBox="0 0 470 240" className="h-auto w-full" role="img" aria-label="Energy bands of an intrinsic semiconductor at 0 K and above 0 K">
        <line x1={34} y1={200} x2={34} y2={30} stroke={STRUCT} strokeWidth="1.4" /><polygon points="34,22 29,34 39,34" fill={STRUCT} /><Lbl x={22} y={40} size={9}>E</Lbl>
        <Band x={56} y={48} w={140} h={48} /><Band x={56} y={140} w={140} h={48} filled />
        <Lbl x={50} y={52} anchor="end" size={9} color={STRUCT}>E_C</Lbl><Lbl x={50} y={146} anchor="end" size={9} color={STRUCT}>E_V</Lbl>
        <Arrow x1={206} y1={100} x2={206} y2={140} color={AMBER} /><Arrow x1={206} y1={140} x2={206} y2={100} color={AMBER} />
        <Lbl x={216} y={124} anchor="start" color={AMBER} size={9}>E_g</Lbl><Lbl x={126} y={222} size={9}>(a) T = 0 K — insulator</Lbl>
        <Band x={276} y={48} w={140} h={48} /><Band x={276} y={140} w={140} h={48} filled />
        <Dot x={308} y={66} /><Dot x={338} y={78} /><Dot x={372} y={62} />
        <Dot x={308} y={158} hole /><Dot x={338} y={172} hole /><Dot x={372} y={152} hole />
        <Lbl x={270} y={52} anchor="end" size={9} color={STRUCT}>E_C</Lbl><Lbl x={270} y={146} anchor="end" size={9} color={STRUCT}>E_V</Lbl>
        <Arrow x1={428} y1={100} x2={428} y2={140} color={AMBER} /><Arrow x1={428} y1={140} x2={428} y2={100} color={AMBER} />
        <Lbl x={346} y={222} size={9}>(b) T &gt; 0 K — electron-hole pairs</Lbl>
      </svg>
    </Figure>
  );
}

/* ---------- 14.3 — covalent bonds and a hole ---------- */

function CovalentBondDiagram() {
  const bonds = [[222, 113, 222, 60], [209, 130, 152, 130], [251, 130, 308, 130]];
  const atoms = [{ x: 230, y: 45 }, { x: 135, y: 130 }, { x: 325, y: 130 }];
  return (
    <Figure n="14.4 / 14.5" caption="Two-dimensional picture of the Si or Ge lattice: each atom shares one valence electron with each of four neighbours. A bond broken by thermal energy leaves a vacancy (hole) plus a free electron.">
      <svg viewBox="0 0 460 250" className="h-auto w-full" role="img" aria-label="Covalent bonds in a silicon lattice and a thermally generated hole">
        {bonds.map((b, i) => (<g key={i} stroke={STRUCT} strokeWidth="1.4" strokeLinecap="round"><line x1={b[0] - 3} y1={b[1]} x2={b[2] - 3} y2={b[3]} /><line x1={b[0] + 3} y1={b[1]} x2={b[2] + 3} y2={b[3]} /></g>))}
        <circle cx={230} cy={130} r="17" fill="none" stroke={STRUCT} strokeWidth="1.8" /><Lbl x={230} y={134} size={11} color={STRUCT}>+4</Lbl>
        {atoms.map((n, i) => (<g key={i}><circle cx={n.x} cy={n.y} r="15" fill="none" stroke={MUTED} strokeWidth="1.4" /><Lbl x={n.x} y={n.y + 4} size={10}>+4</Lbl></g>))}
        <line x1={230} y1={147} x2={230} y2={168} stroke={MUTED} strokeWidth="1.2" strokeDasharray="4 3" /><Dot x={230} y={180} hole /><Lbl x={244} y={184} anchor="start" color={HOLE} size={9}>hole (+q)</Lbl>
        <Dot x={240} y={202} /><Arrow x1={250} y1={202} x2={330} y2={202} color={ELECTRON} /><Lbl x={336} y={206} anchor="start" color={ELECTRON} size={9}>free electron (−q)</Lbl>
        <Lbl x={300} y={80} anchor="start" size={9}>covalent bond</Lbl><Arrow x1={298} y1={84} x2={268} y2={110} color={MUTED} width={1} />
        <Lbl x={230} y={238} size={9}>bond broken by thermal energy</Lbl>
      </svg>
    </Figure>
  );
}

/* ---------- 14.7/14.8 — donor and acceptor doping ---------- */

function DopingDiagram() {
  const sites = (cx: number, cy: number) => [{ x: cx, y: cy - 75 }, { x: cx - 75, y: cy }, { x: cx + 75, y: cy }];
  return (
    <Figure n="14.7 / 14.8" caption="(a) A pentavalent donor (As, Sb, P) in the tetravalent lattice donates one extra, weakly bound electron — n-type. (b) A trivalent acceptor (In, B, Al) leaves one bond short: that vacancy is a hole — p-type.">
      <svg viewBox="0 0 490 250" className="h-auto w-full" role="img" aria-label="Pentavalent donor giving n-type and trivalent acceptor giving p-type material">
        {[120, 355].map((cx) => sites(cx, 120).map((n, i) => (<g key={`${cx}-${i}`}><line x1={cx} y1={120} x2={n.x} y2={n.y} stroke={STRUCT} strokeWidth="1.3" /><circle cx={n.x} cy={n.y} r="14" fill="none" stroke={MUTED} strokeWidth="1.3" /><Lbl x={n.x} y={n.y + 4} size={9}>+4</Lbl></g>)))}
        <line x1={120} y1={120} x2={120} y2={195} stroke={STRUCT} strokeWidth="1.3" />
        <circle cx={120} cy={120} r="19" fill="none" stroke={ELECTRON} strokeWidth="2" /><Lbl x={120} y={124} size={11} color={ELECTRON}>+5</Lbl>
        <circle cx={120} cy={208} r="14" fill="none" stroke={MUTED} strokeWidth="1.3" /><Lbl x={120} y={212} size={9}>+4</Lbl>
        <Dot x={152} y={100} /><Lbl x={160} y={96} anchor="start" color={ELECTRON} size={9}>5th electron — free</Lbl><Lbl x={120} y={238} size={9}>(a) n-type — donor</Lbl>
        <circle cx={355} cy={120} r="19" fill="none" stroke={HOLE} strokeWidth="2" /><Lbl x={355} y={124} size={11} color={HOLE}>+3</Lbl>
        <line x1={355} y1={139} x2={355} y2={181} stroke={MUTED} strokeWidth="1.2" strokeDasharray="4 3" />
        <circle cx={355} cy={195} r="14" fill="none" stroke={MUTED} strokeWidth="1.3" /><Lbl x={355} y={199} size={9}>+4</Lbl>
        <Dot x={355} y={166} hole /><Lbl x={369} y={170} anchor="start" color={HOLE} size={9}>hole — acceptor</Lbl><Lbl x={355} y={238} size={9}>(b) p-type — acceptor</Lbl>
        <line x1={240} y1={30} x2={240} y2={232} stroke={MUTED} strokeWidth="1" strokeDasharray="2 3" />
      </svg>
    </Figure>
  );
}

/* ---------- 14.4.3 — extrinsic energy bands ---------- */

function ExtrinsicBandDiagram() {
  return (
    <Figure n="14.9" caption="(a) n-type: the donor level E_D lies just below E_C, so its electrons reach the conduction band with very little energy. (b) p-type: the acceptor level E_A lies just above E_V, so valence electrons rise into it, leaving holes behind.">
      <svg viewBox="0 0 470 230" className="h-auto w-full" role="img" aria-label="Energy bands of n-type and p-type extrinsic semiconductors">
        <Band x={62} y={48} w={130} h={42} />{[86, 112, 138, 164].map((x) => <Dot key={x} x={x} y={68} />)}
        <line x1={62} y1={104} x2={192} y2={104} stroke={ELECTRON} strokeWidth="1.6" strokeDasharray="6 3" /><Dot x={96} y={104} /><Dot x={146} y={104} />
        <Band x={62} y={150} w={130} h={42} filled />
        <Lbl x={56} y={52} anchor="end" size={9} color={STRUCT}>E_C</Lbl><Lbl x={56} y={108} anchor="end" size={9} color={ELECTRON}>E_D</Lbl><Lbl x={56} y={154} anchor="end" size={9} color={STRUCT}>E_V</Lbl>
        <Arrow x1={206} y1={104} x2={206} y2={72} color={ELECTRON} width={1.2} /><Lbl x={146} y={214} size={9}>(a) n-type at T &gt; 0 K</Lbl>
        <Band x={300} y={48} w={130} h={42} />
        <line x1={300} y1={124} x2={430} y2={124} stroke={HOLE} strokeWidth="1.6" strokeDasharray="6 3" /><Dot x={330} y={124} hole /><Dot x={382} y={124} hole />
        <Band x={300} y={150} w={130} h={42} filled /><Dot x={322} y={166} hole /><Dot x={366} y={176} hole /><Dot x={402} y={162} hole />
        <Lbl x={294} y={52} anchor="end" size={9} color={STRUCT}>E_C</Lbl><Lbl x={294} y={128} anchor="end" size={9} color={HOLE}>E_A</Lbl><Lbl x={294} y={154} anchor="end" size={9} color={STRUCT}>E_V</Lbl>
        <Arrow x1={444} y1={124} x2={444} y2={152} color={HOLE} width={1.2} /><Lbl x={365} y={214} size={9}>(b) p-type at T &gt; 0 K</Lbl>
      </svg>
    </Figure>
  );
}

/* ---------- 14.5 — p-n junction and depletion region ---------- */

function PnJunctionDiagram() {
  const holes = [[70, 120], [105, 150], [150, 122], [180, 158]];
  const electrons = [[330, 122], [370, 152], [410, 124], [300, 158]];
  return (
    <Figure n="14.10 / 14.11" caption="p-n junction formation. Diffusion leaves immobile ionised acceptors (negative) on the p-side and ionised donors (positive) on the n-side; these space-charge layers form the depletion region and set up a barrier potential V₀.">
      <svg viewBox="0 0 490 265" className="h-auto w-full" role="img" aria-label="p-n junction with depletion region, diffusion, drift and barrier potential">
        <rect x={30} y={70} width={175} height={105} fill={HOLE} fillOpacity="0.08" stroke={HOLE} strokeWidth="1.2" />
        <rect x={285} y={70} width={175} height={105} fill={ELECTRON} fillOpacity="0.08" stroke={ELECTRON} strokeWidth="1.2" />
        <rect x={205} y={70} width={80} height={105} fill={MUTED} fillOpacity="0.12" stroke={MUTED} strokeWidth="1" strokeDasharray="4 3" />
        <Lbl x={60} y={92} anchor="start" color={HOLE} size={9}>p-region</Lbl><Lbl x={430} y={92} anchor="end" color={ELECTRON} size={9}>n-region</Lbl>
        {holes.map(([x, y], i) => <Dot key={`h${i}`} x={x} y={y} hole />)}
        {electrons.map(([x, y], i) => <Dot key={`e${i}`} x={x} y={y} />)}
        {[100, 140].map((y) => (<g key={y}><circle cx={222} cy={y} r="7" fill="none" stroke={HOLE} strokeWidth="1.3" /><text x={222} y={y + 4} textAnchor="middle" fontSize={9} fill={HOLE}>−</text><circle cx={268} cy={y} r="7" fill="none" stroke={ELECTRON} strokeWidth="1.3" /><text x={268} y={y + 4} textAnchor="middle" fontSize={9} fill={ELECTRON}>+</text></g>))}
        <Lbl x={245} y={196} size={8}>depletion region</Lbl>
        <Arrow x1={186} y1={48} x2={300} y2={48} color={HOLE} width={1.3} /><Lbl x={243} y={40} size={9} color={HOLE}>holes diffuse p → n</Lbl>
        <Arrow x1={330} y1={204} x2={186} y2={204} color={ELECTRON} width={1.3} /><Lbl x={258} y={222} size={9} color={ELECTRON}>electrons diffuse n → p</Lbl>
        <Arrow x1={272} y1={216} x2={214} y2={216} color={AMBER} width={1.2} /><Lbl x={300} y={236} color={AMBER} size={9}>drift current (opposite)</Lbl>
        <Arrow x1={276} y1={62} x2={212} y2={62} color={ACCENT} /><Lbl x={282} y={66} anchor="start" color={ACCENT} size={9}>E field</Lbl>
        <Lbl x={245} y={258} size={9}>V₀ — n-side positive with respect to p-side</Lbl>
      </svg>
    </Figure>
  );
}

/* ---------- 14.6 — diode construction and symbol ---------- */

function DiodeSymbolDiagram() {
  return (
    <Figure n="14.12" caption="A diode is a p-n junction with metallic contacts at the two ends. In the symbol the arrow points from the p-side to the n-side — the conventional current direction under forward bias.">
      <svg viewBox="0 0 470 165" className="h-auto w-full" role="img" aria-label="Construction and circuit symbol of a p-n junction diode">
        <rect x={55} y={58} width={75} height={46} fill={HOLE} fillOpacity="0.1" stroke={HOLE} strokeWidth="1.2" />
        <rect x={130} y={58} width={75} height={46} fill={ELECTRON} fillOpacity="0.1" stroke={ELECTRON} strokeWidth="1.2" />
        <line x1={22} y1={81} x2={55} y2={81} stroke={STRUCT} strokeWidth="2" /><line x1={205} y1={81} x2={238} y2={81} stroke={STRUCT} strokeWidth="2" />
        <Lbl x={92} y={85} color={HOLE} size={10}>p</Lbl><Lbl x={167} y={85} color={ELECTRON} size={10}>n</Lbl>
        <Lbl x={120} y={132} size={9}>metallic contacts</Lbl><Arrow x1={92} y1={126} x2={80} y2={106} color={MUTED} width={1} /><Arrow x1={168} y1={126} x2={180} y2={106} color={MUTED} width={1} />
        <polygon points="280,60 280,102 320,81" fill={STRUCT} /><line x1={320} y1={58} x2={320} y2={104} stroke={STRUCT} strokeWidth="3" />
        <line x1={246} y1={81} x2={280} y2={81} stroke={STRUCT} strokeWidth="2" /><line x1={320} y1={81} x2={354} y2={81} stroke={STRUCT} strokeWidth="2" />
        <Lbl x={252} y={70} anchor="start" size={9}>A (p)</Lbl><Lbl x={350} y={70} anchor="end" size={9}>K (n)</Lbl>
        <Arrow x1={392} y1={44} x2={440} y2={44} color={HOLE} /><Lbl x={418} y={34} color={HOLE} size={9}>forward current</Lbl>
        <Lbl x={310} y={140} size={9}>circuit symbol</Lbl><Lbl x={110} y={28} size={9}>device</Lbl>
      </svg>
    </Figure>
  );
}

function BiasBarrierDiagram() {
  const panels = [
    { x: 22, top: 86, label: "(1) V = 0", mark: "V₀" },
    { x: 178, top: 108, label: "(2) forward", mark: "V₀ − V" },
    { x: 334, top: 62, label: "(3) reverse", mark: "V₀ + V" },
  ];
  return (
    <Figure n="14.13 / 14.15" caption="Barrier potential with (1) no battery — height V₀; (2) forward bias — reduced to V₀ − V; (3) reverse bias — raised to V₀ + V.">
      <svg viewBox="0 0 480 215" className="h-auto w-full" role="img" aria-label="Barrier potential without bias, under forward bias and under reverse bias">
        {panels.map((p, i) => (
          <g key={i}>
            <path d={`M ${p.x} 166 L ${p.x + 44} 166 Q ${p.x + 62} ${p.top} ${p.x + 80} ${p.top} L ${p.x + 124} ${p.top}`} fill="none" stroke={ACCENT} strokeWidth="2" />
            <line x1={p.x} y1={178} x2={p.x + 124} y2={178} stroke={MUTED} strokeWidth="1" />
            <Lbl x={p.x + 62} y={198} size={9}>{p.label}</Lbl>
            <Arrow x1={p.x + 106} y1={166} x2={p.x + 106} y2={p.top + 2} color={AMBER} width={1.2} /><Arrow x1={p.x + 106} y1={p.top + 2} x2={p.x + 106} y2={166} color={AMBER} width={1.2} />
            <Lbl x={p.x + 112} y={(p.top + 166) / 2 + 4} anchor="start" color={AMBER} size={9}>{p.mark}</Lbl>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

/* ---------- 14.6.3 — V-I characteristic ---------- */

function DiodeIVCurve() {
  return (
    <Figure n="14.16 / 14.17" caption="Typical V-I characteristic of a silicon diode. Forward current is almost zero until the cut-in voltage (~0.7 V), then rises steeply; the reverse current is a small, nearly constant saturation current until breakdown at V_br.">
      <svg viewBox="0 0 470 300" className="h-auto w-full" role="img" aria-label="Voltage-current characteristic of a p-n junction diode">
        <line x1={230} y1={272} x2={448} y2={272} stroke={STRUCT} strokeWidth="1.4" /><polygon points="456,272 442,267 442,277" fill={STRUCT} />
        <line x1={230} y1={272} x2={32} y2={272} stroke={STRUCT} strokeWidth="1.4" /><polygon points="24,272 38,267 38,277" fill={STRUCT} />
        <line x1={230} y1={272} x2={230} y2={32} stroke={STRUCT} strokeWidth="1.4" /><polygon points="230,24 225,36 235,36" fill={STRUCT} />
        <Lbl x={446} y={264} anchor="end" size={9} color={STRUCT}>V</Lbl><Lbl x={218} y={36} anchor="end" size={9} color={STRUCT}>I</Lbl>
        <path d="M 230 272 L 300 268 Q 320 264 330 250 Q 344 214 352 120 Q 357 74 362 44" fill="none" stroke={ELECTRON} strokeWidth="2.2" />
        <line x1={330} y1={254} x2={338} y2={254} stroke={AMBER} strokeWidth="1" strokeDasharray="3 2" />
        <Lbl x={336} y={244} anchor="start" color={AMBER} size={9}>cut-in ≈ 0.7 V (Si)</Lbl><Lbl x={368} y={248} anchor="start" size={9}>forward bias</Lbl>
        <path d="M 230 272 L 110 278 L 74 282 Q 62 284 56 288 Q 48 294 44 240" fill="none" stroke={HOLE} strokeWidth="2.2" />
        <Lbl x={130} y={294} size={9}>reverse saturation current (µA)</Lbl><Lbl x={40} y={228} anchor="start" size={9} color={HOLE}>breakdown</Lbl><Lbl x={90} y={240} size={9} color={HOLE}>V_br</Lbl>
        <line x1={44} y1={272} x2={44} y2={244} stroke={HOLE} strokeWidth="1" strokeDasharray="3 2" />
      </svg>
    </Figure>
  );
}

/* ---------- 14.7 — rectifiers and filter ---------- */

function HalfWaveRectifierDiagram() {
  return (
    <Figure n="14.18" caption="(a) Half-wave rectifier: ac across the secondary, one diode in series with the load. (b) Output appears only during the half cycles in which the diode is forward biased.">
      <svg viewBox="0 0 490 290" className="h-auto w-full" role="img" aria-label="Half-wave rectifier circuit with input and output waveforms">
        <line x1={40} y1={60} x2={70} y2={60} stroke={STRUCT} strokeWidth="1.6" /><line x1={40} y1={140} x2={70} y2={140} stroke={STRUCT} strokeWidth="1.6" />
        <path d="M 70 60 Q 88 68 70 76 Q 88 84 70 92 Q 88 100 70 108 Q 88 116 70 124 Q 88 132 70 140" fill="none" stroke={STRUCT} strokeWidth="1.8" />
        <path d="M 112 60 Q 94 68 112 76 Q 94 84 112 92 Q 94 100 112 108 Q 94 116 112 124 Q 94 132 112 140" fill="none" stroke={STRUCT} strokeWidth="1.8" />
        <line x1={112} y1={60} x2={196} y2={60} stroke={STRUCT} strokeWidth="1.6" /><line x1={112} y1={140} x2={301} y2={140} stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="196,46 196,74 224,60" fill={STRUCT} /><line x1={224} y1={44} x2={224} y2={76} stroke={STRUCT} strokeWidth="2.6" />
        <line x1={224} y1={60} x2={290} y2={60} stroke={STRUCT} strokeWidth="1.6" /><rect x={290} y={82} width={22} height={46} fill="none" stroke={STRUCT} strokeWidth="1.6" />
        <line x1={301} y1={60} x2={301} y2={82} stroke={STRUCT} strokeWidth="1.6" /><Lbl x={327} y={108} anchor="start" size={9}>R_L</Lbl>
        <Lbl x={150} y={50} size={9}>A</Lbl><Lbl x={150} y={156} size={9}>B</Lbl>
        <line x1={40} y1={228} x2={220} y2={228} stroke={MUTED} strokeWidth="1" /><path d={sinePath(40, 228, 180, 24, 2)} fill="none" stroke={ACCENT} strokeWidth="1.8" /><Lbl x={130} y={272} size={9}>input ac</Lbl>
        <line x1={270} y1={228} x2={450} y2={228} stroke={MUTED} strokeWidth="1" /><path d={halfWavePath(270, 228, 180, 24, 2)} fill="none" stroke={ELECTRON} strokeWidth="1.8" /><Lbl x={360} y={272} size={9}>output across R_L</Lbl>
      </svg>
    </Figure>
  );
}

function FullWaveRectifierDiagram() {
  return (
    <Figure n="14.19" caption="(a) Full-wave rectifier with a centre-tap transformer: D₁ conducts on one half cycle, D₂ on the other. (b) The two secondary voltages are out of phase, so the load receives a pulse in every half cycle.">
      <svg viewBox="0 0 500 320" className="h-auto w-full" role="img" aria-label="Centre-tap full-wave rectifier circuit with input and output waveforms">
        <path d="M 70 50 Q 88 58 70 66 Q 88 74 70 82 Q 88 90 70 98 Q 88 106 70 114 Q 88 122 70 130" fill="none" stroke={STRUCT} strokeWidth="1.8" />
        <path d="M 112 50 Q 94 58 112 66 Q 94 74 112 82 Q 94 90 112 98 Q 94 106 112 114 Q 94 122 112 130" fill="none" stroke={STRUCT} strokeWidth="1.8" />
        <line x1={40} y1={50} x2={70} y2={50} stroke={STRUCT} strokeWidth="1.5" /><line x1={40} y1={130} x2={70} y2={130} stroke={STRUCT} strokeWidth="1.5" />
        <line x1={112} y1={50} x2={200} y2={50} stroke={STRUCT} strokeWidth="1.6" /><line x1={112} y1={130} x2={200} y2={130} stroke={STRUCT} strokeWidth="1.6" />
        <line x1={112} y1={90} x2={356} y2={90} stroke={STRUCT} strokeWidth="1.6" />
        <line x1={150} y1={130} x2={150} y2={210} stroke={STRUCT} strokeWidth="1.6" /><line x1={150} y1={210} x2={356} y2={210} stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="200,36 200,64 228,50" fill={STRUCT} /><line x1={228} y1={34} x2={228} y2={66} stroke={STRUCT} strokeWidth="2.4" /><line x1={228} y1={50} x2={300} y2={50} stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="200,116 200,144 228,130" fill={STRUCT} /><line x1={228} y1={114} x2={228} y2={146} stroke={STRUCT} strokeWidth="2.4" /><line x1={228} y1={130} x2={300} y2={130} stroke={STRUCT} strokeWidth="1.6" />
        <line x1={300} y1={50} x2={300} y2={130} stroke={STRUCT} strokeWidth="1.6" /><rect x={332} y={70} width={22} height={40} fill="none" stroke={STRUCT} strokeWidth="1.6" />
        <line x1={343} y1={50} x2={343} y2={70} stroke={STRUCT} strokeWidth="1.6" /><line x1={343} y1={110} x2={343} y2={210} stroke={STRUCT} strokeWidth="1.6" /><Lbl x={366} y={94} anchor="start" size={9}>R_L</Lbl>
        <Lbl x={150} y={44} size={9}>A</Lbl><Lbl x={150} y={124} size={9}>B</Lbl><Lbl x={136} y={224} size={9}>centre tap</Lbl><Lbl x={252} y={44} size={9}>D₁</Lbl><Lbl x={252} y={124} size={9}>D₂</Lbl>
        <line x1={40} y1={272} x2={180} y2={272} stroke={MUTED} strokeWidth="1" /><path d={sinePath(40, 272, 140, 18, 2)} fill="none" stroke={ACCENT} strokeWidth="1.6" /><Lbl x={110} y={306} size={9}>at A</Lbl>
        <line x1={196} y1={272} x2={336} y2={272} stroke={MUTED} strokeWidth="1" /><path d={sinePath(196, 272, 140, 18, 2, Math.PI)} fill="none" stroke={AMBER} strokeWidth="1.6" /><Lbl x={266} y={306} size={9}>at B</Lbl>
        <line x1={352} y1={272} x2={492} y2={272} stroke={MUTED} strokeWidth="1" /><path d={halfWavePath(352, 272, 140, 18, 4)} fill="none" stroke={ELECTRON} strokeWidth="1.6" /><Lbl x={422} y={306} size={9}>output</Lbl>
      </svg>
    </Figure>
  );
}

function FilterDiagram() {
  return (
    <Figure n="14.20" caption="A capacitor across the load charges to the peak of each rectified pulse and discharges slowly through R_L, so the output stays close to the peak. The fall is set by the time constant C·R_L.">
      <svg viewBox="0 0 470 200" className="h-auto w-full" role="img" aria-label="Capacitor filter smoothing the rectified output">
        <line x1={40} y1={150} x2={440} y2={150} stroke={MUTED} strokeWidth="1" />
        <path d={halfWavePath(40, 150, 400, 70, 6)} fill="none" stroke={MUTED} strokeWidth="1.2" strokeDasharray="4 3" />
        <path d={ripplePath(40, 150, 400, 70, 6)} fill="none" stroke={ELECTRON} strokeWidth="2" />
        <Lbl x={240} y={182} size={9}>time</Lbl><Lbl x={44} y={32} anchor="start" size={9}>voltage across R_L</Lbl>
        <Lbl x={390} y={62} anchor="end" color={MUTED} size={9}>rectified pulses</Lbl><Lbl x={262} y={96} anchor="start" color={ELECTRON} size={9}>with capacitor filter</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */

export default function SemiconductorElectronicsChapter() {
  return (
    <>
      <h2 id="h-14-1">14.1 Introduction</h2>
      <Callout type="important" title="Electronics — the starting point">
        Devices in which a controlled flow of electrons can be obtained are the basic building blocks of all the electronic circuits.
      </Callout>
      <p>
        Before the discovery of the transistor in 1948, such devices were mostly <strong>vacuum tubes</strong>, also called
        <strong> valves</strong>.
      </p>
      <ul>
        <li>A vacuum diode has two electrodes — anode (often called the plate) and cathode; a triode has three (cathode, plate, grid); tetrodes and pentodes carry four and five.</li>
        <li>In a vacuum tube, electrons are supplied by a heated cathode.</li>
        <li>The controlled flow of these electrons in vacuum is obtained by varying the voltage between the electrodes.</li>
        <li>Vacuum is required in the inter-electrode space; otherwise the moving electrons lose energy in collisions with air molecules.</li>
        <li>Electrons can flow only from the cathode to the anode — one direction only; hence the name valve.</li>
      </ul>
      <Comparison
        columns={[
          {
            title: "Vacuum tube (valve)",
            children: (
              <ul>
                <li>Bulky, consumes high power</li>
                <li>Operates at high voltages (~100 V)</li>
                <li>Limited life, low reliability</li>
                <li>Needs a heated cathode and an evacuated space</li>
              </ul>
            ),
          },
          {
            title: "Semiconductor device",
            children: (
              <ul>
                <li>Small in size, consumes low power</li>
                <li>Operates at low voltages</li>
                <li>Long life, high reliability</li>
                <li>Supply and flow of carriers are inside the solid itself</li>
              </ul>
            ),
          },
        ]}
      />
      <p>The seed of modern solid-state semiconductor electronics goes back to the 1930s, when it was realised that some solid-state semiconductors and their junctions offer the possibility of controlling the number and the direction of flow of charge carriers through them.</p>
      <ul>
        <li>Simple excitations like light, heat or a small applied voltage can change the number of mobile charges in a semiconductor.</li>
        <li>No external heating and no large evacuated space are required.</li>
        <li>CRT monitors, which work on the principle of vacuum tubes, are being replaced by LCD monitors with solid-state electronics.</li>
      </ul>
      <Callout type="didyouknow" title="The first semiconductor detector">
        Much before the full implications of semiconductor devices were formally understood, a naturally occurring crystal of <strong>galena</strong> (lead sulphide, PbS) with a metal point contact attached to it was used as a detector of radio waves.
      </Callout>
      <KeyPoint title="What this chapter covers">
        The basic concepts of semiconductor physics, the junction diode (a two-electrode device) and the bipolar junction transistor (a three-electrode device), with circuits illustrating their applications.
      </KeyPoint>

      <h2 id="h-14-2">14.2 Classification of Metals, Conductors and Semiconductors</h2>
      <p>Solids are classified in two independent ways: by their conductivity, and by their energy-band structure.</p>

      <h3 id="h-14-2-1">14.2.1 On the Basis of Conductivity</h3>
      <Callout type="important" title="Classification by conductivity">
        On the basis of the relative values of electrical conductivity (σ) or resistivity (ρ = 1/σ), the solids are broadly classified as: (i) <strong>Metals</strong> — they possess very low resistivity (or high conductivity); (ii) <strong>Semiconductors</strong> — they have resistivity or conductivity intermediate to metals and insulators; (iii) <strong>Insulators</strong> — they have high resistivity (or low conductivity).
      </Callout>
      <TableCard
        title="Indicative ranges of resistivity and conductivity"
        headers={["Solid", "Resistivity ρ (Ω m)", "Conductivity σ (S m⁻¹)"]}
        rows={[
          { cells: ["Metals", "10⁻² – 10⁻⁸", "10² – 10⁸"] },
          { cells: ["Semiconductors", "10⁻⁵ – 10⁶", "10⁵ – 10⁻⁶"] },
          { cells: ["Insulators", "10¹¹ – 10¹⁹", "10⁻¹¹ – 10⁻¹⁹"] },
        ]}
        caption="The values are indicative of magnitude only and could go outside the ranges. Relative values of resistivity are not the only criteria for distinguishing the three classes."
      />

      <h3 id="h-14-2-2">14.2.2 Types of Semiconductors</h3>
      <TableCard
        title="Families of semiconductors"
        headers={["Family", "Examples"]}
        rows={[
          { cells: ["Elemental", "Si, Ge"] },
          { cells: ["Inorganic compounds", "CdS, GaAs, CdSe, InP"] },
          { cells: ["Organic compounds", "anthracene, doped pthalocyanines"] },
          { cells: ["Organic polymers", "polypyrrole, polyaniline, polythiophene"] },
        ]}
        caption="Most currently available devices are based on elemental Si or Ge and on compound inorganic semiconductors."
      />
      <ul>
        <li>After 1990, devices using organic semiconductors and semiconducting polymers appeared, signalling the birth of <strong>polymer electronics</strong> and <strong>molecular electronics</strong>.</li>
        <li>This chapter restricts itself to inorganic semiconductors, particularly the elemental semiconductors Si and Ge.</li>
        <li>The concepts introduced here apply by and large to most compound semiconductors as well.</li>
      </ul>

      <h3 id="h-14-2-3">14.2.3 On the Basis of Energy Bands</h3>
      <p>According to the Bohr atomic model, in an isolated atom the energy of an electron is decided by the orbit in which it revolves. In a solid, atoms sit close together, so the outer orbits of electrons from neighbouring atoms come very close or even overlap.</p>
      <ul>
        <li>Inside the crystal each electron has a unique position, and no two electrons see exactly the same pattern of surrounding charges.</li>
        <li>Because of this, each electron has a different energy level.</li>
        <li>These levels, with continuous energy variation, form what are called <strong>energy bands</strong>.</li>
        <li>With no external energy, all the valence electrons reside in the valence band.</li>
        <li>Normally the conduction band is empty; when it overlaps the valence band, electrons can move freely into it.</li>
      </ul>
      <Callout type="important" title="Valence band and conduction band">
        The energy band which includes the energy levels of the valence electrons is called the <strong>valence band</strong>. The energy band above the valence band is called the <strong>conduction band</strong>.
      </Callout>
      <Callout type="important" title="Energy band gap">
        The gap between the top of the valence band and the bottom of the conduction band is called the <strong>energy band gap</strong> (energy gap E<sub>g</sub>). It may be large, small, or zero, depending upon the material.
      </Callout>
      <p>Consider a Si or Ge crystal of N atoms. For Si the outermost orbit is the third (n = 3), for Ge the fourth (n = 4), and both have four outer electrons.</p>
      <ul>
        <li>The total number of outer electrons in the crystal is therefore 4N.</li>
        <li>The maximum possible number of electrons in the outer orbit is 8, so 8N energy states are available.</li>
        <li>At the lattice spacing of Si and Ge, these 8N states split into two bands separated by an energy gap E<sub>g</sub>.</li>
        <li>The lower band, completely occupied by the 4N valence electrons at absolute zero, is the valence band.</li>
        <li>The band of 4N states above it, completely empty at absolute zero, is the conduction band.</li>
        <li>The lowest level of the conduction band is E<sub>C</sub>; the highest level of the valence band is E<sub>V</sub>; above E<sub>C</sub> and below E<sub>V</sub> lie many closely spaced levels.</li>
      </ul>
      <IntrinsicBandDiagram />
      <p>The size of the gap produces three possible band pictures.</p>
      <TableCard
        title="The three cases"
        headers={["Case", "Band picture", "Energy gap", "Conduction"]}
        rows={[
          { cells: ["Metal", "conduction band partly filled, or the two bands overlap", "≈ 0", "large number of free electrons — conductivity high"] },
          { cells: ["Insulator", "conduction band empty, valence band full", "E_g > 3 eV", "no electrons in the conduction band — no conduction"] },
          { cells: ["Semiconductor", "conduction band nearly empty, valence band full", "E_g < 3 eV", "a few electrons cross the gap at room temperature"] },
        ]}
        caption="Case I is the metal, Case II the insulator, Case III the semiconductor."
      />
      <BandClassificationDiagram />
      <ul>
        <li>In a metal, electrons move easily into the conduction band, and when the valence band is partly empty electrons within it can also move to higher levels — so the resistance is low.</li>
        <li>In an insulator the gap is so large that electrons cannot be excited across it by thermal excitation.</li>
        <li>In a semiconductor some electrons acquire enough thermal energy to cross the small gap, so its resistance is not as high as that of an insulator.</li>
      </ul>
      <Highlight>
        A valence electron that crosses the gap leaves a vacancy behind — so conduction becomes possible both by electrons in the conduction band and by vacancies in the valence band.
      </Highlight>

      <h2 id="h-14-3">14.3 Intrinsic Semiconductor</h2>
      <p>Ge and Si crystallise in what are called <strong>diamond-like structures</strong>, with each atom surrounded by four nearest neighbours.</p>
      <ul>
        <li>Every Si or Ge atom shares one of its four valence electrons with each of its four neighbours, and takes a share of one electron from each.</li>
        <li>These shared electron pairs form a <strong>covalent bond</strong>, also called a <strong>valence bond</strong>.</li>
        <li>The two shared electrons shuttle back and forth between the associated atoms, holding them together strongly.</li>
        <li>A pure semiconductor of this kind is called an <strong>intrinsic semiconductor</strong>.</li>
      </ul>
      <CovalentBondDiagram />
      <p>At low temperatures all bonds are intact. As the temperature increases, thermal energy becomes available and some electrons break away, becoming free electrons that contribute to conduction.</p>
      <Callout type="important" title="Hole">
        The neighbourhood from which the free electron (with charge −q) has come out leaves a vacancy with an effective charge (+q). This vacancy with the effective positive electronic charge is called a <strong>hole</strong>. The hole behaves as an apparent free particle with effective positive charge.
      </Callout>
      <p>In an intrinsic semiconductor the number of free electrons equals the number of holes:</p>
      <FormulaBlock latex={String.raw`n_e = n_h = n_i`} label="Intrinsic carrier concentration" tag="Eq. (14.1)" important />
      <p>where <Formula>{String.raw`n_i`}</Formula> is called the <strong>intrinsic carrier concentration</strong>.</p>
      <h3 id="h-14-3-1">How a hole moves</h3>
      <p>Semiconductors possess the unique property that, apart from electrons, the holes also move. Suppose there is a hole at site 1.</p>
      <Stepper
        steps={[
          { label: "An electron from a neighbouring bond jumps in", description: <>An electron from the covalent bond at site 2 jumps to the vacant site 1.</> },
          { label: "The hole appears to have moved", description: <>After the jump the hole is at site 2 and site 1 now has an electron. Apparently the hole has moved from site 1 to site 2.</> },
          { label: "The original free electron is not involved", description: <>The electron set free earlier moves independently as a <strong>conduction electron</strong> and gives an electron current <Formula>{String.raw`I_e`}</Formula> under an applied field.</> },
          { label: "Holes drift the other way", description: <>Under the action of an electric field the holes move towards the negative potential, giving the hole current <Formula>{String.raw`I_h`}</Formula>.</> },
        ]}
      />
      <p>Motion of a hole is only a convenient way of describing the actual motion of bound electrons whenever there is an empty bond anywhere in the crystal. The total current is the sum of the electron and hole currents:</p>
      <FormulaBlock latex={String.raw`I = I_e + I_h`} label="Total current in a semiconductor" tag="Eq. (14.2)" important />
      <Callout type="note" title="Generation and recombination">
        Apart from the generation of conduction electrons and holes, a simultaneous process of <strong>recombination</strong>{" "} occurs, in which electrons recombine with holes. At equilibrium the rate of generation equals the rate of recombination of charge carriers. Recombination occurs due to an electron colliding with a hole.
      </Callout>
      <KeyPoint title="Intrinsic semiconductor at a glance">
        Pure material; carriers created only by thermal excitation; equal numbers of electrons and holes; conductivity rises with temperature but is very low at room temperature.
      </KeyPoint>
      <Expandable title="Example 14.1 — Why is diamond an insulator?" variant="example">
        <ProblemSolution.Problem>
          <p>C, Si and Ge have the same lattice structure. Why is C an insulator while Si and Ge are intrinsic semiconductors?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The 4 bonding electrons of C, Si or Ge lie respectively in the second, third and fourth orbit.</p>
          <p>Hence the energy required to take an electron out of these atoms (the ionisation energy E<sub>g</sub>) is least for Ge, followed by Si, and highest for C.</p>
          <p><Highlight>The number of free electrons available for conduction is significant in Ge and Si but negligibly small in C</Highlight>, which makes diamond an insulator.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-14-4">14.4 Extrinsic Semiconductor</h2>
      <p>The conductivity of an intrinsic semiconductor depends on temperature, but at room temperature it is very low, so no important electronic devices can be built from it. Its conductivity must be improved by adding impurities.</p>
      <Callout type="important" title="Doping, dopants, extrinsic semiconductor">
        When a small amount, say a few parts per million (ppm), of a suitable impurity is added to the pure semiconductor, the conductivity increases manifold. Such materials are known as <strong>extrinsic semiconductors</strong> or{" "}
        <strong>impurity semiconductors</strong>. The deliberate addition of a desirable impurity is called{" "}
        <strong>doping</strong> and the impurity atoms are called <strong>dopants</strong>. Such a material is also called a doped semiconductor.
      </Callout>
      <ul>
        <li>The dopant must not distort the original pure semiconductor lattice.</li>
        <li>It occupies only a very few of the original semiconductor atom sites in the crystal.</li>
        <li>For this, the sizes of the dopant and semiconductor atoms should be nearly the same.</li>
        <li>Si and Ge belong to the fourth group, so the dopant is chosen from the neighbouring fifth or third group.</li>
        <li>Two types are used: <strong>pentavalent</strong> (As, Sb, P) and <strong>trivalent</strong> (In, B, Al).</li>
      </ul>

      <h3 id="h-14-4-1">14.4.1 n-type Semiconductor</h3>
      <p>Dope Si or Ge with a pentavalent element.</p>
      <ul>
        <li>When an atom of +5 valency occupies the position of a Si atom, four of its electrons bond with the four silicon neighbours.</li>
        <li>The fifth electron remains very weakly bound to its parent atom.</li>
        <li>The four bonding electrons screen the nucleus, so the ionisation energy needed to set the fifth electron free is very small.</li>
        <li>Even at room temperature that electron is free to move in the lattice.</li>
        <li>About 0.01 eV frees it in germanium and 0.05 eV in silicon — against about 0.72 eV (Ge) and 1.1 eV (Si) to jump the forbidden gap in the intrinsic material.</li>
        <li>The pentavalent dopant therefore donates one extra electron for conduction: it is a <strong>donor impurity</strong>.</li>
      </ul>
      <p>The number of electrons made available by dopant atoms depends strongly on the doping level and is independent of any increase in ambient temperature, whereas the intrinsic electrons (with an equal number of holes) increase only weakly with temperature.</p>
      <ul>
        <li>Total conduction electrons = electrons contributed by donors + those generated intrinsically.</li>
        <li>Total holes come only from the intrinsic source.</li>
        <li>The increased number of electrons raises the recombination rate, so the number of holes is reduced further.</li>
        <li>With proper doping, electrons far outnumber holes.</li>
      </ul>
      <Callout type="important" title="Majority and minority carriers — n-type">
        In an extrinsic semiconductor doped with pentavalent impurity, electrons become the <strong>majority carriers</strong>{" "} and holes the <strong>minority carriers</strong>. Such semiconductors are known as n-type semiconductors.
      </Callout>
      <FormulaBlock latex={String.raw`n_e \gg n_h`} label="n-type semiconductor" tag="Eq. (14.3)" important />

      <h3 id="h-14-4-2">14.4.2 p-type Semiconductor</h3>
      <p>Dope Si or Ge with a trivalent impurity such as Al, B or In.</p>
      <ul>
        <li>The dopant has one valence electron less, so it forms covalent bonds with only three neighbouring Si atoms.</li>
        <li>It has no electron to offer to the fourth Si atom, so that bond has a vacancy — a hole.</li>
        <li>An electron from a neighbouring atom may jump to fill the vacancy, leaving a hole at its own site; thus the hole is available for conduction.</li>
        <li>The trivalent foreign atom becomes effectively negatively charged when it shares the fourth electron, so it is a core of one negative charge along with its associated hole.</li>
        <li>One acceptor atom gives one hole.</li>
        <li>These holes are in addition to the intrinsically generated holes, while conduction electrons come only from intrinsic generation.</li>
        <li>Recombination reduces the number of intrinsically generated electrons from n<sub>i</sub> to n<sub>e</sub>.</li>
      </ul>
      <DopingDiagram />
      <Callout type="important" title="Majority and minority carriers — p-type">
        In a p-type material the holes are the <strong>majority carriers</strong> and the electrons are the{" "}
        <strong>minority carriers</strong>. The crystal maintains overall charge neutrality, as the charge of the additional charge carriers is just equal and opposite to that of the ionised cores in the lattice.
      </Callout>
      <FormulaBlock latex={String.raw`n_h \gg n_e`} label="p-type semiconductor" tag="Eq. (14.4)" important />
      <Callout type="note" title="Why doping reduces the minority carriers">
        Because majority carriers are abundant, the minority carriers produced thermally have more chance of meeting a majority carrier and being destroyed. The dopant, by adding a large number of carriers of one type, indirectly reduces the intrinsic concentration of the other.
      </Callout>

      <h3 id="h-14-4-3">14.4.3 Energy Bands of Extrinsic Semiconductors</h3>
      <ExtrinsicBandDiagram />
      <ul>
        <li>Doping adds donor levels E<sub>D</sub> and acceptor levels E<sub>A</sub> inside the otherwise forbidden gap.</li>
        <li>In n-type Si, E<sub>D</sub> lies slightly below E<sub>C</sub>; electrons from this level reach the conduction band with a very small supply of energy.</li>
        <li>At room temperature most donor atoms are ionised, while very few (~10¹²) atoms of Si get ionised.</li>
        <li>In p-type material, E<sub>A</sub> lies slightly above E<sub>V</sub>; a valence electron can jump up to E<sub>A</sub> and ionise the acceptor negatively.</li>
        <li>Equivalently, the hole from level E<sub>A</sub> sinks down into the valence band — electrons rise up and holes fall down when they gain external energy.</li>
        <li>At room temperature the density of holes in the valence band is predominantly due to the impurity.</li>
      </ul>
      <p>The electron and hole concentration in a semiconductor in thermal equilibrium is given by the <strong>mass-action law</strong>:</p>
      <FormulaBlock latex={String.raw`n_e\,n_h = n_i^{2}`} label="Thermal equilibrium — mass action" tag="Eq. (14.5)" important />
      <TableCard
        title="Energy gaps of the group IV elements"
        headers={["Element", "Energy gap E_g (eV)", "Room-temperature behaviour"]}
        rows={[
          { cells: ["C (diamond)", "5.4", "insulator"] },
          { cells: ["Si", "1.1", "intrinsic semiconductor"] },
          { cells: ["Ge", "0.72", "intrinsic semiconductor"] },
          { cells: ["Sn", "0", "metal"] },
        ]}
        caption="The difference in resistivity of C, Si and Ge follows from the gap between their conduction and valence bands; Sn is a group IV element that conducts like a metal because its gap is zero."
      />
      <MistakeCard
        mistake="Thinking that n-type silicon is negatively charged and p-type is positively charged."
        correction="Both are electrically neutral: the extra carrier charge is exactly balanced by the charge of the ionised dopant cores fixed in the lattice."
        example="In n-type Si each donor core carries +1e and its donated electron −1e, so the net charge is zero."
      />
      <Expandable title="Example 14.2 — Carrier concentrations in doped silicon" variant="example">
        <ProblemSolution.Problem>
          <p>Suppose a pure Si crystal has 5 × 10²⁸ atoms m⁻³. It is doped by 1 ppm concentration of pentavalent As. Calculate the number of electrons and holes. Given that n<sub>i</sub> = 1.5 × 10¹⁶ m⁻³.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Thermally generated electrons (<Formula>{String.raw`n_i \sim 10^{16}\ \text{m}^{-3}`}</Formula>) are negligibly small compared with those produced by doping, so the electron concentration is essentially the donor concentration:</p>
          <FormulaBlock latex={String.raw`N_D = 5\times10^{28}\times10^{-6} = 5\times10^{22}\ \text{m}^{-3}`} />
          <FormulaBlock latex={String.raw`n_e \approx N_D = 5\times10^{22}\ \text{m}^{-3}`} />
          <p>Since the product of the concentrations is fixed at n<sub>i</sub>²:</p>
          <FormulaBlock latex={String.raw`n_h = \frac{n_i^{2}}{n_e} = \frac{(1.5\times10^{16})^{2}}{5\times10^{22}} = \frac{2.25\times10^{32}}{5\times10^{22}}`} />
          <p><Highlight>n_h ≈ 4.5 × 10⁹ m⁻³</Highlight> — about thirteen orders of magnitude below the electron concentration, as expected for n-type material.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-14-5">14.5 p-n Junction</h2>
      <Callout type="important" title="p-n junction">
        A <strong>p-n junction</strong> is the basic building block of many semiconductor devices like diodes, transistor, etc. A clear understanding of the junction behaviour is important to analyse the working of other semiconductor devices.
      </Callout>
      <p>We now see how a junction is formed and how it behaves under the influence of an external applied voltage, also called <strong>bias</strong>.</p>

      <h3 id="h-14-5-1">14.5.1 p-n Junction Formation</h3>
      <ul>
        <li>Start with a thin p-type silicon wafer.</li>
        <li>By adding precisely a small quantity of pentavalent impurity, part of the wafer is converted into n-Si.</li>
        <li>The wafer then contains a p-region, an n-region and a metallurgical junction between them.</li>
        <li>Two important processes occur during formation: <strong>diffusion</strong> and <strong>drift</strong>.</li>
      </ul>
      <Stepper
        steps={[
          {
            label: "Concentration gradient drives diffusion",
            description: <>In the n-region electrons outnumber holes, and in the p-region holes outnumber electrons. So holes diffuse p → n and electrons diffuse n → p, giving a <strong>diffusion current</strong>.</>,
          },
          {
            label: "Immobile ions build up space charge",
            description: <>An electron leaving the n-side leaves an ionised donor (positive, immobile); a hole leaving the p-side leaves an ionised acceptor (negative, immobile). A positive space-charge layer grows on the n-side and a negative one on the p-side.</>,
          },
          {
            label: "The depletion region forms",
            description: <>These two space-charge layers together are the <strong>depletion region</strong>, so called because the carriers that moved across have depleted it of free charges. Its thickness is about one-tenth of a micrometre.</>,
          },
          {
            label: "The field starts a drift current",
            description: <>The field runs from the positive charge (n-side) to the negative charge (p-side). An electron on the p-side is driven to the n-side and a hole on the n-side to the p-side — a <strong>drift current</strong>, opposite to the diffusion current.</>,
          },
          {
            label: "Equilibrium",
            description: <>Initially diffusion is large and drift small. As the space-charge regions widen, the field and the drift current grow, until diffusion equals drift. The junction is formed and there is no net current.</>,
          },
        ]}
      />
      <PnJunctionDiagram />
      <Callout type="important" title="Barrier potential">
        The loss of electrons from the n-region and the gain of electrons by the p-region cause a difference of potential across the junction. Its polarity is such as to oppose further flow of carriers, so the n material is positive relative to the p material. Since this potential tends to prevent the movement of electrons from the n-region into the p-region, it is often called a <strong>barrier potential</strong>.
      </Callout>
      <Expandable title="Example 14.3 — Joining two slabs by hand" variant="example">
        <ProblemSolution.Problem>
          <p>Can we take one slab of p-type semiconductor and physically join it to another n-type semiconductor to get a p-n junction?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>No. Any slab, howsoever flat, will have roughness much larger than the inter-atomic crystal spacing (~2 to 3 Å), so continuous contact at the atomic level will not be possible.</p>
          <p><Highlight>The junction will behave as a discontinuity for the flowing charge carriers</Highlight> — a real junction must be grown inside a single crystal.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-14-6">14.6 Semiconductor Diode</h2>
      <Callout type="important" title="Semiconductor diode">
        A semiconductor diode is basically a p-n junction with metallic contacts provided at the ends for the application of an external voltage. It is a two-terminal device.
      </Callout>
      <DiodeSymbolDiagram />
      <ul>
        <li>The direction of the arrow in the symbol indicates the conventional direction of current when the diode is under forward bias.</li>
        <li>The equilibrium barrier potential can be altered by applying an external voltage V across the diode.</li>
        <li>With no bias, the junction sits at the equilibrium of Fig. 14.11.</li>
      </ul>

      <h3 id="h-14-6-1">14.6.1 p-n Junction Diode under Forward Bias</h3>
      <p>When an external voltage V is applied such that the p-side is connected to the positive terminal and the n-side to the negative terminal, the diode is <strong>forward biased</strong>.</p>
      <ul>
        <li>The applied voltage mostly drops across the depletion region; the drop across the p-side and n-side is negligible.</li>
        <li>This is because the depletion region, where there are no charges, has a much higher resistance than the p- and n-sides.</li>
        <li>The direction of the applied voltage is opposite to the built-in potential V₀, so the depletion layer width decreases and the barrier height is reduced.</li>
      </ul>
      <FormulaBlock latex={String.raw`\text{effective barrier} = V_0 - V`} label="Forward bias" tag="Fig. 14.13" important />
      <BiasBarrierDiagram />
      <ul>
        <li>For a small applied voltage the barrier is reduced only slightly, and only carriers in the uppermost energy levels cross — the current is small.</li>
        <li>Increase the voltage significantly and more carriers have the required energy, so the current increases.</li>
        <li>Electrons from the n-side cross to the p-side (where they are minority carriers) and holes from the p-side cross to the n-side: <strong>minority carrier injection</strong>.</li>
        <li>At the junction boundary the minority carrier concentration rises well above the value far from the junction.</li>
        <li>The resulting concentration gradient makes the injected electrons diffuse along the p-side and the injected holes along the n-side, giving the current.</li>
        <li>The total forward current is the sum of the hole diffusion current and the conventional current due to electron diffusion; its magnitude is usually in mA.</li>
      </ul>

      <h3 id="h-14-6-2">14.6.2 p-n Junction Diode under Reverse Bias</h3>
      <p>When the n-side is made positive and the p-side negative, the diode is <strong>reverse biased</strong>.</p>
      <ul>
        <li>The applied voltage again drops mostly across the depletion region.</li>
        <li>Its direction is now the same as that of the barrier potential, so the barrier height increases and the depletion region widens; the effective barrier is V₀ + V.</li>
        <li>This suppresses the flow of electrons from n → p and holes from p → n, so the diffusion current falls enormously.</li>
        <li>Electrons on the p-side or holes on the n-side that come close to the junction in their random motion are swept into their majority zone; this drift gives the reverse current.</li>
        <li>The drift current is of the order of a few µA — low, because it is due to minority carriers.</li>
        <li>Drift current is also present under forward bias, but there it is negligible compared with the injected-carrier current (mA).</li>
      </ul>
      <Callout type="important" title="Why the reverse current is almost constant">
        The diode reverse current is not very much dependent on the applied voltage. Even a small voltage is sufficient to sweep the minority carriers across the junction; the current is not limited by the magnitude of the applied voltage but by the concentration of minority carriers on either side of the junction.
      </Callout>
      <ul>
        <li>The reverse current is essentially voltage independent up to a critical reverse bias, the <strong>breakdown voltage</strong> V<sub>br</sub>.</li>
        <li>At V = V<sub>br</sub> the reverse current increases sharply; even a slight increase in bias causes a large change in current.</li>
        <li>If the reverse current is not limited by the external circuit below the rated value, the junction is destroyed by overheating — as happens in forward bias if the forward current exceeds the rated value.</li>
      </ul>

      <h3 id="h-14-6-3">14.6.3 V-I Characteristics of a p-n Junction Diode</h3>
      <ul>
        <li>The battery is connected to the diode through a potentiometer (rheostat) so the applied voltage can be varied.</li>
        <li>For each voltage the current is noted and a graph of V against I is drawn.</li>
        <li>In forward bias a milliammeter is used, since the expected current is large; in reverse bias a microammeter is used.</li>
        <li>In forward bias the current first increases very slowly, almost negligibly, until the voltage crosses a certain value; after that it increases significantly (exponentially) even for a very small increase of voltage.</li>
        <li>That voltage is the <strong>threshold voltage</strong> or <strong>cut-in voltage</strong>.</li>
        <li>In reverse bias the current is very small (~µA) and almost constant; this is the <strong>reverse saturation current</strong>.</li>
        <li>At very high reverse bias (breakdown) the current suddenly increases; general-purpose diodes are not used beyond the saturation region.</li>
      </ul>
      <DiodeIVCurve />
      <TableCard
        title="Threshold voltages"
        headers={["Material", "Cut-in voltage", "Remark"]}
        rows={[
          { cells: ["Germanium", "≈ 0.2 V", "smaller knee, larger reverse leakage"] },
          { cells: ["Silicon", "≈ 0.7 V", "the value used in most devices"] },
        ]}
        caption="Below the threshold the forward current is negligible; above it the current rises almost exponentially."
      />
      <p>The junction thus allows the flow of current mainly in one direction: forward-bias resistance is low compared with reverse-bias resistance. This property is used for rectification of ac voltages.</p>
      <FormulaBlock latex={String.raw`r_d = \frac{\Delta V}{\Delta I}`} label="Dynamic resistance" tag="Eq. (14.6)" important />
      <MistakeCard
        mistake="Saying the reverse saturation current grows steadily as the reverse voltage is increased."
        correction="It is essentially flat (of order µA) up to the breakdown voltage, because it is limited by the minority-carrier concentration, not by the applied voltage."
        example="At V = −10 V a silicon diode still carries only about −1 µA; at −V_br the current jumps sharply."
      />
      <MistakeCard
        mistake="Connecting the p-side to the negative terminal and calling it forward bias."
        correction="Forward bias means p to the positive terminal and n to the negative terminal; the barrier is then lowered to V₀ − V."
        example="Reversing the battery widens the depletion layer and leaves only the tiny reverse saturation current."
      />
      <Expandable title="Example 14.4 — Resistance of a diode from its characteristic" variant="example">
        <ProblemSolution.Problem>
          <p>The V-I characteristic of a silicon diode is shown in Fig. 14.17. Calculate the resistance of the diode at (a) I<sub>D</sub> = 15 mA and (b) V<sub>D</sub> = −10 V.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Treat the characteristic as a straight line between I = 10 mA and I = 20 mA, and use Ohm&apos;s law on the small changes.</p>
          <p>(a) From the curve: at I = 20 mA, V = 0.8 V; at I = 10 mA, V = 0.7 V.</p>
          <FormulaBlock latex={String.raw`r_{fb} = \frac{\Delta V}{\Delta I} = \frac{0.1\ \text{V}}{10\ \text{mA}} = 10\ \Omega`} />
          <p>(b) From the curve at V = −10 V, I = −1 µA. Therefore</p>
          <FormulaBlock latex={String.raw`r_{rb} = \frac{10\ \text{V}}{1\ \mu\text{A}} = 1.0\times10^{7}\ \Omega`} />
          <p><Highlight>10 Ω in forward bias against 10⁷ Ω in reverse bias</Highlight> — six orders of magnitude, which is exactly why a diode can rectify.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-14-7">14.7 Application of Junction Diode as a Rectifier</h2>
      <Callout type="important" title="Rectifier">
        A junction diode allows current to pass only when it is forward biased. So if an alternating voltage is applied across a diode, the current flows only in that part of the cycle when the diode is forward biased. This property is used to rectify alternating voltages, and the circuit used for this purpose is called a <strong>rectifier</strong>.
      </Callout>

      <h3 id="h-14-7-1">14.7.1 Half-Wave Rectifier</h3>
      <p>
        If an alternating voltage is applied across a diode in series with a load, a pulsating voltage appears across the load only during the half cycles in which the diode is forward biased. Such a circuit is a{" "}
        <strong>half-wave rectifier</strong>.
      </p>
      <HalfWaveRectifierDiagram />
      <Stepper
        steps={[
          { label: "The transformer supplies the ac", description: <>The secondary of the transformer supplies the desired ac voltage across terminals A and B.</> },
          { label: "Positive half cycle — A positive", description: <>The diode is forward biased and conducts, so current flows through the load resistor R_L and an output voltage appears.</> },
          { label: "Negative half cycle — A negative", description: <>The diode is reverse biased and does not conduct. The reverse saturation current is negligible and can be taken as zero for practical purposes.</> },
          { label: "Next positive half cycle", description: <>Output appears again. The output, though still varying, is restricted to one direction and is said to be <strong>rectified</strong>.</> },
        ]}
      />
      <Callout type="warning" title="Protecting the diode">
        The reverse breakdown voltage of the diode must be sufficiently higher than the peak ac voltage at the secondary of the transformer, otherwise the diode breaks down during the negative half cycle.
      </Callout>

      <h3 id="h-14-7-2">14.7.2 Full-Wave Rectifier</h3>
      <p>A circuit using two diodes gives an output rectified voltage corresponding to both the positive and the negative half of the ac cycle, and is therefore called a <strong>full-wave rectifier</strong>.</p>
      <ul>
        <li>The p-sides of the two diodes are connected to the two ends of the secondary of the transformer.</li>
        <li>The n-sides are connected together, and the output is taken between this common point and the midpoint of the secondary.</li>
        <li>So the secondary needs a centre tapping — a <strong>centre-tap transformer</strong>.</li>
        <li>The voltage rectified by each diode is only half the total secondary voltage.</li>
        <li>Each diode rectifies for half the cycle, but the two do so for alternate cycles.</li>
      </ul>
      <FullWaveRectifierDiagram />
      <ul>
        <li>Suppose the input at A with respect to the centre tap is positive; at that instant the voltage at B, being out of phase, is negative.</li>
        <li>D₁ is forward biased and conducts, while D₂ is reverse biased and does not — output appears across R_L during this half cycle.</li>
        <li>When the voltage at A becomes negative with respect to the centre tap, B becomes positive.</li>
        <li>Now D₁ does not conduct but D₂ does, giving output during the negative half cycle of the input ac.</li>
        <li>Output is thus obtained during both halves — a more efficient circuit than the half-wave rectifier.</li>
      </ul>
      <Callout type="note" title="Bridge rectifier">
        There is another full-wave rectifier circuit that does not need a centre-tap transformer but needs four diodes.
      </Callout>
      <Comparison
        columns={[
          {
            title: "Half-wave rectifier",
            children: (
              <ul>
                <li>One diode</li>
                <li>Output only in alternate half cycles</li>
                <li>Output frequency equals the input frequency</li>
                <li>Simple, but poor efficiency and a strongly pulsating output</li>
              </ul>
            ),
          },
          {
            title: "Full-wave rectifier",
            children: (
              <ul>
                <li>Two diodes (four in the bridge version)</li>
                <li>Output in every half cycle</li>
                <li>Output frequency is twice the input frequency</li>
                <li>More efficient; needs a centre-tap transformer</li>
              </ul>
            ),
          },
        ]}
      />

      <h3 id="h-14-7-3">14.7.3 Filters</h3>
      <p>The rectified voltage is in the form of pulses shaped like half sinusoids. It is unidirectional but not steady, so a filter is added to obtain a steady dc output.</p>
      <FilterDiagram />
      <ul>
        <li>A capacitor connected across the output terminals (parallel to R_L) is the commonest filter; an inductor in series with R_L serves the same purpose.</li>
        <li>When the voltage across the capacitor is rising, it gets charged.</li>
        <li>If there is no external load it remains charged to the peak voltage of the rectified output.</li>
        <li>With a load it discharges through the load and the voltage across it begins to fall.</li>
        <li>In the next half cycle of the rectified output it is charged again to the peak value.</li>
        <li>The rate of fall depends inversely on the product of capacitance C and the effective resistance R_L — the <strong>time constant</strong>.</li>
        <li>To make the time constant large, C must be large; capacitor-input filters therefore use large capacitors.</li>
        <li>The output obtained is nearer to the peak voltage of the rectified voltage, which is why this filter is most widely used in power supplies.</li>
      </ul>
      <KeyPoint title="Rectifier output frequencies">
        A half-wave rectifier gives one pulse per input cycle, so its output frequency equals the input frequency. A full-wave rectifier gives two pulses per cycle, so its output frequency is twice the input frequency.
      </KeyPoint>
      <MistakeCard
        mistake="Saying a full-wave rectifier doubles the output voltage of each diode."
        correction="It doubles the number of pulses, not the voltage. Each diode handles only half the total secondary voltage."
        example="With a 50 Hz input, the half-wave output is 50 Hz and the full-wave output is 100 Hz."
      />

      <h2 id="h-14-equations">Key Equations — Revision Board</h2>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Intrinsic carrier concentration</p>
          <FormulaBlock latex={String.raw`n_e = n_h = n_i`} important tag="(14.1)" />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Total current</p>
          <FormulaBlock latex={String.raw`I = I_e + I_h`} important tag="(14.2)" />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Doped semiconductors</p>
          <FormulaBlock latex={String.raw`n_e \gg n_h\ \text{(n-type)},\qquad n_h \gg n_e\ \text{(p-type)}`} important tag="(14.3), (14.4)" />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Mass-action law</p>
          <FormulaBlock latex={String.raw`n_e\,n_h = n_i^{2}`} important tag="(14.5)" />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Dynamic resistance</p>
          <FormulaBlock latex={String.raw`r_d = \frac{\Delta V}{\Delta I}`} important tag="(14.6)" />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Barrier under bias</p>
          <FormulaBlock latex={String.raw`V_0 - V\ \text{(forward)},\qquad V_0 + V\ \text{(reverse)}`} />
        </FormulaCard>
      </div>

      <h2 id="h-14-exercises">Back-of-Chapter Exercises</h2>
      <p className="text-sm text-muted-foreground">
        All six NCERT exercises with the correct option and the reasoning behind it. Try each one before opening the panel.
      </p>
      <Expandable title="Exercises 14.1 – 14.6 — questions and answer key" variant="exercise">
        <ExerciseQa
          questions={[
            "In an n-type silicon, which of the following statement is true: (a) Electrons are majority carriers and trivalent atoms are the dopants. (b) Electrons are minority carriers and pentavalent atoms are the dopants. (c) Holes are minority carriers and pentavalent atoms are the dopants. (d) Holes are majority carriers and trivalent atoms are the dopants.", "Which of the statements given in Exercise 14.1 is true for p-type semiconductors?", "Carbon, silicon and germanium have four valence electrons each, with valence and conduction bands separated by gaps (E_g)_C, (E_g)_Si and (E_g)_Ge. Which statement is true? (a) (E_g)_Si < (E_g)_Ge < (E_g)_C (b) (E_g)_C < (E_g)_Ge > (E_g)_Si (c) (E_g)_C > (E_g)_Si > (E_g)_Ge (d) (E_g)_C = (E_g)_Si = (E_g)_Ge", "In an unbiased p-n junction, holes diffuse from the p-region to n-region because (a) free electrons in the n-region attract them. (b) they move across the junction by the potential difference. (c) hole concentration in p-region is more as compared to n-region. (d) All the above.", "When a forward bias is applied to a p-n junction, it (a) raises the potential barrier. (b) reduces the majority carrier current to zero. (c) lowers the potential barrier. (d) None of the above.", "In half-wave rectification, what is the output frequency if the input frequency is 50 Hz? What is the output frequency of a full-wave rectifier for the same input frequency?",
          ]}
          answers={[
            "(c) Holes are minority carriers and pentavalent atoms are the dopants. A pentavalent (donor) impurity supplies the extra electrons that become the majority carriers, leaving holes as the minority carriers.", "(d) Holes are majority carriers and trivalent atoms are the dopants. A trivalent (acceptor) atom creates one hole each, so holes outnumber electrons.", "(c) (E_g)_C > (E_g)_Si > (E_g)_Ge. The gaps are 5.4 eV, 1.1 eV and 0.72 eV — the smaller the gap, the easier the excitation and the larger the conductivity.", "(c) hole concentration in p-region is more as compared to n-region. Diffusion is driven by the concentration gradient across the junction, not by any applied field.", "(c) lowers the potential barrier. The applied voltage opposes the built-in potential, so the effective barrier becomes V₀ − V and the depletion layer narrows.", "Half-wave: one pulse per input cycle, so f_out = 50 Hz. Full-wave: two pulses per cycle, so f_out = 2 × 50 = 100 Hz.",
          ]}
        />
      </Expandable>
    </>
  );
}
