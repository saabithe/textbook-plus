import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MistakeCardProps {
  mistake: string;
  correction: string;
  example?: string;
}

export function MistakeCard({ mistake, correction, example }: MistakeCardProps) {
  return (
    <Card className={cn("my-6 gap-0 border-border/60 bg-background py-0")}>
      <CardContent className="px-5 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <div className="flex flex-1 items-start gap-3 rounded-lg bg-red-500/[0.06] p-3 dark:bg-red-500/[0.10]">
            <span className="mt-0.5 text-lg text-red-500">✗</span>
            <div>
              <span className="text-xs font-medium uppercase tracking-wide text-red-600">Common Mistake</span>
              <p className="mt-1 text-sm text-foreground">{mistake}</p>
            </div>
          </div>
          <div className="flex flex-1 items-start gap-3 rounded-lg bg-green-500/[0.06] p-3 dark:bg-green-500/[0.10]">
            <span className="mt-0.5 text-lg text-green-500">✓</span>
            <div>
              <span className="text-xs font-medium uppercase tracking-wide text-green-600">Correction</span>
              <p className="mt-1 text-sm text-foreground">{correction}</p>
            </div>
          </div>
        </div>
        {example && (
          <div className="mt-3 pl-6 text-xs italic text-muted-foreground">
            Example: {example}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
