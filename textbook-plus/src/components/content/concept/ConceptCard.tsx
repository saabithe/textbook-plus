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
    <Card className={cn("my-4 gap-0 border-border/60 bg-background py-0")}>
      <CardContent className="px-5 py-4">
        <div className="flex items-center gap-2 mb-2">
          {icon && <span className="text-base">{icon}</span>}
          <span className="text-sm font-semibold">{title}</span>
        </div>
        <div className="text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
