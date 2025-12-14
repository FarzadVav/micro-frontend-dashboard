import { getModuleByRoute } from "../../lib/module-loader";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
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
  
  // Find module by route
  const module = getModuleByRoute(route);
  
  if (!module) {
    notFound();
  }
  
  // Render the module's page component
  const ModulePage = module.Page;
  return <ModulePage />;
}

