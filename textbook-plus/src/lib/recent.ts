export interface RecentChapter {
  slug: string;
  title: string;
  subjectSlug: string;
  subjectName: string;
  subjectColor: string;
  href: string;
  ts: number;
}

const KEY = "recentChapters";
const MAX = 6;

// Retired catalogs whose stored entries must never render again (e.g. the
// Class 11 Improvement Exam, removed Oct 2026). Their pages now 404.
const RETIRED_HREF_PREFIXES = ["/class-11"];

function isRetired(href: string): boolean {
  return RETIRED_HREF_PREFIXES.some((prefix) => href.startsWith(prefix));
}

function read(): RecentChapter[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    return (JSON.parse(raw) as RecentChapter[]).filter((r) => !isRetired(r.href));
  } catch {
    return [];
  }
}

export function getRecentChapters(): RecentChapter[] {
  return read().sort((a, b) => b.ts - a.ts);
}

export function markRecentChapter(ch: Omit<RecentChapter, "ts">): RecentChapter[] {
  const next = [{ ...ch, ts: Date.now() }, ...read().filter((r) => r.href !== ch.href)];
  const trimmed = next.slice(0, MAX);
  try {
    window.localStorage.setItem(KEY, JSON.stringify(trimmed));
  } catch {
    /* storage unavailable */
  }
  return trimmed;
}