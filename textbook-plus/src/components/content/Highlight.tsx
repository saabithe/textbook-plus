import { cn } from "@/lib/utils";

type HighlightColor = "yellow" | "blue" | "pink" | "green" | "orange";

interface HighlightProps {
  color?: HighlightColor;
  className?: string;
  children: React.ReactNode;
}

const colorClasses: Record<HighlightColor, string> = {
  yellow: "bg-yellow-200/70 dark:bg-yellow-300/25",
  blue: "bg-sky-200/70 dark:bg-sky-300/25",
  pink: "bg-pink-200/70 dark:bg-pink-300/25",
  green: "bg-emerald-200/70 dark:bg-emerald-300/25",
  orange: "bg-orange-200/70 dark:bg-orange-300/25",
};

export function Highlight({ color = "yellow", className, children }: HighlightProps) {
  return (
    <mark className={cn("px-0.5 rounded-[2px] font-semibold text-inherit", colorClasses[color], className)}>
      {children}
    </mark>
  );
}
