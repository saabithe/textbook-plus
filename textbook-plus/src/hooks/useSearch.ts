"use client";

import { useState, useMemo } from "react";
import { chapters } from "@/data/chapters";
import { getSubjectBySlug } from "@/data/subjects";

export interface SearchResult {
  chapterSlug: string;
  chapterTitle: string;
  chapterNumber: number;
  subjectName: string;
  subjectSlug: string;
  subjectColor: string;
}

export function useSearch() {
  const [query, setQuery] = useState("");

  const allChapters = useMemo(() => {
    const flat: SearchResult[] = [];
    for (const [subjectSlug, chapterList] of Object.entries(chapters)) {
      const subject = getSubjectBySlug(subjectSlug);
      if (!subject) continue;
      for (const ch of chapterList) {
        flat.push({
          chapterSlug: ch.slug,
          chapterTitle: ch.title,
          chapterNumber: ch.number,
          subjectName: subject.name,
          subjectSlug: subject.slug,
          subjectColor: subject.color,
        });
      }
    }
    return flat;
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allChapters.filter(
      (ch) =>
        ch.chapterTitle.toLowerCase().includes(q) ||
        ch.subjectName.toLowerCase().includes(q) ||
        ch.chapterSlug.toLowerCase().includes(q)
    );
  }, [query, allChapters]);

  return { query, setQuery, results };
}
