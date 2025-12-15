/**
 * Central configuration for enabled/disabled modules
 * Only modules set to true will be included in the build
 * Next.js will tree-shake disabled modules at build time
 */
export const enabledModules = {
  home: true,
  users: false,
  products: true,
  articles: true,
  comments: false,
  login: true,
} as const;

export type ModuleId = keyof typeof enabledModules;
