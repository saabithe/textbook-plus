"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
        <div style={{ maxWidth: "24rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Something went wrong
          </h2>
          <p style={{ color: "#71717a", marginBottom: "1rem", fontSize: "0.875rem" }}>
            {error.digest ? `Error reference: ${error.digest}` : "An unexpected error occurred."}
          </p>
          <button
            onClick={reset}
            style={{
              borderRadius: "0.5rem",
              border: "1px solid #d4d4d8",
              padding: "0.5rem 1rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
