import type { ReactNode } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Formula } from "@/components/content/Formula";

export interface DisproportionationLane {
  /** KaTeX for what that one molecule becomes. */
  equation: string;
  /** The named product. */
  product: ReactNode;
  /** Which molecule takes this path, e.g. "Another aldehyde molecule". */
  molecule?: ReactNode;
}

interface DisproportionationBoardProps {
  /** Heading strip. */
  title?: ReactNode;
  oxidation: DisproportionationLane;
  reduction: DisproportionationLane;
  /** Band under the lanes, e.g. "Disproportionation reaction". */
  resultLabel?: ReactNode;
}

/**
 * DisproportionationBoard — one starting material, two fates. The oxidation lane
 * and the reduction lane leave the same "two molecules of aldehyde" band and end
 * on different products, then rejoin under the name of the overall change.
 */
export function DisproportionationBoard({
  title,
  oxidation,
  reduction,
  resultLabel = "Disproportionation reaction",
}: DisproportionationBoardProps) {
  const lanes = [
    {
      key: "oxidation",
      label: "Oxidation",
      icon: ArrowUp,
      lane: oxidation,
      chemistry: true,
    },
    {
      key: "reduction",
      label: "Reduction",
      icon: ArrowDown,
      lane: reduction,
      chemistry: false,
    },
  ];

  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Mechanism concept"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          Two molecules
        </span>
      </div>

      <div className="space-y-2 px-3 py-3 sm:px-4 sm:py-4">
        <div className="rounded-md border border-border/70 bg-muted/30 px-3 py-2 text-center">
          <p className="text-[0.82rem] font-extrabold leading-snug text-foreground">
            Two molecules of aldehyde
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {lanes.map(({ key, label, icon: Icon, lane, chemistry }) => (
            <div
              key={key}
              className={
                chemistry
                  ? "flex min-w-0 flex-col rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-2.5"
                  : "flex min-w-0 flex-col rounded-md border border-border/70 bg-muted/20 px-3 py-2.5"
              }
            >
              <div className="flex items-center gap-1.5">
                <Icon
                  aria-hidden
                  className={
                    chemistry
                      ? "h-3.5 w-3.5 shrink-0 text-[var(--subject-chemistry)]"
                      : "h-3.5 w-3.5 shrink-0 text-muted-foreground"
                  }
                  strokeWidth={2.5}
                />
                <p
                  className={
                    chemistry
                      ? "text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]"
                      : "text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground"
                  }
                >
                  {label}
                </p>
              </div>
              <p className="mt-0.5 text-[0.7rem] font-bold text-muted-foreground">
                {lane.molecule ?? "One aldehyde molecule"}
              </p>
              <div className="mt-1.5 overflow-x-auto rounded-[4px] border border-border/70 bg-card px-2 py-2 text-center text-foreground">
                <Formula>{lane.equation}</Formula>
              </div>
              <div className="mt-1.5 flex items-baseline gap-1.5">
                <span className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                  Product
                </span>
                <span className="text-[0.8rem] font-extrabold leading-snug text-foreground">
                  {lane.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-baseline justify-between gap-2 rounded-md border border-foreground/15 bg-muted/40 px-3 py-2">
          <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
            Overall
          </span>
          <p className="text-[0.85rem] font-extrabold leading-snug text-foreground">
            {resultLabel}
          </p>
        </div>
      </div>
    </section>
  );
}
