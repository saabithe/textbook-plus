"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

interface TocChild {
  id: string;
  label: string;
}

interface TocSection {
  id: string;
  label: string;
  children: TocChild[];
}

const MIN_SECTIONS = 4;
const MAX_CHILDREN = 8;
const REBUILD_DEBOUNCE = 120;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/['\u2018\u2019\u201c\u201d]/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}

function uniqueId(base: string, used: Set<string>): string {
  const stem = base || "section";
  let id = stem;
  let n = 2;
  while (used.has(id)) {
    id = `${stem}-${n}`;
    n += 1;
  }
  used.add(id);
  return id;
}

function labelOf(el: Element): string {
  return (el.textContent ?? "").replace(/\s+/g, " ").trim();
}

function buildTree(root: HTMLElement): TocSection[] {
  const used = new Set<string>();
  root.querySelectorAll<HTMLElement>("[id]").forEach((el) => {
    if (el.id) used.add(el.id);
  });

  const sections: TocSection[] = [];
  let current: TocSection | null = null;

  root.querySelectorAll<HTMLHeadingElement>("h2, h3").forEach((heading) => {
    if (heading.offsetParent === null) return;
    const label = labelOf(heading);
    if (!label) return;

    if (!heading.id) heading.id = uniqueId(slugify(label), used);
    else used.add(heading.id);

    if (heading.tagName === "H2") {
      current = { id: heading.id, label, children: [] };
      sections.push(current);
      return;
    }

    if (current) current.children.push({ id: heading.id, label });
  });

  return sections;
}

export function ChapterToc({ mobile = false }: { mobile?: boolean } = {}) {
  const [sections, setSections] = useState<TocSection[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-chapter-content]");
    if (!root) return;

    let observer: IntersectionObserver | null = null;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let disposed = false;

    const track = () => {
      observer?.disconnect();

      const headings = Array.from(
        root.querySelectorAll<HTMLElement>("h2, h3")
      ).filter((h) => h.id && h.offsetParent !== null);

      headings.forEach((h) => {
        if (!h.hasAttribute("tabindex")) h.setAttribute("tabindex", "-1");
      });

      const visible = new Set<string>();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = (entry.target as HTMLElement).id;
            if (entry.isIntersecting) visible.add(id);
            else visible.delete(id);
          });
          const firstVisible = headings.find((h) => visible.has(h.id));
          if (firstVisible) setActiveId(firstVisible.id);
        },
        { rootMargin: "-96px 0px -66% 0px", threshold: 0 }
      );
      headings.forEach((h) => observer?.observe(h));
    };

    const rebuild = () => {
      if (disposed) return;
      const tree = buildTree(root);
      setSections(tree);
      setActiveId((prev) => {
        const stillThere =
          prev &&
          tree.some(
            (s) => s.id === prev || s.children.some((c) => c.id === prev)
          );
        return stillThere ? prev : (tree[0]?.id ?? null);
      });
      track();
    };

    rebuild();

    const mutations = new MutationObserver(() => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(rebuild, REBUILD_DEBOUNCE);
    });
    mutations.observe(root, { childList: true, subtree: true });

    return () => {
      disposed = true;
      if (timer) clearTimeout(timer);
      mutations.disconnect();
      observer?.disconnect();
    };
  }, []);

  const jump = useCallback((event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ block: "start", behavior: "auto" });
    target.focus({ preventScroll: true });
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  if (sections.length < MIN_SECTIONS) return null;

  const activeSection =
    sections.find(
      (s) => s.id === activeId || s.children.some((c) => c.id === activeId)
    )?.id ?? null;

  const content = (
    <Sidebar
      side="right"
      collapsible="none"
      className={
        mobile
          ? "h-full w-[260px] flex-col overflow-y-auto border-l border-border bg-card"
          : "sticky top-24 h-[calc(100dvh-7rem)] overflow-y-auto border-l border-border bg-muted/50 hidden xl:flex"
      }
    >
      <nav aria-label="Contents" className="flex min-h-0 flex-1 flex-col">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[var(--accent,var(--foreground))]">Contents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((section) => {
                const isActive = section.id === activeSection;
                return (
                  <SidebarMenuItem key={section.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      aria-current={section.id === activeId ? "true" : undefined}
                    >
                      <a
                        href={`#${section.id}`}
                        onClick={(event) => jump(event, section.id)}
                        className="line-clamp-2"
                      >
                        {section.label}
                      </a>
                    </SidebarMenuButton>

                    {isActive && section.children.length > 0 ? (
                      <SidebarMenuSub>
                        {section.children.slice(0, MAX_CHILDREN).map((child) => (
                          <SidebarMenuSubItem key={child.id}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={child.id === activeId}
                              aria-current={child.id === activeId ? "true" : undefined}
                            >
                              <a
                                href={`#${child.id}`}
                                onClick={(event) => jump(event, child.id)}
                                className="line-clamp-2"
                              >
                                {child.label}
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    ) : null}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </nav>
    </Sidebar>
  );

  if (mobile) {
    return (
      <div className="fixed inset-0 z-50 flex justify-end bg-foreground/40 backdrop-blur-sm p-0" role="dialog" aria-modal="true">
        <div className="h-full">{content}</div>
      </div>
    );
  }

  return content;
}