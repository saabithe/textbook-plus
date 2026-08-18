import { ArrowLeftRight } from "lucide-react";

interface ComparisonColumn {
  title: string;
  children: React.ReactNode;
}

interface ComparisonProps {
  columns: ComparisonColumn[];
}

export function Comparison({ columns }: ComparisonProps) {
  return (
    <div className="rounded-xl border border-border/60 overflow-hidden my-6">
      <div className="flex items-center gap-2 px-5 py-3 bg-muted/30 border-b border-border/40">
        <ArrowLeftRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">Comparison</span>
      </div>
      <div
        className="grid divide-y sm:divide-y-0 sm:divide-x divide-border/40"
        style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
      >
        {columns.map((col, i) => (
          <div key={i} className="px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              {col.title}
            </p>
            <div className="text-sm leading-relaxed text-muted-foreground">
              {col.children}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
