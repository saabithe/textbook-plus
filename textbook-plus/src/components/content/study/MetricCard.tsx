import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  unit?: string;
  trend?: "up" | "down" | "neutral";
  description?: string;
}

export function MetricCard({ label, value, unit, trend, description }: MetricCardProps) {
  return (
    <Card className={cn("my-6 gap-0 rounded-2xl border-border/60 bg-muted/30 py-0")}>
      <CardContent className="px-5 py-4">
        <p className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest">{label}</p>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-2xl font-extrabold text-foreground">{value}</span>
          {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
          {trend && (
            <span className={cn("text-xs font-medium",
              trend === "up" ? "text-green-600 dark:text-green-400" : trend === "down" ? "text-red-600 dark:text-red-400" : "text-muted-foreground"
            )}>
              {trend === "up" ? "↑" : trend === "down" ? "↓" : "—"}
            </span>
          )}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
