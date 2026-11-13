import type { ReactNode } from "react";
import { Formula } from "@/components/content/Formula";

export interface NamedReactionCondition {
  /** The reactants that need this condition. */
  reactants: ReactNode;
  /** The condition itself. */
  condition: ReactNode;
}

export interface NamedReactionProduct {
  /** Product name. */
  name: ReactNode;
  /** One line describing the product. */
  detail?: ReactNode;
  /** Chips printed under the name, e.g. the uses of aspirin. */
  badges?: ReactNode[];
}

interface NamedReactionCardProps {
  /** Reaction name, e.g. "Esterification". */
  title: ReactNode;
  /** Chip in the header, e.g. "Acetylation". */
  tag?: ReactNode;
  /** Framing line under the header. */
  subtitle?: ReactNode;
  /** Conditions table for the reactants involved. */
  conditions?: NamedReactionCondition[];
  /** KaTeX equation for the reaction. */
  equation?: string;
  /** Caption above the equation. */
  equationLabel?: ReactNode;
  /** Supporting facts, one per row. */
  points?: ReactNode[];
  /** Distinct product band at the foot of the card. */
  product?: NamedReactionProduct;
}

/**
 * NamedReactionCard — one named reaction as a self-contained card: conditions,
 * equation, facts and a product band. Used where the reaction is the topic
 * itself (esterification, aspirin, picric acid, zinc dust) rather than one row
 * of a comparison table.
 */
export function NamedReactionCard({
  title,
  tag,
  subtitle,
  conditions,
  equation,
  equationLabel,
  points,
  product,
}: NamedReactionCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-border px-4 py-3">
        <p className="text-sm font-extrabold leading-snug text-foreground">{title}</p>
        {tag && (
          <span className="shrink-0 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] px-2 py-0.5 text-[0.68rem] font-extrabold text-[var(--subject-chemistry)]">
            {tag}
          </span>
        )}
      </div>

      <div className="space-y-3 px-3 py-3 sm:px-4 sm:py-4">
        {subtitle && (
          <p className="text-sm leading-relaxed text-foreground/85">{subtitle}</p>
        )}

        {conditions && conditions.length > 0 && (
          <div className="overflow-hidden rounded-md border border-border/70 bg-muted/25">
            <div className="border-b border-border/70 px-3 py-1.5">
              <span className="t-micro">Reaction conditions</span>
            </div>
            <div className="divide-y divide-border/70">
              {conditions.map((row, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-0.5 px-3 py-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <span className="text-sm font-bold text-foreground">{row.reactants}</span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    {row.condition}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {equation && (
          <div className="rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_25%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-3">
            <div className="overflow-x-auto text-center text-foreground">
              <Formula>{equation}</Formula>
            </div>
            {equationLabel && (
              <p className="mt-1.5 text-center text-[0.66rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                {equationLabel}
              </p>
            )}
          </div>
        )}

        {points && points.length > 0 && (
          <ul className="space-y-1.5">
            {points.map((point, index) => (
              <li key={index} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
                <span
                  aria-hidden
                  className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--subject-chemistry)]"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {product && (
          <div className="rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_9%,transparent)] px-3 py-2.5">
            <span className="t-micro">Product</span>
            <p className="mt-0.5 text-sm font-extrabold leading-snug text-foreground">
              {product.name}
            </p>
            {product.detail && (
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                {product.detail}
              </p>
            )}
            {product.badges && product.badges.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {product.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="rounded-[3px] border border-border bg-card px-2 py-0.5 text-[0.68rem] font-bold text-foreground/85"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
