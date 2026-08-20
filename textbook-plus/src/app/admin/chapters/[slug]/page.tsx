"use client";

import { use } from "react";
import ContentEditor from "@/components/admin/ContentEditor";
import { chapters } from "@/data/chapters";
import { subjects } from "@/data/subjects";
import { ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";

function findChapter(slug: string) {
  for (const [subjectSlug, chs] of Object.entries(chapters)) {
    const ch = chs.find((c) => c.slug === slug);
    if (ch) {
      const subject = subjects.find((s) => s.slug === subjectSlug);
      return { chapter: ch, subject };
    }
  }
  return null;
}

export default function ChapterEditorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const result = findChapter(slug);

  if (!result) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <p className="text-muted-foreground">Chapter not found.</p>
        <Link href="/admin" className="text-sm text-primary mt-4 inline-block hover:underline">
          Back to admin
        </Link>
      </div>
    );
  }

  const { chapter, subject } = result;

  function handleSave(html: string) {
    // Store in localStorage for now (Supabase later)
    localStorage.setItem(`chapter-content:${slug}`, html);
    localStorage.setItem(`chapter-content:${slug}:timestamp`, Date.now().toString());
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/admin"
          className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border/60 hover:bg-muted/50 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            {subject && (
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-md"
                style={{ backgroundColor: subject.colorLight, color: subject.color }}
              >
                {subject.name}
              </span>
            )}
            <span className="text-xs text-muted-foreground">Ch {chapter.number}</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">{chapter.title}</h1>
        </div>
        <Link
          href={`/chapter/${slug}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <FileText className="h-4 w-4" />
          View live
        </Link>
      </div>

      {/* Editor */}
      <div className="h-[calc(100vh-12rem)]">
        <ContentEditor
          autoSaveKey={slug}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}
