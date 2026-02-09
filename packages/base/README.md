# @abelspithost/tsconfig

[![npm version](https://img.shields.io/npm/v/@abelspithost/tsconfig)](https://www.npmjs.com/package/@abelspithost/tsconfig)

Strict base TypeScript configuration that all other presets extend.

## Installation

```bash
npm install -D @abelspithost/tsconfig typescript
```

Requires `typescript` >= 5.0.0 as a peer dependency.

## Usage

```jsonc
// tsconfig.json
{
  "extends": "@abelspithost/tsconfig"
}
```

## What's included

### Type Checking

- `strict` — enables all strict type-checking options

### Modules

- `esModuleInterop` — enables CommonJS/ESM interop
- `isolatedModules` — ensures each file can be independently transpiled
- `resolveJsonModule` — allows importing `.json` files
- `verbatimModuleSyntax` — enforces explicit `type` modifiers on type-only imports/exports

### Emit

- `declaration` — generates `.d.ts` declaration files
- `declarationMap` — generates declaration source maps for go-to-definition support
- `sourceMap` — generates `.js.map` source maps
- `outDir` — set to `${configDir}/dist`

### Interop Constraints

- `forceConsistentCasingInFileNames` — disallows inconsistently-cased references to the same file
- `skipLibCheck` — skips type checking of declaration files

### Paths

- `baseUrl` — set to `${configDir}`
- `@/*` — aliased to `./src/*`

### File Scope

- **include**: `${configDir}/**/*.ts`
- **exclude**: `${configDir}/dist`, `${configDir}/node_modules`
