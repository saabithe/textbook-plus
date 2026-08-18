import { Pi } from "lucide-react";

interface FormulaProps {
  title?: string;
  children: React.ReactNode;
}

export function Formula({ title, children }: FormulaProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-muted/30 px-6 py-5 my-8">
      {title && (
        <div className="flex items-center gap-2 mb-4">
          <Pi className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">
            {title}
          </span>
        </div>
      )}
      <div className="text-center py-3 overflow-x-auto">
        {children}
      </div>
    </div>
  );
}
