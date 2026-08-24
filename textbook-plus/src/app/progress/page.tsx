"use client";

import { useState, useEffect } from "react";
import { Brain, Layers } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { SubjectProgress } from "@/components/progress/SubjectProgress";
import { subjects } from "@/data/subjects";
import { chapters } from "@/data/chapters";
import { useSync } from "@/components/auth/SyncProvider";
import { getQuestionsForChapter, getFlashcardsForChapter } from "@/lib/content";

export default function ProgressPage() {
  const sync = useSync();
  const [allProgress, setAllProgress] = useState<Record<string, string[]>>({});
  const [practiceProgress, setPracticeProgress] = useState<
    Record<string, Record<string, { questionsRevealed: string[]; flashcardsKnown: string[]; flashcardsUnknown: string[] }>>
  >({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setAllProgress(sync.getAllProgress());
    setPracticeProgress(sync.getAllPracticeProgress());
    setMounted(true);
  }, [sync]);

  // Calculate overall stats
  const totalChapters = Object.values(chapters).reduce(
    (sum, list) => sum + list.length,
    0
  );
  const totalCompleted = Object.values(allProgress).reduce(
    (sum, list) => sum + list.length,
    0
  );
  const overallPct =
    totalChapters > 0 ? Math.round((totalCompleted / totalChapters) * 100) : 0;

  // Calculate practice stats
  const [practiceTotals, setPracticeTotals] = useState({ revealed: 0, known: 0, available: 0 });
  useEffect(() => {
    let cancelled = false;
    (async () => {
      let revealed = 0;
      let known = 0;
      let available = 0;
      for (const subject of subjects) {
        for (const ch of chapters[subject.slug] ?? []) {
          const [qs, fcs] = await Promise.all([
            getQuestionsForChapter(ch.slug),
            getFlashcardsForChapter(ch.slug),
          ]);
          if (cancelled) return;
          const pp = practiceProgress[subject.slug]?.[ch.slug];
          revealed += qs.length > 0 ? (pp?.questionsRevealed?.length ?? 0) : 0;
          known += fcs.length > 0 ? (pp?.flashcardsKnown?.length ?? 0) : 0;
          available += fcs.length;
        }
      }
      if (!cancelled) setPracticeTotals({ revealed, known, available });
    })();
    return () => {
      cancelled = true;
    };
  }, [practiceProgress]);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-14">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Your Progress
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Track your learning across all subjects.
            </p>
          </div>

          {/* Overall stat */}
          {mounted && (
            <div className="mb-10 rounded-2xl border border-border/60 bg-card p-6 flex items-center gap-6">
              <div className="text-5xl font-extrabold" style={{ color: "var(--primary)" }}>
                {overallPct}%
              </div>
              <div>
                <p className="text-lg font-semibold">
                  {totalCompleted} of {totalChapters} chapters completed
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {overallPct === 100
                    ? "Congratulations! You've completed all chapters!"
                    : overallPct > 0
                    ? "Keep going! You're making great progress."
                    : "Start marking chapters as complete to track your progress."}
                </p>
              </div>
            </div>
          )}

          {/* Practice stats */}
          {mounted && (practiceTotals.revealed > 0 || practiceTotals.known > 0) && (
            <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {practiceTotals.revealed > 0 && (
                <div className="rounded-xl border border-border/60 bg-card p-5 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{practiceTotals.revealed}</p>
                    <p className="text-sm text-muted-foreground">questions reviewed</p>
                  </div>
                </div>
              )}
              {practiceTotals.known > 0 && (
                <div className="rounded-xl border border-border/60 bg-card p-5 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
                    <Layers className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{practiceTotals.known}/{practiceTotals.available}</p>
                    <p className="text-sm text-muted-foreground">flashcards known</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Subject grid */}
          {mounted && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subjects.map((subject) => (
                <SubjectProgress
                  key={subject.id}
                  subject={subject}
                  completedSlugs={allProgress[subject.slug] ?? []}
                />
              ))}
            </div>
          )}

          {/* Loading skeleton */}
          {!mounted && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className="rounded-2xl border border-border/60 bg-card p-6 animate-pulse"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-muted" />
                    <div className="space-y-2">
                      <div className="h-4 w-24 rounded bg-muted" />
                      <div className="h-3 w-16 rounded bg-muted" />
                    </div>
                  </div>
                  <div className="h-2 rounded-full bg-muted mb-5" />
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 rounded-lg bg-muted" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
