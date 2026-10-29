import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export function ChapterSkeleton() {
  return (
    <div
      className="mx-auto max-w-[1280px] px-6 py-10"
      aria-busy="true"
      aria-live="polite"
    >
      {/* Breadcrumb skeleton */}
      <div className="mb-6 flex items-center gap-2" aria-hidden>
        <Skeleton className="h-3 w-12 rounded-[3px]" />
        <Skeleton className="h-3 w-3 rounded-[3px]" />
        <Skeleton className="h-3 w-16 rounded-[3px]" />
        <Skeleton className="h-3 w-3 rounded-[3px]" />
        <Skeleton className="h-3 w-32 rounded-[3px]" />
      </div>

      {/* Header skeleton */}
      <header
        className="relative mb-8 overflow-hidden rounded-lg border border-border bg-card p-7 sm:p-8"
        aria-hidden
      >
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-[3px] bg-border"
        />
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0 space-y-3">
            <Skeleton className="h-3 w-24 rounded-[3px]" />
            <Skeleton className="h-9 w-64 rounded-[3px]" />
          </div>
          <Skeleton className="h-12 w-12 shrink-0 rounded-[3px]" />
        </div>
        <div aria-hidden className="-mx-7 mt-6 border-t border-border sm:-mx-8" />
        <Skeleton className="mt-4 h-3 w-48 rounded-[3px]" />
      </header>

      {/* Tab strip skeleton */}
      <div className="mb-8" aria-hidden>
        <div className="flex gap-6">
          <Skeleton className="h-4 w-20 rounded-[3px]" />
          <Skeleton className="h-4 w-20 rounded-[3px]" />
        </div>
        <Separator className="mt-2" />
      </div>

      {/* Content — railed on Learning only */}
      <div className="xl:grid xl:grid-cols-[200px_minmax(0,72ch)_200px] xl:gap-12">
        <div aria-hidden className="hidden xl:block" />

        <article
          data-chapter-content
          className="min-w-0 max-w-none space-y-6"
          aria-hidden
        >
          <Skeleton className="h-6 w-48 rounded-[3px]" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full rounded-[3px]" />
            <Skeleton className="h-4 w-full rounded-[3px]" />
            <Skeleton className="h-4 w-3/4 rounded-[3px]" />
          </div>
          <Skeleton className="h-40 w-full rounded-[3px]" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full rounded-[3px]" />
            <Skeleton className="h-4 w-5/6 rounded-[3px]" />
            <Skeleton className="h-4 w-full rounded-[3px]" />
          </div>
          <Skeleton className="h-6 w-56 rounded-[3px]" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full rounded-[3px]" />
            <Skeleton className="h-4 w-2/3 rounded-[3px]" />
          </div>
          <div className="mt-10 rounded-lg border border-border">
            <div className="border-b border-border p-4">
              <Skeleton className="h-3 w-24 rounded-[3px]" />
            </div>
            <div className="space-y-2 p-4">
              <Skeleton className="h-4 w-full rounded-[3px]" />
              <Skeleton className="h-4 w-full rounded-[3px]" />
              <Skeleton className="h-4 w-4/5 rounded-[3px]" />
            </div>
          </div>
        </article>

        {/* Rail skeleton (xl only) */}
        <div
          className="hidden xl:flex xl:flex-col xl:gap-2 pt-1"
          aria-hidden
        >
          <Skeleton className="mb-3 h-3 w-20 rounded-[3px]" />
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-4 w-full max-w-[180px] rounded-[3px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
