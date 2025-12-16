import { HomePage } from "@modules/home";
import {
  Home,
  Users,
  Box,
  FileText,
  MessageSquare,
} from "lucide-react";

import { UsersPage } from "@modules/users";
import { ProductsPage } from "@modules/products";
import { ArticlesPage } from "@modules/articles";
import { CommentsPage } from "@modules/comments";
import { ComponentType } from "react";

type ModuleT = {
  id: string;
  label: string;
  route: string;
  icon: ComponentType<{ className?: string }>;
  enabled: boolean;
  component: ComponentType;
  roles: string[];
}

export const moduleConfig: Record<string, ModuleT> = {
  home: {
    id: "home",
    label: "name",
    route: "/",
    icon: ({ className }) => <Home className={className} />,
    enabled: true,
    component: HomePage,
    roles: ["admin"],
  },
  users: {
    id: "users",
    label: "Users",
    route: "/users",
    icon: ({ className }) => <Users className={className} />,
    enabled: false,
    component: UsersPage,
    roles: ["admin"],
  },
  products: {
    id: "products",
    label: "Products",
    route: "/products",
    icon: ({ className }) => <Box className={className} />,
    enabled: true,
    component: ProductsPage,
    roles: ["admin", "manager"],
  },
  articles: {
    id: "articles",
    label: "Articles",
    route: "/articles",
    icon: ({ className }) => <FileText className={className} />,
    enabled: true,
    component: ArticlesPage,
    roles: ["admin", "editor"],
  },
  comments: {
    id: "comments",
    label: "Comments",
    route: "/comments",
    icon: ({ className }) => <MessageSquare className={className} />,
    enabled: false,
    component: CommentsPage,
    roles: ["admin"],
  }
} as const;

export const modules = Object.values(moduleConfig);

export const getModuleByRoute = (route: string) => {
  return modules.find((mod) => mod.route === route);
};

export const checkModuleAccess = (module: ModuleT, role: string) => {
  return module.enabled && module.roles.includes(role);
};

// export type ModuleId = keyof typeof moduleConfig;

// export const enabledModules = Object.fromEntries(
//   Object.entries(moduleConfig).map(([key, config]) => [key, config.enabled])
// ) as Record<ModuleId, boolean>;

// /**
//  * Get access configuration for a module
//  */
// export function getModuleAccess(moduleId: ModuleId): ModuleAccess | undefined {
//   return moduleConfig[moduleId]?.access;
// }

