/**
 * Static Module Loader
 * 
 * This file statically imports all module Page components.
 * Next.js will tree-shake disabled modules during build.
 * No runtime dynamic loading - everything is static.
 * 
 * Module definitions (id, route, Navigation, access) are in packages/config/modules.ts
 * Modules only export their Page component
 */

import { moduleConfig, getModuleAccess } from "@repo/config";
import type { ModuleDefinition, ModuleAccess } from "@repo/config";

// Static imports - all module Page components are imported here
// Tree-shaking will remove unused imports at build time
import { HomePage } from "@modules/home";
import { UsersPage } from "@modules/users";
import { ProductsPage } from "@modules/products";
import { ArticlesPage } from "@modules/articles";
import { CommentsPage } from "@modules/comments";
import { LoginPage } from "@modules/login";

// Map module IDs to their Page components
const modulePages = {
  home: HomePage,
  users: UsersPage,
  products: ProductsPage,
  articles: ArticlesPage,
  comments: CommentsPage,
  login: LoginPage,
} as const;

/**
 * Get active modules based on moduleConfig
 * Combines config (id, route, Navigation, access) with Page components
 * Only modules with enabled: true will be included
 */
export const activeModules: ModuleDefinition[] = Object.entries(moduleConfig)
  .filter(([_, config]) => config.enabled)
  .map(([key, config]) => ({
    id: config.id,
    route: config.route,
    Page: modulePages[key as keyof typeof modulePages],
    Navigation: config.Navigation,
  }));

/**
 * Check if user has access to a module based on role
 */
function checkModuleAccess(access: ModuleAccess | undefined, role?: string): boolean {
  if (!access) return true; // default allow if no access specified
  if (access.public) return true;
  if (access.roles?.length) {
    return !!role && access.roles.includes(role);
  }
  return true;
}

/**
 * Returns active modules filtered by role (and public access)
 */
export const getActiveModulesForRole = (
  role?: string,
): ModuleDefinition[] => {
  return activeModules.filter((mod) => {
    const access = getModuleAccess(mod.id as keyof typeof moduleConfig);
    return checkModuleAccess(access, role);
  });
};

/**
 * Check access to a specific module by route
 */
export const hasAccessToModule = (route: string, role?: string): boolean => {
  const module = getModuleByRoute(route);
  if (!module) return false;
  const access = getModuleAccess(module.id as keyof typeof moduleConfig);
  return checkModuleAccess(access, role);
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

