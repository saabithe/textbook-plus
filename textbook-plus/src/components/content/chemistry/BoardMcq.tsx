import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface BoardMcqOption {
  label: string;
  content: ReactNode;
  correct?: boolean;
}

interface BoardMcqProps {
  question: ReactNode;
  options: BoardMcqOption[];
}

/**
 * BoardMcq — one labelled question with its options as rows. The correct row
 * carries the emerald panel and a check; nothing is hidden.
 */
export function BoardMcq({ question, options }: BoardMcqProps) {
  return (
    <div>
      <p className="text-sm font-semibold leading-relaxed text-foreground">{question}</p>

      <div className="mt-3 grid gap-2">
        {options.map((option) => (
          <div
            key={option.label}
            className={cn(
              "flex items-center gap-2.5 rounded-md border px-3 py-2",
              option.correct
                ? "border-ok/40 bg-ok/10"
                : "border-border bg-card",
            )}
          >
            <span
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-[3px] border text-xs font-bold",
                option.correct
                  ? "border-ok/40 bg-ok/15 text-ok"
                  : "border-border bg-muted text-muted-foreground",
              )}
            >
              {option.label}
            </span>
            <span className="min-w-0 flex-1 text-sm font-semibold text-foreground">
              {option.content}
            </span>
            {option.correct && (
              <span className="flex shrink-0 items-center gap-1 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-ok">
                <Check aria-hidden className="h-3.5 w-3.5" />
                Correct
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
