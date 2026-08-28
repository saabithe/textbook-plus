import Link from "next/link";
import { chapters } from "@/data/chapters";
import { subjects } from "@/data/subjects";
import { hasChapterContent } from "@/lib/content";
import { getBuildCommit } from "@/lib/build-info";

export default function AdminPage() {
  const buildCommit = getBuildCommit();
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Content Admin</h1>
      <p className="text-muted-foreground mb-2">
        Manage chapter content. Chapters with content are marked below.
      </p>
      <p className="text-xs font-mono text-muted-foreground mb-8">
        Build: {buildCommit || "unknown"}
      </p>

      <div className="space-y-8">
        {subjects.map((subject) => {
          const subjectChapters = chapters[subject.slug] ?? [];
          return (
            <div key={subject.slug}>
              <h2 className="text-xl font-semibold mb-3" style={{ color: `var(--subject-${subject.slug})` }}>
                {subject.name}
              </h2>
              <div className="grid gap-2">
                {subjectChapters.map((ch) => {
                  const hasContent = hasChapterContent(ch.slug);
                  return (
                    <div
                      key={ch.id}
                      className="flex items-center justify-between rounded-lg border border-border/60 px-4 py-3 hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-muted-foreground w-8">
                          {ch.number}
                        </span>
                        <span className="text-sm font-medium">{ch.title}</span>
                        {hasContent && (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            Content
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/chapters/${ch.slug}`}
                          className="text-xs font-medium px-3 py-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          Edit
                        </Link>
                        <Link
                          href={`/chapter/${ch.slug}`}
                          className="text-xs font-medium px-3 py-1.5 rounded-md border border-border/60 hover:bg-muted/50 transition-colors"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
