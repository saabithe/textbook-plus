interface EventItem {
  trigger: string;
  action: string;
}

interface EventFlowProps {
  title?: string;
  events: EventItem[];
}

export function EventFlow({ title, events }: EventFlowProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className="space-y-0">
        {events.map((event, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-yellow-500/10 text-[10px] font-bold text-yellow-600">
                ⚡
              </div>
              {i < events.length - 1 && (
                <div className="w-px flex-1 bg-border/60 my-1" />
              )}
            </div>
            <div className="pb-4 pt-0.5">
              <p className="text-xs font-medium text-yellow-600">Trigger: {event.trigger}</p>
              <p className="text-sm text-foreground mt-0.5">{event.action}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
