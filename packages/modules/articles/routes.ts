/**
 * Route definitions for the articles module
 */
export const routes = {
  articles: "/articles",
  articleDetail: (id: string) => `/articles/${id}`,
  articleCreate: "/articles/new",
} as const;

