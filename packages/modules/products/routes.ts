/**
 * Route definitions for the products module
 */
export const routes = {
  products: "/products",
  productDetail: (id: string) => `/products/${id}`,
  productCreate: "/products/new",
} as const;

