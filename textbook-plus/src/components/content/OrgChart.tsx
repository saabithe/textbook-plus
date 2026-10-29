import { Network } from "lucide-react";

interface OrgChartNode {
  label: string;
  detail?: string;
  children?: OrgChartNode[];
}

interface OrgChartProps {
  title?: string;
  nodes: OrgChartNode[];
  /** Optional accent color (hex). Defaults to violet. Unused in Blueprint styling. */
  color?: string;
}

function OrgChartNodeComponent({
  node,
  depth = 0,
}: {
  node: OrgChartNode;
  accent?: string;
  depth?: number;
}) {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center">
      <div
        className="rounded-lg border border-border bg-card px-4 py-2.5 text-center"
        style={{ minWidth: "110px" }}
      >
        <div className="text-sm font-semibold tracking-tight text-foreground">
          {node.label}
        </div>
        {node.detail && <div className="mt-0.5 text-xs text-muted-foreground">{node.detail}</div>}
      </div>

      {hasChildren && (
        <div className="flex flex-col items-center">
          <div className="h-4 w-px bg-rule-strong" />
          <div className="flex border-t border-rule-strong pt-4">
            {node.children!.map((child, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-4 w-px bg-rule-strong" />
                <OrgChartNodeComponent node={child} depth={depth + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function OrgChart({ title, nodes }: OrgChartProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="flex items-center gap-2.5 border-b border-border px-4 py-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-[3px] border border-border bg-card text-muted-foreground">
            <Network className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm font-bold tracking-tight text-foreground">{title}</span>
        </div>
      )}
      <div className="overflow-x-auto px-5 py-5">
        <div className="flex min-w-max justify-center">
          {nodes.map((node, i) => (
            <OrgChartNodeComponent key={i} node={node} />
          ))}
        </div>
      </div>
    </div>
  );
}