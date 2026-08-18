"use client";

import { useState, useCallback, useEffect } from "react";

function getStorageKey(subjectSlug: string) {
  return `progress:${subjectSlug}`;
}

export function useProgress(subjectSlug: string) {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(getStorageKey(subjectSlug));
      if (stored) setCompleted(JSON.parse(stored));
    } catch {
      // ignore
    }
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

  return { completed, toggle, isCompleted };
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
