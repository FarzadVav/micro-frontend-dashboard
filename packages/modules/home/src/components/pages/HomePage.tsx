"use client";

import { ThemeButton, useThemeStore } from "@repo/ui/components";

export function HomePage() {
  const { theme } = useThemeStore();

  return (
    <div className="p-3 bg-background-thick">
      <ThemeButton color="primary" variant="fill">{theme}</ThemeButton>
    </div>
  )
}