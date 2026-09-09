import { ArrowLeftRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ComparisonColumn {
  title: string;
  children: React.ReactNode;
}

interface ComparisonProps {
  columns: ComparisonColumn[];
}

export function Comparison({ columns }: ComparisonProps) {
  return (
    <Card className="my-6 gap-0 overflow-hidden rounded-2xl border border-border/60 py-0 shadow-sm">
      <div className="flex items-center gap-2.5 px-5 py-3 bg-muted/30">
        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-md shadow-fuchsia-500/25">
          <ArrowLeftRight className="h-3.5 w-3.5 text-white" />
        </span>
        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-foreground">Comparison</span>
      </div>
      <Separator />
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
    </Card>
  );
}
