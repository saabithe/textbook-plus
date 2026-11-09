import { Formula } from "@/components/content/Formula";

/**
 * StabilityConstantCard — the compact definition card, with the equilibrium and
 * the stability constant held together in one mathematical panel.
 */
export function StabilityConstantCard() {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <span className="t-micro">Stability of a complex</span>
      </div>

      <div className="p-4">
        <p className="text-sm leading-relaxed text-foreground/90">
          Stability of a complex in solution refers to the degree of association between the metal
          ion and ligands in the state of equilibrium.
        </p>

        <p className="mt-2 text-sm leading-relaxed text-foreground/90">
          The stability of a complex is quantitatively expressed by the magnitude of its{" "}
          <strong>stability or formation constant</strong> (β).
        </p>

        <div className="mt-4 rounded-md border border-border bg-muted/30 px-4 py-3">
          <p className="t-micro">Equilibrium</p>
          <Formula block>{String.raw`M + 4L \rightleftharpoons [ML_4]`}</Formula>

          <p className="t-micro mt-1">Stability constant</p>
          <Formula block>{String.raw`\beta = \frac{[ML_4]}{[M][L]^4}`}</Formula>
        </div>
      </div>
    </div>
  );
}
