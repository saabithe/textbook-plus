"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sun, Moon, Home, BarChart3, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/layout/ThemeProvider";
import { useFontSize } from "@/hooks/useFontSize";
import { SearchModal } from "@/components/search/SearchModal";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/progress", label: "Progress", icon: BarChart3 },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const { decrease, increase, canDecrease, canIncrease } = useFontSize();
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/icon.svg"
              alt="Textbook++"
              width={36}
              height={36}
              className="transition-transform duration-200 group-hover:scale-105 dark:invert"
              priority
            />
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

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex h-9 items-center gap-2 rounded-lg border border-border/60 bg-muted/50 px-3 text-sm text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
              aria-label="Search chapters"
            >
              <Search className="h-4 w-4" />
              <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border/60 bg-background px-1.5 text-[10px] font-medium">
                Ctrl K
              </kbd>
            </button>

            {/* Font Size */}
            <div className="hidden sm:flex items-center gap-0.5 rounded-lg border border-border/60 bg-muted/50">
              <button
                onClick={decrease}
                disabled={!canDecrease}
                className="flex h-9 w-9 items-center justify-center text-sm font-bold text-muted-foreground transition-all duration-200 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <div className="h-4 w-px bg-border/60" />
              <button
                onClick={increase}
                disabled={!canIncrease}
                className="flex h-9 w-9 items-center justify-center text-sm font-bold text-muted-foreground transition-all duration-200 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggle}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/50 text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
