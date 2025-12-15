import type { ModuleDefinition as ModuleDefinitionType } from "@repo/config";
import { LoginPage } from "./pages/LoginPage";

export const ModuleDefinition: ModuleDefinitionType = {
  id: "login",
  route: "/login",
  Page: LoginPage,
  Navigation: undefined, // hide from nav
  access: {
    public: true,
  },
};

