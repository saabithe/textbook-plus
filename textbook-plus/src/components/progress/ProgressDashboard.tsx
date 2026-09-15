"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { LockOpen, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { useSync } from "@/components/auth/SyncProvider";
import { subjects } from "@/data/subjects";
import { class11Subjects, getClass11Chapters } from "@/data/class11";
import { getChaptersBySubject } from "@/data/chapters";
import { SectionHeading } from "@/components/app/SectionHeading";
import { StatPill } from "@/components/app/StatPill";
import { ProgressRing } from "@/components/app/ProgressRing";
import { ContinueCard, type ContinueItem } from "@/components/app/ContinueCard";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { getRecentChapters } from "@/lib/recent";

interface SubjectProgressRow {
  name: string;
  slug: string;
  color: string;
  icon: React.ElementType;
  total: number;
  done: number;
  questionsRevealed: number;
  flashcardsKnown: number;
  href: string;
}

const EMPTY_SUBJECT_PROGRESS: SubjectProgressRow[] = [];

export function ProgressDashboard() {
  const { status, getAllProgress, loadPractice } = useSync();
  const ready = status === "idle" || status === "offline";
  const [recent, setRecent] = useState<ContinueItem[] | null>(null);

  useEffect(() => {
    setRecent(
      getRecentChapters().map((c) => ({
        href: c.href,
        title: c.title,
        subject: c.subjectName,
        color: c.subjectColor,
        meta: c.subjectName,
      }))
    );
  }, []);

  const rows = useMemo<SubjectProgressRow[]>(() => {
    if (!ready) return EMPTY_SUBJECT_PROGRESS;
    const complete = getAllProgress() ?? {};
    return subjects.map((s) => {
      const chapters = getChaptersBySubject(s.slug);
      const doneSet = new Set(complete[s.slug] ?? []);
      const done = chapters.filter((c) => doneSet.has(c.slug)).length;
      const practice = loadPractice(s.slug) ?? {};
      return {
        name: s.name,
        slug: s.slug,
        color: s.color,
        icon: s.icon,
        total: chapters.length,
        done,
        questionsRevealed: Object.values(practice).reduce(
          (n, p) => n + p.questionsRevealed.length,
          0
        ),
        flashcardsKnown: Object.values(practice).reduce(
          (n, p) => n + p.flashcardsKnown.length,
          0
        ),
        href: `/subjects/${s.slug}`,
      };
    });
  }, [ready, getAllProgress, loadPractice]);

  const class11Rows = useMemo(() => {
    if (!ready) return EMPTY_SUBJECT_PROGRESS;
    const complete = getAllProgress() ?? {};
    return class11Subjects.map((s) => {
      const chapters = getClass11Chapters(s.slug);
      const doneSet = new Set(complete[s.slug] ?? []);
      const done = chapters.filter((c) => doneSet.has(c.slug)).length;
      return {
        name: `${s.name} (Class 11)`,
        slug: s.slug,
        color: s.color,
        icon: s.icon,
        total: chapters.length,
        done,
        questionsRevealed: 0,
        flashcardsKnown: 0,
        href: `/class-11/${s.slug}`,
      };
    });
  }, [ready, getAllProgress]);

  const totals = useMemo(() => {
    const all = [...rows, ...class11Rows];
    const chapters = all.reduce((n, r) => n + r.total, 0);
    const done = all.reduce((n, r) => n + r.done, 0);
    return {
      chapters,
      done,
      pct: chapters > 0 ? Math.round((done / chapters) * 100) : 0,
      practiced: all.filter((r) => r.questionsRevealed > 0 || r.flashcardsKnown > 0).length,
      questionsRevealed: all.reduce((n, r) => n + r.questionsRevealed, 0),
      flashcardsKnown: all.reduce((n, r) => n + r.flashcardsKnown, 0),
    };
  }, [rows, class11Rows]);

  if (!ready) {
    return (
      <div className="space-y-6 pt-12">
        <Skeleton className="h-24 w-full rounded-2xl" />
        <Skeleton className="h-40 w-full rounded-2xl" />
        <Skeleton className="h-40 w-full rounded-2xl" />
      </div>
    );
  }

  const hasAny = totals.done > 0 || totals.questionsRevealed > 0 || totals.flashcardsKnown > 0;

  return (
    <div className="pt-12 sm:pt-14">
      {/* Masthead */}
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border/70 bg-card p-6 shadow-sm sm:p-8">
        <div>
          <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
            Dashboard
          </p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Your progress
          </h1>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            {hasAny
              ? `${totals.done} of ${totals.chapters} chapters completed — keep the streak going.`
              : "Start a chapter to begin tracking your progress here."}
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <StatPill
              icon={<CheckCircle2 className="h-3.5 w-3.5" />}
              value={totals.done}
              label={`of ${totals.chapters} chapters`}
            />
            <StatPill
              icon={<Layers className="h-3.5 w-3.5" />}
              value={totals.questionsRevealed}
              label="questions revealed"
            />
            <StatPill
              icon={<LockOpen className="h-3.5 w-3.5" />}
              value={totals.flashcardsKnown}
              label="flashcards known"
            />
          </div>
        </div>

        <ProgressRing value={totals.pct} size={120} strokeWidth={10} color="var(--primary)">
          <div className="text-center">
            <p className="text-2xl font-extrabold tabular-nums text-foreground">{totals.pct}%</p>
            <p className="text-[0.65rem] font-bold uppercase tracking-wide text-muted-foreground">
              complete
            </p>
          </div>
        </ProgressRing>
      </div>

      {/* Subject breakdown */}
      <div className="mt-10">
        <SectionHeading
          eyebrow="Breakdown"
          title="By subject"
          description="Reading and practice across every subject."
        />
        <div className="mt-5 space-y-2.5">
          {[...rows, ...class11Rows].map((row) => {
            const pct = row.total > 0 ? Math.round((row.done / row.total) * 100) : 0;
            return (
              <Link
                key={row.href}
                href={row.href}
                className="group flex items-center gap-4 rounded-xl border border-border/70 bg-card px-4 py-3.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${row.color}18` }}
                >
                  <row.icon className="h-5 w-5" style={{ color: row.color }} strokeWidth={1.8} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex items-center justify-between gap-3">
                    <span className="truncate text-sm font-bold text-foreground">{row.name}</span>
                    <span className="shrink-0 text-xs font-semibold tabular-nums text-muted-foreground">
                      {row.done}/{row.total}
                    </span>
                  </div>
                  <Progress
                    value={pct}
                    className="[&_[data-slot=progress-track]]:h-1.5 [&_[data-slot=progress-indicator]]:bg-[var(--bar)]"
                    style={{ "--bar": row.color } as React.CSSProperties}
                  />
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-muted-foreground/70" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Continue learning */}
      {recent && recent.length > 0 && (
        <div className="mt-12">
          <SectionHeading eyebrow="Jump back in" title="Continue learning" />
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {recent.slice(0, 4).map((item) => (
              <ContinueCard key={item.href} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}