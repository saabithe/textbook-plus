"use client";

import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useRef,
  useState,
} from "react";
import { useAuth } from "@/components/auth/AuthProvider";

export type SyncStatus = "idle" | "syncing" | "error" | "offline";

interface ChapterPracticeState {
  questionsRevealed: string[];
  flashcardsKnown: string[];
  flashcardsUnknown: string[];
}

interface SyncContextValue {
  status: SyncStatus;
  loadProgress: (subjectSlug: string) => string[] | null;
  saveProgress: (subjectSlug: string, slugs: string[]) => void;
  loadPractice: (subjectSlug: string) => Record<string, ChapterPracticeState> | null;
  savePractice: (subjectSlug: string, data: Record<string, ChapterPracticeState>) => void;
}

const SyncContext = createContext<SyncContextValue | null>(null);

// In-memory cache so multiple useProgress hooks don't re-query
const progressCache = new Map<string, string[]>();
const practiceCache = new Map<string, Record<string, ChapterPracticeState>>();
let migrated = false;

// Offline write queue (flushed when back online)
interface QueuedProgress { type: "progress"; subjectSlug: string; slugs: string[]; userId: string }
interface QueuedPractice { type: "practice"; subjectSlug: string; data: Record<string, ChapterPracticeState>; userId: string }
type QueuedWrite = QueuedProgress | QueuedPractice;
const writeQueue: QueuedWrite[] = [];

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

function writeLsProgress(subjectSlug: string, slugs: string[]) {
  try { localStorage.setItem(lsProgressKey(subjectSlug), JSON.stringify(slugs)); } catch {}
}

function writeLsPractice(subjectSlug: string, data: Record<string, ChapterPracticeState>) {
  try { localStorage.setItem(lsPracticeKey(subjectSlug), JSON.stringify(data)); } catch {}
}

const SUBJECTS = ["physics", "chemistry", "mathematics", "biology", "english", "arabic"];

export function SyncProvider({ children }: { children: React.ReactNode }) {
  const { user, supabase, loading: authLoading } = useAuth();
  const [status, setStatus] = useState<SyncStatus>("idle");
  const readyRef = useRef(false);

  // ── Flush offline queue ───────────────────────────────────────
  const flushQueue = useCallback(async () => {
    if (writeQueue.length === 0) return;
    const items = [...writeQueue];
    writeQueue.length = 0;

    for (const item of items) {
      try {
        if (item.type === "progress") {
          const rows = item.slugs.map((ch) => ({
            user_id: item.userId,
            subject_slug: item.subjectSlug,
            chapter_slug: ch,
            completed: true,
          }));
          if (rows.length > 0) {
            await supabase.from("user_progress").upsert(rows, {
              onConflict: "user_id,subject_slug,chapter_slug",
            });
          }
        } else {
          const rows = Object.entries(item.data).map(([ch, state]) => ({
            user_id: item.userId,
            subject_slug: item.subjectSlug,
            chapter_slug: ch,
            questions_revealed: state.questionsRevealed,
            flashcards_known: state.flashcardsKnown,
            flashcards_unknown: state.flashcardsUnknown,
          }));
          if (rows.length > 0) {
            await supabase.from("user_practice").upsert(rows, {
              onConflict: "user_id,chapter_slug",
            });
          }
        }
      } catch (err) {
        console.error("Queue flush error:", err);
        writeQueue.unshift(item);
        setStatus("error");
        return;
      }
    }
  }, [supabase]);

  // ── Online/offline tracking ───────────────────────────────────
  useEffect(() => {
    function goOffline() { setStatus("offline"); }
    function goOnline() {
      setStatus("syncing");
      flushQueue().then(() => {
        if (readyRef.current) setStatus("idle");
      });
    }

    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);

    if (!navigator.onLine) setStatus("offline");

    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, [flushQueue]);

  // ── Initial load + migration ──────────────────────────────────
  useEffect(() => {
    if (authLoading || !user || readyRef.current) return;

    let cancelled = false;

    async function init() {
      setStatus("syncing");

      // Load all progress from Supabase
      const { data: rows, error } = await supabase
        .from("user_progress")
        .select("subject_slug, chapter_slug, completed");

      if (cancelled) return;

      if (error) {
        console.error("Supabase load error:", error.message);
        for (const s of SUBJECTS) {
          progressCache.set(s, readLsProgress(s));
          practiceCache.set(s, readLsPractice(s));
        }
        setStatus("error");
        readyRef.current = true;
        return;
      }

      // Build cloud progress map
      const cloudProgress: Record<string, string[]> = {};
      for (const row of rows ?? []) {
        if (row.completed) {
          if (!cloudProgress[row.subject_slug]) cloudProgress[row.subject_slug] = [];
          cloudProgress[row.subject_slug].push(row.chapter_slug);
        }
      }

      // Load all practice from Supabase
      const { data: practiceRows } = await supabase
        .from("user_practice")
        .select("subject_slug, chapter_slug, questions_revealed, flashcards_known, flashcards_unknown");

      if (cancelled) return;

      const cloudPractice: Record<string, Record<string, ChapterPracticeState>> = {};
      for (const row of practiceRows ?? []) {
        if (!cloudPractice[row.subject_slug]) cloudPractice[row.subject_slug] = {};
        cloudPractice[row.subject_slug][row.chapter_slug] = {
          questionsRevealed: row.questions_revealed ?? [],
          flashcardsKnown: row.flashcards_known ?? [],
          flashcardsUnknown: row.flashcards_unknown ?? [],
        };
      }

      // Check if Supabase is empty (new user) — migrate localStorage
      const cloudEmpty = Object.keys(cloudProgress).length === 0 && Object.keys(cloudPractice).length === 0;
      if (cloudEmpty && !migrated) {
        migrated = true;
        const uploadBatch: { subject_slug: string; chapter_slug: string; completed: boolean }[] = [];
        const practiceBatch: {
          subject_slug: string;
          chapter_slug: string;
          questions_revealed: string[];
          flashcards_known: string[];
          flashcards_unknown: string[];
        }[] = [];

        for (const s of SUBJECTS) {
          const lsProg = readLsProgress(s);
          const lsPrac = readLsPractice(s);

          for (const ch of lsProg) {
            uploadBatch.push({ subject_slug: s, chapter_slug: ch, completed: true });
          }
          for (const [ch, state] of Object.entries(lsPrac)) {
            practiceBatch.push({
              subject_slug: s,
              chapter_slug: ch,
              questions_revealed: state.questionsRevealed,
              flashcards_known: state.flashcardsKnown,
              flashcards_unknown: state.flashcardsUnknown,
            });
          }
        }

        if (uploadBatch.length > 0) {
          await supabase.from("user_progress").upsert(uploadBatch, {
            onConflict: "user_id,subject_slug,chapter_slug",
          });
        }
        if (practiceBatch.length > 0) {
          await supabase.from("user_practice").upsert(practiceBatch, {
            onConflict: "user_id,chapter_slug",
          });
        }

        for (const s of SUBJECTS) {
          progressCache.set(s, readLsProgress(s));
          practiceCache.set(s, readLsPractice(s));
        }
      } else {
        for (const s of SUBJECTS) {
          progressCache.set(s, cloudProgress[s] ?? []);
          practiceCache.set(s, cloudPractice[s] ?? {});
        }
      }

      if (!cancelled) {
        setStatus("idle");
        readyRef.current = true;
      }
    }

    init();
    return () => {
      cancelled = true;
      readyRef.current = false;
    };
  }, [user, supabase, authLoading]);

  // ── Load (from cache) ────────────────────────────────────────
  const loadProgress = useCallback((subjectSlug: string): string[] | null => {
    if (!readyRef.current) return null;
    return progressCache.get(subjectSlug) ?? [];
  }, []);

  const loadPractice = useCallback((subjectSlug: string): Record<string, ChapterPracticeState> | null => {
    if (!readyRef.current) return null;
    return practiceCache.get(subjectSlug) ?? {};
  }, []);

  // ── Save (write-through to LS + Supabase, queue if offline) ──
  const saveProgress = useCallback(
    (subjectSlug: string, slugs: string[]) => {
      progressCache.set(subjectSlug, slugs);
      writeLsProgress(subjectSlug, slugs);

      if (!user) return;

      if (!navigator.onLine) {
        writeQueue.push({ type: "progress", subjectSlug, slugs, userId: user.id });
        return;
      }

      const rows = slugs.map((ch) => ({
        user_id: user.id,
        subject_slug: subjectSlug,
        chapter_slug: ch,
        completed: true,
      }));

      supabase
        .from("user_progress")
        .upsert(rows, { onConflict: "user_id,subject_slug,chapter_slug" })
        .then(({ error }) => {
          if (error) {
            console.error("Progress sync error:", error.message);
            setStatus("error");
          }
        });
    },
    [user, supabase]
  );

  const savePractice = useCallback(
    (subjectSlug: string, data: Record<string, ChapterPracticeState>) => {
      practiceCache.set(subjectSlug, data);
      writeLsPractice(subjectSlug, data);

      if (!user) return;

      if (!navigator.onLine) {
        writeQueue.push({ type: "practice", subjectSlug, data, userId: user.id });
        return;
      }

      const rows = Object.entries(data).map(([ch, state]) => ({
        user_id: user.id,
        subject_slug: subjectSlug,
        chapter_slug: ch,
        questions_revealed: state.questionsRevealed,
        flashcards_known: state.flashcardsKnown,
        flashcards_unknown: state.flashcardsUnknown,
      }));

      if (rows.length === 0) return;

      supabase
        .from("user_practice")
        .upsert(rows, { onConflict: "user_id,chapter_slug" })
        .then(({ error }) => {
          if (error) {
            console.error("Practice sync error:", error.message);
            setStatus("error");
          }
        });
    },
    [user, supabase]
  );

  return (
    <SyncContext.Provider value={{ status, loadProgress, saveProgress, loadPractice, savePractice }}>
      {children}
    </SyncContext.Provider>
  );
}

export function useSync() {
  const ctx = useContext(SyncContext);
  if (!ctx) throw new Error("useSync must be used within SyncProvider");
  return ctx;
}
