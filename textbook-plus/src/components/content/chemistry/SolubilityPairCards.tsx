import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SolubilityCard {
  /** Card title, e.g. "Hydrogen bonding with water". */
  title: ReactNode;
  /** What the card states. */
  statement?: ReactNode;
  /** Structure line drawn under the statement, e.g. ">C=O ⋯ H–O–H". */
  structure?: ReactNode;
  /** A relation printed as the card's largest line, e.g. chain length ↑ ⇒ solubility ↓. */
  relation?: ReactNode;
  /** One line of explanation. */
  note?: ReactNode;
  /** "chemistry" tints the card as the effect that decides solubility. */
  tone?: "chemistry" | "muted";
}

interface SolubilityPairCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The two cards, side by side on desktop. */
  cards: SolubilityCard[];
}

/**
 * SolubilityPairCards — the two facts that decide ether solubility next to each
 * other: the hydrogen bond that pulls a carbonyl compound into water, and the
 * alkyl chain that pushes it out. The second card prints its relation as the
 * largest line, so the trade-off is read as a rule, not a sentence.
 */
export function SolubilityPairCards({ title, cards }: SolubilityPairCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Solubility in water"}</span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {cards.map((card, index) => {
          const chemistry = card.tone !== "muted";

          return (
            <article
              key={index}
              className={cn(
                "flex min-w-0 flex-col rounded-md border px-3 py-3",
                chemistry
                  ? "border-[color-mix(in_oklab,var(--subject-chemistry)_28%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]"
                  : "border-border/70 bg-muted/15",
              )}
            >
              <p className="text-sm font-extrabold leading-snug text-foreground">{card.title}</p>

              {card.statement && (
                <p className="mt-1.5 text-xs leading-relaxed text-foreground/85">
                  {card.statement}
                </p>
              )}

              {card.structure && (
                <p className="mt-2 rounded-[4px] border border-border/70 bg-card px-2 py-2 text-center text-base font-extrabold tracking-tight text-foreground">
                  {card.structure}
                </p>
              )}

              {card.relation && (
                <p className="mt-2 overflow-x-auto rounded-[4px] border border-[color-mix(in_oklab,var(--subject-chemistry)_28%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_9%,transparent)] px-2 py-2 text-center text-[0.9rem] font-extrabold leading-snug tracking-tight text-foreground">
                  {card.relation}
                </p>
              )}

              {card.note && (
                <p className="mt-2 flex flex-wrap items-baseline gap-x-1.5 border-t border-border/70 pt-1.5 text-xs leading-relaxed text-muted-foreground">
                  <span className="text-[0.56rem] font-extrabold uppercase tracking-[0.1em]">
                    Reason
                  </span>
                  <span className="text-foreground/85">{card.note}</span>
                </p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
