"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

/**
 * Blueprint sidebar — vendored and adapted from shadcn for base-ui (§14.15).
 *
 * Deviations from upstream shadcn `sidebar.tsx`:
 *  - Base UI primitives only; no Radix, no `sheet.tsx` dependency.
 *  - `SidebarProvider` owns the open state and binds the toggle shortcut to
 *    Ctrl/Cmd + . (not Ctrl/Cmd + B, which §15 reserves for bold).
 *  - `Sidebar` is rendered IN FLOW (not `fixed`), sticky inside its grid cell,
 *    and hidden below the `xl` (1280px) breakpoint. No `h-svh`, no offcanvas,
 *    no drag rail, no trigger, no inset/header/footer/input variants.
 *  - Tokens are the neutral `--sidebar-*` scale; no new colours are introduced.
 *
 * Sets `--sidebar-width: 200px` on the provider wrapper.
 */

type SidebarContextValue = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null)

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

export function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange,
  className,
  style,
  children,
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const [openState, setOpenState] = React.useState(defaultOpen)
  const open = openProp ?? openState

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (openProp === undefined) setOpenState(next)
      onOpenChange?.(next)
    },
    [openProp, onOpenChange]
  )

  const toggleSidebar = React.useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === ".") {
        event.preventDefault()
        toggleSidebar()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  const value = React.useMemo<SidebarContextValue>(
    () => ({
      state: open ? "expanded" : "collapsed",
      open,
      setOpen,
      toggleSidebar,
    }),
    [open, setOpen, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={value}>
      <div
        data-slot="sidebar-wrapper"
        data-state={value.state}
        className={cn("group/sidebar-wrapper", className)}
        style={{ "--sidebar-width": "200px", ...style } as React.CSSProperties}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

interface SidebarProps extends React.ComponentProps<"aside"> {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}

export function Sidebar({
  side = "right",
  className,
  children,
  ...props
}: SidebarProps) {
  return (
    <aside
      data-slot="sidebar"
      data-side={side}
      className={cn(
        "text-sidebar-foreground hidden xl:flex xl:flex-col xl:w-[var(--sidebar-width)] shrink-0",
        className
      )}
      {...props}
    >
      {children}
    </aside>
  )
}

export function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
}

export function SidebarGroupLabel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-label"
      className={cn("t-micro mb-1 text-muted-foreground", className)}
      {...props}
    />
  )
}

export function SidebarGroupContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  )
}

export function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  )
}

export function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  )
}

type SidebarMenuButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string
}

export function SidebarMenuButton({
  asChild = false,
  isActive = false,
  className,
  children,
  ...props
}: SidebarMenuButtonProps) {
  const classes = cn(
    "relative flex h-8 w-full items-center gap-2 rounded-sm px-2 text-[14px] font-medium text-muted-foreground transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none disabled:pointer-events-none disabled:opacity-40",
    isActive &&
      "text-foreground before:absolute before:inset-y-1 before:start-0 before:w-[3px] before:bg-[var(--accent,var(--foreground))]",
    className
  )

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string; [key: string]: unknown }>
    return React.cloneElement(child, {
      ...props,
      "data-active": isActive,
      className: cn(classes, child.props.className),
      ...( { "data-slot": "sidebar-menu-button" } as unknown as object ),
    })
  }

  return (
    <button
      data-slot="sidebar-menu-button"
      data-active={isActive}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}

export function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      className={cn("mx-3 flex min-w-0 flex-col gap-1 border-s border-border ps-3", className)}
      {...props}
    />
  )
}

export function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  )
}

type SidebarMenuSubButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
}

export function SidebarMenuSubButton({
  asChild = false,
  isActive = false,
  className,
  children,
  ...props
}: SidebarMenuSubButtonProps) {
  const classes = cn(
    "relative flex h-7 w-full items-center gap-2 rounded-sm px-2 text-[12.5px] font-normal text-muted-foreground transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-foreground/[0.03] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none",
    "ps-[12px]",
    isActive && "text-foreground before:absolute before:inset-y-1 before:start-0 before:w-[2px] before:bg-foreground",
    className
  )

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string; [key: string]: unknown }>
    return React.cloneElement(child, {
      ...props,
      "data-slot": "sidebar-menu-sub-button",
      "data-active": isActive,
      className: cn(classes, child.props.className),
    })
  }

  return (
    <button
      data-slot="sidebar-menu-sub-button"
      data-active={isActive}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}

export function SidebarMenuBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="sidebar-menu-badge"
      className={cn(
        "ms-auto text-[11px] tabular-nums text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export const SidebarSeparator = Separator