import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export type StackedStepTone = "general" | "example" | "product";

export interface StackedReactionStep {
  /** Band label, e.g. "General reaction" or "Example". */
  label?: ReactNode;
  /** KaTeX for the step. */
  equation: string;
  /** The named product, printed under the equation. */
  product?: ReactNode;
  /** One line about the step. */
  note?: ReactNode;
  /** "general" is muted, "example" is tinted, "product" closes the card. */
  tone?: StackedStepTone;
}

interface StackedReactionCardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Chip in the header, e.g. "Dehydration". */
  tag?: ReactNode;
  steps: StackedReactionStep[];
  /** Closing strip, e.g. the functional group to notice. */
  footer?: ReactNode;
}

const STEP_TONE: Record<StackedStepTone, string> = {
  general: "bg-muted/15",
  example:
    "bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]",
  product:
    "bg-[color-mix(in_oklab,var(--subject-chemistry)_10%,transparent)]",
};

/**
 * StackedReactionCard — a general reaction and its worked example stacked in
 * one card, each on its own labelled band. Stacking keeps the general form
 * directly above the case that fills it in, so the substitution from R to CH₃
 * is read as a change of one line rather than two separate formulas.
 */
export function StackedReactionCard({
  title,
  tag,
  steps,
  footer,
}: StackedReactionCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Reaction"}</span>
        {tag && (
          <span className="shrink-0 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] px-1.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.06em] text-[var(--subject-chemistry)]">
            {tag}
          </span>
        )}
      </div>

      <div className="divide-y divide-border/70">
        {steps.map((step, index) => {
          const tone = step.tone ?? (index === 0 ? "general" : "example");

          return (
            <div key={index} className={cn("px-3 py-3 sm:px-4", STEP_TONE[tone])}>
              {step.label && (
                <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                  {step.label}
                </p>
              )}

              <div className="mt-1.5 overflow-x-auto rounded-md border border-border/70 bg-card px-2 py-2.5 text-center text-foreground">
                <Formula>{step.equation}</Formula>
              </div>

              {(step.product || step.note) && (
                <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  {step.product && (
                    <span className="flex items-baseline gap-1.5">
                      <ArrowRight
                        aria-hidden
                        className="h-3 w-3 shrink-0 self-center text-muted-foreground"
                        strokeWidth={2.5}
                      />
                      <span className="text-[0.82rem] font-extrabold leading-snug text-foreground">
                        {step.product}
                      </span>
                    </span>
                  )}
                  {step.note && (
                    <span className="text-[0.72rem] leading-snug text-muted-foreground">
                      {step.note}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {footer && (
        <div className="border-t border-border bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)] px-4 py-2.5 text-[0.78rem] font-semibold leading-relaxed text-foreground/90">
          {footer}
        </div>
      )}
    </section>
  );
}
