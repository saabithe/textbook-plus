/**
 * BiotechGlossary — the chapter's abbreviations and their meanings.
 *
 * One card shape for all ten: badge, meaning, optional distinguishing gloss.
 * Two columns on wide screens, one on phones; no grouping, because the list is
 * short enough to scan as one block.
 */

interface Term {
  term: string;
  full: string;
  gloss?: string;
}

const TERMS: Term[] = [
  { term: "IG", full: "Gene of Interest" },
  { term: "dG", full: "Desirable Gene" },
  { term: "RE", full: "Restriction Enzymes", gloss: "Molecular scissors" },
  { term: "AGE", full: "Agarose Gel Electrophoresis" },
  { term: "PCR", full: "Polymerase Chain Reaction" },
  { term: "rDNA", full: "Recombinant DNA" },
  { term: "ABRG", full: "Antibiotic Resistance Gene" },
  { term: "DNA Ligase", full: "Enzyme used to join DNA fragments" },
  { term: "Plasmid", full: "Autonomously replicating, circular, extra-chromosomal DNA" },
  { term: "DNA Polymerase", full: "Enzyme involved in replication of rDNA inside the host" },
];

export function BiotechGlossary() {
  return (
    <div className="my-5 grid grid-cols-1 gap-2 sm:grid-cols-2" role="list">
      {TERMS.map((item) => (
        <div
          key={item.term}
          className="flex items-start gap-2.5 rounded-lg border border-border bg-card px-3 py-2"
          role="listitem"
        >
          <span className="mt-px inline-flex shrink-0 items-center rounded-md border border-border bg-muted/40 px-1.5 py-0.5 text-[11px] font-bold tracking-tight text-foreground">
            {item.term}
          </span>

          <div className="min-w-0">
            <div className="text-sm font-semibold leading-snug text-foreground">{item.full}</div>
            {item.gloss && (
              <div className="text-xs leading-snug text-muted-foreground">{item.gloss}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
