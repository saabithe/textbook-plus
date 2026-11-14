import type { ReactNode } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface AcidChlorideCard {
  /** Reagent name, e.g. "With PCl₃". */
  name: ReactNode;
  /** Reagent formula, printed as a chip, e.g. "PCl₃". */
  formula: ReactNode;
  /** KaTeX for the reaction. */
  equation: string;
  /** Marks the preferred reagent. */
  best?: boolean;
  /** Why it is preferred. */
  reason?: ReactNode;
}

interface AcidChlorideCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The shared transformation, as KaTeX. */
  transformation: string;
  cards: AcidChlorideCard[];
}

/**
 * AcidChlorideCards — three ways to reach the same acid chloride, compared side
 * by side. The shared transformation is printed once above the row, so each
 * card only has to give its reagent and its by-products; the preferred reagent
 * is tinted and carries the reason, rather than the choice being buried in
 * prose.
 */
export function AcidChlorideCards({
  title,
  transformation,
  cards,
}: AcidChlorideCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Acid chloride formation"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {cards.length} reagents
        </span>
      </div>

      <div className="px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_38%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)] px-3 py-2.5">
          <span className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
            Common transformation
          </span>
          <div className="overflow-x-auto text-foreground">
            <Formula>{transformation}</Formula>
          </div>
        </div>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-3 sm:p-4">
        {cards.map((card, index) => (
          <article
            key={index}
            className={cn(
              "flex min-w-0 flex-col overflow-hidden rounded-md border bg-card",
              card.best
                ? "border-[color-mix(in_oklab,var(--subject-chemistry)_48%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]"
                : "border-border/70",
            )}
          >
            <div className="flex items-baseline justify-between gap-2 border-b border-border/70 px-2.5 py-2">
              <p className="text-[0.8rem] font-extrabold leading-snug text-foreground">
                {card.name}
              </p>
              <span className="shrink-0 rounded-[3px] bg-muted px-1.5 py-0.5 text-[0.58rem] font-extrabold text-muted-foreground">
                {card.formula}
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-center px-2.5 py-3">
              <div className="overflow-x-auto rounded-[4px] border border-border/70 bg-muted/15 px-2 py-2 text-center text-foreground">
                <Formula>{card.equation}</Formula>
              </div>

              {card.best && (
                <div className="mt-2 flex items-start gap-1.5">
                  <Sparkles
                    aria-hidden
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--subject-chemistry)]"
                    strokeWidth={2.2}
                  />
                  <div className="min-w-0">
                    <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.08em] text-[var(--subject-chemistry)]">
                      Best method
                    </p>
                    {card.reason && (
                      <p className="mt-0.5 flex items-baseline gap-1 text-[0.74rem] leading-snug text-foreground/85">
                        <ArrowRight
                          aria-hidden
                          className="h-3 w-3 shrink-0 self-center text-muted-foreground"
                          strokeWidth={2.5}
                        />
                        {card.reason}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
