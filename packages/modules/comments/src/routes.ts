export const routes = {
  comments: "/comments",
  commentDetail: (id: string) => `/comments/${id}`,
} as const;

