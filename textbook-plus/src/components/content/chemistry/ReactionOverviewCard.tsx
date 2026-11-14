import type { ReactNode } from "react";
import { ArrowRight, Beaker, FlaskConical, Hexagon } from "lucide-react";

interface ReactionOverviewCardProps {
  /** Full reaction name, printed as the card's largest line. */
  name: ReactNode;
  /** Chip in the header, e.g. "Aromatic ketones". */
  tag?: ReactNode;
  /** What goes in — one row per reactant. */
  reactants: ReactNode[];
  /** The reagent or catalyst that drives the reaction. */
  catalyst: ReactNode;
  /** What comes out. */
  product: ReactNode;
}

/**
 * ReactionOverviewCard — a named reaction split into its four parts: the name
 * as a band of its own, then Reactants, Catalyst and Product as three separate
 * tiles. Nothing is written as prose, so the card can be read the way the
 * question asks it — what goes in, what is added, what comes out.
 */
export function ReactionOverviewCard({
  name,
  tag,
  reactants,
  catalyst,
  product,
}: ReactionOverviewCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)] px-4 py-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <span className="t-micro">Reaction name</span>
          {tag && (
            <span className="shrink-0 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] px-2 py-0.5 text-[0.66rem] font-extrabold text-[var(--subject-chemistry)]">
              {tag}
            </span>
          )}
        </div>
        <p className="mt-1 text-[1.05rem] font-extrabold leading-snug tracking-tight text-foreground">
          {name}
        </p>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-3 sm:p-4">
        <article className="flex min-w-0 flex-col rounded-md border border-border/70 bg-muted/15 px-3 py-3">
          <div className="flex items-center gap-1.5">
            <FlaskConical
              aria-hidden
              className="h-3.5 w-3.5 text-[var(--subject-chemistry)]"
              strokeWidth={2}
            />
            <span className="t-micro">Reactants</span>
          </div>
          <ul className="mt-2 space-y-1">
            {reactants.map((reactant, index) => (
              <li
                key={index}
                className="flex gap-1.5 text-[0.82rem] font-semibold leading-snug text-foreground"
              >
                <span
                  aria-hidden
                  className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
                />
                <span className="min-w-0">{reactant}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="flex min-w-0 flex-col rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-3">
          <div className="flex items-center gap-1.5">
            <Beaker
              aria-hidden
              className="h-3.5 w-3.5 text-[var(--subject-chemistry)]"
              strokeWidth={2}
            />
            <span className="t-micro">Catalyst</span>
          </div>
          <p className="mt-2 text-[0.86rem] font-extrabold leading-snug text-foreground">
            {catalyst}
          </p>
        </article>

        <article className="relative flex min-w-0 flex-col overflow-hidden rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_45%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_10%,transparent)] px-3 py-3">
          <div className="flex items-center gap-1.5">
            <Hexagon
              aria-hidden
              className="h-3.5 w-3.5 text-[var(--subject-chemistry)]"
              strokeWidth={2}
            />
            <span className="t-micro">Product</span>
          </div>
          <p className="mt-2 flex items-start gap-1.5 text-[0.86rem] font-extrabold leading-snug text-foreground">
            <ArrowRight
              aria-hidden
              className="mt-[0.2em] h-3.5 w-3.5 shrink-0 text-[var(--subject-chemistry)]"
              strokeWidth={2.5}
            />
            <span className="min-w-0">{product}</span>
          </p>
        </article>
      </div>
    </section>
  );
}
