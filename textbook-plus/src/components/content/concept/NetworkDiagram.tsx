interface NetworkNode {
  id: string;
  label: string;
}

interface NetworkEdge {
  from: string;
  to: string;
  label?: string;
}

interface NetworkDiagramProps {
  title?: string;
  nodes: NetworkNode[];
  edges: NetworkEdge[];
}

export function NetworkDiagram({ title, nodes, edges }: NetworkDiagramProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="rounded-lg border border-border/60 bg-muted/30 px-4 py-2 text-center"
          >
            <p className="text-sm font-medium text-foreground">{node.label}</p>
          </div>
        ))}
      </div>
      {edges.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 justify-center text-xs text-muted-foreground">
          {edges.map((edge, i) => (
            <span key={i}>
              {edge.from} → {edge.to}{edge.label ? ` (${edge.label})` : ""}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
