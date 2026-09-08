"use client";

import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";

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
    <ToggleGroup
      variant="outline"
      spacing={2}
      value={[active]}
      onValueChange={(v) => {
        const next = v[v.length - 1] ?? v[0];
        if (next) onChange(next as Difficulty);
      }}
      className="flex-wrap"
      aria-label="Filter questions by difficulty"
    >
      {filters.map((filter) => {
        const isActive = active === filter.id;
        return (
          <ToggleGroupItem
            key={filter.id}
            value={filter.id}
            aria-label={`Show ${filter.label} questions`}
            className={cn(
              "gap-1.5 px-3 py-2",
              isActive && "border-transparent text-white hover:bg-transparent hover:text-white"
            )}
            style={isActive ? { backgroundColor: subjectColor } : undefined}
          >
            {filter.label}
            <Badge
              variant="secondary"
              className={cn(
                "h-5 min-w-5 px-1 text-[10px]",
                isActive
                  ? "bg-white/20 text-white dark:text-background"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {counts[filter.id]}
            </Badge>
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
