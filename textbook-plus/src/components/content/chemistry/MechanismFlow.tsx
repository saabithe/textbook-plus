import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface MechanismStep {
  /** Micro label, e.g. "Step 1". */
  step: ReactNode;
  /** What happens in the step. */
  title: ReactNode;
  /** Supporting facts, one per row. */
  points: ReactNode[];
  /** Optional KaTeX for the step. */
  equation?: string;
  /** "warning" gives the step the rate-determining wash. */
  tone?: "default" | "warning";
  /** Tag in the step header, e.g. "Rate-determining". */
  tag?: ReactNode;
}

interface MechanismFlowProps {
  /** Heading strip. */
  title?: ReactNode;
  steps: MechanismStep[];
  /** Line printed under the flow. */
  footnote?: ReactNode;
}

/**
 * MechanismFlow — a mechanism read downwards: one numbered node per step, an
 * arrow between consecutive steps, and the slow step washed in the warning
 * colour with its tag in the header. The number is the sequence; the tag is the
 * chemistry.
 */
export function MechanismFlow({ title, steps, footnote }: MechanismFlowProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
          <span className="t-micro">{title}</span>
          <span className="t-micro">Mechanism</span>
        </div>
      )}

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <ol className="space-y-0">
          {steps.map((step, index) => {
            const warning = step.tone === "warning";

            return (
              <li key={index}>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[0.72rem] font-extrabold tabular-nums",
                        warning
                          ? "border-warning/45 bg-warning/15 text-warning"
                          : "border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_12%,transparent)] text-[var(--subject-chemistry)]",
                      )}
                    >
                      {index + 1}
                    </span>
                  </div>

                  <article
                    className={cn(
                      "mb-2 min-w-0 flex-1 rounded-md border px-3 py-2.5",
                      warning
                        ? "border-warning/45 bg-warning/10"
                        : "border-border/70 bg-muted/25",
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="t-micro">{step.step}</span>

                      {step.tag && (
                        <span
                          className={cn(
                            "shrink-0 rounded-[3px] px-1.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em]",
                            warning
                              ? "bg-warning/15 text-warning"
                              : "bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] text-[var(--subject-chemistry)]",
                          )}
                        >
                          {step.tag}
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-sm font-extrabold leading-snug text-foreground">
                      {step.title}
                    </p>

                    <ul className="mt-1.5 space-y-1">
                      {step.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex gap-2 text-sm leading-relaxed text-foreground/90"
                        >
                          <span
                            aria-hidden
                            className={cn(
                              "mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full",
                              warning ? "bg-warning" : "bg-[var(--subject-chemistry)]",
                            )}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {step.equation && (
                      <div className="mt-2 overflow-x-auto rounded-md border border-border/70 bg-card px-2.5 py-2 text-center text-[0.92rem] text-foreground">
                        <Formula>{step.equation}</Formula>
                      </div>
                    )}
                  </article>
                </div>

                {index < steps.length - 1 && (
                  <div aria-hidden className="mb-2 ml-[0.8rem] flex">
                    <ArrowDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        {footnote && (
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">{footnote}</p>
        )}
      </div>
    </section>
  );
}
