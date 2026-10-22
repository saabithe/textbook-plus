import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { EquationLadder } from "@/components/content/process/EquationLadder";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";

/* ------------------------------------------------------------------ *
 * Local inline-SVG diagrams for this chapter only.
 * ------------------------------------------------------------------ */

/** V ∝ 1/r (violet) and E ∝ 1/r² (amber) for a point charge — NCERT Fig. 2.4. */
function PotentialFieldGraph() {
  const mapX = (r: number) => 50 + (r - 0.4) * 72;
  const curve = (fn: (r: number) => number) =>
    Array.from({ length: 150 }, (_, i) => {
      const r = 0.5 + (4.5 * i) / 149;
      return `${mapX(r).toFixed(1)},${(230 - Math.min(200, fn(r) * 190)).toFixed(1)}`;
    }).join(" ");

  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          Variation of V and E with r for a point charge
        </span>
      </div>
      <div className="px-3 py-3">
        <svg viewBox="0 0 430 260" className="h-auto w-full" role="img" aria-label="Potential falls as one over r and field falls as one over r squared">
          <line x1="50" y1="230" x2="415" y2="230" stroke="var(--foreground)" strokeOpacity="0.35" strokeWidth="1.5" />
          <line x1="50" y1="230" x2="50" y2="25" stroke="var(--foreground)" strokeOpacity="0.35" strokeWidth="1.5" />
          <text x="415" y="250" fontSize="12" textAnchor="end" fill="var(--muted-foreground)">r</text>
          <text x="40" y="34" fontSize="12" textAnchor="end" fill="var(--muted-foreground)">V, E</text>
          <polyline points={curve((r) => 0.45 / r)} fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" />
          <polyline points={curve((r) => 0.22 / (r * r))} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
          <text x="300" y="70" fontSize="12" fontWeight="700" fill="#8b5cf6">V ∝ 1/r</text>
          <text x="300" y="150" fontSize="12" fontWeight="700" fill="#f59e0b">E ∝ 1/r²</text>
        </svg>
      </div>
      <figcaption className="border-t border-border/40 bg-muted/30 px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
        Potential falls off slowly (1/r); the field falls off faster (1/r²). Both are infinite at r = 0 and zero at infinity.
      </figcaption>
    </figure>
  );
}

/** Concentric spherical equipotentials + radial field lines of a point charge — Fig. 2.9. */
function EquipotentialDiagram() {
  const centre = { x: 170, y: 150 };
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          Equipotentials and field lines of a point charge
        </span>
      </div>
      <div className="px-3 py-3">
        <svg viewBox="0 0 340 300" className="h-auto w-full" role="img" aria-label="Concentric dashed equipotential circles with radial field lines">
          <defs>
            <marker id="ep-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="var(--muted-foreground)" />
            </marker>
          </defs>
          {[42, 78, 114].map((r) => (
            <circle key={r} cx={centre.x} cy={centre.y} r={r} fill="none" stroke="#8b5cf6" strokeOpacity="0.65" strokeWidth="1.6" strokeDasharray="6 5" />
          ))}
          {angles.map((deg) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <line
                key={deg}
                x1={centre.x + 26 * Math.cos(rad)}
                y1={centre.y + 26 * Math.sin(rad)}
                x2={centre.x + 132 * Math.cos(rad)}
                y2={centre.y + 132 * Math.sin(rad)}
                stroke="var(--muted-foreground)"
                strokeOpacity="0.55"
                strokeWidth="1.4"
                markerEnd="url(#ep-arrow)"
              />
            );
          })}
          <circle cx={centre.x} cy={centre.y} r="12" fill="#8b5cf6" />
          <text x={centre.x} y={centre.y + 4} fontSize="12" fontWeight="700" textAnchor="middle" fill="#ffffff">q</text>
          <text x="292" y="66" fontSize="11" fill="var(--muted-foreground)">V₁</text>
          <text x="292" y="104" fontSize="11" fill="var(--muted-foreground)">V₂</text>
          <text x="292" y="142" fontSize="11" fill="var(--muted-foreground)">V₃</text>
          <text x="286" y="186" fontSize="11" fill="var(--muted-foreground)">V₁ &gt; V₂ &gt; V₃</text>
        </svg>
      </div>
      <figcaption className="border-t border-border/40 bg-muted/30 px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
        Equipotentials are concentric spheres centred on the charge; the radial field cuts every surface at right angles.
      </figcaption>
    </figure>
  );
}

/** Planes normal to a uniform field — Fig. 2.10. */
function UniformFieldEquipotentials() {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          Equipotential surfaces for a uniform field
        </span>
      </div>
      <div className="px-3 py-3">
        <svg viewBox="0 0 360 190" className="h-auto w-full" role="img" aria-label="Uniform field to the right crossed by vertical equipotential planes">
          <defs>
            <marker id="uf-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="#8b5cf6" />
            </marker>
          </defs>
          {[60, 100, 140].map((y) => (
            <line key={y} x1="30" y1={y} x2="330" y2={y} stroke="#8b5cf6" strokeWidth="1.8" markerEnd="url(#uf-arrow)" />
          ))}
          {[80, 140, 200, 260].map((x) => (
            <line key={x} x1={x} y1="30" x2={x} y2="160" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeWidth="1.4" strokeDasharray="6 5" />
          ))}
          <text x="80" y="22" fontSize="11" textAnchor="middle" fill="var(--muted-foreground)">V₁</text>
          <text x="140" y="22" fontSize="11" textAnchor="middle" fill="var(--muted-foreground)">V₂</text>
          <text x="200" y="22" fontSize="11" textAnchor="middle" fill="var(--muted-foreground)">V₃</text>
          <text x="260" y="22" fontSize="11" textAnchor="middle" fill="var(--muted-foreground)">V₄</text>
          <text x="330" y="180" fontSize="12" fontWeight="700" textAnchor="end" fill="#8b5cf6">E</text>
        </svg>
      </div>
      <figcaption className="border-t border-border/40 bg-muted/30 px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
        For a uniform field along x, the equipotentials are planes parallel to the y–z plane; V falls in the direction of E.
      </figcaption>
    </figure>
  );
}

/** Geometry used for the dipole potential — Fig. 2.5. */
function DipoleGeometry() {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          Potential due to a dipole at a far point P
        </span>
      </div>
      <div className="px-3 py-3">
        <svg viewBox="0 0 360 240" className="h-auto w-full" role="img" aria-label="Dipole with charges plus q and minus q, point P at distance r and angle theta">
          <line x1="40" y1="165" x2="340" y2="165" stroke="var(--foreground)" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="4 4" />
          <line x1="95" y1="165" x2="210" y2="165" stroke="var(--foreground)" strokeOpacity="0.55" strokeWidth="2" />
          <circle cx="95" cy="165" r="10" fill="#f59e0b" />
          <text x="95" y="169" fontSize="11" fontWeight="700" textAnchor="middle" fill="#ffffff">−</text>
          <circle cx="210" cy="165" r="10" fill="#8b5cf6" />
          <text x="210" y="169" fontSize="11" fontWeight="700" textAnchor="middle" fill="#ffffff">+</text>
          <line x1="152" y1="165" x2="292" y2="80" stroke="var(--foreground)" strokeOpacity="0.5" strokeWidth="1.2" strokeDasharray="5 4" />
          <line x1="210" y1="165" x2="292" y2="80" stroke="#10b981" strokeWidth="1.6" />
          <line x1="95" y1="165" x2="292" y2="80" stroke="#f59e0b" strokeWidth="1.6" />
          <circle cx="292" cy="80" r="4.5" fill="var(--foreground)" />
          <text x="300" y="76" fontSize="12" fontWeight="700" fill="var(--foreground)">P</text>
          <text x="152" y="179" fontSize="11" textAnchor="middle" fill="var(--muted-foreground)">O</text>
          <path d="M 186 165 A 34 34 0 0 0 175 128" fill="none" stroke="var(--foreground)" strokeOpacity="0.5" strokeWidth="1.2" />
          <text x="192" y="140" fontSize="11" fill="var(--foreground)">θ</text>
          <text x="252" y="122" fontSize="11" fill="#10b981">r₁</text>
          <text x="180" y="112" fontSize="11" fill="#f59e0b">r₂</text>
          <text x="152" y="196" fontSize="11" textAnchor="middle" fill="var(--muted-foreground)">2a</text>
          <text x="262" y="170" fontSize="11" fill="#8b5cf6">p</text>
        </svg>
      </div>
      <figcaption className="border-t border-border/40 bg-muted/30 px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
        r₁ and r₂ are the distances of P from +q and −q; cos θ measures the tilt of r with the dipole axis.
      </figcaption>
    </figure>
  );
}

/** Parallel-plate capacitor, with or without a dielectric filling the gap — Figs. 2.25 & 2.29. */
function ParallelPlateDiagram({ dielectric = false }: { dielectric?: boolean }) {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          {dielectric ? "Parallel-plate capacitor with a dielectric slab" : "Parallel-plate capacitor in vacuum"}
        </span>
      </div>
      <div className="px-3 py-3">
        <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-label="Two parallel plates with charge signs and field arrows between them">
          <defs>
            <marker id="pp-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="#8b5cf6" />
            </marker>
          </defs>
          {dielectric && (
            <rect x="126" y="45" width="108" height="120" fill="#10b981" fillOpacity="0.14" stroke="#10b981" strokeWidth="1.4" />
          )}
          <line x1="120" y1="40" x2="120" y2="170" stroke="var(--foreground)" strokeOpacity="0.8" strokeWidth="5" />
          <line x1="240" y1="40" x2="240" y2="170" stroke="var(--foreground)" strokeOpacity="0.8" strokeWidth="5" />
          {[55, 80, 105, 130, 155].map((y) => (
            <text key={`p${y}`} x="108" y={y} fontSize="13" fontWeight="700" textAnchor="end" fill="#8b5cf6">+</text>
          ))}
          {[55, 80, 105, 130, 155].map((y) => (
            <text key={`m${y}`} x="252" y={y} fontSize="13" fontWeight="700" fill="#f59e0b">−</text>
          ))}
          {[60, 95, 130].map((y) => (
            <line key={`e${y}`} x1="134" y1={y} x2="222" y2={y} stroke="#8b5cf6" strokeWidth="1.6" markerEnd="url(#pp-arrow)" />
          ))}
          {dielectric && <text x="180" y="112" fontSize="12" fontWeight="700" textAnchor="middle" fill="#10b981">K</text>}
          <line x1="120" y1="188" x2="240" y2="188" stroke="var(--foreground)" strokeOpacity="0.5" strokeWidth="1.2" />
          <text x="180" y="204" fontSize="11" textAnchor="middle" fill="var(--muted-foreground)">d</text>
          <text x="70" y="30" fontSize="11" fill="var(--muted-foreground)">Q, +σ</text>
          <text x="252" y="30" fontSize="11" fill="var(--muted-foreground)">−Q, −σ</text>
        </svg>
      </div>
      <figcaption className="border-t border-border/40 bg-muted/30 px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
        The field is uniform between the plates and zero outside: E = σ/ε₀ = Q/(Aε₀).
      </figcaption>
    </figure>
  );
}

/** Two capacitors in series or in parallel — Figs. 2.26 & 2.28. */
function CapacitorNetworkDiagram({ mode }: { mode: "series" | "parallel" }) {
  const plate = (x: number, key: string) => (
    <g key={key}>
      <line x1={x} y1="52" x2={x} y2="104" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="4" />
      <line x1={x + 14} y1="52" x2={x + 14} y2="104" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="4" />
    </g>
  );

  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          Capacitors in {mode}
        </span>
      </div>
      <div className="px-3 py-3">
        {mode === "series" ? (
          <svg viewBox="0 0 360 170" className="h-auto w-full" role="img" aria-label="Two capacitors connected in series">
            <line x1="30" y1="78" x2="110" y2="78" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="2" />
            <line x1="124" y1="78" x2="214" y2="78" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="2" />
            <line x1="228" y1="78" x2="330" y2="78" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="2" />
            {plate(110, "p1")}
            {plate(214, "p2")}
            <text x="100" y="126" fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--foreground)">C₁</text>
            <text x="204" y="126" fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--foreground)">C₂</text>
            <text x="117" y="44" fontSize="11" textAnchor="middle" fill="#8b5cf6">+Q</text>
            <text x="221" y="44" fontSize="11" textAnchor="middle" fill="#8b5cf6">+Q</text>
            <text x="131" y="44" fontSize="11" textAnchor="middle" fill="#f59e0b">−Q</text>
            <text x="235" y="44" fontSize="11" textAnchor="middle" fill="#f59e0b">−Q</text>
            <text x="30" y="94" fontSize="11" fill="var(--muted-foreground)">V</text>
            <text x="180" y="152" fontSize="11" textAnchor="middle" fill="var(--muted-foreground)">same charge Q on each capacitor</text>
          </svg>
        ) : (
          <svg viewBox="0 0 360 170" className="h-auto w-full" role="img" aria-label="Two capacitors connected in parallel">
            <line x1="40" y1="40" x2="300" y2="40" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="2" />
            <line x1="40" y1="126" x2="300" y2="126" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="2" />
            <line x1="40" y1="40" x2="40" y2="126" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="2" />
            <line x1="130" y1="40" x2="130" y2="60" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="2" />
            <line x1="130" y1="106" x2="130" y2="126" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="2" />
            <line x1="240" y1="40" x2="240" y2="60" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="2" />
            <line x1="240" y1="106" x2="240" y2="126" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="2" />
            <line x1="118" y1="60" x2="142" y2="60" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="4" />
            <line x1="118" y1="106" x2="142" y2="106" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="4" />
            <line x1="228" y1="60" x2="252" y2="60" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="4" />
            <line x1="228" y1="106" x2="252" y2="106" stroke="var(--foreground)" strokeOpacity="0.85" strokeWidth="4" />
            <text x="164" y="88" fontSize="12" fontWeight="700" fill="var(--foreground)">C₁</text>
            <text x="274" y="88" fontSize="12" fontWeight="700" fill="var(--foreground)">C₂</text>
            <text x="22" y="88" fontSize="11" fill="var(--muted-foreground)">V</text>
            <text x="180" y="156" fontSize="11" textAnchor="middle" fill="var(--muted-foreground)">same potential difference V across each</text>
          </svg>
        )}
      </div>
    </figure>
  );
}

/** Conductor with a charge-free cavity — field inside the cavity is zero (Fig. 2.18). */
function ShieldingDiagram() {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          Electrostatic shielding
        </span>
      </div>
      <div className="px-3 py-3">
        <svg viewBox="0 0 360 200" className="h-auto w-full" role="img" aria-label="Conductor block with an empty cavity; field is zero inside the cavity">
          <rect x="80" y="35" width="200" height="130" rx="16" fill="var(--foreground)" fillOpacity="0.08" stroke="var(--foreground)" strokeOpacity="0.6" strokeWidth="2" />
          <rect x="140" y="70" width="80" height="60" rx="10" fill="var(--card)" stroke="var(--foreground)" strokeOpacity="0.45" strokeWidth="1.6" />
          <text x="180" y="104" fontSize="11" textAnchor="middle" fill="var(--muted-foreground)">E = 0</text>
          {[50, 75, 100, 125, 150].map((y) => (
            <text key={y} x="70" y={y} fontSize="13" fontWeight="700" textAnchor="end" fill="#8b5cf6">+</text>
          ))}
          <text x="180" y="186" fontSize="11" textAnchor="middle" fill="var(--muted-foreground)">
            charges reside on the outer surface only
          </text>
        </svg>
      </div>
      <figcaption className="border-t border-border/40 bg-muted/30 px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
        With no charge inside the cavity, the field in the cavity is zero whatever the outside field.
      </figcaption>
    </figure>
  );
}

/** Polarised dielectric slab: bound surface charges ±σ_p — Fig. 2.23. */
function PolarisedSlabDiagram() {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          A uniformly polarised dielectric slab
        </span>
      </div>
      <div className="px-3 py-3">
        <svg viewBox="0 0 360 180" className="h-auto w-full" role="img" aria-label="Dielectric slab with negative bound charge on the left face and positive on the right face">
          <defs>
            <marker id="ps-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="var(--muted-foreground)" />
            </marker>
          </defs>
          <line x1="30" y1="90" x2="90" y2="90" stroke="var(--muted-foreground)" strokeWidth="1.6" markerEnd="url(#ps-arrow)" />
          <line x1="270" y1="90" x2="330" y2="90" stroke="var(--muted-foreground)" strokeWidth="1.6" markerEnd="url(#ps-arrow)" />
          <text x="52" y="82" fontSize="11" fill="var(--muted-foreground)">E₀</text>
          <rect x="110" y="45" width="140" height="90" fill="#10b981" fillOpacity="0.13" stroke="#10b981" strokeWidth="1.5" />
          {[62, 84, 106].map((y) => (
            <text key={`n${y}`} x="102" y={y} fontSize="13" fontWeight="700" textAnchor="end" fill="#f59e0b">−</text>
          ))}
          {[62, 84, 106].map((y) => (
            <text key={`p${y}`} x="120" y={y} fontSize="13" fontWeight="700" fill="#8b5cf6">+</text>
          ))}
          {[62, 84, 106].map((y) => (
            <text key={`np${y}`} x="240" y={y} fontSize="13" fontWeight="700" textAnchor="end" fill="#f59e0b">−</text>
          ))}
          {[62, 84, 106].map((y) => (
            <text key={`pp${y}`} x="258" y={y} fontSize="13" fontWeight="700" fill="#8b5cf6">+</text>
          ))}
          <text x="180" y="166" fontSize="11" textAnchor="middle" fill="var(--muted-foreground)">bound surface charge density ±σ_p</text>
        </svg>
      </div>
      <figcaption className="border-t border-border/40 bg-muted/30 px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
        Inside the slab neighbouring dipoles cancel; only the two faces normal to E carry a net bound charge.
      </figcaption>
    </figure>
  );
}

export default function ElectrostaticPotentialChapter() {
  return (
    <>
      <h2 id="h-2-1">2.1 Introduction</h2>
      <p>
        In Class XI you met <strong>potential energy</strong>. When an external force does work in taking a body from
        one point to another against a force like spring force or gravitational force, that work gets stored as
        potential energy of the body.
      </p>
      <ul>
        <li>When the external force is removed, the body moves, gaining kinetic energy and losing an equal amount of potential energy.</li>
        <li>The sum of kinetic and potential energies is thus <strong>conserved</strong>.</li>
        <li>Forces of this kind are called <strong>conservative forces</strong> — spring force and gravitational force are examples.</li>
        <li>The Coulomb force between two stationary charges is <em>also</em> a conservative force.</li>
      </ul>
      <Callout type="note">
        The Coulomb force being conservative is no surprise — it has the same inverse-square dependence on distance as
        gravitation and differs mainly in the proportionality constant: the masses of Newton&apos;s law are replaced by
        charges. So, exactly as we define the potential energy of a mass in a gravitational field, we can define the
        <strong> electrostatic potential energy</strong> of a charge in an electrostatic field.
      </Callout>
      <p>
        Consider an electrostatic field <Formula>{String.raw`\mathbf{E}`}</Formula> due to a charge configuration. First, for
        simplicity, take the field due to a charge <strong>Q</strong> placed at the origin. Imagine bringing a test charge
        <strong> q</strong> from a point R to a point P <em>against</em> the repulsive force on it due to Q (NCERT Fig. 2.1) —
        this happens if Q and q are both positive, or both negative. For definiteness take Q, q &gt; 0.
      </p>
      <ul>
        <li>The test charge q is taken so small that it does not disturb the original configuration, i.e. the charge Q stays at the origin.</li>
        <li>The external force applied, <Formula>{String.raw`\mathbf{F}_{ext}`}</Formula>, is just enough to counter the electric force: <Formula>{String.raw`\mathbf{F}_{ext} = -\mathbf{F}_{E}`}</Formula>.</li>
        <li>There is therefore no net force on q and no acceleration — it is brought with infinitesimally slow constant speed.</li>
        <li>The work done by the external force is the negative of the work done by the electric force, and gets fully stored as potential energy of q.</li>
        <li>If the external force is removed on reaching P, the electric force takes q away from Q — the stored energy at P is used to provide kinetic energy, with kinetic plus potential energy conserved.</li>
      </ul>
      <p>The work done by external forces in moving q from R to P is:</p>
      <FormulaBlock latex={String.raw`W_{RP} = \int_{R}^{P}\mathbf{F}_{ext}\cdot\mathrm{d}\mathbf{r} = -\int_{R}^{P}\mathbf{F}_{E}\cdot\mathrm{d}\mathbf{r}`} tag="Eq. 2.1" />
      <p>
        This work is done against the electrostatic repulsive force, and gets stored as potential energy. The work
        increases the potential energy by an amount equal to the potential energy difference between R and P:
      </p>
      <FormulaBlock latex={String.raw`\Delta U = U_P - U_R = W_{RP}`} tag="Eq. 2.2" />
      <Callout type="important">
        <p>
          Electric potential energy difference between two points is <strong>the work required to be done by an external
          force in moving (without accelerating) charge q from one point to another for electric field of any arbitrary
          charge configuration</strong>.
        </p>
      </Callout>
      <p>
        Note that this displacement is in a sense opposite to the electric force, so the work done <em>by the electric
        field</em> is negative, i.e. <Formula>{String.raw`-W_{RP}`}</Formula>. Two important comments follow:
      </p>
      <ul>
        <li>
          The right side of Eq. (2.2) depends only on the initial and final positions of the charge — the work done by an
          electrostatic field is independent of the path taken. This is the fundamental characteristic of a conservative
          force.
        </li>
        <li>
          The concept of potential energy would not be meaningful if the work depended on the path.
        </li>
        <li>
          Potential energy so defined is undetermined to within an <strong>additive constant</strong>: adding an arbitrary
          constant <Formula>{String.raw`\alpha`}</Formula> at every point leaves the difference unchanged,
        </li>
      </ul>
      <FormulaBlock latex={String.raw`(U_P + \alpha) - (U_R + \alpha) = U_P - U_R`} />
      <p>
        In other words, only the <em>difference</em> of potential energy is physically significant, and we are free to
        choose the point where it is zero. A convenient choice is to have electrostatic potential energy zero at
        infinity. Taking R at infinity in Eq. (2.2):
      </p>
      <FormulaBlock latex={String.raw`W_{\infty P} = U_P - U_\infty = U_P`} tag="Eq. 2.3" />
      <Callout type="important">
        <p>
          Potential energy of charge q at a point (in the presence of field due to any charge configuration) is
          <strong> the work done by the external force (equal and opposite to the electric force) in bringing the charge
          q from infinity to that point</strong>.
        </p>
      </Callout>
      <MistakeCard
        mistake="Treating potential energy as an absolute quantity, and asking “what is the potential energy at P?” without fixing a zero."
        correction="Only differences of potential energy are measurable. Fix V = 0 (or U = 0) at infinity once, and every later value is quoted relative to that choice."
        example="In Example 2.2 the answer 9 cm and 45 cm depends on taking the potential zero at infinity."
      />

      <h2 id="h-2-2">2.2 Electrostatic Potential</h2>
      <p>
        Take any general static charge configuration. The potential energy of a test charge q is expressed through the
        work done on it.
      </p>
      <ul>
        <li>The work is proportional to q, because the force at any point is <Formula>{String.raw`q\mathbf{E}`}</Formula>, where E is the field of the given configuration.</li>
        <li>Dividing the work by the amount of charge q gives a quantity independent of q.</li>
        <li>This <strong>work done per unit test charge</strong> is characteristic of the electric field of the configuration — it leads to the idea of electrostatic potential V.</li>
      </ul>
      <FormulaBlock latex={String.raw`V_P - V_R = \frac{U_P - U_R}{q}`} label="Work done by external force in bringing a unit positive charge from R to P" tag="Eq. 2.4" />
      <ul>
        <li><Formula>{String.raw`V_P`}</Formula> and <Formula>{String.raw`V_R`}</Formula> are the electrostatic potentials at P and R.</li>
        <li>It is the <em>potential difference</em> that is physically significant, not the actual value of potential.</li>
        <li>Choosing the potential to be zero at infinity, Eq. (2.4) says: work done by an external force in bringing a unit positive charge from infinity to a point equals the electrostatic potential at that point.</li>
      </ul>
      <Callout type="important">
        <p>
          The electrostatic potential (V) at any point in a region with electrostatic field is <strong>the work done in
          bringing a unit positive charge (without acceleration) from infinity to that point</strong>.
        </p>
      </Callout>
      <ul>
        <li>The qualifying remarks about potential energy apply here too.</li>
        <li>To obtain work per unit test charge properly, take an <em>infinitesimal</em> test charge <Formula>{String.raw`\mathrm{d}q`}</Formula>, find the work <Formula>{String.raw`\mathrm{d}W`}</Formula> in bringing it from infinity to the point, and evaluate the ratio <Formula>{String.raw`\mathrm{d}W/\mathrm{d}q`}</Formula>.</li>
        <li>The external force at every point of the path must be equal and opposite to the electrostatic force on the test charge at that point.</li>
      </ul>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FactCard
          title="Unit of potential"
          definition="The SI unit of potential is the volt (V): 1 V = 1 J C⁻¹ — one joule of work per coulomb of charge."
          icon="⚡"
        />
        <FactCard
          title="Scalar quantity"
          definition="Potential is a scalar. Potentials due to several charges add algebraically — no direction to resolve."
          icon="🔢"
        />
      </div>
      <Callout type="didyouknow">
        The unit honours <strong>Count Alessandro Volta</strong> (1745–1827), professor at Pavia. Volta showed that the
        &ldquo;animal electricity&rdquo; seen by Luigi Galvani in frog-muscle experiments was not a property of living
        tissue: electricity was generated whenever any wet body was sandwiched between dissimilar metals. This led him to
        the first <strong>voltaic pile</strong> — a stack of moist cardboard disks (electrolyte) between metal disks
        (electrodes).
      </Callout>
      <MistakeCard
        mistake="Confusing potential V with potential energy U — writing U = q/(4πε₀r) for a charge q sitting in a field."
        correction="Potential is per unit charge, U = qV. The potential at a distance r from a source charge Q is Q/(4πε₀r); the energy of a test charge q placed there is qV = qQ/(4πε₀r)."
      />

      <h2 id="h-2-3">2.3 Potential due to a Point Charge</h2>
      <p>
        Consider a point charge Q at the origin (NCERT Fig. 2.3), taken positive for definiteness. We want the potential
        at a point P with position vector <strong>r</strong>. For Q &gt; 0 the work done against the repulsive force on a
        unit positive test charge is positive.
      </p>
      <ul>
        <li>Since the work done is independent of the path, choose a convenient one — along the radial direction from infinity to P.</li>
        <li>At an intermediate point P′ on this path, the electrostatic force on a unit positive charge is:</li>
      </ul>
      <FormulaBlock latex={String.raw`\frac{Q}{4\pi\varepsilon_0 r'^{2}}\,\hat{\mathbf{r}}'`} label="Force on a unit positive charge at P′" tag="Eq. 2.5" />
      <p>Work done against this force from <Formula>{String.raw`r'`}</Formula> to <Formula>{String.raw`r' + \Delta r'`}</Formula> is:</p>
      <FormulaBlock latex={String.raw`\Delta W = -\frac{Q}{4\pi\varepsilon_0 r'^{2}}\,\Delta r'`} tag="Eq. 2.6" />
      <ul>
        <li>The negative sign appears because for <Formula>{String.raw`\Delta r' < 0`}</Formula>, <Formula>{String.raw`\Delta W`}</Formula> is positive.</li>
        <li>Total work done by the external force is obtained by integrating from <Formula>{String.raw`r' = \infty`}</Formula> to <Formula>{String.raw`r' = r`}</Formula>:</li>
      </ul>
      <FormulaBlock latex={String.raw`W = -\int_{\infty}^{r}\frac{Q}{4\pi\varepsilon_0 r'^{2}}\,\mathrm{d}r' = \frac{Q}{4\pi\varepsilon_0 r}`} tag="Eq. 2.7" />
      <p>This, by definition, is the potential at P due to the charge Q:</p>
      <FormulaBlock latex={String.raw`V(r) = \frac{Q}{4\pi\varepsilon_0 r}`} important label="Potential due to a point charge" tag="Eq. 2.8" />
      <ul>
        <li>Equation (2.8) is true for any sign of Q, though Q &gt; 0 was assumed in the derivation.</li>
        <li>For Q &lt; 0, V &lt; 0: the work done by the external force per unit positive charge, in bringing it from infinity, is negative.</li>
        <li>Equivalently, the work done <em>by the electrostatic force</em> in bringing a unit positive charge from infinity to P is then positive — the force is attractive and the displacement is along it.</li>
        <li>The result is consistent with the choice that potential at infinity be zero.</li>
      </ul>
      <PotentialFieldGraph />
      <Expandable title="Example 2.1 — Potential near a charge and work done to bring a second charge" variant="example">
        <ProblemSolution.Problem>
          <p>
            (a) Calculate the potential at a point P due to a charge of <Formula>{String.raw`4\times10^{-7}\ \text{C}`}</Formula>{" "}
            located 9 cm away.
          </p>
          <p>
            (b) Hence obtain the work done in bringing a charge of <Formula>{String.raw`2\times10^{-9}\ \text{C}`}</Formula> from
            infinity to the point P. Does the answer depend on the path along which the charge is brought?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> With <Formula>{String.raw`Q = 4\times10^{-7}\ \text{C}`}</Formula> and <Formula>{String.raw`r = 0.09\ \text{m}`}</Formula>:</p>
          <FormulaBlock latex={String.raw`V = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r} = 9\times10^{9} \times \frac{4\times10^{-7}}{0.09} = 4\times10^{4}\ \text{V}`} />
          <p><strong>(b)</strong> Work done is charge × potential:</p>
          <FormulaBlock latex={String.raw`W = qV = 2\times10^{-9} \times 4\times10^{4} = 8\times10^{-5}\ \text{J}`} important />
          <p>
            <strong>No</strong>, the work done is path independent. Any arbitrary infinitesimal path can be resolved into
            two perpendicular displacements: one along r and another perpendicular to r. The work corresponding to the
            latter is zero.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-2-4">2.4 Potential due to an Electric Dipole</h2>
      <p>
        An electric dipole consists of two charges <strong>q</strong> and <strong>−q</strong> separated by a (small)
        distance <strong>2a</strong>. Its total charge is zero and it is characterised by the dipole moment vector{" "}
        <Formula>{String.raw`\mathbf{p}`}</Formula>, of magnitude <Formula>{String.raw`q\times 2a`}</Formula>, pointing
        from −q to q.
      </p>
      <ul>
        <li>The field of a dipole at position vector <strong>r</strong> depends not just on r but also on the angle between <strong>r</strong> and <strong>p</strong>.</li>
        <li>At large distance the field falls off as <Formula>{String.raw`1/r^{3}`}</Formula>, not as <Formula>{String.raw`1/r^{2}`}</Formula> typical of a single charge.</li>
        <li>Since potential is related to the work done by the field, electrostatic potential also follows the <strong>superposition principle</strong>.</li>
      </ul>
      <DipoleGeometry />
      <p>With the origin at the centre of the dipole, the potential is the sum of the potentials due to q and −q:</p>
      <FormulaBlock latex={String.raw`V = \frac{1}{4\pi\varepsilon_0}\left(\frac{q}{r_1} - \frac{q}{r_2}\right)`} tag="Eq. 2.9" />
      <p>
        where r₁ and r₂ are the distances of P from q and −q respectively. For r ≫ a, retaining terms only up to first
        order in a/r:
      </p>
      <FormulaBlock latex={String.raw`V = \frac{q\,2a\cos\theta}{4\pi\varepsilon_0 r^{2}} = \frac{p\cos\theta}{4\pi\varepsilon_0 r^{2}}`} tag="Eq. 2.14" />
      <p>
        Now <Formula>{String.raw`p\cos\theta = \mathbf{p}\cdot\hat{\mathbf{r}}`}</Formula>, so the potential of a dipole is:
      </p>
      <FormulaBlock latex={String.raw`V = \frac{1}{4\pi\varepsilon_0}\,\frac{\mathbf{p}\cdot\hat{\mathbf{r}}}{r^{2}}`} important label="Potential due to a dipole (r ≫ a)" tag="Eq. 2.15" />
      <ul>
        <li>The expression is approximately true only for distances large compared with the size of the dipole, so that higher-order terms in a/r are negligible.</li>
        <li>For a <em>point dipole</em> p at the origin, Eq. (2.15) is exact.</li>
      </ul>
      <FormulaBlock latex={String.raw`V = \pm\frac{p}{4\pi\varepsilon_0 r^{2}}`} label="On the dipole axis: + for θ = 0, − for θ = π" tag="Eq. 2.16" />
      <ul>
        <li>In the equatorial plane (θ = π/2) the potential is <strong>zero</strong>.</li>
        <li>V depends not just on r but also on the angle θ between <strong>r</strong> and <strong>p</strong>.</li>
        <li>It is axially symmetric about <strong>p</strong>: rotating r about p at fixed θ traces a cone of constant potential.</li>
        <li>The dipole potential falls off as <Formula>{String.raw`1/r^{2}`}</Formula> at large distance, not as <Formula>{String.raw`1/r`}</Formula> characteristic of a single charge.</li>
      </ul>
      <Expandable title="Derivation — dipole potential at a far point (Eqs. 2.9–2.15)" variant="misc">
        <p>By geometry applied to the triangle with sides r, a and r₁:</p>
        <FormulaBlock latex={String.raw`r_1^{2} = r^{2} + a^{2} - 2ar\cos\theta`} tag="Eq. 2.10" />
        <FormulaBlock latex={String.raw`r_2^{2} = r^{2} + a^{2} + 2ar\cos\theta`} tag="Eq. 2.10" />
        <p>Take r ≫ a and retain terms only up to first order in a/r:</p>
        <FormulaBlock latex={String.raw`r_1 \simeq r\left(1 - \frac{2a}{r}\cos\theta\right)^{1/2} \simeq r\left(1 - \frac{a}{r}\cos\theta\right)`} tag="Eq. 2.11" />
        <FormulaBlock latex={String.raw`r_2 \simeq r\left(1 + \frac{a}{r}\cos\theta\right)`} tag="Eq. 2.12" />
        <p>Using the binomial theorem and retaining first-order terms:</p>
        <FormulaBlock latex={String.raw`\frac{1}{r_1} \simeq \frac{1}{r}\left(1 + \frac{a}{r}\cos\theta\right)`} tag="Eq. 2.13(a)" />
        <FormulaBlock latex={String.raw`\frac{1}{r_2} \simeq \frac{1}{r}\left(1 - \frac{a}{r}\cos\theta\right)`} tag="Eq. 2.13(b)" />
        <p>Substituting in Eq. (2.9) and using p = 2qa:</p>
        <FormulaBlock latex={String.raw`V = \frac{1}{4\pi\varepsilon_0}\,\frac{q\,2a\cos\theta}{r^{2}} = \frac{p\cos\theta}{4\pi\varepsilon_0 r^{2}}`} important />
        <p className="text-sm text-muted-foreground">
          The step shows why a dipole potential is weaker than a single-charge potential: the two contributions nearly
          cancel, leaving a difference of order a/r².
        </p>
      </Expandable>
      <Callout type="note">
        A single charge gives <Formula>{String.raw`V \propto 1/r`}</Formula> and <Formula>{String.raw`E \propto 1/r^{2}`}</Formula>.
        A dipole gives <Formula>{String.raw`V \propto 1/r^{2}`}</Formula> and <Formula>{String.raw`E \propto 1/r^{3}`}</Formula>.
        Each extra power of r comes from the near-cancellation of two opposite charges.
      </Callout>
      <h2 id="h-2-5">2.5 Potential due to a System of Charges</h2>
      <p>
        Consider charges <Formula>{String.raw`q_1, q_2, \dots, q_n`}</Formula> with position vectors{" "}
        <Formula>{String.raw`\mathbf{r}_1, \mathbf{r}_2, \dots, \mathbf{r}_n`}</Formula> relative to some origin
        (NCERT Fig. 2.6).
      </p>
      <ul>
        <li>The potential at P due to <Formula>{String.raw`q_1`}</Formula> is <Formula>{String.raw`V_1 = \frac{1}{4\pi\varepsilon_0}\frac{q_1}{r_{1P}}`}</Formula>, where <Formula>{String.raw`r_{1P}`}</Formula> is the distance between <Formula>{String.raw`q_1`}</Formula> and P.</li>
        <li>Similarly <Formula>{String.raw`V_2 = \frac{1}{4\pi\varepsilon_0}\frac{q_2}{r_{2P}}`}</Formula> and <Formula>{String.raw`V_3 = \frac{1}{4\pi\varepsilon_0}\frac{q_3}{r_{3P}}`}</Formula>, and so on.</li>
        <li>By the superposition principle, the potential at P due to the whole configuration is the <strong>algebraic sum</strong> of the potentials due to the individual charges.</li>
      </ul>
      <FormulaBlock latex={String.raw`V = V_1 + V_2 + \dots + V_n`} tag="Eq. 2.17" />
      <FormulaBlock latex={String.raw`V = \frac{1}{4\pi\varepsilon_0}\left(\frac{q_1}{r_{1P}} + \frac{q_2}{r_{2P}} + \dots + \frac{q_n}{r_{nP}}\right)`} important tag="Eq. 2.18" />
      <Comparison
        columns={[
          {
            title: "Potential (scalar)",
            children: (
              <ul>
                <li>Adds <strong>algebraically</strong>, with signs.</li>
                <li>A positive and a negative charge can give zero potential at a point.</li>
                <li>No direction is involved in the sum.</li>
              </ul>
            ),
          },
          {
            title: "Field (vector)",
            children: (
              <ul>
                <li>Adds by the <strong>parallelogram law</strong>.</li>
                <li>Two fields of equal magnitude at an angle add to a non-zero resultant.</li>
                <li>Direction must be tracked for every term.</li>
              </ul>
            ),
          },
        ]}
      />
      <p>
        For a continuous charge distribution with charge density <Formula>{String.raw`\rho(\mathbf{r})`}</Formula>, divide it
        into small volume elements of size <Formula>{String.raw`\Delta v`}</Formula> carrying charge{" "}
        <Formula>{String.raw`\rho\,\Delta v`}</Formula>, find the potential due to each element and sum — strictly, integrate —
        over all contributions.
      </p>
      <p>
        For a <strong>uniformly charged spherical shell</strong>, the field outside is as if the entire charge were at the
        centre, so:
      </p>
      <FormulaBlock latex={String.raw`V = \frac{q}{4\pi\varepsilon_0 r} \qquad (r \ge R)`} tag="Eq. 2.19(a)" />
      <ul>
        <li>The field inside the shell is zero.</li>
        <li>Zero field means no work is done in moving a charge inside the shell, so the potential is constant inside.</li>
        <li>It therefore equals its value at the surface:</li>
      </ul>
      <FormulaBlock latex={String.raw`V = \frac{q}{4\pi\varepsilon_0 R} \qquad (r \le R)`} tag="Eq. 2.19(b)" />
      <KeyPoint title="Shell result worth memorising">
        Outside a charged shell the potential is that of a point charge at the centre; inside it is <em>constant</em> and
        equal to the surface value. The potential is continuous across the surface even though the field jumps from
        <Formula>{String.raw`\sigma/\varepsilon_0`}</Formula> to zero.
      </KeyPoint>
      <Expandable title="Example 2.2 — Where is the potential zero on the line joining two charges?" variant="example">
        <ProblemSolution.Problem>
          <p>
            Two charges <Formula>{String.raw`3\times10^{-8}\ \text{C}`}</Formula> and{" "}
            <Formula>{String.raw`-2\times10^{-8}\ \text{C}`}</Formula> are located 15 cm apart. At what point on the line
            joining the two charges is the electric potential zero? Take the potential at infinity to be zero.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Take the origin O at the positive charge and the line joining the charges as the x-axis, with the negative
            charge on the right (NCERT Fig. 2.7). Let P be a point at coordinate x.
          </p>
          <p>
            For <Formula>{String.raw`x < 0`}</Formula> the two potentials cannot cancel (both charges give potentials of
            the same sign there), so x must be positive.
          </p>
          <p><strong>Case 1 — P between the charges:</strong></p>
          <FormulaBlock latex={String.raw`\frac{1}{4\pi\varepsilon_0}\left[\frac{3\times10^{-8}}{x} - \frac{2\times10^{-8}}{15-x}\right] = 0`} />
          <p>with x in cm, i.e.</p>
          <FormulaBlock latex={String.raw`\frac{3}{x} = \frac{2}{15-x} \;\Rightarrow\; x = 9\ \text{cm}`} />
          <p><strong>Case 2 — P on the extended line beyond the negative charge:</strong></p>
          <FormulaBlock latex={String.raw`\frac{3}{x} = \frac{2}{x-15} \;\Rightarrow\; x = 45\ \text{cm}`} important />
          <p>
            The potential is zero at <strong>9 cm and 45 cm</strong> from the positive charge, on the side of the negative
            charge. The formula used required choosing the potential zero at infinity.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-2-6">2.6 Equipotential Surfaces</h2>
      <Callout type="important">
        <p>
          An <strong>equipotential surface</strong> is a surface with a constant value of potential at all points on the
          surface.
        </p>
      </Callout>
      <p>
        For a single charge q, <Formula>{String.raw`V = \frac{1}{4\pi\varepsilon_0}\frac{q}{r}`}</Formula> shows that V is
        constant if r is constant. Hence:
      </p>
      <ul>
        <li>Equipotential surfaces of a single point charge are <strong>concentric spherical surfaces</strong> centred at the charge.</li>
        <li>The field lines of a single charge are radial lines starting from or ending at the charge, depending on its sign.</li>
        <li>The electric field at every point is <strong>normal</strong> to the equipotential surface passing through that point.</li>
      </ul>
      <EquipotentialDiagram />
      <p>This normality is general — for any charge configuration, the equipotential surface through a point is normal to the field there. The proof is short:</p>
      <ul>
        <li>If the field were not normal to the surface, it would have a non-zero component along the surface.</li>
        <li>Moving a unit test charge against that component would then require work.</li>
        <li>But by definition there is no potential difference between any two points on the surface, and no work is needed to move a test charge along it.</li>
        <li>The field must therefore be normal to the equipotential surface at every point.</li>
      </ul>
      <p>
        For a uniform field along the x-axis, the equipotential surfaces are planes normal to the x-axis — planes parallel
        to the y–z plane.
      </p>
      <UniformFieldEquipotentials />
      <TableCard
        title="Shape of the equipotential surfaces"
        caption="Equipotentials offer a second visual picture of a field configuration, alongside the field lines."
        headers={["Charge configuration", "Equipotential surfaces", "What the spacing tells you"]}
        rows={[
          { cells: ["Single point charge (q)", "Concentric spheres centred on the charge", "Crowded near the charge, where E is strong"] },
          { cells: ["Uniform field along x", "Planes parallel to the y–z plane", "Equally spaced, because E is uniform"] },
          { cells: ["Electric dipole", "Surfaces wrapping the dipole axis, symmetric about p", "Not spheres — V also depends on θ"] },
          { cells: ["Two identical positive charges", "Surfaces enclosing both charges, merging far away", "A figure-of-eight pattern near the charges"] },
          { cells: ["Charged spherical shell", "Concentric spheres outside; the whole interior is one surface", "V constant inside, so E = 0 there"] },
        ]}
      />
      <KeyPoint title="Two consequences you will use constantly">
        <ul>
          <li>No work is done in moving a charge from one point to another on an equipotential surface.</li>
          <li>Equipotentials are closer together where the field is stronger — the same potential drop is squeezed into a smaller distance.</li>
        </ul>
      </KeyPoint>

      <h3 id="h-2-6-1">2.6.1 Relation between Field and Potential</h3>
      <p>
        Consider two closely spaced equipotential surfaces A and B with potential values V and{" "}
        <Formula>{String.raw`V + \mathrm{d}V`}</Formula>, where <Formula>{String.raw`\mathrm{d}V`}</Formula> is the change in V
        in the direction of the field <Formula>{String.raw`\mathbf{E}`}</Formula>. Let P be a point on surface B, and{" "}
        <Formula>{String.raw`\mathrm{d}l`}</Formula> the perpendicular distance of surface A from P.
      </p>
      <EquationLadder
        steps={[
          {
            label: "Move a unit positive charge from B to A against the field",
            equation: String.raw`|\mathbf{E}|\,\mathrm{d}l = V - (V + \mathrm{d}V) = -\mathrm{d}V`,
            note: "The work done in this process is |E| dl, and it equals the potential difference V_A − V_B.",
            tag: "Eq. 2.20",
          },
          {
            label: "Since dV is negative, write dV = −|dV|",
            equation: String.raw`|\mathbf{E}| = -\frac{\delta V}{\delta l}`,
          },
          {
            label: "So the field magnitude equals the potential drop per unit length",
            equation: String.raw`E = -\frac{\delta V}{\delta l} = +\frac{|\delta V|}{\delta l}`,
            final: true,
            tag: "Eq. 2.21",
          },
        ]}
      />
      <FormulaBlock latex={String.raw`\mathbf{E} = -\frac{\mathrm{d}V}{\mathrm{d}r}\,\hat{\mathbf{r}}`} important label="Field as the negative gradient of potential (radial case)" />
      <p>We thus arrive at two important conclusions about the relation between field and potential:</p>
      <ul>
        <li>The electric field is in the direction in which the <strong>potential decreases steepest</strong>.</li>
        <li>Its magnitude is given by the change in the magnitude of potential per unit displacement <em>normal</em> to the equipotential surface at the point.</li>
      </ul>
      <MistakeCard
        mistake="Thinking E points in the direction of increasing potential, or forgetting the minus sign in E = −dV/dr."
        correction="Positive charge moves from high V to low V on its own, so E points towards decreasing V. The minus sign encodes exactly that."
        example="Inside a charged shell V is constant, so dV/dr = 0 and E = 0 — a single derivative reproduces the whole result."
      />
      <Callout type="note">
        The relation works both ways: given V(r) you get E by differentiation, and given E you get the potential
        difference by integration, <Formula>{String.raw`V_B - V_A = -\int_A^{B}\mathbf{E}\cdot\mathrm{d}\mathbf{l}`}</Formula>.
      </Callout>

      <h2 id="h-2-7">2.7 Potential Energy of a System of Charges</h2>
      <p>
        Consider first two charges <Formula>{String.raw`q_1`}</Formula> and <Formula>{String.raw`q_2`}</Formula> at position
        vectors <Formula>{String.raw`\mathbf{r}_1`}</Formula> and <Formula>{String.raw`\mathbf{r}_2`}</Formula>. We calculate
        the work done externally in building up this configuration from infinity.
      </p>
      <Stepper
        steps={[
          {
            label: "Bring q₁ from infinity to r₁",
            description: "There is no external field to work against, so the work done in this step is zero.",
          },
          {
            label: "q₁ sets up a potential in space",
            description: (
              <>
                <Formula>{String.raw`V_1 = \frac{1}{4\pi\varepsilon_0}\frac{q_1}{r_{1P}}`}</Formula>, where r₁P is the distance
                of a point P from the location of q₁.
              </>
            ),
          },
          {
            label: "Bring q₂ from infinity to r₂",
            description: (
              <>
                Work done = q₂ × potential at r₂ due to q₁ ={" "}
                <Formula>{String.raw`\frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r_{12}}`}</Formula>, with r₁₂ the distance
                between points 1 and 2.
              </>
            ),
          },
          {
            label: "The work is stored as potential energy",
            description: "Electrostatic force is conservative, so this work is stored in the form of potential energy of the system.",
          },
        ]}
      />
      <FormulaBlock latex={String.raw`U = \frac{1}{4\pi\varepsilon_0}\,\frac{q_1 q_2}{r_{12}}`} important label="Potential energy of a system of two charges" tag="Eq. 2.22" />
      <ul>
        <li>If q₂ was brought first and q₁ later, U would be the same.</li>
        <li>The expression is unaltered whatever way the charges are brought to their locations, because work is path-independent.</li>
        <li>Equation (2.22) is true for any sign of <Formula>{String.raw`q_1`}</Formula> and <Formula>{String.raw`q_2`}</Formula>.</li>
        <li>For like charges (<Formula>{String.raw`q_1 q_2 > 0`}</Formula>) the force is repulsive and U is <strong>positive</strong> — positive work is needed to bring them from infinity to a finite separation.</li>
        <li>For unlike charges (<Formula>{String.raw`q_1 q_2 < 0`}</Formula>) the force is attractive: positive work is needed to take them apart to infinity, so the potential energy of the bound pair is <strong>negative</strong>.</li>
      </ul>
      <p>
        For three charges <Formula>{String.raw`q_1, q_2, q_3`}</Formula> at{" "}
        <Formula>{String.raw`\mathbf{r}_1, \mathbf{r}_2, \mathbf{r}_3`}</Formula>, bring them one at a time. Bringing q₁ costs
        nothing; bringing q₂ costs{" "}
        <Formula>{String.raw`q_2 V_1(\mathbf{r}_2) = \frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r_{12}}`}</Formula>; bringing q₃
        costs q₃ times the potential of the first two at r₃:
      </p>
      <FormulaBlock latex={String.raw`q_3 V_{1,2}(\mathbf{r}_3) = \frac{q_3}{4\pi\varepsilon_0}\left(\frac{q_1}{r_{13}} + \frac{q_2}{r_{23}}\right)`} tag="Eq. 2.25" />
      <FormulaBlock latex={String.raw`U = \frac{1}{4\pi\varepsilon_0}\left(\frac{q_1 q_2}{r_{12}} + \frac{q_1 q_3}{r_{13}} + \frac{q_2 q_3}{r_{23}}\right)`} important label="Potential energy of three charges — one term per pair" tag="Eq. 2.26" />
      <ul>
        <li>Again, the result is independent of the order of assembly.</li>
        <li>The potential energy is characteristic of the <em>present state</em> of the configuration, not of the way the state is achieved.</li>
        <li>For n charges there is one term per pair: <Formula>{String.raw`n(n-1)/2`}</Formula> terms in all.</li>
      </ul>
      <Expandable title="Example 2.4 — Four charges at the corners of a square" variant="example">
        <ProblemSolution.Problem>
          <p>
            Four charges are arranged at the corners of a square ABCD of side d, as shown (NCERT Fig. 2.15): +q at A, −q at
            B, +q at C, −q at D. (a) Find the work required to put together this arrangement. (b) A charge q₀ is brought to
            the centre E of the square, the four charges being held fixed at its corners. How much extra work is needed?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            <strong>(a)</strong> Since the work depends on the final arrangement and not on how it is assembled, take one
            convenient order: +q to A, then −q to B, +q to C, −q to D.
          </p>
          <ul>
            <li><strong>(i)</strong> Work to bring +q to A with nothing else present: <strong>zero</strong>.</li>
            <li><strong>(ii)</strong> Work to bring −q to B, with +q at A:</li>
          </ul>
          <FormulaBlock latex={String.raw`(-q)\times\frac{1}{4\pi\varepsilon_0}\frac{q}{d} = -\frac{q^{2}}{4\pi\varepsilon_0 d}`} />
          <ul>
            <li><strong>(iii)</strong> Work to bring +q to C, with +q at A and −q at B:</li>
          </ul>
          <FormulaBlock latex={String.raw`q\left(\frac{q}{4\pi\varepsilon_0 d} + \frac{-q}{4\pi\varepsilon_0\sqrt{2}d}\right) = \frac{q^{2}}{4\pi\varepsilon_0 d}\left(1 - \frac{1}{\sqrt{2}}\right)`} />
          <ul>
            <li><strong>(iv)</strong> Work to bring −q to D, with +q at A, −q at B and +q at C:</li>
          </ul>
          <FormulaBlock latex={String.raw`(-q)\left(\frac{q}{4\pi\varepsilon_0 d} + \frac{-q}{4\pi\varepsilon_0 d} + \frac{q}{4\pi\varepsilon_0\sqrt{2}d}\right) = \frac{q^{2}}{4\pi\varepsilon_0 d}\left(\frac{1}{\sqrt{2}} - 1\right)`} />
          <p>Adding steps (i)–(iv), the total work required is:</p>
          <FormulaBlock latex={String.raw`W = -\frac{q^{2}}{4\pi\varepsilon_0 d}\left(4 - \sqrt{2}\right)`} important />
          <p>
            By definition this total work is the electrostatic energy of the arrangement. The same energy follows from
            summing the six pair terms, and from any other order of assembly.
          </p>
          <p>
            <strong>(b)</strong> The extra work is q₀ × (potential at E). The potential at the centre due to the charges at
            A and C is cancelled by that due to the charges at B and D, so the potential at E is zero. Hence
            <strong> no work is required</strong> to bring any charge to the centre.
          </p>
        </ProblemSolution.Solution>
      </Expandable>
      <h2 id="h-2-8">2.8 Potential Energy in an External Field</h2>
      <h3 id="h-2-8-1">2.8.1 Potential energy of a single charge</h3>
      <p>
        In Section 2.7 the source of the field was specified — the charges and their locations — and we found the potential
        energy of that system. Here the question is different: what is the potential energy of a charge q in a{" "}
        <em>given</em> field?
      </p>
      <ul>
        <li>The external field <Formula>{String.raw`\mathbf{E}`}</Formula> is <strong>not</strong> produced by the charge(s) whose potential energy we are computing.</li>
        <li>The external sources may be known, but often they are unspecified — what is given is the field E or the potential V they produce.</li>
        <li>Assume q does not significantly affect those sources. This holds if q is very small, or if the sources are held fixed by unspecified forces.</li>
        <li>Even a finite q can be ignored when very strong sources far away produce a finite field in the region of interest.</li>
        <li>We are not interested in the potential energy of the sources producing the external field.</li>
      </ul>
      <p>
        With V zero at infinity by definition, the work done in bringing q from infinity to P is qV, and this is stored as
        potential energy of q:
      </p>
      <FormulaBlock latex={String.raw`U = qV(\mathbf{r})`} important label="Potential energy of a charge in an external field" tag="Eq. 2.27" />
      <p>
        If an electron (charge <Formula>{String.raw`e = 1.6\times10^{-19}\ \text{C}`}</Formula>) is accelerated through a
        potential difference of 1 volt, it gains energy{" "}
        <Formula>{String.raw`q\Delta V = 1.6\times10^{-19}\ \text{J}`}</Formula>. This unit of energy is the{" "}
        <strong>electron volt</strong>.
      </p>
      <MetricCard label="1 electron volt" value="1.6 × 10⁻¹⁹ J" description="Energy gained by an electron accelerated through a potential difference of 1 V." />
      <TableCard
        title="The eV family of units"
        caption="Units based on the electron volt are the working units of atomic, nuclear and particle physics."
        headers={["Unit", "In eV", "In joules"]}
        rows={[
          { cells: ["1 eV", "1 eV", "1.6 × 10⁻¹⁹ J"] },
          { cells: ["1 keV", "10³ eV", "1.6 × 10⁻¹⁶ J"] },
          { cells: ["1 MeV", "10⁶ eV", "1.6 × 10⁻¹³ J"] },
          { cells: ["1 GeV", "10⁹ eV", "1.6 × 10⁻¹⁰ J"] },
          { cells: ["1 TeV", "10¹² eV", "1.6 × 10⁻⁷ J"] },
        ]}
      />

      <h3 id="h-2-8-2">2.8.2 Potential energy of a system of two charges in an external field</h3>
      <p>
        For two charges <Formula>{String.raw`q_1`}</Formula> and <Formula>{String.raw`q_2`}</Formula> at{" "}
        <Formula>{String.raw`\mathbf{r}_1`}</Formula> and <Formula>{String.raw`\mathbf{r}_2`}</Formula> in an external field,
        bring them one at a time.
      </p>
      <ul>
        <li>Work done in bringing <Formula>{String.raw`q_1`}</Formula> from infinity to <Formula>{String.raw`\mathbf{r}_1`}</Formula> is <Formula>{String.raw`q_1 V(\mathbf{r}_1)`}</Formula>.</li>
        <li>Work done on <Formula>{String.raw`q_2`}</Formula> against the <em>external</em> field is <Formula>{String.raw`q_2 V(\mathbf{r}_2)`}</Formula>.</li>
        <li>Work done on <Formula>{String.raw`q_2`}</Formula> against the field <em>due to q₁</em> is <Formula>{String.raw`\frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r_{12}}`}</Formula>.</li>
        <li>By the superposition principle for fields, add the two contributions for q₂:</li>
      </ul>
      <FormulaBlock latex={String.raw`W_2 = q_2 V(\mathbf{r}_2) + \frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r_{12}}`} tag="Eq. 2.28" />
      <FormulaBlock latex={String.raw`U = q_1 V(\mathbf{r}_1) + q_2 V(\mathbf{r}_2) + \frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r_{12}}`} important label="Potential energy of two charges in an external field" tag="Eq. 2.29" />
      <ul>
        <li>The first two terms are the energy of each charge in the external field.</li>
        <li>The last term is the mutual interaction energy of the pair — the same term as in Eq. (2.22).</li>
      </ul>

      <h3 id="h-2-8-3">2.8.3 Potential energy of a dipole in an external field</h3>
      <p>
        Consider a dipole with charges <Formula>{String.raw`q_1 = +q`}</Formula> and{" "}
        <Formula>{String.raw`q_2 = -q`}</Formula> placed in a uniform electric field <Formula>{String.raw`\mathbf{E}`}</Formula>.
      </p>
      <ul>
        <li>In a uniform field the dipole experiences <strong>no net force</strong>.</li>
        <li>It does experience a torque:</li>
      </ul>
      <FormulaBlock latex={String.raw`\boldsymbol{\tau} = \mathbf{p}\times\mathbf{E}`} tag="Eq. 2.30" />
      <p>
        The torque tends to rotate the dipole unless <strong>p</strong> is parallel or antiparallel to{" "}
        <strong>E</strong>. Suppose an external torque neutralises it and rotates the dipole in the plane of the paper from
        angle <Formula>{String.raw`\theta_0`}</Formula> to <Formula>{String.raw`\theta_1`}</Formula> at infinitesimal angular
        speed, without angular acceleration. The work done by the external torque is:
      </p>
      <FormulaBlock latex={String.raw`W = pE\left(\cos\theta_0 - \cos\theta_1\right)`} tag="Eq. 2.31" />
      <p>
        This work is stored as potential energy. As with other potential energies there is freedom in choosing the angle
        where U is zero; a natural choice is <Formula>{String.raw`\theta_0 = \pi/2`}</Formula>. Then:
      </p>
      <FormulaBlock latex={String.raw`U(\theta) = -pE\cos\theta = -\mathbf{p}\cdot\mathbf{E}`} important label="Potential energy of a dipole in a uniform field" tag="Eq. 2.32" />
      <TableCard
        title="Dipole orientations and their energy"
        caption="The dipole always tends towards the minimum-energy orientation, θ = 0."
        headers={["Orientation", "cos θ", "Potential energy U", "Behaviour"]}
        rows={[
          { cells: ["θ = 0° (p along E)", "+1", "−pE (minimum)", "Stable equilibrium — no torque"] },
          { cells: ["θ = 90° (p ⊥ E)", "0", "0", "Maximum torque, zero energy"] },
          { cells: ["θ = 180° (p opposite E)", "−1", "+pE (maximum)", "Unstable equilibrium"] },
        ]}
      />
      <Expandable title="Why θ₀ = π/2 is a natural zero — the alternative derivation" variant="misc">
        <p>Apply Eq. (2.29) to the pair +q and −q separated by 2a:</p>
        <FormulaBlock latex={String.raw`U'(\theta) = -q\left[V(\mathbf{r}_1) - V(\mathbf{r}_2)\right] - \frac{q^{2}}{4\pi\varepsilon_0 \times 2a}`} tag="Eq. 2.33" />
        <p>
          The potential difference between the positions of +q and −q equals the work done in bringing a unit positive
          charge against the field from <Formula>{String.raw`\mathbf{r}_2`}</Formula> to{" "}
          <Formula>{String.raw`\mathbf{r}_1`}</Formula>. The displacement parallel to the force is{" "}
          <Formula>{String.raw`2a\cos\theta`}</Formula>, so{" "}
          <Formula>{String.raw`\left[V(\mathbf{r}_1) - V(\mathbf{r}_2)\right] = -E \times 2a\cos\theta`}</Formula>. Hence:
        </p>
        <FormulaBlock latex={String.raw`U'(\theta) = -pE\cos\theta - \frac{q^{2}}{4\pi\varepsilon_0 \times 2a}`} tag="Eq. 2.34" />
        <p>
          <Formula>{String.raw`U'(\theta)`}</Formula> differs from <Formula>{String.raw`U(\theta)`}</Formula> by a quantity
          that is just a constant for a given dipole. Since a constant is insignificant for potential energy, it can be
          dropped, recovering Eq. (2.32).
        </p>
        <p>
          This also explains the choice <Formula>{String.raw`\theta_0 = \pi/2`}</Formula>: at that angle the work done
          against the external field in bringing +q and −q are equal and opposite and cancel out, i.e.{" "}
          <Formula>{String.raw`q\left[V(\mathbf{r}_1) - V(\mathbf{r}_2)\right] = 0`}</Formula>.
        </p>
      </Expandable>
      <Expandable title="Example 2.5 — Energy of two charges, alone and in an external field" variant="example">
        <ProblemSolution.Problem>
          <p>
            (a) Determine the electrostatic potential energy of a system consisting of two charges 7 μC and −2 μC (with no
            external field) placed at (−9 cm, 0, 0) and (9 cm, 0, 0) respectively.
          </p>
          <p>(b) How much work is required to separate the two charges infinitely away from each other?</p>
          <p>
            (c) Suppose the same system is now placed in an external electric field{" "}
            <Formula>{String.raw`E = A(1/r^{2})`}</Formula>; <Formula>{String.raw`A = 9\times10^{5}\ \text{N C}^{-1}\text{m}^{2}`}</Formula>.
            What would the electrostatic energy of the configuration be?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> Here <Formula>{String.raw`r_{12} = 18\ \text{cm} = 0.18\ \text{m}`}</Formula>:</p>
          <FormulaBlock latex={String.raw`U = \frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r_{12}} = 9\times10^{9}\times\frac{7\times10^{-6}\times(-2\times10^{-6})}{0.18} = -0.7\ \text{J}`} important />
          <p><strong>(b)</strong> The work needed equals the change of energy from U to zero:</p>
          <FormulaBlock latex={String.raw`W = U_2 - U_1 = 0 - (-0.7) = 0.7\ \text{J}`} />
          <p>
            <strong>(c)</strong> The mutual interaction energy is unchanged. In addition there is the energy of interaction
            of each charge with the external field:
          </p>
          <FormulaBlock latex={String.raw`q_1 V(\mathbf{r}_1) + q_2 V(\mathbf{r}_2) = A\,\frac{7\ \mu\text{C}}{0.09\ \text{m}} + A\,\frac{(-2\ \mu\text{C})}{0.09\ \text{m}} = 70 - 20 = 50\ \text{J}`} />
          <p>The net electrostatic energy is therefore:</p>
          <FormulaBlock latex={String.raw`U_{\text{net}} = 70 - 20 - 0.7 = 49.3\ \text{J}`} important />
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 2.6 — Heat released when dipoles realign" variant="example">
        <ProblemSolution.Problem>
          <p>
            A molecule of a substance has a permanent electric dipole moment of magnitude{" "}
            <Formula>{String.raw`10^{-29}\ \text{C m}`}</Formula>. A mole of this substance is polarised (at low
            temperature) by applying a strong electrostatic field of magnitude{" "}
            <Formula>{String.raw`10^{6}\ \text{V m}^{-1}`}</Formula>. The direction of the field is suddenly changed by an
            angle of 60°. Estimate the heat released by the substance in aligning its dipoles along the new direction of the
            field. For simplicity, assume 100% polarisation.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>One mole contains <Formula>{String.raw`6\times10^{23}`}</Formula> molecules, so the total dipole moment is:</p>
          <FormulaBlock latex={String.raw`p = 6\times10^{23}\times10^{-29}\ \text{C m} = 6\times10^{-6}\ \text{C m}`} />
          <p>Initial potential energy (dipoles along the field, θ = 0°):</p>
          <FormulaBlock latex={String.raw`U_i = -pE\cos\theta = -6\times10^{-6}\times10^{6}\cos 0^\circ = -6\ \text{J}`} />
          <p>Final potential energy (θ = 60°):</p>
          <FormulaBlock latex={String.raw`U_f = -6\times10^{-6}\times10^{6}\cos 60^\circ = -3\ \text{J}`} />
          <p>Change in potential energy:</p>
          <FormulaBlock latex={String.raw`\Delta U = -3 - (-6) = 3\ \text{J}`} important />
          <p>
            There is a loss of potential energy, so 3 J must be released by the substance as heat while its dipoles align
            with the new field direction.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-2-9">2.9 Electrostatics of Conductors</h2>
      <p>Conductors contain mobile charge carriers.</p>
      <ul>
        <li>In metallic conductors the carriers are <strong>electrons</strong>: the outer (valence) electrons part away from their atoms and are free to move.</li>
        <li>They are free <em>within</em> the metal but not free to leave it.</li>
        <li>The free electrons form a kind of &ldquo;gas&rdquo; — they collide with each other and with the ions and move randomly.</li>
        <li>In an external field they drift against the direction of the field, while the positive ions stay held in fixed positions.</li>
        <li>In electrolytic conductors the carriers are both positive and negative ions, and chemical forces also act — we restrict the discussion to metallic solid conductors.</li>
      </ul>
      <TableCard
        title="The six electrostatic properties of a conductor"
        caption="These results hold in the static situation — no current anywhere inside or on the surface."
        headers={["Result", "Statement", "Why"]}
        rows={[
          {
            cells: [
              "1. Field inside",
              "Electrostatic field is zero everywhere inside a conductor.",
              "Free carriers would drift as long as any field remained; they redistribute until it is zero. This is the defining property of a conductor.",
            ],
          },
          {
            cells: [
              "2. Field at the surface",
              "Electrostatic field must be normal to the surface at every point.",
              "A tangential component would push the surface charges along the surface, which cannot happen in the static situation.",
            ],
          },
          {
            cells: [
              "3. Excess charge",
              "The interior can have no excess charge in the static situation.",
              "Take any volume element inside: the flux through its bounding surface is zero, so by Gauss’s law no net charge is enclosed. Excess charge must reside on the surface.",
            ],
          },
          {
            cells: [
              "4. Potential",
              "Potential is constant throughout the volume and has the same value on the surface.",
              "No work is done moving a test charge inside (E = 0) or along the surface (no tangential E), so there is no potential difference.",
            ],
          },
          {
            cells: [
              "5. Field just outside",
              "E = σ/ε₀ directed along the outward normal.",
              "Apply Gauss’s law to a pill box straddling the surface — see the derivation below.",
            ],
          },
          {
            cells: [
              "6. Cavity",
              "The field inside a charge-free cavity is zero, and all charges reside on the outer surface.",
              "Electrostatic shielding — the cavity is screened from outside electric influence.",
            ],
          },
        ]}
      />
      <FormulaBlock latex={String.raw`\mathbf{E} = \frac{\sigma}{\varepsilon_0}\,\hat{\mathbf{n}}`} important label="Field at the surface of a charged conductor" tag="Eq. 2.35" />
      <ul>
        <li><Formula>{String.raw`\sigma`}</Formula> is the surface charge density.</li>
        <li><Formula>{String.raw`\hat{\mathbf{n}}`}</Formula> is the unit vector normal to the surface, in the outward direction.</li>
        <li>For <Formula>{String.raw`\sigma > 0`}</Formula> the field is normal and outward; for <Formula>{String.raw`\sigma < 0`}</Formula> it is normal and inward.</li>
        <li>For a conductor with no surface charge density, the field is zero even at the surface.</li>
      </ul>
      <Expandable title="Derivation — field at the surface from a pill box (Eq. 2.35)" variant="misc">
        <p>
          To derive the result, choose a <strong>pill box</strong> (a short cylinder) as the Gaussian surface about a point
          P on the surface. The box is partly inside and partly outside the conductor, with small cross-section{" "}
          <Formula>{String.raw`\mathrm{d}S`}</Formula> and negligible height.
        </p>
        <Stepper
          steps={[
            {
              label: "Field just inside is zero",
              description: "By result 1, E = 0 everywhere inside the conductor.",
            },
            {
              label: "Field just outside is normal",
              description: "By result 2 it is normal to the surface, with magnitude E.",
            },
            {
              label: "Only the outer face contributes flux",
              description: (
                <>
                  The flux through the box is just <Formula>{String.raw`\pm E\,\mathrm{d}S`}</Formula> — positive for σ &gt; 0,
                  negative for σ &lt; 0 — since E and dS are parallel or antiparallel and E is constant over dS.
                </>
              ),
            },
            {
              label: "Charge enclosed is σ dS",
              description: "All the charge in the box sits on the surface element of area dS.",
            },
          ]}
        />
        <p>Gauss&apos;s law then gives:</p>
        <FormulaBlock latex={String.raw`E\,\mathrm{d}S = \frac{\sigma\,\mathrm{d}S}{\varepsilon_0} \;\Rightarrow\; E = \frac{\sigma}{\varepsilon_0}`} tag="Eq. 2.36" />
        <p>
          Including the fact that the field is normal to the surface gives the vector relation{" "}
          <Formula>{String.raw`\mathbf{E} = (\sigma/\varepsilon_0)\hat{\mathbf{n}}`}</Formula>, valid for both signs of σ.
        </p>
      </Expandable>
      <ShieldingDiagram />
      <Callout type="important">
        <p>
          Whatever be the charge and field configuration outside, any cavity in a conductor remains shielded from outside
          electric influence: the field inside the cavity is always zero. This is known as{" "}
          <strong>electrostatic shielding</strong>.
        </p>
      </Callout>
      <ul>
        <li>The result holds whatever the size and shape of the cavity, and whatever the charge on the conductor.</li>
        <li>A related result: even if the conductor is charged, or charges are induced on a neutral conductor by an external field, all charges reside only on the <em>outer</em> surface.</li>
        <li>The effect is used to protect sensitive instruments from outside electrical influence.</li>
      </ul>
      <Expandable title="Example 2.7 — Four everyday consequences of electrostatic shielding" variant="example">
        <ProblemSolution.Problem>
          <p>(a) A comb run through one&apos;s dry hair attracts small bits of paper. Why? What happens if the hair is wet or if it is a rainy day?</p>
          <p>(b) Ordinary rubber is an insulator. But special rubber tyres of aircraft are made slightly conducting. Why is this necessary?</p>
          <p>(c) Vehicles carrying inflammable materials usually have metallic ropes touching the ground during motion. Why?</p>
          <p>(d) A bird perches on a bare high power line, and nothing happens to the bird. A man standing on the ground touches the same line and gets a fatal shock. Why?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            <strong>(a)</strong> The comb gets charged by friction. The molecules in the paper get polarised by the charged
            comb, resulting in a net force of attraction. If the hair is wet, or if it is a rainy day, friction between
            hair and the comb reduces; the comb does not get charged and will not attract small bits of paper.
          </p>
          <p>
            <strong>(b)</strong> To enable the tyres to conduct charge (produced by friction) to the ground; too much static
            electricity accumulated may result in a spark and cause a fire.
          </p>
          <p><strong>(c)</strong> Reason similar to (b) — the metallic rope conducts the charge to the ground.</p>
          <p><strong>(d)</strong> Current passes only when there is a difference in potential. The bird touches only one point of the line, so no potential difference exists across its body.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-2-10">2.10 Dielectrics and Polarisation</h2>
      <p>
        <strong>Dielectrics</strong> are non-conducting substances. In contrast to conductors, they have no — or a
        negligible number of — charge carriers.
      </p>
      <Comparison
        columns={[
          {
            title: "Conductor in an external field",
            children: (
              <ul>
                <li>Free carriers move and the charge distribution adjusts.</li>
                <li>The field of the induced charges <strong>opposes</strong> the external field.</li>
                <li>In the static situation the two fields <strong>cancel</strong>: net field is zero.</li>
                <li>Excess charge sits on the outer surface.</li>
              </ul>
            ),
          },
          {
            title: "Dielectric in an external field",
            children: (
              <ul>
                <li>Free movement of charge is not possible.</li>
                <li>The field induces a dipole moment by stretching or re-orienting molecules.</li>
                <li>The induced surface charges produce an opposing field that only <strong>reduces</strong> the external field.</li>
                <li>The reduction depends on the nature of the dielectric.</li>
              </ul>
            ),
          },
        ]}
      />
      <Comparison
        columns={[
          {
            title: "Non-polar molecule",
            children: (
              <ul>
                <li>Centres of positive and negative charges <strong>coincide</strong>.</li>
                <li>No permanent (intrinsic) dipole moment.</li>
                <li>Examples: O₂, H₂ — symmetric molecules.</li>
                <li>In a field, charges are displaced in opposite directions until the external force is balanced by the internal restoring force — an <strong>induced</strong> dipole moment appears.</li>
              </ul>
            ),
          },
          {
            title: "Polar molecule",
            children: (
              <ul>
                <li>Centres of positive and negative charges are <strong>separated</strong>, even with no external field.</li>
                <li>Has a permanent dipole moment.</li>
                <li>Examples: HCl (ionic), H₂O.</li>
                <li>In a field the permanent dipoles <strong>align</strong>; thermal agitation opposes alignment.</li>
              </ul>
            ),
          },
        ]}
      />
      <ul>
        <li>For non-polar molecules, the induced dipole moment is taken to be in the direction of the field and proportional to its strength.</li>
        <li>Substances for which this holds are called <strong>linear isotropic dielectrics</strong>.</li>
        <li>For polar molecules, the different permanent dipoles are randomly oriented by thermal agitation with no field, so the total dipole moment is zero.</li>
        <li>An applied field makes the individual moments tend to align with it, giving a net dipole moment along the field.</li>
        <li>The extent of polarisation depends on the competition between dipole potential energy (which aligns) and thermal energy (which disrupts); the induced effect is additional but usually smaller for polar molecules.</li>
      </ul>
      <Callout type="important">
        <p>
          In either case — polar or non-polar — a dielectric develops a net dipole moment in the presence of an external
          field. The <strong>dipole moment per unit volume is called polarisation</strong> and is denoted by{" "}
          <Formula>{String.raw`\mathbf{P}`}</Formula>. For linear isotropic dielectrics:
        </p>
      </Callout>
      <FormulaBlock latex={String.raw`\mathbf{P} = \varepsilon_0\chi_e\mathbf{E}`} important tag="Eq. 2.37" />
      <ul>
        <li><Formula>{String.raw`\chi_e`}</Formula> is a constant characteristic of the dielectric, known as the <strong>electric susceptibility</strong> of the medium.</li>
        <li>It is possible to relate <Formula>{String.raw`\chi_e`}</Formula> to the molecular properties of the substance, but that is not pursued here.</li>
      </ul>
      <p>
        How does the polarised dielectric modify the original field inside it? Take a rectangular slab in a uniform external
        field <Formula>{String.raw`\mathbf{E}_0`}</Formula> parallel to two of its faces. The field causes a uniform
        polarisation <strong>P</strong>, so every small volume element has a dipole moment{" "}
        <Formula>{String.raw`\mathbf{P}\,\Delta v`}</Formula>.
      </p>
      <PolarisedSlabDiagram />
      <ul>
        <li>Anywhere <em>inside</em> the dielectric a volume element has <strong>no net charge</strong>, though it has a net dipole moment — the positive end of one dipole sits close to the negative end of the next.</li>
        <li>At the surfaces normal to the field there <em>is</em> a net charge density: positive ends remain unneutralised at one face, negative ends at the other.</li>
        <li>These unbalanced charges are the <strong>induced charges</strong> due to the external field.</li>
        <li>The polarised dielectric is therefore equivalent to two charged surfaces with induced surface charge densities <Formula>{String.raw`\sigma_p`}</Formula> and <Formula>{String.raw`-\sigma_p`}</Formula>.</li>
        <li>The field produced by these surface charges opposes the external field, so the total field inside the dielectric is reduced from the vacuum case.</li>
        <li>The surface charge <Formula>{String.raw`\pm\sigma_p`}</Formula> arises from <strong>bound</strong> charges, not free charges.</li>
      </ul>
      <MistakeCard
        mistake="Saying the dielectric “conducts” charge to its surface, or that its induced field cancels the external field completely."
        correction="The bound charges are only displaced by a tiny amount, and they reduce the field by the factor 1/K. In a conductor the induced field cancels the external field exactly, which is why K is infinite for a conductor."
      />
      <h2 id="h-2-11">2.11 Capacitors and Capacitance</h2>
      <Callout type="important">
        <p>A <strong>capacitor</strong> is a system of two conductors separated by an insulator.</p>
      </Callout>
      <p>
        The conductors have charges, say <Formula>{String.raw`Q_1`}</Formula> and <Formula>{String.raw`Q_2`}</Formula>, and
        potentials <Formula>{String.raw`V_1`}</Formula> and <Formula>{String.raw`V_2`}</Formula>. In practice the two
        conductors carry charges Q and −Q, with potential difference{" "}
        <Formula>{String.raw`V = V_1 - V_2`}</Formula> between them.
      </p>
      <ul>
        <li>We consider only this kind of charge configuration.</li>
        <li>Even a single conductor can be used as a capacitor by assuming the other conductor to be at infinity.</li>
        <li>The conductors may be charged by connecting them to the two terminals of a battery.</li>
        <li>Q is called the charge of the capacitor, though it is in fact the charge on one of the conductors — the total charge of the capacitor is zero.</li>
      </ul>
      <p>
        The field between the conductors is proportional to Q: doubling the charge doubles the field at every point (from
        Coulomb&apos;s law and superposition). The potential difference V is the work per unit positive charge in taking a
        test charge from conductor 2 to conductor 1 against the field, so V is also proportional to Q and the ratio Q/V is
        a constant:
      </p>
      <FormulaBlock latex={String.raw`C = \frac{Q}{V}`} important label="Capacitance" tag="Eq. 2.38" />
      <ul>
        <li><strong>C</strong> is the capacitance of the capacitor.</li>
        <li>C is <em>independent</em> of Q or V.</li>
        <li>C depends only on the geometrical configuration — shape, size and separation — of the two conductors.</li>
        <li>It also depends on the nature of the insulator (dielectric) separating them.</li>
        <li>The SI unit of capacitance is the <strong>farad</strong>: <Formula>{String.raw`1\ \text{F} = 1\ \text{C V}^{-1}`}</Formula>.</li>
        <li>A fixed capacitor is symbolically shown as ──| |── and a variable one with an arrow across it.</li>
      </ul>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FactCard
          title="Sub-multiples in practice"
          definition="1 mF = 10⁻⁶ F, 1 nF = 10⁻⁹ F, 1 pF = 10⁻¹² F. A farad is a very big unit, so these are the units actually printed on components."
          icon="📏"
        />
        <FactCard
          title="Why large C matters"
          definition="For large C, V is small for a given Q — the capacitor can hold a large charge at a relatively small potential difference."
          icon="⚡"
        />
      </div>
      <p>
        High potential difference means a strong electric field around the conductors. A strong field can ionise the
        surrounding air and accelerate the charges so produced to the oppositely charged plates, neutralising the charge on
        the plates — the capacitor leaks.
      </p>
      <Callout type="important">
        <p>
          The maximum electric field that a dielectric medium can withstand without break-down (of its insulating property)
          is called its <strong>dielectric strength</strong>.
        </p>
      </Callout>
      <MetricCard label="Dielectric strength of air" value="3 × 10⁶ V m⁻¹" description="For a separation of about 1 cm, this corresponds to a potential difference of 3 × 10⁴ V between the conductors." />
      <ul>
        <li>For a capacitor to store a large charge without leaking, its capacitance must be high enough that the potential difference — and hence the field — stays below the break-down limit.</li>
        <li>Put differently, there is a limit to the charge that can be stored on a given capacitor without significant leaking.</li>
        <li>Besides storing charge, a capacitor is a key element of most ac circuits.</li>
      </ul>
      <MistakeCard
        mistake="Saying a capacitor “stores charge” without qualification, or believing C changes when a bigger battery is connected."
        correction="The net charge of a charged capacitor is zero; it stores energy by separating charge Q on one conductor and −Q on the other. C is fixed by geometry and the dielectric — only Q and V change with the battery."
      />

      <h2 id="h-2-12">2.12 The Parallel Plate Capacitor</h2>
      <p>
        A parallel plate capacitor consists of two large plane parallel conducting plates separated by a small distance.
        Take the intervening medium to be vacuum first. Let A be the area of each plate and d the separation; the plates
        carry charges Q and −Q.
      </p>
      <ul>
        <li>Since d is much smaller than the linear dimension of the plates (<Formula>{String.raw`d^{2} \ll A`}</Formula>), each plate can be treated as an infinite plane sheet of uniform surface charge density.</li>
        <li>Plate 1 has surface charge density <Formula>{String.raw`\sigma = Q/A`}</Formula>; plate 2 has <Formula>{String.raw`-\sigma`}</Formula>.</li>
        <li>In the outer region above plate 1, and in the outer region below plate 2, the fields of the two sheets cancel.</li>
      </ul>
      <FormulaBlock latex={String.raw`E_{\text{outer}} = \frac{\sigma}{2\varepsilon_0} - \frac{\sigma}{2\varepsilon_0} = 0`} tag="Eqs. 2.39 & 2.40" />
      <ul>
        <li>In the inner region between the plates the two fields add up.</li>
        <li>The field is directed from the positive to the negative plate.</li>
        <li>The field is therefore localised between the plates and is uniform throughout.</li>
      </ul>
      <FormulaBlock latex={String.raw`E = \frac{\sigma}{2\varepsilon_0} + \frac{\sigma}{2\varepsilon_0} = \frac{\sigma}{\varepsilon_0} = \frac{Q}{\varepsilon_0 A}`} important tag="Eq. 2.41" />
      <ParallelPlateDiagram />
      <Callout type="note">
        For plates of finite area the field is not strictly uniform near the outer boundaries: the field lines bend outward
        at the edges — an effect called <strong>fringing of the field</strong>. For the same reason σ is not strictly
        uniform over the whole plate. With <Formula>{String.raw`d^{2} \ll A`}</Formula>, however, these effects can be ignored
        sufficiently far from the edges.
      </Callout>
      <p>For a uniform field, the potential difference is simply the field times the plate separation:</p>
      <FormulaBlock latex={String.raw`V = E\,d = \frac{Qd}{\varepsilon_0 A}`} tag="Eq. 2.42" />
      <FormulaBlock latex={String.raw`C = \frac{Q}{V} = \frac{\varepsilon_0 A}{d}`} important label="Capacitance of a parallel plate capacitor (vacuum)" tag="Eq. 2.43" />
      <p>As expected, C depends only on the geometry. For typical values <Formula>{String.raw`A = 1\ \text{m}^{2}`}</Formula> and <Formula>{String.raw`d = 1\ \text{mm}`}</Formula>:</p>
      <FormulaBlock latex={String.raw`C = \frac{8.85\times10^{-12}\times1}{10^{-3}} = 8.85\times10^{-9}\ \text{F}`} tag="Eq. 2.44" />
      <ul>
        <li>This shows again that 1 F is too big a unit in practice.</li>
        <li>A second way to see the bigness of 1 F is to ask what plate area would give C = 1 F at a separation of 1 cm:</li>
      </ul>
      <FormulaBlock latex={String.raw`A = \frac{Cd}{\varepsilon_0} = \frac{1\times10^{-2}}{8.85\times10^{-12}} = 10^{9}\ \text{m}^{2}`} tag="Eq. 2.45" />
      <p>That is a plate about 30 km in length and breadth.</p>
      <KeyPoint title="Dimensional check">
        <Formula>{String.raw`1\ \text{F} = 1\ \text{C V}^{-1} = 1\ \text{C}\,(\text{N C}^{-1}\text{m})^{-1} = 1\ \text{C}^{2}\text{N}^{-1}\text{m}^{-1}`}</Formula>{" "}
        — which matches <Formula>{String.raw`\varepsilon_0 A/d`}</Formula>, since <Formula>{String.raw`\varepsilon_0`}</Formula> is
        measured in <Formula>{String.raw`\text{C}^{2}\text{N}^{-1}\text{m}^{-2}`}</Formula>.
      </KeyPoint>

      <h2 id="h-2-13">2.13 Effect of Dielectric on Capacitance</h2>
      <p>
        With vacuum between the plates of area A separated by d, and charges ±Q giving density{" "}
        <Formula>{String.raw`\sigma = Q/A`}</Formula>:
      </p>
      <FormulaBlock latex={String.raw`E_0 = \frac{\sigma}{\varepsilon_0}, \qquad V_0 = E_0 d, \qquad C_0 = \frac{Q}{V_0} = \frac{\varepsilon_0 A}{d}`} tag="Eq. 2.46" />
      <p>
        Now insert a dielectric that fully occupies the intervening region. It is polarised by the field, which is
        equivalent to two charged sheets at its surfaces with densities <Formula>{String.raw`\sigma_p`}</Formula> and{" "}
        <Formula>{String.raw`-\sigma_p`}</Formula>. The field in the dielectric then corresponds to a net surface charge
        density <Formula>{String.raw`\pm(\sigma - \sigma_p)`}</Formula> on the plates.
      </p>
      <EquationLadder
        title="From the polarised slab to C = K C₀"
        steps={[
          {
            label: "Field inside the dielectric",
            equation: String.raw`E = \frac{\sigma - \sigma_p}{\varepsilon_0}`,
            tag: "Eq. 2.47",
          },
          {
            label: "Potential difference across the plates",
            equation: String.raw`V = E\,d = \frac{(\sigma - \sigma_p)d}{\varepsilon_0}`,
            tag: "Eq. 2.48",
          },
          {
            label: "For linear dielectrics σ_p is proportional to σ, so define K",
            equation: String.raw`\sigma - \sigma_p = \frac{\sigma}{K}, \qquad K > 1`,
            tag: "Eq. 2.49",
          },
          {
            label: "Substituting back",
            equation: String.raw`V = \frac{\sigma d}{\varepsilon_0 K} = \frac{Qd}{A\varepsilon_0 K}`,
            tag: "Eq. 2.50",
          },
          {
            label: "Capacitance with the dielectric",
            equation: String.raw`C = \frac{Q}{V} = \frac{\varepsilon_0 K A}{d}`,
            tag: "Eq. 2.51",
          },
          {
            label: "The dielectric constant is the factor by which C grows",
            equation: String.raw`C = K\,C_0`,
            final: true,
            tag: "Eq. 2.54",
          },
        ]}
      />
      <FormulaBlock latex={String.raw`\varepsilon = \varepsilon_0 K`} label="Permittivity of the medium" tag="Eq. 2.52" />
      <FormulaBlock latex={String.raw`K = \frac{\varepsilon}{\varepsilon_0}`} label="Dielectric constant (dimensionless)" tag="Eq. 2.53" />
      <ul>
        <li>For vacuum K = 1 and <Formula>{String.raw`\varepsilon = \varepsilon_0`}</Formula>, the permittivity of vacuum.</li>
        <li>From Eq. (2.49), K is greater than 1 for any dielectric.</li>
        <li>The product <Formula>{String.raw`\varepsilon_0 K`}</Formula> is called the permittivity of the medium.</li>
      </ul>
      <Callout type="important">
        <p>
          The dielectric constant of a substance is <strong>the factor (&gt;1) by which the capacitance increases from its
          vacuum value, when the dielectric is inserted fully between the plates of a capacitor</strong>. Though derived for
          the parallel plate capacitor, it holds for any type of capacitor and can be viewed as a general definition of the
          dielectric constant.
        </p>
      </Callout>
      <ParallelPlateDiagram dielectric />
      <Expandable title="Example 2.8 — A slab of thickness 3d/4 between the plates" variant="example">
        <ProblemSolution.Problem>
          <p>
            A slab of material of dielectric constant K has the same area as the plates of a parallel-plate capacitor but
            has a thickness (3/4)d, where d is the separation of the plates. How is the capacitance changed when the slab is
            inserted between the plates?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Let <Formula>{String.raw`E_0 = V_0/d`}</Formula> be the field between the plates with no dielectric, the potential
            difference being V₀.
          </p>
          <p>
            With the slab inserted, the field inside the dielectric is <Formula>{String.raw`E = E_0/K`}</Formula>, while the
            remaining quarter of the gap still has field E₀. Hence:
          </p>
          <FormulaBlock latex={String.raw`V = E_0\left(\frac{d}{4}\right) + \frac{E_0}{K}\left(\frac{3d}{4}\right) = E_0 d\left(\frac{1}{4} + \frac{3}{4K}\right) = V_0\,\frac{K+3}{4K}`} />
          <p>
            The potential difference decreases by the factor <Formula>{String.raw`(K+3)/4K`}</Formula> while the free charge Q₀
            on the plates remains unchanged. The capacitance therefore increases:
          </p>
          <FormulaBlock latex={String.raw`C = \frac{Q_0}{V} = \frac{Q_0}{V_0}\,\frac{4K}{K+3} = C_0\,\frac{4K}{K+3}`} important />
          <p className="text-sm text-muted-foreground">
            Check the limits: for K = 1, C = C₀; for a very large K, C tends to <Formula>{String.raw`\tfrac{4}{3}C_0`}</Formula>{" "}
            — only the unfilled quarter of the gap still limits the capacitance.
          </p>
        </ProblemSolution.Solution>
      </Expandable>
      <h2 id="h-2-14">2.14 Combination of Capacitors</h2>
      <p>
        Several capacitors <Formula>{String.raw`C_1, C_2, \dots, C_n`}</Formula> can be combined to obtain a system with some
        effective capacitance C. The effective capacitance depends on the way they are combined. Two simple possibilities
        follow.
      </p>

      <h3 id="h-2-14-1">2.14.1 Capacitors in series</h3>
      <p>
        Take <Formula>{String.raw`C_1`}</Formula> and <Formula>{String.raw`C_2`}</Formula> in series. The left plate of C₁ and
        the right plate of C₂ are connected to the two terminals of a battery and carry charges Q and −Q.
      </p>
      <ul>
        <li>It follows that the right plate of C₁ has charge −Q and the left plate of C₂ has charge Q.</li>
        <li>If this were not so, the net charge on each capacitor would not be zero, and there would be an electric field in the conductor connecting C₁ and C₂.</li>
        <li>Charge would flow until the net charge on both is zero and there is no field in the connecting conductor.</li>
        <li>Thus, in a series combination the charges <Formula>{String.raw`\pm Q`}</Formula> are the same on each capacitor.</li>
        <li>The total potential drop is the sum of the drops across C₁ and C₂.</li>
      </ul>
      <FormulaBlock latex={String.raw`V = V_1 + V_2 = \frac{Q}{C_1} + \frac{Q}{C_2}`} tag="Eq. 2.55" />
      <p>Now regard the combination as an effective capacitor with charge Q and potential difference V:</p>
      <FormulaBlock latex={String.raw`\frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2}`} important label="Two capacitors in series" tag="Eq. 2.58" />
      <FormulaBlock latex={String.raw`\frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2} + \dots + \frac{1}{C_n}`} label="n capacitors in series" tag="Eq. 2.60" />
      <CapacitorNetworkDiagram mode="series" />
      <ul>
        <li>The effective capacitance is <strong>smaller</strong> than the smallest individual capacitance.</li>
        <li>The same charge Q sits on every capacitor; the largest capacitor has the smallest share of the voltage.</li>
      </ul>

      <h3 id="h-2-14-2">2.14.2 Capacitors in parallel</h3>
      <p>For two capacitors in parallel the same potential difference is applied across both, but the plate charges need not be equal:</p>
      <FormulaBlock latex={String.raw`Q_1 = C_1 V, \qquad Q_2 = C_2 V`} tag="Eq. 2.61" />
      <p>The equivalent capacitor is one with charge <Formula>{String.raw`Q = Q_1 + Q_2`}</Formula> and the same potential difference V:</p>
      <FormulaBlock latex={String.raw`Q = CV = C_1 V + C_2 V`} tag="Eq. 2.63" />
      <FormulaBlock latex={String.raw`C = C_1 + C_2`} important label="Two capacitors in parallel" tag="Eq. 2.64" />
      <FormulaBlock latex={String.raw`C = C_1 + C_2 + \dots + C_n`} label="n capacitors in parallel" tag="Eq. 2.67" />
      <CapacitorNetworkDiagram mode="parallel" />
      <ul>
        <li>The effective capacitance is <strong>larger</strong> than the largest individual capacitance.</li>
        <li>Every capacitor has the same voltage; the largest capacitor carries the largest charge.</li>
      </ul>
      <Comparison
        columns={[
          {
            title: "Series combination",
            children: (
              <ul>
                <li>Charge Q is the same on each capacitor.</li>
                <li>Voltages add: V = V₁ + V₂.</li>
                <li>
                  <Formula>{String.raw`\frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2} + \dots`}</Formula>
                </li>
                <li>Effective C is less than the least C.</li>
                <li>Used to share a high voltage safely between capacitors.</li>
              </ul>
            ),
          },
          {
            title: "Parallel combination",
            children: (
              <ul>
                <li>Voltage V is the same across each capacitor.</li>
                <li>Charges add: Q = Q₁ + Q₂.</li>
                <li>
                  <Formula>{String.raw`C = C_1 + C_2 + \dots`}</Formula>
                </li>
                <li>Effective C is greater than the greatest C.</li>
                <li>Used to obtain a larger capacitance at the same voltage.</li>
              </ul>
            ),
          },
        ]}
      />
      <MistakeCard
        mistake="Using the parallel formula (C = C₁ + C₂) for capacitors in series, or mixing up the series and parallel rules with those for resistors."
        correction="Capacitors add directly in parallel and reciprocally in series — the opposite of resistors. Identify first whether the capacitors share the same charge (series) or the same voltage (parallel)."
      />
      <Expandable title="Example 2.9 — A network of four 10 μF capacitors" variant="example">
        <ProblemSolution.Problem>
          <p>
            A network of four 10 μF capacitors is connected to a 500 V supply, as shown (NCERT Fig. 2.29): C₁, C₂, C₃ in
            series in one branch, and C₄ in parallel with that branch. Determine (a) the equivalent capacitance of the
            network and (b) the charge on each capacitor.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> C₁, C₂ and C₃ are in series, so their effective capacitance C′ is given by</p>
          <FormulaBlock latex={String.raw`\frac{1}{C'} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3}`} />
          <p>
            For <Formula>{String.raw`C_1 = C_2 = C_3 = 10\ \mu\text{F}`}</Formula>,{" "}
            <Formula>{String.raw`C' = (10/3)\ \mu\text{F}`}</Formula>. The network has C′ and C₄ in parallel, so
          </p>
          <FormulaBlock latex={String.raw`C = C' + C_4 = \left(\frac{10}{3} + 10\right)\mu\text{F} = 13.3\ \mu\text{F}`} important />
          <p>
            <strong>(b)</strong> The charge on each of C₁, C₂ and C₃ is the same, say Q; let the charge on C₄ be Q′. Since
            the potential differences across AB, BC and CD are Q/C₁, Q/C₂ and Q/C₃:
          </p>
          <FormulaBlock latex={String.raw`\frac{Q}{C_1} + \frac{Q}{C_2} + \frac{Q}{C_3} = 500\ \text{V}`} />
          <p>Also <Formula>{String.raw`Q'/C_4 = 500\ \text{V}`}</Formula>. With the given capacitances:</p>
          <FormulaBlock latex={String.raw`Q = \frac{10}{3}\,\mu\text{F} \times 500\ \text{V} = 1.7\times10^{-3}\ \text{C}`} important />
          <FormulaBlock latex={String.raw`Q' = 10\ \mu\text{F} \times 500\ \text{V} = 5.0\times10^{-3}\ \text{C}`} important />
          <p className="text-sm text-muted-foreground">
            The charge on a capacitor means the charge on the plate at the higher potential, equal and opposite to the
            charge on the plate at the lower potential.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-2-15">2.15 Energy Stored in a Capacitor</h2>
      <p>
        A capacitor is a system of two conductors with charges Q and −Q. To find the energy stored, start with two uncharged
        conductors 1 and 2 and transfer charge from conductor 2 to conductor 1 bit by bit until conductor 1 has charge Q —
        conductor 2 then has −Q.
      </p>
      <ul>
        <li>Work must be done externally, since at any stage conductor 1 is at a higher potential than conductor 2.</li>
        <li>Consider the intermediate situation when the conductors carry <Formula>{String.raw`Q'`}</Formula> and <Formula>{String.raw`-Q'`}</Formula>: the potential difference is <Formula>{String.raw`V' = Q'/C`}</Formula>.</li>
        <li>Transfer a small charge <Formula>{String.raw`\mathrm{d}Q'`}</Formula> from conductor 2 to 1. The work done is:</li>
      </ul>
      <FormulaBlock latex={String.raw`\mathrm{d}W = V'\,\mathrm{d}Q' = \frac{Q'}{C}\,\mathrm{d}Q'`} tag="Eq. 2.68" />
      <p>Integrating from 0 to Q gives the total work done in charging the capacitor:</p>
      <FormulaBlock latex={String.raw`W = \int_0^{Q}\frac{Q'}{C}\,\mathrm{d}Q' = \frac{Q^{2}}{2C}`} />
      <FormulaBlock latex={String.raw`W = \frac{Q^{2}}{2C} = \frac{1}{2}CV^{2} = \frac{1}{2}QV`} important label="Energy stored in a capacitor" tag="Eq. 2.69" />
      <ul>
        <li>Since electrostatic force is conservative, this work is stored as potential energy of the system.</li>
        <li>The result is independent of the manner in which the charge configuration is built up.</li>
        <li>When the capacitor discharges, this stored-up energy is released.</li>
      </ul>
      <p>
        The potential energy can be viewed as stored in the <em>electric field</em> between the plates. For a parallel plate
        capacitor of plate area A and separation d:
      </p>
      <FormulaBlock latex={String.raw`U = \frac{1}{2}\frac{Q^{2}}{C} = \frac{1}{2}\frac{\sigma^{2}}{\varepsilon_0}\,A d`} tag="Eq. 2.70" />
      <p>Using <Formula>{String.raw`\sigma = \varepsilon_0 E`}</Formula> (Eq. 2.71):</p>
      <FormulaBlock latex={String.raw`U = \frac{1}{2}\varepsilon_0 E^{2}\,(A d)`} tag="Eq. 2.72" />
      <ul>
        <li><Formula>{String.raw`A d`}</Formula> is the volume of the region between the plates, where the electric field alone exists.</li>
        <li>Defining <strong>energy density</strong> as energy stored per unit volume of space:</li>
      </ul>
      <FormulaBlock latex={String.raw`u = \frac{1}{2}\varepsilon_0 E^{2}`} important label="Energy density of an electric field" tag="Eq. 2.73" />
      <KeyPoint title="A genuinely general result">
        Although Eq. (2.73) was derived for a parallel plate capacitor, the result on the energy density of an electric
        field is very general and holds for the field due to <em>any</em> configuration of charges.
      </KeyPoint>
      <Expandable title="Example 2.10 — 900 pF capacitor, then charge sharing" variant="example">
        <ProblemSolution.Problem>
          <p>(a) A 900 pF capacitor is charged by a 100 V battery. How much electrostatic energy is stored by the capacitor?</p>
          <p>
            (b) The capacitor is disconnected from the battery and connected to another 900 pF capacitor. What is the
            electrostatic energy stored by the system?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> The charge on the capacitor is:</p>
          <FormulaBlock latex={String.raw`Q = CV = 900\times10^{-12}\times100 = 9\times10^{-8}\ \text{C}`} />
          <p>The energy stored is:</p>
          <FormulaBlock latex={String.raw`U = \frac{1}{2}CV^{2} = \frac{1}{2}QV = \frac{1}{2}\times9\times10^{-8}\times100 = 4.5\times10^{-6}\ \text{J}`} important />
          <p>
            <strong>(b)</strong> In the steady situation both capacitors have their positive plates at the same potential and
            their negative plates at the same potential. Let the common potential difference be V′; the charge on each is
            then <Formula>{String.raw`Q' = CV'`}</Formula>. By charge conservation{" "}
            <Formula>{String.raw`Q' = Q/2`}</Formula>, which implies <Formula>{String.raw`V' = V/2`}</Formula>. The total energy
            is:
          </p>
          <FormulaBlock latex={String.raw`U' = 2\times\frac{1}{2}Q'V' = \frac{1}{4}QV = 2.25\times10^{-6}\ \text{J}`} important />
          <p>
            Thus, though no charge is lost, the final energy is only <strong>half</strong> the initial energy. The missing
            energy is dissipated during the transient period when current flows from the first capacitor to the second — as
            heat and electromagnetic radiation.
          </p>
        </ProblemSolution.Solution>
      </Expandable>
      <MistakeCard
        mistake="Using U = CV² instead of U = ½CV², or forgetting that when two charged capacitors are connected, charge is conserved but energy is not."
        correction="The energy of a capacitor is half of QV. When two capacitors share charge, Q_total is conserved, the common voltage is Q_total/C_total, and the difference in stored energy appears as heat and radiation."
        example="Example 2.10: 4.5 × 10⁻⁶ J falls to 2.25 × 10⁻⁶ J — exactly half is lost."
      />

      <h2 id="h-2-appendix">Key Equations — Revision Board</h2>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Potential due to a point charge</p>
          <FormulaBlock latex={String.raw`V = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Potential due to a dipole</p>
          <FormulaBlock latex={String.raw`V = \frac{1}{4\pi\varepsilon_0}\,\frac{\mathbf{p}\cdot\hat{\mathbf{r}}}{r^{2}}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Field from potential</p>
          <FormulaBlock latex={String.raw`\mathbf{E} = -\frac{\mathrm{d}V}{\mathrm{d}r}\,\hat{\mathbf{r}}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Energy of a pair of charges</p>
          <FormulaBlock latex={String.raw`U = \frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r_{12}}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Dipole in an external field</p>
          <FormulaBlock latex={String.raw`U = -\mathbf{p}\cdot\mathbf{E}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Field at a conductor&apos;s surface</p>
          <FormulaBlock latex={String.raw`\mathbf{E} = \frac{\sigma}{\varepsilon_0}\hat{\mathbf{n}}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Parallel plate capacitor</p>
          <FormulaBlock latex={String.raw`C = \frac{\varepsilon_0 K A}{d}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Series combination</p>
          <FormulaBlock latex={String.raw`\frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2} + \dots`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Parallel combination</p>
          <FormulaBlock latex={String.raw`C = C_1 + C_2 + \dots`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Energy stored</p>
          <FormulaBlock latex={String.raw`U = \frac{1}{2}CV^{2}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Energy density</p>
          <FormulaBlock latex={String.raw`u = \frac{1}{2}\varepsilon_0 E^{2}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Polarisation</p>
          <FormulaBlock latex={String.raw`\mathbf{P} = \varepsilon_0\chi_e\mathbf{E}`} important />
        </FormulaCard>
      </div>
      <TableCard
        caption="Appendix — physical quantities used in this chapter (NCERT Table)."
        headers={["Physical quantity", "Symbol", "Dimensions", "Unit", "Remark"]}
        rows={[
          { cells: ["Potential", "V", "[M¹ L² T⁻³ A⁻¹]", "V", "Potential difference is physically significant"] },
          { cells: ["Capacitance", "C", "[M⁻¹ L⁻² T⁴ A²]", "F", "Depends only on geometry and dielectric"] },
          { cells: ["Polarisation", "P", "[L⁻² A T]", "C m⁻²", "Dipole moment per unit volume"] },
          { cells: ["Dielectric constant", "K", "dimensionless", "—", "Ratio ε/ε₀, greater than 1"] },
        ]}
      />

      <h2 id="h-2-exercises">Back-of-Chapter Exercises</h2>

      <Expandable title="Exercise 2.1 — Points of zero potential on the line joining two charges" variant="exercise">
        <ProblemSolution.Problem>
          <p>
            Two charges <Formula>{String.raw`5\times10^{-8}\ \text{C}`}</Formula> and{" "}
            <Formula>{String.raw`-3\times10^{-8}\ \text{C}`}</Formula> are located 16 cm apart. At what point(s) on the line
            joining the two charges is the electric potential zero? Take the potential at infinity to be zero.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Let the positive charge be at the origin and the negative charge at x = 16 cm, with x in cm.</p>
          <p><strong>Between the charges:</strong></p>
          <FormulaBlock latex={String.raw`\frac{5}{x} = \frac{3}{16-x} \;\Rightarrow\; 5(16-x) = 3x \;\Rightarrow\; x = 10\ \text{cm}`} />
          <p><strong>On the extended line beyond the negative charge:</strong></p>
          <FormulaBlock latex={String.raw`\frac{5}{x} = \frac{3}{x-16} \;\Rightarrow\; 5(x-16) = 3x \;\Rightarrow\; x = 40\ \text{cm}`} important />
          <p>
            The potential is zero at <strong>10 cm</strong> from the positive charge (between the charges) and at{" "}
            <strong>40 cm</strong> from it (on the side of the negative charge, i.e. 24 cm beyond it). No zero exists on the
            far side of the positive charge.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 2.2 — Potential at the centre of a charged hexagon" variant="exercise">
        <ProblemSolution.Problem>
          <p>
            A regular hexagon of side 10 cm has a charge <Formula>{String.raw`5\ \mu\text{C}`}</Formula> at each of its
            vertices. Calculate the potential at the centre of the hexagon.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            For a regular hexagon the distance from the centre to any vertex equals the side, so{" "}
            <Formula>{String.raw`r = 0.10\ \text{m}`}</Formula> for all six charges. Potentials are scalars and all six are
            equal, hence:
          </p>
          <FormulaBlock latex={String.raw`V = 6\times\frac{1}{4\pi\varepsilon_0}\frac{q}{r} = 6\times9\times10^{9}\times\frac{5\times10^{-6}}{0.10}`} />
          <FormulaBlock latex={String.raw`V = 2.7\times10^{6}\ \text{V}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 2.3 — Equipotential surface of a dipole pair" variant="exercise">
        <ProblemSolution.Problem>
          <p>
            Two charges <Formula>{String.raw`2\ \mu\text{C}`}</Formula> and <Formula>{String.raw`-2\ \mu\text{C}`}</Formula>{" "}
            are placed at points A and B 6 cm apart. (a) Identify an equipotential surface of the system. (b) What is the
            direction of the electric field at every point on this surface?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            <strong>(a)</strong> Every point on the perpendicular bisector of AB is equidistant from the two equal and
            opposite charges, so V = 0 there. An equipotential surface is therefore the{" "}
            <strong>plane normal to AB through its midpoint</strong> — the whole bisecting plane, on which V = 0 everywhere.
          </p>
          <p>
            <strong>(b)</strong> The field is normal to an equipotential surface, so at every point of this plane E is
            directed <strong>perpendicular to the plane</strong>, i.e. parallel to AB, pointing from the positive charge
            towards the negative charge.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 2.4 — Field inside, just outside and far from a charged sphere" variant="exercise">
        <ProblemSolution.Problem>
          <p>
            A spherical conductor of radius 12 cm has a charge of{" "}
            <Formula>{String.raw`1.6\times10^{-7}\ \text{C}`}</Formula> distributed uniformly on its surface. What is the
            electric field (a) inside the sphere, (b) just outside the sphere, (c) at a point 18 cm from the centre?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> Inside a conductor the field is zero: <Formula>{String.raw`E = 0`}</Formula>.</p>
          <p><strong>(b)</strong> Just outside, r = R = 0.12 m:</p>
          <FormulaBlock latex={String.raw`E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{R^{2}} = 9\times10^{9}\times\frac{1.6\times10^{-7}}{(0.12)^{2}} = 1.0\times10^{5}\ \text{N C}^{-1}`} important />
          <p><strong>(c)</strong> At r = 0.18 m, the sphere behaves as a point charge at its centre:</p>
          <FormulaBlock latex={String.raw`E = 9\times10^{9}\times\frac{1.6\times10^{-7}}{(0.18)^{2}} = 4.4\times10^{4}\ \text{N C}^{-1}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 2.5 — Capacitance after halving d and filling with a dielectric" variant="exercise">
        <ProblemSolution.Problem>
          <p>
            A parallel plate capacitor with air between the plates has a capacitance of 8 pF. What will be the capacitance
            if the distance between the plates is reduced by half, and the space between them is filled with a substance of
            dielectric constant 6?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Air behaves like vacuum, so <Formula>{String.raw`C_0 = \varepsilon_0 A/d = 8\ \text{pF}`}</Formula>. With the
            separation halved and dielectric K = 6:
          </p>
          <FormulaBlock latex={String.raw`C = \frac{\varepsilon_0 K A}{d/2} = 2K\,\frac{\varepsilon_0 A}{d} = 2\times6\times8\ \text{pF}`} />
          <FormulaBlock latex={String.raw`C = 96\ \text{pF}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 2.6 — Three 9 pF capacitors in series" variant="exercise">
        <ProblemSolution.Problem>
          <p>
            Three capacitors each of capacitance 9 pF are connected in series. (a) What is the total capacitance of the
            combination? (b) What is the potential difference across each capacitor if the combination is connected to a
            120 V supply?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> For three equal capacitors in series:</p>
          <FormulaBlock latex={String.raw`\frac{1}{C} = \frac{1}{9} + \frac{1}{9} + \frac{1}{9} = \frac{1}{3}\ \text{pF}^{-1} \;\Rightarrow\; C = 3\ \text{pF}`} important />
          <p><strong>(b)</strong> In series the charge is the same on each capacitor:</p>
          <FormulaBlock latex={String.raw`Q = CV = 3\times10^{-12}\times120 = 3.6\times10^{-10}\ \text{C}`} />
          <FormulaBlock latex={String.raw`V_{\text{each}} = \frac{Q}{C_i} = \frac{3.6\times10^{-10}}{9\times10^{-12}} = 40\ \text{V}`} important />
          <p className="text-sm text-muted-foreground">
            Equal capacitances in series divide the supply voltage equally: 3 × 40 V = 120 V.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 2.7 — 2 pF, 3 pF and 4 pF in parallel" variant="exercise">
        <ProblemSolution.Problem>
          <p>
            Three capacitors of capacitances 2 pF, 3 pF and 4 pF are connected in parallel. (a) What is the total
            capacitance of the combination? (b) Determine the charge on each capacitor if the combination is connected to a
            100 V supply.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> In parallel the capacitances add:</p>
          <FormulaBlock latex={String.raw`C = 2 + 3 + 4 = 9\ \text{pF}`} important />
          <p><strong>(b)</strong> Each capacitor has the full 100 V across it, so:</p>
          <FormulaBlock latex={String.raw`Q_1 = C_1V = 2\times10^{-12}\times100 = 2\times10^{-10}\ \text{C}`} />
          <FormulaBlock latex={String.raw`Q_2 = 3\times10^{-12}\times100 = 3\times10^{-10}\ \text{C}`} />
          <FormulaBlock latex={String.raw`Q_3 = 4\times10^{-12}\times100 = 4\times10^{-10}\ \text{C}`} important />
          <p className="text-sm text-muted-foreground">Total charge = 9 × 10⁻¹⁰ C = CV, as it must be.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 2.8 — Capacitance and plate charge of an air capacitor" variant="exercise">
        <ProblemSolution.Problem>
          <p>
            In a parallel plate capacitor with air between the plates, each plate has an area of{" "}
            <Formula>{String.raw`6\times10^{-3}\ \text{m}^{2}`}</Formula> and the distance between the plates is 3 mm.
            Calculate the capacitance of the capacitor. If this capacitor is connected to a 100 V supply, what is the charge
            on each plate?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`C = \frac{\varepsilon_0 A}{d} = \frac{8.85\times10^{-12}\times6\times10^{-3}}{3\times10^{-3}}`} />
          <FormulaBlock latex={String.raw`C = 1.77\times10^{-11}\ \text{F} \approx 18\ \text{pF}`} important />
          <FormulaBlock latex={String.raw`Q = CV = 1.77\times10^{-11}\times100 = 1.77\times10^{-9}\ \text{C}`} important />
          <p className="text-sm text-muted-foreground">The two plates carry +1.77 × 10⁻⁹ C and −1.77 × 10⁻⁹ C.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 2.9 — Inserting a mica sheet, supply on and supply off" variant="exercise">
        <ProblemSolution.Problem>
          <p>
            Explain what would happen if in the capacitor of Exercise 2.8 a 3 mm thick mica sheet (dielectric constant 6)
            were inserted between the plates, (a) while the voltage supply remained connected, (b) after the supply was
            disconnected.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The sheet exactly fills the 3 mm gap, so the capacitance becomes{" "}
            <Formula>{String.raw`C' = KC_0 = 6\times17.7\ \text{pF} \approx 1.06\times10^{-10}\ \text{F}`}</Formula> in both
            cases. What stays fixed is different.
          </p>
          <p><strong>(a) Supply connected — V stays at 100 V:</strong></p>
          <FormulaBlock latex={String.raw`Q' = C'V = 1.06\times10^{-10}\times100 = 1.06\times10^{-8}\ \text{C}`} />
          <FormulaBlock latex={String.raw`E = \frac{V}{d} = \frac{100}{3\times10^{-3}} = 3.3\times10^{4}\ \text{V m}^{-1}`} />
          <p>
            The charge on the plates increases six-fold; the field in the gap is unchanged, because the battery keeps the
            potential difference fixed.
          </p>
          <p><strong>(b) Supply disconnected — Q stays at 1.77 × 10⁻⁹ C:</strong></p>
          <FormulaBlock latex={String.raw`V' = \frac{Q}{C'} = \frac{V_0}{K} = \frac{100}{6} = 16.7\ \text{V}`} important />
          <FormulaBlock latex={String.raw`E' = \frac{V'}{d} = \frac{16.7}{3\times10^{-3}} = 5.6\times10^{3}\ \text{V m}^{-1}`} important />
          <p>
            Now the potential difference and the field both fall by the factor K. In both cases the capacitance rises by K
            and the stored energy changes accordingly.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 2.10 — Energy stored by a 12 pF capacitor" variant="exercise">
        <ProblemSolution.Problem>
          <p>A 12 pF capacitor is connected to a 50 V battery. How much electrostatic energy is stored in the capacitor?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`U = \frac{1}{2}CV^{2} = \frac{1}{2}\times12\times10^{-12}\times(50)^{2}`} />
          <FormulaBlock latex={String.raw`U = 1.5\times10^{-8}\ \text{J}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 2.11 — Energy lost when charge is shared" variant="exercise">
        <ProblemSolution.Problem>
          <p>
            A 600 pF capacitor is charged by a 200 V supply. It is then disconnected from the supply and is connected to
            another uncharged 600 pF capacitor. How much electrostatic energy is lost in the process?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Initial charge and energy:</p>
          <FormulaBlock latex={String.raw`Q = C_1V = 600\times10^{-12}\times200 = 1.2\times10^{-10}\ \text{C}`} />
          <FormulaBlock latex={String.raw`U_i = \frac{1}{2}C_1V^{2} = \frac{1}{2}\times600\times10^{-12}\times(200)^{2} = 1.2\times10^{-5}\ \text{J}`} />
          <p>
            After connecting, the charge is shared equally between two equal capacitors, so each holds Q/2 and the common
            potential is 100 V. With a total capacitance of 1200 pF:
          </p>
          <FormulaBlock latex={String.raw`U_f = \frac{1}{2}C_{\text{total}}V'^{2} = \frac{1}{2}\times1200\times10^{-12}\times(100)^{2} = 6.0\times10^{-6}\ \text{J}`} />
          <FormulaBlock latex={String.raw`\Delta U = U_i - U_f = 1.2\times10^{-5} - 6.0\times10^{-6} = 6.0\times10^{-6}\ \text{J}`} important />
          <p className="text-sm text-muted-foreground">
            Half the stored energy is lost, appearing as heat and electromagnetic radiation during the transient current.
          </p>
        </ProblemSolution.Solution>
      </Expandable>




    </>
  );
}
