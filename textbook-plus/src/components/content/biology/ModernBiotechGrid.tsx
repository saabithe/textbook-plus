/**
 * ModernBiotechGrid — GMOs as the central concept, then the four other
 * processes the restricted sense of biotechnology includes. No description is
 * invented: only the IVF card carries the note's own gloss.
 */

const PROCESSES = [
  { title: "In vitro fertilisation (IVF)", gloss: "Test-tube baby" },
  { title: "Gene synthesis and use" },
  { title: "DNA vaccines" },
  { title: "Correction of gene defects" },
];

export function ModernBiotechGrid() {
  return (
    <div className="my-5">
      <div className="rounded-xl border-2 border-teal-600/35 bg-teal-50/50 px-4 py-3.5 dark:bg-teal-950/25">
        <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
          Central concept
        </div>
        <div className="mt-1 text-base font-semibold tracking-tight text-foreground">
          Genetically Modified Organisms (GMOs)
        </div>
      </div>

      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESSES.map((item) => (
          <div key={item.title} className="flex flex-col rounded-lg border border-border bg-card px-3 py-2.5">
            <div className="text-sm font-medium leading-snug text-foreground">{item.title}</div>
            {item.gloss && (
              <div className="mt-0.5 text-xs leading-snug text-muted-foreground">&ldquo;{item.gloss}&rdquo;</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
