import { CheckCircle2, XCircle, Zap, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FateCard {
  title: string;
  effect: string;
  outcome: string;
  radiates: boolean;
}

const CARDS: FateCard[] = [
  {
    title: "Stationary charge",
    effect: "Electrostatic field (constant)",
    outcome: "No radiation",
    radiates: false,
  },
  {
    title: "Uniform motion",
    effect: "Steady magnetic field",
    outcome: "No radiation",
    radiates: false,
  },
  {
    title: "Accelerated charge",
    effect: "Time-varying E + B",
    outcome: "EM radiation",
    radiates: true,
  },
];

export function ChargeFateTrio() {
  return (
    <div className="my-6">
      <div className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
        <Zap className="h-4 w-4 text-amber-500" />
        <span>What kind of charge produces what?</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.35fr]">
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            className={cn(
              "relative flex flex-col justify-between overflow-hidden rounded-2xl border px-4 py-4 shadow-sm transition-shadow",
              card.radiates
                ? "border-emerald-500/40 bg-gradient-to-br from-emerald-500/[0.14] via-teal-500/[0.08] to-emerald-500/[0.04] ring-2 ring-emerald-500/20"
                : "border-border/60 bg-muted/20"
            )}
          >
            <div
              className={cn(
                "absolute inset-x-0 top-0 h-1",
                card.radiates
                  ? "bg-gradient-to-r from-emerald-400 to-teal-400"
                  : "bg-gradient-to-r from-muted-foreground/30 to-muted-foreground/10"
              )}
            />
            <div>
              <p
                className={cn(
                  "text-sm font-extrabold tracking-tight",
                  card.radiates
                    ? "text-emerald-800 dark:text-emerald-300"
                    : "text-foreground"
                )}
              >
                {card.title}
              </p>
              <div className="mt-2 flex flex-col gap-1.5">
                <p className="text-[0.8rem] font-medium text-foreground/75">{card.effect}</p>
                <ArrowDown className="h-3.5 w-3.5 text-muted-foreground/60" />
                <p className="text-[0.8rem] leading-snug text-foreground/90">
                  {card.radiates ? (
                    <>
                      Time-varying <strong>E + B</strong>
                    </>
                  ) : (
                    "Field does not vary with time"
                  )}
                </p>
              </div>
            </div>
            <div
              className={cn(
                "mt-3 inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1 text-[0.72rem] font-extrabold uppercase tracking-[0.1em]",
                card.radiates
                  ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30"
                  : "bg-muted-foreground/10 text-muted-foreground"
              )}
            >
              {card.radiates ? (
                <CheckCircle2 className="h-3.5 w-3.5" />
              ) : (
                <XCircle className="h-3.5 w-3.5" />
              )}
              <span>
                {i === 0 || i === 1 ? "Does not radiate" : "Radiates"}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[0.8rem] leading-relaxed text-muted-foreground">
        In accelerated motion the charge&apos;s <strong>E</strong> and <strong>B</strong> fields become
        time-varying — the seed of an electromagnetic wave.
      </p>
    </div>
  );
}