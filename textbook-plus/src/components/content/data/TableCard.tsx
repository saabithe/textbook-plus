import type { ReactNode } from "react";
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

interface TableCardRow {
  cells: ReactNode[];
}

interface TableCardProps {
  headers: ReactNode[];
  rows: TableCardRow[];
  /** Explanation shown in the footer. */
  caption?: ReactNode;
  /** Optional heading shown above the table. Omit for a chromeless table. */
  title?: string;
}

/** Tables at least this wide pin their first column while scrolling. */
const STICKY_FIRST_COLUMN_FROM = 5;

/**
 * Conservative numeric literal: an optional sign, digits (with optional
 * thousands separators), an optional decimal part, and an optional unit sign.
 * Values like "−mB" or "3×10⁸" deliberately fall through to left alignment.
 */
const NUMERIC_PATTERN = /^[-+]?\d[\d,\s]*(?:\.\d+)?\s*(?:%|°)?$/;

function numericText(value: ReactNode): string | null {
  if (typeof value === "number") return String(value);
  if (typeof value !== "string") return null;
  const normalized = value.replace(/[\u2212\u2013\u2014]/g, "-").trim();
  return normalized === "" ? null : normalized;
}

function isNumericColumn(rows: TableCardRow[], columnIndex: number): boolean {
  let hasValue = false;
  for (const row of rows) {
    const value = row.cells[columnIndex];
    if (value === null || value === undefined) continue;
    const text = numericText(value);
    if (text === null) continue;
    if (!NUMERIC_PATTERN.test(text)) return false;
    hasValue = true;
  }
  return hasValue;
}

export function TableCard({ headers, rows, caption, title }: TableCardProps) {
  const pinFirstColumn = headers.length >= STICKY_FIRST_COLUMN_FROM;
  const numeric = headers.map((_, columnIndex) =>
    isNumericColumn(rows, columnIndex)
  );
  const rowCount = rows.length;
  const label = title ?? (typeof caption === "string" ? caption : "Table");

  return (
    <Card className="my-6 gap-0 overflow-hidden rounded-2xl border py-0 shadow-sm">
      {title && (
        <div className="flex items-center justify-between gap-3 border-b border-border/50 bg-muted/40 px-4 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            {title}
          </span>
          <Badge variant="secondary" className="rounded-full font-semibold">
            {rowCount} {rowCount === 1 ? "row" : "rows"}
          </Badge>
        </div>
      )}
      <Table
        label={label}
        className={cn(
          "text-sm",
          pinFirstColumn ? "w-max min-w-full" : "w-full"
        )}
      >
        <TableHeader>
          <TableRow className="border-b border-border/60 bg-muted hover:bg-muted">
            {headers.map((header, columnIndex) => (
              <TableHead
                key={columnIndex}
                className={cn(
                  "px-4 py-3 align-bottom font-semibold whitespace-normal break-words",
                  numeric[columnIndex] && "text-right",
                  pinFirstColumn && "min-w-28",
                  pinFirstColumn && columnIndex === 0 && "min-w-40",
                  pinFirstColumn &&
                    columnIndex === 0 &&
                    "sticky left-0 z-20 bg-muted shadow-[1px_0_0_var(--border)]"
                )}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="group border-b border-border/40 transition-colors last:border-0 hover:bg-muted/40"
            >
              {row.cells.map((cell, columnIndex) => (
                <TableCell
                  key={columnIndex}
                  className={cn(
                    "px-4 py-3 align-top whitespace-normal break-words text-foreground/85",
                    columnIndex === 0 && "font-semibold text-foreground/90",
                    numeric[columnIndex] && "text-right tabular-nums",
                    pinFirstColumn && "min-w-28",
                    pinFirstColumn && columnIndex === 0 && "min-w-40",
                    pinFirstColumn &&
                      columnIndex === 0 &&
                      "sticky left-0 z-10 bg-card group-hover:bg-muted shadow-[1px_0_0_var(--border)]"
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
        <CardFooter className="border-t border-border/40 bg-muted/30 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
          {caption}
        </CardFooter>
      )}
    </Card>
  );
}
