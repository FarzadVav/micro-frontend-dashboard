import { NavigationWrapper } from "./NavigationWrapper";
import { getActiveModulesForRole } from "../../lib/module-loader";
import { getAuthRole, hasAuthCookie } from "../../lib/auth";

export async function NavigationShell() {
  // Check if user is authenticated
  const isAuthenticated = await hasAuthCookie();

  // If not authenticated, don't show navigation at all
  if (!isAuthenticated) {
    return null;
  }

  const role = await getAuthRole();
  const modules = getActiveModulesForRole(role).filter(
    (mod) => mod.Navigation && mod.id !== "login",
  );

  // Pass modules to client component that will check pathname
  return <NavigationWrapper modules={modules} />;
}

