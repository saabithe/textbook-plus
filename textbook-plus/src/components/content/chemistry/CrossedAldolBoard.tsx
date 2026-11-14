import type { ReactNode } from "react";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface CrossedCombination {
  /** Compound pair, e.g. "A–A". */
  label: ReactNode;
  /** What the pair gives, e.g. "Self product 1". */
  caption: ReactNode;
  kind: "self" | "cross";
}

export interface CrossedProduct {
  /** Card heading, e.g. "Self product 1 (A–A)". */
  title: ReactNode;
  kind: "self" | "cross";
  /** KaTeX for the condensation. */
  equation: string;
  /** The named product. */
  product: ReactNode;
}

interface CrossedAldolBoardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Core principle, one point per row. */
  principle: ReactNode[];
  /** KaTeX for the example mixture. */
  example: string;
  /** What the example asks for, e.g. "?". */
  exampleResult?: ReactNode;
  /** The counted combinations, e.g. "4 possible combinations". */
  count: ReactNode;
  combinations: CrossedCombination[];
  products: CrossedProduct[];
  /** Verification caveat, shown as a warning strip at the foot. */
  warning?: ReactNode;
}

/**
 * CrossedAldolBoard — two different carbonyls, four possible pairings. The
 * combination grid names every pairing before the four product cards work each
 * one out, and the two kinds are tinted apart so self-condensation and
 * cross-condensation are never read as the same product.
 */
export function CrossedAldolBoard({
  title,
  principle,
  example,
  exampleResult,
  count,
  combinations,
  products,
  warning,
}: CrossedAldolBoardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Crossed aldol condensation"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {products.length} products
        </span>
      </div>

      <div className="space-y-3 px-3 py-3 sm:px-4 sm:py-4">
        <ul className="space-y-1">
          {principle.map((point, index) => (
            <li
              key={index}
              className="flex gap-2 text-[0.82rem] leading-relaxed text-foreground/90"
            >
              <span
                aria-hidden
                className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--subject-chemistry)]"
              />
              <span className="min-w-0">{point}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-md border border-border/70 bg-muted/20 px-3 py-2.5">
          <p className="t-micro">Example</p>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-2 overflow-x-auto text-foreground">
            <Formula>{example}</Formula>
            {exampleResult && (
              <span className="rounded-[3px] bg-muted px-2 py-0.5 text-[0.85rem] font-extrabold text-foreground/80">
                {exampleResult}
              </span>
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]">
          <div className="flex flex-wrap items-baseline justify-between gap-2 px-3 py-2">
            <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]">
              Possible combinations
            </span>
            <span className="text-[0.9rem] font-extrabold leading-none text-foreground">
              {count}
            </span>
          </div>

          <ul className="grid grid-cols-2 gap-px border-t border-[color-mix(in_oklab,var(--subject-chemistry)_25%,transparent)] bg-border/60 sm:grid-cols-4">
            {combinations.map((combination, index) => (
              <li key={index} className="bg-card px-2 py-2 text-center">
                <p className="text-[0.85rem] font-extrabold leading-none text-foreground">
                  {combination.label}
                </p>
                <p
                  className={cn(
                    "mt-1 text-[0.6rem] font-extrabold uppercase tracking-[0.05em]",
                    combination.kind === "cross"
                      ? "text-[var(--subject-chemistry)]"
                      : "text-muted-foreground",
                  )}
                >
                  {combination.caption}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid gap-2 sm:grid-cols-2">
          {products.map((product, index) => {
            const cross = product.kind === "cross";

            return (
              <li
                key={index}
                className={cn(
                  "flex min-w-0 flex-col rounded-md border px-2.5 py-2.5",
                  cross
                    ? "border-[color-mix(in_oklab,var(--subject-chemistry)_30%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_5%,transparent)]"
                    : "border-border/70 bg-card",
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[0.78rem] font-extrabold leading-snug text-foreground">
                    <span className="mr-1.5 tabular-nums text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {product.title}
                  </p>
                  <span
                    className={cn(
                      "shrink-0 rounded-[3px] px-1.5 py-0.5 text-[0.56rem] font-extrabold uppercase tracking-[0.05em]",
                      cross
                        ? "bg-[color-mix(in_oklab,var(--subject-chemistry)_16%,transparent)] text-[var(--subject-chemistry)]"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {cross ? "Cross-condensation" : "Self-condensation"}
                  </span>
                </div>

                <div className="mt-1.5 overflow-x-auto rounded-[4px] border border-border/70 bg-card px-1.5 py-2 text-center text-foreground">
                  <Formula>{product.equation}</Formula>
                </div>

                <div className="mt-1.5 flex items-baseline gap-1.5">
                  <ArrowRight
                    aria-hidden
                    className="h-3 w-3 shrink-0 text-muted-foreground"
                    strokeWidth={2.5}
                  />
                  <p className="min-w-0 text-[0.78rem] font-extrabold leading-snug text-foreground">
                    {product.product}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        {warning && (
          <div className="flex gap-2 rounded-md border border-warning/45 bg-warning/[0.07] px-3 py-2">
            <AlertTriangle
              aria-hidden
              className="mt-[0.15em] h-3.5 w-3.5 shrink-0 text-warning"
              strokeWidth={2}
            />
            <div className="min-w-0">
              <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-warning">
                Check this entry
              </p>
              <p className="mt-0.5 text-[0.76rem] leading-relaxed text-foreground/90">
                {warning}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
