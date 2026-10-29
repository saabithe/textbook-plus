interface MistakeCardProps {
  mistake: string;
  correction: string;
  example?: string;
}

export function MistakeCard({ mistake, correction, example }: MistakeCardProps) {
  return (
    <div className="my-6 border-l-[3px] border-warning pl-4">
      <p className="t-micro">Common mistake</p>
      <p className="mt-1.5 text-base leading-[1.7] text-foreground">{mistake}</p>

      <p className="t-micro mt-4">Correction</p>
      <p className="mt-1.5 text-base leading-[1.7] text-foreground">{correction}</p>

      {example && (
        <p className="mt-2.5 text-[0.9375rem] italic leading-[1.6] text-muted-foreground">
          Example: {example}
        </p>
      )}
    </div>
  );
}
