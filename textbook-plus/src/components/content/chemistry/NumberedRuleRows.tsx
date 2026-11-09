interface NamingRule {
  title: string;
  detail: string;
}

interface NumberedRuleRowsProps {
  rules: NamingRule[];
}

/**
 * NumberedRuleRows — the compact numbered strip used for the extra naming
 * rules: one row per rule, number badge on the left, bold lead phrase before
 * the detail.
 */
export function NumberedRuleRows({ rules }: NumberedRuleRowsProps) {
  return (
    <ol className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {rules.map((rule, index) => (
        <li
          key={rule.title}
          className="flex items-start gap-3 border-b border-border px-4 py-3 last:border-0"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_13%,transparent)] text-xs font-extrabold text-[var(--subject-chemistry)]">
            {index + 1}
          </span>
          <p className="text-sm leading-relaxed text-foreground/90">
            <span className="font-extrabold text-foreground">{rule.title}:</span> {rule.detail}
          </p>
        </li>
      ))}
    </ol>
  );
}
