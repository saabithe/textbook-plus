"use client";

import { useState, useEffect, useCallback } from "react";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Flashcard } from "@/types/chapter";

interface FlashcardCardProps {
  card: Flashcard;
  subjectColor: string;
  onKnown: () => void;
  onUnknown: () => void;
}

export function FlashcardCard({ card, subjectColor, onKnown, onUnknown }: FlashcardCardProps) {
  const [flipped, setFlipped] = useState(false);

  const flip = useCallback(() => setFlipped((f) => !f), []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.code === "Space") {
        e.preventDefault();
        flip();
      }
      if (flipped) {
        if (e.key === "1") onUnknown();
        if (e.key === "2") onKnown();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [flipped, flip, onKnown, onUnknown]);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Card */}
      <button
        onClick={flip}
        className={cn(
          "relative w-full aspect-[3/2] rounded-2xl border border-border/60 cursor-pointer",
          "transition-transform duration-500 [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]"
        )}
        style={{ perspective: "1000px" }}
      >
        {/* Front */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl [backface-visibility:hidden]"
          )}
          style={{ backgroundColor: `${subjectColor}08` }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: subjectColor }}>
            Question
          </p>
          <p className="text-base sm:text-lg font-medium text-center leading-relaxed">
            {card.front}
          </p>
          <p className="text-xs text-muted-foreground mt-4">Click or press Space to flip</p>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
          )}
          style={{ backgroundColor: `${subjectColor}10` }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-green-600 dark:text-green-400">
            Answer
          </p>
          <p className="text-base sm:text-lg font-medium text-center leading-relaxed whitespace-pre-line">
            {card.back}
          </p>
        </div>
      </button>

      {/* Rating buttons */}
      {flipped && (
        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            onClick={onUnknown}
            className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-500/20 transition-all duration-200"
          >
            <RotateCcw className="h-4 w-4" />
            Unknown
            <kbd className="hidden sm:inline text-[10px] bg-red-500/10 rounded px-1.5 py-0.5">1</kbd>
          </button>
          <button
            onClick={onKnown}
            className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-2.5 text-sm font-medium text-green-600 dark:text-green-400 hover:bg-green-500/20 transition-all duration-200"
          >
            ✓ Known
            <kbd className="hidden sm:inline text-[10px] bg-green-500/10 rounded px-1.5 py-0.5">2</kbd>
          </button>
        </div>
      )}
    </div>
  );
}
