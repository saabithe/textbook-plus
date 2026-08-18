import { Pi } from "lucide-react";

interface FormulaBlockProps {
  title?: string;
  content: string;
}

export function FormulaBlock({ title, content }: FormulaBlockProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-muted/30 px-5 py-4">
      {title && (
        <div className="flex items-center gap-2 mb-3">
          <Pi className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">
            {title}
          </span>
        </div>
      )}
      <div className="font-mono text-lg font-medium tracking-wide text-center py-2">
        {content}
      </div>
    </div>
  );
}
