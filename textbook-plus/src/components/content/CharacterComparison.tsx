import { cn } from "@/lib/utils";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

interface CharacterComparisonRow {
  label: string;
  values: React.ReactNode[];
}

interface CharacterComparisonProps {
  characters: string[];
  rows: CharacterComparisonRow[];
  className?: string;
}

/**
 * CharacterComparison — the same table grammar as `TableCard`: hairline rows,
 * micro column labels, no chrome of its own.
 */
export function CharacterComparison({ characters, rows, className }: CharacterComparisonProps) {
  return (
    <div className={cn("my-6 overflow-hidden rounded-lg border border-border bg-card", className)}>
      <Table className="min-w-[520px]" label="Character comparison">
        <TableHeader>
          <TableRow className="bg-muted hover:bg-muted">
            <TableHead className="h-auto w-1/4 py-3 align-bottom text-[0.6875rem] font-bold tracking-[0.08em] uppercase">
              Aspect
            </TableHead>
            {characters.map((name) => (
              <TableHead
                key={name}
                className="h-auto py-3 align-bottom text-[0.6875rem] font-bold tracking-[0.08em] uppercase"
              >
                <span className="text-foreground">{name}</span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.label}>
              <TableCell className="align-top font-semibold text-muted-foreground">
                {row.label}
              </TableCell>
              {row.values.map((val, j) => (
                <TableCell key={j} className="align-top leading-[1.7] text-foreground/90">
                  {val}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
