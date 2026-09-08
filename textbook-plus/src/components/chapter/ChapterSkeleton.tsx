import { Skeleton } from "@/components/ui/skeleton";

export function ChapterSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2 mb-8">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-3 w-3 rounded-full" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-3 w-3 rounded-full" />
        <Skeleton className="h-4 w-32" />
      </div>

      {/* Header skeleton */}
      <div className="mb-10 flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-lg" />
            <Skeleton className="h-9 w-64" />
          </div>
          <Skeleton className="h-4 w-20 ml-11" />
        </div>
        <Skeleton className="h-9 w-32 rounded-lg" />
      </div>

      {/* Content skeleton */}
      <div className="flex gap-12">
        {/* Article skeleton */}
        <div className="min-w-0 flex-1 max-w-3xl space-y-6">
          <Skeleton className="h-7 w-48" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-40 rounded-xl bg-muted/50" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
          </div>
          <Skeleton className="h-7 w-56 mt-8" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}
