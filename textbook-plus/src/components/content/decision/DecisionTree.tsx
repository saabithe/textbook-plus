"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface DecisionNode {
  question: string;
  yes?: string;
  no?: string;
}

interface DecisionTreeProps {
  title?: string;
  nodes: DecisionNode[];
}

export function DecisionTree({ title, nodes }: DecisionTreeProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const toggle = (i: number, answer: "yes" | "no") => {
    setAnswers(prev => {
      const next = { ...prev };
      if (next[i] === answer) delete next[i];
      else next[i] = answer;
      return next;
    });
  };

  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className="space-y-3">
        {nodes.map((node, i) => (
          <div key={i} className="border border-border/40 rounded-lg p-3">
            <p className="text-sm font-medium text-foreground mb-2">{node.question}</p>
            <div className="flex gap-2">
              <button
                onClick={() => toggle(i, "yes")}
                className={cn(
                  "px-3 py-1 rounded-md text-xs font-medium transition-colors",
                  answers[i] === "yes"
                    ? "bg-green-500/10 text-green-600 border border-green-500/30"
                    : "bg-muted/40 text-muted-foreground hover:bg-muted/60 border border-transparent"
                )}
              >
                Yes
              </button>
              <button
                onClick={() => toggle(i, "no")}
                className={cn(
                  "px-3 py-1 rounded-md text-xs font-medium transition-colors",
                  answers[i] === "no"
                    ? "bg-red-500/10 text-red-600 border border-red-500/30"
                    : "bg-muted/40 text-muted-foreground hover:bg-muted/60 border border-transparent"
                )}
              >
                No
              </button>
            </div>
            {answers[i] === "yes" && node.yes && (
              <div className="mt-2 pl-3 border-l-2 border-green-500/30 text-sm text-muted-foreground">
                → {node.yes}
              </div>
            )}
            {answers[i] === "no" && node.no && (
              <div className="mt-2 pl-3 border-l-2 border-red-500/30 text-sm text-muted-foreground">
                → {node.no}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
