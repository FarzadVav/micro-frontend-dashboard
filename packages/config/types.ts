import { ComponentType, ReactNode } from "react";

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
 * Note: access configuration is now in packages/config/modules.tsx
 * Icons are stored as JSX (ReactNode) to be serializable between server and client
 */
export interface ModuleDefinition {
  id: string;
  route: string;
  Page: ComponentType;
  Navigation?: {
    label: string;
    icon?: ReactNode;
  };
}

