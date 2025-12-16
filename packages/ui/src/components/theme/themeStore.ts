"use client";

import { useIsFirstRender, useLocalStorage } from "@mantine/hooks";
import { useEffect } from "react";

export function useThemeStore() {
  const [theme, setTheme] = useLocalStorage({ key: "theme", defaultValue: "light" });
  const firstRender = useIsFirstRender();

  useEffect(() => {
    if (firstRender) return;

    document.querySelector("html")!.setAttribute("data-theme", theme);
  }, [theme, firstRender]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return {
    theme,
    toggleTheme,
  };
}