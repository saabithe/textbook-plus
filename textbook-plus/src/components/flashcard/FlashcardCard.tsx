"use client";

import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import type { Flashcard } from "@/types/chapter";

interface FlashcardCardProps {
  card: Flashcard;
  subjectColor: string;
  onKnown: () => void;
  onUnknown: () => void;
}

function isTypingTarget(e: KeyboardEvent): boolean {
  const t = e.target as HTMLElement | null;
  if (!t) return false;
  return (
    t.tagName === "INPUT" ||
    t.tagName === "TEXTAREA" ||
    t.tagName === "SELECT" ||
    t.isContentEditable
  );
}

export function FlashcardCard({ card, subjectColor, onKnown, onUnknown }: FlashcardCardProps) {
  const [flipped, setFlipped] = useState(false);

  // Rating shortcuts ("1"/"2") are global while a card is flipped,
  // but must never fire while typing in a form field.
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (!flipped || isTypingTarget(e)) return;
      if (e.key === "1") onUnknown();
      if (e.key === "2") onKnown();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [flipped, onKnown, onUnknown]);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Card */}
      <div style={{ perspective: "1000px" }}>
        <button
          onClick={() => setFlipped((f) => !f)}
          aria-pressed={flipped}
          aria-label={flipped ? "Show question" : "Reveal answer"}
          className={cn(
            "relative w-full aspect-[3/2] rounded-2xl border border-border/60 cursor-pointer",
            "transition-transform duration-500 [transform-style:preserve-3d]",
            flipped && "[transform:rotateY(180deg)]"
          )}
        >
          {/* Front */}
          <Card
            aria-hidden={flipped}
            className="absolute inset-0 items-center justify-center rounded-2xl border border-border/60 p-6 sm:p-8 [backface-visibility:hidden]"
            style={{ backgroundColor: `${subjectColor}08` }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: subjectColor }}>
              Question
            </p>
            <p className="text-base sm:text-lg font-medium text-center leading-relaxed">
              {card.front}
            </p>
            <p className="text-xs text-muted-foreground">Click or press Space to flip</p>
          </Card>

          {/* Back */}
          <Card
            aria-hidden={!flipped}
            className="absolute inset-0 items-center justify-center rounded-2xl border border-border/60 p-6 sm:p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]"
            style={{ backgroundColor: `${subjectColor}10` }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
              Answer
            </p>
            <p className="text-base sm:text-lg font-medium text-center leading-relaxed whitespace-pre-line">
              {card.back}
            </p>
          </Card>
        </button>
      </div>

      {/* Rating buttons */}
      {flipped && (
        <div className="flex items-center justify-center gap-3 mt-5">
          <Button
            variant="outline"
            size="lg"
            onClick={onUnknown}
            className="rounded-2xl border-2 border-red-600/40 bg-red-500 font-extrabold text-white hover:bg-red-500/90 hover:text-white active:translate-y-0.5 dark:text-white dark:hover:text-white"
          >
            <X className="h-4 w-4" />
            Unknown
            <Kbd className="hidden bg-white/20 px-1.5 py-0.5 text-[10px] font-extrabold text-white sm:inline">1</Kbd>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onKnown}
            className="rounded-2xl border-2 border-green-600/40 bg-green-500 font-extrabold text-white hover:bg-green-500/90 hover:text-white active:translate-y-0.5 dark:text-white dark:hover:text-white"
          >
            <Check className="h-4 w-4" />
            Known
            <Kbd className="hidden bg-white/20 px-1.5 py-0.5 text-[10px] font-extrabold text-white sm:inline">2</Kbd>
          </Button>
        </div>
      )}
    </div>
  );
}
