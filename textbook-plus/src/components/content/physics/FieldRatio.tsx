import { ArrowUpDown } from "lucide-react";
import { Formula } from "@/components/content/Formula";

export function FieldRatio() {
  return (
    <div className="my-6 rounded-lg border border-border bg-card p-5">
      <div className="mb-4 flex items-center gap-2 t-micro text-muted-foreground">
        <span className="text-lg">⚡</span>
        FIELD RATIO
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 rounded-lg border border-border bg-[color-mix(in_oklab,var(--subject-physics)_10%,transparent)] px-4 py-2">
            <span className="text-lg font-extrabold text-foreground">E₀</span>
            <span className="text-sm font-black text-muted-foreground">/</span>
            <span className="text-lg font-extrabold text-foreground">B₀</span>
          </div>
          <div className="my-1 text-lg font-black text-muted-foreground">=</div>
          <div className="rounded-lg border border-ok/40 bg-ok/10 px-4 py-2 text-lg font-extrabold text-ok">
            c
          </div>
          <p className="mt-2 text-center text-[0.72rem] leading-snug text-muted-foreground">
            Peak electric over peak magnetic field — the wave speed (Eq. 8.10)
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm font-bold text-foreground/85">
          <span>E₀ ↑</span>
          <ArrowUpDown className="h-4 w-4 text-muted-foreground/70" />
          <span className="text-[0.7rem] font-semibold text-muted-foreground">tied by c</span>
          <span>B₀ ↑</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-lg border border-border bg-muted/40 px-4 py-2">
            <span className="text-base font-extrabold text-foreground/80">B₀/E₀</span>
          </div>
          <div className="my-1 text-lg font-black text-muted-foreground">=</div>
          <div className="rounded-lg border border-border bg-muted/40 px-4 py-2 text-base font-extrabold text-foreground">
            1/c
          </div>
          <p className="mt-2 text-center text-[0.72rem] leading-snug text-muted-foreground">
            Reciprocal — has the dimensions of reciprocal of velocity
          </p>
        </div>
      </div>

      <p className="mt-4 text-center text-[0.8rem] leading-relaxed text-foreground/70">
        In an electromagnetic wave <Formula>{String.raw`E_0 = c B_0`}</Formula> — the peaks rise and fall
        together, locked by the speed of the wave.
      </p>
    </div>
  );
}