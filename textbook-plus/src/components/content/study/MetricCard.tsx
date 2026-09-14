import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  unit?: string;
  trend?: "up" | "down" | "neutral";
  description?: ReactNode;
}

export function MetricCard({ label, value, unit, trend, description }: MetricCardProps) {
  return (
    <div className="relative my-6 overflow-hidden rounded-2xl border border-border/60 bg-card px-5 py-4 shadow-sm">
      {trend && (
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-[2px]",
            trend === "up"
              ? "bg-gradient-to-r from-emerald-500/60 to-emerald-500/10"
              : trend === "down"
                ? "bg-gradient-to-r from-red-500/60 to-red-500/10"
                : "bg-gradient-to-r from-violet-500/40 to-violet-500/10"
          )}
        />
      )}
      <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-2xl font-extrabold text-foreground">{value}</span>
        {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
        {trend && (
          <span
            className={cn(
              "text-xs font-bold",
              trend === "up"
                ? "text-emerald-600 dark:text-emerald-400"
                : trend === "down"
                  ? "text-red-600 dark:text-red-400"
                  : "text-muted-foreground"
            )}
          >
            {trend === "up" ? "↑" : trend === "down" ? "↓" : "—"}
          </span>
        )}
      </div>
      {description && (
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}