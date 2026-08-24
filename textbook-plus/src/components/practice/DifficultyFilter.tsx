"use client";

import { cn } from "@/lib/utils";

type Difficulty = "all" | "easy" | "medium" | "hard";

interface DifficultyFilterProps {
  active: Difficulty;
  onChange: (difficulty: Difficulty) => void;
  subjectColor: string;
  counts: Record<Difficulty, number>;
}

const filters: { id: Difficulty; label: string }[] = [
  { id: "all", label: "All" },
  { id: "easy", label: "Easy" },
  { id: "medium", label: "Medium" },
  { id: "hard", label: "Hard" },
];

export function DifficultyFilter({
  active,
  onChange,
  subjectColor,
  counts,
}: DifficultyFilterProps) {
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {filters.map((filter) => {
        const isActive = active === filter.id;
        return (
          <button
            key={filter.id}
            onClick={() => onChange(filter.id)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 border",
              isActive
                ? "text-white border-transparent"
                : "border-border/60 bg-muted/30 text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
            style={isActive ? { backgroundColor: subjectColor } : undefined}
          >
            {filter.label}
            <span
              className={cn(
                "inline-flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-[10px] font-bold",
                isActive
                  ? "bg-white/20 text-white dark:text-background"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {counts[filter.id]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
