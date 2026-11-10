import { Fragment, type ReactNode } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

type PathwayTone = "default" | "intermediate" | "product" | "byproduct";

export interface PathwayNode {
  /** Micro label above the title, e.g. "Step 1". */
  step?: string;
  /** Substance or stage name — the largest line in the node. */
  title: ReactNode;
  /** KaTeX equation, rendered under the title. */
  equation?: string;
  /** Short structure or explanatory line under the title. */
  note?: ReactNode;
  /** Chip naming what the node yields, e.g. "Trialkylborane". */
  outcome?: string;
  /** Tone for the outcome chip when it differs from the node tone. */
  outcomeTone?: PathwayTone;
  tone?: PathwayTone;
}

export interface PathwayLink {
  /** Transformation name written on the connector, e.g. "Esterification". */
  label?: ReactNode;
  /** Reagent or condition written under the label, e.g. "H+". */
  condition?: ReactNode;
}

interface ReactionPathwayProps {
  /** "vertical" stacks the nodes; "horizontal" lays them across on desktop. */
  orientation?: "vertical" | "horizontal";
  /** Heading strip across the top of the pathway. */
  title?: ReactNode;
  nodes: PathwayNode[];
  /**
   * One link per gap between nodes (nodes.length - 1). Each link carries the
   * transformation and its reagent/condition.
   */
  links?: PathwayLink[];
}

const NODE_TONE: Record<PathwayTone, string> = {
  default: "border-border bg-card",
  intermediate:
    "border-[color-mix(in_oklab,var(--subject-chemistry)_45%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_8%,transparent)]",
  product:
    "border-[color-mix(in_oklab,var(--subject-chemistry)_60%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_12%,transparent)]",
  byproduct: "border-warning/45 bg-warning/10",
};

const TAG_TONE: Record<PathwayTone, string> = {
  default: "bg-muted text-muted-foreground",
  intermediate:
    "bg-[color-mix(in_oklab,var(--subject-chemistry)_16%,transparent)] text-[var(--subject-chemistry)]",
  product:
    "bg-[color-mix(in_oklab,var(--subject-chemistry)_18%,transparent)] text-[var(--subject-chemistry)]",
  byproduct: "bg-warning/15 text-warning",
};

const TAG_LABEL: Partial<Record<PathwayTone, string>> = {
  intermediate: "Intermediate",
  product: "Product",
  byproduct: "By-product",
};

function Node({ node }: { node: PathwayNode }) {
  const tone = node.tone ?? "default";
  const outcomeTone = node.outcomeTone ?? tone;
  const tag = TAG_LABEL[tone];

  return (
    <div
      className={cn(
        "flex h-full min-w-0 flex-col rounded-md border px-3 py-3",
        NODE_TONE[tone],
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="t-micro">{node.step ?? "\u00A0"}</span>
        {tag && (
          <span
            className={cn(
              "shrink-0 rounded-[3px] px-1.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em]",
              TAG_TONE[tone],
            )}
          >
            {tag}
          </span>
        )}
      </div>

      <p className="mt-1 text-sm font-extrabold leading-snug text-foreground">{node.title}</p>

      {node.equation && (
        <div className="mt-2 overflow-x-auto text-center">
          <Formula>{node.equation}</Formula>
        </div>
      )}

      {node.note && (
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{node.note}</p>
      )}

      {node.outcome && (
        <span
          className={cn(
            "mt-2.5 self-start rounded-[3px] px-2 py-0.5 text-[0.7rem] font-extrabold",
            TAG_TONE[outcomeTone],
          )}
        >
          {node.outcome}
        </span>
      )}
    </div>
  );
}

function Connector({ link, horizontal }: { link?: PathwayLink; horizontal: boolean }) {
  return (
    <div
      className={cn(
        "flex shrink-0 flex-col items-center justify-center gap-1 self-stretch px-1 py-1",
        horizontal ? "w-full sm:w-24" : "w-full",
      )}
    >
      <ArrowDown aria-hidden className="h-4 w-4 text-muted-foreground sm:hidden" />
      <ArrowRight
        aria-hidden
        className="hidden h-4 w-4 shrink-0 text-muted-foreground sm:block"
      />
      {(link?.label || link?.condition) && (
        <div className="max-w-[7.5rem] text-center">
          {link?.label && (
            <p className="text-[0.65rem] font-extrabold uppercase leading-tight tracking-[0.06em] text-foreground/70">
              {link.label}
            </p>
          )}
          {link?.condition && (
            <p className="mt-0.5 text-[0.65rem] leading-tight text-muted-foreground">
              {link.condition}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * ReactionPathway — one connected sequence of reaction stages. Each node is a
 * stage (with its step number, substance, equation and outcome chip) and each
 * connector carries the transformation and the reagent/condition that drives
 * it. Vertical for multi-step sequences, horizontal for short industrial routes.
 */
export function ReactionPathway({
  orientation = "vertical",
  title,
  nodes,
  links = [],
}: ReactionPathwayProps) {
  const horizontal = orientation === "horizontal";

  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
          <span className="t-micro">{title}</span>
          <span className="t-micro">Reaction pathway</span>
        </div>
      )}

      <div className={cn("p-3 sm:p-4", horizontal && "sm:px-3")}>
        <div
          className={cn(
            "flex flex-col",
            horizontal ? "sm:flex-row sm:items-stretch" : "gap-0",
          )}
        >
          {nodes.map((node, index) => (
            <Fragment key={index}>
              <div className="min-w-0 flex-1">
                <Node node={node} />
              </div>
              {index < nodes.length - 1 && (
                <Connector link={links[index]} horizontal={horizontal} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
