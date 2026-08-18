"use client";

import { createReactBlockSpec } from "@blocknote/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

function ExpandableContent({
  title,
  contentRef,
}: {
  title: string;
  contentRef: (node: HTMLElement | null) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border/60 my-6 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium transition-colors hover:bg-muted/50"
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="border-t border-border/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          <div ref={contentRef} />
        </div>
      )}
    </div>
  );
}

export const ExpandableBlock = createReactBlockSpec(
  {
    type: "expandable",
    propSchema: {
      title: { default: "Click to expand" },
    },
    content: "inline",
  },
  {
    render: (props) => {
      const title = (props.block.props as { title: string }).title;
      return <ExpandableContent title={title} contentRef={props.contentRef} />;
    },
  }
);
