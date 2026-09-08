import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Step {
  label: string;
  description?: string;
}

interface ProcessCardProps {
  title?: string;
  steps: Step[];
}

export function ProcessCard({ title, steps }: ProcessCardProps) {
  return (
    <Card className={cn("my-6 gap-0 border-border/60 bg-background py-0")}>
      <CardContent className="px-5 py-4">
        {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border/60 my-1" />
                )}
              </div>
              <div className="pb-5 pt-0.5">
                <p className="text-sm font-medium text-foreground leading-snug">{step.label}</p>
                {step.description && (
                  <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{step.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
