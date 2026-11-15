import { cn } from "@/lib/utils";

/**
 * InteractionSigns — the single source of truth for the +/−/0 ecological
 * language used by the Organisms and Populations chapter.
 *
 * Colour meaning is fixed here and must never be re-used for anything else:
 *   +  → emerald  → beneficial
 *   −  → rose     → detrimental
 *   0  → slate    → no effect
 */
export type Sign = "+" | "−" | "0";

export const SIGN_STYLES: Record<
  Sign,
  { badge: string; dot: string; label: string; meaning: string }
> = {
  "+": {
    badge:
      "bg-emerald-100 text-emerald-800 ring-emerald-600/25 dark:bg-emerald-900/40 dark:text-emerald-200 dark:ring-emerald-400/30",
    dot: "bg-emerald-600 dark:bg-emerald-400",
    label: "Beneficial",
    meaning: "the species gains from the interaction",
  },
  "−": {
    badge:
      "bg-rose-100 text-rose-800 ring-rose-600/25 dark:bg-rose-900/40 dark:text-rose-200 dark:ring-rose-400/30",
    dot: "bg-rose-600 dark:bg-rose-400",
    label: "Detrimental",
    meaning: "the species is harmed by the interaction",
  },
  "0": {
    badge:
      "bg-slate-200 text-slate-800 ring-slate-500/25 dark:bg-slate-700 dark:text-slate-100 dark:ring-slate-400/30",
    dot: "bg-slate-500 dark:bg-slate-300",
    label: "No effect",
    meaning: "the species is unaffected",
  },
};

const SIZES = {
  sm: "h-7 w-7 rounded-md text-sm",
  md: "h-9 w-9 rounded-lg text-lg",
  lg: "h-11 w-11 rounded-xl text-2xl",
} as const;

export type SignSize = keyof typeof SIZES;

interface SignBadgeProps {
  sign: Sign;
  size?: SignSize;
  className?: string;
}

/** Visual sign only — always pair it with visible text somewhere nearby. */
export function SignBadge({ sign, size = "md", className }: SignBadgeProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center font-bold leading-none ring-1",
        SIZES[size],
        SIGN_STYLES[sign].badge,
        className,
      )}
    >
      {sign}
    </span>
  );
}

interface SpeciesEffectProps {
  sign: Sign;
  species: string;
  role?: string;
  size?: SignSize;
}

function SpeciesEffect({ sign, species, role, size = "md" }: SpeciesEffectProps) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <SignBadge sign={sign} size={size} />
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          {species}
        </div>
        <div className="text-sm leading-snug text-foreground">
          {role ?? SIGN_STYLES[sign].label}
          <span className="sr-only"> ({SIGN_STYLES[sign].label})</span>
        </div>
      </div>
    </div>
  );
}

interface SignPairProps {
  a: Sign;
  b: Sign;
  aSpecies?: string;
  bSpecies?: string;
  aRole?: string;
  bRole?: string;
  size?: SignSize;
  className?: string;
}

/** Two species, two aligned columns — the effects can never be confused. */
export function SignPair({
  a,
  b,
  aSpecies = "Species A",
  bSpecies = "Species B",
  aRole,
  bRole,
  size = "md",
  className,
}: SignPairProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 rounded-xl border border-border bg-card px-3 py-2.5 sm:grid-cols-2 sm:gap-0 sm:px-0 sm:py-0",
        className,
      )}
    >
      <div className="sm:px-4 sm:py-3">
        <SpeciesEffect sign={a} species={aSpecies} role={aRole} size={size} />
      </div>
      <div className="border-t border-border pt-3 sm:border-l sm:border-t-0 sm:py-3 sm:pl-4 sm:pr-4 sm:pt-3">
        <SpeciesEffect sign={b} species={bSpecies} role={bRole} size={size} />
      </div>
    </div>
  );
}

const LEGEND_ORDER: Sign[] = ["+", "−", "0"];

/** Compact inline legend — deliberately not sticky (the page already has a
 *  sticky navbar and a reading-progress bar). */
export function SignLegend() {
  return (
    <div className="my-6 rounded-xl border border-border bg-card px-4 py-3.5">
      <div className="t-micro">Sign legend — used throughout this topic</div>
      <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3" role="list">
        {LEGEND_ORDER.map((sign) => {
          const s = SIGN_STYLES[sign];
          return (
            <div key={sign} className="flex items-center gap-2.5" role="listitem">
              <SignBadge sign={sign} size="md" />
              <div className="min-w-0">
                <div className="text-sm font-medium leading-snug text-foreground">{s.label}</div>
                <div className="text-xs leading-snug text-muted-foreground">{s.meaning}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
