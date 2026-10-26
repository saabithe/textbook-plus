import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TopicIndexItem {
  /** Heading id on the page, e.g. "h-6-3-fossils". */
  id: string;
  /** Emoji shown in the card's icon square. */
  icon: string;
  /** Card title, normally the heading text. */
  label: string;
  /** One-line description printed under the label. */
  note?: string;
}

interface TopicIndexProps {
  items: TopicIndexItem[];
  /** Small uppercase label printed above the grid. */
  title?: string;
  /** Grid columns on wide screens. Defaults to 3. */
  columns?: 2 | 3;
}

/**
 * Section index: a grid of anchor cards that jump to headings on the same page.
 *
 * Server component — every card is a plain `<a href="#id">`, so the index works
 * with JavaScript disabled.
 */
export function TopicIndex({ items, title, columns = 3 }: TopicIndexProps) {
  if (items.length === 0) return null;

  return (
    <div className="my-8">
      {title && (
        <p className="mb-3 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
          {title}
        </p>
      )}

      <div
        className={cn(
          "grid grid-cols-1 gap-3 sm:grid-cols-2",
          columns === 3 && "lg:grid-cols-3",
        )}
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "group relative flex items-start gap-3 overflow-hidden rounded-2xl border border-border/70 bg-card p-4",
              "bg-gradient-to-br from-violet-500/[0.06] via-indigo-500/[0.03] to-transparent",
              "dark:from-violet-500/[0.10] dark:via-indigo-500/[0.05]",
              "shadow-sm transition-all duration-200",
              "hover:border-violet-500/40 hover:shadow-md dark:hover:border-violet-500/40",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            )}
          >
            <span
              aria-hidden
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-base leading-none text-white shadow-sm shadow-violet-500/30 transition-transform duration-200 group-hover:scale-105"
            >
              {item.icon}
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-sm font-extrabold tracking-tight text-foreground">
                {item.label}
              </span>
              {item.note && (
                <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                  {item.note}
                </span>
              )}
            </span>

            <ArrowRight
              aria-hidden
              strokeWidth={2}
              className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-violet-600 dark:group-hover:text-violet-400"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
