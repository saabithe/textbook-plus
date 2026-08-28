import { AlertCircle, BookOpen, Lightbulb, AlertTriangle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  note: {
    icon: BookOpen,
    border: "border-blue-500/30",
    left: "border-l-blue-500",
    bg: "bg-blue-500/[0.07] dark:bg-blue-500/[0.10]",
    iconWrap: "bg-blue-500/15 dark:bg-blue-500/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    label: "Note",
  },
  important: {
    icon: AlertCircle,
    border: "border-violet-500/25",
    left: "border-l-violet-500",
    bg: "bg-violet-500/[0.08] dark:bg-violet-500/[0.12]",
    iconWrap: "bg-violet-500/15 dark:bg-violet-500/20",
    iconColor: "text-violet-600 dark:text-violet-400",
    label: "Important",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-amber-500/30",
    left: "border-l-amber-500",
    bg: "bg-amber-500/[0.09] dark:bg-amber-500/[0.13]",
    iconWrap: "bg-amber-500/20 dark:bg-amber-500/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    label: "Warning",
  },
  didyouknow: {
    icon: Lightbulb,
    border: "border-emerald-500/25",
    left: "border-l-emerald-500",
    bg: "bg-emerald-500/[0.07] dark:bg-emerald-500/[0.10]",
    iconWrap: "bg-emerald-500/15 dark:bg-emerald-500/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    label: "Did You Know?",
  },
  tip: {
    icon: Zap,
    border: "border-orange-500/25",
    left: "border-l-orange-500",
    bg: "bg-orange-500/[0.07] dark:bg-orange-500/[0.10]",
    iconWrap: "bg-orange-500/15 dark:bg-orange-500/20",
    iconColor: "text-orange-600 dark:text-orange-400",
    label: "Speed Trick",
  },
} as const;

type CalloutType = keyof typeof variants;

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = "note", title, children }: CalloutProps) {
  const v = variants[type];
  const Icon = v.icon;

  return (
    <div className={cn("rounded-xl border border-l-4 px-5 py-4 my-6 shadow-sm", v.border, v.left, v.bg)}>
      <div className="flex items-center gap-2.5 mb-2.5">
        <span className={cn("flex h-7 w-7 items-center justify-center rounded-full", v.iconWrap)}>
          <Icon className={cn("h-4 w-4", v.iconColor)} />
        </span>
        <span className={cn("text-sm font-semibold tracking-tight", v.iconColor)}>
          {title ?? v.label}
        </span>
      </div>
      <div className="text-[0.95rem] leading-[1.75] text-foreground/85">
        {children}
      </div>
    </div>
  );
}
