# Modular Next.js Dashboard

A modular dashboard application built with Next.js 16 (App Router) inside a Turborepo monorepo. This dashboard uses **static imports only** - no module federation, no separate servers, and no runtime dynamic loading.

## Architecture Overview

### Key Principles

1. **Static Imports Only**: All modules are statically imported at build time
2. **Tree-Shaking**: Next.js automatically removes disabled modules from the build
3. **Single Application**: Only one Next.js dev server runs
4. **Central Configuration**: Module enable/disable is controlled in one place
5. **Type-Safe**: Full TypeScript support with proper type definitions

### Monorepo Structure

```
/apps
  /dashboard          # Next.js application (single app)

/packages
  /modules            # Module packages
    /home
    /users
    /products
    /articles
    /comments
  /ui                 # Shared UI components
  /config             # Central configuration
```

## Module Structure

Each module under `packages/modules/<name>` follows this structure:

```
packages/modules/<name>/
├── index.ts              # Exports ModuleDefinition
├── routes.ts             # Route definitions
├── module.config.ts      # Module configuration
├── pages/                # Module pages
│   └── <Name>Page.tsx
└── components/           # Module-specific components
    └── <Component>.tsx
```

### Module Definition

Each module must export a `ModuleDefinition`:

```typescript
import { ModuleDefinition } from "@repo/config";
import { ProductsPage } from "./pages/ProductsPage";

export const ModuleDefinition: ModuleDefinition = {
  id: "products",
  route: "/products",
  Page: ProductsPage,
  Navigation: {
    label: "Products",
    icon: "Box",
  },
};
```

## Configuration

### Enabling/Disabling Modules

Edit `packages/config/modules.ts`:

```typescript
export const enabledModules = {
  home: true,
  users: false,      // Disabled - won't be in build
  products: true,
  articles: true,
  comments: false,   // Disabled - won't be in build
} as const;
```

**Important**: When a module is disabled:
- It's completely removed from the build (tree-shaking)
- Its route won't be accessible
- It won't appear in navigation
- No runtime overhead

## How It Works

### 1. Static Module Loader

`apps/dashboard/lib/module-loader.ts` statically imports all modules:

```typescript
import * as HomeModule from "@modules/home";
import * as UsersModule from "@modules/users";
// ... etc

const allModules = {
  home: HomeModule,
  users: UsersModule,
  // ... etc
};

export const activeModules = Object.entries(allModules)
  .filter(([key]) => enabledModules[key])
  .map(([_, mod]) => mod.ModuleDefinition);
```

### 2. Auto-Generated Navigation

The `Navigation` component automatically builds the nav from `activeModules`:

```typescript
// apps/dashboard/app/components/Navigation.tsx
const navItems = activeModules
  .filter((mod) => mod.Navigation)
  .map((mod) => ({
    route: mod.route,
    label: mod.Navigation!.label,
    icon: mod.Navigation!.icon,
  }));
```

### 3. Dynamic Route Resolution

Routes are handled by:
- `app/page.tsx` - Handles root route "/"
- `app/[[...slug]]/page.tsx` - Catch-all for all other routes

The catch-all route:
1. Extracts the route from the slug
2. Finds the matching module using `getModuleByRoute()`
3. Renders the module's `Page` component

## Development

### Install Dependencies

```bash
pnpm install
```

### Run Development Server

```bash
# From root
pnpm dev

# Or specifically for dashboard
cd apps/dashboard
pnpm dev
```

The dashboard runs on `http://localhost:3002`

### Build

```bash
pnpm build
```

Disabled modules are automatically excluded from the build.

## Adding a New Module

1. **Create module package**:
   ```bash
   mkdir -p packages/modules/my-module/{pages,components}
   ```

2. **Create module structure**:
   - `index.ts` - Export ModuleDefinition
   - `routes.ts` - Define routes
   - `module.config.ts` - Module config
   - `pages/MyModulePage.tsx` - Main page
   - `components/` - Module components

3. **Add to module-loader.ts**:
   ```typescript
   import * as MyModule from "@modules/my-module";
   
   const allModules = {
     // ... existing
     "my-module": MyModule,
   };
   ```

4. **Enable in modules.ts**:
   ```typescript
   export const enabledModules = {
     // ... existing
     "my-module": true,
   };
   ```

5. **Add dependency in dashboard/package.json**:
   ```json
   {
     "dependencies": {
       "@modules/my-module": "workspace:*"
     }
   }
   ```

6. **Update next.config.js**:
   ```javascript
   transpilePackages: [
     // ... existing
     "@modules/my-module",
   ],
   ```

## TypeScript Path Aliases

Path aliases are configured in `apps/dashboard/tsconfig.json`:

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

## Benefits

✅ **No Runtime Overhead**: Disabled modules are completely removed  
✅ **Type Safety**: Full TypeScript support  
✅ **Single Server**: Only one dev server to manage  
✅ **Fast Builds**: Tree-shaking removes unused code  
✅ **Easy Configuration**: Enable/disable modules in one place  
✅ **Scalable**: Add new modules without touching core app code  

## Limitations

- All modules must be known at build time
- Cannot dynamically load modules at runtime
- Module routes must be defined statically

This architecture is perfect for applications where modules are known at build time and you want maximum performance with zero runtime overhead.

