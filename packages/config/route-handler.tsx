import { getModuleByRoute, hasAccessToModule } from "./module-loader";
import { getAuthRole, hasAuthCookie } from "./auth";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

/**
 * Generate metadata for a module route
 */
export async function generateModuleMetadata({ params }: PageProps): Promise<Metadata> {
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
 * Handle module route with authentication and access control
 * Returns the module's Page component or redirects/notFound
 */
export async function handleModuleRoute({ params }: PageProps) {
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

