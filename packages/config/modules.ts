import type { ModuleAccess } from "./types";

/**
 * Central configuration for all modules
 * All module definitions (id, route, Navigation, access, enabled) are here
 * Modules only export their Page component
 */
export const moduleConfig = {
  home: {
    id: "home",
    route: "/",
    enabled: true,
    Navigation: {
      label: "Home",
      icon: "Home",
    },
    access: {
      public: true,
    } as ModuleAccess,
  },
  users: {
    id: "users",
    route: "/users",
    enabled: false,
    Navigation: {
      label: "Users",
      icon: "Users",
    },
    access: {
      roles: ["admin"],
    } as ModuleAccess,
  },
  products: {
    id: "products",
    route: "/products",
    enabled: true,
    Navigation: {
      label: "Products",
      icon: "Box",
    },
    access: {
      roles: ["admin", "manager"],
    } as ModuleAccess,
  },
  articles: {
    id: "articles",
    route: "/articles",
    enabled: true,
    Navigation: {
      label: "Articles",
      icon: "FileText",
    },
    access: {
      roles: ["admin", "editor"],
    } as ModuleAccess,
  },
  comments: {
    id: "comments",
    route: "/comments",
    enabled: false,
    Navigation: {
      label: "Comments",
      icon: "MessageSquare",
    },
    access: {
      roles: ["admin"],
    } as ModuleAccess,
  },
  login: {
    id: "login",
    route: "/login",
    enabled: true,
    Navigation: undefined, // hide from nav
    access: {
      public: true,
    } as ModuleAccess,
  },
} as const;

export type ModuleId = keyof typeof moduleConfig;

/**
 * Get enabled modules map (for backward compatibility)
 */
export const enabledModules = Object.fromEntries(
  Object.entries(moduleConfig).map(([key, config]) => [key, config.enabled])
) as Record<ModuleId, boolean>;

/**
 * Get access configuration for a module
 */
export function getModuleAccess(moduleId: ModuleId): ModuleAccess | undefined {
  return moduleConfig[moduleId]?.access;
}
