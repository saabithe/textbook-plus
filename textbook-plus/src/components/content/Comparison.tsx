import { Fragment } from "react";
import { Separator } from "@/components/ui/separator";

interface ComparisonColumn {
  title: string;
  children: React.ReactNode;
}

interface ComparisonProps {
  columns: ComparisonColumn[];
}

/**
 * Comparison — no card frame. Columns sit side by side, split by one 1px
 * vertical Separator; below `sm` the rule turns horizontal and the columns
 * stack. Column labels are micro, never headings.
 */
export function Comparison({ columns }: ComparisonProps) {
  return (
    <div className="my-6 flex flex-col sm:flex-row sm:items-stretch">
      {columns.map((col, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <>
              <Separator className="my-4 sm:hidden" />
              <Separator orientation="vertical" className="mx-6 hidden sm:block" />
            </>
          )}
          <div className="min-w-0 flex-1">
            <div className="t-micro">{col.title}</div>
            <div className="mt-2 text-[1.03125rem] leading-[1.7] text-foreground/90">
              {col.children}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
