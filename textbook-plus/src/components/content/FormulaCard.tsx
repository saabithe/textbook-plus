import { Sigma } from "lucide-react";

interface FormulaCardProps {
  children: React.ReactNode;
}

export function FormulaCard({ children }: FormulaCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.08] via-indigo-500/[0.04] to-transparent dark:from-violet-500/[0.12] dark:via-indigo-500/[0.07] dark:to-transparent px-5 py-4 my-6 shadow-sm">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-violet-500/30 via-indigo-500/20 to-transparent" />
      <div className="flex items-center gap-1.5 mb-2.5">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-400 shadow-sm shadow-violet-500/30">
          <Sigma className="h-3.5 w-3.5 text-white" />
        </span>
        <span className="text-xs font-extrabold tracking-widest text-violet-600 dark:text-violet-400 uppercase">Formula</span>
        <span className="h-px flex-1 bg-gradient-to-r from-violet-500/20 to-transparent ml-2" />
      </div>
      {children}
    </div>
  );
}
