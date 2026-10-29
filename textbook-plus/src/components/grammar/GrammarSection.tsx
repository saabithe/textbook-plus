import type { ReactNode } from "react";

interface GrammarSectionProps {
  /** Anchor id used for in-page links. */
  id: string;
  /** Heading shown at the top of the section. Omit for a heading-less block (e.g. the key-takeaway). */
  title?: ReactNode;
  children: ReactNode;
}

/**
 * Uniform wrapper for a concept-tab section in a grammar topic:
 * a `scroll-mt-24` section with a hairline rule above and an optional h2 heading.
 */
export function GrammarSection({ id, title, children }: GrammarSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 mt-14 border-t border-border pt-6">
      {title ? (
        <h2 className="t-h2 mb-5">{title}</h2>
      ) : null}
      {children}
    </section>
  );
}
