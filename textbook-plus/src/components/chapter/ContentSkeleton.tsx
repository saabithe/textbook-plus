export function ContentSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-7 w-48 rounded bg-muted" />
      <div className="space-y-3">
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-3/4 rounded bg-muted" />
      </div>
      <div className="h-44 rounded-xl bg-muted/50" />
      <div className="space-y-3">
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-5/6 rounded bg-muted" />
        <div className="h-4 w-full rounded bg-muted" />
      </div>
    </div>
  );
}
