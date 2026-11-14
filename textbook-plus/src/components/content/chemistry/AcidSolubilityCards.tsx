import type { ReactNode } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type AcidSolubilityTone = "soluble" | "insoluble" | "aromatic";

export interface AcidSolubilityCard {
  title: ReactNode;
  /** The headline result, e.g. "Soluble in water". */
  verdict: ReactNode;
  /** Supporting facts, one per row. */
  points?: ReactNode[];
  /** The cold-water result for an aromatic acid. */
  cold?: { label: ReactNode; value: ReactNode };
  /** The hot-water result for an aromatic acid. */
  hot?: { label: ReactNode; value: ReactNode };
  tone: AcidSolubilityTone;
}

interface AcidSolubilityCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  cards: AcidSolubilityCard[];
}

const TONE = {
  soluble: {
    frame:
      "border-[color-mix(in_oklab,var(--subject-chemistry)_34%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]",
    chip: "bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] text-[var(--subject-chemistry)]",
    icon: Check,
    iconTone: "text-[var(--subject-chemistry)]",
  },
  insoluble: {
    frame: "border-border/70 bg-muted/25",
    chip: "bg-muted text-muted-foreground",
    icon: X,
    iconTone: "text-warning",
  },
  aromatic: {
    frame:
      "border-[color-mix(in_oklab,var(--subject-chemistry)_40%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_5%,transparent)]",
    chip: "bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] text-[var(--subject-chemistry)]",
    icon: Check,
    iconTone: "text-[var(--subject-chemistry)]",
  },
} as const;

/**
 * AcidSolubilityCards — the solubility story in three cards: the short-chain
 * acids that dissolve, the long-chain acids that do not, and benzoic acid with
 * its cold-water and hot-water results split into two contrasting rows. The
 * split is the point of the third card, so it is drawn as two verdicts rather
 * than written into a sentence.
 */
export function AcidSolubilityCards({
  title,
  cards,
}: AcidSolubilityCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Solubility in water"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {cards.length} cases
        </span>
      </div>

      <div className="grid gap-2 p-3 lg:grid-cols-3 sm:p-4">
        {cards.map((card, index) => {
          const tone = TONE[card.tone];

          return (
            <article
              key={index}
              className={cn("flex min-w-0 flex-col rounded-md border px-3 py-3", tone.frame)}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[0.8rem] font-extrabold leading-snug text-foreground">
                  {card.title}
                </p>
                <span
                  className={cn(
                    "shrink-0 rounded-[3px] px-1.5 py-0.5 text-[0.56rem] font-extrabold uppercase tracking-[0.07em]",
                    tone.chip,
                  )}
                >
                  {card.tone === "aromatic" ? "Aromatic" : card.tone}
                </span>
              </div>

              <p className="mt-2 text-[0.92rem] font-extrabold leading-snug text-foreground">
                {card.verdict}
              </p>

              {card.points && (
                <ul className="mt-1.5 space-y-1">
                  {card.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-1.5 text-[0.78rem] leading-snug text-foreground/85"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.42em] h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
                      />
                      <span className="min-w-0">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {card.cold && card.hot && (
                <dl className="mt-2 space-y-1">
                  <div className="flex items-center justify-between gap-2 rounded-[4px] border border-warning/30 bg-warning/[0.06] px-2 py-1.5">
                    <dt className="text-[0.72rem] font-extrabold text-foreground/80">
                      {card.cold.label}
                    </dt>
                    <dd className="flex items-center gap-1 text-[0.72rem] font-extrabold text-warning">
                      <X aria-hidden className="h-3 w-3" strokeWidth={3} />
                      {card.cold.value}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-2 rounded-[4px] border border-[color-mix(in_oklab,var(--subject-chemistry)_30%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_8%,transparent)] px-2 py-1.5">
                    <dt className="text-[0.72rem] font-extrabold text-foreground/80">
                      {card.hot.label}
                    </dt>
                    <dd className="flex items-center gap-1 text-[0.72rem] font-extrabold text-[var(--subject-chemistry)]">
                      <Check aria-hidden className="h-3 w-3" strokeWidth={3} />
                      {card.hot.value}
                    </dd>
                  </div>
                </dl>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
