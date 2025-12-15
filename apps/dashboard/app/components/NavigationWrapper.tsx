"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "./Navigation";
import type { ModuleDefinition } from "@repo/config";

interface Props {
  modules: ModuleDefinition[];
}

export function NavigationWrapper({ modules }: Props) {
  const pathname = usePathname();

  // If on login page, don't show navigation
  if (pathname === "/login") {
    return null;
  }

  return <Navigation modules={modules} />;
}

