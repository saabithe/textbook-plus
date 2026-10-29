"use client";

import { useState, useRef, type RefObject, type ReactNode } from "react";

import { Callout } from "@/components/content/Callout";
import { GrammarTabs, type GrammarTab } from "@/components/grammar/GrammarTabs";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";
import { ChapterToc } from "@/components/chapter/ChapterToc";
import { AnnotationLayer } from "@/components/annotate/AnnotationLayer";

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
 * practice quiz when the Practice tab is active. Railled on the Concept tab.
 */
export function GrammarTopicLayout({
  intro,
  introExtra,
  children,
  questions,
}: GrammarTopicLayoutProps) {
  const [tab, setTab] = useState<GrammarTab>("concept");
  const articleRef = useRef<HTMLElement | null>(null);

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-10">
      <GrammarTabs tab={tab} onTabChange={setTab} />

      <AnnotationLayer containerRef={articleRef as RefObject<HTMLElement | null>} enabled={tab === "concept"} />
      {tab === "concept" ? (
        <div className="xl:grid xl:grid-cols-[200px_minmax(0,72ch)_200px] xl:gap-12">
          <div aria-hidden className="hidden xl:block" />

          <article ref={articleRef} data-chapter-content className="min-w-0 max-w-none">
            <section id="introduction" className="scroll-mt-24">
              <Callout type="note">{intro}</Callout>
              {introExtra}
            </section>
            {children}
          </article>

          <ChapterToc />
        </div>
      ) : (
        <div className="mx-auto max-w-[72ch]">
          <GrammarQuiz questions={questions} />
        </div>
      )}
    </div>
  );
}
