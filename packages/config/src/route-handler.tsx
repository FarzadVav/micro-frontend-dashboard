import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { checkModuleAccess, getModuleByRoute, ModuleRoles } from "./modules";

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

  const module = getModuleByRoute(route);
  if (!module) {
    notFound();
  }

  // TODO: get user role from API
  const role = ModuleRoles.ADMIN;
  const moduleIsAvailable = checkModuleAccess(module, role);
  if (!moduleIsAvailable) {
    notFound();
  }

  const ModulePage = module.component;

  return <ModulePage />;
}