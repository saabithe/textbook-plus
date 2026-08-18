import { AlertCircle, BookOpen, Lightbulb, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  note: {
    icon: BookOpen,
    border: "border-l-blue-500",
    bg: "bg-blue-500/5",
    iconColor: "text-blue-500",
  },
  important: {
    icon: AlertCircle,
    border: "border-l-purple-500",
    bg: "bg-purple-500/5",
    iconColor: "text-purple-500",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-l-amber-500",
    bg: "bg-amber-500/5",
    iconColor: "text-amber-500",
  },
  didyouknow: {
    icon: Lightbulb,
    border: "border-l-emerald-500",
    bg: "bg-emerald-500/5",
    iconColor: "text-emerald-500",
  },
} as const;

interface CalloutProps {
  title?: string;
  variant?: keyof typeof variants;
  content: string;
}

export function Callout({ title, variant = "note", content }: CalloutProps) {
  const v = variants[variant];
  const Icon = v.icon;

  return (
    <div
      className={cn(
        "rounded-r-lg border-l-4 px-5 py-4",
        v.border,
        v.bg
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className={cn("h-4 w-4", v.iconColor)} />
        {title && (
          <span className={cn("text-sm font-semibold", v.iconColor)}>
            {title}
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{content}</p>
    </div>
  );
}
