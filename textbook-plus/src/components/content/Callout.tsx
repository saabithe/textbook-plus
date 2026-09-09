import { AlertCircle, BookOpen, Lightbulb, AlertTriangle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const variants = {
  note: {
    icon: BookOpen,
    border: "border-blue-500/30",
    left: "border-l-blue-500",
    bg: "bg-blue-500/[0.07] dark:bg-blue-500/[0.10]",
    iconWrap:
      "bg-gradient-to-br from-blue-500 to-sky-400 shadow-sm shadow-blue-500/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    label: "Note",
  },
  important: {
    icon: AlertCircle,
    border: "border-violet-500/25",
    left: "border-l-violet-500",
    bg: "bg-violet-500/[0.08] dark:bg-violet-500/[0.12]",
    iconWrap:
      "bg-gradient-to-br from-violet-500 to-purple-400 shadow-sm shadow-violet-500/30",
    iconColor: "text-violet-600 dark:text-violet-400",
    label: "Important",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-amber-500/30",
    left: "border-l-amber-500",
    bg: "bg-amber-500/[0.09] dark:bg-amber-500/[0.13]",
    iconWrap:
      "bg-gradient-to-br from-amber-500 to-orange-400 shadow-sm shadow-amber-500/30",
    iconColor: "text-amber-600 dark:text-amber-400",
    label: "Warning",
  },
  didyouknow: {
    icon: Lightbulb,
    border: "border-emerald-500/25",
    left: "border-l-emerald-500",
    bg: "bg-emerald-500/[0.07] dark:bg-emerald-500/[0.10]",
    iconWrap:
      "bg-gradient-to-br from-emerald-500 to-teal-400 shadow-sm shadow-emerald-500/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    label: "Did You Know?",
  },
  tip: {
    icon: Zap,
    border: "border-orange-500/25",
    left: "border-l-orange-500",
    bg: "bg-orange-500/[0.07] dark:bg-orange-500/[0.10]",
    iconWrap:
      "bg-gradient-to-br from-orange-500 to-amber-400 shadow-sm shadow-orange-500/30",
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
    <Alert className={cn("my-6 gap-0 rounded-2xl border border-l-4 px-5 py-4 shadow-sm", v.border, v.left, v.bg)}>
      <div className="flex items-center gap-2.5 mb-2.5">
        <span className={cn("flex h-8 w-8 items-center justify-center rounded-xl", v.iconWrap)}>
          <Icon className="h-4 w-4 text-white" />
        </span>
        <AlertTitle className={cn("text-sm font-extrabold tracking-widest uppercase", v.iconColor)}>
          {title ?? v.label}
        </AlertTitle>
      </div>
      <AlertDescription className="text-[0.95rem] leading-[1.75] text-foreground/85">
        {children}
      </AlertDescription>
    </Alert>
  );
}
