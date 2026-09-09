import { Star } from "lucide-react";

interface KeyPointProps {
  title?: string;
  children: React.ReactNode;
}

export function KeyPoint({ title = "Key Takeaway", children }: KeyPointProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/[0.18] via-orange-500/[0.10] to-amber-500/[0.05] dark:from-amber-500/[0.20] dark:via-orange-500/[0.12] dark:to-transparent px-5 py-4 my-6 shadow-sm">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-amber-500/40 via-orange-500/20 to-transparent" />
      <div className="flex items-center gap-2.5 mb-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 shadow-sm shadow-amber-500/30">
          <Star className="h-4 w-4 text-white fill-white" />
        </span>
        <span className="text-sm font-extrabold tracking-widest uppercase text-amber-700 dark:text-amber-300">
          {title}
        </span>
        <span className="ml-auto text-xs font-bold tracking-[0.12em] text-amber-700/60 dark:text-amber-300/60 uppercase">Key</span>
      </div>
      <div className="text-[0.95rem] leading-[1.75] text-foreground/90">
        {children}
      </div>
    </div>
  );
}
