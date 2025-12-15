import { ComponentType } from "react";

/**
 * Module definition interface
 * Each module must export a ModuleDefinition object matching this structure
 */
export interface ModuleDefinition {
  id: string;
  route: string;
  Page: ComponentType;
  Navigation?: {
    label: string;
    icon?: string;
  };
}

