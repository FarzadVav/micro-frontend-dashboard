"use client";

import { useUser } from "@repo/lib";
import { ThemeButton, useThemeStore } from "@repo/ui/components";

export function HomePage() {
  const { theme } = useThemeStore();
  const { user } = useUser();

  return (
    <div className="p-3 bg-background-thick">
      <ThemeButton color="primary" variant="fill">{theme}</ThemeButton>
      <p className="mt-6">Username: {user?.result?.firstName}</p>
    </div>
  )
}