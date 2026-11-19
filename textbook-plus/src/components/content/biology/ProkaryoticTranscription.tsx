import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { Highlight } from "@/components/content/Highlight";

const EYEBROW =
  "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

interface RnaCard {
  name: string;
  description: ReactNode;
}

const RNA_CARDS: RnaCard[] = [
  {
    name: "mRNA (Messenger RNA)",
    description: (
      <>
        Provides the <strong>genetic template</strong>.
      </>
    ),
  },
  {
    name: "tRNA (Transfer RNA)",
    description: (
      <>
        Brings <strong>specific amino acids</strong> and reads the{" "}
        <strong>genetic code</strong>.
      </>
    ),
  },
  {
    name: "rRNA (Ribosomal RNA)",
    description: (
      <>
        Performs <strong>structural and catalytic roles</strong> during protein
        synthesis.
      </>
    ),
  },
];

const NTPS = ["ATP", "GTP", "CTP", "UTP"];

type StageTone = "emerald" | "blue" | "amber";

interface Stage {
  number: string;
  name: string;
  tone: StageTone;
  factor?: { symbol: string; label: string };
  points: ReactNode[];
  icon: ReactNode;
}

const INITIATION_ICON = (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    role="img"
    aria-label="Initiation begins transcription"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      className="fill-none stroke-current"
      strokeWidth="1.6"
    />
    <path d="M10 8 L16 12 L10 16 Z" className="fill-current" />
  </svg>
);

const ELONGATION_ICON = (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    role="img"
    aria-label="Elongation extends the RNA chain"
  >
    <path
      d="M4 12 H18 M14 8 L19 12 L14 16"
      className="fill-none stroke-current"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TERMINATION_ICON = (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    role="img"
    aria-label="Termination releases the transcript"
  >
    <rect
      x="6"
      y="6"
      width="12"
      height="12"
      rx="2"
      className="fill-none stroke-current"
      strokeWidth="1.8"
    />
  </svg>
);

const STAGES: Stage[] = [
  {
    number: "01",
    name: "Initiation",
    tone: "emerald",
    factor: { symbol: "σ", label: "Sigma factor" },
    icon: INITIATION_ICON,
    points: [
      <>
        RNA polymerase transiently associates with the{" "}
        <strong>initiation factor (σ – Sigma factor)</strong>.
      </>,
      <>
        The complex binds to the <strong>Promoter (P)</strong>.
      </>,
      <>
        <strong>Transcription begins.</strong>
      </>,
    ],
  },
  {
    number: "02",
    name: "Elongation",
    tone: "blue",
    icon: ELONGATION_ICON,
    points: [
      <>
        RNA polymerase unwinds the <strong>DNA double helix</strong>.
      </>,
      <>
        Adds <strong>ribonucleoside triphosphates (NTPs)</strong>.
      </>,
      <>
        Follows <strong>complementarity rules</strong>.
      </>,
      <>
        Synthesises RNA in the <strong>5′ → 3′ direction</strong>.
      </>,
    ],
  },
  {
    number: "03",
    name: "Termination",
    tone: "amber",
    factor: { symbol: "ρ", label: "Rho factor" },
    icon: TERMINATION_ICON,
    points: [
      <>
        RNA polymerase reaches the <strong>Terminator (T)</strong>.
      </>,
      <>
        Transiently associates with the{" "}
        <strong>termination factor (ρ – Rho factor)</strong>.
      </>,
      <>
        Nascent RNA transcript and enzyme are{" "}
        <strong>released from the template</strong>.
      </>,
    ],
  },
];

const TONE_CLASSES: Record<
  StageTone,
  { card: string; number: string; chip: string; icon: string }
> = {
  emerald: {
    card: "border-emerald-600/30 bg-emerald-50/40 dark:bg-emerald-950/20",
    number: "text-emerald-700 dark:text-emerald-300",
    chip: "border-emerald-600/40 bg-emerald-100/60 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200",
    icon: "text-emerald-700 dark:text-emerald-300",
  },
  blue: {
    card: "border-blue-600/30 bg-blue-50/40 dark:bg-blue-950/20",
    number: "text-blue-700 dark:text-blue-300",
    chip: "border-blue-600/40 bg-blue-100/60 text-blue-800 dark:bg-blue-950/40 dark:text-blue-200",
    icon: "text-blue-700 dark:text-blue-300",
  },
  amber: {
    card: "border-amber-600/30 bg-amber-50/40 dark:bg-amber-950/20",
    number: "text-amber-700 dark:text-amber-300",
    chip: "border-amber-600/40 bg-amber-100/60 text-amber-800 dark:bg-amber-950/40 dark:text-amber-200",
    icon: "text-amber-700 dark:text-amber-300",
  },
};

/**
 * ProkaryoticTranscription — the three functional RNAs, the single enzyme and
 * its NTP substrates, and the σ / ρ assisted three-stage transcription cycle.
 */
export function ProkaryoticTranscription() {
  return (
    <div className="my-6">
      <div>
        <div className={EYEBROW}>RNA types and their functions</div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          Three major <strong>functional RNAs</strong> are involved in protein
          synthesis:
        </p>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          {RNA_CARDS.map((card) => (
            <div
              key={card.name}
              className="rounded-2xl border border-border bg-card p-4"
            >
              <div className="text-sm font-bold tracking-tight text-foreground">
                {card.name}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className={EYEBROW}>Enzyme and substrates</div>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-3.5">
            <div className={EYEBROW}>Enzyme</div>
            <p className="mt-1 text-sm leading-relaxed text-foreground">
              <strong>DNA-dependent RNA polymerase</strong>.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-3.5">
            <div className={EYEBROW}>Substrates / energy source</div>
            <p className="mt-1 text-sm leading-relaxed text-foreground">
              <strong>Ribonucleoside triphosphates (NTPs)</strong>.
            </p>
          </div>
        </div>
        <div className="mt-3 rounded-2xl border border-border bg-card p-4">
          <div className={EYEBROW}>NTPs</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {NTPS.map((ntp) => (
              <span
                key={ntp}
                className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-semibold text-foreground"
              >
                {ntp}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-emerald-600/30 bg-emerald-50/40 p-4 dark:bg-emerald-950/20">
          <div className="text-sm font-bold tracking-tight text-foreground">
            <Highlight color="yellow">One enzyme, three RNA types</Highlight>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            A single <strong>DNA-dependent RNA polymerase</strong> catalyses the
            synthesis of all three major RNA types in bacteria.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div className={EYEBROW}>Three stages of prokaryotic transcription</div>
        <div className="mt-3">
          {STAGES.map((stage, index) => {
            const tone = TONE_CLASSES[stage.tone];
            return (
              <div key={stage.number}>
                <div className={`rounded-2xl border p-4 ${tone.card}`}>
                  <div className="flex items-start gap-3">
                    <div
                      className={`shrink-0 text-3xl font-black leading-none tracking-tight ${tone.number}`}
                    >
                      {stage.number}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="text-sm font-bold tracking-tight text-foreground">
                          {stage.name}
                        </div>
                        <div className="flex items-center gap-2">
                          {stage.factor && (
                            <span
                              title={stage.factor.label}
                              aria-label={stage.factor.label}
                              className={`rounded-md border px-2 py-0.5 text-sm font-bold ${tone.chip}`}
                            >
                              {stage.factor.symbol}
                            </span>
                          )}
                          <span className={tone.icon}>{stage.icon}</span>
                        </div>
                      </div>
                      <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
                        {stage.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < STAGES.length - 1 && (
                  <div className="flex justify-center py-1.5" aria-hidden>
                    <ArrowDown className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
