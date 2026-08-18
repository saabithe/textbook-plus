"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { FlashcardCard } from "./FlashcardCard";
import { FlashcardProgress } from "./FlashcardProgress";
import type { Flashcard } from "@/types/chapter";

interface FlashcardDeckProps {
  cards: Flashcard[];
  subjectColor: string;
  onProgressUpdate?: (known: number, unknown: number) => void;
}

export function FlashcardDeck({ cards, subjectColor, onProgressUpdate }: FlashcardDeckProps) {
  const [current, setCurrent] = useState(0);
  const [knownIds, setKnownIds] = useState<Set<string>>(new Set());
  const [unknownIds, setUnknownIds] = useState<Set<string>>(new Set());

  const card = cards[current];

  const notify = useCallback(
    (k: Set<string>, u: Set<string>) => {
      onProgressUpdate?.(k.size, u.size);
    },
    [onProgressUpdate]
  );

  function handleKnown() {
    const next = new Set(knownIds);
    next.add(card.id);
    setKnownIds(next);
    unknownIds.delete(card.id);
    setUnknownIds(new Set(unknownIds));
    notify(next, unknownIds);
    goNext();
  }

  function handleUnknown() {
    const next = new Set(unknownIds);
    next.add(card.id);
    setUnknownIds(next);
    knownIds.delete(card.id);
    setKnownIds(new Set(knownIds));
    notify(knownIds, next);
    goNext();
  }

  function goNext() {
    setCurrent((c) => (c + 1) % cards.length);
  }

  function goPrev() {
    setCurrent((c) => (c - 1 + cards.length) % cards.length);
  }

  function reset() {
    setCurrent(0);
    setKnownIds(new Set());
    setUnknownIds(new Set());
    notify(new Set(), new Set());
  }

  if (cards.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No flashcards available for this chapter.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${((knownIds.size + unknownIds.size) / cards.length) * 100}%`,
            backgroundColor: subjectColor,
          }}
        />
      </div>

      {/* Stats */}
      <FlashcardProgress
        total={cards.length}
        known={knownIds.size}
        unknown={unknownIds.size}
        subjectColor={subjectColor}
      />

      {/* Card */}
      <FlashcardCard
        key={card.id}
        card={card}
        subjectColor={subjectColor}
        onKnown={handleKnown}
        onUnknown={handleUnknown}
      />

      {/* Navigation */}
      <div className="flex items-center justify-between max-w-lg mx-auto">
        <button
          onClick={goPrev}
          className="flex items-center gap-2 rounded-lg border border-border/60 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-all duration-200"
        >
          <ChevronLeft className="h-4 w-4" />
          Prev
        </button>

        <button
          onClick={reset}
          className="flex items-center gap-2 rounded-lg border border-border/60 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </button>

        <button
          onClick={goNext}
          className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-all duration-200"
          style={{ backgroundColor: subjectColor }}
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
