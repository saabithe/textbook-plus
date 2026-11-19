const PAIRS = [
  { code: "A=T", left: "A", right: "T", bonds: 2, bondY: [48, 68] },
  { code: "G≡C", left: "G", right: "C", bonds: 3, bondY: [42, 56, 70] },
] as const;

/**
 * Schematic base pairs — dashed lines are hydrogen bonds only. No H⁺ ion is
 * drawn anywhere, so the bond can never be read as ionic.
 */
export function DnaBasePairingDiagram() {
  return (
    <div className="my-6">
      <div className="grid gap-3 sm:grid-cols-2">
        {PAIRS.map((pair) => (
          <div key={pair.code} className="rounded-xl border border-border bg-card p-3.5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-bold tracking-tight text-foreground">{pair.code}</span>
              <span className="t-micro">{pair.bonds} hydrogen bonds</span>
            </div>

            <svg
              viewBox="0 0 240 112"
              className="mt-2 h-auto w-full"
              role="img"
              aria-label={`${pair.left} pairs with ${pair.right} through ${pair.bonds} hydrogen bonds; ${pair.left} is a purine and ${pair.right} is a pyrimidine`}
            >
              <rect x="8" y="18" width="14" height="76" rx="7" className="fill-sky-500/15 stroke-sky-500/40" />
              <rect x="218" y="18" width="14" height="76" rx="7" className="fill-sky-500/15 stroke-sky-500/40" />
              <text x="15" y="106" textAnchor="middle" className="fill-muted-foreground text-[8px]">backbone</text>
              <text x="225" y="106" textAnchor="middle" className="fill-muted-foreground text-[8px]">backbone</text>

              <rect x="44" y="32" width="52" height="52" rx="10" className="fill-amber-500/15 stroke-amber-500/45" strokeWidth="1.5" />
              <rect x="144" y="32" width="52" height="52" rx="10" className="fill-rose-500/15 stroke-rose-500/45" strokeWidth="1.5" />

              {pair.bondY.map((y) => (
                <line
                  key={y}
                  x1="97"
                  x2="143"
                  y1={y}
                  y2={y}
                  className="stroke-rose-500/80 dark:stroke-rose-400"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              ))}

              <text x="70" y="66" textAnchor="middle" className="fill-amber-800 dark:fill-amber-200 text-[24px] font-bold">
                {pair.left}
              </text>
              <text x="170" y="66" textAnchor="middle" className="fill-rose-800 dark:fill-rose-200 text-[24px] font-bold">
                {pair.right}
              </text>
            </svg>

            <div className="mt-1.5 flex items-center justify-between gap-2 text-[0.7rem]">
              <span className="rounded-md bg-amber-500/10 px-2 py-1 font-semibold text-amber-800 dark:text-amber-200">
                Purine · {pair.left}
              </span>
              <span className="rounded-md bg-rose-500/10 px-2 py-1 font-semibold text-rose-800 dark:text-rose-200">
                Pyrimidine · {pair.right}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-xs leading-relaxed text-muted-foreground">
        Dashed lines are <strong>hydrogen bonds</strong> — never ionic H⁺ bonds. A purine always pairs with a pyrimidine,
        keeping the distance between the strands uniform.
      </p>
    </div>
  );
}
