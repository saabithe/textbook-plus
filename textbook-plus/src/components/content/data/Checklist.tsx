"use client";

import { useState } from "react";
import { Check } from "lucide-react";

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
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className="space-y-2">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className="flex items-center gap-3 w-full text-left group"
          >
            <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
              checked.has(i)
                ? "bg-primary border-primary text-primary-foreground"
                : "border-border/60 bg-background group-hover:border-primary/50"
            }`}>
              {checked.has(i) && <Check className="h-3 w-3" />}
            </div>
            <span className={`text-sm leading-relaxed ${
              checked.has(i) ? "text-muted-foreground line-through" : "text-foreground"
            }`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
