import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { checkModuleAccess, getModuleByRoute } from "./modules";

// import { getModuleByRoute, hasAccessToModule } from "./module-loader";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}
export async function generateModuleMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = slug ? `/${slug.join("/")}` : "/";
  const module = getModuleByRoute(route);

  if (!module) {
    return {
      title: "Not Found | Modular Dashboard",
    };
  }

  const navLabel = module.label;

  return {
    title: `${navLabel} | Modular Dashboard`,
    description: `${navLabel} module page`,
  };
}

export async function handleModuleRoute({ params }: PageProps) {
  const { slug } = await params;

  const route = slug ? `/${slug.join("/")}` : "/";

  const hasAuth = true;

  if (!hasAuth) {
    redirect("/login");
  }
  
  const module = getModuleByRoute(route);
  if (!module) {
    notFound();
  }
  
  const role = "admin";
  const moduleIsAvailable = checkModuleAccess(module, role);
  if (!moduleIsAvailable) {
    notFound();
  }

  const ModulePage = module.component;

  return <ModulePage />;
}