"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface SortableRow {
  rank?: number;
  cells: string[];
}

interface SortableTableProps {
  headers: string[];
  rows: SortableRow[];
  sortBy?: number;
  caption?: string;
}

export function SortableTable({ headers, rows, sortBy = 0, caption }: SortableTableProps) {
  const [sortCol, setSortCol] = useState(sortBy);
  const [sortAsc, setSortAsc] = useState(true);

  const sorted = [...rows].sort((a, b) => {
    const aVal = a.cells[sortCol] || "";
    const bVal = b.cells[sortCol] || "";
    const cmp = aVal.localeCompare(bVal, undefined, { numeric: true });
    return sortAsc ? cmp : -cmp;
  });

  const toggleSort = (col: number) => {
    if (col === sortCol) setSortAsc(!sortAsc);
    else { setSortCol(col); setSortAsc(true); }
  };

  return (
    <div className="rounded-xl border border-border/60 bg-background overflow-hidden my-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/60 bg-muted/30">
              {headers.map((h, i) => (
                <th
                  key={i}
                  onClick={() => toggleSort(i)}
                  className="text-left font-semibold px-4 py-2.5 text-foreground cursor-pointer hover:bg-muted/60 select-none"
                >
                  <span className="inline-flex items-center gap-1">
                    {h}
                    {sortCol === i && (
                      sortAsc ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row, i) => (
              <tr key={i} className="border-b border-border/30 last:border-0">
                {row.cells.map((cell, j) => (
                  <td key={j} className="px-4 py-2 text-muted-foreground">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <div className="px-4 py-2 border-t border-border/30 text-xs text-muted-foreground">{caption}</div>
      )}
    </div>
  );
}
