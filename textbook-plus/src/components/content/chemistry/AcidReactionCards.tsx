import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Formula } from "@/components/content/Formula";

export interface AcidReactionCard {
  /** Reaction heading, e.g. "Reaction with active metals". */
  title: ReactNode;
  /** The examples named for this reaction, e.g. "Na, Mg, Zn". */
  examples?: ReactNode;
  /** KaTeX for the general outcome. */
  general: string;
  /** KaTeX for the worked example. */
  example: string;
  /** Optional line under the pair. */
  note?: ReactNode;
}

interface AcidReactionCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** One card per way the acid shows its acidity. */
  cards: AcidReactionCard[];
}

/**
 * AcidReactionCards — each demonstration of acidity as a stacked card with the
 * general outcome on the left and the worked example on the right. The pair is
 * always in the same two positions, so the change from "active metal" to "Na"
 * is visible without re-reading the sentence around it.
 */
export function AcidReactionCards({ title, cards }: AcidReactionCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Reactions showing acidity"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {cards.length} demonstrations
        </span>
      </div>

      <div className="space-y-2 p-3 sm:p-4">
        {cards.map((card, index) => (
          <article
            key={index}
            className="overflow-hidden rounded-md border border-border/70 bg-card"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-b border-border/70 bg-muted/25 px-3 py-2">
              <span className="flex items-baseline gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_13%,transparent)] text-[0.6rem] font-extrabold tabular-nums text-[var(--subject-chemistry)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.84rem] font-extrabold leading-snug text-foreground">
                  {card.title}
                </span>
              </span>
              {card.examples && (
                <span className="rounded-[3px] border border-border/70 bg-card px-1.5 py-0.5 text-[0.66rem] font-bold text-muted-foreground">
                  {card.examples}
                </span>
              )}
            </div>

            <div className="grid gap-2 px-3 py-2.5 sm:grid-cols-2">
              <div>
                <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                  General outcome
                </p>
                <div className="mt-1 overflow-x-auto rounded-[4px] border border-border/70 bg-muted/15 px-2 py-2 text-center text-foreground">
                  <Formula>{card.general}</Formula>
                </div>
              </div>

              <div>
                <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]">
                  Example
                </p>
                <div className="mt-1 overflow-x-auto rounded-[4px] border border-[color-mix(in_oklab,var(--subject-chemistry)_30%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-2 py-2 text-center text-foreground">
                  <Formula>{card.example}</Formula>
                </div>
              </div>
            </div>

            {card.note && (
              <p className="flex items-baseline gap-1.5 border-t border-border/70 px-3 py-1.5 text-[0.74rem] leading-snug text-foreground/80">
                <ArrowRight
                  aria-hidden
                  className="h-3 w-3 shrink-0 self-center text-muted-foreground"
                  strokeWidth={2.5}
                />
                {card.note}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
