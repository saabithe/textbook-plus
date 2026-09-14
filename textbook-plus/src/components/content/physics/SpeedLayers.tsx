import { Layers, ArrowDown, Check } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

interface CompareRow {
  label: string;
  vacuum: string;
  medium: string;
}

interface SpeedLayer {
  layer: string;
  icon: string;
  formula: string;
  formulaRef?: string;
  withnote: string;
  rows: CompareRow[];
  special?: boolean;
}

const LAYERS: SpeedLayer[] = [
  {
    layer: "Vacuum / free space",
    icon: "🛰️",
    formula: String.raw`c = \frac{1}{\sqrt{\mu_0\varepsilon_0}}`,
    withnote: "Conduction and displacement — vacuum constants only.",
    rows: [
      { label: "Permittivity", vacuum: String.raw`\varepsilon = \varepsilon_0`, medium: String.raw`\varepsilon = \varepsilon_0\varepsilon_r` },
      { label: "Permeability", vacuum: String.raw`\mu = \mu_0`, medium: String.raw`\mu = \mu_0\mu_r` },
      { label: "Speed", vacuum: String.raw`c = 3\times 10^8\ \text{m/s}`, medium: String.raw`v = c/\sqrt{\mu_r\varepsilon_r}` },
    ],
  },
  {
    layer: "Material medium",
    icon: "💧",
    formula: String.raw`v = \frac{1}{\sqrt{\mu\varepsilon}}`,
    formulaRef: "(8.11)",
    withnote: "Replace vacuum constants with the medium's own ε and μ.",
    rows: [
      { label: "Formula", vacuum: "c depends only on μ₀, ε₀", medium: "v depends on μ, ε of the medium" },
      { label: "Constants", vacuum: "μ₀, ε₀ — fixed in free space", medium: "μ, ε — set by the material" },
      { label: "Typical speed", vacuum: String.raw`3\times 10^8\ \text{m/s}`, medium: String.raw`v = c/\sqrt{\mu_r\varepsilon_r}` },
    ],
  },
  {
    layer: "Relative constants",
    icon: "🧮",
    formula: String.raw`v = \frac{c}{\sqrt{\mu_r\varepsilon_r}}`,
    withnote: "Relative permeability μᵣ and relative permittivity εᵣ measure the medium against vacuum.",
    rows: [
      { label: "What they mean", vacuum: String.raw`\mu_r = \mu/\mu_0`, medium: String.raw`\varepsilon_r = \varepsilon/\varepsilon_0` },
      { label: "Free space", vacuum: String.raw`\mu_r = \varepsilon_r = 1`, medium: String.raw`\mu_r, \varepsilon_r > 1` },
      { label: "Speed", vacuum: String.raw`v = c`, medium: String.raw`v < c` },
    ],
    special: true,
  },
];

export function SpeedLayers() {
  return (
    <div className="my-6">
      <div className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
        <Layers className="h-4 w-4 text-violet-500" />
        <span>Where does the speed come from?</span>
      </div>

      <div className="space-y-4">
        {LAYERS.map((layer, layerIdx) => (
          <div
            key={layer.layer}
            className={cn(
              "overflow-hidden rounded-2xl border shadow-sm",
              layer.special
                ? "border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.08] via-transparent to-emerald-500/[0.04]"
                : "border-border/60 bg-card"
            )}
          >
            <div className="flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5">
              <span className="text-base">{layer.icon}</span>
              <span className="text-sm font-extrabold tracking-tight text-foreground">
                {layerIdx + 1}. {layer.layer}
              </span>
              <span className="ml-auto text-[0.7rem] font-semibold text-muted-foreground">
                {layer.withnote}
              </span>
            </div>

            <div className="grid gap-4 px-4 py-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="flex items-center justify-center rounded-xl border border-muted bg-muted/20 px-3 py-4">
                <div className="text-center">
                  <p className="mb-2 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
                    Formula
                  </p>
                  <div className="relative">
                    <Formula block>{layer.formula}</Formula>
                    {layer.formulaRef && (
                      <span className="absolute -top-1 right-0 text-[0.65rem] font-semibold tracking-wide text-muted-foreground/80">
                        {layer.formulaRef}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-2 hidden text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-muted-foreground lg:block">
                  Vacuum vs medium
                </p>
                <div className="space-y-1">
                  {layer.rows.map((row) => (
                    <div key={row.label} className="grid grid-cols-[minmax(0,0.55fr)_1fr_1fr] items-start gap-2 rounded-lg border border-border/40 bg-muted/15 px-3 py-2">
                      <span className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                        {row.label}
                      </span>
                      <span className="font-medium text-foreground/80">
                        <Formula>{row.vacuum}</Formula>
                      </span>
                      <span className="font-medium text-foreground/80">
                        <Formula>{row.medium}</Formula>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-blue-500/25 bg-blue-500/[0.06] px-5 py-4 shadow-sm dark:border-blue-500/20 dark:bg-blue-500/[0.10]">
        <div className="mb-2 flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
          <Check className="h-4 w-4" />
          Special case — vacuum
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-lg border border-muted bg-muted/25 px-2.5 py-1.5 font-medium">
            <Formula>{String.raw`\mu_r = \varepsilon_r = 1`}</Formula>
          </span>
          <ArrowDown className="h-4 w-4 text-blue-400" />
          <span className="rounded-lg border border-muted bg-muted/25 px-2.5 py-1.5 font-bold">
            <Formula>{String.raw`v = c`}</Formula>
          </span>
          <ArrowDown className="h-4 w-4 text-blue-400" />
          <span className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-2.5 py-1.5 font-extrabold">
            <Formula>{String.raw`3\times 10^8\ \text{m/s}`}</Formula>
          </span>
        </div>
        <p className="mt-2 text-[0.8rem] leading-relaxed text-foreground/70">
          Drop the relative constants to unity and the general medium formula reduces to the vacuum
          speed — the general → special-case progression in action.
        </p>
      </div>
    </div>
  );
}