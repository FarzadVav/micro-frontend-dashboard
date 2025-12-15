/**
 * Static Module Loader
 * 
 * This file statically imports all modules.
 * Next.js will tree-shake disabled modules during build.
 * No runtime dynamic loading - everything is static.
 */

import { enabledModules } from "@repo/config";
import type { ModuleDefinition } from "@repo/config";

// Static imports - all modules are imported here
// Tree-shaking will remove unused imports at build time
import * as HomeModule from "@modules/home";
import * as UsersModule from "@modules/users";
import * as ProductsModule from "@modules/products";
import * as ArticlesModule from "@modules/articles";
import * as CommentsModule from "@modules/comments";
import * as LoginModule from "@modules/login";

// Map all modules
const allModules = {
  home: HomeModule,
  users: UsersModule,
  products: ProductsModule,
  articles: ArticlesModule,
  comments: CommentsModule,
  login: LoginModule,
} as const;

/**
 * Get active modules based on enabledModules config
 * Only modules enabled in config will be included
 */
export const activeModules: ModuleDefinition[] = Object.entries(allModules)
  .filter(([key]) => enabledModules[key as keyof typeof enabledModules])
  .map(([_, mod]) => mod.ModuleDefinition);

/**
 * Returns active modules filtered by role (and public access)
 */
export const getActiveModulesForRole = (
  role?: string,
): ModuleDefinition[] => {
  return activeModules.filter((mod) => {
    const access = mod.access;
    if (access?.public) return true;
    if (access?.roles?.length) {
      return !!role && access.roles.includes(role);
    }
    return true; // default allow if no access specified
  });
};

/**
 * Check access to a specific module by route
 */
export const hasAccessToModule = (route: string, role?: string): boolean => {
  const module = getModuleByRoute(route);
  if (!module) return false;
  const access = module.access;
  if (access?.public) return true;
  if (access?.roles?.length) {
    return !!role && access.roles.includes(role);
  }
  return true;
};

/**
 * Get module by route
 */
export const getModuleByRoute = (route: string): ModuleDefinition | undefined => {
  return activeModules.find((mod) => mod.route === route);
};

/**
 * Get all module routes
 */
export const getModuleRoutes = (): string[] => {
  return activeModules.map((mod) => mod.route);
};

