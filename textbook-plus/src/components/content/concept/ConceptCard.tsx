import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ConceptCardProps {
  title: string;
  icon?: string;
  children: ReactNode;
}

export function ConceptCard({ title, icon, children }: ConceptCardProps) {
  return (
    <Card className={cn("my-4 gap-0 rounded-2xl border-border/60 bg-background py-0")}>
      <CardContent className="px-5 py-4">
        <div className="flex items-center gap-2 mb-2">
          {icon && <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-500/15 to-slate-500/5 text-base shadow-sm">{icon}</span>}
          <span className="text-sm font-extrabold tracking-wide">{title}</span>
        </div>
        <div className="text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
