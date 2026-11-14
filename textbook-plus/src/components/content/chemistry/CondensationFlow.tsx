import { type ReactNode } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CondensationFlowProps {
  /** Heading strip. */
  title?: ReactNode;
  /** What enters, written as the reaction line, e.g. ">C=O + H₂N–Z". */
  startFormula: ReactNode;
  /** Middle stage label, e.g. "Addition intermediate". */
  intermediate: ReactNode;
  /** One line under the intermediate. */
  intermediateNote?: ReactNode;
  /** The four facts that carry the reaction, set as a compact grid. */
  keyPoints: ReactNode[];
}

/**
 * CondensationFlow — the three-stage addition–elimination written across the
 * card, with the C=N bond tinted once it appears so the bond the reaction is
 * named for is the one the eye finds. The facts sit under the flow in two
 * columns, so the mechanism and its rules stay one block.
 */
export function CondensationFlow({
  title,
  startFormula,
  intermediate,
  intermediateNote,
  keyPoints,
}: CondensationFlowProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "General condensation with H₂N–Z"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          Addition → elimination
        </span>
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex flex-col sm:flex-row sm:items-stretch">
          <div className="flex min-w-0 flex-1 flex-col justify-center rounded-md border border-border/70 bg-card px-3 py-3 text-center">
            <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
              Carbonyl compound
            </p>
            <p className="mt-1.5 text-[1rem] font-extrabold leading-snug tracking-tight text-foreground">
              {startFormula}
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-center justify-center gap-0.5 px-1 py-1 sm:w-20">
            <ArrowDown
              aria-hidden
              className="h-4 w-4 text-muted-foreground sm:hidden"
              strokeWidth={2.5}
            />
            <ArrowRight
              aria-hidden
              className="hidden h-4 w-4 text-muted-foreground sm:block"
              strokeWidth={2.5}
            />
            <p className="text-center text-[0.6rem] font-extrabold uppercase leading-tight tracking-[0.06em] text-foreground/70">
              Reversible
            </p>
            <p className="text-center text-[0.6rem] leading-tight text-muted-foreground">
              acid catalysis
            </p>
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center rounded-md border border-warning/40 bg-warning/[0.06] px-3 py-3 text-center">
            <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-warning">
              Intermediate
            </p>
            <p className="mt-1.5 text-[0.9rem] font-extrabold leading-snug text-foreground">
              {intermediate}
            </p>
            {intermediateNote && (
              <p className="mt-1 text-[0.68rem] leading-snug text-muted-foreground">
                {intermediateNote}
              </p>
            )}
          </div>

          <div className="flex shrink-0 flex-col items-center justify-center gap-0.5 px-1 py-1 sm:w-20">
            <ArrowDown
              aria-hidden
              className="h-4 w-4 text-muted-foreground sm:hidden"
              strokeWidth={2.5}
            />
            <ArrowRight
              aria-hidden
              className="hidden h-4 w-4 text-muted-foreground sm:block"
              strokeWidth={2.5}
            />
            <p className="text-center text-[0.6rem] font-extrabold uppercase leading-tight tracking-[0.06em] text-foreground/70">
              − H₂O
            </p>
            <p className="text-center text-[0.6rem] leading-tight text-muted-foreground">
              rapid
            </p>
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_45%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_9%,transparent)] px-3 py-3 text-center">
            <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]">
              Product
            </p>
            <p className="mt-1.5 flex flex-wrap items-baseline justify-center gap-1 text-[1rem] font-extrabold leading-none tracking-tight text-foreground">
              <span>&gt;</span>
              <span className="rounded-[2px] bg-[color-mix(in_oklab,var(--subject-chemistry)_22%,transparent)] px-1 py-0.5 text-[var(--subject-chemistry)]">
                C=N
              </span>
              <span>–Z</span>
              <span className="text-[0.8rem] font-bold text-muted-foreground">+ H₂O</span>
            </p>
          </div>
        </div>

        <div className="mt-3 rounded-md border border-border/70 bg-muted/20 px-3 py-3">
          <p className="t-micro">Key points</p>
          <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex gap-2">
                <span
                  aria-hidden
                  className={cn(
                    "mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full",
                    "bg-[var(--subject-chemistry)]",
                  )}
                />
                <span className="min-w-0 text-[0.82rem] leading-relaxed text-foreground/90">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
