import { type ReactNode } from "react";
import { ArrowDown } from "lucide-react";

export interface GrignardBranch {
  /** What is fed in, e.g. "Formaldehyde". */
  family: ReactNode;
  /** The alcohol degree, set large, e.g. "1°". */
  degree: ReactNode;
  /** The alcohol class, e.g. "Alcohol". */
  product: ReactNode;
  /** The alcohol's name, e.g. "Primary alcohol". */
  name?: ReactNode;
}

interface GrignardBranchFlowProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The shared feed written above the three branches. */
  source: ReactNode;
  /** One branch per carbonyl family. */
  branches: GrignardBranch[];
  /** Closing reference line. */
  note?: ReactNode;
}

/**
 * GrignardBranchFlow — the carbonyl compound and RMgX enter once, then the flow
 * splits into the three families, each ending on the alcohol class it gives.
 * The 1°/2°/3° degree is set large so the classification is read before the
 * words around it.
 */
export function GrignardBranchFlow({
  title,
  source,
  branches,
  note,
}: GrignardBranchFlowProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Grignard addition"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {branches.length} outcomes
        </span>
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <div className="rounded-md border border-border/70 bg-muted/30 px-3 py-2.5 text-center">
          <p className="text-[0.82rem] font-extrabold leading-snug text-foreground">
            {source}
          </p>
        </div>

        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {branches.map((branch, index) => (
            <div key={index} className="flex min-w-0 flex-col">
              <p className="rounded-[3px] border border-border/70 bg-card px-2 py-1.5 text-center text-[0.78rem] font-extrabold leading-snug text-foreground">
                {branch.family}
              </p>

              <ArrowDown
                aria-hidden
                className="mx-auto my-1 h-3.5 w-3.5 text-muted-foreground"
                strokeWidth={2.5}
              />

              <div className="flex flex-1 flex-col items-center justify-center rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_40%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_8%,transparent)] px-2 py-2.5 text-center">
                <p className="flex items-baseline gap-1 leading-none">
                  <span className="text-[1.5rem] font-extrabold tracking-tight text-[var(--subject-chemistry)]">
                    {branch.degree}
                  </span>
                  <span className="text-[0.9rem] font-extrabold text-foreground">
                    {branch.product}
                  </span>
                </p>
                {branch.name && (
                  <p className="mt-1 text-[0.6rem] font-extrabold uppercase tracking-[0.07em] text-muted-foreground">
                    {branch.name}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {note && (
          <p className="mt-2.5 border-t border-border/70 pt-2 text-[0.72rem] leading-relaxed text-muted-foreground">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
