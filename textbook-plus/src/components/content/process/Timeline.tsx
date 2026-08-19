interface TimelineEvent {
  date: string;
  label: string;
  detail?: string;
}

interface TimelineProps {
  title?: string;
  events: TimelineEvent[];
}

export function Timeline({ title, events }: TimelineProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className="space-y-0">
        {events.map((event, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                {i + 1}
              </div>
              {i < events.length - 1 && (
                <div className="w-px flex-1 bg-border/60 my-1" />
              )}
            </div>
            <div className="pb-4 pt-0.5">
              <span className="text-xs font-medium text-primary">{event.date}</span>
              <p className="text-sm font-medium text-foreground leading-snug">{event.label}</p>
              {event.detail && (
                <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{event.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
