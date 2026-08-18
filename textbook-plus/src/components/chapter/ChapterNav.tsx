import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Chapter } from "@/data/chapters";

interface ChapterNavProps {
  prev: Chapter | null;
  next: Chapter | null;
}

export function ChapterNav({ prev, next }: ChapterNavProps) {
  return (
    <nav className="flex items-center justify-between gap-4 pt-12 mt-12 border-t border-border/40">
      {prev ? (
        <Link
          href={`/chapter/${prev.slug}`}
          className={cn(
            "group flex flex-1 items-center gap-3 rounded-xl border border-border/60 px-4 py-3 transition-all duration-200",
            "hover:border-border hover:bg-muted/50 hover:shadow-sm"
          )}
        >
          <ChevronLeft className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Previous</p>
            <p className="text-sm font-medium truncate">{prev.title}</p>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={`/chapter/${next.slug}`}
          className={cn(
            "group flex flex-1 items-center justify-end gap-3 rounded-xl border border-border/60 px-4 py-3 text-right transition-all duration-200",
            "hover:border-border hover:bg-muted/50 hover:shadow-sm"
          )}
        >
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Next</p>
            <p className="text-sm font-medium truncate">{next.title}</p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
