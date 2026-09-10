import { Card, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  /** Optional heading shown above the table. Omit for a chromeless table. */
  title?: string;
  /** Optional tint (e.g. subject color hex) for the header row. Defaults to neutral. */
  color?: string;
  /**
   * Which columns hold numeric data (right-aligned + tabular-nums).
   * `undefined` (default) auto-detects; pass `[]` to force text mode.
   */
  numericCols?: number[] | null;
  /** Pin the first column on wide tables. Defaults to true when 5+ columns. */
  stickyFirstCol?: boolean;
}

function isNumericCell(value: string): boolean {
  const t = value.trim();
  if (!t) return false;
  // Gap placeholder Zimmermann with numeric columns.
  if (/^[–—-]$/.test(t)) return true;
  return /^[\d\s.,+\-±×÷%°^/()]*$/.test(t) && /\d/.test(t);
}

export function TableCard({
  headers,
  rows,
  caption,
  title,
  color,
  numericCols,
  stickyFirstCol,
}: TableCardProps) {
  const colCount = headers.length;
  const wide = colCount >= 5;
  const sticky = stickyFirstCol ?? wide;

  const numeric: boolean[] = headers.map((_, j) => {
    if (numericCols !== undefined && numericCols !== null) {
      return numericCols.includes(j);
    }
    const filled = rows.map((r) => r.cells[j] ?? "").filter((c) => c.trim() !== "");
    return filled.length > 0 && filled.every(isNumericCell);
  });

  // Narrow tables hug their content instead of stranding blank space.
  const totalChars =
    headers.join("").length +
    rows.reduce((n, r) => n + r.cells.join("").length, 0);
  const narrow = !wide && colCount <= 3 && totalChars < 160;

  const rowCount = rows.length;

  return (
    <Card
      className={cn(
        "my-6 gap-0 overflow-hidden rounded-2xl border py-0 shadow-sm",
        narrow && "w-fit max-w-full"
      )}
    >
      {title && (
        <div className="flex items-center justify-between gap-3 px-4 pt-3.5 pb-1">
          <span className="text-sm font-extrabold tracking-tight text-foreground">
            {title}
          </span>
          <Badge variant="secondary" className="rounded-full font-bold">
            {rowCount} {rowCount === 1 ? "row" : "rows"}
          </Badge>
        </div>
      )}
      <div className={cn(wide && "overflow-x-auto")}>
        <Table
          className={cn(
            "text-sm tabular-nums",
            wide ? "w-max min-w-full" : narrow ? "w-auto" : "w-full"
          )}
        >
          <TableHeader>
            <TableRow
              className="border-b bg-muted/60 hover:bg-muted/60"
              style={color ? { backgroundColor: `${color}14` } : undefined}
            >
              {headers.map((h, j) => (
                <TableHead
                  key={j}
                  className={cn(
                    "h-auto px-4 py-2.5 align-bottom font-semibold whitespace-normal break-words text-foreground",
                    numeric[j] && "text-right",
                    wide && "min-w-28",
                    wide && j === 0 && "min-w-40",
                    sticky &&
                      j === 0 &&
                      "sticky left-0 z-10 bg-muted shadow-[1px_0_0_var(--border)]"
                  )}
                  style={
                    sticky && j === 0 && color
                      ? { backgroundColor: `${color}26` }
                      : undefined
                  }
                >
                  {h}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={i}
                className={cn(
                  "border-b border-border/40 last:border-0",
                  sticky
                    ? "odd:bg-card even:bg-muted"
                    : "odd:bg-transparent even:bg-muted/40",
                  "hover:bg-muted/60"
                )}
              >
                {row.cells.map((cell, j) => (
                  <TableCell
                    key={j}
                    className={cn(
                      "px-4 py-2.5 align-top whitespace-normal break-words text-muted-foreground",
                      j === 0 && "font-semibold text-foreground/90",
                      numeric[j] && "text-right",
                      wide && "min-w-28",
                      wide && j === 0 && "min-w-40",
                      sticky &&
                        j === 0 &&
                        "sticky left-0 z-10 shadow-[1px_0_0_var(--border)]",
                      sticky && j === 0 && (i % 2 === 1 ? "bg-muted" : "bg-card")
                    )}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {caption && (
        <CardFooter className="border-t border-border/40 bg-muted/30 px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
          {caption}
        </CardFooter>
      )}
    </Card>
  );
}
