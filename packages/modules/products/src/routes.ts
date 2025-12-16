export const routes = {
  products: "/products",
  productDetail: (id: string) => `/products/${id}`,
  productCreate: "/products/new",
} as const;

