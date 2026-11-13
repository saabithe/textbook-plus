import type { ReactNode } from "react";
import { Wind } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Denaturant {
  /** Additive name, e.g. "Copper sulfate". */
  name: ReactNode;
  /** Its formula, e.g. "CuSO₄". */
  formula?: ReactNode;
  /** What it does to the alcohol, e.g. "Blue colour". */
  effect: ReactNode;
  /**
   * Which sense the additive works on: "colour" draws a blue swatch,
   * "odour" draws the smell mark.
   */
  tone: "colour" | "odour";
}

interface DenaturationCardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Chip in the header. */
  tag?: ReactNode;
  /** What denaturation is. */
  definition: ReactNode;
  /** The additives that denature the alcohol. */
  additives: Denaturant[];
}

/**
 * DenaturationCard — the definition of denaturation followed by one tile per
 * additive. Each tile carries its own mark — a blue swatch for the dye, the
 * smell lines for pyridine — so the reason for adding it is visible before the
 * words are read.
 */
export function DenaturationCard({
  title,
  tag,
  definition,
  additives,
}: DenaturationCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Denaturation"}</span>

        {tag && (
          <span className="rounded-[3px] bg-warning/15 px-2 py-0.5 text-[0.68rem] font-extrabold text-warning">
            {tag}
          </span>
        )}
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <p className="border-l-2 border-[color-mix(in_oklab,var(--subject-chemistry)_45%,transparent)] pl-3 text-sm font-semibold leading-relaxed text-foreground">
          {definition}
        </p>

        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {additives.map((additive, index) => (
            <article
              key={index}
              className="flex items-start gap-2.5 rounded-md border border-border/70 bg-muted/25 px-3 py-2.5"
            >
              <span
                aria-hidden
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px]",
                  additive.tone === "colour"
                    ? "bg-[#1d57b8] ring-1 ring-inset ring-white/25"
                    : "bg-warning/15 text-warning",
                )}
              >
                {additive.tone === "odour" && (
                  <Wind className="h-4 w-4" strokeWidth={2.2} />
                )}
              </span>

              <div className="min-w-0">
                <p className="text-sm font-extrabold leading-snug text-foreground">
                  {additive.name}
                  {additive.formula && (
                    <span className="ml-1.5 text-[0.78rem] font-semibold text-muted-foreground">
                      {additive.formula}
                    </span>
                  )}
                </p>

                <span
                  className={cn(
                    "mt-1 inline-block rounded-[3px] px-1.5 py-0.5 text-[0.62rem] font-extrabold uppercase tracking-[0.06em]",
                    additive.tone === "colour"
                      ? "bg-[#1d57b8]/12 text-[#1d57b8] dark:text-[#7fb0f5]"
                      : "bg-warning/15 text-warning",
                  )}
                >
                  {additive.effect}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
