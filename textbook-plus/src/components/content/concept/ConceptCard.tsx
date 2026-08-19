import { ReactNode } from "react";

interface ConceptCardProps {
  title: string;
  icon?: string;
  children: ReactNode;
}

export function ConceptCard({ title, icon, children }: ConceptCardProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-4">
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-base">{icon}</span>}
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <div className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
