"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { activeModules } from "../../lib/module-loader";

export function Navigation() {
  const pathname = usePathname();

  // Get all modules with navigation config
  const navItems = activeModules
    .filter((mod) => mod.Navigation)
    .map((mod) => ({
      route: mod.route,
      label: mod.Navigation!.label,
      icon: mod.Navigation!.icon,
    }));

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
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

