import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { TableCard } from "@/components/content/data/TableCard";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { EquationLadder } from "@/components/content/process/EquationLadder";

/* Local diagram primitives — one arrow helper and one figure shell. */

const VIOLET = "#8b5cf6";
const SKY = "#0ea5e9";
const ROSE = "#e11d48";
const AMBER = "#f59e0b";
const EMERALD = "#10b981";
const MUTED = "var(--muted-foreground)";
const INK = "var(--foreground)";

interface ArrowProps { x1: number; y1: number; x2: number; y2: number; color: string; dashed?: boolean; width?: number }

function Arrow({ x1, y1, x2, y2, color, dashed = false, width = 2 }: ArrowProps) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const s = 9;
  const head = `${x2},${y2} ${x2 - s * Math.cos(a - 0.45)},${y2 - s * Math.sin(a - 0.45)} ${x2 - s * Math.cos(a + 0.45)},${y2 - s * Math.sin(a + 0.45)}`;
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2 - 5 * Math.cos(a)} y2={y2 - 5 * Math.sin(a)} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dashed ? "5 4" : undefined} />
      <polygon points={head} fill={color} />
    </g>
  );
}

function Figure({ title, label, viewBox, caption, children }: { title: string; label: string; viewBox: string; caption?: ReactNode; children: ReactNode }) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5"><span className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">{title}</span></div>
      <div className="overflow-x-auto px-3 py-3"><svg viewBox={viewBox} className="h-auto w-full" role="img" aria-label={label}>{children}</svg></div>
      {caption && <p className="border-t border-border/40 px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">{caption}</p>}
    </div>
  );
}

function OutOfPage({ cx, cy, r = 12 }: { cx: number; cy: number; r?: number }) {
  return <g><circle cx={cx} cy={cy} r={r} fill="none" stroke={ROSE} strokeWidth="2" /><circle cx={cx} cy={cy} r={r * 0.32} fill={ROSE} /></g>;
}

function IntoPage({ cx, cy, r = 12 }: { cx: number; cy: number; r?: number }) {
  const d = r * 0.72;
  return <g><circle cx={cx} cy={cy} r={r} fill="none" stroke={ROSE} strokeWidth="2" /><line x1={cx - d} y1={cy - d} x2={cx + d} y2={cy + d} stroke={ROSE} strokeWidth="2" /><line x1={cx + d} y1={cy - d} x2={cx - d} y2={cy + d} stroke={ROSE} strokeWidth="2" /></g>;
}

/* 4.2 — direction of the magnetic force */
function ForceOnChargeDiagram() {
  return (
    <Figure title="Fig. 4.2 — direction of qv × B" label="Positive charge: force out of the page. Negative charge: force into the page." viewBox="0 0 560 200" caption="Velocity and field lie in the page, so the force comes straight out of the page for a positive charge and straight into it for a negative charge. The cross product is evaluated with the screw rule.">
      <line x1="280" y1="30" x2="280" y2="180" stroke="var(--border)" strokeDasharray="4 5" />
      <text x="30" y="30" fontSize="12" fontWeight="700" fill={INK}>(a) positive charge</text>
      <Arrow x1={46} y1={110} x2={150} y2={110} color={VIOLET} width={2.4} />
      <text x="156" y="114" fontSize="13" fontWeight="700" fill={VIOLET}>v</text>
      <Arrow x1={100} y1={166} x2={100} y2={64} color={SKY} width={2.4} />
      <text x="106" y="60" fontSize="13" fontWeight="700" fill={SKY}>B</text>
      <OutOfPage cx={214} cy={110} />
      <text x="214" y="86" fontSize="13" fontWeight="700" textAnchor="middle" fill={ROSE}>F</text>
      <text x="214" y="146" fontSize="10" textAnchor="middle" fill={MUTED}>out of page</text>
      <text x="310" y="30" fontSize="12" fontWeight="700" fill={INK}>(b) negative charge</text>
      <Arrow x1={326} y1={110} x2={430} y2={110} color={VIOLET} width={2.4} />
      <text x="436" y="114" fontSize="13" fontWeight="700" fill={VIOLET}>v</text>
      <Arrow x1={380} y1={166} x2={380} y2={64} color={SKY} width={2.4} />
      <text x="386" y="60" fontSize="13" fontWeight="700" fill={SKY}>B</text>
      <IntoPage cx={494} cy={110} />
      <text x="494" y="86" fontSize="13" fontWeight="700" textAnchor="middle" fill={ROSE}>F</text>
      <text x="494" y="146" fontSize="10" textAnchor="middle" fill={MUTED}>into page</text>
    </Figure>
  );
}

/* 4.3 — circular and helical motion */
function MotionInFieldDiagram() {
  const helix = Array.from({ length: 145 }, (_, i) => {
    const t = (i / 144) * Math.PI * 8;
    return `${(410 + 42 * Math.sin(t)).toFixed(1)},${(208 - (t / (Math.PI * 8)) * 152).toFixed(1)}`;
  }).join(" ");
  return (
    <Figure title="Figs. 4.5 and 4.6 — circle and helix" label="Left: velocity perpendicular to the field gives a circle. Right: a velocity component along the field turns the circle into a helix of pitch p." viewBox="0 0 560 250" caption="The component of velocity perpendicular to B drives the circle; the parallel component is untouched by the field and carries the particle along the axis, one full turn per pitch p.">
      <text x="30" y="26" fontSize="12" fontWeight="700" fill={INK}>(a) v ⟂ B — a circle</text>
      <circle cx="140" cy="128" r="70" fill="none" stroke={VIOLET} strokeWidth="2.2" strokeDasharray="6 5" />
      <circle cx="105" cy="92" r="5" fill="none" stroke={SKY} strokeWidth="1.6" /><circle cx="105" cy="92" r="1.6" fill={SKY} />
      <circle cx="182" cy="112" r="5" fill="none" stroke={SKY} strokeWidth="1.6" /><circle cx="182" cy="112" r="1.6" fill={SKY} />
      <circle cx="124" cy="176" r="5" fill="none" stroke={SKY} strokeWidth="1.6" /><circle cx="124" cy="176" r="1.6" fill={SKY} />
      <text x="34" y="228" fontSize="10" fill={MUTED}>⊙ B out of the page</text>
      <line x1="140" y1="128" x2="140" y2="58" stroke={MUTED} strokeWidth="1.3" strokeDasharray="4 4" />
      <text x="146" y="96" fontSize="12" fontWeight="700" fill={MUTED}>r</text>
      <circle cx="140" cy="58" r="5" fill={VIOLET} />
      <Arrow x1={140} y1={58} x2={206} y2={58} color={VIOLET} width={2.2} />
      <text x="212" y="62" fontSize="13" fontWeight="700" fill={VIOLET}>v</text>
      <text x="296" y="26" fontSize="12" fontWeight="700" fill={INK}>(b) v has a component along B — a helix</text>
      <Arrow x1={410} y1={232} x2={410} y2={48} color={SKY} width={2.2} />
      <text x="418" y="46" fontSize="13" fontWeight="700" fill={SKY}>B</text>
      <polyline points={helix} fill="none" stroke={VIOLET} strokeWidth="2.2" strokeLinecap="round" />
      <Arrow x1={470} y1={170} x2={470} y2={208} color={AMBER} width={1.6} />
      <Arrow x1={470} y1={208} x2={470} y2={170} color={AMBER} width={1.6} />
      <text x="478" y="194" fontSize="12" fontWeight="700" fill={AMBER}>p</text>
      <circle cx="410" cy="208" r="4.5" fill={VIOLET} />
      <text x="296" y="244" fontSize="10" fill={MUTED}>pitch p = distance travelled along B in one turn</text>
    </Figure>
  );
}

/* 4.4 — Biot–Savart geometry */
function BiotSavartDiagram() {
  return (
    <Figure title="Fig. 4.7 — the Biot–Savart law" label="A current element I dl produces a field dB at P, perpendicular to the plane of dl and r." viewBox="0 0 560 235" caption="The element I dl sits at the tail of the vector r reaching the field point P; θ is the angle between them. For the current sense drawn here, dB points into the page.">
      <line x1="50" y1="170" x2="510" y2="170" stroke={MUTED} strokeWidth="5" strokeLinecap="round" />
      <Arrow x1={150} y1={170} x2={262} y2={170} color={AMBER} width={3} />
      <text x="204" y="192" fontSize="11" fontWeight="700" textAnchor="middle" fill={AMBER}>I dl</text>
      <circle cx="330" cy="62" r="5" fill={VIOLET} />
      <text x="340" y="58" fontSize="13" fontWeight="700" fill={VIOLET}>P</text>
      <line x1="227" y1="170" x2="326" y2="68" stroke={MUTED} strokeWidth="1.6" strokeDasharray="5 4" />
      <text x="276" y="108" fontSize="12" fontWeight="700" fill={MUTED}>r</text>
      <path d="M 255 170 A 28 28 0 0 0 246 149" fill="none" stroke={INK} strokeWidth="1.3" />
      <text x="262" y="152" fontSize="12" fontWeight="700" fill={INK}>θ</text>
      <IntoPage cx={382} cy={62} r={11} />
      <text x="400" y="66" fontSize="11" fill={MUTED}>dB (into the page)</text>
      <text x="50" y="222" fontSize="10" fill={MUTED}>dB ⟂ the plane containing dl and r</text>
    </Figure>
  );
}

/* 4.5 — field on the axis of a circular loop */
function LoopAxisDiagram() {
  return (
    <Figure title="Fig. 4.9 — field on the axis of a circular loop" label="A loop of radius R seen edge on, with its axis horizontal. The element dl gives a field dB at P that splits into an axial part dBx and a perpendicular part." viewBox="0 0 560 245" caption="The perpendicular parts of dB from diametrically opposite elements cancel; only dBx = dB cos θ survives, and summing the elements multiplies the result by the circumference 2πR.">
      <line x1="60" y1="150" x2="530" y2="150" stroke={MUTED} strokeWidth="1.3" strokeDasharray="5 4" />
      <text x="536" y="154" fontSize="11" fill={MUTED}>x</text>
      <ellipse cx="190" cy="150" rx="26" ry="70" fill="none" stroke={VIOLET} strokeWidth="2.4" />
      <text x="170" y="172" fontSize="11" fontWeight="700" fill={MUTED}>O</text>
      <line x1="190" y1="150" x2="190" y2="80" stroke={MUTED} strokeWidth="1.3" strokeDasharray="4 4" />
      <text x="196" y="116" fontSize="12" fontWeight="700" fill={MUTED}>R</text>
      <circle cx="190" cy="80" r="4.5" fill={AMBER} />
      <text x="158" y="74" fontSize="11" fontWeight="700" fill={AMBER}>dl</text>
      <line x1="190" y1="80" x2="420" y2="150" stroke={MUTED} strokeWidth="1.6" />
      <text x="296" y="102" fontSize="12" fontWeight="700" fill={MUTED}>r</text>
      <circle cx="420" cy="150" r="5" fill={VIOLET} />
      <text x="428" y="170" fontSize="13" fontWeight="700" fill={VIOLET}>P</text>
      <Arrow x1={420} y1={150} x2={438} y2={210} color={ROSE} width={2.2} />
      <text x="446" y="216" fontSize="12" fontWeight="700" fill={ROSE}>dB</text>
      <Arrow x1={420} y1={150} x2={438} y2={150} color={ROSE} width={1.5} dashed />
      <text x="446" y="144" fontSize="10" fontWeight="700" fill={ROSE}>dBx</text>
      <Arrow x1={420} y1={150} x2={420} y2={210} color={ROSE} width={1.5} dashed />
      <text x="404" y="226" fontSize="10" fontWeight="700" textAnchor="end" fill={ROSE}>dB⊥</text>
      <text x="60" y="42" fontSize="11" fill={MUTED}>x = distance of P from the centre</text>
    </Figure>
  );
}

/* 4.7 — solenoid and toroid */
function SolenoidAndToroidDiagram() {
  const turns = Array.from({ length: 9 }, (_, i) => 70 + i * 24);
  const windings = Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * Math.PI * 2;
    return { x1: 430 + 44 * Math.cos(a), y1: 120 + 44 * Math.sin(a), x2: 430 + 78 * Math.cos(a), y2: 120 + 78 * Math.sin(a) };
  });
  return (
    <Figure title="Figs. 4.15 to 4.17 — solenoid and toroid" label="Left: a long solenoid with the rectangular Amperian loop abcd. Right: a toroid with a circular Amperian loop of radius r inside the core." viewBox="0 0 560 290" caption="Only side ab of the rectangle contributes, so Bh = μ₀(nh)I. In the toroid the Amperian circle encloses all N turns, so B(2πr) = μ₀NI.">
      {turns.map((x) => <ellipse key={`t${x}`} cx={x} cy="150" rx="9" ry="60" fill="none" stroke={VIOLET} strokeWidth="1.7" />)}
      <Arrow x1={80} y1={150} x2={252} y2={150} color={SKY} width={2} />
      <Arrow x1={80} y1={120} x2={200} y2={120} color={SKY} width={1.4} />
      <Arrow x1={80} y1={180} x2={200} y2={180} color={SKY} width={1.4} />
      <rect x="100" y="104" width="104" height="152" fill="none" stroke={MUTED} strokeWidth="1.4" strokeDasharray="5 4" />
      <text x="86" y="100" fontSize="11" fontWeight="700" fill={INK}>a</text>
      <text x="206" y="100" fontSize="11" fontWeight="700" fill={INK}>b</text>
      <text x="206" y="272" fontSize="11" fontWeight="700" fill={INK}>c</text>
      <text x="86" y="272" fontSize="11" fontWeight="700" fill={INK}>d</text>
      <text x="146" y="122" fontSize="11" fontWeight="700" textAnchor="middle" fill={MUTED}>h</text>
      <text x="30" y="30" fontSize="11" fontWeight="700" fill={INK}>(a) long solenoid</text>
      <circle cx="430" cy="120" r="78" fill="none" stroke={VIOLET} strokeWidth="1.8" />
      <circle cx="430" cy="120" r="44" fill="none" stroke={VIOLET} strokeWidth="1.8" />
      {windings.map((w, i) => <line key={`w${i}`} x1={w.x1} y1={w.y1} x2={w.x2} y2={w.y2} stroke={VIOLET} strokeWidth="1.2" opacity="0.75" />)}
      <circle cx="430" cy="120" r="61" fill="none" stroke={SKY} strokeWidth="1.6" strokeDasharray="5 4" />
      <text x="462" y="112" fontSize="11" fontWeight="700" fill={SKY}>r</text>
      <text x="352" y="230" fontSize="11" fontWeight="700" fill={INK}>(b) toroid</text>
      <text x="296" y="282" fontSize="10" fill={MUTED}>field outside the toroid is zero</text>
    </Figure>
  );
}

/* 4.8 — force between two parallel currents */
function ParallelWiresDiagram() {
  return (
    <Figure title="Fig. 4.17 — two parallel conductors" label="Wire a sets up a field B a at wire b and pulls it inwards, so parallel currents attract." viewBox="0 0 560 230" caption="B a is the field set up by conductor a at conductor b; the force F ba on b is towards a. Reversing either current reverses the force.">
      <line x1="50" y1="70" x2="510" y2="70" stroke={MUTED} strokeWidth="5" strokeLinecap="round" />
      <Arrow x1={160} y1={70} x2={260} y2={70} color={AMBER} width={3} />
      <text x="28" y="74" fontSize="13" fontWeight="700" fill={INK}>a</text>
      <text x="266" y="58" fontSize="12" fontWeight="700" fill={AMBER}>Ia</text>
      <line x1="50" y1="170" x2="510" y2="170" stroke={MUTED} strokeWidth="5" strokeLinecap="round" />
      <Arrow x1={160} y1={170} x2={260} y2={170} color={AMBER} width={3} />
      <text x="28" y="174" fontSize="13" fontWeight="700" fill={INK}>b</text>
      <text x="266" y="158" fontSize="12" fontWeight="700" fill={AMBER}>Ib</text>
      <IntoPage cx={350} cy={120} r={11} />
      <text x="366" y="124" fontSize="11" fill={MUTED}>Ba (into page)</text>
      <Arrow x1={470} y1={170} x2={470} y2={78} color={EMERALD} width={1.6} dashed />
      <Arrow x1={478} y1={78} x2={478} y2={170} color={EMERALD} width={1.6} dashed />
      <text x="486" y="128" fontSize="12" fontWeight="700" fill={EMERALD}>d</text>
      <Arrow x1={210} y1={160} x2={210} y2={96} color={EMERALD} width={2.4} />
      <text x="120" y="128" fontSize="12" fontWeight="700" fill={EMERALD}>Fba</text>
    </Figure>
  );
}

/* 4.9 — torque on a rectangular loop */
function LoopTorqueDiagram() {
  return (
    <Figure title="Fig. 4.18 — torque on a rectangular loop" label="The forces on the two side arms of the loop are equal, opposite and non-collinear, so they form a couple." viewBox="0 0 560 250" caption="Each side arm carries a force I b B, but the two forces act along different lines, so they form a couple of torque I A B. The net force on the loop is zero — a uniform field can twist a loop but never translate it.">
      <text x="30" y="24" fontSize="12" fontWeight="700" fill={INK}>(a) field in the plane of the loop</text>
      <rect x="110" y="60" width="100" height="115" fill="none" stroke={VIOLET} strokeWidth="2.2" />
      <Arrow x1={30} y1={42} x2={300} y2={42} color={SKY} width={1.8} />
      <Arrow x1={30} y1={198} x2={300} y2={198} color={SKY} width={1.8} />
      <text x="306" y="46" fontSize="12" fontWeight="700" fill={SKY}>B</text>
      <IntoPage cx={110} cy={118} />
      <text x="80" y="122" fontSize="11" fontWeight="700" fill={ROSE}>F1</text>
      <OutOfPage cx={210} cy={118} />
      <text x="218" y="106" fontSize="11" fontWeight="700" fill={ROSE}>F2</text>
      <text x="96" y="56" fontSize="11" fontWeight="700" fill={INK}>A</text>
      <text x="96" y="186" fontSize="11" fontWeight="700" fill={INK}>B</text>
      <text x="216" y="186" fontSize="11" fontWeight="700" fill={INK}>C</text>
      <text x="216" y="56" fontSize="11" fontWeight="700" fill={INK}>D</text>
      <line x1="160" y1="30" x2="160" y2="212" stroke={MUTED} strokeWidth="1.2" strokeDasharray="5 4" />
      <text x="150" y="228" fontSize="10" fill={MUTED}>axis of rotation</text>
      <text x="300" y="24" fontSize="12" fontWeight="700" fill={INK}>(b) view along AD — the couple</text>
      <line x1="370" y1="120" x2="470" y2="120" stroke={VIOLET} strokeWidth="3" strokeLinecap="round" />
      <line x1="420" y1="96" x2="420" y2="176" stroke={MUTED} strokeWidth="1.2" strokeDasharray="5 4" />
      <IntoPage cx={370} cy={120} r={10} />
      <OutOfPage cx={470} cy={120} r={10} />
      <text x="352" y="152" fontSize="10" fontWeight="700" fill={ROSE}>F1</text>
      <text x="478" y="152" fontSize="10" fontWeight="700" fill={ROSE}>F2</text>
      <text x="392" y="112" fontSize="10" fontWeight="700" fill={MUTED}>a/2</text>
      <text x="430" y="112" fontSize="10" fontWeight="700" fill={MUTED}>a/2</text>
      <path d="M 356 78 A 64 64 0 0 1 484 78" fill="none" stroke={AMBER} strokeWidth="1.8" />
      <polygon points="484,78 470,72 474,86" fill={AMBER} />
      <text x="420" y="66" fontSize="10" fontWeight="700" textAnchor="middle" fill={AMBER}>anticlockwise</text>
      <text x="300" y="228" fontSize="10" fill={MUTED}>the pair of forces is a couple: torque = I A B sin θ</text>
    </Figure>
  );
}

/* 4.10 — moving coil galvanometer */
function GalvanometerDiagram() {
  return (
    <Figure title="Fig. 4.20 — the moving coil galvanometer" label="A coil wound on a soft iron cylinder sits between the poles of a magnet; a spring supplies the counter torque and a pointer reads the deflection." viewBox="0 0 560 240" caption="The cylindrical core makes the field radial, so the plane of the coil is always parallel to B and sin θ = 1. Only the spring torque kφ opposes NIAB, so the deflection is proportional to the current.">
      <rect x="58" y="78" width="64" height="94" rx="4" fill="var(--muted)" stroke={MUTED} strokeWidth="1.2" />
      <text x="90" y="132" fontSize="17" fontWeight="700" textAnchor="middle" fill={INK}>N</text>
      <rect x="436" y="78" width="64" height="94" rx="4" fill="var(--muted)" stroke={MUTED} strokeWidth="1.2" />
      <text x="468" y="132" fontSize="17" fontWeight="700" textAnchor="middle" fill={INK}>S</text>
      <circle cx="279" cy="125" r="40" fill="none" stroke={MUTED} strokeWidth="1.4" strokeDasharray="5 4" />
      <text x="279" y="120" fontSize="9" textAnchor="middle" fill={MUTED}>soft iron</text>
      <text x="279" y="132" fontSize="9" textAnchor="middle" fill={MUTED}>core</text>
      <rect x="239" y="85" width="80" height="80" fill="none" stroke={VIOLET} strokeWidth="2.4" rx="2" />
      <text x="279" y="182" fontSize="9" textAnchor="middle" fill={VIOLET}>coil of N turns</text>
      <Arrow x1={128} y1={100} x2={232} y2={117} color={SKY} width={1.8} />
      <Arrow x1={128} y1={152} x2={232} y2={134} color={SKY} width={1.8} />
      <Arrow x1={430} y1={100} x2={326} y2={117} color={SKY} width={1.8} />
      <Arrow x1={430} y1={152} x2={326} y2={134} color={SKY} width={1.8} />
      <text x="150" y="92" fontSize="11" fontWeight="700" fill={SKY}>B</text>
      <text x="392" y="92" fontSize="11" fontWeight="700" fill={SKY}>B</text>
      <line x1="279" y1="125" x2="352" y2="54" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="279" cy="125" r="4" fill={INK} />
      <text x="358" y="52" fontSize="10" fontWeight="700" fill={INK}>pointer</text>
      <path d="M 246 68 Q 340 8 434 68" fill="none" stroke={MUTED} strokeWidth="3" />
      <text x="340" y="18" fontSize="10" textAnchor="middle" fill={MUTED}>scale</text>
      <polyline points="279,165 279,175 269,181 289,188 269,195 289,202 279,208" fill="none" stroke={EMERALD} strokeWidth="2" strokeLinejoin="round" />
      <text x="298" y="196" fontSize="10" fontWeight="700" fill={EMERALD}>spring Sp</text>
      <text x="108" y="196" fontSize="10" fill={MUTED}>φ = deflection</text>
    </Figure>
  );
}

/* 4.6 — field inside and outside a current-carrying wire */
function ThickWireFieldDiagram() {
  return (
    <Figure title="Fig. 4.14 — field of a thick straight wire" label="Left: two amperian circles, one inside the wire and one outside. Right: B rises linearly up to the surface r = a and then falls as 1/r." viewBox="0 0 560 250" caption="Inside the wire only the fraction (r²/a²) of the current is enclosed, so B ∝ r; outside the whole current is enclosed, so B ∝ 1/r. The field is largest at the surface, where both expressions meet at μ0I/2πa.">
      <circle cx="140" cy="120" r="58" fill="none" stroke={MUTED} strokeWidth="2" />
      <text x="152" y="72" fontSize="11" fontWeight="700" fill={MUTED}>a</text>
      <IntoPage cx={140} cy={120} r={9} />
      <text x="154" y="124" fontSize="11" fontWeight="700" fill={ROSE}>I</text>
      <circle cx="140" cy="120" r="28" fill="none" stroke={EMERALD} strokeWidth="1.6" strokeDasharray="5 4" />
      <circle cx="140" cy="120" r="86" fill="none" stroke={AMBER} strokeWidth="1.6" strokeDasharray="5 4" />
      <text x="106" y="152" fontSize="10" fontWeight="700" fill={EMERALD}>r &lt; a</text>
      <text x="196" y="230" fontSize="10" fontWeight="700" fill={AMBER}>r &gt; a</text>
      <line x1="330" y1="210" x2="540" y2="210" stroke={MUTED} strokeWidth="1.4" />
      <line x1="330" y1="210" x2="330" y2="55" stroke={MUTED} strokeWidth="1.4" />
      <polyline points="330,210 390,100 420,120 460,140 500,152 535,160" fill="none" stroke={VIOLET} strokeWidth="2.4" strokeLinejoin="round" />
      <line x1="390" y1="210" x2="390" y2="100" stroke={MUTED} strokeWidth="1.2" strokeDasharray="5 4" />
      <text x="390" y="226" fontSize="10" fontWeight="700" textAnchor="middle" fill={MUTED}>r = a</text>
      <text x="322" y="62" fontSize="11" fontWeight="700" fill={INK}>B</text>
      <text x="538" y="226" fontSize="11" fontWeight="700" fill={INK}>r</text>
      <text x="336" y="160" fontSize="10" fontWeight="700" fill={VIOLET}>B ∝ r</text>
      <text x="452" y="96" fontSize="10" fontWeight="700" fill={VIOLET}>B ∝ 1/r</text>
      <text x="398" y="86" fontSize="10" fill={MUTED}>μ0 I / 2πa</text>
    </Figure>
  );
}

/* 4.5 — a wire bent into a semicircular arc */
function SemicircleDiagram() {
  return (
    <Figure title="Fig. 4.11 — a semicircular arc" label="Left: current enters along a straight segment, sweeps round a semicircle of radius R and leaves along another straight segment. Right: the same arc bent the other way." viewBox="0 0 560 210" caption="The straight segments lie along r from the centre, so dl × r vanishes and they contribute nothing. Only the arc contributes, and that contribution is half of the full loop: B = μ0I/4R.">
      <text x="24" y="24" fontSize="12" fontWeight="700" fill={INK}>(a)</text>
      <line x1="40" y1="126" x2="90" y2="126" stroke={VIOLET} strokeWidth="3" strokeLinecap="round" />
      <path d="M 90 126 A 60 60 0 0 1 210 126" fill="none" stroke={VIOLET} strokeWidth="3" />
      <line x1="210" y1="126" x2="260" y2="126" stroke={VIOLET} strokeWidth="3" strokeLinecap="round" />
      <Arrow x1={52} y1={126} x2={84} y2={126} color={AMBER} width={2} />
      <Arrow x1={222} y1={126} x2={254} y2={126} color={AMBER} width={2} />
      <text x="150" y="132" fontSize="11" fontWeight="700" textAnchor="middle" fill={VIOLET}>I</text>
      <line x1="150" y1="126" x2="150" y2="66" stroke={MUTED} strokeWidth="1.2" strokeDasharray="5 4" />
      <text x="156" y="92" fontSize="11" fontWeight="700" fill={MUTED}>R</text>
      <circle cx="150" cy="126" r="4" fill={INK} />
      <text x="150" y="148" fontSize="10" textAnchor="middle" fill={MUTED}>P</text>
      <text x="24" y="196" fontSize="10" fill={MUTED}>dl ∥ r on the straight parts — no contribution</text>
      <text x="310" y="24" fontSize="12" fontWeight="700" fill={INK}>(b) bent the other way</text>
      <line x1="326" y1="126" x2="376" y2="126" stroke={VIOLET} strokeWidth="3" strokeLinecap="round" />
      <path d="M 376 126 A 60 60 0 0 0 496 126" fill="none" stroke={VIOLET} strokeWidth="3" />
      <line x1="496" y1="126" x2="546" y2="126" stroke={VIOLET} strokeWidth="3" strokeLinecap="round" />
      <Arrow x1={338} y1={126} x2={370} y2={126} color={AMBER} width={2} />
      <Arrow x1={508} y1={126} x2={540} y2={126} color={AMBER} width={2} />
      <line x1="436" y1="126" x2="436" y2="186" stroke={MUTED} strokeWidth="1.2" strokeDasharray="5 4" />
      <text x="442" y="168" fontSize="11" fontWeight="700" fill={MUTED}>R</text>
      <circle cx="436" cy="126" r="4" fill={INK} />
      <text x="436" y="112" fontSize="10" textAnchor="middle" fill={MUTED}>P</text>
      <text x="360" y="196" fontSize="10" fill={MUTED}>same magnitude, opposite direction</text>
    </Figure>
  );
}

export default function MovingChargesAndMagnetismChapter() {
  return (
    <>
      <h2 id="h-4-1">4.1 Introduction</h2>
      <p>Electricity and magnetism were studied as separate subjects for more than 2000 years. Their connection surfaced only in <strong>1820</strong>, when the Danish physicist <strong>Hans Christian Oersted</strong> noticed, during a lecture demonstration, that a current in a straight wire deflected a nearby compass needle.</p>
      <ul>
        <li>The needle sets itself <Highlight color="yellow">tangential to an imaginary circle</Highlight> drawn round the wire, in a plane perpendicular to the wire.</li>
        <li><Highlight color="blue">Reversing the current reverses the deflection</Highlight>; the deflection grows if the current is larger or the needle is brought closer.</li>
        <li>Iron filings sprinkled round the wire settle along <strong>concentric circles</strong> — the field pattern made visible.</li>
      </ul>
      <Callout type="important">
        Oersted concluded that <Highlight color="yellow">moving charges or currents produce a magnetic field in the surrounding space</Highlight>. This was the first empirical evidence of a connection between electric and magnetic phenomena.
      </Callout>
      <p>In 1864 <strong>James Clerk Maxwell</strong> unified the laws of electricity and magnetism, and realised that light is an electromagnetic wave. <strong>Hertz</strong> discovered radio waves, <strong>J. C. Bose</strong> and <strong>Marconi</strong> produced them for practical use, and the twentieth century built the whole technology of generating, amplifying, transmitting and detecting electromagnetic waves on this foundation.</p>
      <p>Two questions organise the chapter: how a magnetic field pushes a moving charge or a current-carrying wire, and how a current creates a magnetic field of its own. Along the way come the cyclotron, which exploits the fact that the circulation frequency of a charge in a field does not depend on its speed, and the galvanometer, which converts a current into a readable deflection.</p>
      <Callout type="note" title="Convention for the plane of the page">
        A current or field <strong>emerging out of the page</strong> is drawn as a dot (·) — the tip of an arrow aimed at you. One <strong>going into the page</strong> is drawn as a cross (×) — the feathered tail of an arrow moving away.
      </Callout>

      <h2 id="h-4-2">4.2 Magnetic Force</h2>
      <h3 id="h-4-2-1">4.2.1 Sources and fields</h3>
      <p>Charge–charge interaction is described in two stages. A source charge <em>Q</em> creates a field <em>E</em> everywhere in space,</p>
      <FormulaBlock latex={String.raw`\mathbf{E} = \frac{Q}{4\pi\varepsilon_0}\,\frac{\hat{\mathbf{r}}}{r^2}`} tag="Eq. 4.1" />
      <p>and a test charge <em>q</em> placed in that field feels the force</p>
      <FormulaBlock latex={String.raw`\mathbf{F} = q\mathbf{E} = \frac{qQ}{4\pi\varepsilon_0}\,\frac{\hat{\mathbf{r}}}{r^2}`} tag="Eq. 4.2" />
      <p>The field is not a bookkeeping device: it <Highlight color="blue">carries energy and momentum</Highlight>, and it is not established instantaneously — it takes a finite time to propagate. Faraday stressed the concept of the field and Maxwell built it into his unification. A field may also vary with time; throughout this chapter the fields are assumed steady.</p>
      <p>With several sources the fields add <strong>vectorially</strong> — the <strong>principle of superposition</strong>. Currents and moving charges produce, in addition, a <strong>magnetic field</strong> <em>B</em>(<em>r</em>), another vector field with the same basic properties: defined at each point of space, possibly time-dependent, and obeying the same superposition principle.</p>

      <h3 id="h-4-2-2">4.2.2 Magnetic field, Lorentz force</h3>
      <p>A charge <em>q</em> moving with velocity <em>v</em> in the simultaneous presence of an electric field <em>E</em> and a magnetic field <em>B</em> feels two forces at once, added vectorially:</p>
      <Callout type="important">
        The total force on a charge <em>q</em> moving with velocity <em>v</em> in the presence of an electric field <em>E</em> and a magnetic field <em>B</em> is <strong>F</strong> = <em>q</em>[<strong>E</strong> + <strong>v</strong> × <strong>B</strong>], the sum of an electric part and a magnetic part. It is called the <strong>Lorentz force</strong>, after H. A. Lorentz, who gave it on the basis of the extensive experiments of Ampere and others.
      </Callout>
      <FormulaBlock latex={String.raw`\mathbf{F} = q\,[\mathbf{E}(\mathbf{r}) + \mathbf{v}\times\mathbf{B}(\mathbf{r})] = \mathbf{F}_{\text{electric}} + \mathbf{F}_{\text{magnetic}}`} important tag="Eq. 4.3" />
      <p>Three features of the magnetic part are worth memorising.</p>
      <ul>
        <li>It depends on the charge, the velocity <em>and</em> the field. A negative charge feels the force <Highlight color="pink">opposite to a positive one</Highlight> with the same velocity.</li>
        <li>Because it contains the cross product <em>v</em> × <em>B</em>, it <strong>vanishes when v is parallel or antiparallel to B</strong>, and acts sideways — perpendicular to both <em>v</em> and <em>B</em>. Its magnitude is <em>F</em> = <em>qvB</em> sin <em>θ</em>.</li>
        <li>It is <strong>zero if the charge is at rest</strong>: only a moving charge feels a magnetic force.</li>
      </ul>
      <ForceOnChargeDiagram />
      <Callout type="important" title="Defining the tesla">
        The magnitude of the magnetic field is <strong>1 SI unit</strong> when the force acting on a unit charge (1 C), moving perpendicular to <em>B</em> with a speed of 1 m s⁻¹, is one newton. This unit is the <strong>tesla</strong> (T), named after Nikola Tesla. Dimensionally [<em>B</em>] = [<em>F</em>/<em>qv</em>], so 1 T = 1 N s C⁻¹ m⁻¹.
      </Callout>
      <div className="grid gap-4 sm:grid-cols-3 [&>div]:my-0">
        <MetricCard label="Gauss (non-SI)" value="10⁻⁴" unit="T" description="Still used in astronomy and in older texts; 1 G = 10⁻⁴ T." />
        <MetricCard label="Earth's field" value="3.6 × 10⁻⁵" unit="T" description="Weak enough that a compass needle is easily disturbed by a laboratory current." />
        <MetricCard label="Strong laboratory field" value="1 – 2" unit="T" description="The order of magnitude assumed in the worked examples of this chapter." />
      </div>
      <p>The force direction follows from the screw rule or the right-hand rule for the cross product: rotate <em>v</em> towards <em>B</em> through the smaller angle, and the direction in which a right-handed screw advances is the direction of <em>v</em> × <em>B</em>.</p>
      <MistakeCard mistake="The magnetic force acts along the velocity, just as the electric force acts along the field." correction="The magnetic force is perpendicular to both v and B; it changes the direction of motion, never the speed." example="A charge fired along B feels no force at all, so it keeps moving in a straight line." />

      <h3 id="h-4-2-3">4.2.3 Force on a current-carrying conductor</h3>
      <p>A current-carrying rod is a crowd of drifting charges, so the Lorentz force on each carrier adds up to a force on the rod. Take a rod of cross-section <em>A</em>, length <em>l</em>, carrying a steady current <em>I</em>, with <em>n</em> mobile carriers per unit volume drifting at <em>v</em><sub>d</sub>.</p>
      <Stepper steps={[
        { label: "Count the carriers", description: <>A rod of length <em>l</em> holds <em>nlA</em> mobile carriers, each with charge <em>q</em>.</> },
        { label: "Add the forces", description: <>The total force on the rod is <em>F</em> = (<em>nlA</em>)<em>q</em> <em>v</em><sub>d</sub> × <em>B</em>.</> },
        { label: "Recognise the current", description: <>The current density is <em>j</em> = <em>nq</em><em>v</em><sub>d</sub>, so its flux through the rod is the current <em>I</em>.</> },
        { label: "Move the vector to the length", description: <>Write <em>F</em> = [(<em>nq</em><em>v</em><sub>d</sub>)<em>lA</em>] × <em>B</em> = <em>I</em> <em>l</em> × <em>B</em>, taking the vector sign over to the length.</> },
      ]} />
      <FormulaBlock latex={String.raw`\mathbf{F} = I\,\mathbf{l}\times\mathbf{B}`} important tag="Eq. 4.4" />
      <p>Here <em>l</em> is a vector of magnitude equal to the rod&apos;s length and direction equal to that of the current. The current <em>I</em> itself is <strong>not</strong> a vector, and <em>B</em> in Eq. 4.4 is the <strong>external</strong> field, not the field produced by the rod itself.</p>
      <Callout type="note" title="Arbitrary shape">
        A bent wire is treated as a chain of straight strips: <em>F</em> = Σ <em>I</em> d<em>l</em> × <em>B</em>, which becomes an integral in most cases. For a uniform field only the end-to-end vector matters, so a curved wire feels the same force as the straight wire joining its ends.
      </Callout>
      <Expandable title="Example 4.1 — A wire suspended in mid-air" variant="example">
        <ProblemSolution.Problem>
          <p>A straight wire of mass 200 g and length 1.5 m carries a current of 2 A. It is suspended in mid-air by a uniform horizontal magnetic field <em>B</em>. What is the magnitude of the magnetic field?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The field gives an upward force <em>IlB</em>. For mid-air suspension it must balance gravity:</p>
          <FormulaBlock latex={String.raw`mg = IlB \quad\Longrightarrow\quad B = \frac{mg}{Il} = \frac{0.2 \times 9.8}{2 \times 1.5} = 0.65\ \text{T}`} />
          <p>Only the mass per unit length of the wire mattered, so specifying <em>m/l</em> alone would have been enough. The earth&apos;s field here is about 4 × 10⁻⁵ T and has been ignored.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 4.2 — Direction of the Lorentz force" variant="example">
        <ProblemSolution.Problem>
          <p>The magnetic field is parallel to the positive <em>y</em>-axis and a charged particle moves along the positive <em>x</em>-axis. Which way does the Lorentz force act for (a) an electron, (b) a proton?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>With <em>v</em> along +x and <em>B</em> along +y, the cross product <em>v</em> × <em>B</em> points along +z, by the screw rule. The force <em>q</em>(<em>v</em> × <em>B</em>) then follows the sign of the charge:</p>
          <ul>
            <li><strong>(a) Electron</strong> — negative, so the force is along <Highlight color="pink">−z</Highlight>.</li>
            <li><strong>(b) Proton</strong> — positive, so the force is along <Highlight color="blue">+z</Highlight>.</li>
          </ul>
        </ProblemSolution.Solution>
      </Expandable>
      <h2 id="h-4-3">4.3 Motion in a Magnetic Field</h2>
      <p>A force does work on a particle only if it has a component along the motion. The magnetic force is always perpendicular to the velocity, so it <Highlight color="yellow">does no work and leaves the speed unchanged</Highlight> — only the direction of the momentum turns. This is quite unlike the electric force <em>qE</em>, which can have a component along the motion and therefore transfers energy as well as momentum.</p>
      <p>Take first the case <em>v</em> perpendicular to <em>B</em>. The force <em>qvB</em> is perpendicular to the velocity, so it acts as a <strong>centripetal force</strong> and the charge runs round a circle in the plane normal to <em>B</em>. If the velocity has a component along <em>B</em>, that component is untouched by the field while the perpendicular component still circles, and the path becomes a <strong>helix</strong>.</p>
      <EquationLadder title="From the centripetal condition to the orbit" steps={[
        { label: "Balance the magnetic force against the centripetal force", equation: String.raw`\frac{mv^2}{r} = qvB`, tag: "4.5" },
        { label: "Radius of the circle", equation: String.raw`r = \frac{mv}{qB}`, note: "Larger momentum means a larger radius; a stronger field bends the path more tightly." },
        { label: "Angular frequency, using v = ωr", equation: String.raw`\omega = 2\pi\nu = \frac{qB}{m}`, tag: "4.6(a)" },
        { label: "Time for one revolution", equation: String.raw`T = \frac{2\pi}{\omega} = \frac{1}{\nu} = \frac{2\pi m}{qB}` },
        { label: "Pitch of the helix", equation: String.raw`p = v_{\parallel}T = \frac{2\pi m v_{\parallel}}{qB}`, final: true, tag: "4.6(b)" },
      ]} />
      <MotionInFieldDiagram />
      <KeyPoint title="Why the cyclotron works">
        The frequency <em>ν</em> = <em>qB</em>/2π<em>m</em> is <Highlight color="yellow">independent of the speed and of the radius</Highlight>. A charge spiralling outward in a fixed field therefore completes every turn in exactly the same time — so one fixed-frequency oscillator can keep pushing it, lap after lap.
      </KeyPoint>

      <h3 id="h-4-3-cyclotron">The cyclotron</h3>
      <p>The constancy of <em>ν</em> is the working principle of the <strong>cyclotron</strong>, a machine that accelerates charged particles to high energies. Two hollow D-shaped metal boxes (<strong>dees</strong>) sit inside a uniform magnetic field, with a narrow gap between them across which an alternating voltage is applied.</p>
      <ul>
        <li>The oscillator is tuned to the <strong>cyclotron frequency</strong> <em>ν</em><sub>c</sub> = <em>qB</em>/2π<em>m</em>, so the voltage reverses exactly when the particle reaches the gap.</li>
        <li>The particle crosses the gap twice per revolution and gains energy <em>qV</em> each time; its radius grows, but its period does not.</li>
        <li>The kinetic energy is largest at the outer edge, where the radius equals the dee radius <em>R</em>:</li>
      </ul>
      <FormulaBlock latex={String.raw`K_{\max} = \frac{q^2B^2R^2}{2m}`} label="Maximum energy from a cyclotron of radius R" />
      <Callout type="warning" title="Where the cyclotron stops">
        At high speeds the relativistic increase of mass changes <em>ν</em>, the particle drifts out of step with the oscillator and acceleration stalls. Electrons become relativistic at quite low energies, so a classical cyclotron is used for heavier particles and for modest energies; synchrocyclotrons and synchrotrons handle the rest.
      </Callout>

      <h3 id="h-4-3-selector">The velocity selector</h3>
      <p>Cross an electric field and a magnetic field at right angles, with the beam entering normal to both. The electric force <em>qE</em> and the magnetic force <em>qvB</em> then point in opposite directions along the same line, and a charge passes undeviated only if the two balance:</p>
      <FormulaBlock latex={String.raw`qE = qvB \quad\Longrightarrow\quad v = \frac{E}{B}`} important label="Velocity selector" />
      <p>Only charges with this speed leave the region — whatever their mass or the sign of their charge, since <em>q</em> cancels. A velocity selector therefore puts a single speed into the next stage of an instrument such as a mass spectrometer.</p>

      <Expandable title="Example 4.3 — An electron circling in a magnetic field" variant="example">
        <ProblemSolution.Problem>
          <p>What is the radius of the path of an electron (mass 9 × 10⁻³¹ kg, charge 1.6 × 10⁻¹⁹ C) moving at 3 × 10⁷ m s⁻¹ in a magnetic field of 6 × 10⁻⁴ T perpendicular to it? What is its frequency, and its energy in keV? (1 eV = 1.6 × 10⁻¹⁹ J)</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>Radius.</strong> From <em>r</em> = <em>mv</em>/<em>qB</em>,</p>
          <FormulaBlock latex={String.raw`r = \frac{9\times10^{-31} \times 3\times10^{7}}{1.6\times10^{-19} \times 6\times10^{-4}} = 28\times10^{-2}\ \text{m} = 28\ \text{cm}`} />
          <p><strong>Frequency.</strong> Using <em>ν</em> = <em>v</em>/2π<em>r</em>,</p>
          <FormulaBlock latex={String.raw`\nu = \frac{v}{2\pi r} = 17\times10^{6}\ \text{s}^{-1} = 17\ \text{MHz}`} />
          <p><strong>Energy.</strong> From <em>E</em> = ½<em>mv</em>²,</p>
          <FormulaBlock latex={String.raw`E = \tfrac{1}{2}\times 9\times10^{-31} \times 9\times10^{14} = 40.5\times10^{-17}\ \text{J} \approx 4\times10^{-16}\ \text{J} = 2.5\ \text{keV}`} />
        </ProblemSolution.Solution>
      </Expandable>
      <h2 id="h-4-4">4.4 Magnetic Field due to a Current Element — Biot–Savart Law</h2>
      <p>Every magnetic field we know is produced either by currents (moving charges) or by the intrinsic magnetic moments of particles. The relation between a current and the field it produces is the <strong>Biot–Savart law</strong>.</p>
      <p>Take a finite conductor carrying a current <em>I</em> and an infinitesimal element d<em>l</em> of it. The field d<em>B</em> that this element produces at a point <em>P</em>, a distance <em>r</em> away, is proportional to the current, to |d<em>l</em>|, and to sin <em>θ</em>, where <em>θ</em> is the angle between d<em>l</em> and the displacement <em>r</em>; it falls off as 1/<em>r</em>².</p>
      <Callout type="important">
        The magnetic field d<em>B</em> due to an element d<em>l</em> carrying a steady current <em>I</em>, at a point <em>P</em> at a distance <em>r</em> from the element, is proportional to <em>I</em> d<em>l</em> × <strong>r̂</strong>/<em>r</em>² and its direction is <Highlight color="yellow">perpendicular to the plane containing d<em>l</em> and r</Highlight>. The constant of proportionality is μ₀/4π, and the expression holds in vacuum.
      </Callout>
      <FormulaBlock latex={String.raw`d\mathbf{B} = \frac{\mu_0}{4\pi}\,\frac{I\,d\mathbf{l}\times\hat{\mathbf{r}}}{r^{2}} = \frac{\mu_0}{4\pi}\,\frac{I\,d\mathbf{l}\times\mathbf{r}}{r^{3}}`} important tag="Eq. 4.7(a)" />
      <FormulaBlock latex={String.raw`dB = \frac{\mu_0}{4\pi}\,\frac{I\,dl\,\sin\theta}{r^{2}}`} tag="Eq. 4.7(b)" />
      <p>The constant has the exact SI value</p>
      <FormulaBlock latex={String.raw`\frac{\mu_0}{4\pi} = 10^{-7}\ \text{T m A}^{-1}, \qquad \mu_0 = 4\pi\times10^{-7}\ \text{T m A}^{-1}`} tag="Eq. 4.7(c)" />
      <p>and μ₀ is called the <strong>permeability of free space</strong>. The sense of d<em>l</em> × <strong>r</strong> is given by the right-hand screw rule: look at the plane of the two vectors, move from the first to the second, and take the direction in which a right-handed screw would advance.</p>
      <BiotSavartDiagram />
      <TableCard
        title="Biot–Savart law versus Coulomb's law"
        headers={["Feature", "Coulomb's law", "Biot–Savart law"]}
        rows={[
          { cells: ["Range", "Long range, ∝ 1/r²; superposition holds", "Long range, ∝ 1/r²; superposition holds"] },
          { cells: ["Source", "Scalar — the electric charge", "Vector — the current element I dl"] },
          { cells: ["Direction of field", "Along the displacement vector r", "Perpendicular to the plane of r and I dl"] },
          { cells: ["Angle dependence", "None", "sin θ; the field is zero along the line of dl"] },
        ]}
        caption="The magnetic field is linear in its source I dl just as the electric field is linear in q. Neither law by itself is complete — one describes the field of a charge, the other the field of an element of current."
      />
      <p>There is a striking numerical link between the two constants: the product μ₀ε₀ is fixed by the speed of light in vacuum,</p>
      <FormulaBlock latex={String.raw`\mu_0\varepsilon_0 = \frac{1}{c^{2}} \quad\Longrightarrow\quad c = \frac{1}{\sqrt{\mu_0\varepsilon_0}}`} />
      <p>Choosing either ε₀ or μ₀ fixes the other; in SI units μ₀ is fixed at 4π × 10⁻⁷ T m A⁻¹. The full significance of this relation appears in the chapter on electromagnetic waves.</p>
      <Expandable title="Example 4.4 — Field of a current element on the y-axis" variant="example">
        <ProblemSolution.Problem>
          <p>An element d<em>l</em> = Δ<em>x</em> <strong>î</strong>, with Δ<em>x</em> = 1 cm, is placed at the origin and carries a large current <em>I</em> = 10 A. What is the magnetic field on the <em>y</em>-axis at a distance of 0.5 m?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>With d<em>l</em> along <strong>î</strong> and <em>r</em> along <strong>ĵ</strong>, the angle is <em>θ</em> = 90°, so sin <em>θ</em> = 1. Using Eq. 4.7(b) with <em>r</em> = 0.5 m,</p>
          <FormulaBlock latex={String.raw`dB = \frac{\mu_0}{4\pi}\,\frac{I\,dl}{r^{2}} = \frac{10^{-7} \times 10 \times 10^{-2}}{25\times10^{-2}} = 4\times10^{-8}\ \text{T}`} />
          <p>The direction is <strong>+z</strong>, since d<em>l</em> × <em>r</em> = (Δ<em>x</em> <strong>î</strong>) × (<em>y</em> <strong>ĵ</strong>) = Δ<em>x y</em> <strong>k̂</strong>. Recall the cyclic property of the unit vectors: <strong>î</strong> × <strong>ĵ</strong> = <strong>k̂</strong>, <strong>ĵ</strong> × <strong>k̂</strong> = <strong>î</strong>, <strong>k̂</strong> × <strong>î</strong> = <strong>ĵ</strong>. The field is small because a single element is a very weak source.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-4-5">4.5 Magnetic Field on the Axis of a Circular Current Loop</h2>
      <p>A circular loop of radius <em>R</em> carrying a steady current <em>I</em> lies in a plane with its centre at <em>O</em>; the axis of the loop is the <em>x</em>-axis. We want the field at a point <em>P</em> on that axis, a distance <em>x</em> from the centre, in free space.</p>
      <EquationLadder title="Summing the contributions of all elements" steps={[
        { label: "Geometry of one element", equation: String.raw`|\mathbf{r}| = \sqrt{x^{2}+R^{2}}`, note: "Every element of the loop is perpendicular to its own displacement vector to P, so |dl × r| = r dl." },
        { label: "Field of one element", equation: String.raw`dB = \frac{\mu_0}{4\pi}\,\frac{I\,dl}{x^{2}+R^{2}}`, tag: "4.9" },
        { label: "Only the axial part survives", equation: String.raw`\cos\theta = \frac{R}{\left(x^{2}+R^{2}\right)^{1/2}}`, note: "The perpendicular parts from diametrically opposite elements cancel in pairs." },
        { label: "Axial component of one element", equation: String.raw`dB_x = \frac{\mu_0}{4\pi}\,\frac{I\,dl\,R}{\left(x^{2}+R^{2}\right)^{3/2}}` },
        { label: "Integrate round the loop", equation: String.raw`B = \frac{\mu_0 I R^{2}}{2\left(x^{2}+R^{2}\right)^{3/2}}`, final: true, tag: "4.11" },
      ]} />
      <p>The sum of d<em>l</em> round the loop is just the circumference 2π<em>R</em>, which is how the factor <em>R</em>² appears in the numerator. The field points along the axis, in the sense given by the right-hand thumb rule.</p>
      <Callout type="important" title="Right-hand thumb rule for a loop">
        Curl the palm of your right hand round the circular wire with the fingers pointing in the direction of the current. The right-hand thumb then gives the direction of the magnetic field on the axis.
      </Callout>
      <FormulaBlock latex={String.raw`B_{\text{centre}} = \frac{\mu_0 I}{2R}`} important label="Field at the centre of the loop (x = 0)" tag="4.12" />
      <LoopAxisDiagram />
      <p>The field lines of the loop are closed loops of their own, threading through the loop and returning outside it — the upper face behaves like a north pole and the lower face like a south pole. This is why a current loop is a magnet in miniature.</p>
      <SemicircleDiagram />
      <Expandable title="Example 4.5 — A wire bent into a semicircular arc" variant="example">
        <ProblemSolution.Problem>
          <p>A straight wire carrying 12 A is bent into a semicircular arc of radius 2.0 cm. Consider the field at the centre of the arc. (a) What is the field due to the straight segments? (b) How does the contribution of the semicircle differ from, and resemble, that of a full circular loop? (c) Would the answer change if the arc were bent the opposite way, with the same radius?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> For every element of a straight segment, d<em>l</em> is parallel to <em>r</em>, so d<em>l</em> × <em>r</em> = 0. The straight segments contribute nothing.</p>
          <p><strong>(b)</strong> For all elements of the arc, d<em>l</em> × <em>r</em> point the same way (into the page), so their magnitudes simply add. The direction follows the right-hand rule and the magnitude is <Highlight color="yellow">half that of a full loop</Highlight>:</p>
          <FormulaBlock latex={String.raw`B = \frac{\mu_0 I}{4R} = \frac{4\pi\times10^{-7} \times 12}{4 \times 0.02} = 1.9\times10^{-4}\ \text{T}`} />
          <p>so <em>B</em> = 1.9 × 10⁻⁴ T, normal to the plane of the page and going into it.</p>
          <p><strong>(c)</strong> The magnitude is the same but the direction reverses.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 4.6 — Field at the centre of a 100-turn coil" variant="example">
        <ProblemSolution.Problem>
          <p>A tightly wound 100-turn coil of radius 10 cm carries a current of 1 A. What is the magnitude of the field at its centre?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>For a tight winding every turn has the same radius <em>R</em> = 0.1 m, and <em>N</em> = 100, so</p>
          <FormulaBlock latex={String.raw`B = \frac{\mu_0 NI}{2R} = \frac{4\pi\times10^{-7} \times 10^{2} \times 1}{2\times10^{-1}} = 6.28\times10^{-4}\ \text{T}`} />
          <p>Each turn adds its own field at the centre, which is why <em>N</em> multiplies the single-loop result.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <h2 id="h-4-6">4.6 Ampère&apos;s Circuital Law</h2>
      <p>Biot–Savart gives the field element by element. A second, often far quicker route compares the field along a closed boundary with the current threading the surface bounded by it. Take a surface whose boundary is the loop <em>C</em>, cut the boundary into small elements and multiply the tangential component of <em>B</em> at each element by the length d<em>l</em> of that element. Adding all such products and passing to the limit gives an integral:</p>
      <Callout type="important">
        Ampère&apos;s circuital law states that <Formula>{String.raw`\oint \mathbf{B}\cdot d\mathbf{l} = \mu_0 I`}</Formula>, where <em>I</em> is the total current passing through the surface and the integral is taken over the closed loop coinciding with the boundary <em>C</em> of that surface. The sign of <em>I</em> follows the right-hand rule: curl the fingers of the right hand in the sense in which the boundary is traversed, and the thumb gives the direction in which <em>I</em> is counted positive.
      </Callout>
      <p>Most applications use a much simplified form. Choose an <strong>amperian loop</strong> such that at every point of it one of three things is true:</p>
      <ul>
        <li><em>B</em> is tangential to the loop and has the same non-zero value <em>B</em> everywhere on it, or</li>
        <li><em>B</em> is normal to the loop, or</li>
        <li><em>B</em> vanishes.</li>
      </ul>
      <p>If <em>L</em> is the length of the part of the loop on which <em>B</em> is tangential and <em>I</em><sub>e</sub> the current enclosed, the integral collapses to a product:</p>
      <FormulaBlock latex={String.raw`BL = \mu_0 I_e`} important tag="Eq. 4.13(b)" />
      <Callout type="note" title="Ampère and Gauss, side by side">
        Ampère&apos;s law stands to the Biot–Savart law as Gauss&apos;s law stands to Coulomb&apos;s law: both relate a quantity on a boundary (the field) to a source in the interior (the current or the charge). Neither is independent of its partner — each can be derived from the other — but each is far more convenient for the problems that respect its symmetry.
      </Callout>
      <h3 id="h-4-6-wire">The field of a long straight wire</h3>
      <p>For an infinite straight wire the symmetry suggests a circular amperian loop of radius <em>r</em> centred on the wire. <em>B</em> is tangential to the circle and equal in magnitude everywhere on it, so the left side of the law is <em>B</em>(2π<em>r</em>), with the whole current <em>I</em> enclosed:</p>
      <FormulaBlock latex={String.raw`B\,(2\pi r) = \mu_0 I \quad\Longrightarrow\quad B = \frac{\mu_0 I}{2\pi r}`} important tag="Eq. 4.14" />
      <ul>
        <li>The field has <strong>cylindrical symmetry</strong>: it depends on the single coordinate <em>r</em>, not on three.</li>
        <li>Its direction is tangential, so the lines of constant magnitude form <Highlight color="blue">concentric circles</Highlight> — closed loops, quite unlike electrostatic lines that begin on positive and end on negative charges.</li>
        <li>Although the wire is infinite, the field at a non-zero distance is finite; it blows up only as you approach the wire. It is proportional to the current and falls as 1/<em>r</em>.</li>
        <li>Direction from the <strong>right-hand rule</strong>: grasp the wire in your right hand with the thumb along the current; the fingers curl in the sense of the field.</li>
      </ul>
      <p>Ampère&apos;s law holds for <strong>steady</strong> currents that do not fluctuate with time. It is true for any loop, but it only <em>helps</em> when the symmetry is high; for the field at the centre of a circular loop, for instance, the simple expression <em>B</em> = μ₀<em>I</em>/2<em>R</em> cannot be extracted from it.</p>
      <ThickWireFieldDiagram />
      <Expandable title="Example 4.7 — Field inside and outside a thick current-carrying wire" variant="example">
        <ProblemSolution.Problem>
          <p>A long straight wire of circular cross-section (radius <em>a</em>) carries a steady current <em>I</em> uniformly distributed across the cross-section. Calculate the magnetic field in the regions <em>r</em> &gt; <em>a</em> and <em>r</em> &lt; <em>a</em>.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a) Outside, r &gt; a.</strong> The amperian circle is concentric with the wire and encloses the whole current, <em>I</em><sub>e</sub> = <em>I</em>, with <em>L</em> = 2π<em>r</em>:</p>
          <FormulaBlock latex={String.raw`B\,(2\pi r) = \mu_0 I \quad\Longrightarrow\quad B = \frac{\mu_0 I}{2\pi r}, \qquad B \propto \frac{1}{r}`} tag="4.15(a)" />
          <p><strong>(b) Inside, r &lt; a.</strong> The loop now encloses only a part of the current. Uniform distribution gives <em>I</em><sub>e</sub>/<em>I</em> = π<em>r</em>²/π<em>a</em>², so <em>I</em><sub>e</sub> = <em>Ir</em>²/<em>a</em>², and</p>
          <FormulaBlock latex={String.raw`B\,(2\pi r) = \mu_0\,\frac{I r^{2}}{a^{2}} \quad\Longrightarrow\quad B = \left(\frac{\mu_0 I}{2\pi a^{2}}\right) r, \qquad B \propto r`} tag="4.15(b)" />
          <p>The two expressions meet at the surface <em>r</em> = <em>a</em>, where <em>B</em> = μ₀<em>I</em>/2π<em>a</em> is the largest value anywhere. The direction is tangential to the respective circle, by the right-hand rule.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <MistakeCard mistake="The magnetic field inside a current-carrying wire is zero, because the field is 'outside' the conductor." correction="Inside a solid wire the field rises linearly from zero at the axis to a maximum at the surface, then falls as 1/r." example="At r = a/2 the field is exactly half its surface value." />

      <h2 id="h-4-7">4.7 The Solenoid</h2>
      <p>A <strong>long solenoid</strong> is a helix whose length is large compared with its radius, wound with closely spaced turns of enamelled wire so that neighbouring turns are insulated from one another. Each turn is then very nearly a circular loop, and the net field is the vector sum of the fields of all the turns.</p>
      <p>The field lines of a finite solenoid make its behaviour clear: between two neighbouring turns the circular loops of adjacent turns run opposite ways and cancel, so the field there vanishes; the interior mid-point has a strong, uniform field along the axis; the exterior field is weak, parallel to the axis, with no perpendicular component. Lengthen the solenoid and the outside field approaches zero while the inside field becomes everywhere parallel to the axis.</p>
      <p>Now take a rectangular amperian loop <em>abcd</em>, with <em>ab</em> inside and parallel to the axis, <em>cd</em> outside, and <em>bc</em>, <em>ad</em> transverse. Along <em>cd</em> the field is zero; along the transverse sides the field has no component along the loop; only <em>ab</em> contributes. If <em>h</em> is the length of <em>ab</em> and <em>n</em> the number of turns per unit length, the loop encloses <em>nh</em> turns carrying the current <em>I</em>:</p>
      <EquationLadder steps={[
        { label: "Ampère's law on the rectangle", equation: String.raw`BL = \mu_0 I_e` },
        { label: "Substitute the relevant length and enclosed current", equation: String.raw`B\,h = \mu_0\, I\,(n h)` },
        { label: "Cancel the height of the loop", equation: String.raw`B = \mu_0 n I`, final: true, tag: "4.16" },
      ]} />
      <KeyPoint title="Field of a long solenoid">
        Inside a long solenoid the field is <Highlight color="yellow">uniform in magnitude and direction</Highlight> and equal to μ₀<em>nI</em>, where <em>n</em> is the number of turns per unit length. Outside it is zero. The direction is given by the right-hand rule, with the fingers curling along the winding current and the thumb pointing along the field inside.
      </KeyPoint>
      <SolenoidAndToroidDiagram />
      <p>A solenoid is the standard laboratory way of producing a uniform magnetic field. Inserting a soft iron core multiplies it many times over — the core becomes magnetised and adds its own field to the coil&apos;s.</p>
      <h3 id="h-4-7-toroid">The toroid</h3>
      <p>Bend a solenoid into a closed ring of mean radius <em>r</em> and you have a <strong>toroid</strong>, a coil of <em>N</em> turns wound on a torus. An amperian circle of radius <em>r</em> inside the winding threads the torus and encloses every turn:</p>
      <FormulaBlock latex={String.raw`B\,(2\pi r) = \mu_0 N I \quad\Longrightarrow\quad B = \mu_0 n I, \quad n = \frac{N}{2\pi r}`} />
      <ul>
        <li>An amperian circle outside the toroid — either in the central hole or beyond the outer edge — encloses <Highlight color="blue">no net current</Highlight>, so <em>B</em> = 0 there.</li>
        <li>The field is therefore <strong>confined entirely within the winding</strong>, which is why toroids are used where a field must not leak into the surroundings.</li>
        <li>Because the path length 2π<em>r</em> varies across the cross-section, the field is <em>not</em> perfectly uniform: it is slightly stronger on the inner side. A thin toroid makes this variation negligible.</li>
      </ul>
      <Expandable title="Example 4.8 — Field inside a solenoid" variant="example">
        <ProblemSolution.Problem>
          <p>A solenoid of length 0.5 m has a radius of 1 cm and is made up of 500 turns. It carries a current of 5 A. What is the magnitude of the magnetic field inside the solenoid?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The number of turns per unit length is</p>
          <FormulaBlock latex={String.raw`n = \frac{500}{0.5} = 1000\ \text{turns m}^{-1}`} />
          <p>With <em>l</em> = 0.5 m and <em>a</em> = 0.01 m the ratio <em>l</em>/<em>a</em> = 50, so <em>l</em> ≫ <em>a</em> and the long-solenoid formula applies:</p>
          <FormulaBlock latex={String.raw`B = \mu_0 n I = 4\pi\times10^{-7} \times 10^{3} \times 5 = 6.28\times10^{-3}\ \text{T}`} />
        </ProblemSolution.Solution>
      </Expandable>
      <h2 id="h-4-8">4.8 Force between Two Parallel Currents, the Ampere</h2>
      <p>A current-carrying conductor creates a field, and an external field exerts a force on a current-carrying conductor — so two conductors placed near each other must exert forces on each other. Between 1820 and 1825 Ampere studied exactly this, and the parallel-wire case is the cleanest example of his results.</p>
      <p>Let two long parallel conductors <em>a</em> and <em>b</em>, separated by a distance <em>d</em>, carry parallel currents <em>I</em><sub>a</sub> and <em>I</em><sub>b</sub>. Conductor <em>a</em> sets up a field at every point of <em>b</em> whose magnitude is</p>
      <FormulaBlock latex={String.raw`B_a = \frac{\mu_0 I_a}{2\pi d}`} />
      <p>with its direction given by the right-hand rule. The conductor <em>b</em>, carrying <em>I</em><sub>b</sub> in this field, feels a sideways force on a length <em>L</em>:</p>
      <FormulaBlock latex={String.raw`F_{ba} = I_b L B_a = \frac{\mu_0 I_a I_b}{2\pi d}\,L`} important tag="Eq. 4.17" />
      <p>The force on <em>a</em> due to <em>b</em> is equal in magnitude and opposite in direction, <em>F</em><sub>ab</sub> = −<em>F</em><sub>ba</sub> [Eq. 4.18], consistent with Newton&apos;s third law. The result is a clean statement about direction:</p>
      <KeyPoint title="Direction of the force">
        <Highlight color="yellow">Parallel currents attract; antiparallel currents repel.</Highlight> This is the opposite of electrostatics, where like charges repel — like currents attract.
      </KeyPoint>
      <p>Per unit length, the force is</p>
      <FormulaBlock latex={String.raw`f_{ba} = \frac{F_{ba}}{L} = \frac{\mu_0 I_a I_b}{2\pi d}`} tag="Eq. 4.19" />
      <ParallelWiresDiagram />
      <Callout type="important" title="Definition of the ampere">
        The ampere is the value of that steady current which, when maintained in each of two very long, straight, parallel conductors of negligible cross-section placed one metre apart in vacuum, would produce on each of them a force equal to 2 × 10⁻⁷ newtons per metre of length.
      </Callout>
      <p>This definition was adopted in 1946 and is a theoretical one. In practice the earth&apos;s field must be eliminated and very long wires replaced by multiturn coils of suitable geometry; the mechanical force itself is measured with an instrument called a <strong>current balance</strong>. The SI unit of charge follows at once: when a steady current of 1 A flows, the charge crossing a section in 1 s is <strong>one coulomb</strong> (1 C).</p>
      <Callout type="note" title="Steady currents only">
        For time-dependent currents and charges in motion Newton&apos;s third law can fail for the conductors taken alone. Momentum is still conserved once the momentum carried by the electromagnetic field is included.
      </Callout>
      <Expandable title="Example 4.9 — Force on a wire lying in the earth's field" variant="example">
        <ProblemSolution.Problem>
          <p>The horizontal component of the earth&apos;s magnetic field at a place is 3.0 × 10⁻⁵ T, directed from geographic south to geographic north. A very long straight conductor carrying 1 A is placed on a horizontal table. What is the force per unit length on it when the current flows (a) from east to west, (b) from south to north?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The force on a length <em>l</em> is <em>F</em> = <em>IlB</em> sin <em>θ</em>, so the force per unit length is <em>f</em> = <em>IB</em> sin <em>θ</em>.</p>
          <p><strong>(a) East to west.</strong> The current is perpendicular to the field, <em>θ</em> = 90°:</p>
          <FormulaBlock latex={String.raw`f = IB = 1 \times 3\times10^{-5} = 3\times10^{-5}\ \text{N m}^{-1}`} />
          <p>This is more than a hundred times the 2 × 10⁻⁷ N m⁻¹ of the definition of the ampere, which is exactly why stray fields must be eliminated when standardising the unit. The force is directed <strong>downwards</strong>, from the cross product.</p>
          <p><strong>(b) South to north.</strong> The current is parallel to the field, <em>θ</em> = 0, so <em>f</em> = 0: there is no force on the conductor.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-4-9">4.9 Torque on a Current Loop, Magnetic Dipole</h2>
      <h3 id="h-4-9-1">4.9.1 Torque on a rectangular current loop in a uniform magnetic field</h3>
      <p>A rectangular loop carrying a steady current and placed in a uniform field experiences a <Highlight color="blue">torque but no net force</Highlight>. The behaviour is the exact analogue of an electric dipole in a uniform electric field.</p>
      <p><strong>Field in the plane of the loop.</strong> The field exerts no force on the arms AD and BC, which are parallel to it. On arm AB it exerts a force <em>F</em>₁ = <em>IbB</em> into the plane of the loop; on the opposite arm CD a force <em>F</em>₂ = <em>IbB</em> out of the plane. The two are equal so the net force is zero, but they act along different lines and form a couple:</p>
      <FormulaBlock latex={String.raw`\tau = F_1\frac{a}{2} + F_2\frac{a}{2} = IbB\,\frac{a}{2} + IbB\,\frac{a}{2} = I\,(ab)\,B = IAB`} tag="Eq. 4.20" />
      <p>where <em>A</em> = <em>ab</em> is the area of the rectangle. The torque tends to rotate the loop anticlockwise.</p>
      <p><strong>Loop plane at an arbitrary angle.</strong> Let <em>θ</em> now be the angle between the field and the <em>normal</em> to the coil; the previous case corresponds to <em>θ</em> = π/2. The forces on BC and DA are equal, opposite and act along the axis of the coil, so being collinear they cancel — no net force and no torque from them. The forces on AB and CD are again equal and opposite, of magnitude <em>IbB</em>, but no longer collinear. The couple is weaker because the perpendicular distance between the forces has shrunk:</p>
      <FormulaBlock latex={String.raw`\tau = F_1\frac{a}{2}\sin\theta + F_2\frac{a}{2}\sin\theta = IabB\sin\theta = IAB\sin\theta`} important tag="Eq. 4.21" />
      <p>As <em>θ</em> → 0 the two forces close in on the same line, and both the torque and the net force vanish. The two results can be written as a single vector relation once the loop is given a magnetic moment.</p>
      <FormulaBlock latex={String.raw`\mathbf{m} = I\mathbf{A}, \qquad \boldsymbol{\tau} = \mathbf{m}\times\mathbf{B}`} important tag="Eqs. 4.22–4.23" />
      <p>The area vector <strong>A</strong> is directed by the right-hand thumb rule — curl the fingers along the current, the thumb gives <strong>A</strong> and hence <strong>m</strong>. The magnetic moment has dimensions [A][L²] and the unit A m². For a coil of <em>N</em> closely wound turns the same expression holds with</p>
      <FormulaBlock latex={String.raw`\mathbf{m} = N I \mathbf{A}`} tag="Eq. 4.24" />
      <LoopTorqueDiagram />
      <Comparison columns={[
        { title: "m parallel to B — stable", children: <ul><li>τ = 0, so the coil is in equilibrium.</li><li>Any small rotation produces a torque that pushes it back.</li><li>This is why a small magnet or compass needle settles along the field.</li></ul> },
        { title: "m antiparallel to B — unstable", children: <ul><li>τ = 0 again, so it is also an equilibrium.</li><li>Any rotation produces a torque that grows with the rotation, driving it further away.</li><li>A slight disturbance flips the dipole round to the stable position.</li></ul> },
      ]} />
      <MistakeCard mistake="A current loop in a uniform field feels a net force, just as a straight wire does." correction="Forces on opposite arms are equal and opposite, so the net force is zero; what remains is a couple — a pure torque m × B." example="A loop in a uniform field can spin but cannot be pushed along the field." />
      <Expandable title="Example 4.10 — Field, moment, torque and angular speed of a coil" variant="example">
        <ProblemSolution.Problem>
          <p>A 100-turn closely wound circular coil of radius 10 cm carries a current of 3.2 A. (a) What is the field at the centre of the coil? (b) What is its magnetic moment?</p>
          <p>The coil is placed in a vertical plane and is free to rotate about a horizontal axis coinciding with a diameter. A uniform horizontal field of 2 T exists, such that initially the axis of the coil is along the field. The coil rotates through 90° under the influence of the field. (c) What are the magnitudes of the torques in the initial and final positions? (d) What angular speed does it acquire? The moment of inertia of the coil is 0.1 kg m².</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> With <em>N</em> = 100, <em>I</em> = 3.2 A and <em>R</em> = 0.1 m, and using π × 3.2 ≈ 10,</p>
          <FormulaBlock latex={String.raw`B = \frac{\mu_0 NI}{2R} = \frac{4\pi\times10^{-7} \times 10^{2} \times 3.2}{2\times10^{-1}} = 2\times10^{-3}\ \text{T}`} />
          <p>The direction follows the right-hand thumb rule.</p>
          <p><strong>(b)</strong> The magnetic moment is</p>
          <FormulaBlock latex={String.raw`m = N I A = N I \pi r^{2} = 100 \times 3.2 \times 3.14\times10^{-2} = 10\ \text{A m}^{2}`} />
          <p><strong>(c)</strong> The torque is <em>τ</em> = <em>mB</em> sin <em>θ</em>, where <em>θ</em> is the angle between <strong>m</strong> and <strong>B</strong>. Initially <em>θ</em> = 0, so the torque <em>τ</em><sub>i</sub> = 0. Finally <em>θ</em> = 90°, so</p>
          <FormulaBlock latex={String.raw`\tau_f = mB = 10 \times 2 = 20\ \text{N m}`} />
          <p><strong>(d)</strong> The torque does work as the coil turns. With <em>τ</em> = <em>I</em><sub>m</sub> d<em>ω</em>/d<em>t</em>, where <em>I</em><sub>m</sub> is the moment of inertia, and the chain rule d<em>ω</em>/d<em>t</em> = <em>ω</em> d<em>ω</em>/d<em>θ</em>,</p>
          <FormulaBlock latex={String.raw`I_{\text{m}}\,\omega\,d\omega = mB\sin\theta\,d\theta \quad\Longrightarrow\quad \tfrac{1}{2}I_{\text{m}}\omega^{2} = mB \quad\Longrightarrow\quad \omega = \sqrt{\frac{2mB}{I_{\text{m}}}} = 20\ \text{rad s}^{-1}`} />
          <p>Equivalently, the rotational kinetic energy gained equals the work done by the torque, 20 J. The result is independent of how the rotation is timed.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 4.11 — Three questions about loops in a field" variant="example">
        <ProblemSolution.Problem>
          <p>(a) A current-carrying circular loop lies on a smooth horizontal plane. Can a uniform magnetic field be set up so that the loop turns about itself, i.e. about the vertical axis? (b) A current-carrying circular loop lies in an external field and is free to turn: what is its orientation of stable equilibrium, and why is the flux of the total field maximum there? (c) A flexible loop of irregular shape carrying a current is placed in an external field. Why does it become circular?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a) No.</strong> That would need <strong>τ</strong> along the vertical. But <strong>τ</strong> = <em>I</em><strong>A</strong> × <strong>B</strong>, and <strong>A</strong> of a horizontal loop is itself vertical — so for any <strong>B</strong> the torque lies <Highlight color="pink">in the plane of the loop</Highlight>, never along its normal.</p>
          <p><strong>(b)</strong> The stable orientation is the one in which <strong>A</strong> points along the external field. Then the field produced by the loop is also along the external field, both normal to the plane of the loop, so the two add and the flux of the total field through the loop is a maximum.</p>
          <p><strong>(c)</strong> A circular shape encloses the greatest area for a given perimeter, so it maximises the flux through the loop and lowers the energy. The plane settles normal to the field for the same reason.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-4-9-2">4.9.2 Circular current loop as a magnetic dipole</h3>
      <p>The axial field of Eq. 4.11 simplifies far from the loop. Drop <em>R</em>² beside <em>x</em>², use <em>A</em> = π<em>R</em>² and <em>m</em> = <em>IA</em>:</p>
      <FormulaBlock latex={String.raw`B \simeq \frac{\mu_0 I R^{2}}{2x^{3}} = \frac{\mu_0}{4\pi}\,\frac{2m}{x^{3}} \qquad (x \gg R)`} tag="Eq. 4.25(a)" />
      <FormulaBlock latex={String.raw`B \simeq \frac{\mu_0}{4\pi}\,\frac{m}{x^{3}} \qquad \text{(in the plane of the loop, } x \gg R\text{)}`} tag="Eq. 4.25(b)" />
      <p>Compare the axial result with the field of an electric dipole at a point on its axis. The two are identical under the substitutions</p>
      <FormulaBlock latex={String.raw`\mu_0 \rightarrow \frac{1}{\varepsilon_0}, \qquad \mathbf{m} \rightarrow \mathbf{p}_e, \qquad \mathbf{B} \rightarrow \mathbf{E}`} />
      <p>The correspondence extends to any planar loop: a planar current loop is equivalent to a magnetic dipole of moment <strong>m</strong> = <em>I</em><strong>A</strong>, exactly as an electric dipole has moment <strong>p</strong><sub>e</sub>. But there is a fundamental difference. An electric dipole is built from two elementary units, the charges; in magnetism the current loop itself is the elementary object, and the magnetic analogue of the electric charge — the magnetic monopole — has never been found.</p>
      <p>A current loop therefore does both things a magnetic needle does: it produces a dipole-like field, and it feels a torque in an external field. That led Ampere to propose that <Highlight color="yellow">all magnetism is due to circulating currents</Highlight>. The idea is partly right, and no monopole has been seen; but elementary particles such as the electron and the proton also carry an intrinsic magnetic moment that circulating currents cannot account for.</p>
      <h2 id="h-4-10">4.10 The Moving Coil Galvanometer</h2>
      <p>How do we know that a circuit carries 1.5 A, or that 1.2 V is dropped across a resistor? The instrument that answers both questions is the <strong>moving coil galvanometer</strong> (MCG), and its principle is exactly the torque of §4.9.</p>
      <p>The galvanometer has a coil of many turns, free to rotate about a fixed axis in a uniform <strong>radial</strong> magnetic field. A cylindrical soft iron core does two jobs: it makes the field radial and it strengthens it. Because the field is radial by construction, the plane of the coil is always parallel to <em>B</em>, so sin <em>θ</em> = 1 and the torque is simply</p>
      <FormulaBlock latex={String.raw`\tau = N I A B`} />
      <p>A spring supplies a counter torque <em>kφ</em>, where <em>k</em> is the torsional constant — the restoring torque per unit twist — and <em>φ</em> the deflection. At equilibrium the two torques balance, <em>kφ</em> = <em>NIAB</em>, so</p>
      <FormulaBlock latex={String.raw`\phi = \left(\frac{NAB}{k}\right) I`} important tag="Eq. 4.26" />
      <p>The bracket is a constant of the instrument, so <Highlight color="yellow">deflection is proportional to current</Highlight> and the scale can be graduated to read current directly.</p>
      <GalvanometerDiagram />
      <p>Used as a <strong>detector</strong>, for instance in a Wheatstone bridge, the pointer rests in the middle of the scale when no current flows and swings either way with the direction of the current. It cannot, however, be used as an ammeter as it stands, for two reasons:</p>
      <ul>
        <li>It is extremely sensitive — a full-scale deflection needs only a current of the order of microamperes.</li>
        <li>To measure current it must be connected in series, and its large resistance would then change the very current being measured.</li>
      </ul>
      <Callout type="tip" title="Current sensitivity">
        The <strong>current sensitivity</strong> is the deflection per unit current, <em>φ</em>/<em>I</em> = <em>NAB</em>/<em>k</em> [Eq. 4.27]. The easiest way for a manufacturer to raise it is to increase the number of turns <em>N</em>, so instruments are offered in a range of sensitivities and chosen to suit the experiment.
      </Callout>

      <h3 id="h-4-10-units">Converting a galvanometer into an ammeter or a voltmeter</h3>
      <p><strong>Ammeter.</strong> A small <strong>shunt resistance</strong> <em>r</em><sub>s</sub> is connected in parallel with the coil, so that most of the current bypasses the galvanometer. The combination has resistance</p>
      <FormulaBlock latex={String.raw`R = \frac{R_G\,r_s}{R_G + r_s} \simeq r_s \qquad (R_G \gg r_s)`} />
      <p>If <em>r</em><sub>s</sub> is small compared with the resistance <em>R</em><sub>c</sub> of the rest of the circuit, inserting the instrument hardly changes the current at all. The scale is then calibrated to read the total current.</p>
      <p><strong>Voltmeter.</strong> The instrument is connected in parallel with the section whose voltage is wanted, and a large resistance <em>R</em> is put in series with the coil so that it draws very little current and disturbs the circuit by well under one per cent. Its resistance is now</p>
      <FormulaBlock latex={String.raw`R_G + R \simeq R \quad \text{(large)}`} />
      <p>and the <strong>voltage sensitivity</strong>, the deflection per unit voltage, is</p>
      <FormulaBlock latex={String.raw`\frac{\phi}{V} = \frac{NAB}{k}\,\frac{I}{V} = \frac{NAB}{kR}`} tag="Eq. 4.28" />
      <Callout type="warning" title="Current sensitivity is not voltage sensitivity">
        Double the number of turns and the current sensitivity doubles. But the resistance of the coil also roughly doubles, since it is proportional to the length of wire — so the voltage sensitivity <em>φ</em>/<em>V</em> = <em>NAB</em>/<em>kR</em> stays the same. That is why the modification needed to make an ammeter is different from the one needed to make a voltmeter.
      </Callout>
      <Expandable title="Example 4.12 — Reading a current with three different ammeters" variant="example">
        <ProblemSolution.Problem>
          <p>A cell of emf 3.0 V (negligible internal resistance) is connected to a 3.0 Ω resistor in series with an ammeter. What is the current read if the ammeter is (a) a galvanometer of resistance <em>R</em><sub>G</sub> = 60.00 Ω; (b) the same galvanometer converted to an ammeter by a shunt <em>r</em><sub>s</sub> = 0.02 Ω; (c) an ideal ammeter of zero resistance?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> The total resistance is 3 + 60 = 63 Ω, so</p>
          <FormulaBlock latex={String.raw`I = \frac{3}{63} = 0.048\ \text{A}`} />
          <p><strong>(b)</strong> The galvanometer in parallel with the shunt has resistance</p>
          <FormulaBlock latex={String.raw`\frac{R_G r_s}{R_G + r_s} = \frac{60 \times 0.02}{60 + 0.02} \simeq 0.02\ \Omega`} />
          <p>so the total resistance is 0.02 + 3 = 3.02 Ω and</p>
          <FormulaBlock latex={String.raw`I = \frac{3}{3.02} = 0.99\ \text{A}`} />
          <p><strong>(c)</strong> For the ideal ammeter the total resistance is just 3 Ω:</p>
          <FormulaBlock latex={String.raw`I = \frac{3}{3} = 1.00\ \text{A}`} />
          <p>The shunt has reduced the disturbance of the measurement from 4.8% to about 1%.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-4-exercises">Exercises</h2>
      <p>Every question below can be answered with the six formulas of this chapter: the field at the centre of a coil, the field of a long wire, the force on a current element, the force between parallel wires, the torque on a coil and the field inside a solenoid.</p>
      <Expandable title="Exercise 4.1 – 4.13" variant="exercise">
        <ExerciseQa
          questions={[
            <span key="e1">A circular coil of wire consisting of 100 turns, each of radius 8.0 cm, carries a current of 0.40 A. What is the magnitude of the magnetic field <em>B</em> at the centre of the coil?</span>,
            <span key="e2">A long straight wire carries a current of 35 A. What is the magnitude of the field <em>B</em> at a point 20 cm from the wire?</span>,
            <span key="e3">A long straight wire in the horizontal plane carries a current of 50 A in the north to south direction. Give the magnitude and direction of <em>B</em> at a point 2.5 m east of the wire.</span>,
            <span key="e4">A horizontal overhead power line carries a current of 90 A in the east to west direction. What are the magnitude and direction of the magnetic field due to the current 1.5 m below the line?</span>,
            <span key="e5">What is the magnitude of the magnetic force per unit length on a wire carrying a current of 8 A and making an angle of 30° with the direction of a uniform magnetic field of 0.15 T?</span>,
            <span key="e6">A 3.0 cm wire carrying a current of 10 A is placed inside a solenoid perpendicular to its axis. The magnetic field inside the solenoid is 0.27 T. What is the magnetic force on the wire?</span>,
            <span key="e7">Two long and parallel straight wires A and B carrying currents of 8.0 A and 5.0 A in the same direction are separated by a distance of 4.0 cm. Estimate the force on a 10 cm section of wire A.</span>,
            <span key="e8">A closely wound solenoid 80 cm long has 5 layers of windings of 400 turns each. Its diameter is 1.8 cm. If the current carried is 8.0 A, estimate the magnitude of <em>B</em> inside the solenoid near its centre.</span>,
            <span key="e9">A square coil of side 10 cm consists of 20 turns and carries a current of 12 A. The coil is suspended vertically and the normal to its plane makes an angle of 30° with a uniform horizontal magnetic field of 0.80 T. What is the magnitude of the torque experienced by the coil?</span>,
            <span key="e10">Two moving coil meters M₁ and M₂ have <em>R</em>₁ = 10 Ω, <em>N</em>₁ = 30, <em>A</em>₁ = 3.6 × 10⁻³ m², <em>B</em>₁ = 0.25 T and <em>R</em>₂ = 14 Ω, <em>N</em>₂ = 42, <em>A</em>₂ = 1.8 × 10⁻³ m², <em>B</em>₂ = 0.50 T. The spring constants are identical. Determine the ratio of (a) current sensitivity and (b) voltage sensitivity of M₂ and M₁.</span>,
            <span key="e11">In a chamber a uniform magnetic field of 6.5 G (1 G = 10⁻⁴ T) is maintained. An electron is shot into the field with a speed of 4.8 × 10⁶ m s⁻¹ normal to the field. Explain why the path of the electron is a circle, and determine the radius of the orbit. (<em>e</em> = 1.5 × 10⁻¹⁹ C, <em>m</em><sub>e</sub> = 9.1 × 10⁻³¹ kg, as printed in this edition)</span>,
            <span key="e12">In Exercise 4.11 obtain the frequency of revolution of the electron in its circular orbit. Does the answer depend on the speed of the electron? Explain.</span>,
            <span key="e13">(a) A circular coil of 30 turns and radius 8.0 cm carrying a current of 6.0 A is suspended vertically in a uniform horizontal magnetic field of 1.0 T. The field lines make an angle of 60° with the normal to the coil. Calculate the magnitude of the counter torque that must be applied to prevent the coil from turning. (b) Would the answer change if the circular coil were replaced by a planar coil of irregular shape enclosing the same area, all other particulars unaltered?</span>,
          ]}
          answers={[
            <span key="a1"><em>B</em> = μ₀<em>NI</em>/2<em>R</em> = (4π × 10⁻⁷ × 100 × 0.40)/(2 × 0.08) = <strong>3.1 × 10⁻⁴ T</strong>.</span>,
            <span key="a2"><em>B</em> = μ₀<em>I</em>/2π<em>r</em> = (4π × 10⁻⁷ × 35)/(2π × 0.2) = <strong>3.5 × 10⁻⁵ T</strong>.</span>,
            <span key="a3"><em>B</em> = 2 × 10⁻⁷ × 50/2.5 = <strong>4 × 10⁻⁶ T</strong>, directed <strong>vertically upward</strong> (current southward, point to the east).</span>,
            <span key="a4"><em>B</em> = 2 × 10⁻⁷ × 90/1.5 = <strong>1.2 × 10⁻⁵ T</strong>, directed <strong>towards the south</strong>.</span>,
            <span key="a5"><em>f</em> = <em>IB</em> sin <em>θ</em> = 8 × 0.15 × sin 30° = <strong>0.60 N m⁻¹</strong>.</span>,
            <span key="a6"><em>F</em> = <em>IlB</em> = 10 × 0.03 × 0.27 = <strong>8.1 × 10⁻² N</strong>, perpendicular to both the wire and the axis.</span>,
            <span key="a7"><em>F</em> = μ₀<em>I</em><sub>a</sub><em>I</em><sub>b</sub><em>L</em>/2π<em>d</em> = (2 × 10⁻⁷ × 8 × 5 × 0.1)/0.04 = <strong>2 × 10⁻⁵ N</strong>, <strong>attractive</strong> since the currents are parallel.</span>,
            <span key="a8"><em>n</em> = (5 × 400)/0.8 = 2500 turns m⁻¹, so <em>B</em> = μ₀<em>nI</em> = 4π × 10⁻⁷ × 2500 × 8 = <strong>2.5 × 10⁻² T</strong>. The diameter is not needed.</span>,
            <span key="a9"><em>τ</em> = <em>NIAB</em> sin <em>θ</em> = 20 × 12 × (0.1)² × 0.80 × sin 30° = <strong>0.96 N m</strong>.</span>,
            <span key="a10">(a) Current sensitivity ∝ <em>NAB</em>, so the ratio is (42 × 1.8 × 10⁻³ × 0.50)/(30 × 3.6 × 10⁻³ × 0.25) = <strong>1.4</strong>. (b) Voltage sensitivity ∝ <em>NAB</em>/<em>R</em>, so the ratio is 1.4 × (10/14) = <strong>1</strong>.</span>,
            <span key="a11">The force <em>qvB</em> is always perpendicular to <em>v</em>, so it supplies only a centripetal force and the speed stays constant — a circle. <em>r</em> = <em>mv</em>/<em>eB</em> = (9.1 × 10⁻³¹ × 4.8 × 10⁶)/(1.5 × 10⁻¹⁹ × 6.5 × 10⁻⁴) = <strong>4.5 × 10⁻² m ≈ 4.5 cm</strong>.</span>,
            <span key="a12"><em>ν</em> = <em>eB</em>/2π<em>m</em><sub>e</sub> = (1.5 × 10⁻¹⁹ × 6.5 × 10⁻⁴)/(2π × 9.1 × 10⁻³¹) = <strong>1.7 × 10⁷ Hz ≈ 17 MHz</strong>. <strong>No</strong> — <em>ν</em> contains neither <em>v</em> nor <em>r</em>, so it is the same for every speed; a faster electron simply circles in a larger orbit.</span>,
            <span key="a13">(a) <em>τ</em> = <em>NIAB</em> sin <em>θ</em> = 30 × 6 × π(0.08)² × 1.0 × sin 60° ≈ <strong>3.1 N m</strong>; the counter torque must equal this. (b) <strong>No</strong> — the torque depends only on the area enclosed, not on the shape of the loop, and the area is unchanged.</span>,
          ]}
        />
      </Expandable>
    </>
  );
}
