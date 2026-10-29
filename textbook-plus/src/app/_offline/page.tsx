export default function OfflinePage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="t-micro">Offline</p>
      <h1 className="t-h2">You&apos;re offline</h1>
      <p className="t-caption max-w-sm text-muted-foreground">
        Check your internet connection and try again.
      </p>
      <a
        href="/"
        className="inline-flex items-center rounded-[3px] border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-rule-strong"
      >
        Retry
      </a>
    </div>
  );
}