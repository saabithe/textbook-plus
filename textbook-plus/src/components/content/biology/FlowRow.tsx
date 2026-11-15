import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FlowItem {
  label: React.ReactNode;
  detail?: string;
  /** `warn` marks the initiating event or the outcome that must stand out. */
  tone?: "neutral" | "warn";
}

interface FlowRowProps {
  items: FlowItem[];
  caption?: string;
  className?: string;
}

/**
 * FlowRow — a short left-to-right sequence of labelled boxes joined by
 * directional arrows (downward arrows below `sm`). Arrows mean direction,
 * sequence or cause-and-effect; nothing else.
 */
export function FlowRow({ items, caption, className }: FlowRowProps) {
  return (
    <div className={cn("my-5", className)}>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-stretch sm:gap-1.5">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col sm:flex-1 sm:flex-row sm:items-stretch">
            <div
              className={cn(
                "min-w-0 flex-1 rounded-lg border px-3 py-2",
                item.tone === "warn"
                  ? "border-amber-500/40 bg-amber-50/60 dark:bg-amber-950/25"
                  : "border-border bg-card",
              )}
            >
              <div className="text-sm font-medium leading-snug text-foreground">{item.label}</div>
              {item.detail && (
                <div className="mt-0.5 text-xs leading-snug text-muted-foreground">{item.detail}</div>
              )}
            </div>
            {i < items.length - 1 && (
              <span
                className="flex shrink-0 items-center justify-center py-0.5 text-muted-foreground sm:w-7 sm:py-0"
                aria-hidden
              >
                <ArrowDown className="h-3.5 w-3.5 sm:hidden" />
                <ArrowRight className="hidden h-3.5 w-3.5 sm:block" />
              </span>
            )}
          </div>
        ))}
      </div>
      {caption && <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{caption}</div>}
    </div>
  );
}
