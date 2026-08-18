import { Calculator } from "lucide-react";

interface ExampleProps {
  title?: string;
  children: React.ReactNode;
}

export function Example({ title = "Example", children }: ExampleProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted">
          <Calculator className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <div className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
