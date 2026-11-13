import type { ReactNode } from "react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type ReactionRowTone = "default" | "mild" | "strong" | "resistant";

export interface ReactionTableRow {
  /** One entry per header. */
  cells: ReactNode[];
  /** KaTeX equation printed on its own band under the row. */
  equation?: string;
  /** Row wash: mild / strong oxidation, or a resistant outcome. */
  tone?: ReactionRowTone;
  /** Chip under the first cell, e.g. "Preferred". */
  badge?: ReactNode;
}

interface ReactionTableProps {
  /** Heading strip. */
  title?: ReactNode;
  headers: ReactNode[];
  rows: ReactionTableRow[];
  /** Line printed under the table. */
  caption?: ReactNode;
}

const ROW_TONE: Record<ReactionRowTone, string> = {
  default: "",
  mild: "bg-[color-mix(in_oklab,var(--subject-chemistry)_5%,transparent)] hover:bg-[color-mix(in_oklab,var(--subject-chemistry)_8%,transparent)]",
  strong:
    "bg-[color-mix(in_oklab,var(--subject-chemistry)_11%,transparent)] hover:bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)]",
  resistant: "bg-muted/45 hover:bg-muted/55",
};

const EQUATION_TONE: Record<ReactionRowTone, string> = {
  default: "bg-muted/30",
  mild: "bg-[color-mix(in_oklab,var(--subject-chemistry)_4%,transparent)]",
  strong: "bg-[color-mix(in_oklab,var(--subject-chemistry)_8%,transparent)]",
  resistant: "bg-muted/30",
};

/**
 * ReactionTable — a reaction comparison with per-row meaning the plain table
 * primitive cannot carry: a wash for mild versus strong conditions, a muted
 * wash for a resistant outcome, a badge for a preferred route, and an equation
 * band under any row that needs one.
 */
export function ReactionTable({ title, headers, rows, caption }: ReactionTableProps) {
  const label = typeof title === "string" ? title : "Reaction comparison";

  return (
    <section className="my-6 min-w-0 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
          <span className="t-micro">{title}</span>
          <span className="t-micro tabular-nums">{rows.length} ROWS</span>
        </div>
      )}

      <Table label={label} containerClassName="min-w-0" tabIndex={0}>
        <TableHeader>
          <TableRow className="bg-muted hover:bg-muted">
            {headers.map((header, index) => (
              <TableHead
                key={index}
                className="h-auto py-2.5 align-bottom text-[0.66rem] leading-tight tracking-[0.08em] whitespace-normal"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((row, rowIndex) => {
            const tone = row.tone ?? "default";

            return [
              <TableRow key={`row-${rowIndex}`} className={cn(ROW_TONE[tone])}>
                {row.cells.map((cell, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    className={cn(
                      "py-2.5 align-top text-sm leading-relaxed",
                      cellIndex === 0
                        ? "font-extrabold text-foreground"
                        : "text-foreground/90",
                    )}
                  >
                    {cell}
                    {cellIndex === 0 && row.badge && (
                      <span className="mt-1 block">
                        <span className="inline-block rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_16%,transparent)] px-1.5 py-0.5 text-[0.62rem] font-extrabold uppercase tracking-[0.06em] text-[var(--subject-chemistry)]">
                          {row.badge}
                        </span>
                      </span>
                    )}
                  </TableCell>
                ))}
              </TableRow>,

              row.equation ? (
                <TableRow
                  key={`eq-${rowIndex}`}
                  className={cn("border-0 hover:bg-transparent", EQUATION_TONE[tone])}
                >
                  <TableCell
                    colSpan={headers.length}
                    className="py-2 text-center text-[0.92rem] text-foreground"
                  >
                    <div className="overflow-x-auto">
                      <Formula>{row.equation}</Formula>
                    </div>
                  </TableCell>
                </TableRow>
              ) : null,
            ];
          })}
        </TableBody>

        {caption && (
          <TableCaption className="px-4 pb-4 text-left">{caption}</TableCaption>
        )}
      </Table>
    </section>
  );
}
