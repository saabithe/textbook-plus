"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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

/**
 * A filter, not a tab strip: ToggleGroup keeps `aria-pressed` semantics.
 * Items are hairline, 3px radius, 32px tall; the active item is ink text
 * with a 2px ink underline — no fill, no pill, no subject-colour swatch.
 */
export function DifficultyFilter({ active, onChange, counts }: DifficultyFilterProps) {
  return (
    <ToggleGroup
      spacing={2}
      value={[active]}
      onValueChange={(v) => {
        const next = v[v.length - 1] ?? v[0];
        if (next) onChange(next as Difficulty);
      }}
      className="flex-wrap"
      aria-label="Filter questions by difficulty"
    >
      {filters.map((filter) => (
        <ToggleGroupItem
          key={filter.id}
          value={filter.id}
          aria-label={`Show ${filter.label} questions`}
          className="relative h-8 min-w-8 gap-1.5 rounded-[3px]! border! border-border! bg-transparent! px-2.5 text-[13px] font-medium text-muted-foreground transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-foreground/[0.03]! hover:text-foreground data-[pressed]:bg-transparent! data-[pressed]:text-foreground after:absolute after:inset-x-2 after:bottom-0 after:h-[2px] after:bg-foreground after:opacity-0 after:transition-opacity after:duration-[120ms] after:ease-[var(--ease-blueprint)] data-[pressed]:after:opacity-100"
        >
          {filter.label}
          <span className="text-[11px] font-medium tabular-nums text-muted-foreground">
            {counts[filter.id]}
          </span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
