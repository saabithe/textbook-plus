import { ReactNode } from "react";

interface ConceptCardProps {
  title: string;
  icon?: string;
  children: ReactNode;
}

export function ConceptCard({ title, icon, children }: ConceptCardProps) {
  return (
    <div className="relative my-4 overflow-hidden rounded-2xl border border-violet-500/25 bg-gradient-to-br from-violet-500/[0.08] via-indigo-500/[0.04] to-transparent px-5 py-4 shadow-sm dark:from-violet-500/[0.12] dark:via-indigo-500/[0.07] dark:to-transparent">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-violet-500/40 via-indigo-500/20 to-transparent" />
      <div className="flex items-center gap-2.5 mb-2">
        {icon && (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-sm shadow-violet-500/30">
            <span className="text-sm leading-none">{icon}</span>
          </span>
        )}
        <span className="text-sm font-extrabold tracking-tight text-violet-900 dark:text-violet-100">
          {title}
        </span>
      </div>
      <div className="text-[0.95rem] leading-[1.75] text-foreground/85">{children}</div>
    </div>
  );
}