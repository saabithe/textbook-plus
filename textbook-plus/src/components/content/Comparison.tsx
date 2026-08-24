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
        className="grid grid-cols-1 divide-y sm:divide-y-0 sm:divide-x divide-border/40 sm:[grid-template-columns:repeat(var(--cols),minmax(0,1fr))]"
        style={{ "--cols": String(columns.length) } as React.CSSProperties}
      >
        {columns.map((col, i) => (
          <div key={i} className="px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              {col.title}
            </p>
            <div className="text-[0.95rem] leading-[1.75] text-foreground/85">
              {col.children}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
