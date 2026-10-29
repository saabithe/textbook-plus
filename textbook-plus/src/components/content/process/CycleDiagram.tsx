import { ChevronRight, RefreshCw } from "lucide-react";
import type { CSSProperties } from "react";

interface CycleStep {
  label: string;
  detail?: string;
}

interface CycleDiagramProps {
  title?: string;
  steps: CycleStep[];
}

/**
 * Circular cycle diagram: numbered step boxes arranged on a ring, with
 * directional arrows between consecutive steps and a central hub icon.
 * Long details are rendered as a numbered legend under the ring so the
 * visual stays clean and readable on mobile.
 */
export function CycleDiagram({ title, steps }: CycleDiagramProps) {
  const n = steps.length;

  const positions = steps.map((_, i) => {
    const angleDeg = -90 + (360 / n) * i;
    const rad = (angleDeg * Math.PI) / 180;
    return { rad };
  });

  const arrows = steps.map((_, i) => {
    const midDeg = -90 + (360 / n) * (i + 0.5);
    const midRad = (midDeg * Math.PI) / 180;
    return { midDeg, midRad };
  });

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="flex items-center gap-2.5 border-b border-border px-4 py-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-[3px] border border-border bg-card text-muted-foreground">
            <RefreshCw className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm font-bold tracking-tight text-foreground">{title}</span>
        </div>
      )}

      <div className="px-5 py-5">
        <div className="relative mx-auto aspect-square w-full max-w-[380px]">
          {/* decorative ring */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="var(--border)"
              strokeWidth="0.5"
            />
          </svg>

          {/* central hub */}
          <div className="absolute left-1/2 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground">
            <RefreshCw className="h-4 w-4" />
          </div>

          {/* nodes */}
          {positions.map((p, i) => (
            <div
              key={i}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${50 + 38 * Math.cos(p.rad)}%`,
                top: `${50 + 38 * Math.sin(p.rad)}%`,
              }}
            >
              <div className="flex max-w-[6rem] items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5 sm:max-w-[7.5rem] sm:px-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] border border-border bg-muted text-[0.6rem] font-bold text-muted-foreground">
                  {i + 1}
                </span>
                <span className="text-[0.68rem] font-semibold leading-tight text-foreground sm:text-[0.72rem]">
                  {steps[i].label}
                </span>
              </div>
            </div>
          ))}

          {/* directional arrows */}
          {arrows.map((a, i) => (
            <div
              key={i}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${50 + 46 * Math.cos(a.midRad)}%`,
                top: `${50 + 46 * Math.sin(a.midRad)}%`,
                transform: `translate(-50%, -50%) rotate(${a.midDeg + 90}deg)`,
              }}
            >
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} />
            </div>
          ))}
        </div>

        {/* numbered detail legend */}
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 rounded-lg border border-border bg-card px-3 py-2.5"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] border border-border bg-muted text-[0.65rem] font-bold text-muted-foreground">
                {i + 1}
              </span>
              <div className="min-w-0">
                <span className="block text-sm font-bold leading-snug text-foreground">
                  {step.label}
                </span>
                {step.detail && (
                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                    {step.detail}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}