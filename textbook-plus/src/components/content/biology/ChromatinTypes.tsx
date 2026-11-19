const EYEBROW =
  "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

function LooseArt() {
  return (
    <svg
      viewBox="0 0 300 96"
      className="mt-2 h-auto w-full"
      role="img"
      aria-label="Loosely arranged chromatin with widely separated nucleosomes"
    >
      <polyline points="18,48 70,24 122,64 174,26 226,66 282,40" fill="none" className="stroke-rose-400/60" strokeWidth="3" />
      {[
        { x: 70, y: 24 },
        { x: 122, y: 64 },
        { x: 174, y: 26 },
        { x: 226, y: 66 },
      ].map((b) => (
        <g key={b.x}>
          <circle cx={b.x} cy={b.y} r="14" className="fill-violet-400/20 stroke-violet-500/60" strokeWidth="1.5" />
          <circle cx={b.x} cy={b.y} r="5" className="fill-violet-500/50" />
        </g>
      ))}
    </svg>
  );
}

function DenseArt() {
  const dots = Array.from({ length: 44 }, (_, i) => {
    const col = i % 11;
    const row = Math.floor(i / 11);
    return {
      x: 88 + col * 12 + (row % 2) * 6,
      y: 22 + row * 16,
      r: 9,
    };
  });
  return (
    <svg
      viewBox="0 0 300 96"
      className="mt-2 h-auto w-full"
      role="img"
      aria-label="Densely packed chromatin with nucleosomes tightly clustered together"
    >
      <rect x="76" y="8" width="152" height="80" rx="20" className="fill-violet-700/10 stroke-violet-700/30" />
      {dots.map((dot, i) => (
        <circle key={i} cx={dot.x} cy={dot.y} r={dot.r} className="fill-violet-700/55 stroke-violet-800/50" strokeWidth="1" />
      ))}
    </svg>
  );
}

function Trait({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-border py-2 last:border-b-0">
      <span className={EYEBROW}>{label}</span>
      <span className="text-sm font-semibold text-foreground">{value}</span>
    </div>
  );
}

export function ChromatinTypes() {
  return (
    <div className="my-6">
      <p className="my-4 text-sm leading-relaxed text-foreground">
        Chromatin is classified according to its <strong>packing density</strong>, <strong>staining behaviour</strong> and{" "}
        <strong>transcriptional activity</strong>.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <section className="rounded-2xl border border-emerald-500/35 bg-card p-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden />
            <span className="text-sm font-bold tracking-tight text-foreground">Euchromatin</span>
          </div>
          <LooseArt />
          <div className="mt-2">
            <Trait label="Packing" value="Loosely packed" />
            <Trait label="Staining" value="Lightly stained" />
            <Trait label="Transcription" value="Active" />
          </div>
        </section>

        <section className="rounded-2xl border border-slate-500/40 bg-card p-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" aria-hidden />
            <span className="text-sm font-bold tracking-tight text-foreground">Heterochromatin</span>
          </div>
          <DenseArt />
          <div className="mt-2">
            <Trait label="Packing" value="Densely packed" />
            <Trait label="Staining" value="Darkly stained" />
            <Trait label="Transcription" value="Inactive" />
          </div>
        </section>
      </div>
    </div>
  );
}
