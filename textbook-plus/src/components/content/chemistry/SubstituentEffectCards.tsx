import type { ReactNode } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SubstituentSide {
  /** "EWG" or "EDG". */
  kind: "EWG" | "EDG";
  /** Full name of the group class. */
  heading: ReactNode;
  /** Example groups, e.g. "e.g. —NO₂". */
  groups: ReactNode;
  /** What the group does to acidity. */
  effect: "increase" | "decrease";
  /** One line of explanation. */
  note: ReactNode;
  /** Named example carrying the effect, e.g. picric acid. */
  highlight: { name: ReactNode; detail: ReactNode };
}

interface SubstituentEffectCardsProps {
  /** Heading strip across the pair. */
  title?: ReactNode;
  sides: SubstituentSide[];
}

const SIDE_TONE = {
  increase: {
    frame:
      "border-[color-mix(in_oklab,var(--subject-chemistry)_38%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)]",
    chip: "bg-[color-mix(in_oklab,var(--subject-chemistry)_16%,transparent)] text-[var(--subject-chemistry)]",
    icon: ArrowUp,
    label: "Acidity ↑",
  },
  decrease: {
    frame: "border-border bg-muted/35",
    chip: "bg-foreground/10 text-foreground",
    icon: ArrowDown,
    label: "Acidity ↓",
  },
} as const;

/**
 * SubstituentEffectCards — electron-withdrawing and electron-releasing groups
 * as two opposing columns. The direction of the acidity arrow is repeated as an
 * icon, and each column closes on the named compound that proves it.
 */
export function SubstituentEffectCards({ title, sides }: SubstituentEffectCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
          <span className="t-micro">{title}</span>
          <span className="t-micro">Substituent effect</span>
        </div>
      )}

      <div className="grid gap-3 p-3 sm:grid-cols-2 sm:p-4">
        {sides.map((side) => {
          const tone = SIDE_TONE[side.effect];
          const Icon = tone.icon;

          return (
            <article
              key={side.kind}
              className={cn("flex min-w-0 flex-col rounded-md border px-3 py-3", tone.frame)}
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className={cn(
                    "rounded-[3px] px-2 py-0.5 text-[0.66rem] font-extrabold uppercase tracking-[0.08em]",
                    tone.chip,
                  )}
                >
                  {side.kind}
                </span>

                <span className="inline-flex shrink-0 items-center gap-1 text-[0.68rem] font-extrabold uppercase tracking-[0.06em] text-foreground/80">
                  <Icon aria-hidden className="h-3.5 w-3.5" strokeWidth={2.5} />
                  {tone.label}
                </span>
              </div>

              <p className="mt-2.5 text-sm font-extrabold leading-snug text-foreground">
                {side.heading}
              </p>

              <p className="mt-0.5 text-sm font-bold text-muted-foreground">{side.groups}</p>

              <p className="mt-2 text-sm leading-relaxed text-foreground/90">{side.note}</p>

              <div className="mt-auto pt-3">
                <div className="rounded-md border border-border/70 bg-card px-3 py-2">
                  <p className="text-sm font-extrabold leading-snug text-foreground">
                    {side.highlight.name}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {side.highlight.detail}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
