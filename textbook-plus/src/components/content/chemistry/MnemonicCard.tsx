import type { ReactNode } from "react";
import { Brain } from "lucide-react";

export interface MnemonicEntry {
  /** The first letter the mnemonic gives, e.g. "O". */
  letter: string;
  /** The name that letter stands for, e.g. "Oxalic". */
  name: ReactNode;
}

interface MnemonicCardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The mnemonic sentence, e.g. "Oh My Son Go And Pray Splendidly". */
  phrase: string;
  entries: MnemonicEntry[];
}

/**
 * MnemonicCard — a memory sentence kept as a card of its own, away from the
 * table it encodes. The first letter of every word is lifted out in colour and
 * the same letters are then listed against their acids, so the sentence and the
 * series can be checked against each other without reading a paragraph.
 */
export function MnemonicCard({ title, phrase, entries }: MnemonicCardProps) {
  const words = phrase.split(" ");

  return (
    <section className="my-6 overflow-hidden rounded-lg border border-[color-mix(in_oklab,var(--subject-chemistry)_32%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_5%,transparent)]">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[color-mix(in_oklab,var(--subject-chemistry)_24%,transparent)] px-4 py-3">
        <span className="flex items-center gap-2 t-micro">
          <Brain
            aria-hidden
            className="h-3.5 w-3.5 text-[var(--subject-chemistry)]"
            strokeWidth={2}
          />
          {title ?? "Mnemonic"}
        </span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-[var(--subject-chemistry)]">
          Memory card
        </span>
      </div>

      <div className="px-3 py-4 sm:px-4">
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-center text-[1.30rem] font-extrabold leading-tight tracking-[-0.015em] text-foreground sm:text-[1.5rem]">
          {words.map((word, index) => (
            <span key={index} className="whitespace-nowrap">
              <span className="text-[var(--subject-chemistry)]">{word.slice(0, 1)}</span>
              {word.slice(1)}
            </span>
          ))}
        </p>

        <ul className="mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:grid-cols-7">
          {entries.map((entry, index) => (
            <li
              key={index}
              className="flex min-w-0 items-baseline gap-1.5 rounded-md border border-border/70 bg-card px-2 py-1.5"
            >
              <span className="text-[0.9rem] font-extrabold leading-none text-[var(--subject-chemistry)]">
                {entry.letter}
              </span>
              <span className="min-w-0 text-[0.76rem] font-bold leading-snug text-foreground">
                {entry.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
