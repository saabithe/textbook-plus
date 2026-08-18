import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx/Callout";
import { KeyPoint } from "@/components/mdx/KeyPoint";
import { Formula } from "@/components/mdx/Formula";
import { Expandable } from "@/components/mdx/Expandable";
import { Example } from "@/components/mdx/Example";
import { Diagram } from "@/components/mdx/Diagram";
import { Comparison } from "@/components/mdx/Comparison";

export function useMDXComponents(): MDXComponents {
  return {
    Callout,
    KeyPoint,
    Formula,
    Expandable,
    Example,
    Diagram,
    Comparison,
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children, id }) => (
      <h2
        id={id}
        className="text-2xl font-bold tracking-tight mt-10 mb-4 scroll-mt-24"
      >
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3
        id={id}
        className="text-xl font-semibold mt-8 mb-3 scroll-mt-24"
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base leading-relaxed text-muted-foreground mb-5">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-1 mb-4 text-muted-foreground">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary/30 pl-4 py-1 my-4 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="border-b border-border/60">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="text-left font-semibold px-4 py-2 text-muted-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 border-b border-border/30">{children}</td>
    ),
    code: ({ children }) => (
      <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="rounded-xl bg-muted/50 border border-border/40 p-4 overflow-x-auto my-4 text-sm font-mono">
        {children}
      </pre>
    ),
    hr: () => <hr className="my-8 border-border/40" />,
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  };
}
