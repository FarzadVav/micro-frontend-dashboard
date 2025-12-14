/**
 * Route definitions for the users module
 */
export const routes = {
  users: "/users",
  userDetail: (id: string) => `/users/${id}`,
} as const;

