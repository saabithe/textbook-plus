import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Chapter } from "@/data/chapters";

interface ChapterNavProps {
  prev: Chapter | null;
  next: Chapter | null;
  basePath?: string;
}

export function ChapterNav({ prev, next, basePath = "/chapter" }: ChapterNavProps) {
  return (
    <nav className="flex items-center justify-between gap-4 pt-12 mt-12 border-t border-border/40">
      {prev ? (
        <Link href={`${basePath}/${prev.slug}`} className="flex-1 min-w-0">
          <Card className="group flex-row items-center gap-3 border border-border/60 p-0 px-4 py-3 transition-all duration-200 hover:border-border hover:bg-muted/50 hover:shadow-sm">
            <ChevronLeft className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Previous</p>
              <p className="text-sm font-medium truncate">{prev.title}</p>
            </div>
          </Card>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link href={`${basePath}/${next.slug}`} className="flex-1 min-w-0">
          <Card className="group flex-row items-center justify-end gap-3 border border-border/60 p-0 px-4 py-3 text-right transition-all duration-200 hover:border-border hover:bg-muted/50 hover:shadow-sm">
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Next</p>
              <p className="text-sm font-medium truncate">{next.title}</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Card>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
