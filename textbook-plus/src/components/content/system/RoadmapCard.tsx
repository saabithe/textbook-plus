interface Milestone {
  label: string;
  status: "done" | "current" | "planned";
  date?: string;
}

interface RoadmapCardProps {
  title?: string;
  milestones: Milestone[];
}

const statusStyle: Record<string, string> = {
  done: "bg-green-500 text-white",
  current: "bg-primary text-primary-foreground",
  planned: "bg-muted text-muted-foreground border border-border/60",
};

export function RoadmapCard({ title, milestones }: RoadmapCardProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className="space-y-0">
        {milestones.map((m, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${statusStyle[m.status]}`}>
                {m.status === "done" ? "✓" : i + 1}
              </div>
              {i < milestones.length - 1 && (
                <div className="w-px flex-1 bg-border/60 my-1" />
              )}
            </div>
            <div className="pb-4 pt-0.5">
              <p className="text-sm font-medium text-foreground">{m.label}</p>
              {m.date && (
                <p className="text-xs text-muted-foreground mt-0.5">{m.date}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
