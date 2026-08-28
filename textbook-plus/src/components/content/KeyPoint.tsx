import { Star } from "lucide-react";

interface KeyPointProps {
  title?: string;
  children: React.ReactNode;
}

export function KeyPoint({ title = "Key Takeaway", children }: KeyPointProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/[0.12] via-orange-500/[0.06] to-amber-500/[0.03] dark:from-amber-500/[0.15] dark:via-orange-500/[0.08] dark:to-transparent px-5 py-4 my-6 shadow-sm">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-amber-500/40 via-orange-500/20 to-transparent" />
      <div className="flex items-center gap-2.5 mb-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/20 dark:bg-amber-500/25 ring-1 ring-amber-500/20">
          <Star className="h-4 w-4 text-amber-600 dark:text-amber-400 fill-amber-500" />
        </span>
        <span className="text-sm font-semibold tracking-tight text-amber-700 dark:text-amber-300">
          {title}
        </span>
        <span className="ml-auto text-[10px] font-bold tracking-[0.12em] text-amber-700/60 dark:text-amber-300/60 uppercase">Key</span>
      </div>
      <div className="text-[0.95rem] leading-[1.75] text-foreground/90">
        {children}
      </div>
    </div>
  );
}
