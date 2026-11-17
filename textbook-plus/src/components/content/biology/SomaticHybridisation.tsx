import { ArrowDown } from "lucide-react";

/**
 * SomaticHybridisation — fusing two plant varieties into one plant.
 *
 * The flow is vertical because the note reads downwards: two parents in, one
 * hybrid out. Variety A and Variety B keep the note's own wording (Cytoplasm /
 * Protoplasm), so the asymmetry is visible rather than tidied away.
 * Accents follow the chapter: indigo = the technique, teal = living material,
 * emerald = the resulting plant.
 */

const PLANT = "var(--subject-biology)";
const AMBER = "var(--warning)";

export function SomaticHybridisationPrinciple() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-sm leading-relaxed text-foreground">
        Isolated protoplasts from two different plant varieties, each possessing a desirable character, can be fused to
        produce <strong className="font-semibold">hybrid protoplasts</strong>.
      </div>
      <div className="mt-1.5 text-sm leading-relaxed text-foreground">
        These hybrid protoplasts can subsequently be grown to form a new plant.
      </div>

      <div className="mt-3.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="rounded-lg border border-teal-600/30 bg-teal-50/40 px-3 py-2.5 dark:bg-teal-950/20">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
            Somatic hybrids
          </div>
          <div className="mt-0.5 text-xs leading-snug text-foreground">The resulting hybrid plants.</div>
        </div>

        <div className="rounded-lg border border-indigo-600/30 bg-indigo-50/40 px-3 py-2.5 dark:bg-indigo-950/20">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
            Somatic hybridisation
          </div>
          <div className="mt-0.5 text-xs leading-snug text-foreground">The process of producing somatic hybrids.</div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ parent */

function ParentGlyph() {
  return (
    <svg viewBox="0 0 40 44" className="h-9 w-8" aria-hidden>
      <path d="M20 40 L20 14" stroke={PLANT} strokeWidth={2.4} strokeLinecap="round" fill="none" />
      <ellipse
        cx={11}
        cy={23}
        rx={9}
        ry={3.6}
        transform="rotate(-24 11 23)"
        fill={PLANT}
        fillOpacity={0.3}
        stroke={PLANT}
        strokeOpacity={0.6}
        strokeWidth={1.1}
      />
      <ellipse
        cx={29}
        cy={18}
        rx={9}
        ry={3.6}
        transform="rotate(24 29 18)"
        fill={PLANT}
        fillOpacity={0.3}
        stroke={PLANT}
        strokeOpacity={0.6}
        strokeWidth={1.1}
      />
      <circle cx={20} cy={9} r={4} fill={AMBER} fillOpacity={0.45} stroke={AMBER} strokeWidth={1.2} />
    </svg>
  );
}

const PARENTS = [
  { label: "Variety A", detail: "Cytoplasm + Nucleoplasm" },
  { label: "Variety B", detail: "Protoplasm + Nucleoplasm" },
];

function StepArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-0.5" aria-hidden>
      <ArrowDown className="h-4 w-4 text-muted-foreground" />
      {label && (
        <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------- flow */

export function SomaticFusionFlow() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="mx-auto flex max-w-md flex-col">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {PARENTS.map((parent) => (
            <div
              key={parent.label}
              className="flex flex-col items-center rounded-lg border border-border bg-muted/20 px-3 py-3 text-center"
            >
              <ParentGlyph />
              <div className="mt-1.5 text-xs font-bold tracking-tight text-foreground">{parent.label}</div>
              <div className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{parent.detail}</div>
            </div>
          ))}
        </div>

        <StepArrow label="Fusion" />

        <div className="rounded-lg border border-indigo-600/35 bg-indigo-50/40 px-3 py-2.5 text-center dark:bg-indigo-950/20">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
            Hybrid protoplast
          </div>
        </div>

        <StepArrow label="Grown on" />

        <div className="rounded-lg border-2 border-emerald-600/35 bg-emerald-50/50 px-3 py-3 text-center dark:bg-emerald-950/25">
          <div className="text-sm font-bold tracking-tight text-emerald-950 dark:text-emerald-100">Somatic hybrid</div>
          <div className="mt-0.5 text-[11px] text-emerald-900/80 dark:text-emerald-200/80">New plant</div>
        </div>
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Isolated protoplasts from two varieties, each carrying a desirable character, fuse into a hybrid protoplast that
        grows into a new plant.
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ pomato */

const HYBRID_PARENTS = ["Tomato", "Potato"];

export function PomatoCard() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {HYBRID_PARENTS.map((parent, index) => (
          <div key={parent} className="flex items-center gap-2">
            <div className="rounded-lg border border-border bg-muted/20 px-5 py-2.5">
              <span className="text-sm font-semibold tracking-tight text-foreground">{parent}</span>
            </div>
            {index === 0 && (
              <span className="text-sm font-medium text-muted-foreground" aria-hidden>
                +
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center py-1" aria-hidden>
        <ArrowDown className="h-4 w-4 text-muted-foreground" />
      </div>

      <div className="mx-auto max-w-xs rounded-lg border-2 border-emerald-600/35 bg-emerald-50/50 px-4 py-3 text-center dark:bg-emerald-950/25">
        <div className="text-base font-bold tracking-tight text-emerald-950 dark:text-emerald-100">Pomato</div>
        <div className="mt-0.5 text-[11px] text-emerald-900/80 dark:text-emerald-200/80">Tomato + Potato</div>
      </div>
    </div>
  );
}
