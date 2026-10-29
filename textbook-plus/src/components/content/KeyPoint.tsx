/**
 * KeyPoint — no frame. A muted panel carrying one 3px ink rule,
 * a micro label and 17px body. The rule is the whole emphasis.
 */
interface KeyPointProps {
  title?: string;
  children: React.ReactNode;
}

export function KeyPoint({ title = "Key Point", children }: KeyPointProps) {
  return (
    <aside className="my-6 border-l-[3px] border-l-foreground bg-muted px-4 py-4 sm:px-5 sm:py-5">
      <div className="t-micro">{title}</div>
      <div className="mt-2 text-[1.0625rem] leading-[1.7] text-foreground/90">
        {children}
      </div>
    </aside>
  );
}
