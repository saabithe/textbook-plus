import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Stepper } from "@/components/content/Stepper";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { CycleDiagram } from "@/components/content/process/CycleDiagram";
import { RevealAnswer } from "@/components/content/process/RevealAnswer";

const D2R = Math.PI / 180;

function pt(cx: number, cy: number, r: number, deg: number) {
  return { x: cx + r * Math.cos(deg * D2R), y: cy - r * Math.sin(deg * D2R) };
}

function waveLine(phase: number, x0: number, w: number, y0: number, amp: number) {
  const pts: string[] = [];
  for (let i = 0; i <= 96; i++) {
    const wt = (i / 96) * 4 * Math.PI;
    pts.push(`${(x0 + (i / 96) * w).toFixed(1)},${(y0 - amp * Math.sin(wt + phase)).toFixed(1)}`);
  }
  return pts.join(" ");
}

function resonanceLine(r: number) {
  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const w = 0.4e6 + (i / 120) * 1.2e6;
    const im = 100 / Math.sqrt(r * r + Math.pow(w * 1e-3 - 1 / (w * 1e-9), 2));
    pts.push(`${(55 + (i / 120) * 320).toFixed(1)},${(190 - (im / 1.1) * 160).toFixed(1)}`);
  }
  return pts.join(" ");
}

function Figure({ title, caption, children }: { title: string; caption?: ReactNode; children: ReactNode }) {
  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-border/40 bg-card">
      <div className="border-b border-border/40 bg-muted/20 px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
        {title}
      </div>
      <div className="overflow-x-auto px-3 py-3">
        <div className="min-w-[340px]">{children}</div>
      </div>
      {caption && (
        <figcaption className="px-4 pb-3 text-center text-xs leading-relaxed text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}

function ElementFigures({ kind }: { kind: "R" | "L" | "C" }) {
  const lead = kind === "C" ? 90 : kind === "L" ? -90 : 0;
  const phase = lead * D2R;
  const vDeg = 55;
  const iDeg = vDeg + lead;
  const ox = 62;
  const oy = 118;
  const vTip = pt(ox, oy, 74, vDeg);
  const iTip = pt(ox, oy, 60, iDeg);
  const a1 = pt(ox, oy, 30, vDeg);
  const a2 = pt(ox, oy, 30, iDeg);
  const title =
    kind === "R"
      ? "Pure resistor — v and i are in phase"
      : kind === "L"
        ? "Pure inductor — current lags voltage by π/2"
        : "Pure capacitor — current leads voltage by π/2";
  const caption =
    kind === "R"
      ? "Figs. 7.2, 7.4: the phasors V and I point in the same direction at all times. The minima, zero and maxima of v and i occur at the same respective times."
      : kind === "L"
        ? "Fig. 7.6: the current phasor I is π/2 behind V; the current reaches its maximum one-quarter of a period later than the voltage."
        : "Fig. 7.8: the current phasor I is π/2 ahead of V; the current reaches its maximum one-quarter of a period earlier than the voltage.";
  return (
    <Figure title={title} caption={caption}>
      <svg viewBox="0 0 560 200" className="w-full" role="img" aria-label={`Phasor diagram and waveforms for a ${title}`}>
        <defs>
          <marker id={`pv-${kind}`} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#8b5cf6" /></marker>
          <marker id={`pi-${kind}`} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#f59e0b" /></marker>
        </defs>
        <circle cx={ox} cy={oy} r="74" fill="none" stroke="var(--border)" strokeDasharray="3 4" />
        <line x1={ox} y1="18" x2={ox} y2="190" stroke="var(--border)" strokeDasharray="3 4" />
        <line x1={ox} y1={oy} x2="190" y2={oy} stroke="var(--border)" strokeDasharray="3 4" />
        <line x1={ox} y1={oy} x2={vTip.x} y2={vTip.y} stroke="#8b5cf6" strokeWidth="3" markerEnd={`url(#pv-${kind})`} />
        <line x1={ox} y1={oy} x2={iTip.x} y2={iTip.y} stroke="#f59e0b" strokeWidth="3" markerEnd={`url(#pi-${kind})`} />
        {lead !== 0 && (
          <>
            <path d={`M ${a1.x} ${a1.y} A 30 30 0 0 ${lead > 0 ? 1 : 0} ${a2.x} ${a2.y}`} fill="none" stroke="var(--muted-foreground)" strokeWidth="1.5" />
            <text x={ox + 34} y={oy - 12} fontSize="11" fill="var(--muted-foreground)" fontWeight="700">φ = π/2</text>
          </>
        )}
        <text x={vTip.x + (iDeg > vDeg ? 4 : -14)} y={vTip.y - 8} fontSize="12" fontWeight="800" fill="#8b5cf6">V</text>
        <text x={iTip.x + 4} y={iTip.y + (lead > 0 ? -6 : 14)} fontSize="12" fontWeight="800" fill="#f59e0b">I</text>
        <line x1="300" y1="110" x2="552" y2="110" stroke="var(--border)" strokeWidth="1" />
        <line x1="300" y1="170" x2="300" y2="30" stroke="var(--border)" strokeWidth="1" />
        <polyline points={waveLine(0, 300, 250, 110, 38)} fill="none" stroke="#8b5cf6" strokeWidth="2.5" />
        <polyline points={waveLine(phase, 300, 250, 110, 38)} fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <text x="536" y="126" fontSize="11" fill="var(--muted-foreground)">ωt</text>
        <text x="304" y="42" fontSize="11" fontWeight="700" fill="#8b5cf6">v</text>
        <text x="304" y="166" fontSize="11" fontWeight="700" fill="#f59e0b">i</text>
      </svg>
    </Figure>
  );
}
function SeriesLcrCircuit() {
  return (
    <Figure
      title="A series LCR circuit connected to an ac source"
      caption="Fig. 7.10: the same current i flows through the resistor, the inductor and the capacitor at every instant. The source voltage is v = v_m sin ωt."
    >
      <svg viewBox="0 0 420 175" className="w-full" role="img" aria-label="Series circuit: ac source, resistor R, inductor L and capacitor C connected in a single loop">
        <path d="M60 40 H175 M235 40 H350 V62 M350 112 V132 H215 M185 132 H60 M60 44 V62 M60 108 V132" fill="none" stroke="var(--foreground)" strokeWidth="2" />
        <rect x="175" y="26" width="60" height="28" rx="3" fill="none" stroke="var(--foreground)" strokeWidth="2" />
        <text x="205" y="20" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--foreground)">R</text>
        <path d="M350 62 a8 8 0 0 0 0 16 a8 8 0 0 0 0 16 a8 8 0 0 0 0 16 a8 8 0 0 0 0 16" fill="none" stroke="var(--foreground)" strokeWidth="2" />
        <text x="366" y="92" fontSize="12" fontWeight="800" fill="var(--foreground)">L</text>
        <line x1="205" y1="116" x2="205" y2="148" stroke="var(--foreground)" strokeWidth="2.5" />
        <line x1="195" y1="116" x2="195" y2="148" stroke="var(--foreground)" strokeWidth="2.5" />
        <text x="200" y="166" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--foreground)">C</text>
        <circle cx="60" cy="85" r="22" fill="none" stroke="var(--foreground)" strokeWidth="2" />
        <path d="M50 85 q5 -9 10 0 q5 9 10 0" fill="none" stroke="var(--foreground)" strokeWidth="2" />
        <text x="60" y="126" textAnchor="middle" fontSize="10" fill="var(--muted-foreground)">ac source</text>
        <text x="86" y="60" fontSize="10" fill="var(--muted-foreground)">v = v</text>
        <text x="126" y="63" fontSize="8" fill="var(--muted-foreground)">m</text>
        <text x="132" y="60" fontSize="10" fill="var(--muted-foreground)">sin ωt</text>
        <line x1="262" y1="34" x2="316" y2="34" stroke="#f59e0b" strokeWidth="2" />
        <path d="M316 30 l8 4 l-8 4 z" fill="#f59e0b" />
        <text x="289" y="26" textAnchor="middle" fontSize="11" fontWeight="800" fill="#f59e0b">i</text>
      </svg>
    </Figure>
  );
}

function LcrPhasorAndImpedance() {
  const ox = 52;
  const oy = 120;
  return (
    <Figure
      title="Phasor addition and the impedance triangle"
      caption="Figs. 7.11, 7.12, 7.13: V is the hypotenuse of a right triangle with sides V_R and (V_C + V_L). Dividing every side by i_m turns the same triangle into the impedance diagram, with Z as hypotenuse and φ the angle between V_R (i.e. I) and V."
    >
      <svg viewBox="0 0 520 220" className="w-full" role="img" aria-label="Left: phasors V_R, V_L, V_C adding to V. Right: impedance triangle with sides R and X_C minus X_L and hypotenuse Z">
        <defs>
          <marker id="lcr-v" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#8b5cf6" /></marker>
          <marker id="lcr-i" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#f59e0b" /></marker>
          <marker id="lcr-g" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted-foreground)" /></marker>
        </defs>
        <text x="16" y="16" fontSize="11" fontWeight="800" fill="var(--muted-foreground)">(a) PHASORS — CASE X_C &gt; X_L</text>
        <line x1="20" y1={oy} x2="190" y2={oy} stroke="var(--border)" strokeDasharray="3 4" />
        <line x1={ox} y1={oy} x2="152" y2={oy} stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#lcr-i)" />
        <line x1={ox} y1={oy} x2="152" y2="76" stroke="var(--muted-foreground)" strokeWidth="2" markerEnd="url(#lcr-g)" />
        <line x1={ox} y1={oy} x2="152" y2="186" stroke="var(--muted-foreground)" strokeWidth="2" markerEnd="url(#lcr-g)" />
        <line x1={ox} y1={oy} x2="152" y2="142" stroke="#8b5cf6" strokeWidth="3" markerEnd="url(#lcr-v)" />
        <line x1="152" y1="76" x2="152" y2="186" stroke="var(--border)" strokeDasharray="3 3" />
        <text x="160" y="72" fontSize="11" fontWeight="700" fill="var(--muted-foreground)">V_L</text>
        <text x="160" y="190" fontSize="11" fontWeight="700" fill="var(--muted-foreground)">V_C</text>
        <text x="128" y="112" fontSize="11" fontWeight="700" fill="#f59e0b">V_R , I</text>
        <text x="86" y="162" fontSize="11" fontWeight="700" fill="#8b5cf6">V</text>
        <text x="16" y="212" fontSize="10" fill="var(--muted-foreground)">current leads the source voltage</text>
        <text x="290" y="16" fontSize="11" fontWeight="800" fill="var(--muted-foreground)">(b) IMPEDANCE TRIANGLE</text>
        <line x1="300" y1="160" x2="410" y2="160" stroke="var(--muted-foreground)" strokeWidth="2" />
        <line x1="410" y1="160" x2="410" y2="112" stroke="var(--muted-foreground)" strokeWidth="2" />
        <line x1="300" y1="160" x2="410" y2="112" stroke="#8b5cf6" strokeWidth="3" markerEnd="url(#lcr-v)" />
        <text x="348" y="178" fontSize="11" fontWeight="700" fill="var(--muted-foreground)">R</text>
        <text x="418" y="140" fontSize="11" fontWeight="700" fill="var(--muted-foreground)">X_C − X_L</text>
        <text x="336" y="130" fontSize="11" fontWeight="700" fill="#8b5cf6">Z</text>
        <path d="M 324 160 A 24 24 0 0 0 322 146" fill="none" stroke="var(--foreground)" strokeWidth="1.5" />
        <text x="330" y="154" fontSize="11" fontWeight="700" fill="var(--foreground)">φ</text>
        <text x="290" y="212" fontSize="10" fill="var(--muted-foreground)">tan φ = (X_C − X_L) / R</text>
      </svg>
    </Figure>
  );
}

function ResonanceCurve() {
  return (
    <Figure
      title="Variation of current amplitude i_m with ω"
      caption="Fig. 7.14: L = 1.00 mH, C = 1.00 nF, v_m = 100 V, and ω₀ = 1.00 × 10⁶ rad/s. For R = 100 Ω the peak is twice as high as for R = 200 Ω, because i_m = v_m / R at resonance."
    >
      <svg viewBox="0 0 400 235" className="w-full" role="img" aria-label="Resonance curves of current amplitude against angular frequency for two resistance values, peaking at the same resonant frequency">
        <line x1="55" y1="20" x2="55" y2="190" stroke="var(--foreground)" strokeWidth="1.5" />
        <line x1="55" y1="190" x2="380" y2="190" stroke="var(--foreground)" strokeWidth="1.5" />
        <line x1="215" y1="190" x2="215" y2="30" stroke="var(--muted-foreground)" strokeDasharray="4 4" />
        <polyline points={resonanceLine(100)} fill="none" stroke="#8b5cf6" strokeWidth="2.5" />
        <polyline points={resonanceLine(200)} fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <text x="46" y="26" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--foreground)">i</text>
        <text x="52" y="33" textAnchor="end" fontSize="8" fontWeight="700" fill="var(--foreground)">m</text>
        <text x="366" y="184" textAnchor="end" fontSize="11" fill="var(--muted-foreground)">ω</text>
        <text x="215" y="207" textAnchor="middle" fontSize="10" fill="var(--muted-foreground)">ω₀</text>
        <text x="140" y="207" textAnchor="middle" fontSize="9" fill="var(--muted-foreground)">0.5ω₀</text>
        <text x="295" y="207" textAnchor="middle" fontSize="9" fill="var(--muted-foreground)">1.5ω₀</text>
        <text x="230" y="44" fontSize="10" fontWeight="700" fill="#8b5cf6">R = 100 Ω</text>
        <text x="230" y="58" fontSize="10" fontWeight="700" fill="#f59e0b">R = 200 Ω</text>
        <text x="58" y="182" fontSize="9" fill="var(--muted-foreground)">0</text>
      </svg>
    </Figure>
  );
}
function PowerFactorDiagram() {
  const ox = 54;
  const oy = 84;
  const vTip = { x: 286, y: 84 };
  const iTip = pt(ox, oy, 168, -38);
  return (
    <Figure
      title="Splitting the current into power and wattless components"
      caption="Fig. 7.15: I is resolved into I_p along the applied voltage V — the power component — and I_q perpendicular to it — the wattless component, for which no power is lost. Connecting a capacitor of suitable value in parallel supplies an equal leading I′_q that cancels I_q, pushing the power factor towards 1."
    >
      <svg viewBox="0 0 340 210" className="w-full" role="img" aria-label="Voltage phasor with the current phasor resolved into a component along the voltage and a perpendicular wattless component">
        <defs>
          <marker id="pf-v" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#8b5cf6" /></marker>
          <marker id="pf-i" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#f59e0b" /></marker>
          <marker id="pf-g" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted-foreground)" /></marker>
        </defs>
        <line x1={ox} y1={oy} x2={vTip.x} y2={vTip.y} stroke="#8b5cf6" strokeWidth="3" markerEnd="url(#pf-v)" />
        <line x1={ox} y1={oy} x2={iTip.x} y2={iTip.y} stroke="#f59e0b" strokeWidth="3" markerEnd="url(#pf-i)" />
        <line x1={ox} y1={oy} x2={iTip.x} y2={oy} stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#pf-i)" />
        <line x1={iTip.x} y1={oy} x2={iTip.x} y2={iTip.y} stroke="var(--muted-foreground)" strokeWidth="2" markerEnd="url(#pf-g)" />
        <line x1={vTip.x} y1={oy - 6} x2={vTip.x} y2={oy + 6} stroke="#8b5cf6" strokeWidth="2" />
        <text x={vTip.x + 6} y={oy + 4} fontSize="12" fontWeight="800" fill="#8b5cf6">V</text>
        <text x={iTip.x + 6} y={iTip.y + 6} fontSize="12" fontWeight="800" fill="#f59e0b">I</text>
        <text x="140" y={oy - 8} fontSize="11" fontWeight="700" fill="#f59e0b">I</text>
        <text x="152" y={oy - 4} fontSize="8" fontWeight="700" fill="#f59e0b">p</text>
        <text x={iTip.x + 8} y={oy + 40} fontSize="11" fontWeight="700" fill="var(--muted-foreground)">I</text>
        <text x={iTip.x + 18} y={oy + 44} fontSize="8" fontWeight="700" fill="var(--muted-foreground)">q</text>
        <path d="M 104 84 A 50 50 0 0 1 108 106" fill="none" stroke="var(--foreground)" strokeWidth="1.5" />
        <text x="112" y="102" fontSize="11" fontWeight="700" fill="var(--foreground)">φ</text>
        <text x="54" y="196" fontSize="10" fill="var(--muted-foreground)">P = I_p V , cos φ = I_p / I</text>
      </svg>
    </Figure>
  );
}

function TransformerDiagram() {
  return (
    <Figure
      title="A transformer — two coils on a soft-iron core"
      caption="Fig. 7.16: the primary coil of N_p turns is wound on the same laminated soft-iron core as the secondary coil of N_s turns, so the alternating flux produced by the primary links the secondary. The coils may be wound one on top of the other or on separate limbs of the core."
    >
      <svg viewBox="0 0 400 200" className="w-full" role="img" aria-label="Transformer: primary coil on the left limb of a laminated iron core, secondary coil on the right limb">
        <rect x="170" y="25" width="60" height="150" fill="none" stroke="var(--foreground)" strokeWidth="2" />
        <rect x="184" y="39" width="32" height="122" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 3" />
        <path d="M170 50 a10 9 0 0 0 0 18 a10 9 0 0 0 0 18 a10 9 0 0 0 0 18 a10 9 0 0 0 0 18 a10 9 0 0 0 0 18" fill="none" stroke="#8b5cf6" strokeWidth="2.5" />
        <path d="M230 50 a10 9 0 0 1 0 18 a10 9 0 0 1 0 18 a10 9 0 0 1 0 18 a10 9 0 0 1 0 18 a10 9 0 0 1 0 18" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <path d="M170 50 H96 V78 M96 122 V150 H170" fill="none" stroke="var(--foreground)" strokeWidth="1.5" />
        <circle cx="96" cy="100" r="20" fill="none" stroke="var(--foreground)" strokeWidth="1.5" />
        <path d="M87 100 q4.5 -8 9 0 q4.5 8 9 0" fill="none" stroke="var(--foreground)" strokeWidth="1.5" />
        <path d="M230 50 H310 V82 M310 118 V150 H230" fill="none" stroke="var(--foreground)" strokeWidth="1.5" />
        <rect x="300" y="82" width="20" height="36" fill="none" stroke="var(--foreground)" strokeWidth="1.5" />
        <text x="140" y="94" textAnchor="end" fontSize="11" fontWeight="800" fill="#8b5cf6">N_p</text>
        <text x="262" y="94" fontSize="11" fontWeight="800" fill="#f59e0b">N_s</text>
        <text x="96" y="128" textAnchor="middle" fontSize="10" fill="var(--muted-foreground)">V_p</text>
        <text x="336" y="104" textAnchor="middle" fontSize="10" fill="var(--muted-foreground)">V_s</text>
        <text x="200" y="188" textAnchor="middle" fontSize="10" fill="var(--muted-foreground)">soft-iron core</text>
      </svg>
    </Figure>
  );
}

function BulbCoilCircuit() {
  return (
    <Figure
      title="A bulb and a coil in series with an ac source"
      caption="Fig. 7.9: closing the key makes the bulb glow. Inserting an iron rod into the coil magnetises the iron and raises the inductance, so the inductive reactance grows, more of the source voltage appears across the coil and the bulb dims."
    >
      <svg viewBox="0 0 380 165" className="w-full" role="img" aria-label="An ac source in series with a bulb and a coil, with an iron rod being inserted into the coil">
        <path d="M60 40 V57 M60 97 V120 H320 V112 M320 112 a10 9 0 0 1 0 -18 a10 9 0 0 1 0 -18 a10 9 0 0 1 0 -18 a10 9 0 0 1 0 -18 M60 40 H160 M200 40 H320" fill="none" stroke="var(--foreground)" strokeWidth="2" />
        <circle cx="180" cy="40" r="20" fill="none" stroke="var(--foreground)" strokeWidth="2" />
        <path d="M172 32 L188 48 M188 32 L172 48" fill="none" stroke="var(--foreground)" strokeWidth="1.5" />
        <circle cx="60" cy="77" r="20" fill="none" stroke="var(--foreground)" strokeWidth="2" />
        <path d="M52 77 q4 -10 8 0 q4 10 8 0" fill="none" stroke="var(--foreground)" strokeWidth="2" />
        <text x="86" y="81" fontSize="10" fill="var(--muted-foreground)">ac source</text>
        <text x="180" y="78" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--muted-foreground)">bulb</text>
        <text x="338" y="80" fontSize="10" fontWeight="700" fill="var(--muted-foreground)">coil, L</text>
        <rect x="296" y="6" width="52" height="12" rx="2" fill="var(--muted)" stroke="var(--foreground)" strokeWidth="1.5" />
        <line x1="322" y1="20" x2="322" y2="31" stroke="var(--muted-foreground)" strokeWidth="2" strokeDasharray="3 3" />
        <text x="290" y="16" textAnchor="end" fontSize="10" fill="var(--muted-foreground)">iron rod</text>
        <text x="146" y="112" fontSize="10" fontWeight="700" fill="#f59e0b">i</text>
        <path d="M158 116 l12 0 l-6 6 z" fill="#f59e0b" />
      </svg>
    </Figure>
  );
}

function LcLoop() {
  return (
    <Figure
      title="A capacitor and an inductor in a loop"
      caption="A charged capacitor connected across an inductor gives free oscillations: the charge swings back and forth at the angular frequency ω₀ = 1/√(LC) — the same frequency at which the series LCR circuit resonates (Exercise 7.6)."
    >
      <svg viewBox="0 0 280 160" className="w-full" role="img" aria-label="A capacitor and an inductor connected in a closed loop, with an arrow showing the oscillating current">
        <path d="M60 40 H210 V70 M210 106 V130 H60 V96 M60 64 V40" fill="none" stroke="var(--foreground)" strokeWidth="2" />
        <line x1="52" y1="64" x2="68" y2="64" stroke="var(--foreground)" strokeWidth="2.5" />
        <line x1="52" y1="96" x2="68" y2="96" stroke="var(--foreground)" strokeWidth="2.5" />
        <text x="26" y="84" fontSize="12" fontWeight="800" fill="var(--foreground)">C</text>
        <path d="M210 70 a9 9 0 0 0 0 18 a9 9 0 0 0 0 18" fill="none" stroke="var(--foreground)" strokeWidth="2" />
        <text x="228" y="84" fontSize="12" fontWeight="800" fill="var(--foreground)">L</text>
        <path d="M120 40 l10 -5 l0 10 z" fill="#f59e0b" />
        <line x1="92" y1="40" x2="120" y2="40" stroke="#f59e0b" strokeWidth="2" />
        <text x="132" y="30" fontSize="11" fontWeight="800" fill="#f59e0b">i oscillates</text>
      </svg>
    </Figure>
  );
}
export default function AlternatingCurrentChapter() {
  return (
    <>
      <h2 id="h-7-1">7.1 Introduction</h2>
      <p>Every circuit we have studied so far was driven by a <strong>direct current (dc)</strong> source — a current that does not change direction with time. Voltages and currents that <em>vary</em> with time are just as common, and the most familiar example is the supply in our homes and offices.</p>
      <Callout type="important" title="Alternating voltage and alternating current">
        <p>The electric mains supply in our homes and offices is a voltage that varies like a sine function with time. Such a voltage is called <strong>alternating voltage</strong> (ac voltage) and the current driven by it in a circuit is called the <strong>alternating current</strong> (ac current).</p>
      </Callout>
      <p>Today, most of the electrical devices we use require ac voltage. The reasons given in the chapter:</p>
      <ul>
        <li>Most of the electrical energy sold by power companies is <strong>transmitted and distributed as alternating current</strong>.</li>
        <li>Ac voltages can be <Highlight color="yellow">easily and efficiently converted from one voltage to another</Highlight> by means of <strong>transformers</strong>.</li>
        <li>Electrical energy can therefore be transmitted <strong>economically over long distances</strong>.</li>
        <li>Ac circuits exhibit characteristics that are exploited in many devices of daily use — whenever we tune a radio to a favourite station, we use one such property of ac circuits.</li>
      </ul>
      <Callout type="note" title="A note on the words">
        The phrases ac voltage and ac current are contradictory and redundant respectively — they literally mean
        alternating current voltage and alternating current current. The abbreviation <strong>ac</strong> for a quantity
        with simple harmonic time dependence is so universally accepted that it is used throughout. Also,{" "}
        <strong>voltage</strong> means the potential difference between two points.
      </Callout>
      <KeyPoint title="Why ac won">
        Ac is the standard not because it is easier to generate, but because its voltage can be changed at will by a
        transformer — which is what makes long-distance transmission economical.
      </KeyPoint>

      <h3 id="h-7-1-waveform">What an ac waveform looks like</h3>
      <p>
        Both the mains voltage and the current it drives rise and fall in a <em>sinusoidal</em> pattern — the value
        increases and decreases smoothly, reversing direction every half-cycle:
      </p>
      <div className="grid gap-4 sm:grid-cols-2 [&>figure]:my-0">
        <figure className="overflow-hidden rounded-xl border border-border/40 bg-card">
          <div className="border-b border-border/40 bg-muted/20 px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
            Alternating voltage
          </div>
          <img
            src="/images/physics/alternating-current/ac-sinusoidal-alternating-voltage-graph.png"
            alt="Sinusoidal graph of alternating voltage v against time, rising to the peak value v_m and dipping to −v_m"
            className="mx-auto w-full h-auto object-contain bg-black"
            loading="lazy"
          />
          <figcaption className="px-4 py-2.5 text-center text-xs leading-relaxed text-muted-foreground">
            Voltage v oscillates between the +v<sub>m</sub> and −v<sub>m</sub> limits as time advances.
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-border/40 bg-card">
          <div className="border-b border-border/40 bg-muted/20 px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
            Alternating current
          </div>
          <img
            src="/images/physics/alternating-current/ac-sinusoidal-alternating-current-graph.png"
            alt="Sinusoidal graph of alternating current i against time, rising to the peak value i_m and dipping to −i_m"
            className="mx-auto w-full h-auto object-contain bg-black"
            loading="lazy"
          />
          <figcaption className="px-4 py-2.5 text-center text-xs leading-relaxed text-muted-foreground">
            The driven current i oscillates between +i<sub>m</sub> and −i<sub>m</sub> with the same period.
          </figcaption>
        </figure>
      </div>
      <p>Reading any source equation of the form <Formula>{String.raw`v = v_m \sin \omega t`}</Formula> — the parts to name:</p>
      <ul>
        <li><Formula>{String.raw`v_m`}</Formula> (or <Formula>{String.raw`i_m`}</Formula>) — the <strong>peak / maximum value</strong>, the amplitude of the oscillation.</li>
        <li><Formula>{String.raw`\omega`}</Formula> — the <strong>angular frequency</strong> of the supply (rad s<sup>−1</sup>), related to the ordinary frequency <Formula>{String.raw`\nu`}</Formula> and the period by:</li>
      </ul>
      <FormulaBlock tag="Eq. 7.0" latex={String.raw`\omega = 2\pi \nu = \frac{2\pi}{T}`} important />
      <ul>
        <li><Formula>{String.raw`\omega t`}</Formula> — the <strong>phase angle</strong> — it says <em>where in the cycle</em> the quantity is at time <Formula>{String.raw`t`}</Formula>.</li>
        <li><Formula>{String.raw`t`}</Formula> — the instantaneous time.</li>
      </ul>

      <h2 id="h-7-2">7.2 AC Voltage Applied to a Resistor</h2>
      <p>A resistor connected to a source of ac voltage is the simplest ac circuit. Take a source that produces a sinusoidally varying potential difference across its terminals:</p>
      <FormulaBlock tag="Eq. 7.1" latex={String.raw`v = v_m \sin \omega t`} important />
      <p>where <Formula>{String.raw`v_m`}</Formula> is the <strong>amplitude</strong> of the oscillating potential difference and <Formula>{String.raw`\omega`}</Formula> its <strong>angular frequency</strong>. Applying Kirchhoff&apos;s loop rule to the circuit, the source voltage equals the potential drop across R:</p>
      <FormulaBlock latex={String.raw`v_m \sin \omega t = i R`} />
      <p>Since R is a constant, this can be written as:</p>
      <FormulaBlock tag="Eq. 7.2" latex={String.raw`i = \frac{v_m}{R}\sin \omega t = i_m \sin \omega t`} />
      <FormulaBlock tag="Eq. 7.3" label="Current amplitude" latex={String.raw`i_m = \frac{v_m}{R}`} important />
      <p>Equation (7.3) is <strong>Ohm&apos;s law</strong>, which for resistors works equally well for both ac and dc voltages. The voltage and current both reach zero, minimum and maximum values at the same time —{" "}<Highlight color="yellow">the voltage and current are in phase</Highlight> with each other.</p>
      <ElementFigures kind="R" />
      <p>
        Like the applied voltage, the current has corresponding positive and negative values during each cycle. The sum of the instantaneous current values over one complete cycle is therefore zero, and
        the{" "}<strong>average current is zero</strong>. That does not mean the average power is zero: Joule heating is{" "}<Formula>{String.raw`i^2R`}</Formula>, and <Formula>{String.raw`i^2`}</Formula> is positive
        whether i is positive or negative.
      </p>
      <RevealAnswer
        title="Quick check"
        question="The average current over a full cycle is zero. Is the average power dissipated also zero?"
        answer={
          <>
            No. Heating depends on <Formula>{String.raw`i^2`}</Formula>, which is never negative, so energy is dissipated in
            the resistor even though the mean current is zero.
          </>
        }
      />
      <p>The average value of a function over a period T is{" "}<Formula>{String.raw`\bar{F} = \frac{1}{T}\int_0^T F(t)\,\mathrm{d}t`}</Formula>. For the instantaneous power{" "}<Formula>{String.raw`p = i^2R`}</Formula>:</p>
      <FormulaBlock tag="Eq. 7.4" latex={String.raw`p = i^2 R = i_m^2 R \sin^2 \omega t`} />
      <FormulaBlock tag="Eq. 7.5(a)" latex={String.raw`\bar{p} = \langle i^2 R \rangle = i_m^2 R \,\langle \sin^2 \omega t \rangle`} />
      <p>Using <Formula>{String.raw`\sin^2 \omega t = \tfrac{1}{2}\left(1 - \cos 2\omega t\right)`}</Formula> and{" "}<Formula>{String.raw`\langle \cos 2\omega t \rangle = 0`}</Formula> over a full cycle,{" "}<Formula>{String.raw`\langle \sin^2 \omega t \rangle = \tfrac{1}{2}`}</Formula>, so:</p>
      <FormulaBlock tag="Eq. 7.5(c)" latex={String.raw`\bar{p} = \tfrac{1}{2}\, i_m^2 R`} />
      <Callout type="important" title="Root mean square (rms) or effective current">
        <p>To express ac power in the same form as dc power (<Formula>{String.raw`P = I^2R`}</Formula>), a special value of current is defined and used. It is called the <strong>root mean square (rms)</strong> or{" "}<strong>effective current</strong>, and is denoted by <Formula>{String.raw`I_{\text{rms}}`}</Formula> or simply{" "}<Formula>{String.raw`I`}</Formula>:</p>
      </Callout>
      <FormulaBlock tag="Eq. 7.6" latex={String.raw`I = \sqrt{\langle i^2 \rangle} = \frac{i_m}{\sqrt{2}} = 0.707\, i_m`} important />
      <FormulaBlock tag="Eq. 7.7" latex={String.raw`P = \bar{p} = \tfrac{1}{2} i_m^2 R = I^2 R`} important />
      <p>Similarly, the <strong>rms voltage</strong> or effective voltage is defined by:</p>
      <FormulaBlock tag="Eq. 7.8" latex={String.raw`V = \frac{v_m}{\sqrt{2}} = 0.707\, v_m`} />
      <p>Since <Formula>{String.raw`v_m = i_m R`}</Formula>, dividing by <Formula>{String.raw`\sqrt{2}`}</Formula> gives the familiar dc-looking relation:</p>
      <FormulaBlock tag="Eq. 7.9" latex={String.raw`V = I R`} important />
      <p>This shows the advantage of rms values: in terms of them, the equation for power and the current–voltage relation in ac circuits are essentially the same as in the dc case. The rms current is the equivalent dc current that would produce the <Highlight color="yellow">same average power loss</Highlight> as the alternating current. Power can also be written as <Formula>{String.raw`P = V^2/R = I V`}</Formula>.</p>
      <MetricCard
        label="Household line voltage"
        value="220 V rms"
        unit="→ 311 V peak"
        description={
          <>
            It is customary to measure and specify rms values. The peak is{" "}
            <Formula>{String.raw`v_m = \sqrt{2}\,V = 1.414 \times 220 = 311\ \text{V}`}</Formula>.
          </>
        }
      />
      <MistakeCard
        mistake="Treating 220 V as the peak value of the mains supply, and using i_m = v_m / R with v_m = 220 V."
        correction="The value quoted for an ac supply is always the rms value. The peak is √2 times larger: 220 V rms corresponds to 311 V peak. Use rms with rms and peak with peak — never mix them in the same equation."
      />

      <Expandable title="Example 7.1 — A 100 W bulb on a 220 V supply" variant="example">
        <ProblemSolution.Problem><p>A light bulb is rated at 100 W for a 220 V supply. Find (a) the resistance of the bulb; (b) the peak voltage of the source; and (c) the rms current through the bulb.</p></ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> Given <Formula>{String.raw`P = 100\ \text{W}`}</Formula> and <Formula>{String.raw`V = 220\ \text{V}`}</Formula>. The resistance of the bulb is</p>
          <FormulaBlock latex={String.raw`R = \frac{V^2}{P} = \frac{(220\ \text{V})^2}{100\ \text{W}} = 484\ \Omega`} important />
          <p><strong>(b)</strong> The peak voltage of the source is</p>
          <FormulaBlock latex={String.raw`v_m = \sqrt{2}\,V = 311\ \text{V}`} important />
          <p><strong>(c)</strong> Since <Formula>{String.raw`P = IV`}</Formula>, the rms current is</p>
          <FormulaBlock latex={String.raw`I = \frac{P}{V} = \frac{100\ \text{W}}{220\ \text{V}} = 0.454\ \text{A}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-7-2-drills">Exam drills — reading an ac equation</h3>
      <p>
        Every drill below is answered by direct comparison with{" "}
        <Formula>{String.raw`V = V_0\sin \omega t`}</Formula> (the chapter writes the same thing as{" "}
        <Formula>{String.raw`v = v_m\sin \omega t`}</Formula>).
      </p>

      <Expandable title="Drill — An ac source is given by V = 20 sin(10πt): find everything" variant="example">
        <ProblemSolution.Problem>
          <p>Identify (a) the peak voltage, (b) the angular frequency, (c) the time period and (d) the frequency.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a) Peak voltage</strong> — compare with <Formula>{String.raw`V = V_0 \sin \omega t`}</Formula>:</p>
          <FormulaBlock latex={String.raw`V_0 = 20\ \text{V}`} important />
          <p><strong>(b) Angular frequency</strong> — the coefficient of <Formula>{String.raw`t`}</Formula>:</p>
          <FormulaBlock latex={String.raw`\omega = 10\pi\ \text{rad\,s}^{-1}`} important />
          <p><strong>(c) Time period</strong>:</p>
          <FormulaBlock latex={String.raw`T = \frac{2\pi}{\omega} = \frac{2\pi}{10\pi} = 0.2\ \text{s}`} important />
          <p><strong>(d) Frequency</strong>:</p>
          <FormulaBlock latex={String.raw`\nu = \frac{1}{T} = \frac{1}{0.2} = 5\ \text{Hz}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Drill — V = 100 sin(2πt): peak, ω, T, ν and V_rms" variant="example">
        <ProblemSolution.Problem>
          <p>An ac source is <Formula>{String.raw`V = 100 \sin(2\pi t)`}</Formula>. Find the peak voltage, angular frequency, time period, frequency and the rms (effective) voltage.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a) Peak voltage</strong> — compare with <Formula>{String.raw`V = V_0 \sin \omega t`}</Formula>:</p>
          <FormulaBlock latex={String.raw`V_0 = 100\ \text{V}`} important />
          <p><strong>(b) Angular frequency</strong>:</p>
          <FormulaBlock latex={String.raw`\omega = 2\pi\ \text{rad\,s}^{-1}`} />
          <p><strong>(c) Time period</strong>:</p>
          <FormulaBlock latex={String.raw`T = \frac{2\pi}{\omega} = \frac{2\pi}{2\pi} = 1\ \text{s}`} />
          <p><strong>(d) Frequency</strong>:</p>
          <FormulaBlock latex={String.raw`\nu = \frac{1}{T} = \frac{1}{1} = 1\ \text{Hz}`} />
          <p><strong>(e) rms / effective voltage</strong>:</p>
          <FormulaBlock latex={String.raw`V_{\text{rms}} = 0.707 \times V_0 = 0.707 \times 100 = 70.7\ \text{V}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Drill — I = 10 sin(314t): effective current" variant="example">
        <ProblemSolution.Problem>
          <p>The instantaneous current from an ac source is <Formula>{String.raw`I = 10 \sin(314t)`}</Formula> A. Find the peak current and the effective (rms) current.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Compare with <Formula>{String.raw`I = I_0 \sin \omega t`}</Formula> — the peak current:</p>
          <FormulaBlock latex={String.raw`I_0 = 10\ \text{A}`} />
          <p>The effective / rms current is then:</p>
          <FormulaBlock latex={String.raw`I_{\text{rms}} = \frac{I_0}{\sqrt{2}} = 0.707 \times 10 = 7.07\ \text{A}`} important />
          <Callout type="note" title="Spot the mains">
            <Formula>{String.raw`\omega = 314`}</Formula> is not a random number:{" "}
            <Formula>{String.raw`\nu = \omega/2\pi = 314/2\pi \approx 50\ \text{Hz}`}</Formula> — the ordinary mains
            frequency. Whenever an ac equation carries 314 or 100π, the source is the standard 50 Hz supply.
          </Callout>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Q: Why is a shock from 220 V ac more fatal than from 220 V dc?" variant="recall">
        <p>
          For domestic ac supplies, the stated 220 V is the <strong>rms value</strong> —{" "}
          <Formula>{String.raw`V_{\text{rms}} = 220\ \text{V}`}</Formula>. The actual{" "}
          <strong>peak voltage</strong> is significantly higher:
        </p>
        <FormulaBlock latex={String.raw`V_0 = \sqrt{2}\,V_{\text{rms}} = 220 \times 1.414 = 311\ \text{V}`} important />
        <p>
          Because the voltage swings up to <Formula>{String.raw`311\ \text{V}`}</Formula> during every cycle, a
          220 V ac source delivers a much higher peak stress across the victim than a steady 220 V dc source.
          (So it is the <em>peak</em>, not the nameplate 220 V, that does the damage.)
        </p>
      </Expandable>

      <Expandable title="Q: What is the rms voltage of a household ac supply whose peak voltage is 311 V?" variant="recall">
        <p>Run the rms relation the other way:</p>
        <FormulaBlock latex={String.raw`V_{\text{rms}} = \frac{V_0}{\sqrt{2}} = \frac{311}{1.414} = 220\ \text{V}`} important />
        <p>This is exactly the nameplate value of the Indian mains supply — the 311 V figure was derived from it.</p>
      </Expandable>

      <h2 id="h-7-3">7.3 Representation of AC Current and Voltage by Rotating Vectors — Phasors</h2>
      <p>The current through a resistor is in phase with the ac voltage — but that is not so for an inductor, a capacitor, or a combination of these elements. To show the phase relationship between voltage and current in an ac circuit, we use the notion of <strong>phasors</strong>.</p>
      <Callout type="important" title="Phasor (definition)">
        <p>
          A <strong>phasor</strong> is a vector which rotates about the origin with angular speed ω. The{" "}<strong>vertical components</strong> of phasors V and I represent the sinusoidally varying quantities v and i.
          The{" "}<strong>magnitudes</strong> of phasors V and I represent the amplitudes or the peak values{" "}<Formula>{String.raw`v_m`}</Formula> and <Formula>{String.raw`i_m`}</Formula> of these oscillating
          quantities.
        </p>
      </Callout>
      <p>The projection of the voltage and current phasors on the vertical axis —{" "}<Formula>{String.raw`v_m\sin\omega t`}</Formula> and <Formula>{String.raw`i_m\sin\omega t`}</Formula> — gives the value of voltage and current at that instant. As the phasors rotate with frequency ω, the sinusoidal curves are generated. The analysis of an ac circuit is greatly facilitated by such a <strong>phasor diagram</strong>.</p>
      <CycleDiagram
        title="One full rotation = one full ac cycle"
        steps={[
          { label: "0°", detail: "Phasor along the reference axis — the projection is zero." },
          { label: "90°", detail: "Projection at its positive maximum." },
          { label: "180°", detail: "Projection zero again — the quantity has reversed." },
          { label: "270°", detail: "Projection at its negative maximum." },
          { label: "360°", detail: "Back to the start — one complete cycle in time T = 2π/ω." },
        ]}
      />
      <p>For the resistor of Section 7.2 the phasors V and I are in the <Highlight color="yellow">same direction</Highlight>{" "}at all times. The phase angle between the voltage and the current is therefore zero.</p>
      <FactCard
        title="Phasors are not vectors"
        icon="↻"
        definition="Voltage and current in an ac circuit are scalars. The rotating vectors that represent them are introduced only because the amplitudes and phases of harmonically varying scalars combine mathematically in the same way as the projections of rotating vectors — so ordinary vector addition can be used."
      />
      <h2 id="h-7-4">7.4 AC Voltage Applied to an Inductor</h2>
      <p>Real inductors have appreciable resistance in their windings; here the inductor is assumed to have{" "}<strong>negligible resistance</strong>, so the circuit is purely inductive. With{" "}<Formula>{String.raw`v = v_m\sin\omega t`}</Formula> and Kirchhoff&apos;s loop rule, and since there is no resistor:</p>
      <FormulaBlock tag="Eq. 7.10" latex={String.raw`v - L\frac{\mathrm{d}i}{\mathrm{d}t} = 0`} />
      <p>where the second term is the self-induced Faraday emf in the inductor and L is its self-inductance. The negative sign follows from Lenz&apos;s law. Combining with Eq. (7.1):</p>
      <FormulaBlock tag="Eq. 7.11" latex={String.raw`\frac{\mathrm{d}i}{\mathrm{d}t} = \frac{v}{L} = \frac{v_m}{L}\sin\omega t`} />
      <p>The slope <Formula>{String.raw`\mathrm{d}i/\mathrm{d}t`}</Formula> is sinusoidally varying with the same phase as the source voltage, with amplitude <Formula>{String.raw`v_m/L`}</Formula>. Integrating with respect to time:</p>
      <FormulaBlock latex={String.raw`i = -\frac{v_m}{\omega L}\cos\omega t + \text{constant}`} />
      <p>The integration constant has the dimension of current and is time-independent. The source emf oscillates symmetrically about zero, so the current it sustains also oscillates symmetrically about zero —{" "}<strong>no constant or time-independent component of current exists</strong>, so the constant is zero. Using{" "}<Formula>{String.raw`-\cos\omega t = \sin\left(\omega t - \frac{\pi}{2}\right)`}</Formula>:</p>
      <FormulaBlock tag="Eq. 7.12" latex={String.raw`i = i_m \sin\left(\omega t - \frac{\pi}{2}\right)`} important />
      <p>where <Formula>{String.raw`i_m = v_m/\omega L`}</Formula> is the amplitude of the current. The quantity{" "}<Formula>{String.raw`\omega L`}</Formula> is analogous to the resistance and is called{" "}<strong>inductive reactance</strong>, denoted by <Formula>{String.raw`X_L`}</Formula>:</p>
      <FormulaBlock tag="Eq. 7.13" latex={String.raw`X_L = \omega L`} important />
      <FormulaBlock tag="Eq. 7.14" latex={String.raw`i_m = \frac{v_m}{X_L}`} />
      <p>Its dimension is that of resistance and its SI unit is the <strong>ohm</strong>. The inductive reactance limits the current in a purely inductive circuit in the same way as resistance limits it in a purely resistive circuit, and it is <Highlight color="yellow">directly proportional to the inductance and to the frequency</Highlight> of the current.</p>
      <p>Comparing Eqs. (7.1) and (7.12), the current <strong>lags</strong> the voltage by{" "}<Formula>{String.raw`\pi/2`}</Formula> — one-quarter of a cycle. The current reaches its maximum value later than the voltage by one-fourth of a period, <Formula>{String.raw`T/4 = \pi/2\omega`}</Formula>.</p>
      <ElementFigures kind="L" />
      <p>The instantaneous power supplied to the inductor is:</p>
      <FormulaBlock latex={String.raw`p_L = i\,v = i_m\sin\left(\omega t - \frac{\pi}{2}\right) \times v_m\sin\omega t = -\,\frac{i_m v_m}{2}\sin 2\omega t`} />
      <p>The average of <Formula>{String.raw`\sin 2\omega t`}</Formula> over a complete cycle is zero, so the average power supplied to an inductor over one complete cycle is <Highlight color="yellow">zero</Highlight>.</p>
      <Expandable title="Example 7.2 — Reactance and current of a pure inductor" variant="example">
        <ProblemSolution.Problem><p>A pure inductor of 25.0 mH is connected to a source of 220 V. Find the inductive reactance and rms current in the circuit if the frequency of the source is 50 Hz.</p></ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The inductive reactance is</p>
          <FormulaBlock latex={String.raw`X_L = 2\pi\nu L = 2 \times 3.14 \times 50 \times 25 \times 10^{-3}\ \Omega = 7.85\ \Omega`} important />
          <p>The rms current in the circuit is</p>
          <FormulaBlock latex={String.raw`I = \frac{V}{X_L} = \frac{220\ \text{V}}{7.85\ \Omega} = 28\ \text{A}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-7-5">7.5 AC Voltage Applied to a Capacitor</h2>
      <p>In a <strong>dc</strong> circuit a capacitor conducts only for the short time needed to charge it. As charge accumulates, the voltage across the plates increases and opposes the current; when the capacitor is fully charged, the current falls to zero.</p>
      <p>Connected to an <strong>ac</strong> source, the capacitor limits or regulates the current but{" "}<Highlight color="yellow">does not completely prevent the flow of charge</Highlight> — it is alternately charged and discharged as the current reverses each half cycle. If q is the charge at time t, the instantaneous voltage is:</p>
      <FormulaBlock tag="Eq. 7.15" latex={String.raw`v = \frac{q}{C}`} />
      <p>From Kirchhoff&apos;s loop rule the voltage across the source and the capacitor are equal, so{" "}<Formula>{String.raw`q/C = v_m\sin\omega t`}</Formula>. Using{" "}<Formula>{String.raw`i = \mathrm{d}q/\mathrm{d}t`}</Formula>:</p>
      <FormulaBlock latex={String.raw`i = \frac{\mathrm{d}}{\mathrm{d}t}\left(C v_m \sin\omega t\right) = \omega C v_m \cos\omega t`} />
      <p>Using <Formula>{String.raw`\cos\omega t = \sin\left(\omega t + \frac{\pi}{2}\right)`}</Formula>:</p>
      <FormulaBlock tag="Eq. 7.16" latex={String.raw`i = i_m \sin\left(\omega t + \frac{\pi}{2}\right)`} important />
      <p>The amplitude of the oscillating current is <Formula>{String.raw`i_m = \omega C v_m`}</Formula>, which can be rewritten as <Formula>{String.raw`i_m = \dfrac{v_m}{1/\omega C}`}</Formula>. Compared with{" "}<Formula>{String.raw`i_m = v_m/R`}</Formula> for a purely resistive circuit,{" "}<Formula>{String.raw`1/\omega C`}</Formula> plays the role of resistance. It is called{" "}<strong>capacitive reactance</strong>:</p>
      <FormulaBlock tag="Eq. 7.17" latex={String.raw`X_C = \frac{1}{\omega C}`} important />
      <FormulaBlock tag="Eq. 7.18" latex={String.raw`i_m = \frac{v_m}{X_C}`} />
      <p>Its dimension too is that of resistance, with SI unit the ohm. The capacitive reactance limits the amplitude of the current in a purely capacitive circuit in the same way as resistance, but it is{" "}<Highlight color="yellow">inversely proportional to the frequency and to the capacitance</Highlight>.</p>
      <p>Comparing Eq. (7.16) with Eq. (7.1), the current is <Formula>{String.raw`\pi/2`}</Formula>{" "}<strong>ahead</strong> of the voltage: it reaches its maximum value earlier than the voltage by one-fourth of a period.</p>
      <ElementFigures kind="C" />
      <p>The instantaneous power supplied to the capacitor is:</p>
      <FormulaBlock tag="Eq. 7.19" latex={String.raw`p_C = i\,v = i_m v_m \cos\omega t \sin\omega t = \frac{i_m v_m}{2}\sin 2\omega t`} />
      <p>As for the inductor, <Formula>{String.raw`\langle \sin 2\omega t \rangle = 0`}</Formula> over a complete cycle, so the average power supplied to a capacitor is <Highlight color="yellow">zero</Highlight>.</p>
      <Comparison
        columns={[
          {
            title: "Pure inductor",
            children: (
              <ul>
                <li>Current <strong>lags</strong> the voltage by π/2.</li>
                <li>Reactance <Formula>{String.raw`X_L = \omega L`}</Formula> — rises with frequency.</li>
                <li>Average power over a cycle is zero.</li>
              </ul>
            ),
          },
          {
            title: "Pure capacitor",
            children: (
              <ul>
                <li>Current <strong>leads</strong> the voltage by π/2.</li>
                <li>Reactance <Formula>{String.raw`X_C = 1/\omega C`}</Formula> — falls with frequency.</li>
                <li>Average power over a cycle is zero.</li>
              </ul>
            ),
          },
        ]}
      />
      <MistakeCard
        mistake="Concluding that a capacitor blocks ac because it blocks dc."
        correction="A capacitor blocks steady current only after it is charged. Under ac it charges and discharges every half cycle, so charge keeps flowing: the current is i_m = v_m/X_C with X_C = 1/ωC. Raising the frequency (or the capacitance) lowers the reactance and increases the current."
      />

      <Expandable title="Example 7.3 — A lamp in series with a capacitor: dc versus ac" variant="example">
        <ProblemSolution.Problem><p>A lamp is connected in series with a capacitor. Predict your observations for dc and ac connections. What happens in each case if the capacitance of the capacitor is reduced?</p></ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>Dc source:</strong> the capacitor gets charged and, after charging, no current flows in the circuit — the lamp will not glow. There is no change even if C is reduced.</p>
          <p><strong>Ac source:</strong> the capacitor offers capacitative reactance <Formula>{String.raw`1/\omega C`}</Formula> and current flows in the circuit, so the lamp shines.</p>
          <p><strong>Reducing C:</strong> the reactance increases, so the lamp shines less brightly than before.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 7.4 — Capacitive reactance and current at 50 Hz" variant="example">
        <ProblemSolution.Problem><p>A 15.0 μF capacitor is connected to a 220 V, 50 Hz source. Find the capacitive reactance and the current (rms and peak) in the circuit. If the frequency is doubled, what happens to the capacitive reactance and the current?</p></ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The capacitive reactance is</p>
          <FormulaBlock latex={String.raw`X_C = \frac{1}{2\pi\nu C} = \frac{1}{2\pi(50\ \text{Hz})(15.0\times 10^{-6}\ \text{F})} = 212\ \Omega`} important />
          <p>The rms current is</p>
          <FormulaBlock latex={String.raw`I = \frac{V}{X_C} = \frac{220\ \text{V}}{212\ \Omega} = 1.04\ \text{A}`} />
          <p>The peak current is</p>
          <FormulaBlock latex={String.raw`i_m = \sqrt{2}\,I = (1.41)(1.04\ \text{A}) = 1.47\ \text{A}`} important />
          <p>The current oscillates between +1.47 A and −1.47 A, and is ahead of the voltage by π/2.</p>
          <p>If the frequency is doubled, the capacitive reactance is halved and consequently the current is doubled.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <BulbCoilCircuit />
      <Expandable title="Example 7.5 — Inserting an iron rod into a coil in series with a bulb" variant="example">
        <ProblemSolution.Problem><p>A light bulb and an open coil inductor are connected to an ac source through a key as shown in Fig. 7.9. The switch is closed and after some time an iron rod is inserted into the interior of the inductor. Does the glow of the bulb (a) increase, (b) decrease, or (c) stay unchanged? Give reasons.</p></ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>As the iron rod is inserted, the magnetic field inside the coil magnetises the iron, increasing the magnetic field inside it. Hence the inductance of the coil increases, and consequently its inductive reactance <Formula>{String.raw`X_L = \omega L`}</Formula> increases.</p>
          <p>A larger fraction of the applied ac voltage therefore appears across the inductor, leaving less voltage across the bulb — so <Highlight color="yellow">the glow of the bulb decreases</Highlight> (option b).</p>
        </ProblemSolution.Solution>
      </Expandable>
      <h2 id="h-7-6">7.6 AC Voltage Applied to a Series LCR Circuit</h2>
      <p>A resistor, an inductor and a capacitor are connected in series to an ac source, with{" "}<Formula>{String.raw`v = v_m\sin\omega t`}</Formula>. If q is the charge on the capacitor and i the current at time t, Kirchhoff&apos;s loop rule gives:</p>
      <FormulaBlock tag="Eq. 7.20" latex={String.raw`L\frac{\mathrm{d}i}{\mathrm{d}t} + iR + \frac{q}{C} = v`} important />

      <h3 id="h-7-6-1">7.6.1 Phasor-diagram solution</h3>
      <p>The three elements are in series, so the <strong>current is the same in each at any time</strong> — same amplitude and same phase:</p>
      <FormulaBlock tag="Eq. 7.21" latex={String.raw`i = i_m\sin(\omega t + \phi)`} />
      <p>where <Formula>{String.raw`\phi`}</Formula> is the phase difference between the voltage across the source and the current in the circuit. Let I be the phasor of this current, and{" "}<Formula>{String.raw`\mathbf{V}_L`}</Formula>, <Formula>{String.raw`\mathbf{V}_R`}</Formula>,{" "}<Formula>{String.raw`\mathbf{V}_C`}</Formula> the phasors of the element voltages. Then:</p>
      <Stepper
        steps={[
          { label: "V_R is parallel to I", description: "The resistor voltage is in phase with the current." },
          { label: "V_C is π/2 behind I", description: "The capacitor voltage lags the current by a quarter cycle." },
          { label: "V_L is π/2 ahead of I", description: "The inductor voltage leads the current by a quarter cycle." },
        ]}
      />
      <p>The lengths of these phasors, i.e. the voltage amplitudes, are:</p>
      <FormulaBlock tag="Eq. 7.22" latex={String.raw`v_{Rm} = i_m R,\qquad v_{Cm} = i_m X_C,\qquad v_{Lm} = i_m X_L`} />
      <p>The voltage equation (7.20) for the circuit can be written as{" "}<Formula>{String.raw`v_L + v_R + v_C = v`}</Formula>, and the phasor relation whose vertical component gives this equation is:</p>
      <FormulaBlock tag="Eq. 7.24" latex={String.raw`\mathbf{V}_L + \mathbf{V}_R + \mathbf{V}_C = \mathbf{V}`} />
      <p>
        Since <Formula>{String.raw`\mathbf{V}_C`}</Formula> and <Formula>{String.raw`\mathbf{V}_L`}</Formula> are always along the same line and in opposite directions, they combine into one phasor of
        magnitude{" "}<Formula>{String.raw`|v_{Cm} - v_{Lm}|`}</Formula>. V is the hypotenuse of a right triangle whose sides are{" "}<Formula>{String.raw`\mathbf{V}_R`}</Formula>
        and{" "}<Formula>{String.raw`(\mathbf{V}_C + \mathbf{V}_L)`}</Formula>, so Pythagoras gives:
      </p>
      <SeriesLcrCircuit />
      <FormulaBlock latex={String.raw`v_m^2 = v_{Rm}^2 + \left(v_{Cm} - v_{Lm}\right)^2`} />
      <p>Substituting Eq. (7.22) and taking the square root:</p>
      <FormulaBlock tag="Eq. 7.25(a)" latex={String.raw`i_m = \frac{v_m}{\sqrt{R^2 + \left(X_C - X_L\right)^2}}`} important />
      <p>By analogy with resistance, the <strong>impedance</strong> Z of the ac circuit is defined by:</p>
      <FormulaBlock tag="Eq. 7.25(b)" latex={String.raw`Z = \frac{v_m}{i_m}`} />
      <FormulaBlock tag="Eq. 7.26" latex={String.raw`Z = \sqrt{R^2 + \left(X_C - X_L\right)^2}`} important />
      <p>Since phasor I is always parallel to <Formula>{String.raw`\mathbf{V}_R`}</Formula>, the phase angle φ is the angle between <Formula>{String.raw`\mathbf{V}_R`}</Formula> and V, determined from the same triangle:</p>
      <FormulaBlock tag="Eq. 7.27" latex={String.raw`\tan\phi = \frac{X_C - X_L}{R}`} important />
      <LcrPhasorAndImpedance />
      <ul>
        <li>If <Formula>{String.raw`X_C > X_L`}</Formula>, φ is <strong>positive</strong> and the circuit is predominantly <strong>capacitive</strong> — the current <em>leads</em> the source voltage.</li>
        <li>If <Formula>{String.raw`X_C < X_L`}</Formula>, φ is <strong>negative</strong> and the circuit is predominantly <strong>inductive</strong> — the current <em>lags</em> the source voltage.</li>
      </ul>
      <Callout type="note" title="What the phasor solution does and does not give">
        <p>
          The phasor diagram says nothing about the initial condition: one can take any arbitrary value of t and draw the phasors, which only show the relative angle between them. The solution obtained is
          the{" "}<strong>steady-state solution</strong>, not a general solution. A <strong>transient solution</strong> also exists, even for <Formula>{String.raw`v = 0`}</Formula>; the general solution is the sum of the
          two, and after a sufficiently long time the transient dies out.
        </p>
      </Callout>

      <h3 id="h-7-6-2">7.6.2 Resonance</h3>
      <Callout type="important" title="Resonance and natural frequency">
        <p>The phenomenon of <strong>resonance</strong> is common among systems that have a tendency to oscillate at a particular frequency. This frequency is called the system&apos;s <strong>natural frequency</strong>. If such a system is driven by an energy source at a frequency that is near the natural frequency, the amplitude of oscillation is found to be large.</p>
      </Callout>
      <p>A familiar example is a child on a swing: if the child pulls on the rope at regular intervals and the frequency of the pulls is almost the same as the frequency of swinging, the amplitude of the swinging will be large.</p>
      <p>
        For the driven series RLC circuit, <Formula>{String.raw`i_m = v_m/Z`}</Formula> with{" "}<Formula>{String.raw`X_C = 1/\omega C`}</Formula> and <Formula>{String.raw`X_L = \omega L`}</Formula>. If ω is varied, then
        at a particular frequency <Formula>{String.raw`\omega_0`}</Formula>,{" "}<Formula>{String.raw`X_C = X_L`}</Formula> and the impedance is minimum,{" "}<Formula>{String.raw`Z = \sqrt{R^2 + 0} = R`}</Formula>. This
        frequency is the{" "}<strong>resonant frequency</strong>:
      </p>
      <FormulaBlock tag="Eq. 7.28" label="Resonant frequency" latex={String.raw`\omega_0 = \frac{1}{\sqrt{LC}}`} important />
      <p>At the resonant frequency the current amplitude is maximum,{" "}<Formula>{String.raw`i_m = v_m/R`}</Formula>.</p>
      <ResonanceCurve />
      <p>The figure uses L = 1.00 mH, C = 1.00 nF and <Formula>{String.raw`v_m = 100\ \text{V}`}</Formula> for two values of R: (i) 100 Ω and (ii) 200 Ω. Here{" "}<Formula>{String.raw`\omega_0 = 1/\sqrt{LC} = 1.00\times 10^{6}\ \text{rad/s}`}</Formula>. Since{" "}<Formula>{String.raw`i_m = v_m/R`}</Formula> at resonance, the peak for case (i) is twice that for case (ii).</p>
      <p>
        Resonant circuits have a variety of applications — for example in the tuning mechanism of a radio or a TV set. The antenna accepts signals from many broadcasting stations, which act as a source that can drive the
        tuning circuit at many frequencies. To hear one particular station we vary the capacitance of the tuning circuit so that its resonant frequency becomes nearly equal to the frequency of that signal; the amplitude
        of the current at that frequency is then maximum.
      </p>
      <KeyPoint title="Resonance needs both L and C">
        Resonance is exhibited only if <Highlight color="yellow">both L and C are present</Highlight>: only then do the
        voltages across them cancel each other (being out of phase) and the current amplitude becomes{" "}
        <Formula>{String.raw`v_m/R`}</Formula>, the whole source voltage appearing across R. There is no resonance in a
        pure RL or RC circuit.
      </KeyPoint>
      <p>The <strong>quality factor</strong> Q, listed in the chapter&apos;s table of physical quantities, is defined for a series RLC circuit as:</p>
      <FormulaBlock label="Quality factor (series RLC)" latex={String.raw`Q = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 C\,R}`} important />
      <p>The same frequency appears again in free oscillations. A charged capacitor connected across an inductor forms a loop in which the charge oscillates at <Formula>{String.raw`\omega_0 = 1/\sqrt{LC}`}</Formula> — the angular frequency of free oscillations (Exercise 7.6).</p>
      <LcLoop />

      <Expandable title="Example 7.6 — An RC series circuit: current, voltages and the paradox" variant="example">
        <ProblemSolution.Problem><p>A resistor of 200 Ω and a capacitor of 15.0 μF are connected in series to a 220 V, 50 Hz ac source. (a) Calculate the current in the circuit. (b) Calculate the voltage (rms) across the resistor and the capacitor. Is the algebraic sum of these voltages more than the source voltage? If yes, resolve the paradox.</p></ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>Given:</strong> <Formula>{String.raw`R = 200\ \Omega`}</Formula>, <Formula>{String.raw`C = 15.0\ \mu\text{F} = 15.0\times 10^{-6}\ \text{F}`}</Formula>, <Formula>{String.raw`V = 220\ \text{V}`}</Formula>, <Formula>{String.raw`\nu = 50\ \text{Hz}`}</Formula>.</p>
          <p><strong>(a)</strong> To calculate the current we need the impedance of the circuit:</p>
          <FormulaBlock latex={String.raw`Z = \sqrt{R^2 + X_C^2} = \sqrt{R^2 + \left(2\pi\nu C\right)^{-2}}`} />
          <FormulaBlock latex={String.raw`Z = \sqrt{(200\ \Omega)^2 + \left(2 \times 3.14 \times 50 \times 15.0\times 10^{-6}\right)^{-2}}`} />
          <FormulaBlock latex={String.raw`Z = \sqrt{(200\ \Omega)^2 + (212.3\ \Omega)^2} = 291.67\ \Omega`} />
          <p>Therefore the current in the circuit is</p>
          <FormulaBlock latex={String.raw`I = \frac{V}{Z} = \frac{220\ \text{V}}{291.5\ \Omega} = 0.755\ \text{A}`} important />
          <p><strong>(b)</strong> Since the current is the same throughout the circuit:</p>
          <FormulaBlock latex={String.raw`V_R = I R = (0.755\ \text{A})(200\ \Omega) = 151\ \text{V}`} />
          <FormulaBlock latex={String.raw`V_C = I X_C = (0.755\ \text{A})(212.3\ \Omega) = 160.3\ \text{V}`} />
          <p>The algebraic sum of the two voltages is 311.3 V, which is more than the source voltage of 220 V. The paradox is resolved by phase: the two voltages are <strong>out of phase by ninety degrees</strong>, so they cannot be added like ordinary numbers. The total is obtained from the Pythagorean theorem:</p>
          <FormulaBlock latex={String.raw`V_{RC} = \sqrt{V_R^2 + V_C^2} = 220\ \text{V}`} important />
          <p>With the phase difference properly taken into account, the total voltage across the resistor and capacitor equals the source voltage.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-7-7">7.7 Power in AC Circuit: The Power Factor</h2>
      <p>A voltage <Formula>{String.raw`v = v_m\sin\omega t`}</Formula> applied to a series RLC circuit drives a current{" "}<Formula>{String.raw`i = i_m\sin(\omega t + \phi)`}</Formula>, where{" "}<Formula>{String.raw`i_m = v_m/Z`}</Formula> and{" "}<Formula>{String.raw`\phi = \tan^{-1}\left[\left(X_C - X_L\right)/R\right]`}</Formula>. The instantaneous power supplied by the source is:</p>
      <FormulaBlock tag="Eq. 7.29" latex={String.raw`p = v\,i = v_m\sin\omega t \times i_m\sin(\omega t + \phi) = \frac{v_m i_m}{2}\left[\cos\phi - \cos(2\omega t + \phi)\right]`} />
      <p>Only the second term is time-dependent, and its average over a cycle is zero (the positive half of the cosine cancels the negative half). Therefore:</p>
      <FormulaBlock tag="Eq. 7.30(a)" latex={String.raw`P = \frac{v_m i_m}{2}\cos\phi = \frac{v_m}{\sqrt{2}}\cdot\frac{i_m}{\sqrt{2}}\cos\phi = V I \cos\phi`} important />
      <FormulaBlock tag="Eq. 7.30(b)" latex={String.raw`P = I^2 Z \cos\phi`} />
      <p>The average power dissipated depends not only on the voltage and current but also on the cosine of the phase angle between them. The quantity <Formula>{String.raw`\cos\phi`}</Formula> is called the{" "}<Highlight color="yellow">power factor</Highlight>.</p>
      <TableCard
        title="The four cases of average power"
        caption="Power is dissipated only in the resistor, whatever else the circuit contains."
        headers={["Circuit", "φ", "cos φ", "Average power"]}
        rows={[
          { cells: ["Pure R (resistive)", "0", "1", "Maximum dissipation, P = I²R"] },
          { cells: ["Pure L or pure C", "π/2", "0", "No power dissipated — the current is wattless"] },
          { cells: ["Series LCR", "tan⁻¹[(X_C − X_L)/R]", "R/Z", "P = I²Z cos φ, dissipated only in R"] },
          { cells: ["LCR at resonance", "0", "1", "Maximum, P = I²Z = I²R"] },
        ]}
      />
      <p>In the purely inductive or capacitive case no power is dissipated even though a current is flowing; this current is sometimes referred to as <strong>wattless current</strong>.</p>
      <PowerFactorDiagram />

      <Expandable title="Example 7.7 — Low power factor, and how a capacitor improves it" variant="example">
        <ProblemSolution.Problem><p>(a) For circuits used for transporting electric power, a low power factor implies large power loss in transmission. Explain. (b) Power factor can often be improved by the use of a capacitor of appropriate capacitance in the circuit. Explain.</p></ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> We know that <Formula>{String.raw`P = I V\cos\phi`}</Formula>, where{" "}
          <Formula>{String.raw`\cos\phi`}</Formula> is the power factor. To supply a given power at a given voltage, if{" "}
          <Formula>{String.raw`\cos\phi`}</Formula> is small we must increase the current accordingly — and that leads to a
          large power loss <Formula>{String.raw`I^2R`}</Formula> in transmission.</p>
          <p><strong>(b)</strong> Suppose the current I lags the voltage by an angle φ. Then{" "}
          <Formula>{String.raw`\cos\phi = R/Z`}</Formula>. We can improve the power factor (tending to 1) by making Z tend to
          R. Resolve I into two components:</p>
          <ul>
            <li><Formula>{String.raw`I_p`}</Formula> along the applied voltage V — the <strong>power component</strong>, in phase with V, corresponding to the power loss.</li>
            <li><Formula>{String.raw`I_q`}</Formula> perpendicular to V — the <strong>wattless component</strong>, for which there is no power loss.</li>
          </ul>
          <p>
            To improve the power factor we must completely neutralise the lagging wattless current{" "}<Formula>{String.raw`I_q`}</Formula> by an equal leading wattless current{" "}<Formula>{String.raw`I_q'`}</Formula>.
            This is done by connecting a capacitor of appropriate value in parallel, so that <Formula>{String.raw`I_q`}</Formula> and <Formula>{String.raw`I_q'`}</Formula> cancel each other and the power is effectively
            <Formula>{String.raw`I_p V`}</Formula>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 7.8 — Impedance, phase, power and power factor of an LCR circuit" variant="example">
        <ProblemSolution.Problem><p>A sinusoidal voltage of peak value 283 V and frequency 50 Hz is applied to a series LCR circuit in which R = 3 Ω, L = 25.48 mH and C = 796 μF. Find (a) the impedance of the circuit; (b) the phase difference between the voltage across the source and the current; (c) the power dissipated in the circuit; and (d) the power factor.</p></ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> First calculate <Formula>{String.raw`X_L`}</Formula> and <Formula>{String.raw`X_C`}</Formula>:</p>
          <FormulaBlock latex={String.raw`X_L = 2\pi\nu L = 2 \times 3.14 \times 50 \times 25.48 \times 10^{-3}\ \Omega = 8\ \Omega`} />
          <FormulaBlock latex={String.raw`X_C = \frac{1}{2\pi\nu C} = \frac{1}{2 \times 3.14 \times 50 \times 796 \times 10^{-6}}\ \Omega = 4\ \Omega`} />
          <p>Therefore the impedance is</p>
          <FormulaBlock latex={String.raw`Z = \sqrt{R^2 + \left(X_L - X_C\right)^2} = \sqrt{3^2 + (8 - 4)^2}\ \Omega = 5\ \Omega`} important />
          <p><strong>(b)</strong> The phase difference is</p>
          <FormulaBlock latex={String.raw`\phi = \tan^{-1}\frac{X_C - X_L}{R} = \tan^{-1}\frac{4 - 8}{3} = -53.1^\circ`} important />
          <p>Since φ is negative, the current in the circuit lags the voltage across the source.</p>
          <p><strong>(c)</strong> The power dissipated in the circuit is <Formula>{String.raw`P = I^2 R`}</Formula>, with</p>
          <FormulaBlock latex={String.raw`I = \frac{i_m}{\sqrt{2}} = \left(\frac{283}{5}\right)\frac{1}{\sqrt{2}} = 40\ \text{A}`} />
          <FormulaBlock latex={String.raw`P = (40\ \text{A})^2 \times 3\ \Omega = 4800\ \text{W}`} important />
          <p><strong>(d)</strong> Power factor:</p>
          <FormulaBlock latex={String.raw`\cos\phi = \cos\left(-53.1^\circ\right) = 0.6`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 7.9 — Varying the frequency to reach resonance" variant="example">
        <ProblemSolution.Problem><p>Suppose the frequency of the source in the previous example can be varied. (a) What is the frequency of the source at which resonance occurs? (b) Calculate the impedance, the current, and the power dissipated at the resonant condition.</p></ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> The frequency at which resonance occurs is</p>
          <FormulaBlock latex={String.raw`\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{25.48 \times 10^{-3} \times 796 \times 10^{-6}}} = 222.1\ \text{rad/s}`} />
          <FormulaBlock latex={String.raw`\nu_r = \frac{\omega_0}{2\pi} = \frac{222.1}{2 \times 3.14}\ \text{Hz} = 35.4\ \text{Hz}`} important />
          <p><strong>(b)</strong> At resonance the impedance equals the resistance:</p>
          <FormulaBlock latex={String.raw`Z = R = 3\ \Omega`} />
          <p>The rms current at resonance is</p>
          <FormulaBlock latex={String.raw`I = \frac{V}{Z} = \frac{V}{R} = \frac{283}{3 \times \sqrt{2}} = 66.7\ \text{A}`} />
          <p>The power dissipated at resonance is</p>
          <FormulaBlock latex={String.raw`P = I^2 R = (66.7)^2 \times 3 = 13.35\ \text{kW}`} important />
          <p>Power dissipated at resonance is more than the power dissipated in Example 7.8.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 7.10 — The airport metal detector" variant="example">
        <ProblemSolution.Problem><p>At an airport, a person is made to walk through the doorway of a metal detector. If she or he is carrying anything made of metal, the detector emits a sound. On what principle does this detector work?</p></ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The metal detector works on the principle of <Highlight color="yellow">resonance in ac circuits</Highlight>. Walking through the doorway means walking through a coil of many turns. The coil is connected to a capacitor tuned so that the circuit is in resonance.</p>
          <p>Carrying metal changes the impedance of the circuit, producing a significant change in the current. That change is detected by the electronic circuitry, which causes a sound to be emitted as an alarm.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <h2 id="h-7-8">7.8 Transformers</h2>
      <Callout type="important" title="Transformer (definition)">
        <p>For many purposes, it is necessary to change (or transform) an alternating voltage from one to another of greater or smaller value. This is done with a device called a <strong>transformer</strong>, using the principle of{" "}<strong>mutual induction</strong>.</p>
      </Callout>
      <p>
        A transformer consists of two sets of coils, insulated from each other, wound on a <strong>soft-iron core</strong> — either one on top of the other or on separate limbs of the core. One coil, the
        <strong>primary</strong>, has{" "}<Formula>{String.raw`N_p`}</Formula> turns; the other, the <strong>secondary</strong>, has{" "}<Formula>{String.raw`N_s`}</Formula> turns. The primary is the input coil, the
        secondary the output coil.
      </p>
      <p>When an alternating voltage is applied to the primary, the resulting current produces an alternating magnetic flux which links the secondary and induces an emf in it. The value of this emf depends on the number of turns in the secondary.</p>
      <TransformerDiagram />
      <p>Consider an <strong>ideal transformer</strong>: the primary has negligible resistance and all the flux in the core links both windings. If <Formula>{String.raw`\Phi`}</Formula> is the flux in each turn at time t due to the primary current, the induced emf in the secondary is:</p>
      <FormulaBlock tag="Eq. 7.31" latex={String.raw`\varepsilon_s = -N_s\frac{\mathrm{d}\Phi}{\mathrm{d}t}`} />
      <p>The alternating flux also induces an emf, called <strong>back emf</strong>, in the primary:</p>
      <FormulaBlock tag="Eq. 7.32" latex={String.raw`\varepsilon_p = -N_p\frac{\mathrm{d}\Phi}{\mathrm{d}t}`} />
      <p>But <Formula>{String.raw`\varepsilon_p = v_p`}</Formula>: if this were not so, the primary current would be infinite, since the primary has zero resistance. If the secondary is an open circuit or the current taken from it is small, then to a good approximation <Formula>{String.raw`\varepsilon_s = v_s`}</Formula>. Hence:</p>
      <FormulaBlock tag="Eq. 7.33" latex={String.raw`\frac{v_s}{v_p} = \frac{N_s}{N_p}`} important />
      <Callout type="note" title="Three assumptions behind Eq. (7.33)">
        <p>(i) The primary resistance and current are small.</p>
        <p>(ii) The same flux links both primary and secondary, as very little flux escapes from the core.</p>
        <p>(iii) The secondary current is small.</p>
      </Callout>
      <p>If the transformer is assumed 100% efficient (no energy losses), the power input equals the power output, and since{" "}<Formula>{String.raw`p = iv`}</Formula>:</p>
      <FormulaBlock tag="Eq. 7.34" latex={String.raw`i_p v_p = i_s v_s`} />
      <p>Some energy is always lost, but this is a good approximation — a well-designed transformer may have an efficiency of more than 95%. Combining the last two equations:</p>
      <FormulaBlock tag="Eq. 7.35" latex={String.raw`\frac{i_p}{i_s} = \frac{v_s}{v_p} = \frac{N_s}{N_p}`} important />
      <p>Since i and v both oscillate with the same frequency as the ac source, this also gives the ratio of the amplitudes or rms values of the corresponding quantities:</p>
      <FormulaBlock tag="Eq. 7.36" latex={String.raw`V_s = \left(\frac{N_s}{N_p}\right)V_p \qquad\text{and}\qquad I_s = \left(\frac{N_p}{N_s}\right)I_p`} important />
      <ul>
        <li>
          If <Formula>{String.raw`N_s > N_p`}</Formula> the voltage is <strong>stepped up</strong>{" "}
          (<Formula>{String.raw`V_s > V_p`}</Formula>) — a <strong>step-up transformer</strong>. In this arrangement there is{" "}
          <em>less</em> current in the secondary than in the primary.
        </li>
        <li>
          If <Formula>{String.raw`N_s < N_p`}</Formula> the voltage is <strong>stepped down</strong> — a{" "}
          <strong>step-down transformer</strong>. Here <Formula>{String.raw`V_s < V_p`}</Formula> and{" "}
          <Formula>{String.raw`I_s > I_p`}</Formula>: the voltage is reduced and the current is increased.
        </li>
      </ul>
      <p className="text-sm text-muted-foreground">For example, if the primary coil has 100 turns and the secondary 200 turns,{" "}<Formula>{String.raw`N_s/N_p = 2`}</Formula> and <Formula>{String.raw`N_p/N_s = 1/2`}</Formula>. A 220 V input at 10 A steps up to a 440 V output at 5.0 A.</p>
      <TableCard
        title="Energy losses in a real transformer"
        caption="The equations above apply to ideal transformers. Real transformers lose energy in four ways, each with its own remedy."
        headers={["Loss", "Cause", "Remedy"]}
        rows={[
          { cells: ["Flux leakage", "Not all the flux due to the primary passes through the secondary, because of poor core design or air gaps", "Wind the primary and secondary coils one over the other"] },
          { cells: ["Resistance of windings", "The winding wire has resistance, so energy is lost as heat (I²R)", "Use thick wire, especially in high-current, low-voltage windings"] },
          { cells: ["Eddy currents", "The alternating flux induces eddy currents in the iron core, causing heating", "Use a laminated core"] },
          { cells: ["Hysteresis", "The magnetisation of the core is repeatedly reversed by the alternating field, and the energy spent appears as heat", "Use a magnetic material with low hysteresis loss"] },
        ]}
      />
      <p>Large-scale transmission and distribution of electrical energy over long distances is done with transformers. The voltage output of the generator is <strong>stepped up</strong> so that the current — and hence the{" "}<Formula>{String.raw`I^2R`}</Formula> loss — is reduced; area and distributing sub-stations then step it down again before the supply reaches homes at about 240 V.</p>
      <MistakeCard
        mistake="Thinking a step-up transformer creates energy, since it turns a low voltage into a high voltage."
        correction="Energy is conserved. A step-up transformer raises the voltage and reduces the current in exactly the same proportion, so the power i_p v_p = i_s v_s is unchanged (apart from small losses)."
      />

      <h2 id="h-7-rev">Physical Quantities, Their Units and the Quality Factor</h2>
      <TableCard
        title="Physical quantities of ac circuits"
        caption="The chapter's summary table of quantities, their dimensions, units and defining relations."
        headers={["Quantity", "Symbol", "Dimensions", "Unit", "Remarks"]}
        rows={[
          { cells: ["rms voltage", "V", "[M L² T⁻³ A⁻¹]", "V", <>V = v_m/√2, where v<sub>m</sub> is the amplitude of the ac voltage</>] },
          { cells: ["rms current", "I", "[A]", "A", <>I = i<sub>m</sub>/√2, where i<sub>m</sub> is the amplitude of the ac current</>] },
          { cells: ["Inductive reactance", "X_L", "[M L² T⁻³ A⁻²]", "Ω", <>X<sub>L</sub> = ωL</>] },
          { cells: ["Capacitive reactance", "X_C", "[M L² T⁻³ A⁻²]", "Ω", <>X<sub>C</sub> = 1/ωC</>] },
          { cells: ["Impedance", "Z", "[M L² T⁻³ A⁻²]", "Ω", "Depends on the elements present in the circuit"] },
          { cells: ["Resonant frequency", "ω_r or ω₀", "[T⁻¹]", "Hz", <>ω₀ = 1/√(LC) for a series RLC circuit</>] },
          { cells: ["Quality factor", "Q", "Dimensionless", "—", <>Q = ω₀L/R = 1/(ω₀CR) for a series RLC circuit</>] },
          { cells: ["Power factor", "cos φ", "Dimensionless", "—", "φ is the phase difference between the voltage applied and the current in the circuit"] },
        ]}
      />
      <div className="my-6 grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Impedance and phase</p>
          <FormulaBlock latex={String.raw`Z = \sqrt{R^2 + \left(X_C - X_L\right)^2},\quad \tan\phi = \frac{X_C - X_L}{R}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Average power</p>
          <FormulaBlock latex={String.raw`P = V I \cos\phi = I^2 R`} important />
        </FormulaCard>
      </div>

      <h2 id="h-7-exercises">Back-of-Chapter Exercises</h2>
      <Expandable title="Exercises 7.1 – 7.8 with worked answers" variant="exercise">
        <ExerciseQa
          questions={[
            <>A 100 Ω resistor is connected to a 220 V, 50 Hz ac supply. (a) What is the rms value of current in the circuit? (b) What is the net power consumed over a full cycle?</>,
            <>(a) The peak voltage of an ac supply is 300 V. What is the rms voltage? (b) The rms value of current in an ac circuit is 10 A. What is the peak current?</>,
            <>A 44 mH inductor is connected to a 220 V, 50 Hz ac supply. Determine the rms value of the current in the circuit.</>,
            <>A 60 μF capacitor is connected to a 110 V, 60 Hz ac supply. Determine the rms value of the current in the circuit.</>,
            <>In Exercises 7.3 and 7.4, what is the net power absorbed by each circuit over a complete cycle? Explain your answer.</>,
            <>A charged 30 μF capacitor is connected to a 27 mH inductor. What is the angular frequency of free oscillations of the circuit?</>,
            <>A series LCR circuit with R = 20 Ω, L = 1.5 H and C = 35 μF is connected to a variable-frequency 200 V ac supply. When the frequency of the supply equals the natural frequency of the circuit, what is the average power transferred to the circuit in one complete cycle?</>,
            <>Figure 7.17 shows a series LCR circuit connected to a variable-frequency 230 V source with L = 5.0 H,{" "}
              C = 80 μF and R = 40 Ω. (a) Determine the source frequency which drives the circuit in resonance. (b) Obtain the
              impedance of the circuit and the amplitude of current at the resonating frequency. (c) Determine the rms
              potential drops across the three elements and show that the potential drop across the LC combination is zero at
              the resonating frequency.</>,
          ]}
          answers={[
            <><strong>(a)</strong> <Formula>{String.raw`I = V/R = 220/100 = 2.2\ \text{A}`}</Formula>. <strong>(b)</strong> <Formula>{String.raw`P = I^2R = (2.2)^2 \times 100 = 484\ \text{W}`}</Formula> — the same as <Formula>{String.raw`VI`}</Formula>.</>,
            <><strong>(a)</strong> <Formula>{String.raw`V = v_m/\sqrt{2} = 300/1.414 = 212.1\ \text{V}`}</Formula>. <strong>(b)</strong> <Formula>{String.raw`i_m = \sqrt{2}\,I = 1.414 \times 10 = 14.1\ \text{A}`}</Formula>.</>,
            <><Formula>{String.raw`X_L = 2\pi\nu L = 2\pi(50)(44\times 10^{-3}) = 13.8\ \Omega`}</Formula>, so <Formula>{String.raw`I = V/X_L = 220/13.8 = 15.9\ \text{A}`}</Formula>.</>,
            <><Formula>{String.raw`X_C = \frac{1}{2\pi\nu C} = \frac{1}{2\pi(60)(60\times 10^{-6})} = 44.2\ \Omega`}</Formula>, so <Formula>{String.raw`I = V/X_C = 110/44.2 = 2.49\ \text{A}`}</Formula>.</>,
            <>Zero in both cases. A pure inductor and a pure capacitor have <Formula>{String.raw`\phi = \pi/2`}</Formula>, so{" "}
              <Formula>{String.raw`\cos\phi = 0`}</Formula> and the current is wattless: energy is stored in the magnetic or
              electric field and returned to the source each half cycle, never dissipated.</>,
            <>For free oscillations <Formula>{String.raw`\omega = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{30\times 10^{-6} \times 27\times 10^{-3}}} = 1.1\times 10^{3}\ \text{rad/s}`}</Formula>.</>,
            <>At resonance <Formula>{String.raw`X_L = X_C`}</Formula>, so <Formula>{String.raw`Z = R`}</Formula> and the current is{" "}
              <Formula>{String.raw`I = V/R`}</Formula>. Hence{" "}
              <Formula>{String.raw`P = I^2R = V^2/R = (200)^2/20 = 2000\ \text{W}`}</Formula>.</>,
            <><strong>(a)</strong>{" "}
              <Formula>{String.raw`\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{5.0 \times 80\times 10^{-6}}} = 50\ \text{rad/s}`}</Formula>,
              i.e. <Formula>{String.raw`\nu_0 = 50/2\pi = 8.0\ \text{Hz}`}</Formula>. <strong>(b)</strong> At resonance{" "}
              <Formula>{String.raw`Z = R = 40\ \Omega`}</Formula>, so{" "}
              <Formula>{String.raw`i_m = v_m/Z = 230\sqrt{2}/40 = 8.1\ \text{A}`}</Formula>. <strong>(c)</strong>{" "}
              <Formula>{String.raw`I = 230/40 = 5.75\ \text{A}`}</Formula>;{" "}
              <Formula>{String.raw`X_L = \omega_0 L = 250\ \Omega`}</Formula> gives <Formula>{String.raw`V_L = 1437\ \text{V}`}</Formula>{" "}
              and <Formula>{String.raw`X_C = 1/(\omega_0 C) = 250\ \Omega`}</Formula> gives{" "}
              <Formula>{String.raw`V_C = 1437\ \text{V}`}</Formula>, while <Formula>{String.raw`V_R = IR = 230\ \text{V}`}</Formula>.
              Since <Formula>{String.raw`V_L`}</Formula> and <Formula>{String.raw`V_C`}</Formula> are exactly opposite in phase,
              the drop across the LC combination is <Formula>{String.raw`V_C - V_L = 0`}</Formula>.</>,
          ]}
        />
      </Expandable>
    </>
  );
}

