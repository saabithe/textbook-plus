import { AlertCircle, BookOpen, Lightbulb, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  note: {
    icon: BookOpen,
    border: "border-l-blue-500",
    bg: "bg-blue-500/5",
    iconColor: "text-blue-500",
    label: "Note",
  },
  important: {
    icon: AlertCircle,
    border: "border-l-purple-500",
    bg: "bg-purple-500/5",
    iconColor: "text-purple-500",
    label: "Important",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-l-amber-500",
    bg: "bg-amber-500/5",
    iconColor: "text-amber-500",
    label: "Warning",
  },
  didyouknow: {
    icon: Lightbulb,
    border: "border-l-emerald-500",
    bg: "bg-emerald-500/5",
    iconColor: "text-emerald-500",
    label: "Did You Know?",
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
      <div className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
