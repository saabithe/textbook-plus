import { Network } from "lucide-react";

interface OrgChartNode {
  label: string;
  detail?: string;
  children?: OrgChartNode[];
}

interface OrgChartProps {
  title?: string;
  nodes: OrgChartNode[];
  /** Optional accent color (hex). Defaults to violet. */
  color?: string;
}

const DEFAULT_ACCENT = "#8b5cf6";

function OrgChartNodeComponent({
  node,
  accent,
  depth = 0,
}: {
  node: OrgChartNode;
  accent: string;
  depth?: number;
}) {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative overflow-hidden rounded-xl border border-border/60 bg-card px-4 py-2.5 text-center shadow-sm transition-shadow hover:shadow-md"
        style={{ minWidth: "110px" }}
      >
        {depth === 0 && (
          <span
            className="absolute inset-x-0 top-0 h-[2px]"
            style={{ background: `linear-gradient(90deg, ${accent}, ${accent}33)` }}
          />
        )}
        <div className="text-sm font-extrabold tracking-tight text-foreground">
          {node.label}
        </div>
        {node.detail && <div className="mt-0.5 text-xs text-muted-foreground">{node.detail}</div>}
      </div>

      {hasChildren && (
        <div className="flex flex-col items-center">
          <div className="h-4 w-px" style={{ background: `linear-gradient(180deg, ${accent}66, ${accent}22)` }} />
          <div className="flex border-t pt-4" style={{ borderColor: `${accent}33` }}>
            {node.children!.map((child, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-4 w-px" style={{ background: `linear-gradient(180deg, ${accent}66, ${accent}22)` }} />
                <OrgChartNodeComponent node={child} accent={accent} depth={depth + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function OrgChart({ title, nodes, color }: OrgChartProps) {
  const accent = color ?? DEFAULT_ACCENT;

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      {title && (
        <div className="flex items-center gap-2.5 border-b border-border/40 bg-muted/30 px-4 py-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-sm shadow-violet-500/30">
            <Network className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="text-sm font-extrabold tracking-tight text-foreground">{title}</span>
        </div>
      )}
      <div className="overflow-x-auto px-5 py-5">
        <div className="flex min-w-max justify-center">
          {nodes.map((node, i) => (
            <OrgChartNodeComponent key={i} node={node} accent={accent} />
          ))}
        </div>
      </div>
    </div>
  );
}