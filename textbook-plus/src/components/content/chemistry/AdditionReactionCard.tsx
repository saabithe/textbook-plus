import { type ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

interface AdditionReactionCardProps {
  /** Reaction name, e.g. "Addition of HCN". */
  title: ReactNode;
  /** Outcome chip in the header, e.g. "Cyanohydrin". */
  tag?: ReactNode;
  /** What goes in — one chip per reactant. */
  reactants: ReactNode[];
  /** Numbered mechanism steps. Omit when the source gives no mechanism. */
  mechanism?: ReactNode[];
  /** What comes out, in words. */
  product: ReactNode;
  /** KaTeX for the product equation. */
  productEquation?: string;
  /** Structure spotlight or branch diagram shown inside the product zone. */
  productExtra?: ReactNode;
  /** Facts about the product or the reaction. */
  facts?: ReactNode[];
  /** What the product is used for — the closing application strip. */
  application?: ReactNode;
}

function ZoneLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
      {children}
    </p>
  );
}

/**
 * AdditionReactionCard — one addition reaction read in a fixed order: what goes
 * in, how it happens, what comes out, then the facts and the use. The product
 * zone carries the chemistry accent, so the outcome is the block the eye lands
 * on rather than a sentence buried in prose.
 */
export function AdditionReactionCard({
  title,
  tag,
  reactants,
  mechanism,
  product,
  productEquation,
  productExtra,
  facts,
  application,
}: AdditionReactionCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-border px-4 py-3">
        <p className="text-sm font-extrabold leading-snug text-foreground">{title}</p>
        {tag && (
          <span className="shrink-0 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] px-2 py-0.5 text-[0.66rem] font-extrabold text-[var(--subject-chemistry)]">
            {tag}
          </span>
        )}
      </div>

      <div className="space-y-2 px-3 py-3 sm:px-4 sm:py-4">
        <div className="rounded-md border border-border/70 bg-card px-3 py-2.5">
          <ZoneLabel>Reactants</ZoneLabel>
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            {reactants.map((item, index) => (
              <div key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span aria-hidden className="text-sm font-bold text-muted-foreground">
                    +
                  </span>
                )}
                <span className="rounded-[3px] border border-border/70 bg-muted/35 px-2 py-1 text-[0.82rem] font-bold leading-snug text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {mechanism && mechanism.length > 0 && (
          <div className="rounded-md border border-border/70 bg-card px-3 py-2.5">
            <ZoneLabel>Mechanism</ZoneLabel>
            <ol className="mt-1.5 space-y-1.5">
              {mechanism.map((step, index) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] bg-muted text-[0.62rem] font-extrabold tabular-nums text-foreground/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 text-[0.82rem] leading-relaxed text-foreground/90">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)] px-3 py-3">
          <ZoneLabel>Product</ZoneLabel>
          <p className="mt-1 text-[1rem] font-extrabold leading-snug text-foreground">
            {product}
          </p>

          {productEquation && (
            <div className="mt-2 overflow-x-auto text-center text-foreground">
              <Formula>{productEquation}</Formula>
            </div>
          )}

          {productExtra && <div className="mt-2">{productExtra}</div>}
        </div>

        {facts && facts.length > 0 && (
          <div className="rounded-md border border-border/70 bg-muted/20 px-3 py-2.5">
            <ZoneLabel>Important facts</ZoneLabel>
            <ul className="mt-1.5 space-y-1">
              {facts.map((fact, index) => (
                <li
                  key={index}
                  className="flex gap-2 text-[0.82rem] leading-relaxed text-foreground/90"
                >
                  <Check
                    aria-hidden
                    className="mt-[0.2em] h-3 w-3 shrink-0 text-[var(--subject-chemistry)]"
                    strokeWidth={3}
                  />
                  <span className="min-w-0">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {application && (
          <div
            className={cn(
              "flex flex-wrap items-center gap-x-2 gap-y-1 rounded-md border px-3 py-2.5",
              "border-[color-mix(in_oklab,var(--subject-chemistry)_45%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_11%,transparent)]",
            )}
          >
            <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]">
              Use
            </span>
            <ArrowRight
              aria-hidden
              className="h-3.5 w-3.5 text-[var(--subject-chemistry)]"
              strokeWidth={2.5}
            />
            <span className="text-[0.85rem] font-extrabold leading-snug text-foreground">
              {application}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
