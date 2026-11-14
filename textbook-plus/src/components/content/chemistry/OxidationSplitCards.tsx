import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface OxidationCard {
  /** Alcohol class, e.g. "Primary alcohol (1°)". */
  alcoholClass: ReactNode;
  /** Product family, e.g. "Aldehyde". */
  product: ReactNode;
  /** KaTeX for the one-line transformation, e.g. 1° alcohol → aldehyde. */
  general: string;
  /** KaTeX for the worked example. */
  example: string;
  /** Names under the example, e.g. "Butan-1-ol → Butanal". */
  exampleName: ReactNode;
  /** Aldehyde cards take the chemistry hue, ketone cards the warning hue. */
  tone: "aldehyde" | "ketone";
}

interface OxidationSplitCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** One card per alcohol class. */
  cards: OxidationCard[];
}

const TONE = {
  aldehyde: {
    card: "border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)]",
    rule: "bg-[var(--subject-chemistry)]",
    chip: "bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] text-[var(--subject-chemistry)]",
    example:
      "border-[color-mix(in_oklab,var(--subject-chemistry)_28%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)]",
  },
  ketone: {
    card: "border-warning/40",
    rule: "bg-warning",
    chip: "bg-warning/15 text-warning",
    example: "border-warning/35 bg-warning/[0.07]",
  },
} as const;

/**
 * OxidationSplitCards — the two oxidation outcomes side by side, each card
 * carrying the alcohol class, the general change, the worked example and the
 * names. The product chip is the card's loudest element and the two products
 * take contrasting accents, so primary → aldehyde and secondary → ketone are
 * told apart before the equations are read.
 */
export function OxidationSplitCards({
  title,
  cards,
}: OxidationSplitCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Oxidation of alcohols"}</span>
        <span className="text-[0.68rem] font-extrabold tabular-nums text-muted-foreground">
          {cards.length} CLASSES
        </span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {cards.map((card, index) => {
          const tone = TONE[card.tone];

          return (
            <article
              key={index}
              className={cn(
                "relative flex min-w-0 flex-col overflow-hidden rounded-md border bg-card px-3 py-3",
                tone.card,
              )}
            >
              <span
                aria-hidden
                className={cn("absolute inset-y-0 left-0 w-[3px]", tone.rule)}
              />

              <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 pl-1.5">
                <span className="text-[0.66rem] font-extrabold uppercase tracking-[0.07em] text-muted-foreground">
                  {card.alcoholClass}
                </span>

                <span
                  className={cn(
                    "flex items-center gap-1 rounded-[3px] px-1.5 py-0.5 text-[0.62rem] font-extrabold uppercase tracking-[0.06em]",
                    tone.chip,
                  )}
                >
                  <ArrowRight aria-hidden className="h-3 w-3" strokeWidth={2.5} />
                  {card.product}
                </span>
              </div>

              <div className="mt-2 rounded-[4px] border border-border/70 bg-muted/20 px-2 py-2">
                <p className="t-micro">General reaction</p>
                <div className="mt-0.5 overflow-x-auto text-center text-foreground">
                  <Formula>{card.general}</Formula>
                </div>
              </div>

              <div
                className={cn(
                  "mt-2 rounded-[4px] border px-2 py-2",
                  tone.example,
                )}
              >
                <p className="t-micro">Example</p>
                <div className="mt-0.5 overflow-x-auto text-center text-foreground">
                  <Formula>{card.example}</Formula>
                </div>
                <p className="mt-1 text-center text-[0.68rem] font-bold text-muted-foreground">
                  {card.exampleName}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
