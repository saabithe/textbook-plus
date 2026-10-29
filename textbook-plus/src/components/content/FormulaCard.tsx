/**
 * FormulaCard — the standard box (§14.0) for an equation that deserves a frame:
 * 1px border, radius 6, one 3px left rule (subject hue, else ink),
 * a micro label, and the formula centred at ≈20px.
 */
interface FormulaCardProps {
  children: React.ReactNode;
  /** Micro label above the formula. */
  label?: string;
  /** Subject hue for the rule, e.g. `var(--subject-physics)`. Defaults to ink. */
  subjectColor?: string;
}

export function FormulaCard({ children, label = "Formula", subjectColor }: FormulaCardProps) {
  return (
    <div
      className="my-6 overflow-hidden rounded-lg border border-border bg-card"
      style={{ borderLeftWidth: 3, borderLeftColor: subjectColor ?? "var(--foreground)" }}
    >
      <div className="border-b border-border px-4 py-3 sm:px-5">
        <span className="t-micro">{label}</span>
      </div>
      <div className="px-4 py-4 sm:px-5 sm:py-5 [&>div]:my-0 [&>p]:mb-0">
        {children}
      </div>
    </div>
  );
}
