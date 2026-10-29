import { cn } from "@/lib/utils";

type HighlightColor = "yellow" | "blue" | "pink" | "green" | "orange";

interface HighlightProps {
  color?: HighlightColor;
  className?: string;
  children: React.ReactNode;
}

/**
 * The five tones live in globals.css (`--hl-*`, light + dark). The mark is a
 * low-alpha marker: no underline, no weight change, and `box-decoration-break`
 * so a wrapped phrase keeps the mark shape on both lines.
 */
const colorClasses: Record<HighlightColor, string> = {
  yellow: "bg-[var(--hl-yellow)]",
  blue: "bg-[var(--hl-blue)]",
  pink: "bg-[var(--hl-pink)]",
  green: "bg-[var(--hl-green)]",
  orange: "bg-[var(--hl-orange)]",
};

export function Highlight({ color = "yellow", className, children }: HighlightProps) {
  return (
    <mark
      className={cn(
        "rounded-[2px] px-0.5 text-inherit [box-decoration-break:clone]",
        colorClasses[color],
        className
      )}
    >
      {children}
    </mark>
  );
}
