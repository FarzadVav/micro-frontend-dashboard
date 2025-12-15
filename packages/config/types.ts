import { ComponentType } from "react";

/**
 * Module access configuration
 */
export interface ModuleAccess {
  public?: boolean;
  roles?: string[];
}

/**
 * Module definition interface
 * Each module must export a ModuleDefinition object matching this structure
 * Note: access configuration is now in packages/config/modules.ts
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

