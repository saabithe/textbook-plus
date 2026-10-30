"use client";

import { useState, useMemo, useEffect } from "react";
import { chapters } from "@/data/chapters";
import { getSubjectBySlug } from "@/data/subjects";

export interface SearchResult {
  chapterSlug: string;
  chapterTitle: string;
  chapterTitleArabic?: string;
  chapterNumber: number;
  subjectName: string;
  subjectSlug: string;
  subjectColor: string;
  href: string;
}

interface IndexEntry {
  subjectSlug: string;
  subjectName: string;
  subjectColor: string;
  slug: string;
  number: number;
  title: string;
  titleArabic?: string;
  headings?: string[];
  blob?: string;
  href?: string;
}

export function useSearch() {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<IndexEntry[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/search-index.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled) return;
        if (Array.isArray(data)) setIndex(data as IndexEntry[]);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const allChapters = useMemo<SearchResult[]>(() => {
    const flat: SearchResult[] = [];
    for (const [subjectSlug, chapterList] of Object.entries(chapters)) {
      const subject = getSubjectBySlug(subjectSlug);
      if (!subject) continue;
      for (const ch of chapterList) {
        flat.push({
          chapterSlug: ch.slug,
          chapterTitle: ch.title,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          chapterTitleArabic: (ch as any).titleArabic,
          chapterNumber: ch.number,
          subjectName: subject.name,
          subjectSlug: subject.slug,
          subjectColor: subject.color,
          href: `/chapter/${ch.slug}`,
        });
      }
    }
    return flat;
  }, []);

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    if (!index) {
      return allChapters.filter(
        (ch) =>
          ch.chapterTitle.toLowerCase().includes(q) ||
          ch.chapterTitleArabic?.toLowerCase().includes(q) ||
          ch.subjectName.toLowerCase().includes(q) ||
          ch.chapterSlug.toLowerCase().includes(q)
      );
    }

    const out: SearchResult[] = [];
    for (const e of index) {
      const titleHit =
        e.title.toLowerCase().includes(q) ||
        (e.titleArabic ?? "").toLowerCase().includes(q) ||
        e.subjectName.toLowerCase().includes(q) ||
        e.slug.toLowerCase().includes(q);
      const headingHit = (e.headings ?? []).find((h) => h.toLowerCase().includes(q));
      const blobHit = (e.blob ?? "").toLowerCase().includes(q);
      if (titleHit || headingHit || blobHit) {
        let href = e.href ?? `/chapter/${e.slug}`;
        if (headingHit) {
          const anchor = headingHit
            .toLowerCase()
            .replace(/[^a-z0-9\u0600-\u06ff\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-");
          href = `/chapter/${e.slug}#${anchor}`;
        }
        out.push({
          chapterSlug: e.slug,
          chapterTitle: e.title,
          chapterTitleArabic: e.titleArabic,
          chapterNumber: e.number,
          subjectName: e.subjectName,
          subjectSlug: e.subjectSlug,
          subjectColor: e.subjectColor,
          href,
        });
      }
    }
    return out;
  }, [query, index, allChapters]);

  return { query, setQuery, results };
}
