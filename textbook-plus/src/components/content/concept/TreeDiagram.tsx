"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TreeNode {
  label: string;
  detail?: string;
  children?: TreeNode[];
}

interface TreeDiagramProps {
  title?: string;
  nodes: TreeNode[];
  defaultExpanded?: boolean;
}

function TreeNodeComponent({ node, depth = 0, defaultExpanded = false }: { node: TreeNode; depth?: number; defaultExpanded?: boolean }) {
  const [open, setOpen] = useState(defaultExpanded);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-muted/40 cursor-pointer text-sm",
          depth === 0 && "font-medium text-foreground",
          depth > 0 && "text-muted-foreground"
        )}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={() => hasChildren && setOpen(!open)}
      >
        {hasChildren ? (
          open ? <ChevronDown className="h-3.5 w-3.5 shrink-0" /> : <ChevronRight className="h-3.5 w-3.5 shrink-0" />
        ) : (
          <div className="w-3.5 h-3.5 shrink-0" />
        )}
        <span>{node.label}</span>
      </div>
      {hasChildren && open && (
        <div>
          {node.children!.map((child, i) => (
            <TreeNodeComponent key={i} node={child} depth={depth + 1} defaultExpanded={defaultExpanded} />
          ))}
        </div>
      )}
    </div>
  );
}

export function TreeDiagram({ title, nodes, defaultExpanded = false }: TreeDiagramProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className="space-y-0">
        {nodes.map((node, i) => (
          <TreeNodeComponent key={i} node={node} defaultExpanded={defaultExpanded} />
        ))}
      </div>
    </div>
  );
}
