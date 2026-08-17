"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Sun, Moon, Home, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/progress", label: "Progress", icon: BarChart3 },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground transition-transform duration-200 group-hover:scale-105">
            <BookOpen className="h-5 w-5 text-background" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-bold tracking-tight hidden sm:inline">
            Textbook++
          </span>
        </Link>

        {/* Nav Links — Center */}
        <nav className="flex items-center gap-0.5 sm:gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors duration-150 sm:gap-2 sm:px-4",
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/50 text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
          aria-label="Toggle theme"
        >
          <Sun className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
