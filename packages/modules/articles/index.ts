import { ModuleDefinition } from "@repo/config";
import { ArticlesPage } from "./pages/ArticlesPage";

export const ModuleDefinition: ModuleDefinition = {
  id: "articles",
  route: "/articles",
  Page: ArticlesPage,
  Navigation: {
    label: "Articles",
    icon: "FileText",
  },
};

