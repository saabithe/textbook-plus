import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface DdTransitionFlowProps {
  steps: string[];
}

function Electron({ faded = false }: { faded?: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "h-2 w-2 rounded-full",
        faded ? "border border-foreground/40 bg-transparent" : "bg-foreground",
      )}
    />
  );
}

function Level({
  label,
  tone,
  electrons,
}: {
  label: string;
  tone: "warning" | "physics";
  electrons: number;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 rounded-md border px-3 py-2",
        tone === "warning"
          ? "border-warning/40 bg-warning/10"
          : "border-[color-mix(in_oklab,var(--subject-physics)_40%,transparent)] bg-[color-mix(in_oklab,var(--subject-physics)_10%,transparent)]",
      )}
    >
      <span className="text-xs font-extrabold text-foreground">{label}</span>
      <span className="flex items-center gap-1">
        {Array.from({ length: electrons }).map((_, index) => (
          <Electron key={index} />
        ))}
      </span>
    </div>
  );
}

/**
 * DdTransitionFlow — a four-step vertical flow beside a two-level energy
 * sketch: the lower block absorbs visible light and the electron rises. The
 * final statement (observed colour is complementary) closes in a tinted panel.
 */
export function DdTransitionFlow({ steps }: DdTransitionFlowProps) {
  const last = steps.length - 1;

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="grid gap-5 p-4 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6">
        <div className="rounded-md border border-border bg-muted/30 p-3">
          <p className="t-micro text-center">Energy</p>

          <div className="mt-3">
            <Level label="e_g" tone="warning" electrons={1} />
          </div>

          <div className="relative flex h-16 flex-col items-center justify-center">
            <span aria-hidden className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border" />
            <ArrowUp aria-hidden className="relative h-4 w-4 text-foreground" />
            <span className="relative mt-1 bg-muted px-1 text-[0.65rem] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
              absorbs light
            </span>
          </div>

          <Level label="t_2g" tone="physics" electrons={1} />
        </div>

        <ol className="space-y-2.5">
          {steps.map((step, index) => (
            <li key={index} className="flex gap-2.5">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] border border-border bg-muted text-[0.65rem] font-bold text-foreground">
                {index + 1}
              </span>
              <p
                className={cn(
                  "min-w-0 text-sm leading-relaxed",
                  index === last
                    ? "rounded-md border border-warning/40 bg-warning/10 px-2.5 py-1.5 font-semibold text-foreground"
                    : "text-foreground/85",
                )}
              >
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
