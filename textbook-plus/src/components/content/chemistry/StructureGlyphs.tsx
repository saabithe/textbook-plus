import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MARK_TONE = {
  chemistry:
    "bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] text-[var(--subject-chemistry)]",
  warning: "bg-warning/12 text-warning",
} as const;

/**
 * StructureMark — one highlighted token inside a structural formula. Used to
 * pick out the carbon, oxygen or bond that the note asks to emphasise.
 */
export function StructureMark({
  tone = "chemistry",
  className,
  children,
}: {
  tone?: keyof typeof MARK_TONE;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "rounded-[3px] px-1 font-extrabold [box-decoration-break:clone]",
        MARK_TONE[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

const RING_TONE = {
  chemistry: "text-[var(--subject-chemistry)]",
  warning: "text-warning",
  foreground: "text-foreground/80",
} as const;

/**
 * BenzeneRing — skeletal hexagon with the aromatic circle and an optional bond
 * stub to the right vertex. `vertexDot` marks the ring carbon that carries the
 * substituent, which is how the sp² carbon is highlighted without lettering it.
 */
export function BenzeneRing({
  tone = "foreground",
  bond = false,
  vertexDot = false,
  className,
}: {
  tone?: keyof typeof RING_TONE;
  bond?: boolean;
  vertexDot?: boolean;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 52 44"
      className={cn("h-9 w-[2.65rem] shrink-0", RING_TONE[tone], className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="38,22 30,8.14 14,8.14 6,22 14,35.86 30,35.86" />
      <circle cx="22" cy="22" r="9.4" strokeWidth="1.2" opacity="0.5" />
      {bond && <line x1="38" y1="22" x2="49" y2="22" />}
      {vertexDot && (
        <circle
          cx="38"
          cy="22"
          r="2.6"
          className="text-[var(--subject-chemistry)]"
          fill="currentColor"
          stroke="none"
        />
      )}
    </svg>
  );
}
