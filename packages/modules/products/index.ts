import { ModuleDefinition } from "@repo/config";
import { ProductsPage } from "./pages/ProductsPage";

export const ModuleDefinition: ModuleDefinition = {
  id: "products",
  route: "/products",
  Page: ProductsPage,
  Navigation: {
    label: "Products",
    icon: "Box",
  },
};

