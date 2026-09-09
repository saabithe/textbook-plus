"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <Card className="my-6 gap-0 rounded-2xl border-border/60 py-4 shadow-sm">
      <CardContent className="px-5">
        {title && <span className="text-sm font-extrabold tracking-tight block mb-3">{title}</span>}
        <div className="space-y-2">
          {items.map((item, i) => {
            const isChecked = checked.has(i);
            return (
              <div
                key={i}
                onClick={() => toggle(i)}
                className="flex items-center gap-3 w-full text-left group -mx-2 rounded-xl px-2 py-1.5 cursor-pointer transition-colors hover:bg-primary/[0.06]"
              >
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={() => toggle(i)}
                  onClick={(e) => e.stopPropagation()}
                  aria-label={item.label}
                  className="h-7 w-7 rounded-lg shadow-sm group-hover:border-primary/50 [&>svg]:size-3.5"
                />
                <span className={cn("text-sm leading-relaxed",
                  isChecked ? "text-muted-foreground line-through" : "text-foreground"
                )}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
