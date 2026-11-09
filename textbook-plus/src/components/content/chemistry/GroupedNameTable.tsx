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
  groups: GroupedNameGroup[];
}

/**
 * GroupedNameTable — one three-column table split by labelled group bands, so
 * monohydric and polyhydric members stay visually separate while sharing the
 * same structure / common / IUPAC columns.
 */
export function GroupedNameTable({ groups }: GroupedNameTableProps) {
  const rowCount = groups.reduce((total, group) => total + group.rows.length, 0);

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

          {groups.map((group) => (
            <tbody key={group.label}>
              <tr>
                <td colSpan={3} className="border-y border-border bg-muted/40 px-4 py-1.5">
                  <span className="t-micro">{group.label}</span>
                </td>
              </tr>
              {group.rows.map((row) => (
                <tr
                  key={row.common}
                  className="border-b border-border/60 last:border-0"
                >
                  <td className="whitespace-nowrap px-4 py-2.5 font-semibold tabular-nums text-foreground">
                    {row.structure}
                  </td>
                  <td className="px-4 py-2.5 text-foreground/90">{row.common}</td>
                  <td className="px-4 py-2.5 font-bold text-foreground">{row.iupac}</td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
}
