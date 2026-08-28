interface Row {
  cells: string[];
}

interface TableCardProps {
  headers: string[];
  rows: Row[];
  caption?: string;
}

export function TableCard({ headers, rows, caption }: TableCardProps) {
  return (
    <div className="rounded-xl border border-emerald-500/20 bg-card overflow-hidden my-6 shadow-sm">
      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-emerald-500/15 bg-emerald-500/[0.06] dark:bg-emerald-500/[0.10]">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="text-[10px] font-bold tracking-[0.12em] text-emerald-700 dark:text-emerald-400 uppercase">Data</span>
        <span className="text-[11px] text-emerald-700/60 dark:text-emerald-400/60 ml-1">— table</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-emerald-500/15 bg-emerald-500/[0.06] dark:bg-emerald-500/[0.08]">
              {headers.map((h, i) => (
                <th key={i} className="text-left font-semibold px-4 py-2.5 text-emerald-900/80 dark:text-emerald-100/90">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-border/20 last:border-0 odd:bg-background even:bg-muted/30 hover:bg-emerald-500/[0.04] transition-colors">
                {row.cells.map((cell, j) => (
                  <td key={j} className="px-4 py-2 text-muted-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <div className="px-4 py-2.5 border-t border-emerald-500/10 bg-muted/20 text-xs leading-relaxed text-muted-foreground">
          {caption}
        </div>
      )}
    </div>
  );
}
