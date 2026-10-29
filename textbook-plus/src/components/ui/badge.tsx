import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Blueprint badge — a micro-label, never a chip (§14.8).
 *
 * 11px / 700 / 0.08em uppercase on a 3.6px radius hairline. No filled colour,
 * no pill. Default and secondary share the muted treatment; outline is bare.
 */
const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-[3px] border px-1.5 py-0.5 text-[11px] leading-none font-bold tracking-[0.08em] whitespace-nowrap uppercase transition-colors duration-[120ms] ease-[var(--ease-blueprint)] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "border-border bg-muted text-muted-foreground [a]:hover:bg-muted/70",
        secondary:
          "border-border bg-muted text-muted-foreground [a]:hover:bg-muted/70",
        destructive:
          "border-bad/40 bg-transparent text-bad focus-visible:ring-bad/40 [a]:hover:bg-bad/5",
        outline:
          "border-border bg-transparent text-muted-foreground [a]:hover:bg-foreground/[0.04] [a]:hover:text-foreground",
        ghost:
          "border-transparent bg-transparent text-muted-foreground [a]:hover:bg-foreground/[0.04] [a]:hover:text-foreground",
        link: "border-transparent bg-transparent text-primary normal-case tracking-normal underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
