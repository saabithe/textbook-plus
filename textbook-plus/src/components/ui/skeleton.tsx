import { cn } from "@/lib/utils"

/**
 * Blueprint skeleton — `--muted` block at the box radius (§14.13).
 * Geometry is the caller's responsibility: it must equal the loaded geometry.
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-sm bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
