import { ArrowRight } from "lucide-react";

/** Two series, one accent: the physics hue and ink. */
const SERIES_1 = "var(--subject-physics)";
const SERIES_2 = "var(--foreground)";

function TransverseGlyph() {
  return (
    <svg viewBox="0 0 220 60" className="h-16 w-full" aria-hidden="true">
      <line x1="10" y1="30" x2="210" y2="30" stroke="var(--border)" strokeWidth="1" />
      {Array.from({ length: 7 }).map((_, i) => (
        <g key={i}>
          <line
            x1={10 + i * 30}
            y1="30"
            x2={10 + i * 30}
            y2={i % 2 === 0 ? "10" : "50"}
            stroke={SERIES_1}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {i % 2 === 0 ? (
            <polygon points={`${10 + i * 30},6 ${10 + i * 30 - 5},16 ${10 + i * 30 + 5},16`} fill={SERIES_1} />
          ) : (
            <polygon points={`${10 + i * 30},54 ${10 + i * 30 - 5},44 ${10 + i * 30 + 5},44`} fill={SERIES_1} />
          )}
        </g>
      ))}
      <text x="220" y="18" fontSize="11" textAnchor="end" fill="var(--muted-foreground)">
        ↔ perpendicular
      </text>
    </svg>
  );
}

function LongitudinalGlyph() {
  return (
    <svg viewBox="0 0 220 60" className="h-16 w-full" aria-hidden="true">
      <line x1="10" y1="30" x2="210" y2="30" stroke="var(--border)" strokeWidth="1" />
      {Array.from({ length: 7 }).map((_, i) => (
        <g key={i}>
          <line
            x1={10 + i * 30}
            y1="38"
            x2={10 + i * 30 + (i % 2 === 0 ? 14 : -10)}
            y2="38"
            stroke={SERIES_2}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <polygon
            points={
              i % 2 === 0
                ? `${10 + i * 30 + 14},38 ${10 + i * 30 + 8},33 ${10 + i * 30 + 8},43`
                : `${10 + i * 30 - 10},38 ${10 + i * 30 - 4},33 ${10 + i * 30 - 4},43`
            }
            fill={SERIES_2}
          />
          {i % 2 === 0 && (
            <line x1={10 + i * 30 + 12} y1="20" x2={10 + i * 30 + 12} y2="50" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 3" />
          )}
        </g>
      ))}
      <text x="220" y="18" fontSize="11" textAnchor="end" fill="var(--muted-foreground)">
        ↔ parallel
      </text>
    </svg>
  );
}

interface Row {
  label: string;
  transverse: string;
  longitudinal: string;
}

const ROWS: Row[] = [
  { label: "Oscillation", transverse: "Perpendicular (⊥) to propagation", longitudinal: "Parallel (∥) to propagation" },
  { label: "Examples", transverse: "EM waves / light", longitudinal: "Sound waves" },
  { label: "Medium", transverse: "Can travel through vacuum", longitudinal: "Require a mechanical medium" },
];

export function TransverseLongitudinal() {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="overflow-x-auto">
        <div className="grid min-w-[340px] grid-cols-[minmax(0,0.6fr)_1fr_1fr] border-b border-border bg-muted">
          <div className="t-micro px-4 py-3">
            Wave type
          </div>
          <div className="flex items-center gap-2 border-l border-border px-4 py-3 text-sm font-semibold text-foreground">
            <span className="flex h-6 w-6 items-center justify-center rounded-[3px] border border-border bg-card text-xs">
              ⊥
            </span>
            Transverse
          </div>
          <div className="flex items-center gap-2 border-l border-border px-4 py-3 text-sm font-semibold text-foreground">
            <span className="flex h-6 w-6 items-center justify-center rounded-[3px] border border-border bg-card text-xs">
              ∥
            </span>
            Longitudinal
          </div>
          {/* propagation label + glyphs */}
          <div className="flex items-center gap-1.5 border-l border-border px-4 py-2 text-xs font-semibold text-muted-foreground">
            <ArrowRight className="h-3.5 w-3.5" />
            Propagation
          </div>
          <div className="border-l border-border px-3 py-2">
            <TransverseGlyph />
          </div>
          <div className="border-l border-border px-3 py-2">
            <LongitudinalGlyph />
          </div>
        </div>
        {ROWS.map((row) => (
          <div key={row.label} className="grid min-w-[340px] grid-cols-[minmax(0,0.6fr)_1fr_1fr] border-b border-border last:border-b-0">
            <div className="t-micro px-4 py-3">
              {row.label}
            </div>
            <div className="border-l border-border px-4 py-3 text-[0.85rem] leading-snug text-foreground">
              {row.transverse}
            </div>
            <div className="border-l border-border px-4 py-3 text-[0.85rem] leading-snug text-foreground">
              {row.longitudinal}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
