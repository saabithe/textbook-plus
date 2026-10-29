"use client";

import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head />
      <body className="min-h-full flex flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground font-sans">
        <p className="t-micro">Error</p>
        <h2 className="t-h2">Something went wrong</h2>
        <p className="t-caption max-w-sm text-muted-foreground">
          {error.digest ? `Error reference: ${error.digest}` : "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center rounded-[3px] border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-rule-strong"
        >
          Try again
        </button>
      </body>
    </html>
  );
}