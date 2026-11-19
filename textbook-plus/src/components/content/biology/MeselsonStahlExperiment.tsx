import type { ReactNode } from "react";
import { TableCard } from "@/components/content/data/TableCard";
import { Callout } from "@/components/content/Callout";
import { Highlight } from "@/components/content/Highlight";
import { KeyPoint } from "@/components/content/KeyPoint";

const EYEBROW = "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

interface Generation {
  label: string;
  intro?: ReactNode;
  points: ReactNode[];
}

const GENERATIONS: Generation[] = [
  {
    label: "Generation I — 20 minutes",
    points: [
      "All DNA molecules show intermediate density.",
      "Each molecule contains one old ¹⁵N strand and one new ¹⁴N strand.",
    ],
  },
  {
    label: "Generation II — 40 minutes",
    intro: "Two DNA populations appear:",
    points: ["Hybrid DNA (¹⁵N–¹⁴N)", "Light DNA (¹⁴N–¹⁴N)"],
  },
  {
    label: "Generation III — 60 minutes",
    points: [
      "Both hybrid and light DNA remain present.",
      "Light DNA becomes increasingly predominant with successive generations.",
    ],
  },
];

type BandPattern = "heavy" | "hybrid" | "light";

interface Band {
  pattern: BandPattern;
  y: number;
}

interface Tube {
  time: string;
  generation: string;
  bands: Band[];
}

/** One heavy band → one hybrid band → hybrid and light bands. */
const TUBES: Tube[] = [
  { time: "0 min", generation: "Before transfer", bands: [{ pattern: "heavy", y: 136 }] },
  { time: "20 min", generation: "I", bands: [{ pattern: "hybrid", y: 92 }] },
  {
    time: "40 min",
    generation: "II",
    bands: [
      { pattern: "light", y: 48 },
      { pattern: "hybrid", y: 92 },
    ],
  },
  {
    time: "60 min",
    generation: "III",
    bands: [
      { pattern: "light", y: 48 },
      { pattern: "hybrid", y: 92 },
    ],
  },
];

interface BandRectProps {
  pattern: BandPattern;
  x: number;
  y: number;
}

function BandRect({ pattern, x, y }: BandRectProps) {
  if (pattern === "heavy") {
    return <rect x={x} y={y} width={40} height={12} rx={3} className="fill-indigo-700 dark:fill-indigo-400" />;
  }
  return (
    <rect
      x={x}
      y={y}
      width={40}
      height={12}
      rx={3}
      fill={pattern === "hybrid" ? "url(#ms-hybrid)" : "url(#ms-light)"}
    />
  );
}

function DensityGradientDiagram() {
  return (
    <figure className="my-6 rounded-2xl border border-border bg-card p-4">
      <div className={EYEBROW}>DNA density across generations</div>
      <div className="mt-3 overflow-x-auto">
        <svg
          viewBox="0 0 520 228"
          className="mx-auto h-auto w-full min-w-[460px]"
          role="img"
          aria-label="Caesium chloride density-gradient tubes: at 0 minutes one heavy band at the bottom; at 20 minutes one intermediate hybrid band; at 40 and 60 minutes both hybrid and light bands. Heavy is drawn solid, hybrid with diagonal hatching and light with dots."
        >
          <defs>
            <pattern id="ms-hybrid" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="8" height="8" className="fill-amber-100 dark:fill-amber-950" />
              <line x1="0" y1="0" x2="0" y2="8" strokeWidth="3" className="stroke-amber-600 dark:stroke-amber-400" />
            </pattern>
            <pattern id="ms-light" width="8" height="8" patternUnits="userSpaceOnUse">
              <rect width="8" height="8" className="fill-emerald-50 dark:fill-emerald-950" />
              <circle cx="2" cy="2" r="1.6" className="fill-emerald-600 dark:fill-emerald-400" />
              <circle cx="6" cy="6" r="1.6" className="fill-emerald-600 dark:fill-emerald-400" />
            </pattern>
          </defs>

          {/* density scale */}
          {[
            { label: "Light", y: 54 },
            { label: "Hybrid", y: 98 },
            { label: "Heavy", y: 142 },
          ].map((marker) => (
            <g key={marker.label}>
              <text x="4" y={marker.y + 3} className="fill-muted-foreground text-[9px]">
                {marker.label}
              </text>
              <line x1="34" y1={marker.y} x2="42" y2={marker.y} strokeWidth="1" strokeDasharray="2 2" className="stroke-border" />
            </g>
          ))}

          {TUBES.map((tube, index) => {
            const x = 48 + index * 110;
            return (
              <g key={tube.time}>
                <rect
                  x={x}
                  y={24}
                  width={48}
                  height={136}
                  rx={7}
                  className="fill-muted/20 stroke-border"
                  strokeWidth={1.5}
                />
                <line
                  x1={x - 4}
                  y1={24}
                  x2={x + 52}
                  y2={24}
                  strokeWidth={2}
                  strokeLinecap="round"
                  className="stroke-foreground/60"
                />
                {tube.bands.map((band) => (
                  <BandRect key={band.pattern} pattern={band.pattern} x={x + 4} y={band.y} />
                ))}
                <text x={x + 24} y={180} textAnchor="middle" className="fill-foreground text-[10px] font-bold">
                  {tube.time}
                </text>
                <text x={x + 24} y={194} textAnchor="middle" className="fill-muted-foreground text-[9px]">
                  {tube.generation}
                </text>
              </g>
            );
          })}

          {/* legend */}
          <line x1="4" y1={204} x2="516" y2={204} strokeWidth="1" className="stroke-border" />
          <g>
            <rect x="36" y={211} width={18} height={10} rx={2} className="fill-indigo-700 dark:fill-indigo-400" />
            <text x="60" y={219} className="fill-foreground text-[9px]">
              Heavy (¹⁵N–¹⁵N)
            </text>
            <rect x="204" y={211} width={18} height={10} rx={2} fill="url(#ms-hybrid)" />
            <text x="228" y={219} className="fill-foreground text-[9px]">
              Hybrid (¹⁵N–¹⁴N)
            </text>
            <rect x="372" y={211} width={18} height={10} rx={2} fill="url(#ms-light)" />
            <text x="396" y={219} className="fill-foreground text-[9px]">
              Light (¹⁴N–¹⁴N)
            </text>
          </g>
        </svg>
      </div>
    </figure>
  );
}

export function MeselsonStahlExperiment() {
  return (
    <section className="my-8 space-y-6">
      <div className="rounded-xl border border-border bg-card p-3.5">
        <div className={EYEBROW}>Organism</div>
        <div className="mt-1 text-sm font-semibold text-foreground">
          <em>ESCHERICHIA COLI</em>
        </div>
      </div>

      <div>
        <div className={EYEBROW}>① Isotopic labelling</div>
        <TableCard
          headers={["Isotope", "Medium", "DNA density"]}
          rows={[
            { cells: [<strong key="n15">¹⁵N</strong>, "¹⁵NH₄Cl (heavy nitrogen)", "Heavy DNA"] },
            { cells: [<strong key="n14">¹⁴N</strong>, "¹⁴NH₄Cl (normal nitrogen)", "Light DNA"] },
          ]}
        />
        <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
          <li>
            <em>E. coli</em> was initially grown in a medium containing <strong>¹⁵NH₄Cl</strong> for many generations.
          </li>
          <li>Its DNA incorporated heavy nitrogen (¹⁵N).</li>
          <li>
            Cells were then transferred to a medium containing <strong>¹⁴NH₄Cl</strong>.
          </li>
          <li>DNA was extracted at definite time intervals.</li>
        </ul>
        <p className="text-sm leading-relaxed text-foreground">
          <strong>Separation technique:</strong> Caesium chloride (CsCl) density-gradient centrifugation.
        </p>
        <Callout type="important">
          <strong>¹⁵N</strong> is a heavy, <strong>non-radioactive</strong> isotope. The separation is based on{" "}
          <Highlight color="yellow">DNA density, not radioactivity</Highlight>.
        </Callout>
      </div>

      <div>
        <div className={EYEBROW}>② Generations and results</div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          <em>E. coli</em> generation time = approximately <strong>20 minutes</strong>.
        </p>
        <TableCard
          headers={["Time", "Generation", "DNA obtained", "Density"]}
          rows={[
            { cells: ["0 min", "Before transfer", "¹⁵N–¹⁵N", "Heavy"] },
            { cells: ["20 min", "I", "¹⁵N–¹⁴N", "Hybrid / Intermediate"] },
            { cells: ["40 min", "II", "¹⁵N–¹⁴N + ¹⁴N–¹⁴N", "Hybrid + Light"] },
            { cells: ["60 min", "III", "¹⁵N–¹⁴N + ¹⁴N–¹⁴N", "Hybrid + Light"] },
          ]}
        />
        <DensityGradientDiagram />
      </div>

      <div>
        <div className={EYEBROW}>③ Interpretation</div>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
          {GENERATIONS.map((generation) => (
            <div key={generation.label} className="rounded-xl border border-border bg-card p-3.5">
              <div className={EYEBROW}>{generation.label}</div>
              {generation.intro && (
                <p className="mt-2 text-sm leading-relaxed text-foreground">{generation.intro}</p>
              )}
              <ul className="my-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
                {generation.points.map((point) => (
                  <li key={String(point)}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <KeyPoint title="Conclusion">
          <strong>DNA replication occurs in a semiconservative manner.</strong> Each daughter molecule retains one
          parental strand and contains one newly synthesised strand.
        </KeyPoint>
      </div>
    </section>
  );
}
