"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ModuleDefinition } from "../types";
import { useState } from "react";

interface Props {
  modules: ModuleDefinition[];
}

export function Navigation({ modules }: Props) {
  const pathname = usePathname();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const navItems = modules
    .filter((mod) => mod.Navigation)
    .map((mod) => ({
      route: mod.route,
      label: mod.Navigation!.label,
      icon: mod.Navigation!.icon,
    }));

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // ignore
    } finally {
      window.location.href = "/login";
    }
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold">
              Dashboard
            </Link>
            <div className="flex gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.route;
                return (
                  <Link
                    key={item.route}
                    href={item.route}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {}}
              className="px-3 py-2 text-sm rounded-md border border-border hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              Light
            </button>
            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="px-3 py-2 text-sm rounded-md border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoggingOut ? "Logging out..." : "Logout"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

