import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Blueprint button — one hairline grammar (§14.8).
 *
 * - `default` = ink fill, `secondary` = hairline on card, `outline` = hairline,
 *   `ghost` = no chrome, 4% ink wash on hover.
 * - Radius 6, no shadow, no gradient, no pill. Heights: 32 / 36 / 40.
 * - Focus: 2px ink ring with a 2px offset.
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap outline-none select-none transition-colors duration-[120ms] ease-[var(--ease-blueprint)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary font-semibold text-primary-foreground hover:bg-primary/90 aria-expanded:bg-primary/90",
        outline:
          "border-border bg-card text-foreground hover:border-rule-strong hover:bg-foreground/[0.04] aria-expanded:bg-foreground/[0.04]",
        secondary:
          "border-border bg-card text-foreground hover:bg-foreground/[0.04] aria-expanded:bg-foreground/[0.04]",
        ghost:
          "text-muted-foreground hover:bg-foreground/[0.03] hover:text-foreground aria-expanded:bg-foreground/[0.03] aria-expanded:text-foreground",
        destructive:
          "border-bad/40 text-bad hover:bg-bad/5 focus-visible:ring-bad/40 aria-expanded:bg-bad/5",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-3.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-6 gap-1 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 text-[0.8125rem] has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-10 gap-2 px-4 has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
