import type { ReactNode } from "react";

interface BoardQuestionCardProps {
  /** Question badge, e.g. "Q1". */
  number: string;
  /** Short topic label, e.g. "Boiling point ordering". */
  tag?: ReactNode;
  children: ReactNode;
}

/**
 * BoardQuestionCard — the frame around one review or board-exam question: a
 * numbered badge and topic tag in the header, the question (and its answer)
 * in the body. Used where the answer is meant to be read, not revealed.
 */
export function BoardQuestionCard({ number, tag, children }: BoardQuestionCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-center gap-2.5 border-b border-border bg-muted/40 px-3.5 py-2.5">
        <span className="flex h-7 min-w-7 shrink-0 items-center justify-center rounded-[4px] bg-[color-mix(in_oklab,var(--subject-chemistry)_16%,transparent)] px-1.5 text-[0.7rem] font-extrabold tracking-[0.04em] text-[var(--subject-chemistry)]">
          {number}
        </span>

        {tag && <span className="t-micro">{tag}</span>}

        <span className="ml-auto shrink-0 text-[0.58rem] font-extrabold uppercase tracking-[0.1em] text-muted-foreground">
          Board question
        </span>
      </div>

      <div className="px-3.5 py-3.5 sm:px-4 sm:py-4">{children}</div>
    </section>
  );
}
