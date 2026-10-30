import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

interface TableCardRow {
  cells: ReactNode[];
}

interface TableCardProps {
  headers: ReactNode[];
  rows: TableCardRow[];
  /** Explanation shown beneath the table. */
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

/**
 * TableCard — the shadcn `Table` primitives, adopted rather than wrapped.
 *
 * Header strip = micro title + micro row count, then one hairline. Horizontal
 * rules only, no zebra, no vertical borders. The first column pins with a 1px
 * border (never a shadow). Numeric columns are right-aligned tabular-nums.
 */
export function TableCard({ headers, rows, caption, title }: TableCardProps) {
  const pinFirstColumn = headers.length >= STICKY_FIRST_COLUMN_FROM;
  const numeric = headers.map((_, columnIndex) =>
    isNumericColumn(rows, columnIndex)
  );
  const rowCount = rows.length;
  const label = title ?? (typeof caption === "string" ? caption : "Table");

  return (
    <div className="my-6 min-w-0 overflow-hidden rounded-lg border border-border bg-card">      {title && (
        <div className="flex items-baseline justify-between gap-3 border-b border-border px-4 py-3">
          <span className="t-micro">{title}</span>
          <span className="t-micro tabular-nums">
            {rowCount} {rowCount === 1 ? "ROW" : "ROWS"}
          </span>
        </div>
      )}
      <Table
        label={label}
        containerClassName="min-w-0"
        tabIndex={0}
        className={cn(pinFirstColumn ? "w-max min-w-full" : "w-full")}
      >
        <TableHeader>
          <TableRow className="bg-muted hover:bg-muted">
            {headers.map((header, columnIndex) => (
              <TableHead
                key={columnIndex}
                className={cn(
                  "h-auto py-3 align-bottom whitespace-normal break-words text-[0.6875rem] font-bold tracking-[0.08em] uppercase",
                  numeric[columnIndex] && "text-right",
                  pinFirstColumn && "min-w-28",
                  pinFirstColumn && columnIndex === 0 && "min-w-40",
                  pinFirstColumn &&
                    columnIndex === 0 &&
                    "sticky left-0 z-20 border-r border-border bg-muted"
                )}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.cells.map((cell, columnIndex) => (
                <TableCell
                  key={columnIndex}
                  className={cn(
                    "align-top whitespace-normal break-words",
                    columnIndex === 0
                      ? "font-semibold text-foreground"
                      : "text-foreground/90",
                    numeric[columnIndex] && "text-right tabular-nums",
                    pinFirstColumn && "min-w-28",
                    pinFirstColumn && columnIndex === 0 && "min-w-40",
                    pinFirstColumn &&
                      columnIndex === 0 &&
                      "sticky left-0 z-10 border-r border-border bg-card"
                  )}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {caption && (
          <TableCaption className="px-4 pb-4 text-left">
            {caption}
          </TableCaption>
        )}
      </Table>
    </div>
  );
}
