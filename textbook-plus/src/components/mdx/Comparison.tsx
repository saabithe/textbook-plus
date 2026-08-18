import { ArrowLeftRight } from "lucide-react";

interface ComparisonProps {
  leftTitle?: string;
  rightTitle?: string;
  left: React.ReactNode;
  right: React.ReactNode;
}

export function Comparison({
  leftTitle = "Option A",
  rightTitle = "Option B",
  left,
  right,
}: ComparisonProps) {
  return (
    <div className="rounded-xl border border-border/60 overflow-hidden my-6">
      <div className="flex items-center gap-2 px-5 py-3 bg-muted/30 border-b border-border/40">
        <ArrowLeftRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">Comparison</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
        <div className="px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            {leftTitle}
          </p>
          <div className="text-sm leading-relaxed text-muted-foreground">{left}</div>
        </div>
        <div className="px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            {rightTitle}
          </p>
          <div className="text-sm leading-relaxed text-muted-foreground">{right}</div>
        </div>
      </div>
    </div>
  );
}
