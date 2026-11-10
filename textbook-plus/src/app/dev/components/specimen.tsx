"use client";

import {
  Component,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import { Check, Copy, CornerDownRight, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CatalogEntry } from "./catalog.generated";
import { MODULES } from "./registry.generated";

export function anchorOf(id: string) {
  return id.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
}

export type SpecimenStatus = "live" | "auto" | "shell" | "part";

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

const STATUS_STYLE: Record<SpecimenStatus, string> = {
  live: "border-ok/40 text-ok",
  auto: "border-border text-muted-foreground",
  shell: "border-border text-muted-foreground",
  part: "border-border text-muted-foreground",
};

const STATUS_LABEL: Record<SpecimenStatus, string> = {
  live: "demo",
  auto: "auto",
  shell: "shell",
  part: "part",
};

function CopyImport({ entry }: { entry: CatalogEntry }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const statement = `import { ${entry.name} } from "@/components/${entry.path.replace(/\.tsx$/, "")}";`;
    try {
      await navigator.clipboard.writeText(statement);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      title={`Copy import for ${entry.name}`}
      aria-label={`Copy import for ${entry.name}`}
      className="grid size-6 place-items-center rounded text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      {copied ? <Check className="size-3 text-ok" /> : <Copy className="size-3" />}
    </button>
  );
}

function StatusChip({ status }: { status: SpecimenStatus }) {
  return (
    <span
      className={cn(
        "rounded-[3px] border px-1.5 py-0.5 text-[9px] font-bold uppercase leading-none tracking-[0.08em]",
        STATUS_STYLE[status]
      )}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

function CardHeader({
  entry,
  status,
  dense,
  children,
}: {
  entry: CatalogEntry;
  status: SpecimenStatus;
  dense: boolean;
  children?: ReactNode;
}) {
  return (
    <header
      className={cn(
        "flex items-start gap-2 border-b border-border bg-muted/20 px-3",
        dense ? "py-1.5" : "py-2.5"
      )}
    >
      <div className="min-w-0 flex-1">
        <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <h3 className="truncate font-mono text-[12.5px] font-semibold leading-tight text-foreground">
            {entry.name}
          </h3>
          <span className="truncate font-mono text-[10px] leading-tight text-muted-foreground/80">
            {entry.path}
          </span>
        </div>
        {!dense && entry.props ? (
          <p
            className="mt-1 line-clamp-2 font-mono text-[9.5px] leading-[1.45] text-muted-foreground/60"
            title={entry.props}
          >
            {entry.props}
          </p>
        ) : null}
        {children}
      </div>
      <div className="flex shrink-0 items-center gap-0.5 pt-0.5">
        <StatusChip status={status} />
        <a
          href={`#${anchorOf(entry.id)}`}
          title="Link to this specimen"
          aria-label="Link to this specimen"
          className="grid size-6 place-items-center rounded text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
        >
          <Link2 className="size-3" />
        </a>
        <CopyImport entry={entry} />
      </div>
    </header>
  );
}

export function Specimen({
  entry,
  children,
  status = "live",
  note,
  dense = false,
}: {
  entry: CatalogEntry;
  children: ReactNode;
  status?: SpecimenStatus;
  note?: string;
  dense?: boolean;
}) {
  return (
    <article
      id={anchorOf(entry.id)}
      data-specimen={entry.id}
      className="group/specimen scroll-mt-[104px] overflow-hidden rounded-lg border border-border bg-card transition-colors focus-within:border-rule-strong hover:border-rule-strong target:border-foreground/40 target:ring-2 target:ring-ring/30"
    >
      <CardHeader entry={entry} status={status} dense={dense}>
        {note ? <p className="mt-1 text-[10.5px] leading-tight text-muted-foreground">{note}</p> : null}
      </CardHeader>
      <div className={cn(dense ? "px-3 py-2.5" : "px-3.5 py-4")}>
        <Boundary
          onError={(message) => (
            <div className="rounded border border-dashed border-warning/40 bg-warning/[0.04] p-3 text-[11.5px] leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">Demo failed to mount</p>
              <p className="mt-1 font-mono text-[10.5px]">{message}</p>
            </div>
          )}
        >
          {children}
        </Boundary>
      </div>
    </article>
  );
}

export function PartRow({
  entry,
  parentName,
  parentId,
  dense = false,
}: {
  entry: CatalogEntry;
  parentName: string;
  parentId: string;
  dense?: boolean;
}) {
  return (
    <a
      href={`#${anchorOf(parentId)}`}
      data-specimen={entry.id}
      className={cn(
        "group/part flex items-center gap-2 rounded border border-transparent px-2 text-[11.5px] text-muted-foreground transition-colors hover:border-border hover:bg-foreground/[0.03] hover:text-foreground",
        dense ? "py-1" : "py-1.5"
      )}
    >
      <CornerDownRight className="size-3 shrink-0 text-muted-foreground/60" />
      <span className="font-mono text-[11px] font-medium text-foreground/80 group-hover/part:text-foreground">
        {entry.name}
      </span>
      <span className="truncate text-[10.5px] text-muted-foreground/70">
        sub-part of {parentName}
      </span>
      <span className="ms-auto text-[10px] text-muted-foreground/50">→</span>
    </a>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex h-14 items-center justify-center rounded border border-dashed border-border text-[10.5px] text-muted-foreground">
      {label}
    </div>
  );
}

export function AutoSpecimen({
  entry,
  heavy = false,
  dense = false,
}: {
  entry: CatalogEntry;
  heavy?: boolean;
  dense?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (heavy || visible) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([info]) => {
        if (info.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [heavy, visible]);

  const exports = MODULES[entry.path];
  const candidate = exports?.[entry.name];
  const Component = candidate as ComponentType | undefined;
  const renderable =
    Component && (typeof Component === "function" || typeof Component === "object");

  if (!entry.renderable || !renderable) {
    return (
      <Specimen entry={entry} status="shell" dense={dense}>
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
      <Specimen entry={entry} status="auto" dense={dense} note="Interactive — mounts on demand.">
        <button
          type="button"
          onClick={() => setArmed(true)}
          className="h-9 rounded-md border border-border bg-card px-3 text-[12px] font-medium transition-colors hover:bg-foreground/[0.04] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          Render demo
        </button>
      </Specimen>
    );
  }

  return (
    <Specimen entry={entry} status="auto" dense={dense}>
      <div ref={ref}>
        {visible || armed ? (
          <Boundary
            onError={(message) => (
              <div className="rounded border border-dashed border-warning/40 bg-warning/[0.04] p-3 text-[11.5px] leading-relaxed text-muted-foreground">
                <p className="font-semibold text-foreground">Needs props</p>
                <p className="mt-1 font-mono text-[10.5px]">{message}</p>
                <p className="mt-1">Add a fixture in `demos-*.tsx` to make this live.</p>
              </div>
            )}
          >
            <Component />
          </Boundary>
        ) : (
          <Placeholder label="Mounts when scrolled into view…" />
        )}
      </div>
    </Specimen>
  );
}
