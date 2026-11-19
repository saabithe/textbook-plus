import type { ReactNode } from "react";
import { Highlight } from "@/components/content/Highlight";
import { Comparison } from "@/components/content/Comparison";

const EYEBROW =
  "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

interface ProblemCard {
  marker: string;
  title: string;
  cause: string;
  consequences: ReactNode[];
}

const PROBLEMS: ProblemCard[] = [
  {
    marker: "01",
    title: "Dual Protein Conflict",
    cause: "Both strands would produce RNA molecules with different base sequences.",
    consequences: [
      <>
        <strong>Translation outcome:</strong> These could translate into{" "}
        <Highlight color="yellow">two different proteins</Highlight> from the
        same DNA segment.
      </>,
      <>
        <strong>Genetic information transfer</strong> would be complicated.
      </>,
    ],
  },
  {
    marker: "02",
    title: "Double-Stranded RNA Formation",
    cause: "The two complementary RNA molecules would hybridise.",
    consequences: [
      <>
        <strong>Double-stranded RNA (dsRNA)</strong> would form.
      </>,
      <>
        <strong>Translation blocked:</strong>{" "}
        <Highlight color="yellow">dsRNA formation</Highlight> would prevent
        translation into proteins, rendering transcription futile.
      </>,
    ],
  },
];

/**
 * Section 1 — definition, complementarity, selective copying, and the two
 * consequences of transcribing both DNA strands. All section headings live in
 * the page; this component only supplies eyebrows and styled sub-titles.
 */
export function TranscriptionFundamentals() {
  return (
    <section className="my-6">
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className={EYEBROW}>Definition</div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          <strong>Transcription</strong> is the process of copying genetic
          information from one strand of DNA into an RNA molecule.
        </p>
      </div>

      <div className="mt-6">
        <div className={EYEBROW}>1.1 Complementarity principle</div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          Transcription follows the <strong>complementarity principle</strong>.
        </p>
        <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
          <li>
            <strong>Adenine (A) → Uracil (U)</strong>
          </li>
          <li>
            <strong>Other complementary base-pairing</strong> follows the
            DNA–RNA complementarity rules.
          </li>
        </ul>
        <div className="rounded-xl border border-border bg-card p-3.5">
          <div className={EYEBROW}>Important distinction</div>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground">
            Adenine pairs with Uracil instead of Thymine in RNA.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className={EYEBROW}>1.2 Selective copying of DNA</div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          Unlike DNA replication, transcription does not copy the entire genome.
        </p>
        <div className="mt-3 rounded-2xl border border-border bg-card p-4">
          <Comparison
            columns={[
              {
                title: "DNA Replication",
                children: (
                  <>
                    <Highlight color="yellow">Entire genome</Highlight> is
                    duplicated. Both DNA strands participate.
                  </>
                ),
              },
              {
                title: "Transcription",
                children: (
                  <>
                    <Highlight color="yellow">Specific DNA segment</Highlight>{" "}
                    is copied. Only one of the two strands acts as template.
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>

      <div className="mt-6">
        <div className={EYEBROW}>
          1.3 Why are both DNA strands not transcribed?
        </div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          If both strands acted as templates, two problems would arise:
        </p>
        <div className="mt-3 space-y-3">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.marker}
              className="rounded-2xl border border-border bg-card p-4"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-sm font-bold tabular-nums text-foreground">
                  {problem.marker}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold tracking-tight text-foreground">
                    {problem.title}
                  </div>
                  <div className="mt-3">
                    <div className={EYEBROW}>Cause</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                      {problem.cause}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-px flex-1 bg-border" />
                    <span className={EYEBROW}>Consequence</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
                    {problem.consequences.map((consequence, index) => (
                      <li key={index}>{consequence}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
