"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

interface AuthorCardProps {
  name: string;
  children?: React.ReactNode;
  className?: string;
}

export function AuthorCard({ name, children, className }: AuthorCardProps) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = !!children;

  return (
    <Card
      className={cn(
        "my-6 gap-0 rounded-2xl border-border/50 bg-card py-0",
        className
      )}
    >
      <CardContent className="px-6 py-5">
        <Collapsible open={expanded} onOpenChange={setExpanded}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Author
              </p>
              <h3 className="text-xl font-bold text-foreground">{name}</h3>
            </div>
            {hasChildren && (
              <CollapsibleTrigger
                className="shrink-0 rounded-lg p-2 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
                aria-label={expanded ? "Collapse author bio" : "Expand author bio"}
              >
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    expanded && "rotate-180"
                  )}
                />
              </CollapsibleTrigger>
            )}
          </div>
          {hasChildren && (
            <CollapsibleContent
              keepMounted
              className="overflow-hidden transition-all duration-300 ease-in-out data-[closed]:max-h-0 data-[closed]:opacity-0 data-[open]:mt-4 data-[open]:max-h-[2000px] data-[open]:opacity-100"
            >
              <div className="text-[0.95rem] leading-[1.75] text-foreground/85">
                {children}
              </div>
            </CollapsibleContent>
          )}
        </Collapsible>
      </CardContent>
    </Card>
  );
}
