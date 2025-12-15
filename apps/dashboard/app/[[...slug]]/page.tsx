import { getModuleByRoute, hasAccessToModule } from "../../lib/module-loader";
import { getAuthRole, hasAuthCookie } from "../../lib/auth";
import { notFound, redirect } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const route = slug ? `/${slug.join("/")}` : "/";
  const module = getModuleByRoute(route);

  if (!module) {
    return {
      title: "Not Found | Modular Dashboard",
    };
  }

  const navLabel = module.Navigation?.label ?? module.id;
  return {
    title: `${navLabel} | Modular Dashboard`,
    description: `${navLabel} module page`,
  };
}

/**
 * Catch-all route handler for all module routes including root "/"
 * This dynamically renders the appropriate module page based on the route
 */
export default async function ModulePage({ params }: PageProps) {
  const { slug } = await params;

  // Build route from slug array
  // slug will be undefined for root route "/"
  const route = slug ? `/${slug.join("/")}` : "/";

  // Authentication guard: redirect to login if no auth cookie and not on login
  const isLoginRoute = route === "/login";
  const hasAuth = await hasAuthCookie();
  
  if (!isLoginRoute && !hasAuth) {
    redirect("/login");
  }

  const role = await getAuthRole();

  // Find module by route
  const module = getModuleByRoute(route);

  if (!module) {
    notFound();
  }

  // Access control by role
  if (!hasAccessToModule(route, role)) {
    notFound();
  }

  // Render the module's page component
  const ModulePage = module.Page;
  return <ModulePage />;
}

