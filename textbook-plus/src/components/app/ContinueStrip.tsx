"use client";

import { useEffect, useState } from "react";
import { History } from "lucide-react";
import { useSync } from "@/components/auth/SyncProvider";
import { getRecentChapters, type RecentChapter } from "@/lib/recent";
import { SectionHeading } from "@/components/app/SectionHeading";
import { ContinueCard } from "@/components/app/ContinueCard";
import { Skeleton } from "@/components/ui/skeleton";

export function ContinueStrip() {
  const { status, getAllProgress } = useSync();
  const [items, setItems] = useState<RecentChapter[] | null>(null);
  const [progress, setProgress] = useState<Record<string, string[]>>({});

  useEffect(() => {
    setItems(getRecentChapters());
  }, []);

  useEffect(() => {
    if (status === "idle" || status === "offline") {
      setProgress(getAllProgress());
    }
  }, [status, getAllProgress]);

  if (items === null) {
    return (
      <section className="mb-12">
        <SectionHeading eyebrow="Jump back in" title="Continue learning" />
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-[7.5rem] rounded-2xl" />
          ))}
        </div>
      </section>
    );
  }

  if (items.length === 0) return null;

  return (
    <section className="mb-12">
      <SectionHeading
        eyebrow="Jump back in"
        title="Continue learning"
        action={
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <History className="h-3.5 w-3.5" />
            Recent
          </span>
        }
      />
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.slice(0, 4).map((item) => (
          <ContinueCard
            key={item.href}
            href={item.href}
            title={item.title}
            subject={item.subjectName}
            color={item.subjectColor}
            completed={(progress[item.subjectSlug] ?? []).includes(item.slug)}
          />
        ))}
      </div>
    </section>
  );
}