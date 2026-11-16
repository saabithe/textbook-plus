import { cn } from "@/lib/utils";

/**
 * EnzymeToolkitTable — one reference for every enzyme and reagent the chapter
 * uses, from opening a cell to joining the insert.
 *
 * Rows keep the note's four columns (stage, function, enzyme/reagent, target) and
 * are gathered into three groups with quiet dividers rather than row colour. On
 * phones each row becomes a card with the enzyme as the headline.
 */

interface Row {
  stage: string;
  goal: string;
  agent: string;
  target: string;
}

interface Group {
  title: string;
  note: string;
  rows: Row[];
}

const GROUPS: Group[] = [
  {
    title: "Cell lysis",
    note: "Opening the wall and membrane",
    rows: [
      {
        stage: "Cell lysis",
        goal: "Bacterial wall degradation",
        agent: "Lysozyme",
        target: "Bacterial peptidoglycan",
      },
      {
        stage: "Cell lysis",
        goal: "Plant wall degradation",
        agent: "Cellulase",
        target: "Cellulose",
      },
      {
        stage: "Cell lysis",
        goal: "Fungal wall degradation",
        agent: "Chitinase",
        target: "Chitin",
      },
    ],
  },
  {
    title: "Purification & precipitation",
    note: "Clearing the other macromolecules, then lifting the DNA out",
    rows: [
      {
        stage: "Purification",
        goal: "RNA breakdown",
        agent: "RNase",
        target: "Cellular RNA",
      },
      {
        stage: "Purification",
        goal: "Protein breakdown",
        agent: "Protease",
        target: "Histones & cellular proteins",
      },
      {
        stage: "Precipitation",
        goal: "DNA isolation",
        agent: "Chilled ethanol",
        target: "Purified DNA strands",
      },
    ],
  },
  {
    title: "DNA manipulation",
    note: "Cutting the DNA, then sealing the insert in",
    rows: [
      {
        stage: "Cleavage",
        goal: "Specific DNA cutting",
        agent: "Restriction endonuclease",
        target: "Target DNA & vector DNA",
      },
      {
        stage: "Ligation",
        goal: "Insert–vector joining",
        agent: "DNA ligase",
        target: "Phosphodiester backbone",
      },
    ],
  },
];

const HIGHLIGHTED = new Set(["RNase"]);

export function EnzymeToolkitTable() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      {/* column headings — wide screens only */}
      <div className="hidden grid-cols-[7.5rem_1fr_1fr_1fr] gap-px border-b border-border bg-muted/40 text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground sm:grid">
        <div className="px-3 py-2">Stage</div>
        <div className="px-3 py-2">Function / goal</div>
        <div className="px-3 py-2">Enzyme / reagent</div>
        <div className="px-3 py-2">Target</div>
      </div>

      {GROUPS.map((group) => (
        <div key={group.title}>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 border-y border-border bg-muted/25 px-3 py-1.5 first:border-t-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-foreground">{group.title}</span>
            <span className="text-[10px] text-muted-foreground">{group.note}</span>
          </div>

          {group.rows.map((row) => (
            <div
              key={`${row.stage}-${row.agent}`}
              className="grid grid-cols-2 gap-x-3 gap-y-1.5 border-b border-border px-3 py-2.5 last:border-b-0 sm:grid-cols-[7.5rem_1fr_1fr_1fr] sm:gap-0 sm:px-0 sm:py-0"
            >
              <Field label="Stage" className="col-span-2 sm:col-auto sm:px-3 sm:py-2">
                <span className="text-[10px] font-medium uppercase tracking-[0.06em] text-muted-foreground">
                  {row.stage}
                </span>
              </Field>

              <Field label="Function" className="col-span-2 sm:col-auto sm:px-3 sm:py-2">
                <span className="text-xs leading-snug text-foreground">{row.goal}</span>
              </Field>

              <Field label="Enzyme / reagent" className="sm:col-auto sm:px-3 sm:py-2">
                <span
                  className={cn(
                    "inline-flex rounded border px-1.5 py-0.5 text-xs font-semibold",
                    HIGHLIGHTED.has(row.agent)
                      ? "border-violet-600/35 bg-violet-50 text-violet-900 dark:bg-violet-950/30 dark:text-violet-300"
                      : "border-border bg-muted/40 text-foreground",
                  )}
                >
                  {row.agent}
                </span>
              </Field>

              <Field label="Target" className="sm:col-auto sm:px-3 sm:py-2">
                <span className="text-xs leading-snug text-muted-foreground">{row.target}</span>
              </Field>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Field({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground sm:hidden">
        {label}
      </div>
      {children}
    </div>
  );
}
