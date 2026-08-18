"use client";

import { useEffect, useState } from "react";
import { ChapterRenderer } from "@/components/blocks/ChapterRenderer";
import { loadChapterBlocks } from "@/lib/blocknote/content-loader";
import type { Block } from "@blocknote/core";

interface BlockNoteContentProps {
  slug: string;
}

export function BlockNoteContent({ slug }: BlockNoteContentProps) {
  const [blocks, setBlocks] = useState<Block[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadChapterBlocks(slug)
      .then((b) => (b ? setBlocks(b) : setError(true)))
      .catch(() => setError(true));
  }, [slug]);

  if (error) {
    return (
      <div className="rounded-xl border border-dashed border-border/60 bg-muted/20 px-8 py-16 text-center">
        <p className="text-lg font-medium text-muted-foreground">
          Content coming soon
        </p>
        <p className="text-sm text-muted-foreground/70 mt-1">
          This chapter is being prepared.
        </p>
      </div>
    );
  }

  if (!blocks) {
    return (
      <div className="px-8 py-16 text-center text-muted-foreground">
        Loading...
      </div>
    );
  }

  return (
    <div className="prose-custom">
      <ChapterRenderer initialContent={blocks} />
    </div>
  );
}
