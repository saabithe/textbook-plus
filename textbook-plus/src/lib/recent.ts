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

function read(): RecentChapter[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as RecentChapter[]) : [];
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