export function ChapterSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10 animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2 mb-8">
        <div className="h-4 w-12 rounded bg-muted" />
        <div className="h-3 w-3 rounded bg-muted" />
        <div className="h-4 w-16 rounded bg-muted" />
        <div className="h-3 w-3 rounded bg-muted" />
        <div className="h-4 w-32 rounded bg-muted" />
      </div>

      {/* Header skeleton */}
      <div className="mb-10 flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-muted" />
            <div className="h-9 w-64 rounded bg-muted" />
          </div>
          <div className="h-4 w-20 rounded bg-muted ml-11" />
        </div>
        <div className="h-9 w-32 rounded-lg bg-muted" />
      </div>

      {/* Content skeleton */}
      <div className="flex gap-12">
        {/* Article skeleton */}
        <div className="min-w-0 flex-1 max-w-3xl space-y-6">
          <div className="h-7 w-48 rounded bg-muted" />
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-3/4 rounded bg-muted" />
          </div>
          <div className="h-40 rounded-xl bg-muted/50" />
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-5/6 rounded bg-muted" />
            <div className="h-4 w-full rounded bg-muted" />
          </div>
          <div className="h-7 w-56 rounded bg-muted mt-8" />
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-2/3 rounded bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}
