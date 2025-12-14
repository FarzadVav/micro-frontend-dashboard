import { ModuleDefinition } from "@repo/config";
import { CommentsPage } from "./pages/CommentsPage";

export const ModuleDefinition: ModuleDefinition = {
  id: "comments",
  route: "/comments",
  Page: CommentsPage,
  Navigation: {
    label: "Comments",
    icon: "MessageSquare",
  },
};

