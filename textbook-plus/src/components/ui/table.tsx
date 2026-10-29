import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * A single, accessible table primitive.
 *
 * Design notes (Blueprint §14.12):
 * - Horizontal rules only. No vertical borders, no zebra, no filled header.
 * - No `"use client"` — the markup is static, so it can render on the server.
 * - Cells are left to wrap by default; consumers opt into `whitespace-nowrap`
 *   instead of having to opt out of it (the previous behaviour forced every
 *   table into horizontal overflow).
 * - `Table` renders one scroll container (labelled `role="region"` and
 *   keyboard-focusable) so wide tables are reachable without a mouse.
 * - Pass `label` to give the table its accessible name; it is applied to both
 *   the scroll region and the `<table>` itself.
 */
function Table({
  className,
  containerClassName,
  label,
  ...props
}: React.ComponentProps<"table"> & {
  /** Class names for the scroll container wrapping the table. */
  containerClassName?: string
  /** Accessible name for the table and its scroll region. */
  label?: string
}) {
  const accessibleLabel = label ?? "Table"

  return (
    <div
      data-slot="table-container"
      role="region"
      aria-label={accessibleLabel}
      tabIndex={0}
      className={cn(
        "relative w-full overflow-x-auto rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        containerClassName
      )}
    >
      <table
        data-slot="table"
        aria-label={accessibleLabel}
        className={cn("w-full caption-bottom border-collapse text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("border-t border-border font-medium", className)}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b border-border transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      scope="col"
      className={cn(
        "h-10 px-3 text-left align-middle text-[11px] leading-none font-bold tracking-[0.08em] whitespace-normal text-muted-foreground uppercase",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn("px-3 py-3 align-top whitespace-normal", className)}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-3 text-[13px] text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
