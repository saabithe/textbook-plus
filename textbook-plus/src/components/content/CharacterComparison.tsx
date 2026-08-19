import { ArrowLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CharacterComparisonRow {
  label: string;
  values: React.ReactNode[];
}

interface CharacterComparisonProps {
  characters: string[];
  rows: CharacterComparisonRow[];
  className?: string;
}

export function CharacterComparison({ characters, rows, className }: CharacterComparisonProps) {
  return (
    <div className={cn("rounded-2xl border border-border/50 bg-card overflow-hidden my-6", className)}>
      {/* Header */}
      <div className="flex items-center gap-2 px-6 py-3 bg-muted/40 border-b border-border/40">
        <ArrowLeftRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-semibold text-foreground">Character Comparison</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-[0.95rem]">
          <thead>
            <tr className="border-b border-border/40">
              <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground w-1/4">
                Aspect
              </th>
              {characters.map((name) => (
                <th
                  key={name}
                  className="text-left px-6 py-3 text-sm font-bold text-foreground"
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={cn(
                  "border-b border-border/30 last:border-b-0",
                  i % 2 === 0 ? "bg-card" : "bg-muted/10"
                )}
              >
                <td className="px-6 py-3.5 text-sm font-semibold text-foreground/70 whitespace-nowrap align-top">
                  {row.label}
                </td>
                {row.values.map((val, j) => (
                  <td key={j} className="px-6 py-3.5 text-foreground/85 leading-[1.75] align-top">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
