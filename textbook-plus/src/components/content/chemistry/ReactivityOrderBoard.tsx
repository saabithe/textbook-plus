import type { ReactNode } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface ReactivityCard {
  /** Family name, e.g. "Aldehydes". */
  name: ReactNode;
  /** KaTeX general structure, e.g. R–CHO. */
  structure: string;
  /** What sits on the carbonyl carbon — bulky groups are tinted. */
  groups: Array<{ label: ReactNode; bulky?: boolean }>;
  /** One line on steric hindrance. */
  hindrance: ReactNode;
  /** Verdict chip, e.g. "More reactive". */
  verdict: ReactNode;
  /** "higher" tints the more reactive family. */
  tone: "higher" | "lower";
}

interface ReactivityOrderBoardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** KaTeX for the core-concept relation. */
  formula: string;
  /** One card per family. */
  cards: ReactivityCard[];
  /** The order as a strip, e.g. "Aldehydes > Ketones". */
  takeaway: ReactNode;
}

/**
 * ReactivityOrderBoard — the core-concept relation on its own band, the two
 * carbonyl families compared as structures with the groups sitting on the
 * carbonyl carbon counted out beneath each one (bulky R chips tinted, the
 * aldehyde's single H left quiet), then the order as a takeaway strip. The
 * steric argument is visible in the chips before the sentence is read.
 */
export function ReactivityOrderBoard({
  title,
  formula,
  cards,
  takeaway,
}: ReactivityOrderBoardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Reactivity order"}</span>
        <span className="text-[0.68rem] font-extrabold tabular-nums text-muted-foreground">
          {cards.length} FAMILIES
        </span>
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <div className="rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_30%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-3">
          <p className="t-micro">Core concept</p>
          <div className="mt-1 overflow-x-auto text-center text-foreground">
            <Formula>{formula}</Formula>
          </div>
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {cards.map((card, index) => {
            const higher = card.tone === "higher";
            const Icon = higher ? ArrowUp : ArrowDown;

            return (
              <article
                key={index}
                className={cn(
                  "flex min-w-0 flex-col rounded-md border px-3 py-3",
                  higher
                    ? "border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]"
                    : "border-border/70 bg-muted/15",
                )}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-1">
                  <p className="text-sm font-extrabold leading-snug text-foreground">
                    {card.name}
                  </p>
                  <span
                    className={cn(
                      "flex shrink-0 items-center gap-1 rounded-[3px] px-1.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.06em]",
                      higher
                        ? "bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] text-[var(--subject-chemistry)]"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    <Icon aria-hidden className="h-3 w-3" strokeWidth={2.5} />
                    {card.verdict}
                  </span>
                </div>

                <div className="mt-2 flex min-h-[3.25rem] items-center justify-center overflow-x-auto rounded-[4px] border border-border/70 bg-card px-2 py-3 text-[1.45rem] font-extrabold tracking-tight text-foreground">
                  <Formula>{card.structure}</Formula>
                </div>

                <p className="mt-2 text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                  Around the carbonyl carbon
                </p>
                <ul className="mt-1 flex flex-wrap gap-1">
                  {card.groups.map((group, groupIndex) => (
                    <li
                      key={groupIndex}
                      className={cn(
                        "flex h-7 min-w-7 items-center justify-center rounded-[3px] px-2 text-sm font-extrabold tabular-nums",
                        group.bulky
                          ? "bg-[color-mix(in_oklab,var(--subject-chemistry)_16%,transparent)] text-foreground"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      {group.label}
                    </li>
                  ))}
                </ul>

                <p className="mt-2 text-xs leading-relaxed text-foreground/85">
                  {card.hindrance}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_45%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_10%,transparent)] px-3 py-2.5">
          <span className="t-micro">Reactivity</span>
          <p className="text-[1.05rem] font-extrabold leading-none tracking-tight text-foreground">
            {takeaway}
          </p>
        </div>
      </div>
    </section>
  );
}
