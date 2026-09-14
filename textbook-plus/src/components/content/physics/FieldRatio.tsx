import { ArrowUpDown } from "lucide-react";
import { Formula } from "@/components/content/Formula";

export function FieldRatio() {
  return (
    <div className="my-6 rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
        <span className="text-lg">⚡</span>
        FIELD RATIO
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 rounded-xl border border-violet-500/25 bg-violet-500/[0.06] px-4 py-2">
            <span className="text-lg font-extrabold text-violet-700 dark:text-violet-300">E₀</span>
            <span className="text-sm font-black text-violet-400">/</span>
            <span className="text-lg font-extrabold text-violet-700 dark:text-violet-300">B₀</span>
          </div>
          <div className="my-1 text-lg font-black text-muted-foreground">=</div>
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.08] px-4 py-2 text-lg font-extrabold text-emerald-700 dark:text-emerald-300">
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
          <div className="rounded-xl border border-border/50 bg-muted/25 px-4 py-2">
            <span className="text-base font-extrabold text-foreground/80">B₀/E₀</span>
          </div>
          <div className="my-1 text-lg font-black text-muted-foreground">=</div>
          <div className="rounded-xl border border-border/50 bg-muted/25 px-4 py-2 text-base font-extrabold text-foreground/80">
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