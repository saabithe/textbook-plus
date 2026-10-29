"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  children: string;
  lang?: string;
  className?: string;
}

export function CodeBlock({ children, lang, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op: clipboard unavailable
    }
  }

  return (
    <div className={cn("group relative my-4 overflow-hidden rounded-lg border border-border bg-muted", className)}>
      {lang && (
        <div className="flex items-center justify-between border-b border-border px-3 py-1.5">
          <span className="t-micro">{lang}</span>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={copy}
            aria-label={copied ? "Copied" : "Copy code"}
            className="h-7 w-7"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </Button>
        </div>
      )}
      {!lang && (
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={copy}
          aria-label={copied ? "Copied" : "Copy code"}
          className="absolute right-2 top-2 h-7 w-7 opacity-0 transition-opacity duration-[120ms] ease-[var(--ease-blueprint)] group-hover:opacity-100 focus-visible:opacity-100"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </Button>
      )}
      <pre className="overflow-x-auto p-4 text-[0.8125rem] leading-[1.65] text-foreground/90">
        <code>{children}</code>
      </pre>
    </div>
  );
}
