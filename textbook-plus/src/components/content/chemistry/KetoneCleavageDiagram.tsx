import type { ReactNode } from "react";
import { AlertTriangle, ArrowRight, Scissors } from "lucide-react";
import { Formula } from "@/components/content/Formula";

interface KetoneCleavageDiagramProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The conditions the cleavage needs, e.g. "Strong oxidising agents". */
  conditions: ReactNode[];
  /** KaTeX for the starting ketone. */
  ketone: string;
  /** One word on the arrow, e.g. "Cleavage". */
  arrowLabel?: ReactNode;
  /** KaTeX for each carboxylic acid produced. */
  products: string[];
  /** What the conditions do, one per row. */
  points?: ReactNode[];
  /** Verification caveat, shown as a warning strip at the foot. */
  warning?: ReactNode;
}

/**
 * KetoneCleavageDiagram — the ketone on the left, the C–C bond cut in the
 * middle, and the acid mixture on the right, with the harsh conditions held
 * above the reaction. The products stack as separate chips because the point is
 * that there is more than one.
 */
export function KetoneCleavageDiagram({
  title,
  conditions,
  ketone,
  arrowLabel = "Cleavage",
  products,
  points,
  warning,
}: KetoneCleavageDiagramProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Vigorous oxidation of ketones"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          C–C cleavage
        </span>
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
            Conditions
          </span>
          {conditions.map((condition, index) => (
            <span
              key={index}
              className="rounded-[3px] bg-warning/12 px-2 py-0.5 text-[0.68rem] font-extrabold text-foreground/85"
            >
              {condition}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
          <div className="flex min-w-0 flex-1 flex-col items-center justify-center rounded-md border border-border/70 bg-card px-3 py-3">
            <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
              Ketone
            </p>
            <div className="mt-1 overflow-x-auto text-[1.1rem] text-foreground">
              <Formula>{ketone}</Formula>
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-center justify-center gap-1 px-1 sm:w-24">
            <ArrowRight
              aria-hidden
              className="hidden h-4 w-4 text-muted-foreground sm:block"
              strokeWidth={2.5}
            />
            <div className="flex items-center gap-1">
              <Scissors
                aria-hidden
                className="h-3.5 w-3.5 text-[var(--subject-chemistry)]"
                strokeWidth={2}
              />
              <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.06em] text-foreground/70">
                {arrowLabel}
              </span>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)] px-3 py-2.5">
            <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]">
              {products.length} carboxylic acids
            </p>
            <ul className="mt-1 flex flex-wrap gap-1.5">
              {products.map((product, index) => (
                <li
                  key={index}
                  className="min-w-0 overflow-x-auto rounded-[3px] border border-border/70 bg-card px-2 py-1 text-foreground"
                >
                  <Formula>{product}</Formula>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {points && points.length > 0 && (
          <ul className="mt-2 space-y-1">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex gap-2 text-[0.8rem] leading-relaxed text-foreground/90"
              >
                <span
                  aria-hidden
                  className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--subject-chemistry)]"
                />
                <span className="min-w-0">{point}</span>
              </li>
            ))}
          </ul>
        )}

        {warning && (
          <div className="mt-2 flex gap-2 rounded-md border border-warning/45 bg-warning/[0.07] px-3 py-2">
            <AlertTriangle
              aria-hidden
              className="mt-[0.15em] h-3.5 w-3.5 shrink-0 text-warning"
              strokeWidth={2}
            />
            <div className="min-w-0">
              <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-warning">
                Source needs checking
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
