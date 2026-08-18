"use client";

import { useState, useCallback, useEffect } from "react";

interface ChapterPracticeState {
  questionsRevealed: string[];
  flashcardsKnown: string[];
  flashcardsUnknown: string[];
}

function getStorageKey(subjectSlug: string) {
  return `progress:${subjectSlug}`;
}

function getPracticeKey(subjectSlug: string) {
  return `practice:${subjectSlug}`;
}

function loadPractice(subjectSlug: string): Record<string, ChapterPracticeState> {
  try {
    const stored = localStorage.getItem(getPracticeKey(subjectSlug));
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function savePractice(subjectSlug: string, data: Record<string, ChapterPracticeState>) {
  try {
    localStorage.setItem(getPracticeKey(subjectSlug), JSON.stringify(data));
  } catch {
    // ignore
  }
}

export function useProgress(subjectSlug: string) {
  const [completed, setCompleted] = useState<string[]>([]);
  const [practice, setPractice] = useState<Record<string, ChapterPracticeState>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(getStorageKey(subjectSlug));
      if (stored) setCompleted(JSON.parse(stored));
    } catch {
      // ignore
    }
    setPractice(loadPractice(subjectSlug));
  }, [subjectSlug]);

  const toggle = useCallback(
    (chapterSlug: string) => {
      setCompleted((prev) => {
        const next = prev.includes(chapterSlug)
          ? prev.filter((s) => s !== chapterSlug)
          : [...prev, chapterSlug];
        try {
          localStorage.setItem(getStorageKey(subjectSlug), JSON.stringify(next));
        } catch {
          // ignore
        }
        return next;
      });
    },
    [subjectSlug]
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
        savePractice(subjectSlug, next);
        return next;
      });
    },
    [subjectSlug]
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
        const chapterState = prev[chapterSlug] ?? {
          questionsRevealed: [],
          flashcardsKnown: [],
          flashcardsUnknown: [],
        };
        const next = {
          ...prev,
          [chapterSlug]: {
            ...chapterState,
            flashcardsKnown: known,
            flashcardsUnknown: unknown,
          },
        };
        savePractice(subjectSlug, next);
        return next;
      });
    },
    [subjectSlug]
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

export function getAllProgress(): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("progress:")) {
        const subjectSlug = key.replace("progress:", "");
        result[subjectSlug] = JSON.parse(localStorage.getItem(key) ?? "[]");
      }
    }
  } catch {
    // ignore
  }
  return result;
}

export function getAllPracticeProgress(): Record<string, Record<string, ChapterPracticeState>> {
  const result: Record<string, Record<string, ChapterPracticeState>> = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("practice:")) {
        const subjectSlug = key.replace("practice:", "");
        result[subjectSlug] = JSON.parse(localStorage.getItem(key) ?? "{}");
      }
    }
  } catch {
    // ignore
  }
  return result;
}
