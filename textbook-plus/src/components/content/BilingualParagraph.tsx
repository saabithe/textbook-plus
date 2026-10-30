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

export function BilingualParagraph({
  arabic,
  english,
  number,
  className,
}: BilingualParagraphProps) {
  return (
    <div className={cn("my-5 flex items-start gap-3", className)}>
      {number !== undefined && (
        <span className="t-micro mt-1 w-6 shrink-0 text-center tabular-nums !text-[12px]">
          {number}
        </span>
      )}

      <div className="min-w-0 flex-1">
        <p dir="rtl" className="arabic-body mb-[0.35rem] text-foreground">
          {arabic}
        </p>
        <p
          dir="ltr"
          className="translation border-s border-border ps-3 text-[15px] leading-[1.7] text-muted-foreground"
        >
          {english}
        </p>
      </div>
    </div>
  );
}