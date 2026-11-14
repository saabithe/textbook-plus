"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  /** 2 = a real `<h2>` section; 3 = an `<h3>` promoted to top level (page has no `<h2>`). */
  level: 2 | 3;
  children: TocChild[];
}

/**
 * Rail visibility — measured on the whole tree, never on the h2 count alone.
 *
 * The tree is "substantial" when it holds at least MIN_ENTRIES entries in total
 * (sections + their children) or at least MIN_SECTIONS top-level sections.
 *
 * - ray optics: 2 h2 + 17 h3 = 19 entries → rail shows (h2 count alone gave an
 *   empty 200px gutter on that page).
 * - a page with 1 h2 + 1 h3 = 2 entries and 1 section → stays quiet.
 * - a page with no h2 at all (english/horegallu, 8 h3) has its h3s promoted to
 *   top level → 8 sections → rail shows.
 * - grammar topics (3–12 titled sections) and normal chapters keep the rail
 *   they had before: the `MIN_SECTIONS` arm preserves the old `>= 4` behaviour.
 */
const MIN_ENTRIES = 8;
const MIN_SECTIONS = 4;
const REBUILD_DEBOUNCE = 120;

/**
 * shadcn's base row is `h-8 items-center` (one line) and the anchors used to
 * carry `line-clamp-2`, which clipped two-line labels mid-glyph. Rows now grow
 * with their label: fixed height off, top-aligned, wrapping on, no clamp.
 * The `!` is deliberate — it beats the vendored sidebar base classes without
 * touching `src/components/ui/sidebar.tsx`.
 */
const ROW_CLASSES =
  "h-auto! min-h-8 items-start! py-1.5 leading-[1.35] whitespace-normal break-words no-underline! data-[active=true]:font-semibold! data-[active=true]:text-[var(--accent,var(--foreground))]!";

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

function isSubstantial(sections: TocSection[]): boolean {
  const entries = sections.reduce((total, s) => total + 1 + s.children.length, 0);
  return entries >= MIN_ENTRIES || sections.length >= MIN_SECTIONS;
}

function buildTree(root: HTMLElement): TocSection[] {
  const used = new Set<string>();
  root.querySelectorAll<HTMLElement>("[id]").forEach((el) => {
    if (el.id) used.add(el.id);
  });

  const headings = Array.from(
    root.querySelectorAll<HTMLHeadingElement>("h2, h3")
  ).filter((heading) => heading.offsetParent !== null && labelOf(heading) !== "");

  // Tree rule: h2 → section, h3 → child of the preceding h2. With no h2 on the
  // page at all, every h3 is a top-level section instead of being dropped.
  const hasSections = headings.some((heading) => heading.tagName === "H2");

  const sections: TocSection[] = [];
  let current: TocSection | null = null;

  headings.forEach((heading) => {
    const label = labelOf(heading);
    if (!heading.id) heading.id = uniqueId(slugify(label), used);
    else used.add(heading.id);

    const isTopLevel = heading.tagName === "H2" || !hasSections;

    if (isTopLevel) {
      current = {
        id: heading.id,
        label,
        level: heading.tagName === "H2" ? 2 : 3,
        children: [],
      };
      sections.push(current);
      return;
    }

    // An h3 before the first h2 has no parent to hang from — keep it visible as
    // its own top-level entry rather than silently dropping it.
    if (!current) {
      current = { id: heading.id, label, level: 3, children: [] };
      sections.push(current);
      return;
    }

    current.children.push({ id: heading.id, label });
  });

  return sections;
}

export function ChapterToc({
  mobile = false,
  onAvailableChange,
  onNavigate,
}: {
  mobile?: boolean;
  onAvailableChange?: (available: boolean) => void;
  /** Called after a jump, so a mobile shell can close itself. */
  onNavigate?: (id: string) => void;
} = {}) {
  const [sections, setSections] = useState<TocSection[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  // The availability callback lives in a ref so the mount effect never restarts,
  // and the reported state is tracked so a page never downgrades once it has a rail.
  const onAvailableRef = useRef(onAvailableChange);
  const reportedRef = useRef<{ built: boolean; available: boolean }>({
    built: false,
    available: false,
  });

  useEffect(() => {
    onAvailableRef.current = onAvailableChange;
  }, [onAvailableChange]);

  const reportAvailability = useCallback((available: boolean) => {
    const reported = reportedRef.current;

    // First completed build — the only place a `false` may ever be reported.
    // Nothing is reported before this, so a mounting mobile panel cannot flip
    // the parent's state while `sections` is still empty.
    if (!reported.built) {
      reportedRef.current = { built: true, available };
      onAvailableRef.current?.(available);
      return;
    }

    // Sticky once true, and never re-report `false`. The parent owns the mobile
    // shell; unmounting this component must not tear that shell down.
    if (reported.available || !available) return;
    reportedRef.current = { built: true, available: true };
    onAvailableRef.current?.(true);
  }, []);

  useEffect(() => {
    const attach = (root: HTMLElement) => {
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
        reportAvailability(isSubstantial(tree));
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
        // Intentionally no `onAvailableChange(false)` on unmount.
      };
    };

    const existing = document.querySelector<HTMLElement>("[data-chapter-content]");
    if (existing) return attach(existing);

    // Chapter bodies are dynamically imported, so the article can land a beat
    // after this rail mounts. Wait for it instead of silently never building.
    let stop: (() => void) | null = null;
    const waitForRoot = new MutationObserver(() => {
      const root = document.querySelector<HTMLElement>("[data-chapter-content]");
      if (!root) return;
      waitForRoot.disconnect();
      stop = attach(root);
    });
    waitForRoot.observe(document.body, { childList: true, subtree: true });

    return () => {
      waitForRoot.disconnect();
      stop?.();
    };
  }, [reportAvailability]);

  const jump = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ block: "start", behavior: "auto" });
      target.focus({ preventScroll: true });
      window.history.replaceState(null, "", `#${id}`);
      onNavigate?.(id);
    },
    [onNavigate]
  );

  if (!isSubstantial(sections)) return null;

  const activeSection =
    sections.find(
      (s) => s.id === activeId || s.children.some((c) => c.id === activeId)
    )?.id ?? null;

  return (
    <Sidebar
      side="right"
      collapsible="none"
      className={
        mobile
          ? // Panel only — the drawer (backdrop, scroll lock, focus trap) is the
            // shell's job. `flex!` re-shows the aside that the vendored base
            // hides below `xl`.
            "flex! h-full w-[260px] flex-col overflow-y-auto border-l border-border bg-card"
          : "sticky top-24 hidden h-[calc(100dvh-7rem)] overflow-y-auto border-l border-border bg-transparent xl:flex"
      }
    >
      <nav
        aria-label="Contents"
        className="flex min-h-0 flex-1 flex-col border-t-[3px] border-t-[var(--accent,var(--border))]"
      >
        <SidebarGroup>
          <SidebarGroupLabel className="text-[var(--accent,var(--foreground))]">
            Contents
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="list-none!">
              {sections.map((section) => {
                const isActiveSection = section.id === activeSection;
                return (
                  <SidebarMenuItem key={section.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActiveSection}
                      aria-current={section.id === activeId ? "true" : undefined}
                    >
                      <a
                        href={`#${section.id}`}
                        onClick={(event) => jump(event, section.id)}
                        className={cn(
                          ROW_CLASSES,
                          section.level === 3 && "text-[13px]!"
                        )}
                      >
                        {section.label}
                      </a>
                    </SidebarMenuButton>

                    {/* Only the active section expands — but all of its
                        children are rendered; the rail scrolls. */}
                    {isActiveSection && section.children.length > 0 ? (
                      <SidebarMenuSub className="list-none!">
                        {section.children.map((child) => (
                          <SidebarMenuSubItem key={child.id}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={child.id === activeId}
                              aria-current={
                                child.id === activeId ? "true" : undefined
                              }
                            >
                              <a
                                href={`#${child.id}`}
                                onClick={(event) => jump(event, child.id)}
                                className={ROW_CLASSES}
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
}
