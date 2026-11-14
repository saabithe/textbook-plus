import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type DnpColour = "yellow" | "orange" | "red";

const SWATCH: Record<DnpColour, { dot: string; label: string }> = {
  yellow: { dot: "bg-yellow-400", label: "Yellow" },
  orange: { dot: "bg-orange-500", label: "Orange" },
  red: { dot: "bg-red-500", label: "Red" },
};

interface DnpIdentificationCardProps {
  /** Compound name, e.g. "2,4-Dinitrophenylhydrazone". */
  title: ReactNode;
  /** The reagent that makes it. */
  reagent: ReactNode;
  /** The product name as reported. */
  product: ReactNode;
  /** Every colour the solid can take. */
  colours: DnpColour[];
}

/**
 * DnpIdentificationCard — the 2,4-DNP test reduced to its identification facts:
 * reagent, product, and the three solid colours the derivative can show. The
 * colours are set as swatches so the yellow/orange/red answer is recognised at a
 * glance instead of read out of a sentence.
 */
export function DnpIdentificationCard({
  title,
  reagent,
  product,
  colours,
}: DnpIdentificationCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-[color-mix(in_oklab,var(--subject-chemistry)_45%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[color-mix(in_oklab,var(--subject-chemistry)_30%,transparent)] px-4 py-2.5">
        <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]">
          Identification
        </span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {colours.length} solid colours
        </span>
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <p className="text-sm font-extrabold leading-snug text-foreground">{title}</p>

        <div className="mt-2 grid gap-px overflow-hidden rounded-md border border-border/70 bg-border/70 sm:grid-cols-2">
          <div className="bg-card px-3 py-2">
            <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
              Reagent
            </p>
            <p className="mt-0.5 text-[0.82rem] font-bold leading-snug text-foreground">
              {reagent}
            </p>
          </div>
          <div className="bg-card px-3 py-2">
            <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
              Product
            </p>
            <p className="mt-0.5 text-[0.82rem] font-bold leading-snug text-foreground">
              {product}
            </p>
          </div>
        </div>

        <div className="mt-2.5">
          <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
            Physical appearance
          </p>
          <ul className="mt-1.5 flex flex-wrap gap-1.5">
            {colours.map((colour) => {
              const swatch = SWATCH[colour];

              return (
                <li
                  key={colour}
                  className="flex items-center gap-1.5 rounded-[3px] border border-border/70 bg-card px-2 py-1"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "h-3 w-3 shrink-0 rounded-full ring-1 ring-inset ring-black/15",
                      swatch.dot,
                    )}
                  />
                  <span className="text-[0.78rem] font-extrabold leading-none text-foreground">
                    {swatch.label}
                  </span>
                </li>
              );
            })}
            <li className="flex items-center rounded-[3px] bg-muted px-2 py-1 text-[0.6rem] font-extrabold uppercase tracking-[0.07em] text-muted-foreground">
              solid
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
