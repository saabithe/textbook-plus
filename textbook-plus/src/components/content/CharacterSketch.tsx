import { cn } from "@/lib/utils";

interface CharacterSketchProps {
  name: string;
  children: React.ReactNode;
  className?: string;
}

export function CharacterSketch({ name, children, className }: CharacterSketchProps) {
  return (
    <div className={cn("my-6 rounded-lg border border-border bg-card px-5 py-4", className)}>
      <div className="flex items-center gap-3 mb-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-base font-bold text-foreground">
          {name.charAt(0).toUpperCase()}
        </span>
        <div>
          <p className="t-micro mb-0.5 text-muted-foreground">Character Sketch</p>
          <h3 className="text-base font-bold tracking-tight text-foreground leading-tight">{name}</h3>
        </div>
      </div>
      <div className="text-base leading-[1.75] text-foreground/85 space-y-3">
        {children}
      </div>
    </div>
  );
}