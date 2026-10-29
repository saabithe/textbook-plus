import { Layers, ArrowDown, Check } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

interface CompareRow {
  label: string;
  vacuum: React.ReactNode;
  medium: React.ReactNode;
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
      { label: "Permittivity", vacuum: <Formula>{String.raw`\varepsilon = \varepsilon_0`}</Formula>, medium: <Formula>{String.raw`\varepsilon = \varepsilon_0\varepsilon_r`}</Formula> },
      { label: "Permeability", vacuum: <Formula>{String.raw`\mu = \mu_0`}</Formula>, medium: <Formula>{String.raw`\mu = \mu_0\mu_r`}</Formula> },
      { label: "Speed", vacuum: <Formula>{String.raw`c = 3\times 10^8\ \text{m/s}`}</Formula>, medium: <Formula>{String.raw`v = c/\sqrt{\mu_r\varepsilon_r}`}</Formula> },
    ],
  },
  {
    layer: "Material medium",
    icon: "💧",
    formula: String.raw`v = \frac{1}{\sqrt{\mu\varepsilon}}`,
    formulaRef: "(8.11)",
    withnote: "Replace the vacuum constants with the medium's own ε and μ.",
    rows: [
      { label: "What changes", vacuum: <><em>c</em> depends only on μ₀, ε₀</>, medium: <><em>v</em> depends on μ, ε of the medium</> },
      { label: "Constants", vacuum: <><Formula>{String.raw`\mu_0, \varepsilon_0`}</Formula> — fixed in free space</>, medium: <><Formula>{String.raw`\mu, \varepsilon`}</Formula> — set by the material</> },
      { label: "Typical speed", vacuum: <Formula>{String.raw`3\times 10^8\ \text{m/s}`}</Formula>, medium: <Formula>{String.raw`v = c/\sqrt{\mu_r\varepsilon_r}`}</Formula> },
    ],
  },
  {
    layer: "Relative constants",
    icon: "🧮",
    formula: String.raw`v = \frac{c}{\sqrt{\mu_r\varepsilon_r}}`,
    withnote: "Relative permeability μᵣ and relative permittivity εᵣ measure the medium against vacuum.",
    rows: [
      { label: "What they mean", vacuum: <Formula>{String.raw`\mu_r = \mu/\mu_0`}</Formula>, medium: <Formula>{String.raw`\varepsilon_r = \varepsilon/\varepsilon_0`}</Formula> },
      { label: "Free space", vacuum: <Formula>{String.raw`\mu_r = \varepsilon_r = 1`}</Formula>, medium: <Formula>{String.raw`\mu_r, \varepsilon_r > 1`}</Formula> },
      { label: "Speed", vacuum: <Formula>{String.raw`v = c`}</Formula>, medium: <Formula>{String.raw`v < c`}</Formula> },
    ],
    special: true,
  },
];

export function SpeedLayers() {
  return (
    <div className="my-6">
      <div className="t-micro mb-3 flex items-center gap-2">
        <Layers className="h-4 w-4" />
        <span>Where does the speed come from?</span>
      </div>

      <div className="space-y-4">
        {LAYERS.map((layer, layerIdx) => (
          <div
            key={layer.layer}
            className={cn(
              "overflow-hidden rounded-lg border border-border bg-card",
              layer.special && "border-l-[3px] border-l-foreground"
            )}
          >
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 border-b border-border bg-muted px-4 py-2.5">
              <span className="text-base">{layer.icon}</span>
              <span className="text-sm font-semibold text-foreground">
                <span className="mr-1.5 tabular-nums text-muted-foreground">{String(layerIdx + 1).padStart(2, "0")}</span>
                {layer.layer}
              </span>
              <span className="ml-auto text-[0.7rem] leading-snug text-muted-foreground">
                {layer.withnote}
              </span>
            </div>

            <div className="grid gap-4 px-4 py-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="flex items-center justify-center rounded-lg border border-border bg-muted/40 px-3 py-4">
                <div className="text-center">
                  <p className="t-micro mb-2">
                    Formula
                  </p>
                  <div className="relative">
                    <Formula block>{layer.formula}</Formula>
                    {layer.formulaRef && (
                      <span className="absolute -top-1 right-0 text-[0.65rem] font-medium tabular-nums text-muted-foreground">
                        {layer.formulaRef}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <p className="t-micro mb-2 hidden lg:block">
                  Vacuum vs medium
                </p>
                <div className="mb-1 grid grid-cols-2 gap-x-2 px-3 lg:hidden">
                  <span className="t-micro">Vacuum</span>
                  <span className="t-micro">Medium</span>
                </div>
                <div className="space-y-1">
                  {layer.rows.map((row) => (
                    <div key={row.label} className="grid grid-cols-2 items-start gap-x-2 gap-y-1.5 border-b border-border px-3 py-2.5 last:border-b-0 lg:grid-cols-[minmax(0,0.55fr)_1fr_1fr]">
                      <span className="col-span-2 text-[0.7rem] font-semibold text-muted-foreground lg:col-span-1">
                        {row.label}
                      </span>
                      <span className="text-foreground">
                        {row.vacuum}
                      </span>
                      <span className="text-foreground">
                        {row.medium}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-border bg-muted/40 border-l-[3px] border-l-foreground px-5 py-4">
        <div className="t-micro mb-2 flex items-center gap-2">
          <Check className="h-4 w-4" />
          Special case — vacuum
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-[3px] border border-border bg-card px-2.5 py-1.5">
            <Formula>{String.raw`\mu_r = \varepsilon_r = 1`}</Formula>
          </span>
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
          <span className="rounded-[3px] border border-border bg-card px-2.5 py-1.5 font-bold">
            <Formula>{String.raw`v = c`}</Formula>
          </span>
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
          <span className="rounded-[3px] border border-foreground px-2.5 py-1.5 font-bold">
            <Formula>{String.raw`3\times 10^8\ \text{m/s}`}</Formula>
          </span>
        </div>
        <p className="mt-2 text-[0.8rem] leading-relaxed text-foreground">
          Drop the relative constants to unity and the general medium formula reduces to the vacuum
          speed — the general → special-case progression in action.
        </p>
      </div>
    </div>
  );
}
