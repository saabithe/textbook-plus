import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FactCardProps {
  title?: string;
  definition: string;
  icon?: string;
}

export function FactCard({ title, definition, icon }: FactCardProps) {
  return (
    <Card className={cn("my-6 gap-0 rounded-2xl border-border/60 bg-muted/30 py-0")}>
      <CardContent className="px-5 py-4">
        <div className="flex items-start gap-3">
          {icon && <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-500/20 to-slate-500/5 text-lg shadow-sm mt-0.5">{icon}</span>}
          <div>
            {title && <span className="text-sm font-extrabold tracking-wide block mb-1">{title}</span>}
            <p className="text-sm leading-relaxed text-muted-foreground">{definition}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
