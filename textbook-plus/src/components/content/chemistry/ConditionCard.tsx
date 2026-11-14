import type { ReactNode } from "react";
import { Check, FlaskConical, X } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

interface ConditionCardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The catalyst that drives the reaction. */
  catalyst: { label: ReactNode; formula: string };
  /** The structural requirement the substrate must meet. */
  condition: { label: ReactNode; value: ReactNode };
  /** Whether the requirement is a presence (check) or an absence (cross). */
  conditionIcon?: "check" | "cross";
  /** One line under the two zones. */
  note?: ReactNode;
}

/**
 * ConditionCard — the two things a reaction insists on, held side by side:
 * the catalyst and the structural requirement. The requirement carries a tick
 * or a cross, so "must have α-H" and "must have no α-H" cannot be confused.
 */
export function ConditionCard({
  title,
  catalyst,
  condition,
  conditionIcon = "check",
  note,
}: ConditionCardProps) {
  const ConditionIcon = conditionIcon === "check" ? Check : X;

  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Conditions"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          Catalyst + requirement
        </span>
      </div>

      <div className="space-y-2 px-3 py-3 sm:px-4 sm:py-4">
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_30%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-2.5">
            <div className="flex items-center gap-1.5">
              <FlaskConical
                aria-hidden
                className="h-3.5 w-3.5 shrink-0 text-[var(--subject-chemistry)]"
                strokeWidth={2}
              />
              <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]">
                {catalyst.label}
              </p>
            </div>
            <div className="mt-1.5 overflow-x-auto text-center text-[1.05rem] text-foreground">
              <Formula>{catalyst.formula}</Formula>
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-center rounded-md border border-border/70 bg-muted/25 px-3 py-2.5">
            <div className="flex items-center gap-1.5">
              <ConditionIcon
                aria-hidden
                className={cn(
                  "h-3.5 w-3.5 shrink-0",
                  conditionIcon === "check" ? "text-[var(--subject-chemistry)]" : "text-warning",
                )}
                strokeWidth={3}
              />
              <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                {condition.label}
              </p>
            </div>
            <p className="mt-1 text-[0.9rem] font-extrabold leading-snug text-foreground">
              {condition.value}
            </p>
          </div>
        </div>

        {note && (
          <p className="text-[0.78rem] leading-relaxed text-muted-foreground">{note}</p>
        )}
      </div>
    </section>
  );
}
