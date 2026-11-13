import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface PhysicalStateRow {
  /** Compound name, e.g. "Methanal". */
  compound: ReactNode;
  /** Formula printed beside the name. */
  formula?: ReactNode;
  /** State as printed, e.g. "Gas". */
  state: ReactNode;
  /** Tints the row as one of the extremes the note singles out. */
  highlight?: boolean;
}

interface PhysicalStateTableProps {
  /** Heading strip. */
  title?: ReactNode;
  /** One row per compound, in order of size. */
  rows: PhysicalStateRow[];
}

/**
 * PhysicalStateTable — the room-temperature states as a three-line ladder:
 * compound and formula on the left, the state as a chip on the right. The two
 * extremes (a gas, a volatile liquid) are tinted so the step from gas to liquid
 * to solid reads before the words are read.
 */
export function PhysicalStateTable({ title, rows }: PhysicalStateTableProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Physical state at room temperature"}</span>
        <span className="text-[0.68rem] font-extrabold tabular-nums text-muted-foreground">
          {rows.length} ROWS
        </span>
      </div>

      <ul className="divide-y divide-border/70">
        {rows.map((row, index) => (
          <li
            key={index}
            className={cn(
              "flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 px-4 py-2.5",
              row.highlight && "bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]",
            )}
          >
            <div className="flex min-w-0 flex-wrap items-baseline gap-x-2">
              <span className="text-sm font-extrabold leading-snug text-foreground">
                {row.compound}
              </span>
              {row.formula && (
                <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                  ({row.formula})
                </span>
              )}
            </div>

            <span
              className={cn(
                "shrink-0 rounded-[3px] px-1.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.06em]",
                row.highlight
                  ? "bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] text-[var(--subject-chemistry)]"
                  : "bg-muted text-muted-foreground",
              )}
            >
              {row.state}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
