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
    <div className="rounded-xl border border-border/60 bg-background overflow-hidden my-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/60 bg-muted/30">
              {headers.map((h, i) => (
                <th key={i} className="text-left font-semibold px-4 py-2.5 text-foreground">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-border/30 last:border-0">
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
        <div className="px-4 py-2 border-t border-border/30 text-xs text-muted-foreground">
          {caption}
        </div>
      )}
    </div>
  );
}
