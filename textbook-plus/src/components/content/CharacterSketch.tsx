import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CharacterSketchProps {
  name: string;
  children: React.ReactNode;
  className?: string;
}

export function CharacterSketch({ name, children, className }: CharacterSketchProps) {
  return (
    <Card
      className={cn(
        "my-6 gap-0 rounded-2xl border-border/50 bg-card py-0",
        className
      )}
    >
      <CardContent className="px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          Character Sketch
        </p>
        <h3 className="text-lg font-bold text-foreground mb-3">{name}</h3>
        <div className="text-[0.95rem] leading-[1.75] text-foreground/85 space-y-3">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
