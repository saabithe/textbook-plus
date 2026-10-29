"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckItem {
  label: string;
  defaultChecked?: boolean;
}

interface ChecklistProps {
  title?: string;
  items: CheckItem[];
}

export function Checklist({ title, items }: ChecklistProps) {
  const [checked, setChecked] = useState<Set<number>>(() => {
    const init = new Set<number>();
    items.forEach((item, i) => { if (item.defaultChecked) init.add(i); });
    return init;
  });

  const toggle = (i: number) => {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className="my-6 rounded-lg border border-border bg-card">
      {title && (
        <div className="border-b border-border px-4 py-2.5 text-sm font-bold tracking-tight text-foreground">
          {title}
        </div>
      )}
      <div>
        {items.map((item, i) => {
          const isChecked = checked.has(i);
          return (
            <div
              key={i}
              onClick={() => toggle(i)}
              className="flex items-center gap-3 border-b border-border px-4 py-2.5 last:border-b-0 cursor-pointer hover:bg-foreground/[0.03]"
            >
              <span
                className={cn(
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border",
                  isChecked
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card text-transparent",
                )}
                aria-hidden
              >
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className={cn("text-base leading-relaxed", isChecked ? "text-muted-foreground line-through" : "text-foreground")}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}