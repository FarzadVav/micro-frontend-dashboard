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

export enum ModuleRoles {
  ADMIN = "admin",
  MANAGER = "manager",
  USER = "user",
}

type ModuleT = {
  id: string;
  label: string;
  route: string;
  icon: ComponentType<{ className?: string }>;
  enabled: boolean;
  component: ComponentType;
  roles: ModuleRoles[];
}

export const moduleConfig: Record<string, ModuleT> = {
  home: {
    id: "home",
    label: "name",
    route: "/",
    icon: ({ className }) => <Home className={className} />,
    enabled: true,
    component: HomePage,
    roles: [ModuleRoles.ADMIN],
  },
  users: {
    id: "users",
    label: "Users",
    route: "/users",
    icon: ({ className }) => <Users className={className} />,
    enabled: false,
    component: UsersPage,
    roles: [ModuleRoles.ADMIN],
  },
  products: {
    id: "products",
    label: "Products",
    route: "/products",
    icon: ({ className }) => <Box className={className} />,
    enabled: true,
    component: ProductsPage,
    roles: [ModuleRoles.ADMIN, ModuleRoles.MANAGER],
  },
  articles: {
    id: "articles",
    label: "Articles",
    route: "/articles",
    icon: ({ className }) => <FileText className={className} />,
    enabled: true,
    component: ArticlesPage,
    roles: [ModuleRoles.ADMIN, ModuleRoles.MANAGER],
  },
  comments: {
    id: "comments",
    label: "Comments",
    route: "/comments",
    icon: ({ className }) => <MessageSquare className={className} />,
    enabled: false,
    component: CommentsPage,
    roles: [ModuleRoles.ADMIN],
  }
} as const;

export const modules = Object.values(moduleConfig);

export const getAvailableModules = (role: ModuleRoles) => {
  return modules.filter((mod) => mod.enabled && mod.roles.includes(role));
};

export const getModuleByRoute = (route: string) => {
  return modules.find((mod) => mod.route === route);
};

export const checkModuleAccess = (module: ModuleT, role: ModuleRoles) => {
  return module.enabled && module.roles.includes(role);
};
