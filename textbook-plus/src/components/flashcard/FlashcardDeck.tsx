"use client";

import { useState, useCallback } from "react";
import type { CSSProperties } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Trophy } from "lucide-react";
import { FlashcardCard } from "./FlashcardCard";
import { FlashcardProgress } from "./FlashcardProgress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Flashcard } from "@/types/chapter";

interface FlashcardDeckProps {
  cards: Flashcard[];
  subjectColor: string;
  initialKnown?: string[];
  initialUnknown?: string[];
  onProgressUpdate?: (known: string[], unknown: string[]) => void;
}

export function FlashcardDeck({ cards, subjectColor, initialKnown = [], initialUnknown = [], onProgressUpdate }: FlashcardDeckProps) {
  const [current, setCurrent] = useState(0);
  const [knownIds, setKnownIds] = useState<Set<string>>(() => new Set(initialKnown));
  const [unknownIds, setUnknownIds] = useState<Set<string>>(() => new Set(initialUnknown));

  const card = cards[current];

  const notify = useCallback(
    (k: Set<string>, u: Set<string>) => {
      onProgressUpdate?.([...k], [...u]);
    },
    [onProgressUpdate]
  );

  function handleKnown() {
    const nextKnown = new Set(knownIds);
    nextKnown.add(card.id);
    const nextUnknown = new Set(unknownIds);
    nextUnknown.delete(card.id);
    setKnownIds(nextKnown);
    setUnknownIds(nextUnknown);
    notify(nextKnown, nextUnknown);
    goNext();
  }

  function handleUnknown() {
    const nextUnknown = new Set(unknownIds);
    nextUnknown.add(card.id);
    const nextKnown = new Set(knownIds);
    nextKnown.delete(card.id);
    setUnknownIds(nextUnknown);
    setKnownIds(nextKnown);
    notify(nextKnown, nextUnknown);
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

  const reviewedCount = knownIds.size + unknownIds.size;
  const progressPct = Math.round((reviewedCount / cards.length) * 100);
  const deckCleared = reviewedCount >= cards.length;

  return (
    <div className="space-y-6">
      {/* Progress bar + pct */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-extrabold">
            {reviewedCount} of {cards.length} reviewed
          </p>
          <p className="text-sm font-extrabold" style={{ color: subjectColor }}>
            {progressPct}%
          </p>
        </div>
        <Progress
          value={progressPct}
          aria-label="Flashcard progress"
          className="gap-0 p-0 [&_[data-slot=progress-track]]:h-3 [&_[data-slot=progress-track]]:rounded-full [&_[data-slot=progress-indicator]]:rounded-full [&_[data-slot=progress-indicator]]:bg-[var(--deck-color)]"
          style={{ "--deck-color": subjectColor } as CSSProperties}
        />
      </div>

      {/* Completion celebration */}
      {deckCleared && (
        <Card
          className="flex items-center gap-3 rounded-2xl border-2 p-4"
          style={{ borderColor: `${subjectColor}55`, backgroundColor: `${subjectColor}12` }}
        >
          <span
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white"
            style={{ backgroundColor: subjectColor }}
          >
            <Trophy className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <p className="font-extrabold leading-tight">Deck cleared!</p>
            <p className="text-sm font-semibold text-muted-foreground">
              Every card reviewed. Reset to run it back or keep practicing unknowns.
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            onClick={reset}
            className="rounded-2xl border-2 font-extrabold"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </Card>
      )}

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
        <Button variant="outline" size="lg" onClick={goPrev} className="rounded-2xl border-2 font-extrabold">
          <ChevronLeft className="h-4 w-4" />
          Prev
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={reset}
          className="rounded-2xl border-2 font-extrabold text-muted-foreground hover:text-foreground"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>

        <Button size="lg" onClick={goNext} className="rounded-2xl font-extrabold" style={{ backgroundColor: subjectColor }}>
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
