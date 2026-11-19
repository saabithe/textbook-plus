import { FormulaBlock } from "@/components/content/Formula";

export function CentralDogmaPrinciple() {
  return (
    <>
      <p className="my-4 text-sm leading-relaxed text-foreground">
        <strong>Proposed by:</strong> Francis Crick.
      </p>
      <p className="my-4 text-sm leading-relaxed text-foreground">
        The central dogma describes the general flow of genetic information:
      </p>
      <FormulaBlock latex={String.raw`\boxed{\text{DNA}\rightarrow\text{RNA}\rightarrow\text{Protein}}`} important />
      <p className="my-4 text-sm font-bold tracking-tight text-foreground">Two main processes:</p>
      <ol className="my-4 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
        <li><strong>Transcription:</strong> DNA → mRNA.</li>
        <li><strong>Translation:</strong> mRNA → Protein.</li>
      </ol>
    </>
  );
}

export function ReplicationNote() {
  return (
    <>
      <p className="my-4 text-sm leading-relaxed text-foreground">
        DNA produces another DNA molecule.
      </p>
      <FormulaBlock latex={String.raw`\text{DNA}\xrightarrow{\text{Replication}}\text{DNA}`} />
    </>
  );
}

export function ReverseTranscriptionNote() {
  return (
    <>
      <p className="my-4 text-sm leading-relaxed text-foreground">
        In certain retroviruses, genetic information flows from RNA to DNA.
      </p>
      <FormulaBlock latex={String.raw`\text{RNA}\xrightarrow{\text{Reverse transcription}}\text{DNA}`} />
      <p className="my-4 text-sm leading-relaxed text-foreground">
        <strong>Example:</strong> HIV.
      </p>
    </>
  );
}
