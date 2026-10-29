import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

/* Section header: micro label, one H2, one muted line. No rules, no colour. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex items-end justify-between gap-4", className)}>
      <div>
        {eyebrow && <p className="t-micro">{eyebrow}</p>}
        <h2 className={cn("t-h2", eyebrow && "mt-2")}>{title}</h2>
        {description && (
          <p className="t-caption mt-2 max-w-xl">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
