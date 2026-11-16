/**
 * Vectors — the vehicles that carry foreign DNA into a host.
 *
 * Plasmids get the room because the note describes them; the other two types
 * stay as compact rows. The three cloning-vector features are equal blocks with
 * no explanation added, as specified.
 */

export function VectorDefinition() {
  return (
    <div className="my-5 rounded-xl border border-teal-600/30 bg-teal-50/40 p-4 dark:bg-teal-950/20">
      <div className="t-micro text-teal-800 dark:text-teal-300">Definition</div>
      <div className="mt-1 text-base font-bold tracking-tight text-foreground">Vectors</div>
      <div className="mt-1 text-sm leading-relaxed text-foreground">
        <strong className="font-semibold">Vehicles</strong> used to transfer foreign DNA into a host cell.
      </div>
    </div>
  );
}

export function VectorTypes() {
  return (
    <div className="my-5 space-y-2">
      <div className="rounded-xl border border-border bg-card p-3.5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-teal-600/30 bg-teal-50 text-[10px] font-bold tabular-nums text-teal-800 dark:bg-teal-950/30 dark:text-teal-300">
                1
              </span>
              <div className="text-sm font-semibold tracking-tight text-foreground">Plasmids</div>
            </div>
            <div className="mt-1.5 space-y-1">
              <Fact>Extra-chromosomal DNA molecules.</Fact>
              <Fact>Circular and self-replicating.</Fact>
            </div>
          </div>

          <div className="shrink-0 sm:w-40">
            <PlasmidArt />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <CompactType n="2" name="Bacteriophages" />
        <CompactType n="3" name="Retroviruses" />
      </div>
    </div>
  );
}

const FEATURES = ["Origin of replication (ori)", "Selectable marker", "Cloning sites"];

export function CloningVectorFeatures() {
  return (
    <div className="my-5">
      <div className="text-xs leading-relaxed text-muted-foreground">
        A cloning vector must possess three essential features.
      </div>

      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <div
            key={feature}
            className="rounded-xl border border-indigo-600/30 bg-indigo-50/40 px-3.5 py-3 dark:bg-indigo-950/20"
          >
            <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
              Feature {index + 1}
            </div>
            <div className="mt-1 text-sm font-semibold leading-snug tracking-tight text-foreground">{feature}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- bits */

function CompactType({ n, name }: { n: string; name: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border bg-muted/40 text-[10px] font-bold tabular-nums text-muted-foreground">
        {n}
      </span>
      <div className="text-xs font-semibold text-foreground">{name}</div>
    </div>
  );
}

function Fact({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-1.5">
      <span className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-foreground/35" aria-hidden />
      <div className="text-xs leading-snug text-foreground">{children}</div>
    </div>
  );
}

function PlasmidArt() {
  return (
    <svg viewBox="0 0 160 96" className="w-full" role="img" aria-label="Circular self-replicating plasmid">
      <circle cx="80" cy="48" r="34" className="fill-none stroke-teal-600" strokeWidth="2.4" />
      <circle cx="80" cy="48" r="34" className="fill-none stroke-teal-600/20" strokeWidth="8" />
      <path
        d="M 104 23 A 34 34 0 0 1 104 73"
        className="fill-none stroke-indigo-500"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <circle cx="80" cy="14" r="3.2" className="fill-amber-500" />
      <text x="80" y="92" textAnchor="middle" className="fill-muted-foreground text-[7px]">
        circular DNA
      </text>
    </svg>
  );
}
