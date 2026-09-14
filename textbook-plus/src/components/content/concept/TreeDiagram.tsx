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
          "group flex w-full items-start gap-2 rounded-xl py-2.5 text-left transition-colors",
          hasChildren ? "cursor-pointer" : "cursor-default",
          hasChildren && "hover:bg-primary/[0.06]"
        )}
        style={{ paddingLeft: `${Math.min(depth * 18 + 8, 44)}px`, paddingRight: "10px" }}
      >
        {hasChildren ? (
          <span
            className={cn(
              "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg transition-all duration-200",
              open
                ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-sm shadow-violet-500/30"
                : "border border-border/60 bg-muted/40 text-foreground/70 group-hover:border-violet-500/50 group-hover:text-violet-600 group-hover:dark:text-violet-300"
            )}
          >
            <ChevronRight
              className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-90")}
            />
          </span>
        ) : (
          <span className="mt-1.5 ml-[9px] h-3 w-3 shrink-0 rounded-[4px] border border-violet-500/50 bg-violet-500/15" />
        )}
        <span className="min-w-0 flex-1">
          <span
            className={cn(
              "block break-words text-sm",
              depth === 0 ? "font-extrabold text-foreground" : "font-semibold",
              depth > 0 ? "text-foreground/90" : ""
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
          {/* vertical guide line */}
          <div
            className="absolute bottom-2 top-0 w-px bg-gradient-to-b from-violet-500/40 to-violet-500/10"
            style={{ left: `${Math.min(depth * 18 + 8, 44) + 11}px` }}
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
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      {title && (
        <div className="flex items-center gap-2.5 border-b border-border/40 bg-muted/30 px-4 py-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-sm shadow-violet-500/30">
            <ListTree className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="text-sm font-extrabold tracking-tight text-foreground">{title}</span>
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