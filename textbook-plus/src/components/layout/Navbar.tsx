"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sun, Moon, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/layout/ThemeProvider";
import { useFontSize } from "@/hooks/useFontSize";
import { SearchModal } from "@/components/search/SearchModal";
import { subjects } from "@/data/subjects";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const navLinks = [{ href: "/", label: "Home" }];

/* One control grammar: 32px tall, hairline edge, 3px radius, 4% ink wash on
   hover, no fill, no pill, no shadow. */
const controlClass =
  "inline-flex h-8 items-center justify-center rounded-[3px] border border-border text-muted-foreground transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-foreground/4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

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
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6">
          {/* Mark + wordmark */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/icon.svg"
              alt="Textbook++"
              width={20}
              height={20}
              className="h-5 w-5 dark:invert"
              priority
            />
            <span className="hidden text-[15px] font-bold tracking-[-0.01em] text-foreground sm:inline">
              Textbook++
            </span>
          </Link>

          {/* Nav — active state is a 2px ink underline at the header's bottom edge */}
          <nav aria-label="Primary" className="flex h-16 items-center">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative flex h-16 items-center px-3 text-[13px] transition-colors duration-[120ms] ease-[var(--ease-blueprint)]",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-2 bottom-0 h-[2px] bg-foreground transition-opacity duration-[120ms] ease-[var(--ease-blueprint)]",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Subjects meganav */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="relative flex h-16 items-center px-3 text-[13px] text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                  Subjects
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-2 bottom-0 h-[2px] bg-foreground transition-opacity duration-[120ms] ease-[var(--ease-blueprint)]",
                      pathname !== "/" ? "opacity-100" : "opacity-0",
                    )}
                  />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-lg border border-border bg-card p-2 shadow-sm">
                  <ul className="grid w-[420px] gap-1 md:w-[520px] md:grid-cols-2">
                    {subjects.map((subject) => {
                      const Icon = subject.icon;
                      return (
                        <li key={subject.slug}>
                          <NavigationMenuLink
                            render={<Link href={`/subjects/${subject.slug}`} />}
                          >
                            <span className="flex items-center gap-3 rounded-[3px] p-2 transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-foreground/[0.04]">
                              <Icon
                                className="h-4 w-4 shrink-0"
                                style={{ color: subject.color }}
                                aria-hidden
                              />
                              <span className="min-w-0">
                                <span className="block text-[13px] font-semibold text-foreground">
                                  {subject.name}
                                </span>
                                <span className="t-micro">
                                  {subject.chapterCount} chapters
                                </span>
                              </span>
                            </span>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="border-t border-border px-2 py-2">
                    <Link
                      href="/"
                      className="block text-[12px] font-medium text-muted-foreground hover:text-foreground"
                    >
                      Home →
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right controls */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Search — hairline rectangle, icon + Ctrl K in micro type */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search chapters"
              className={cn(controlClass, "gap-2 px-2 sm:px-2.5")}
            >
              <Search className="h-4 w-4" aria-hidden />
              <span className="t-micro hidden sm:inline">Ctrl K</span>
            </button>

            {/* Font size — two text buttons split by a hairline */}
            <div className="flex h-8 items-center">
              <button
                type="button"
                onClick={decrease}
                disabled={!canDecrease}
                aria-label="Decrease font size"
                className="inline-flex h-8 items-center justify-center px-1.5 text-[13px] font-semibold tabular-nums text-muted-foreground transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-foreground/4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:text-faint disabled:hover:bg-transparent disabled:hover:text-faint"
              >
                A&minus;
              </button>
              <span aria-hidden className="h-4 w-px bg-border" />
              <button
                type="button"
                onClick={increase}
                disabled={!canIncrease}
                aria-label="Increase font size"
                className="inline-flex h-8 items-center justify-center px-1.5 text-[13px] font-semibold tabular-nums text-muted-foreground transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-foreground/4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:text-faint disabled:hover:bg-transparent disabled:hover:text-faint"
              >
                A+
              </button>
            </div>

            {/* Theme — 32px hairline square */}
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle theme"
              className={cn(controlClass, "w-8")}
            >
              {theme === "dark" ? (
                <Moon className="h-4 w-4" aria-hidden />
              ) : (
                <Sun className="h-4 w-4" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
