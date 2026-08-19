"use client";

import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import type { ChapterSection } from "@/types/chapter";

interface SidebarProps {
  sections: ChapterSection[];
  subjectColor: string;
}

function flattenSectionIds(sections: ChapterSection[]): string[] {
  const ids: string[] = [];
  for (const section of sections) {
    ids.push(section.id);
    if (section.children) {
      ids.push(...flattenSectionIds(section.children));
    }
  }
  return ids;
}

export function Sidebar({ sections, subjectColor }: SidebarProps) {
  const allIds = flattenSectionIds(sections);
  const activeId = useScrollSpy(allIds);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function renderSection(section: ChapterSection, depth = 0) {
    const isActive = activeId === section.id;
    const hasChildren = section.children && section.children.length > 0;
    const isParentActive = hasChildren && section.children!.some(
      (child) => child.id === activeId
    );

    if (depth === 0) {
      return (
        <div key={section.id} className="mb-1">
          <button
            onClick={() => scrollTo(section.id)}
            className={cn(
              "w-full text-left rounded-lg px-3 py-2 text-sm transition-colors duration-150",
              isActive || isParentActive
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            )}
          >
            <span
              className={cn(
                "mr-2 inline-block h-1.5 w-1.5 rounded-full transition-colors duration-150",
                isActive || isParentActive ? "opacity-100" : "opacity-0"
              )}
              style={{ backgroundColor: subjectColor }}
            />
            {section.title}
          </button>
          {hasChildren && (
            <div className="ml-3 mt-0.5 border-l border-border/40 pl-1">
              {section.children!.map((child) => renderSection(child, depth + 1))}
            </div>
          )}
        </div>
      );
    }

    return (
      <button
        key={section.id}
        onClick={() => scrollTo(section.id)}
        className={cn(
          "w-full text-left rounded-md px-3 py-1 text-xs transition-colors duration-150",
          isActive
            ? "bg-muted font-medium text-foreground"
            : "text-muted-foreground/70 hover:bg-muted/50 hover:text-muted-foreground"
        )}
      >
        <span
          className={cn(
            "mr-1.5 inline-block h-1 w-1 rounded-full transition-colors duration-150",
            isActive ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundColor: subjectColor }}
        />
        {section.title}
      </button>
    );
  }

  return (
    <nav className="space-y-0.5">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">
        On this page
      </p>
      {sections.map((section) => renderSection(section))}
    </nav>
  );
}
