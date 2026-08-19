interface MistakeCardProps {
  mistake: string;
  correction: string;
  example?: string;
}

export function MistakeCard({ mistake, correction, example }: MistakeCardProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <span className="text-red-500 text-lg mt-0.5">✗</span>
          <div>
            <span className="text-xs font-medium text-red-600 uppercase tracking-wide">Common Mistake</span>
            <p className="text-sm text-foreground mt-0.5">{mistake}</p>
          </div>
        </div>
        <div className="border-t border-border/30" />
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
    </div>
  );
}
