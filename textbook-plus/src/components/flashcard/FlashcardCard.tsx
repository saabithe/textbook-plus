"use client";

import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
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

/** 240ms cross-fade + 4px rise. No 3D rotation, no perspective. */
const LAYER_MOTION =
  "[transition:opacity_240ms_var(--ease-blueprint),transform_240ms_var(--ease-blueprint)] motion-reduce:transition-none";

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
    <div className="mx-auto w-full max-w-lg">
      {/* Card — one hairline box, two cross-faded layers */}
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={flipped ? "Show question" : "Reveal answer"}
        className="relative block aspect-[3/2] w-full cursor-pointer rounded-lg border border-t-[3px] border-border bg-card text-left"
        style={{ borderTopColor: subjectColor }}
      >
        {/* FRONT */}
        <div
          aria-hidden={flipped}
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 py-6 text-center sm:px-8",
            LAYER_MOTION,
            flipped ? "pointer-events-none translate-y-1 opacity-0" : "translate-y-0 opacity-100"
          )}
        >
          <p className="t-micro">Front</p>
          <p className="text-[19px] font-medium leading-[1.55] text-foreground">{card.front}</p>
          <p className="text-[13px] text-muted-foreground">Click or press Space to flip</p>
        </div>

        {/* BACK */}
        <div
          aria-hidden={!flipped}
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 py-6 text-center sm:px-8",
            LAYER_MOTION,
            flipped ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
          )}
        >
          <p className="t-micro">Back</p>
          <p className="whitespace-pre-line text-[19px] font-medium leading-[1.55] text-foreground">
            {card.back}
          </p>
        </div>
      </button>

      {/* Rating buttons — hairline, no fills */}
      {flipped && (
        <div className="mt-5 flex items-center justify-center gap-3">
          <Button variant="outline" onClick={onUnknown}>
            <X className="h-4 w-4" aria-hidden />
            Unknown
            <Kbd className="ml-1 hidden sm:inline-flex">1</Kbd>
          </Button>
          <Button variant="outline" onClick={onKnown}>
            <Check className="h-4 w-4" aria-hidden />
            Known
            <Kbd className="ml-1 hidden sm:inline-flex">2</Kbd>
          </Button>
        </div>
      )}
    </div>
  );
}
