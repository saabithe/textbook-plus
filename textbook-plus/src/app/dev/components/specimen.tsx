"use client";

import {
  Component,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import type { CatalogEntry } from "./catalog.generated";
import { MODULES } from "./registry.generated";

export function anchorOf(id: string) {
  return id.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
}

class Boundary extends Component<
  { children: ReactNode; onError: (message: string) => ReactNode },
  { error: string | null }
> {
  state: { error: string | null } = { error: null };

  static getDerivedStateFromError(error: unknown) {
    return { error: error instanceof Error ? error.message : String(error) };
  }

  render() {
    if (this.state.error) return this.props.onError(this.state.error);
    return this.props.children;
  }
}

export function Specimen({
  entry,
  children,
  status = "live",
  note,
}: {
  entry: CatalogEntry;
  children: ReactNode;
  status?: "live" | "needs-data" | "shell" | "part";
  note?: string;
}) {
  return (
    <article
      id={anchorOf(entry.id)}
      data-specimen={entry.id}
      className="scroll-mt-24 overflow-hidden rounded-lg border border-border bg-card"
    >
      <header className="border-b border-border px-4 py-3">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h3 className="font-mono text-[13px] font-semibold text-foreground">{entry.name}</h3>
          <span className="font-mono text-[10.5px] text-muted-foreground">{entry.path}</span>
          <span
            className={cn(
              "ms-auto rounded-[3px] border px-1.5 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.08em]",
              status === "live" && "border-ok/40 text-ok",
              status === "needs-data" && "border-border text-muted-foreground",
              status === "shell" && "border-border text-muted-foreground",
              status === "part" && "border-border text-muted-foreground"
            )}
          >
            {status}
          </span>
        </div>
        {entry.props ? (
          <p className="mt-1.5 line-clamp-2 font-mono text-[10px] leading-[1.5] text-muted-foreground/70">
            {entry.props}
          </p>
        ) : null}
        {note ? <p className="mt-1 text-[11.5px] text-muted-foreground">{note}</p> : null}
      </header>
      <div className="px-4 py-4">
        <Boundary
          onError={(message) => (
            <div className="rounded border border-dashed border-border p-3 text-[11.5px] leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">Demo error</p>
              <p className="mt-1 font-mono">{message}</p>
            </div>
          )}
        >
          {children}
        </Boundary>
      </div>
    </article>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex h-16 items-center justify-center rounded border border-dashed border-border text-[11px] text-muted-foreground">
      {label}
    </div>
  );
}

export function AutoSpecimen({ entry, heavy = false }: { entry: CatalogEntry; heavy?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (heavy || visible) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entryInfo]) => {
        if (entryInfo.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "500px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [heavy, visible]);

  const module = MODULES[entry.path];
  const candidate = module?.[entry.name];
  const Component = candidate as ComponentType | undefined;
  const renderable =
    Component && (typeof Component === "function" || typeof Component === "object");

  if (!entry.renderable || !renderable) {
    return (
      <Specimen entry={entry} status={entry.shell ? "shell" : "needs-data"}>
        <div className="rounded border border-dashed border-border p-3 text-[11.5px] leading-relaxed text-muted-foreground">
          {entry.shell
            ? "Page-level or provider-bound module. Documented by its props; not rendered in isolation."
            : "Hook, type, or style helper — catalogued for completeness, not a visual component."}
        </div>
      </Specimen>
    );
  }

  if (heavy && !armed) {
    return (
      <Specimen entry={entry} status="live" note="Interactive — mount on demand.">
        <button
          type="button"
          onClick={() => setArmed(true)}
          className="h-9 rounded border border-border px-3 text-[12px] font-medium hover:bg-foreground/[0.04]"
        >
          Render demo
        </button>
      </Specimen>
    );
  }

  return (
    <Specimen entry={entry} status="live">
      <div ref={ref}>
        {visible || armed ? (
          <Boundary
            onError={(message) => (
              <div className="rounded border border-dashed border-border p-3 text-[11.5px] leading-relaxed text-muted-foreground">
                <p className="font-semibold text-foreground">Needs props</p>
                <p className="mt-1">
                  Rendered bare it throws: <span className="font-mono">{message}</span>
                </p>
                <p className="mt-1">Props signature above — add a fixture to make this live.</p>
              </div>
            )}
          >
            <Component />
          </Boundary>
        ) : (
          <Placeholder label="Loading when scrolled into view…" />
        )}
      </div>
    </Specimen>
  );
}
