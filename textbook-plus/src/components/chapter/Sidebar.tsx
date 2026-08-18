"use client";

import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import type { ChapterSection } from "@/data/sample-chapter";

interface SidebarProps {
  sections: ChapterSection[];
  subjectColor: string;
}

export function Sidebar({ sections, subjectColor }: SidebarProps) {
  const ids = sections.map((s) => s.id);
  const activeId = useScrollSpy(ids);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <nav className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">
        On this page
      </p>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          className={cn(
            "w-full text-left rounded-lg px-3 py-2 text-sm transition-colors duration-150",
            activeId === section.id
              ? "bg-muted font-medium text-foreground"
              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
          )}
        >
          <span
            className={cn(
              "mr-2 inline-block h-1.5 w-1.5 rounded-full transition-colors duration-150",
              activeId === section.id ? "opacity-100" : "opacity-0"
            )}
            style={{ backgroundColor: subjectColor }}
          />
          {section.title}
        </button>
      ))}
    </nav>
  );
}
