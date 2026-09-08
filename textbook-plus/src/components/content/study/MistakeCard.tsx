import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-lg mt-0.5">✗</span>
            <div>
              <span className="text-xs font-medium text-red-600 uppercase tracking-wide">Common Mistake</span>
              <p className="text-sm text-foreground mt-0.5">{mistake}</p>
            </div>
          </div>
          <Separator className="bg-border/30" />
          <div className="flex items-start gap-3">
            <span className="text-green-500 text-lg mt-0.5">✓</span>
            <div>
              <span className="text-xs font-medium text-green-600 uppercase tracking-wide">Correction</span>
              <p className="text-sm text-foreground mt-0.5">{correction}</p>
            </div>
          </div>
          {example && (
            <div className="pl-6 text-xs text-muted-foreground italic">
              Example: {example}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
