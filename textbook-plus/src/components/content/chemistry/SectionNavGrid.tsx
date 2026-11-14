import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionNavItem {
  /** Anchor id the item jumps to. */
  id: string;
  /** The section name, printed as the card's main line. */
  label: ReactNode;
  /** Short scope line under the label. */
  hint?: ReactNode;
}

interface SectionNavGridProps {
  /** Heading strip. */
  title?: ReactNode;
  /** One line under the heading strip. */
  lead?: ReactNode;
  items: SectionNavItem[];
  /** Fixed column count; otherwise derived from the number of items. */
  columns?: 2 | 3 | 4 | 5;
}

const COLUMN_CLASS: Record<2 | 3 | 4 | 5, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-2 lg:grid-cols-5",
};

function defaultColumns(count: number): 2 | 3 | 4 | 5 {
  if (count >= 6) return 3;
  if (count === 5) return 5;
  if (count === 4) return 4;
  return 2;
}

/**
 * SectionNavGrid — the dashboard that opens a multi-part topic: every section
 * named once, in order, as a numbered card that scrolls to its heading. The
 * number is the same one printed on the section itself, so the dashboard and
 * the page share one running count. It is a real `<nav>`, so the jump list is
 * announced as navigation rather than as a paragraph of links.
 */
export function SectionNavGrid({
  title,
  lead,
  items,
  columns,
}: SectionNavGridProps) {
  const grid = COLUMN_CLASS[columns ?? defaultColumns(items.length)];

  return (
    <nav
      aria-label={typeof title === "string" ? title : "Section navigation"}
      className="my-6 overflow-hidden rounded-lg border border-border bg-card"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Sections"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {items.length} sections
        </span>
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        {lead && (
          <p className="mb-2 text-[0.8rem] leading-relaxed text-foreground/85">{lead}</p>
        )}

        <ol className={cn("grid gap-1.5", grid)}>
          {items.map((item, index) => (
            <li key={item.id} className="min-w-0">
              <a
                href={`#${item.id}`}
                className="group flex h-full min-w-0 items-start gap-2 rounded-md border border-border/70 bg-card px-2.5 py-2 transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:border-[color-mix(in_oklab,var(--subject-chemistry)_38%,transparent)] hover:bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_13%,transparent)] text-[0.6rem] font-extrabold tabular-nums text-[var(--subject-chemistry)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.8rem] font-extrabold leading-snug text-foreground">
                    {item.label}
                  </span>
                  {item.hint && (
                    <span className="mt-0.5 block text-[0.68rem] leading-snug text-muted-foreground">
                      {item.hint}
                    </span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
