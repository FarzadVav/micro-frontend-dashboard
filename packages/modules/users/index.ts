import { ModuleDefinition } from "@repo/config";
import { UsersPage } from "./pages/UsersPage";

export const ModuleDefinition: ModuleDefinition = {
  id: "users",
  route: "/users",
  Page: UsersPage,
  Navigation: {
    label: "Users",
    icon: "Users",
  },
  access: {
    roles: ["admin"],
  },
};

