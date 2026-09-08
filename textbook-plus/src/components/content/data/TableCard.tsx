import { Card, CardFooter } from "@/components/ui/card";
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
    <Card className="my-6 gap-0 overflow-hidden border border-emerald-500/20 py-0 shadow-sm">
      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-emerald-500/15 bg-emerald-500/[0.06] dark:bg-emerald-500/[0.10]">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="text-xs font-bold tracking-[0.12em] text-emerald-700 dark:text-emerald-400 uppercase">Data</span>
        <span className="text-xs text-emerald-700/60 dark:text-emerald-400/60 ml-1">— table</span>
      </div>
      <Table className="text-sm">
        <TableHeader>
          <TableRow className="border-b border-emerald-500/15 bg-emerald-500/[0.06] hover:bg-emerald-500/[0.06] dark:bg-emerald-500/[0.08] dark:hover:bg-emerald-500/[0.08]">
            {headers.map((h, i) => (
              <TableHead key={i} className="h-auto px-4 py-2.5 font-semibold whitespace-normal text-emerald-900/80 dark:text-emerald-100/90">
                {h}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i} className="border-b border-border/20 last:border-0 odd:bg-background even:bg-muted/30 hover:bg-emerald-500/[0.04]">
              {row.cells.map((cell, j) => (
                <TableCell key={j} className="px-4 py-2 whitespace-normal text-muted-foreground">
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
