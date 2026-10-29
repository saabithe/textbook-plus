"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="t-micro">Error</p>
      <h1 className="t-h2">Something went wrong</h1>
      <p className="t-caption max-w-sm text-muted-foreground">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center rounded-[3px] border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-rule-strong"
      >
        Try again
      </button>
    </div>
  );
}