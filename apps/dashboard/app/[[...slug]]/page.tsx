import { generateModuleMetadata, handleModuleRoute } from "@repo/config";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  return generateModuleMetadata({ params });
}

/**
 * Catch-all route handler for all module routes including root "/"
 * All logic is handled in @repo/config
 */
export default async function ModulePage({ params }: PageProps) {
  return handleModuleRoute({ params });
}

