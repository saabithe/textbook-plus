"use client";

import { useState } from "react";
import { ChevronRight, ListTree } from "lucide-react";
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

function TreeNodeComponent({
  node,
  depth = 0,
  defaultExpanded = false,
}: {
  node: TreeNode;
  depth?: number;
  defaultExpanded?: boolean;
}) {
  const [open, setOpen] = useState(defaultExpanded);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <button
        type="button"
        onClick={() => hasChildren && setOpen(!open)}
        aria-expanded={hasChildren ? open : undefined}
        disabled={!hasChildren}
        className={cn(
          "group flex w-full items-start gap-2 rounded-lg px-2 py-2 text-left transition-colors",
          hasChildren ? "cursor-pointer hover:bg-foreground/[0.03]" : "cursor-default",
        )}
        style={{ paddingLeft: `${Math.min(depth * 16 + 8, 40)}px`, paddingRight: "8px" }}
      >
        {hasChildren ? (
          <span
            className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] border transition-colors",
              open
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card text-muted-foreground group-hover:border-rule-strong",
            )}
          >
            <ChevronRight
              className={cn("h-3 w-3 transition-transform duration-200", open && "rotate-90")}
            />
          </span>
        ) : (
          <span className="mt-2 ml-1 h-2.5 w-2.5 shrink-0 rounded-[3px] border border-border bg-muted" />
        )}
        <span className="min-w-0 flex-1">
          <span
            className={cn(
              "block break-words text-[15px] leading-snug",
              depth === 0 ? "font-semibold text-foreground" : "font-medium text-foreground/90",
            )}
          >
            {node.label}
          </span>
          {node.detail && (
            <span className="mt-0.5 block break-words text-xs leading-relaxed text-muted-foreground">
              {node.detail}
            </span>
          )}
        </span>
      </button>

      {hasChildren && open && (
        <div className="relative">
          <div
            className="absolute bottom-2 top-0 w-px bg-border"
            style={{ left: `${Math.min(depth * 16 + 8, 40) + 9}px` }}
          />
          <div>
            {node.children!.map((child, i) => (
              <TreeNodeComponent
                key={i}
                node={child}
                depth={depth + 1}
                defaultExpanded={defaultExpanded}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function TreeDiagram({
  title,
  nodes,
  defaultExpanded = false,
}: TreeDiagramProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="flex items-center gap-2.5 border-b border-border px-4 py-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-[3px] border border-border bg-card text-muted-foreground">
            <ListTree className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm font-bold tracking-tight text-foreground">{title}</span>
        </div>
      )}
      <div className="px-3 py-2">
        {nodes.map((node, i) => (
          <TreeNodeComponent key={i} node={node} defaultExpanded={defaultExpanded} />
        ))}
      </div>
    </div>
  );
}