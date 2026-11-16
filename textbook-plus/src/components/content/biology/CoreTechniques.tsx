/**
 * CoreTechniques — the two techniques that enabled modern biotechnology, side
 * by side and equal in weight. Each card: name, central mechanism, purpose.
 * Accent colour is the only difference between them (indigo = genetic
 * engineering, teal = bioprocess engineering), and that accent is reused by
 * their individual sections below.
 */

const TECHNIQUES = [
  {
    n: "1",
    name: "Genetic engineering",
    accent: "#6366f1",
    mechanism: "Modify the chemistry of genetic material (DNA and RNA) and introduce it into a host organism.",
    purpose: "Alter the phenotype of the host organism.",
  },
  {
    n: "2",
    name: "Bioprocess engineering",
    accent: "#0d9488",
    mechanism: "Maintain a sterile (microbial contamination-free) environment during chemical engineering processes.",
    purpose: "Grow only the desired microbe or eukaryotic cell, in large quantities, to manufacture biotechnological products.",
  },
];

export function CoreTechniques() {
  return (
    <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {TECHNIQUES.map((technique) => (
        <article
          key={technique.name}
          className="flex h-full flex-col rounded-xl border border-border bg-card p-4"
          style={{ borderTopWidth: 3, borderTopColor: technique.accent }}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-border bg-muted/40 text-[11px] font-bold text-foreground">
              {technique.n}
            </span>
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Core technique
            </div>
          </div>

          <div className="mt-2 text-base font-semibold tracking-tight text-foreground">{technique.name}</div>

          <div className="mt-3">
            <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Mechanism</div>
            <div className="mt-0.5 text-sm leading-relaxed text-foreground">{technique.mechanism}</div>
          </div>

          <div className="mt-auto pt-3">
            <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Purpose</div>
            <div className="mt-0.5 text-sm leading-relaxed text-foreground">{technique.purpose}</div>
          </div>
        </article>
      ))}
    </div>
  );
}
