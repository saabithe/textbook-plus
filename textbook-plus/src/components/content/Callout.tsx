import { AlertCircle, BookOpen, Lightbulb, AlertTriangle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  note: {
    icon: BookOpen,
    border: "border-l-blue-500",
    bg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    label: "Note",
  },
  important: {
    icon: AlertCircle,
    border: "border-l-purple-500",
    bg: "bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
    label: "Important",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-l-amber-500",
    bg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    label: "Warning",
  },
  didyouknow: {
    icon: Lightbulb,
    border: "border-l-emerald-500",
    bg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    label: "Did You Know?",
  },
  tip: {
    icon: Zap,
    border: "border-l-amber-500",
    bg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
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
    <div className={cn("rounded-r-lg border-l-4 px-5 py-4 my-6", v.border, v.bg)}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={cn("h-4 w-4", v.iconColor)} />
        <span className={cn("text-sm font-semibold", v.iconColor)}>
          {title ?? v.label}
        </span>
      </div>
      <div className="text-[0.95rem] leading-[1.75] text-foreground/85">
        {children}
      </div>
    </div>
  );
}
