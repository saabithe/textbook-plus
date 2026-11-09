import { ArrowRight } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

type Variant = "sigma" | "pi";

const CONTENT = {
  sigma: {
    caption: "Ligand-to-metal sigma donation",
    donor: "CO",
    donorNote: "lone pair on carbon",
    acceptor: "M",
    acceptorNote: "vacant d orbital",
    equation: String.raw`M \leftarrow CO`,
    accent: "warning",
  },
  pi: {
    caption: "Metal-to-ligand pi back-donation",
    donor: "M",
    donorNote: "filled d orbital",
    acceptor: "CO",
    acceptorNote: "vacant π* orbital",
    equation: String.raw`M \rightarrow CO`,
    accent: "physics",
  },
} as const;

function Node({ symbol, note }: { symbol: string; note: string }) {
  return (
    <div className="min-w-[5.5rem] rounded-md border border-border bg-muted/40 px-3 py-2 text-center">
      <p className="text-base font-extrabold text-foreground">{symbol}</p>
      <p className="mt-0.5 text-[0.7rem] leading-tight text-muted-foreground">{note}</p>
    </div>
  );
}

/**
 * DonationDiagram — one directional arrow between the donor and the acceptor,
 * with the electron flow named above it and the shorthand equation below.
 */
export function DonationDiagram({ variant }: { variant: Variant }) {
  const data = CONTENT[variant];
  const isSigma = variant === "sigma";

  return (
    <figure className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <span className="t-micro">{data.caption}</span>
      </div>

      <div className="px-4 py-5">
        <div className="flex items-center justify-center gap-3">
          <Node symbol={data.donor} note={data.donorNote} />

          <div className="flex min-w-[6rem] flex-1 flex-col items-center gap-1">
            <span
              className={cn(
                "t-micro",
                isSigma ? "text-warning" : "text-[var(--subject-physics)]",
              )}
            >
              {isSigma ? "σ donation" : "π back-donation"}
            </span>
            <span className="flex w-full items-center">
              <span
                className={cn(
                  "h-px flex-1",
                  isSigma ? "bg-warning/60" : "bg-[color-mix(in_oklab,var(--subject-physics)_60%,transparent)]",
                )}
              />
              <ArrowRight
                aria-hidden
                className={cn(
                  "h-4 w-4 shrink-0",
                  isSigma ? "text-warning" : "text-[var(--subject-physics)]",
                )}
              />
            </span>
          </div>

          <Node symbol={data.acceptor} note={data.acceptorNote} />
        </div>

        <p className="mt-4 text-center">
          <Formula>{data.equation}</Formula>
        </p>
      </div>
    </figure>
  );
}
