interface FormulaCardProps {
  children: React.ReactNode;
}

export function FormulaCard({ children }: FormulaCardProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-muted/30 px-5 py-4 my-6">
      {children}
    </div>
  );
}
