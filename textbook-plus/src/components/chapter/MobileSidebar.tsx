"use client";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";
import type { ChapterSection } from "@/types/chapter";

interface MobileSidebarProps {
  sections: ChapterSection[];
  subjectColor: string;
  chapterTitle: string;
}

export function MobileSidebar({
  sections,
  subjectColor,
  chapterTitle,
}: MobileSidebarProps) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/50 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:hidden"
            aria-label="Table of contents"
          />
        }
      >
        <Menu className="h-4 w-4" />
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-6">
        <SheetTitle className="text-sm font-semibold mb-4 truncate">
          {chapterTitle}
        </SheetTitle>
        <Sidebar sections={sections} subjectColor={subjectColor} />
      </SheetContent>
    </Sheet>
  );
}
