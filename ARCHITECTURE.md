# Architecture Documentation

## Overview

This is a **static import-based modular Next.js dashboard** built in a Turborepo monorepo. The key principle is that all modules are statically imported at build time, and Next.js tree-shakes disabled modules.

## Core Principles

1. **Static Imports Only**: No dynamic imports, no module federation, no runtime loading
2. **Build-Time Configuration**: Modules are enabled/disabled in `packages/config/modules.ts`
3. **Tree-Shaking**: Disabled modules are completely removed from the build
4. **Single Application**: One Next.js app, one dev server, one build output
5. **Type Safety**: Full TypeScript support with proper type definitions

## File Structure

```
/
├── apps/
│   └── dashboard/                    # Next.js application
│       ├── app/
│       │   ├── layout.tsx            # Root layout with Navigation
│       │   ├── page.tsx              # Root route handler
│       │   ├── [[...slug]]/         # Catch-all route for modules
│       │   │   └── page.tsx
│       │   ├── components/
│       │   │   └── Navigation.tsx    # Auto-generated nav
│       │   └── globals.css
│       ├── next.config.js           # Next.js config with transpilePackages
│       ├── tailwind.config.js
│       └── tsconfig.json            # Path aliases: @modules/*, @repo/*
│
├── packages/
│   ├── config/                      # Central configuration
│   │   ├── modules.ts               # enabledModules config
│   │   ├── types.ts                 # ModuleDefinition interface
│   │   └── index.ts                 # Public exports
│   │
│   └── dashboard/                   # Next.js application
│       ├── lib/
│       │   └── module-loader.ts     # Static module imports
│   │
│   ├── modules/                     # Module packages
│   │   ├── home/
│   │   │   ├── index.ts             # ModuleDefinition export
│   │   │   ├── routes.ts
│   │   │   ├── module.config.ts
│   │   │   ├── pages/
│   │   │   │   └── HomePage.tsx
│   │   │   └── components/
│   │   ├── users/                    # Same structure
│   │   ├── products/                 # Same structure
│   │   ├── articles/                 # Same structure
│   │   └── comments/                 # Same structure
│   │
│   └── ui/                          # Shared UI components
│       └── src/
│           └── card.tsx
│
├── turbo.json                       # Turborepo config
└── pnpm-workspace.yaml              # Workspace config
```

## Module Definition Interface

Every module must export a `ModuleDefinition`:

```typescript
export interface ModuleDefinition {
  id: string;                        // Unique identifier
  route: string;                      // URL route (e.g., "/products")
  Page: ComponentType;               // React component to render
  Navigation?: {                     // Optional nav config
    label: string;
    icon?: string;
  };
}
```

## Module Loading Flow

### 1. Static Import (apps/dashboard/lib/module-loader.ts)

```typescript
// All modules are statically imported
import * as HomeModule from "@modules/home";
import * as UsersModule from "@modules/users";
// ... etc

const allModules = {
  home: HomeModule,
  users: UsersModule,
  // ... etc
};
```

### 2. Filtering (module-loader.ts)

```typescript
// Only enabled modules are included
export const activeModules = Object.entries(allModules)
  .filter(([key]) => enabledModules[key])
  .map(([_, mod]) => mod.ModuleDefinition);
```

### 3. Navigation Generation (Navigation.tsx)

```typescript
// Auto-generate nav from active modules
const navItems = activeModules
  .filter((mod) => mod.Navigation)
  .map((mod) => ({
    route: mod.route,
    label: mod.Navigation!.label,
    icon: mod.Navigation!.icon,
  }));
```

### 4. Route Resolution ([[...slug]]/page.tsx)

```typescript
// Catch-all route handler
const route = slug ? `/${slug.join("/")}` : "/";
const module = getModuleByRoute(route);
const ModulePage = module.Page;
return <ModulePage />;
```

## Build Process

1. **TypeScript Compilation**: All packages are type-checked
2. **Static Analysis**: Next.js analyzes imports
3. **Tree-Shaking**: Disabled modules are removed
4. **Bundle Generation**: Only enabled modules are included

## Configuration

### Enabling/Disabling Modules

Edit `packages/config/modules.ts`:

```typescript
export const enabledModules = {
  home: true,        // ✅ Included in build
  users: false,      // ❌ Removed by tree-shaking
  products: true,    // ✅ Included in build
  articles: true,    // ✅ Included in build
  comments: false,   // ❌ Removed by tree-shaking
} as const;
```

### Adding a New Module

1. Create `packages/modules/<name>/` with required files
2. Export `ModuleDefinition` in `index.ts`
3. Add import to `packages/config/module-loader.ts`
4. Add to `enabledModules` in `packages/config/modules.ts`
5. Add dependency in `apps/dashboard/package.json`
6. Add to `transpilePackages` in `apps/dashboard/next.config.js`

## TypeScript Path Aliases

### Dashboard App (apps/dashboard/tsconfig.json)

```json
{
  "compilerOptions": {
    "paths": {
      "@modules/*": ["../../packages/modules/*"],
      "@repo/*": ["../../packages/*"]
    }
  }
}
```

### Config Package (packages/config/tsconfig.json)

```json
{
  "compilerOptions": {
    "paths": {
      "@modules/*": ["../modules/*"]
    }
  }
}
```

### Module Packages (packages/modules/*/tsconfig.json)

```json
{
  "compilerOptions": {
    "paths": {
      "@repo/*": ["../../*"]
    }
  }
}
```

## Dependencies

### Config Package Dependencies

The `@repo/config` package depends on all modules because it imports them:

```json
{
  "dependencies": {
    "@modules/home": "workspace:*",
    "@modules/users": "workspace:*",
    "@modules/products": "workspace:*",
    "@modules/articles": "workspace:*",
    "@modules/comments": "workspace:*"
  }
}
```

### Dashboard App Dependencies

The dashboard app depends on all modules and config:

```json
{
  "dependencies": {
    "@modules/home": "workspace:*",
    "@modules/users": "workspace:*",
    "@modules/products": "workspace:*",
    "@modules/articles": "workspace:*",
    "@modules/comments": "workspace:*",
    "@repo/config": "workspace:*",
    "@repo/ui": "workspace:*"
  }
}
```

## Next.js Configuration

### Transpile Packages

`apps/dashboard/next.config.js` must include all modules in `transpilePackages`:

```javascript
const nextConfig = {
  transpilePackages: [
    "@modules/home",
    "@modules/users",
    "@modules/products",
    "@modules/articles",
    "@modules/comments",
    "@repo/ui",
    "@repo/config",
  ],
};
```

This ensures Next.js properly processes the workspace packages.

## Benefits

✅ **Zero Runtime Overhead**: Disabled modules don't exist in the bundle  
✅ **Fast Builds**: Tree-shaking removes unused code  
✅ **Type Safety**: Full TypeScript coverage  
✅ **Single Server**: One dev server to manage  
✅ **Easy Configuration**: Enable/disable in one file  
✅ **Scalable**: Add modules without touching core code  

## Limitations

- Modules must be known at build time
- No runtime dynamic module loading
- Module routes must be statically defined
- All modules must be imported in module-loader.ts

## Performance

- **Build Size**: Only enabled modules are included
- **Runtime**: No module loading overhead
- **Development**: Fast HMR with single server
- **Production**: Optimized bundle with tree-shaking

This architecture is ideal for applications where modules are known at build time and maximum performance is required.

