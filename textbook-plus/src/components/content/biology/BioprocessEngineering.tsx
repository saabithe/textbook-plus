/**
 * BioprocessEngineering — definition first, with "sterile" as the loudest word
 * on the page, then the two work areas: what the cells need to grow, and what
 * the process manufactures.
 */

const PURPOSE = [
  "Enable the growth of only the desired microbe or eukaryotic cell.",
  "Grow them in large quantities.",
  "Manufacture biotechnological products.",
];

const REQUIREMENTS = ["Temperature", "pH", "Nutrients"];

const PRODUCTS = ["Antibiotics", "Vaccines", "Enzymes", "Insulin"];

export function BioprocessEngineering() {
  return (
    <div className="my-6 space-y-3">
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="t-micro">Definition</div>

        <div className="mt-2 text-[1.0625rem] leading-[1.7] text-foreground">
          Maintaining a{" "}
          <span className="rounded-[4px] bg-teal-100 px-1.5 py-0.5 text-base font-bold text-teal-900 dark:bg-teal-900/50 dark:text-teal-100">
            sterile
          </span>{" "}
          (microbial contamination-free) environment during chemical engineering processes.
        </div>

        <div className="mt-4 border-t border-border pt-3">
          <div className="t-micro">Purpose</div>
          <div className="mt-2 space-y-1.5">
            {PURPOSE.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" aria-hidden />
                <div className="text-sm leading-snug text-foreground">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="t-micro">Growth requirements</div>
        <div className="mt-1.5 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {REQUIREMENTS.map((requirement) => (
            <div key={requirement} className="rounded-lg border border-border bg-card px-3 py-2">
              <div className="text-sm font-medium leading-snug text-foreground">{requirement}</div>
              <div className="mt-0.5 text-xs leading-snug text-muted-foreground">Optimum growth conditions</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="t-micro">Products manufactured</div>
        <div className="mt-1.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div
              key={product}
              className="flex items-center rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm font-medium text-foreground"
            >
              {product}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
