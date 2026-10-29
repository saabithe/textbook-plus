"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { RotateCcw, Trophy } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FlashcardCard } from "./FlashcardCard";
import { FlashcardProgress } from "./FlashcardProgress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Flashcard } from "@/types/chapter";

interface FlashcardDeckProps {
  cards: Flashcard[];
  subjectColor: string;
}

export function FlashcardDeck({ cards, subjectColor }: FlashcardDeckProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  // Session-only: which cards have been marked known/unknown in this visit.
  const [knownIds, setKnownIds] = useState<Set<string>>(() => new Set());
  const [unknownIds, setUnknownIds] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const card = cards[current] ?? cards[0];

  function handleKnown() {
    if (!card) return;
    const nextKnown = new Set(knownIds);
    nextKnown.add(card.id);
    const nextUnknown = new Set(unknownIds);
    nextUnknown.delete(card.id);
    setKnownIds(nextKnown);
    setUnknownIds(nextUnknown);
    api?.scrollNext();
  }

  function handleUnknown() {
    if (!card) return;
    const nextUnknown = new Set(unknownIds);
    nextUnknown.add(card.id);
    const nextKnown = new Set(knownIds);
    nextKnown.delete(card.id);
    setUnknownIds(nextUnknown);
    setKnownIds(nextKnown);
    api?.scrollNext();
  }

  function reset() {
    setCurrent(0);
    setKnownIds(new Set());
    setUnknownIds(new Set());
    api?.scrollTo(0);
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
          className="gap-0 p-0 [&_[data-slot=progress-track]]:h-0.5 [&_[data-slot=progress-indicator]]:bg-[var(--deck-color)]"
          style={{ "--deck-color": subjectColor } as CSSProperties}
        />
      </div>

      {/* Completion celebration */}
      {deckCleared && (
        <Card
          className="flex items-center gap-3 rounded-lg border border-border p-4"
          style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 4%, transparent)" }}
        >
          <span
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] text-primary-foreground"
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
            className="font-semibold"
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

      {/* Card carousel */}
      <Carousel
        orientation="horizontal"
        opts={{ loop: true, align: "center" }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {cards.map((c) => (
            <CarouselItem key={c.id}>
              <FlashcardCard
                key={c.id}
                card={c}
                subjectColor={subjectColor}
                onKnown={handleKnown}
                onUnknown={handleUnknown}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4 flex items-center justify-center gap-3">
          <CarouselPrevious className="static translate-y-0" size="lg" />
          <Button
            variant="outline"
            size="lg"
            onClick={reset}
            className="font-semibold text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
          <CarouselNext className="static translate-y-0" size="lg" />
        </div>
      </Carousel>
    </div>
  );
}
