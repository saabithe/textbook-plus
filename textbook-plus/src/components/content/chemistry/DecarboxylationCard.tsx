import type { ReactNode } from "react";
import { ArrowRight, Flame } from "lucide-react";
import { Formula } from "@/components/content/Formula";

interface DecarboxylationCardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The reagent set, e.g. soda lime. */
  reagent: { name: ReactNode; formula: ReactNode };
  /** The ratio, as KaTeX. */
  ratio: string;
  /** The condition, e.g. "Heating (Δ)". */
  condition: ReactNode;
  /** KaTeX for the general reaction as supplied. */
  equation: string;
  /** The worked example. */
  example: { equation: string; product: ReactNode };
}

/**
 * DecarboxylationCard — the soda-lime decarboxylation split into the four facts
 * that decide the answer: what the reagent is made of, its ratio, the condition,
 * and the hydrocarbon that leaves. The example sits under the general reaction
 * on its own band, so the loss of CO₂ is read as a transformation rather than a
 * line to copy.
 */
export function DecarboxylationCard({
  title,
  reagent,
  ratio,
  condition,
  equation,
  example,
}: DecarboxylationCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Decarboxylation"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          –CO₂
        </span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-3 sm:p-4">
        <div className="rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_32%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-2.5">
          <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
            Reagent
          </p>
          <p className="mt-1 text-[0.9rem] font-extrabold leading-snug text-foreground">
            {reagent.name}
          </p>
          <p className="mt-0.5 text-[0.8rem] font-semibold tabular-nums text-foreground/80">
            {reagent.formula}
          </p>
        </div>

        <div className="rounded-md border border-border/70 bg-muted/25 px-3 py-2.5">
          <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
            Ratio
          </p>
          <div className="mt-1.5 overflow-x-auto text-center text-foreground">
            <Formula>{ratio}</Formula>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-md border border-border/70 bg-muted/25 px-3 py-2.5">
          <Flame
            aria-hidden
            className="h-4 w-4 shrink-0 text-[var(--subject-chemistry)]"
            strokeWidth={2}
          />
          <div className="min-w-0">
            <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
              Condition
            </p>
            <p className="mt-0.5 text-[0.9rem] font-extrabold leading-snug text-foreground">
              {condition}
            </p>
          </div>
        </div>
      </div>

      <div className="px-3 pb-3 sm:px-4 sm:pb-4">
        <div className="rounded-md border border-border/70 bg-muted/15 px-3 py-2.5">
          <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
            General reaction as supplied
          </p>
          <div className="mt-1.5 overflow-x-auto rounded-[4px] border border-border/70 bg-card px-2 py-2.5 text-center text-foreground">
            <Formula>{equation}</Formula>
          </div>
        </div>

        <div className="mt-2 rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_30%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-2.5">
          <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
            Example
          </p>
          <div className="mt-1.5 overflow-x-auto rounded-[4px] border border-border/70 bg-card px-2 py-2.5 text-center text-foreground">
            <Formula>{example.equation}</Formula>
          </div>
          <div className="mt-1.5 flex items-baseline gap-1.5">
            <ArrowRight
              aria-hidden
              className="h-3 w-3 shrink-0 self-center text-muted-foreground"
              strokeWidth={2.5}
            />
            <span className="text-[0.58rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
              Product
            </span>
            <span className="text-[0.86rem] font-extrabold text-foreground">
              {example.product}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
