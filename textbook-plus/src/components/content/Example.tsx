import { Calculator } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExampleProps {
  title?: string;
  children: React.ReactNode;
}

export function Example({ title = "Example", children }: ExampleProps) {
  return (
    <div className="relative my-6 overflow-hidden rounded-2xl border border-blue-500/25 bg-gradient-to-br from-blue-500/[0.09] via-cyan-500/[0.04] to-transparent px-5 py-4 shadow-sm dark:from-blue-500/[0.12] dark:via-cyan-500/[0.06] dark:to-transparent">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-blue-500/40 via-cyan-500/20 to-transparent" />
      <div className="flex items-center gap-2.5 mb-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 shadow-sm shadow-blue-500/30">
          <Calculator className="h-3.5 w-3.5 text-white" />
        </span>
        <span className="text-sm font-extrabold uppercase tracking-widest text-blue-700 dark:text-blue-300">
          {title}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent ml-1" />
      </div>
      <div className="text-[0.95rem] leading-[1.75] text-foreground/85">{children}</div>
    </div>
  );
}