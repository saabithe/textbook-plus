import type { ReactNode } from "react";

interface CfseInfoRow {
  label: string;
  value: ReactNode;
}

interface CfseStep {
  label: ReactNode;
  detail: ReactNode;
}

interface CfseCalculationCardProps {
  complex: ReactNode;
  info: CfseInfoRow[];
  steps: CfseStep[];
  resultLabel?: string;
  result: ReactNode;
}

/**
 * CfseCalculationCard — the example in two halves: complex information on the
 * left, step-by-step substitution on the right, the final CFSE lifted into an
 * emerald result panel.
 */
export function CfseCalculationCard({
  complex,
  info,
  steps,
  resultLabel = "CFSE",
  result,
}: CfseCalculationCardProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-border px-4 py-3">
        <span className="t-micro">CFSE calculation</span>
        <span className="text-base font-extrabold tracking-tight text-foreground">{complex}</span>
      </div>

      <div className="grid sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="border-b border-border p-4 sm:border-b-0 sm:border-r">
          <p className="t-micro">Complex information</p>
          <dl className="mt-3 space-y-2.5">
            {info.map((row) => (
              <div key={row.label}>
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
                  {row.label}
                </dt>
                <dd className="mt-0.5 text-sm font-semibold text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="p-4">
          <p className="t-micro">Step-by-step calculation</p>
          <ol className="mt-3 space-y-2.5">
            {steps.map((step, index) => (
              <li key={index} className="flex gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] border border-border bg-muted text-[0.65rem] font-bold text-foreground">
                  {index + 1}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">{step.label}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-foreground/80">
                    {step.detail}
                  </span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-4 rounded-md border border-ok/40 bg-ok/10 px-3 py-2.5">
            <p className="t-micro text-ok">{resultLabel}</p>
            <p className="mt-1 text-base font-extrabold text-foreground">{result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
