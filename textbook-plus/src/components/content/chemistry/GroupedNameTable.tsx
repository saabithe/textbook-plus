import type { ReactNode } from "react";

interface GroupedNameRow {
  structure: ReactNode;
  common: string;
  iupac: ReactNode;
}

interface GroupedNameGroup {
  label: string;
  rows: GroupedNameRow[];
}

interface GroupedNameTableProps {
  /** Flat rows, used when the list is not split into labelled groups. */
  rows?: GroupedNameRow[];
  /** Grouped rows, each group opening with a band across all three columns. */
  groups?: GroupedNameGroup[];
  /** Which name column carries the weight. Defaults to the IUPAC column. */
  emphasis?: "iupac" | "common";
}

function NameRow({
  row,
  emphasis,
}: {
  row: GroupedNameRow;
  emphasis: "iupac" | "common";
}) {
  return (
    <tr className="border-b border-border/60 last:border-0">
      <td className="whitespace-nowrap px-4 py-2.5 font-semibold tabular-nums text-foreground">
        {row.structure}
      </td>
      <td
        className={
          emphasis === "common"
            ? "px-4 py-2.5 font-bold text-foreground"
            : "px-4 py-2.5 text-foreground/90"
        }
      >
        {row.common}
      </td>
      <td
        className={
          emphasis === "common"
            ? "px-4 py-2.5 text-foreground/90"
            : "px-4 py-2.5 font-bold text-foreground"
        }
      >
        {row.iupac}
      </td>
    </tr>
  );
}

/**
 * GroupedNameTable — one three-column table, either flat or split by labelled
 * group bands so related members stay visually separate while sharing the same
 * structure / common / IUPAC columns. One name column is set bold — the IUPAC
 * column by default, the common column where familiar names are the point. The
 * table scrolls sideways with a fixed minimum width on a phone.
 */
export function GroupedNameTable({
  rows,
  groups,
  emphasis = "iupac",
}: GroupedNameTableProps) {
  const rowCount =
    rows?.length ?? groups?.reduce((total, group) => total + group.rows.length, 0) ?? 0;

  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-3 border-b border-border px-4 py-3">
        <span className="t-micro">Structure · common · IUPAC</span>
        <span className="t-micro tabular-nums">
          {rowCount} {rowCount === 1 ? "ROW" : "ROWS"}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-sm">
          <thead>
            <tr className="bg-muted text-left">
              <th className="px-4 py-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                Compound structure
              </th>
              <th className="px-4 py-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                Common name
              </th>
              <th className="px-4 py-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                IUPAC name
              </th>
            </tr>
          </thead>

          {groups
            ? groups.map((group) => (
                <tbody key={group.label}>
                  <tr>
                    <td colSpan={3} className="border-y border-border bg-muted/40 px-4 py-1.5">
                      <span className="t-micro">{group.label}</span>
                    </td>
                  </tr>
                  {group.rows.map((row, index) => (
                    <NameRow key={index} row={row} emphasis={emphasis} />
                  ))}
                </tbody>
              ))
            : (
                <tbody>
                  {(rows ?? []).map((row, index) => (
                    <NameRow key={index} row={row} emphasis={emphasis} />
                  ))}
                </tbody>
              )}
        </table>
      </div>
    </section>
  );
}
