/*
 * ProblemSolvingSection / ProblemSolvingCard — a tinted, self-contained block
 * for "Problem Type → Identification → Method → Worked Example" study notes.
 * Purely presentational: no client directive, no hooks, no external libraries.
 */

import type { ReactNode } from "react";

/**
 * Tinted wrapper that lifts the problem-solving run out of the chapter body.
 * Cards are authored as children and stack in a single vertical column.
 */
export function ProblemSolvingSection({ children }: { children: ReactNode }) {
  return (
    <section className="my-6 rounded-2xl border-y border-border/60 bg-muted/25 px-4 py-5 sm:px-6 sm:py-6">
      <p className="t-micro mb-4">
        {"Problem-Solving: Types, Methods & Examples"}
      </p>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

interface ProblemSolvingCardProps {
  /** Optional ordinal, printed as a `Type N` badge beside the title. */
  number?: number;
  /** Name of the problem type. */
  title: string;
  /** How to recognise the type, or the condition that characterises it. */
  identification?: ReactNode;
  /** The procedure to apply. */
  method?: ReactNode;
  /** Highlighted result, printed in the accent-tinted closing strip. */
  answer?: ReactNode;
  /** The worked example itself. */
  children: ReactNode;
}

/**
 * One numbered problem type. The label order is fixed: Problem Type,
 * Identification / Condition, Method, Worked Example, then Final Answer.
 */
export function ProblemSolvingCard({
  number,
  title,
  identification,
  method,
  answer,
  children,
}: ProblemSolvingCardProps) {
  return (
    <article className="rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="space-y-3 p-4 sm:p-5">
        <div>
          <p className="t-micro mb-1">Problem Type</p>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            {number !== undefined && (
              <span className="rounded-lg border border-[color-mix(in_oklab,var(--subject-mathematics)_30%,transparent)] bg-[color-mix(in_oklab,var(--subject-mathematics)_7%,transparent)] px-2 py-0.5 text-[0.68rem] font-extrabold uppercase tracking-wider text-[var(--subject-mathematics)]">
                Type {number}
              </span>
            )}
            <span className="text-sm font-extrabold tracking-tight text-foreground">
              {title}
            </span>
          </div>
        </div>

        {identification !== undefined && (
          <div>
            <p className="t-micro mb-1">Identification / Condition</p>
            <div className="text-[0.95rem] leading-[1.7] text-foreground/85">
              {identification}
            </div>
          </div>
        )}

        {method !== undefined && (
          <div>
            <p className="t-micro mb-1">Method</p>
            <div className="text-[0.95rem] leading-[1.7] text-foreground/85">
              {method}
            </div>
          </div>
        )}

        <div>
          <p className="t-micro mb-1">Worked Example</p>
          <div className="min-w-0 text-[0.95rem] leading-[1.7] text-foreground/85">
            {children}
          </div>
        </div>
      </div>

      {answer !== undefined && (
        <div className="border-t border-border/60 px-4 py-3 sm:px-5">
          <div className="rounded-xl border border-[color-mix(in_oklab,var(--subject-mathematics)_30%,transparent)] bg-[color-mix(in_oklab,var(--subject-mathematics)_7%,transparent)] px-3 py-2.5">
            <p className="t-micro">FINAL ANSWER</p>
            <div className="mt-1 overflow-x-auto text-sm font-extrabold leading-snug text-foreground">
              {answer}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
