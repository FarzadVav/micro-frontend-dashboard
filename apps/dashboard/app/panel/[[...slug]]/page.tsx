import { generateModuleMetadata, handleModuleRoute } from "@repo/config";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  return generateModuleMetadata({ params });
}

export default async function ModulePage({ params }: PageProps) {
  return handleModuleRoute({ params });
}

