import { ArrowLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
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

export function CharacterComparison({ characters, rows, className }: CharacterComparisonProps) {
  return (
    <Card className={cn("my-6 gap-0 overflow-hidden border border-border/50 py-0", className)}>
      {/* Header */}
      <div className="flex items-center gap-2 px-6 py-3 bg-muted/40 border-b border-border/40">
        <ArrowLeftRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-semibold text-foreground">Character Comparison</span>
      </div>

      {/* Table */}
      <Table className="text-[0.95rem]">
        <TableHeader>
          <TableRow className="border-b border-border/40 hover:bg-transparent">
            <TableHead className="h-auto w-1/4 px-6 py-3 text-xs font-semibold uppercase tracking-wider whitespace-normal text-muted-foreground">
              Aspect
            </TableHead>
            {characters.map((name) => (
              <TableHead
                key={name}
                className="h-auto px-6 py-3 text-sm font-bold whitespace-normal text-foreground"
              >
                {name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.label}
              className={cn(
                "border-b border-border/30 last:border-b-0 hover:bg-transparent",
                i % 2 === 0 ? "bg-card" : "bg-muted/10"
              )}
            >
              <TableCell className="px-6 py-3.5 text-sm font-semibold whitespace-nowrap align-top text-foreground/70">
                {row.label}
              </TableCell>
              {row.values.map((val, j) => (
                <TableCell key={j} className="px-6 py-3.5 leading-[1.75] align-top whitespace-normal text-foreground/85">
                  {val}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
