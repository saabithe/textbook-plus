import Link from "next/link";

export default function AuthCodeError() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Authentication Error</h1>
        <p className="text-muted-foreground">
          Something went wrong during authentication. Please try again.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
