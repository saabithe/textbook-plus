import { AlertCircle, BookOpen, Lightbulb, AlertTriangle, Zap } from "lucide-react";

/**
 * Callout — box anatomy (§14.0), three tones.
 *
 * Five props keep working; they collapse onto three tones:
 *   note / didyouknow → ink rule (--rule-strong)
 *   important / tip   → subject rule (subjectColor, else ink)
 *   warning           → --warning rule
 *
 * Meaning is carried by icon + micro-label, never by a fill.
 */
const variants = {
  note: { icon: BookOpen, tone: "note", label: "Note" },
  didyouknow: { icon: Lightbulb, tone: "note", label: "Did You Know?" },
  important: { icon: AlertCircle, tone: "important", label: "Important" },
  tip: { icon: Zap, tone: "important", label: "Speed Trick" },
  warning: { icon: AlertTriangle, tone: "warning", label: "Warning" },
} as const;

type CalloutType = keyof typeof variants;

type Tone = (typeof variants)[CalloutType]["tone"];

const toneRule: Record<Tone, string> = {
  note: "var(--rule-strong)",
  important: "var(--foreground)",
  warning: "var(--warning)",
};

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  /** Subject hue for the `important` tone's 3px rule, e.g. `var(--subject-physics)`. */
  subjectColor?: string;
}

export function Callout({ type = "note", title, children, subjectColor }: CalloutProps) {
  const v = variants[type];
  const Icon = v.icon;
  const rule =
    v.tone === "important" ? (subjectColor ?? toneRule.important) : toneRule[v.tone];

  return (
    <div
      role="alert"
      className="my-6 overflow-hidden rounded-lg border border-border bg-card"
      style={{ borderLeftWidth: 3, borderLeftColor: rule }}
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 sm:px-5">
        <span className="flex shrink-0 items-center" style={{ color: rule }}>
          <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
        </span>
        <span className="t-micro">{title ?? v.label}</span>
      </div>
      <div className="px-4 py-4 text-[1.03125rem] leading-[1.7] text-foreground/90 sm:px-5 sm:py-5">
        {children}
      </div>
    </div>
  );
}
