import { ModuleDefinition } from "@repo/config";
import { HomePage } from "./pages/HomePage";

export const ModuleDefinition: ModuleDefinition = {
  id: "home",
  route: "/",
  Page: HomePage,
  Navigation: {
    label: "Home",
    icon: "Home",
  },
  access: {
    public: true,
  },
};

