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
        <div className="flex items-center gap-3 mb-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-base font-extrabold text-white shadow-md shadow-orange-500/25">
            {name.charAt(0).toUpperCase()}
          </span>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground mb-1">
              Character Sketch
            </p>
            <h3 className="text-xl font-extrabold tracking-tight text-foreground leading-tight">{name}</h3>
          </div>
        </div>
        <div className="text-[0.95rem] leading-[1.75] text-foreground/85 space-y-3">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
