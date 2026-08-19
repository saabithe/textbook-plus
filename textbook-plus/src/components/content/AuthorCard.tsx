import { cn } from "@/lib/utils";

interface AuthorCardProps {
  name: string;
  children?: React.ReactNode;
  className?: string;
}

export function AuthorCard({ name, children, className }: AuthorCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/50 bg-card px-6 py-5 my-6",
        className
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        Author
      </p>
      <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
      {children && (
        <div className="text-[0.95rem] leading-[1.75] text-foreground/85">
          {children}
        </div>
      )}
    </div>
  );
}
