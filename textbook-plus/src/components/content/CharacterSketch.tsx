import { cn } from "@/lib/utils";

interface CharacterSketchProps {
  name: string;
  children: React.ReactNode;
  className?: string;
}

export function CharacterSketch({ name, children, className }: CharacterSketchProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/50 bg-card px-6 py-5 my-6",
        className
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
        Character Sketch
      </p>
      <h3 className="text-lg font-bold text-foreground mb-3">{name}</h3>
      <div className="text-[0.95rem] leading-[1.75] text-foreground/85 space-y-3">
        {children}
      </div>
    </div>
  );
}
