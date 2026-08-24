"use client";

import { useState, useCallback, useEffect } from "react";
import { useSync } from "@/components/auth/SyncProvider";

interface ChapterPracticeState {
  questionsRevealed: string[];
  flashcardsKnown: string[];
  flashcardsUnknown: string[];
}

export type { ChapterPracticeState };

// ── localStorage helpers (offline fallback, always kept in sync) ──

function lsProgressKey(s: string) { return `progress:${s}`; }
function lsPracticeKey(s: string) { return `practice:${s}`; }

function readLsProgress(subjectSlug: string): string[] {
  try {
    const raw = localStorage.getItem(lsProgressKey(subjectSlug));
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function readLsPractice(subjectSlug: string): Record<string, ChapterPracticeState> {
  try {
    const raw = localStorage.getItem(lsPracticeKey(subjectSlug));
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

// ── Hook ──────────────────────────────────────────────────────────

export function useProgress(subjectSlug: string) {
  const sync = useSync();
  const [completed, setCompleted] = useState<string[]>([]);
  const [practice, setPractice] = useState<Record<string, ChapterPracticeState>>({});

  // Load on mount — prefer sync (cloud) data, fall back to localStorage
  useEffect(() => {
    const cloudProgress = sync.loadProgress(subjectSlug);
    const cloudPractice = sync.loadPractice(subjectSlug);

    setCompleted(cloudProgress !== null ? cloudProgress : readLsProgress(subjectSlug));
    setPractice(cloudPractice !== null ? cloudPractice : readLsPractice(subjectSlug));
  }, [subjectSlug, sync]);

  const toggle = useCallback(
    (chapterSlug: string) => {
      setCompleted((prev) => {
        const next = prev.includes(chapterSlug)
          ? prev.filter((s) => s !== chapterSlug)
          : [...prev, chapterSlug];
        sync.saveProgress(subjectSlug, next);
        return next;
      });
    },
    [subjectSlug, sync]
  );

  const isCompleted = useCallback(
    (chapterSlug: string) => completed.includes(chapterSlug),
    [completed]
  );

  const markQuestionRevealed = useCallback(
    (chapterSlug: string, questionId: string) => {
      setPractice((prev) => {
        const chapterState = prev[chapterSlug] ?? {
          questionsRevealed: [],
          flashcardsKnown: [],
          flashcardsUnknown: [],
        };
        if (chapterState.questionsRevealed.includes(questionId)) return prev;
        const next = {
          ...prev,
          [chapterSlug]: {
            ...chapterState,
            questionsRevealed: [...chapterState.questionsRevealed, questionId],
          },
        };
        sync.savePractice(subjectSlug, next);
        return next;
      });
    },
    [subjectSlug, sync]
  );

  const getChapterPractice = useCallback(
    (chapterSlug: string): ChapterPracticeState => {
      return (
        practice[chapterSlug] ?? {
          questionsRevealed: [],
          flashcardsKnown: [],
          flashcardsUnknown: [],
        }
      );
    },
    [practice]
  );

  const updateFlashcardProgress = useCallback(
    (chapterSlug: string, known: string[], unknown: string[]) => {
      setPractice((prev) => {
        const next = {
          ...prev,
          [chapterSlug]: {
            questionsRevealed: prev[chapterSlug]?.questionsRevealed ?? [],
            flashcardsKnown: known,
            flashcardsUnknown: unknown,
          },
        };
        sync.savePractice(subjectSlug, next);
        return next;
      });
    },
    [subjectSlug, sync]
  );

  return {
    completed,
    toggle,
    isCompleted,
    markQuestionRevealed,
    getChapterPractice,
    updateFlashcardProgress,
  };
}

