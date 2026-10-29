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

export function TopicIndex({ items, title }: TopicIndexProps) {
  if (items.length === 0) return null;

  return (
    <div className="my-8">
      {title && (
        <p className="mb-3 t-micro">{title}</p>
      )}

      <div className="border-t border-border">
        {items.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "group flex items-start gap-3 border-b border-border px-1 py-2.5 transition-colors",
              "hover:bg-foreground/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            )}
          >
            <span className="mt-0.5 w-6 shrink-0 text-center text-xs font-bold tabular-nums text-muted-foreground">
              {i + 1}
            </span>
            <span className="text-sm leading-none text-muted-foreground" aria-hidden>
              {item.icon}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-semibold tracking-tight text-foreground">
                {item.label}
              </span>
              {item.note && (
                <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                  {item.note}
                </span>
              )}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}