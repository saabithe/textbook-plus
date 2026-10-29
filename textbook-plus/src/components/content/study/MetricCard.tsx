import type { ReactNode } from "react";

interface MetricCardProps {
  label: string;
  value: string;
  unit?: string;
  trend?: "up" | "down" | "neutral";
  description?: ReactNode;
}

const TREND_GLYPH = { up: "↑", down: "↓", neutral: "—" } as const;

export function MetricCard({ label, value, unit, trend, description }: MetricCardProps) {
  return (
    <div className="my-6 border-t border-border pt-3">
      <p className="text-[2rem] font-semibold leading-none tracking-tight tabular-nums text-foreground">
        {value}
        {unit && (
          <span className="ml-1.5 align-baseline text-[0.9375rem] font-normal text-muted-foreground">
            {unit}
          </span>
        )}
      </p>
      <p className="t-micro mt-2">
        {label}
        {trend && (
          <span className="ml-2 tabular-nums" aria-hidden="true">
            {TREND_GLYPH[trend]}
          </span>
        )}
      </p>
      {description && (
        <p className="mt-1.5 text-[0.9375rem] leading-[1.6] text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
