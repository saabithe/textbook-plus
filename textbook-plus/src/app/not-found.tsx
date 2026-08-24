import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-6xl font-bold tracking-tight">404</p>
      <h1 className="text-xl font-bold">Page not found</h1>
      <p className="max-w-sm text-sm text-muted-foreground">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/"
        className="rounded-lg border border-border/60 bg-muted/50 px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        Back to home
      </Link>
    </div>
  );
}
