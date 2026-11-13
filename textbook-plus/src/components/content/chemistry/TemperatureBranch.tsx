import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface TemperatureBranch {
  /** The temperature printed as the branch's largest element, e.g. "413 K". */
  temperature: ReactNode;
  /** What that temperature produces, e.g. "Ether formation". */
  title: ReactNode;
  /** KaTeX equation for the branch. */
  equation: string;
  /** Named product under the equation, e.g. "Diethyl ether (ethoxyethane)". */
  product?: ReactNode;
  /** Mechanism or one-line qualifier. */
  note?: ReactNode;
  /** "warning" tints a branch that competes with the wanted product. */
  tone?: "default" | "warning";
}

interface TemperatureBranchProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The mixture that is heated, e.g. "Ethanol + concentrated H₂SO₄". */
  mixture: ReactNode;
  /** Chip naming the shared reagent, e.g. "conc. H₂SO₄". */
  reagent?: ReactNode;
  /** One card per temperature. */
  branches: TemperatureBranch[];
}

/**
 * TemperatureBranch — one reacting mixture split by temperature. The mixture
 * sits above a stem that forks into one card per temperature, so the condition
 * — not the reagent — is visibly the variable. Each branch keeps the same
 * rhythm: temperature, what forms, the equation, then the named product.
 */
export function TemperatureBranch({ title, mixture, reagent, branches }: TemperatureBranchProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Temperature dependence"}</span>
        {reagent && (
          <span className="rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] px-2 py-0.5 text-[0.68rem] font-extrabold text-[var(--subject-chemistry)]">
            {reagent}
          </span>
        )}
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <div className="rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_28%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)] px-3 py-2.5 text-center">
          <p className="text-sm font-extrabold leading-snug text-foreground">{mixture}</p>
        </div>

        <div aria-hidden className="mx-auto h-4 w-px bg-border" />

        <div className="grid gap-2 sm:grid-cols-2">
          {branches.map((branch, index) => {
            const warning = branch.tone === "warning";

            return (
              <article
                key={index}
                className={cn(
                  "flex min-w-0 flex-col rounded-md border px-3 py-3",
                  warning
                    ? "border-warning/35 bg-warning/5"
                    : "border-border/70 bg-muted/20",
                )}
              >
                <div className="flex items-baseline gap-2">
                  <ArrowDown
                    aria-hidden
                    className={cn(
                      "h-3.5 w-3.5 shrink-0 self-center",
                      warning ? "text-warning" : "text-[var(--subject-chemistry)]",
                    )}
                  />
                  <p className="text-xl font-extrabold leading-none tracking-tight tabular-nums text-foreground">
                    {branch.temperature}
                  </p>
                </div>

                <p
                  className={cn(
                    "mt-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.08em]",
                    warning ? "text-warning" : "text-muted-foreground",
                  )}
                >
                  {branch.title}
                </p>

                <div className="mt-1.5 overflow-hidden rounded-[4px] border border-border/70 bg-card px-2 py-2">
                  <div className="overflow-x-auto text-center text-foreground">
                    <Formula>{branch.equation}</Formula>
                  </div>
                </div>

                {branch.product && (
                  <p className="mt-1.5 text-sm font-extrabold leading-snug text-foreground">
                    {branch.product}
                  </p>
                )}

                {branch.note && (
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{branch.note}</p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
