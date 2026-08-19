import { Star } from "lucide-react";

interface KeyPointProps {
  title?: string;
  children: React.ReactNode;
}

export function KeyPoint({ title = "Key Takeaway", children }: KeyPointProps) {
  return (
    <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-5 py-4 my-6">
      <div className="flex items-center gap-2 mb-2">
        <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
        <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
          {title}
        </span>
      </div>
      <div className="text-[0.95rem] leading-[1.75] text-foreground/85">
        {children}
      </div>
    </div>
  );
}
