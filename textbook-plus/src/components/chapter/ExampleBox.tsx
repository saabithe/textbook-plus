import { Calculator } from "lucide-react";

interface ExampleBoxProps {
  title?: string;
  content: string;
}

export function ExampleBox({ title = "Example", content }: ExampleBoxProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted">
          <Calculator className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
        {content}
      </div>
    </div>
  );
}
