import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface AldolStep {
  /** Step label, e.g. "Step 1 · Aldol formation". */
  label: ReactNode;
  /** KaTeX for the step. */
  equation: string;
  /** Named product, e.g. "Aldol". */
  product: ReactNode;
  /** One line about the product, e.g. "β-hydroxy aldehyde". */
  detail?: ReactNode;
  tone?: "intermediate" | "product";
}

interface AldolStepFlowProps {
  /** Reaction heading, e.g. "Aldol condensation of acetaldehyde". */
  title: ReactNode;
  steps: AldolStep[];
  /** Condition written on the connector, e.g. "Δ, −H₂O". */
  linkLabel?: ReactNode;
}

/**
 * AldolStepFlow — the two-step aldol route as one vertical flow: the addition
 * step gives the β-hydroxy product, the connector carries the dehydration
 * condition, and the second step lands on the unsaturated carbonyl. The first
 * step stays neutral and the final product carries the accent, so the
 * intermediate is visibly not the answer.
 */
export function AldolStepFlow({ title, steps, linkLabel }: AldolStepFlowProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="text-sm font-extrabold leading-snug text-foreground">{title}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {steps.length} steps
        </span>
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        {steps.map((step, index) => {
          const product = step.tone === "product";

          return (
            <div key={index}>
              <div
                className={cn(
                  "rounded-md border px-3 py-2.5",
                  product
                    ? "border-[color-mix(in_oklab,var(--subject-chemistry)_40%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)]"
                    : "border-border/70 bg-muted/20",
                )}
              >
                <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                  {step.label}
                </p>
                <div className="mt-1.5 overflow-x-auto text-center text-foreground">
                  <Formula>{step.equation}</Formula>
                </div>
                <div className="mt-1.5 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0.5">
                  <span className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                    Product
                  </span>
                  <span
                    className={cn(
                      "text-[0.85rem] font-extrabold leading-snug",
                      product ? "text-[var(--subject-chemistry)]" : "text-foreground",
                    )}
                  >
                    {step.product}
                  </span>
                  {step.detail && (
                    <span className="text-[0.7rem] leading-snug text-muted-foreground">
                      {step.detail}
                    </span>
                  )}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="flex flex-col items-center gap-0.5 py-1">
                  <ArrowDown
                    aria-hidden
                    className="h-3.5 w-3.5 text-muted-foreground"
                    strokeWidth={2.5}
                  />
                  {linkLabel && (
                    <span className="rounded-[3px] bg-muted px-1.5 py-0.5 text-[0.62rem] font-extrabold text-foreground/75">
                      {linkLabel}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
