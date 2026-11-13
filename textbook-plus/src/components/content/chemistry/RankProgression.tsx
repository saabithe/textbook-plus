import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RankItem {
  /** Ranked member, e.g. "Phenols". */
  label: ReactNode;
  /** Short qualifier printed at the end of the row. */
  note?: ReactNode;
}

interface RankProgressionProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The rank order, strongest or first at index 0. */
  items: RankItem[];
  /**
   * "descending" stacks the items as a hierarchy with shortening bars;
   * "inline" prints them across one line with `>` separators.
   */
  orientation?: "descending" | "inline";
  /** Chip in the header, e.g. "10⁶×". */
  badge?: ReactNode;
  /** Line printed under the progression. */
  note?: ReactNode;
  /** What the order measures, e.g. "Acid strength". */
  axisLabel?: ReactNode;
  /**
   * Which way the order runs. "descending" prints > between inline items,
   * "ascending" prints <.
   */
  direction?: "descending" | "ascending";
  /** "tight" reduces the vertical margin when two orders sit back to back. */
  spacing?: "default" | "tight";
}

/**
 * RankProgression — an order given as a shape rather than a sentence. In
 * "descending" the first item is the largest row and each step below is shorter,
 * so the hierarchy is visible; "inline" keeps short orders (HI > HBr > HCl > HF)
 * on one line. The badge carries a magnitude that belongs to the whole order.
 */
export function RankProgression({
  title,
  items,
  orientation = "descending",
  badge,
  note,
  axisLabel,
  direction = "descending",
  spacing = "default",
}: RankProgressionProps) {
  const inline = orientation === "inline";

  return (
    <section
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-card",
        spacing === "tight" ? "my-3" : "my-6",
      )}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? axisLabel ?? "Order"}</span>
        {badge && (
          <span className="rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] px-2 py-0.5 text-[0.7rem] font-extrabold tabular-nums text-[var(--subject-chemistry)]">
            {badge}
          </span>
        )}
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        {inline ? (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="rounded-[4px] border border-border bg-muted/30 px-2.5 py-1 text-[0.95rem] font-extrabold tracking-tight text-foreground">
                  {item.label}
                </span>
                {index < items.length - 1 && (
                  <span aria-hidden className="text-base font-bold text-muted-foreground">
                    {direction === "ascending" ? "<" : ">"}
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <ol className="space-y-1">
            {items.map((item, index) => (
              <li key={index}>
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] text-[0.7rem] font-extrabold tabular-nums text-[var(--subject-chemistry)]">
                    {index + 1}
                  </span>

                  <p className="min-w-0 flex-1 text-[1.02rem] font-extrabold leading-snug tracking-tight text-foreground">
                    {item.label}
                  </p>

                  {item.note && (
                    <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                      {item.note}
                    </span>
                  )}
                </div>

                <div
                  aria-hidden
                  className="mt-1.5 h-1.5 rounded-full bg-[color-mix(in_oklab,var(--subject-chemistry)_22%,transparent)]"
                  style={{ width: `${100 - index * 22}%` }}
                />

                {index < items.length - 1 && (
                  <div className="mt-1 flex items-center gap-1.5 pl-1.5 text-muted-foreground">
                    <ChevronDown aria-hidden className="h-3.5 w-3.5" />
                    <span className="text-[0.58rem] font-extrabold uppercase tracking-[0.1em]">
                      lower
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        )}

        {note && (
          <p className={cn(inline ? "mt-3" : "mt-2", "text-sm leading-relaxed text-foreground/85")}>
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
