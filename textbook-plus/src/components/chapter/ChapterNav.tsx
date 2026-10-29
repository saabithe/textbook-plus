import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ButtonGroup } from "@/components/ui/button-group";
import type { Chapter } from "@/data/chapters";

interface ChapterNavProps {
  prev: Chapter | null;
  next: Chapter | null;
  basePath?: string;
}

/**
 * Prev / next chapter — two hairline boxes (§5.3).
 * 1px border, radius 6, no shadow, micro labels, 17px titles.
 */
export function ChapterNav({ prev, next, basePath = "/chapter" }: ChapterNavProps) {
  return (
    <div className="mt-16">
      <Separator />
      <nav
        aria-label="Chapter navigation"
        className="mt-8"
      >
        <ButtonGroup className="w-full flex-col sm:flex-row">
          {prev ? (
            <Link
              href={`${basePath}/${prev.slug}`}
              data-slot="button"
              className="group flex min-w-0 flex-1 items-center gap-3 rounded-lg border border-border px-5 py-4 transition-colors duration-[120ms] ease-blueprint hover:border-rule-strong hover:bg-foreground/[0.03]"
            >
              <ChevronLeft className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-[120ms] ease-blueprint group-hover:-translate-x-0.5" />
              <span className="min-w-0">
                <span className="t-micro block">Previous</span>
                <span className="mt-1 block truncate text-[17px] font-semibold leading-snug text-foreground">
                  {prev.title}
                </span>
              </span>
            </Link>
          ) : (
            <div aria-hidden data-slot="button" className="hidden flex-1 sm:block" />
          )}

          {next ? (
            <Link
              href={`${basePath}/${next.slug}`}
              data-slot="button"
              className="group flex min-w-0 flex-1 items-center justify-end gap-3 rounded-lg border border-border px-5 py-4 text-right transition-colors duration-[120ms] ease-blueprint hover:border-rule-strong hover:bg-foreground/[0.03]"
            >
              <span className="min-w-0">
                <span className="t-micro block">Next</span>
                <span className="mt-1 block truncate text-[17px] font-semibold leading-snug text-foreground">
                  {next.title}
                </span>
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-[120ms] ease-blueprint group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <div aria-hidden data-slot="button" className="hidden flex-1 sm:block" />
          )}
        </ButtonGroup>
      </nav>
    </div>
  );
}