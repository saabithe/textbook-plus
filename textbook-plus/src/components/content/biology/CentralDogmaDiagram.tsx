/** Every arrow is labelled with its process; reverse transcription is a separate return arrow. */
export function CentralDogmaDiagram() {
  return (
    <figure className="my-6 rounded-2xl border border-border bg-card p-4 sm:p-5">
      <figcaption className="text-sm font-bold tracking-tight text-foreground">
        Central dogma — complete flow
      </figcaption>

      <svg
        viewBox="0 0 660 300"
        className="mt-2 h-auto w-full"
        role="img"
        aria-label="Central dogma flowchart: DNA to RNA by transcription, RNA to protein by translation, DNA copying itself by replication, and RNA back to DNA by reverse transcription as in HIV"
      >
        <defs>
          <marker id="cd-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" className="fill-foreground/70" />
          </marker>
        </defs>

        {/* replication self-loop */}
        <path
          d="M 78 118 C 60 42, 152 42, 132 118"
          fill="none"
          className="stroke-foreground/60"
          strokeWidth="2"
          markerEnd="url(#cd-arrow)"
        />
        <text x="105" y="26" textAnchor="middle" className="fill-foreground text-[11px] font-bold uppercase tracking-wider">
          Replication
        </text>
        <text x="105" y="44" textAnchor="middle" className="fill-muted-foreground text-[10px]">DNA → DNA</text>

        {/* main horizontal pathway */}
        <line x1="170" y1="151" x2="258" y2="151" className="stroke-foreground/60" strokeWidth="2" markerEnd="url(#cd-arrow)" />
        <text x="214" y="140" textAnchor="middle" className="fill-foreground text-[10px] font-bold uppercase tracking-wider">
          Transcription
        </text>

        <line x1="395" y1="151" x2="483" y2="151" className="stroke-foreground/60" strokeWidth="2" markerEnd="url(#cd-arrow)" />
        <text x="439" y="140" textAnchor="middle" className="fill-foreground text-[10px] font-bold uppercase tracking-wider">
          Translation
        </text>

        {/* reverse transcription return arrow */}
        <path
          d="M 265 184 C 240 268, 165 268, 140 184"
          fill="none"
          className="stroke-foreground/60"
          strokeWidth="2"
          markerEnd="url(#cd-arrow)"
        />
        <text x="202" y="254" textAnchor="middle" className="fill-foreground text-[11px] font-bold uppercase tracking-wider">
          Reverse transcription
        </text>
        <text x="202" y="272" textAnchor="middle" className="fill-muted-foreground text-[10px]">
          RNA → DNA · Example: HIV
        </text>

        {/* nodes */}
        <rect x="40" y="118" width="130" height="66" rx="14" className="fill-blue-50 stroke-blue-500/50 dark:fill-blue-950/30" strokeWidth="1.5" />
        <text x="105" y="158" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200 text-[19px] font-bold">DNA</text>

        <rect x="265" y="118" width="130" height="66" rx="14" className="fill-emerald-50 stroke-emerald-500/50 dark:fill-emerald-950/30" strokeWidth="1.5" />
        <text x="330" y="158" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[19px] font-bold">RNA</text>

        <rect x="490" y="118" width="130" height="66" rx="14" className="fill-violet-50 stroke-violet-500/50 dark:fill-violet-950/30" strokeWidth="1.5" />
        <text x="555" y="158" textAnchor="middle" className="fill-violet-800 dark:fill-violet-200 text-[19px] font-bold">Protein</text>
      </svg>
    </figure>
  );
}
