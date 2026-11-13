import type { ReactNode } from "react";

export interface CarbonylFamilyCard {
  /** Family name, e.g. "Aldehyde". */
  name: ReactNode;
  /** General structure, e.g. "R–CHO". */
  structure: ReactNode;
  /** Optional one-line qualifier. */
  note?: ReactNode;
}

interface CarbonylFamilyGridProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The group drawn in the hero box. */
  formula?: ReactNode;
  /** Line above the family chips. */
  lead?: ReactNode;
  /** Every family the group defines, shown as chips. */
  families: ReactNode[];
  /** One card per family, each carrying its general structure. */
  cards: CarbonylFamilyCard[];
}

/**
 * CarbonylFamilyGrid — the carbonyl group as the hero, the families it defines
 * as chips, and then one card per family with its general structure. The hero
 * and the chips establish the group before any structure is named, so the grid
 * reads as one group branching into six, not six unrelated formulas.
 */
export function CarbonylFamilyGrid({
  title,
  formula,
  lead,
  families,
  cards,
}: CarbonylFamilyGridProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Introduction to carbonyl compounds"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {families.length} families
        </span>
      </div>

      <div className="border-b border-border/70 px-3 py-4 sm:px-4">
        <div className="rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_28%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)] px-4 py-5 text-center">
          <p className="text-[1.9rem] font-extrabold leading-none tracking-tight text-foreground">
            {formula ?? ">C=O"}
          </p>
          <p className="mt-2 text-[0.58rem] font-extrabold uppercase leading-none tracking-[0.12em] text-[var(--subject-chemistry)]">
            Carbonyl group
          </p>
        </div>

        {lead && (
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">{lead}</p>
        )}

        <ul className="mt-2 flex flex-wrap gap-1.5">
          {families.map((family, index) => (
            <li
              key={index}
              className="rounded-[3px] border border-border bg-muted/30 px-2 py-0.5 text-[0.7rem] font-bold text-foreground/85"
            >
              {family}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-3">
        {cards.map((card, index) => (
          <article
            key={index}
            className="flex min-w-0 flex-col justify-between rounded-md border border-border/70 bg-muted/15 px-3 py-2.5"
          >
            <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.1em] text-muted-foreground">
              {card.name}
            </p>
            <p className="mt-1.5 overflow-x-auto whitespace-nowrap text-lg font-extrabold leading-none tracking-tight text-foreground">
              {card.structure}
            </p>
            {card.note && (
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{card.note}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
