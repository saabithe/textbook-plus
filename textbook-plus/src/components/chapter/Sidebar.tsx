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

    return (
      <div key={section.id}>
        <button
          onClick={() => scrollTo(section.id)}
          className={cn(
            "w-full text-left rounded-lg px-3 py-2 text-sm transition-colors duration-150",
            depth > 0 && "pl-6",
            isActive || (depth === 0 && isParentActive)
              ? "bg-muted font-medium text-foreground"
              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
          )}
        >
          <span
            className={cn(
              "mr-2 inline-block h-1.5 w-1.5 rounded-full transition-colors duration-150",
              isActive ? "opacity-100" : "opacity-0"
            )}
            style={{ backgroundColor: subjectColor }}
          />
          {section.title}
        </button>
        {hasChildren && (
          <div className="ml-2">
            {section.children!.map((child) => renderSection(child, depth + 1))}
          </div>
        )}
      </div>
    );
  }

  return (
    <nav className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">
        On this page
      </p>
      {sections.map((section) => renderSection(section))}
    </nav>
  );
}
