import { ArrowRight } from "lucide-react";

function TransverseGlyph() {
  return (
    <svg viewBox="0 0 220 60" className="h-16 w-full" aria-hidden="true">
      <line x1="10" y1="30" x2="210" y2="30" stroke="var(--foreground)" strokeOpacity="0.2" strokeWidth="1.5" />
      {Array.from({ length: 7 }).map((_, i) => (
        <g key={i}>
          <line
            x1={10 + i * 30}
            y1="30"
            x2={10 + i * 30}
            y2={i % 2 === 0 ? "10" : "50"}
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {i % 2 === 0 ? (
            <polygon points={`${10 + i * 30},6 ${10 + i * 30 - 5},16 ${10 + i * 30 + 5},16`} fill="#8b5cf6" />
          ) : (
            <polygon points={`${10 + i * 30},54 ${10 + i * 30 - 5},44 ${10 + i * 30 + 5},44`} fill="#8b5cf6" />
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
      <line x1="10" y1="30" x2="210" y2="30" stroke="var(--foreground)" strokeOpacity="0.2" strokeWidth="1.5" />
      {Array.from({ length: 7 }).map((_, i) => (
        <g key={i}>
          <line
            x1={10 + i * 30}
            y1="38"
            x2={10 + i * 30 + (i % 2 === 0 ? 14 : -10)}
            y2="38"
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <polygon
            points={
              i % 2 === 0
                ? `${10 + i * 30 + 14},38 ${10 + i * 30 + 8},33 ${10 + i * 30 + 8},43`
                : `${10 + i * 30 - 10},38 ${10 + i * 30 - 4},33 ${10 + i * 30 - 4},43`
            }
            fill="#f59e0b"
          />
          {i % 2 === 0 && (
            <line x1={10 + i * 30 + 12} y1="20" x2={10 + i * 30 + 12} y2="50" stroke="var(--foreground)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="2 3" />
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
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 shadow-sm">
      <div className="grid grid-cols-[minmax(0,0.7fr)_1fr_1fr] bg-muted/30">
        <div className="px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          Wave type
        </div>
        <div className="flex items-center gap-2 px-4 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-sm shadow-violet-500/30">
            ⊥
          </span>
          Transverse
        </div>
        <div className="flex items-center gap-2 px-4 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-amber-700 dark:text-amber-300">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-sm shadow-amber-500/30">
            ∥
          </span>
          Longitudinal
        </div>
        <div className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-muted-foreground">
          <ArrowRight className="h-3.5 w-3.5" />
          Propagation
        </div>
        <TransverseGlyph />
        <LongitudinalGlyph />
      </div>
      {ROWS.map((row) => (
        <div key={row.label} className="grid grid-cols-[minmax(0,0.7fr)_1fr_1fr] border-t border-border/50">
          <div className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
            {row.label}
          </div>
          <div className="px-4 py-3 text-[0.85rem] leading-snug text-foreground/85">{row.transverse}</div>
          <div className="px-4 py-3 text-[0.85rem] leading-snug text-foreground/85">{row.longitudinal}</div>
        </div>
      ))}
    </div>
  );
}