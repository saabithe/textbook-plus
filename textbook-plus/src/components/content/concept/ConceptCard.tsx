import type { ReactNode } from "react";

interface ConceptCardProps {
  title: string;
  icon?: string;
  children: ReactNode;
}

export function ConceptCard({ title, icon, children }: ConceptCardProps) {
  return (
    <div className="my-4 rounded-lg border border-border bg-card px-5 py-4">
      <div className="mb-2 flex items-center gap-2.5">
        {icon && (
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[3px] border border-border bg-card text-base leading-none text-muted-foreground">
            {icon}
          </span>
        )}
        <span className="t-micro text-foreground">{title}</span>
      </div>
      <div className="text-base leading-[1.75] text-foreground/85">{children}</div>
    </div>
  );
}