"use client";

import { ThemeProvider } from "@repo/ui/theme-context";
import { CounterProvider } from "@repo/ui/counter-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CounterProvider>{children}</CounterProvider>
    </ThemeProvider>
  );
}

