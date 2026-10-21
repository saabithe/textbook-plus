import { cn } from "@/lib/utils";

interface BilingualParagraphProps {
  /** The Arabic text (with tashkeel). */
  arabic: string;
  /** The English translation. */
  english: string;
  /** Optional point number — renders a badge on the right (RTL reading order). */
  number?: number;
  className?: string;
}

/**
 * A paragraph of Arabic text with its English translation directly beneath.
 * The Arabic sits on the baseline in the reading flow; the translation is
 * set smaller and muted, separated by a logical (direction-aware) rule so it
 * never collides with the Arabic column.
 */
export function BilingualParagraph({
  arabic,
  english,
  number,
  className,
}: BilingualParagraphProps) {
  return (
    <div className={cn("my-5 flex items-start gap-3.5", className)}>
      {number !== undefined && (
        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-bold text-muted-foreground">
          {number}
        </span>
      )}

      <div className="min-w-0 flex-1">
        <p dir="rtl" className="arabic-body mb-1.5 text-foreground">
          {arabic}
        </p>
        <p
          dir="ltr"
          className="translation border-s-2 border-border/50 ps-3 text-[0.95rem] leading-[1.7] text-muted-foreground"
        >
          {english}
        </p>
      </div>
    </div>
  );
}
