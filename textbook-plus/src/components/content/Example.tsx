import { Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ExampleProps {
  title?: string;
  children: React.ReactNode;
}

export function Example({ title = "Example", children }: ExampleProps) {
  return (
    <Card className={cn("my-6 gap-0 rounded-2xl border-border/60 bg-muted/30 py-0")}>
      <CardContent className="px-5 py-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-slate-500 to-slate-400 shadow-sm shadow-slate-500/25">
            <Calculator className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-sm font-extrabold tracking-widest uppercase">{title}</span>
        </div>
        <div className="text-[0.95rem] leading-[1.75] text-foreground/85">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
