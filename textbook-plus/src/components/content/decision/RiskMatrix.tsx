interface RiskItem {
  risk: string;
  probability: "low" | "medium" | "high";
  impact: "low" | "medium" | "high";
  mitigation?: string;
}

interface RiskMatrixProps {
  title?: string;
  risks: RiskItem[];
}

const levelColor: Record<string, string> = {
  low: "bg-green-500/10 text-green-700 border-green-500/20",
  medium: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
  high: "bg-red-500/10 text-red-700 border-red-500/20",
};

export function RiskMatrix({ title, risks }: RiskMatrixProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className="space-y-2">
        {risks.map((r, i) => (
          <div key={i} className="border border-border/40 rounded-lg p-3">
            <p className="text-sm font-medium text-foreground mb-2">{r.risk}</p>
            <div className="flex gap-2 flex-wrap">
              <span className={`px-2 py-0.5 rounded text-xs font-medium border ${levelColor[r.probability]}`}>
                P: {r.probability}
              </span>
              <span className={`px-2 py-0.5 rounded text-xs font-medium border ${levelColor[r.impact]}`}>
                I: {r.impact}
              </span>
            </div>
            {r.mitigation && (
              <p className="text-xs text-muted-foreground mt-2">Mitigation: {r.mitigation}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
