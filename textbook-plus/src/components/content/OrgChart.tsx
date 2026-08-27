"use client";

interface OrgChartNode {
  label: string;
  detail?: string;
  children?: OrgChartNode[];
}

interface OrgChartProps {
  title?: string;
  nodes: OrgChartNode[];
}

function OrgChartNodeComponent({ node }: { node: OrgChartNode }) {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center">
      <div className="border border-border rounded-lg px-4 py-2 text-sm bg-card text-center min-w-[90px]">
        <div className="font-semibold text-foreground">{node.label}</div>
        {node.detail && (
          <div className="text-xs text-muted-foreground">{node.detail}</div>
        )}
      </div>

      {hasChildren && (
        <div className="flex flex-col items-center">
          <div className="w-px h-4 bg-border" />
          <div className="flex border-t border-border pt-4">
            {node.children!.map((child, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-px h-4 bg-border" />
                <OrgChartNodeComponent node={child} />
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
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6 overflow-x-auto">
      {title && <span className="text-sm font-semibold block mb-4">{title}</span>}
      <div className="flex justify-center min-w-max">
        {nodes.map((node, i) => (
          <OrgChartNodeComponent key={i} node={node} />
        ))}
      </div>
    </div>
  );
}
