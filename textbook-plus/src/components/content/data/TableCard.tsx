import { Card, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

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
    <Card className="my-6 gap-0 overflow-hidden rounded-3xl border border-emerald-500/25 py-0 shadow-md shadow-emerald-500/5">
      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-emerald-500/20 bg-emerald-500/[0.10] dark:bg-emerald-500/[0.16]">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="text-xs font-extrabold tracking-[0.14em] text-emerald-700 dark:text-emerald-400 uppercase">Data</span>
        <span className="text-xs text-emerald-700/60 dark:text-emerald-400/60 ml-1">— table</span>
      </div>
      <Table className="table-fixed text-sm">
        <TableHeader>
          <TableRow className="border-b border-emerald-500/20 bg-emerald-500/[0.12] hover:bg-emerald-500/[0.12] dark:bg-emerald-500/[0.14] dark:hover:bg-emerald-500/[0.14]">
            {headers.map((h, i) => (
              <TableHead key={i} className="h-auto min-w-0 px-4 py-2.5 align-top font-semibold whitespace-normal break-words text-emerald-900/80 dark:text-emerald-100/90">
                {h}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i} className="border-b border-border/20 last:border-0 odd:bg-background even:bg-muted/30 hover:bg-emerald-500/[0.04]">
              {row.cells.map((cell, j) => (
                <TableCell
                  key={j}
                  className={cn(
                    "min-w-0 px-4 py-2 align-top whitespace-normal break-words text-muted-foreground",
                    j === 0 && "font-medium text-foreground/90"
                  )}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {caption && (
        <CardFooter className="border-t border-emerald-500/10 bg-muted/20 px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
          {caption}
        </CardFooter>
      )}
    </Card>
  );
}
