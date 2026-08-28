import { Sigma } from "lucide-react";

interface FormulaCardProps {
  children: React.ReactNode;
}

export function FormulaCard({ children }: FormulaCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.08] via-indigo-500/[0.04] to-transparent dark:from-violet-500/[0.12] dark:via-indigo-500/[0.07] dark:to-transparent px-5 py-4 my-6 shadow-sm">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-violet-500/30 via-indigo-500/20 to-transparent" />
      <div className="flex items-center gap-1.5 mb-2.5">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-violet-500/15 dark:bg-violet-500/20">
          <Sigma className="h-3 w-3 text-violet-600 dark:text-violet-400" />
        </span>
        <span className="text-[10px] font-bold tracking-[0.14em] text-violet-600 dark:text-violet-400 uppercase">Formula</span>
        <span className="h-px flex-1 bg-gradient-to-r from-violet-500/20 to-transparent ml-2" />
      </div>
      {children}
    </div>
  );
}
