import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="t-micro">Not found</p>
      <h1 className="t-h2">Page not found</h1>
      <p className="t-caption max-w-sm text-muted-foreground">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center rounded-[3px] border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-rule-strong"
      >
        Back to home
      </Link>
    </div>
  );
}