import type { ReactNode } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AciditySide {
  /** Group class, e.g. "EWG". */
  kind: "EWG" | "EDG";
  /** Full name of the class, e.g. "Electron-Withdrawing Groups". */
  heading: ReactNode;
  /** Which way the group pushes acidity. */
  direction: "increase" | "decrease";
  /** What the group does to the carboxylate anion. */
  points: ReactNode[];
  /** Example groups, e.g. –NO₂, –X, –CF₃. */
  groups: ReactNode[];
}

interface AcidityEffectCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  sides: AciditySide[];
}

const TONE = {
  increase: {
    frame:
      "border-[color-mix(in_oklab,var(--subject-chemistry)_38%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]",
    chip: "bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] text-[var(--subject-chemistry)]",
    icon: ArrowUp,
    label: "Acidity ↑",
  },
  decrease: {
    frame: "border-border/70 bg-muted/30",
    chip: "bg-foreground/10 text-foreground",
    icon: ArrowDown,
    label: "Acidity ↓",
  },
} as const;

/**
 * AcidityEffectCards — the two substituent classes as opposing columns, each
 * opening with the direction its arrow points. The effect is repeated as an
 * icon so the increase/decrease pair cannot be swapped in memory, and the
 * example groups close the column as chips rather than as another sentence.
 */
export function AcidityEffectCards({
  title,
  sides,
}: AcidityEffectCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Effect of substituents on acidity"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          Two directions
        </span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {sides.map((side) => {
          const tone = TONE[side.direction];
          const Icon = tone.icon;

          return (
            <article
              key={side.kind}
              className={cn("flex min-w-0 flex-col rounded-md border px-3 py-3", tone.frame)}
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className={cn(
                    "rounded-[3px] px-2 py-0.5 text-[0.62rem] font-extrabold uppercase tracking-[0.08em]",
                    tone.chip,
                  )}
                >
                  {side.kind}
                </span>
                <span className="flex shrink-0 items-center gap-1 text-[0.66rem] font-extrabold uppercase tracking-[0.06em] text-foreground/80">
                  <Icon aria-hidden className="h-3.5 w-3.5" strokeWidth={2.5} />
                  {tone.label}
                </span>
              </div>

              <p className="mt-2 text-[0.9rem] font-extrabold leading-snug text-foreground">
                {side.heading}
              </p>

              <ul className="mt-1.5 space-y-1">
                {side.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-1.5 text-[0.8rem] leading-snug text-foreground/85"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.42em] h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
                    />
                    <span className="min-w-0">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-3">
                <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                  Examples
                </p>
                <div className="mt-1 flex flex-wrap gap-1">
                  {side.groups.map((group, index) => (
                    <span
                      key={index}
                      className="rounded-[3px] border border-border/70 bg-card px-1.5 py-0.5 text-[0.74rem] font-extrabold text-foreground"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
