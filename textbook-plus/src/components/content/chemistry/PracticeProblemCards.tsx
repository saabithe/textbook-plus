import type { ReactNode } from "react";
import { Formula } from "@/components/content/Formula";

export interface PracticeProblem {
  /** Stem printed beside the problem number, if the note carries one. */
  stem?: ReactNode;
  /** KaTeX structure the pupil has to name. */
  structure?: string;
  /** Structure given as text or a drawing instead of a formula. */
  structureNode?: ReactNode;
  /** The supplied name. */
  answer?: ReactNode;
  /** Extra line under the answer, e.g. a common name. */
  answerNote?: ReactNode;
  /** Caution band printed under the answer. */
  flag?: ReactNode;
}

interface PracticeProblemCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** One card per problem, numbered in order. */
  problems: PracticeProblem[];
  /** Micro label above the structure panel. */
  structureLabel?: ReactNode;
  /** Micro label above the answer panel. */
  answerLabel?: ReactNode;
}

/**
 * PracticeProblemCards — one numbered card per problem with a fixed order:
 * the structure, then the name it should produce. Structures sit in their own
 * scrollable panel so every card's naming panel starts at the same height
 * whether the chain is short or long.
 */
export function PracticeProblemCards({
  title,
  problems,
  structureLabel,
  answerLabel,
}: PracticeProblemCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Naming practice"}</span>
        <span className="text-[0.68rem] font-extrabold tabular-nums text-muted-foreground">
          {problems.length} PROBLEMS
        </span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {problems.map((problem, index) => (
          <article
            key={index}
            className="flex min-w-0 flex-col rounded-md border border-border/70 bg-muted/15 py-2.5"
          >
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 px-3">
              <span className="text-[0.56rem] font-extrabold uppercase tracking-[0.1em] text-[var(--subject-chemistry)]">
                Problem {index + 1}
              </span>
              {problem.stem && (
                <span className="text-xs leading-snug text-muted-foreground">{problem.stem}</span>
              )}
            </div>

            <div className="mt-1.5 px-3">
              <p className="t-micro">{structureLabel ?? "Given structure"}</p>
              <div className="mt-1 overflow-x-auto rounded-[4px] border border-border/70 bg-card px-2 py-2 text-center text-foreground">
                {problem.structure ? (
                  <Formula>{problem.structure}</Formula>
                ) : (
                  problem.structureNode
                )}
              </div>
            </div>

            {problem.answer && (
              <div className="mt-2 px-3">
                <div className="rounded-[4px] border border-[color-mix(in_oklab,var(--subject-chemistry)_28%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)] px-2.5 py-2">
                  <p className="t-micro">{answerLabel ?? "IUPAC name"}</p>
                  <p className="mt-0.5 overflow-x-auto text-sm font-extrabold leading-snug text-foreground">
                    {problem.answer}
                  </p>
                </div>
              </div>
            )}

            {problem.answerNote && (
              <p className="mt-1.5 px-3 text-xs leading-relaxed text-muted-foreground">
                {problem.answerNote}
              </p>
            )}

            {problem.flag && (
              <p className="mx-3 mt-2 rounded-[4px] border border-warning/35 bg-warning/5 px-2 py-1.5 text-xs leading-relaxed text-foreground/85">
                <span className="font-extrabold uppercase tracking-[0.06em] text-warning">
                  Check the name
                </span>{" "}
                {problem.flag}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
