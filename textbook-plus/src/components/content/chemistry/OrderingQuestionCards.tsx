import type { ReactNode } from "react";

export interface OrderingGiven {
  /** Label printed in the gutter, e.g. "(a)". */
  label: ReactNode;
  /** Structure or name of the compound. */
  compound: ReactNode;
  /** Functional class, printed as a chip. */
  family?: ReactNode;
}

export interface OrderingQuestion {
  /** Card label, e.g. "Ordering 1". */
  label?: ReactNode;
  /** Question stem, e.g. "Arrange in increasing order of boiling point". */
  prompt?: ReactNode;
  /** The compounds that have to be ordered. */
  given?: OrderingGiven[];
  /** The order that answers the question. */
  answer: ReactNode;
  /** Second line under the answer, e.g. the class-level order. */
  answerNote?: ReactNode;
}

interface OrderingQuestionCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** One card per question. */
  questions: OrderingQuestion[];
}

/**
 * OrderingQuestionCards — an ordering question given as a card: the compounds
 * with their labels and classes, then the answer printed as the card's largest
 * line. Keeping the labels means the answer reads (a) < (c) < (d) < (b)
 * against the same letters the question uses.
 */
export function OrderingQuestionCards({ title, questions }: OrderingQuestionCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Ordering questions"}</span>
        <span className="text-[0.68rem] font-extrabold tabular-nums text-muted-foreground">
          {questions.length} CARDS
        </span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {questions.map((question, index) => (
          <article
            key={index}
            className="flex min-w-0 flex-col rounded-md border border-border/70 bg-muted/15 px-3 py-3"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
              <span className="text-[0.56rem] font-extrabold uppercase tracking-[0.1em] text-[var(--subject-chemistry)]">
                {question.label ?? `Question ${index + 1}`}
              </span>
              {question.prompt && (
                <span className="text-xs font-semibold leading-snug text-muted-foreground">
                  {question.prompt}
                </span>
              )}
            </div>

            {question.given && question.given.length > 0 && (
              <ul className="mt-2 divide-y divide-border/60 rounded-[4px] border border-border/70 bg-card">
                {question.given.map((given, givenIndex) => (
                  <li
                    key={givenIndex}
                    className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5 px-2 py-1.5"
                  >
                    <div className="flex min-w-0 items-baseline gap-1.5">
                      <span className="shrink-0 text-[0.62rem] font-extrabold tabular-nums text-muted-foreground">
                        {given.label}
                      </span>
                      <span className="min-w-0 text-xs font-semibold tabular-nums leading-snug text-foreground">
                        {given.compound}
                      </span>
                    </div>

                    {given.family && (
                      <span className="shrink-0 rounded-[2px] bg-muted px-1.5 py-0.5 text-[0.54rem] font-extrabold uppercase tracking-[0.06em] text-muted-foreground">
                        {given.family}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-2 rounded-[4px] border border-[color-mix(in_oklab,var(--subject-chemistry)_28%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)] px-2.5 py-2">
              <p className="t-micro">Increasing order</p>
              <p className="mt-0.5 overflow-x-auto text-[0.98rem] font-extrabold leading-snug tracking-tight text-foreground">
                {question.answer}
              </p>
              {question.answerNote && (
                <p className="mt-0.5 text-[0.66rem] font-semibold leading-snug text-muted-foreground">
                  {question.answerNote}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
