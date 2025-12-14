# Modular Next.js Dashboard - Turborepo Monorepo

A production-ready modular dashboard application built with Next.js 16 and Turborepo. This monorepo demonstrates a static import-based module system where modules are conditionally included at build time.

## 🏗️ Architecture

This monorepo implements a **static import module system** for Next.js:

- ✅ **Static Imports Only** - No module federation, no dynamic loading
- ✅ **Tree-Shaking** - Disabled modules are completely removed from builds
- ✅ **Single Application** - One Next.js dev server, one build output
- ✅ **Central Configuration** - Enable/disable modules in one file
- ✅ **Type-Safe** - Full TypeScript support

## 📁 Structure

```
/
├── apps/
│   └── dashboard/          # Next.js dashboard application
│
├── packages/
│   ├── modules/            # Module packages
│   │   ├── home/
│   │   ├── users/
│   │   ├── products/
│   │   ├── articles/
│   │   └── comments/
│   ├── ui/                 # Shared UI components
│   └── config/             # Central configuration
│
├── turbo.json              # Turborepo configuration
└── pnpm-workspace.yaml     # PNPM workspace config
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18
- pnpm 9.0.0

### Installation

```bash
pnpm install
```

### Development

```bash
# Run all apps in development mode
pnpm dev

# Or run dashboard specifically
cd apps/dashboard
pnpm dev
```

The dashboard will be available at `http://localhost:3002`

### Build

```bash
pnpm build
```

## 📦 Module System

### How Modules Work

1. **Module Definition**: Each module exports a `ModuleDefinition` with:
   - `id`: Unique module identifier
   - `route`: URL route (e.g., "/products")
   - `Page`: React component to render
   - `Navigation`: Optional nav item config

2. **Static Loading**: All modules are statically imported in `packages/config/module-loader.ts`

3. **Filtering**: Only enabled modules (from `packages/config/modules.ts`) are included

4. **Tree-Shaking**: Next.js automatically removes disabled modules from the build

### Enabling/Disabling Modules

Edit `packages/config/modules.ts`:

```typescript
export const enabledModules = {
  home: true,
  users: false,      // Disabled - removed from build
  products: true,
  articles: true,
  comments: false,   // Disabled - removed from build
} as const;
```

### Module Structure

Each module follows this structure:

```
packages/modules/<name>/
├── index.ts              # ModuleDefinition export
├── routes.ts             # Route constants
├── module.config.ts      # Module config
├── pages/                # Page components
└── components/           # Module components
```

## 🎯 Key Features

### Auto-Generated Navigation

Navigation is automatically built from enabled modules:

```typescript
// Only modules with Navigation config appear in nav
const navItems = activeModules
  .filter((mod) => mod.Navigation)
  .map((mod) => ({
    route: mod.route,
    label: mod.Navigation!.label,
    icon: mod.Navigation!.icon,
  }));
```

### Dynamic Route Resolution

Routes are handled by:
- `app/page.tsx` - Root route "/"
- `app/[[...slug]]/page.tsx` - Catch-all for module routes

The catch-all route:
1. Extracts route from URL
2. Finds matching module
3. Renders module's Page component

## 📝 Adding a New Module

1. Create module package in `packages/modules/<name>/`
2. Export `ModuleDefinition` in `index.ts`
3. Add import to `packages/config/module-loader.ts`
4. Add to `enabledModules` in `packages/config/modules.ts`
5. Add dependency in `apps/dashboard/package.json`
6. Add to `transpilePackages` in `apps/dashboard/next.config.js`

See `apps/dashboard/README.md` for detailed instructions.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Monorepo**: Turborepo
- **Package Manager**: pnpm
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components in `@repo/ui`

## 📚 Documentation

- [Dashboard README](./apps/dashboard/README.md) - Detailed dashboard documentation
- [Module Development Guide](./apps/dashboard/README.md#adding-a-new-module) - How to create new modules

## 🎨 Current Modules

- ✅ **Home** - Dashboard landing page (enabled)
- ❌ **Users** - User management (disabled)
- ✅ **Products** - Product catalog (enabled)
- ✅ **Articles** - Article management (enabled)
- ❌ **Comments** - Comment moderation (disabled)

## ⚡ Performance

- **Zero Runtime Overhead**: Disabled modules are completely removed
- **Fast Builds**: Tree-shaking eliminates unused code
- **Single Bundle**: One optimized Next.js application
- **Type Safety**: Full TypeScript coverage

## 🔒 Limitations

- Modules must be known at build time
- No runtime dynamic module loading
- Module routes must be statically defined

This architecture is ideal for applications where modules are known at build time and maximum performance is required.

## 📄 License

Private - Internal use only
