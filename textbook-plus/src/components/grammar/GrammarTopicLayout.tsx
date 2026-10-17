"use client";

import { useState, type ReactNode } from "react";

import { Callout } from "@/components/content/Callout";
import { GrammarTabs, type GrammarTab } from "@/components/grammar/GrammarTabs";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";

interface GrammarTopicLayoutProps {
  /** Definition shown in the one-sentence intro callout (term + meaning). */
  intro: ReactNode;
  /** Optional extra intro blocks rendered after the callout (e.g. overview tables). */
  introExtra?: ReactNode;
  /** Concept-tab sections. Wrap each in <GrammarSection>. */
  children: ReactNode;
  questions: GrammarQuestion[];
}

/**
 * Shared shell for every grammar topic: owns the Concept/Practice tab state,
 * renders the intro callout above the concept sections, and swaps in the
 * practice quiz when the Practice tab is active.
 */
export function GrammarTopicLayout({
  intro,
  introExtra,
  children,
  questions,
}: GrammarTopicLayoutProps) {
  const [tab, setTab] = useState<GrammarTab>("concept");

  return (
    <>
      <GrammarTabs tab={tab} onTabChange={setTab} />

      {tab === "concept" ? (
        <>
          <section id="introduction" className="scroll-mt-24">
            <Callout type="note">{intro}</Callout>
            {introExtra}
          </section>
          {children}
        </>
      ) : (
        <GrammarQuiz questions={questions} />
      )}
    </>
  );
}
