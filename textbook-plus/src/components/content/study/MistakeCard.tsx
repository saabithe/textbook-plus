import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MistakeCardProps {
  mistake: string;
  correction: string;
  example?: string;
}

export function MistakeCard({ mistake, correction, example }: MistakeCardProps) {
  return (
    <Card className={cn("my-6 gap-0 rounded-2xl border-border/60 bg-background py-0")}>
      <CardContent className="px-5 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <div className="flex flex-1 items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/[0.10] p-3 dark:bg-red-500/[0.15]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-400 text-sm font-extrabold text-white shadow-sm shadow-red-500/30">✗</span>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 dark:text-red-400">Common Mistake</span>
              <p className="mt-1 text-sm text-foreground">{mistake}</p>
            </div>
          </div>
          <div className="flex flex-1 items-start gap-3 rounded-xl border border-green-500/20 bg-green-500/[0.10] p-3 dark:bg-green-500/[0.15]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 text-sm font-extrabold text-white shadow-sm shadow-green-500/30">✓</span>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-green-600 dark:text-green-400">Correction</span>
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
