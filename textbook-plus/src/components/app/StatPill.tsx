import { cn } from "@/lib/utils";

interface StatPillProps {
  icon: React.ReactNode;
  label: string;
  value?: React.ReactNode;
  className?: string;
  accentClassName?: string;
}

export function StatPill({ icon, label, value, className, accentClassName }: StatPillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card px-3.5 py-2 text-sm font-semibold text-muted-foreground shadow-sm",
        className
      )}
    >
      <span
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary",
          accentClassName
        )}
      >
        {icon}
      </span>
      {value !== undefined && <span className="tabular-nums text-foreground">{value}</span>}
      <span>{label}</span>
    </div>
  );
}