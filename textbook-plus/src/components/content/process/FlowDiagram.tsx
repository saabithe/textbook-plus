interface FlowNode {
  label: string;
  detail?: string;
}

interface FlowDiagramProps {
  title?: string;
  nodes: FlowNode[];
  direction?: "horizontal" | "vertical";
}

export function FlowDiagram({ title, nodes, direction = "horizontal" }: FlowDiagramProps) {
  const isH = direction === "horizontal";
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className={`flex ${isH ? "flex-row items-center" : "flex-col"} gap-2`}>
        {nodes.map((node, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-center">
              <p className="text-sm font-medium text-foreground">{node.label}</p>
              {node.detail && (
                <p className="text-xs text-muted-foreground mt-0.5">{node.detail}</p>
              )}
            </div>
            {i < nodes.length - 1 && (
              <span className={`text-muted-foreground text-lg ${isH ? "" : "rotate-90"}`}>→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
