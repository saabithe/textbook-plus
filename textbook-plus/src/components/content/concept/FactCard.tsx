interface FactCardProps {
  title?: string;
  definition: string;
  icon?: string;
}

export function FactCard({ title, definition, icon }: FactCardProps) {
  return (
    <div className="relative my-6 overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/[0.07] via-teal-500/[0.03] to-transparent px-5 py-4 shadow-sm dark:from-emerald-500/[0.10] dark:via-teal-500/[0.06] dark:to-transparent">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-500/40 via-teal-500/20 to-transparent" />
      <div className="flex items-start gap-3">
        {icon && (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 text-white shadow-sm shadow-emerald-500/30 mt-0.5 text-base">
            <span className="text-sm leading-none">{icon}</span>
          </span>
        )}
        <div>
          {title && (
            <span className="mb-1 block text-sm font-extrabold tracking-tight text-emerald-800 dark:text-emerald-200">
              {title}
            </span>
          )}
          <p className="text-sm leading-relaxed text-foreground/80">{definition}</p>
        </div>
      </div>
    </div>
  );
}