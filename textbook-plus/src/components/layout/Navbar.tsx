"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sun, Moon, Home, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/layout/ThemeProvider";
import { useFontSize } from "@/hooks/useFontSize";
import { SearchModal } from "@/components/search/SearchModal";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
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
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/icon.svg"
              alt="Textbook++"
              width={36}
              height={36}
              className="transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-6 dark:invert"
              priority
            />
            <span className="text-lg font-extrabold tracking-tight hidden sm:inline">
              Textbook++
            </span>
          </Link>

          {/* Nav Links — Center */}
          <nav className="flex items-center gap-0.5 sm:gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm font-bold transition-all duration-150 sm:gap-2 sm:px-4",
                    isActive
                      ? "bg-primary/12 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Search */}
            <Button
              variant="outline"
              size="icon-lg"
              onClick={() => setSearchOpen(true)}
              aria-label="Search chapters"
              className="rounded-full border-border/60 bg-muted/50 px-0 text-muted-foreground hover:text-foreground sm:w-auto sm:px-3"
            >
              <Search className="h-4 w-4" />
              <Kbd className="hidden text-[10px] sm:inline-flex">
                Ctrl K
              </Kbd>
            </Button>

            {/* Font Size */}
            <div className="flex items-center gap-0.5 rounded-lg border border-border/60 bg-muted/50">
              <Button
                variant="ghost"
                onClick={decrease}
                disabled={!canDecrease}
                aria-label="Decrease font size"
                className="h-9 w-8 rounded-md px-0 text-sm font-bold text-muted-foreground hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30 disabled:pointer-events-auto sm:w-9"
              >
                A-
              </Button>
              <div className="h-4 w-px bg-border/60" />
              <Button
                variant="ghost"
                onClick={increase}
                disabled={!canIncrease}
                aria-label="Increase font size"
                className="h-9 w-8 rounded-md px-0 text-sm font-bold text-muted-foreground hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30 disabled:pointer-events-auto sm:w-9"
              >
                A+
              </Button>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon-lg"
              onClick={toggle}
              aria-label="Toggle theme"
              className="rounded-full border-border/60 bg-muted/50 text-muted-foreground hover:text-foreground"
            >
              {theme === "dark" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
