"use client";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/style.css";
import "@blocknote/mantine/style.css";
import { chapterSchema } from "@/lib/blocknote/schema";
import { useTheme } from "@/components/layout/ThemeProvider";
import type { Block } from "@blocknote/core";

interface ChapterRendererProps {
  initialContent: Block[];
}

export function ChapterRenderer({ initialContent }: ChapterRendererProps) {
  const { theme } = useTheme();
  const editor = useCreateBlockNote(
    { schema: chapterSchema, initialContent },
    [initialContent]
  );

  return (
    <BlockNoteView editor={editor} editable={false} theme={theme} />
  );
}
