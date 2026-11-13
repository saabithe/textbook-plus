import type { ReactNode } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ForceCard {
  /** Force or reason the card is named for, e.g. "Dipole–dipole interactions". */
  title: ReactNode;
  /** Which way the comparison runs, e.g. "Higher boiling point than". */
  direction: ReactNode;
  /** Families the comparison is made against. */
  against: ReactNode[];
  /** What follows from the comparison. */
  statement: ReactNode;
  /** Why it follows. */
  reason: ReactNode;
  /** "higher" tints the winning side; "lower" stays quiet. */
  tone?: "higher" | "lower";
}

interface ForceComparisonCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** One card per force. */
  cards: ForceCard[];
}

/**
 * ForceComparisonCards — the two halves of the same argument side by side: the
 * force that lifts aldehydes and ketones above hydrocarbons and ethers, and the
 * force alcohols have and they lack. Each card opens with the direction of the
 * comparison, so the pair can be read as one scale rather than two facts.
 */
export function ForceComparisonCards({ title, cards }: ForceComparisonCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Intermolecular forces"}</span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {cards.map((card, index) => {
          const higher = card.tone !== "lower";
          const Icon = higher ? ArrowUp : ArrowDown;

          return (
            <article
              key={index}
              className={cn(
                "flex min-w-0 flex-col rounded-md border px-3 py-3",
                higher
                  ? "border-[color-mix(in_oklab,var(--subject-chemistry)_28%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]"
                  : "border-border/70 bg-muted/15",
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-1">
                <p className="text-sm font-extrabold leading-snug text-foreground">{card.title}</p>

                <span
                  className={cn(
                    "flex shrink-0 items-center gap-1 rounded-[3px] px-1.5 py-0.5 text-[0.58rem] font-extrabold uppercase tracking-[0.06em]",
                    higher
                      ? "bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] text-[var(--subject-chemistry)]"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  <Icon aria-hidden className="h-3 w-3" strokeWidth={2.5} />
                  {card.direction}
                </span>
              </div>

              <ul className="mt-1.5 flex flex-wrap gap-1">
                {card.against.map((family, familyIndex) => (
                  <li
                    key={familyIndex}
                    className="rounded-[3px] border border-border bg-card px-1.5 py-0.5 text-[0.66rem] font-bold text-foreground/85"
                  >
                    {family}
                  </li>
                ))}
              </ul>

              <p className="mt-2 text-xs leading-relaxed text-foreground/85">{card.statement}</p>

              <p className="mt-2 flex flex-wrap items-baseline gap-x-1.5 border-t border-border/70 pt-1.5 text-xs leading-relaxed text-muted-foreground">
                <span className="text-[0.56rem] font-extrabold uppercase tracking-[0.1em]">
                  Reason
                </span>
                <span className="text-foreground/85">{card.reason}</span>
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
