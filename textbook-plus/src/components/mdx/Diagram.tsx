import { GitBranch } from "lucide-react";

interface DiagramProps {
  title?: string;
  children: React.ReactNode;
}

export function Diagram({ title, children }: DiagramProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-muted/20 px-5 py-4 my-6">
      {title && (
        <div className="flex items-center gap-2 mb-3">
          <GitBranch className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">
            {title}
          </span>
        </div>
      )}
      <div className="text-sm text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
