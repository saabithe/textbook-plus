"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Sun, Moon, Home, Search, Cloud, CloudOff, LogIn, LogOut, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/layout/ThemeProvider";
import { useFontSize } from "@/hooks/useFontSize";
import { useSync } from "@/components/auth/SyncProvider";
import { useAuth } from "@/components/auth/AuthProvider";
import { SearchModal } from "@/components/search/SearchModal";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Kbd } from "@/components/ui/kbd";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggle } = useTheme();
  const { decrease, increase, canDecrease, canIncrease } = useFontSize();
  const { status } = useSync();
  const { user, isAnonymous, supabase } = useAuth();
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

  async function handleSignOut() {
    try {
      await supabase.auth.signOut();
    } catch {}
    router.push("/");
  }

  const syncLabel =
    status === "syncing"
      ? "Syncing progress..."
      : status === "error"
      ? "Sync failed — will retry"
      : status === "offline"
      ? "Offline — changes saved locally"
      : "Progress synced";

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b-2 border-border/60 bg-background/80 backdrop-blur-xl">
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
                    "flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm font-bold transition-all duration-150 sm:gap-2 sm:px-4",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[0_3px_0_rgb(0_0_0/0.2)]"
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

            {/* Sync Status */}
            <Tooltip>
              <TooltipTrigger
                render={
                  <div
                    className={cn(
                      "hidden h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/50 transition-all duration-200 sm:flex",
                      status === "syncing" && "text-blue-500",
                      status === "error" && "text-amber-500",
                      status === "idle" && "text-muted-foreground",
                      status === "offline" && "text-muted-foreground"
                    )}
                  />
                }
              >
                {status === "syncing" ? (
                  <Spinner className="h-4 w-4" />
                ) : status === "error" ? (
                  <CloudOff className="h-4 w-4" />
                ) : (
                  <Cloud className="h-4 w-4" />
                )}
              </TooltipTrigger>
              <TooltipContent>{syncLabel}</TooltipContent>
            </Tooltip>

            {/* Auth Menu */}
            {isAnonymous || !user ? (
              <Button
                variant="outline"
                size="icon-lg"
                render={<Link href="/login" />}
                className="rounded-full border-border/60 bg-muted/50 px-0 text-muted-foreground hover:text-foreground sm:w-auto sm:px-3"
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Sign In</span>
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="outline"
                      size="icon-lg"
                      aria-label="Account menu"
                      className="border-border/60 bg-muted/50 px-0 text-muted-foreground hover:text-foreground sm:w-auto sm:px-3"
                    />
                  }
                >
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline max-w-[100px] truncate">{user.email}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel className="truncate">
                    {user.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem render={<Link href="/account" />}>
                    <Settings className="h-4 w-4" />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

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
