# @abelspithost/tsconfig-web

[![npm version](https://img.shields.io/npm/v/@abelspithost/tsconfig-web)](https://www.npmjs.com/package/@abelspithost/tsconfig-web)

TypeScript configuration preset for web projects. Extends [`@abelspithost/tsconfig`](../base).

## Installation

```bash
npm install -D @abelspithost/tsconfig-web typescript
```

Peer dependencies:

- `typescript` >= 6.0.0

## Usage

```jsonc
// tsconfig.json
{
  "extends": "@abelspithost/tsconfig-web"
}
```

## What's included

Inherits all settings from the [base config](../base) and adds:

### Language and Environment

- `target` — set to `ESNext`, targeting modern browsers; downgrade if supporting older ones
- `lib` — set to `["ESNext", "DOM"]`, includes browser globals and DOM types
- `jsx` — set to `react-jsx`, enables JSX transform without requiring a React import; change to `preserve` for Vue/Svelte or if your bundler handles JSX

### Modules

- `module` — set to `ESNext`, emits native ES modules for bundler consumption
- `moduleResolution` — set to `bundler`, resolves modules the way modern bundlers (Vite, webpack, etc.) do, supporting `exports` fields and extensionless imports

### Emit

- `noEmit` — set to `true`, type-checking only; your bundler handles the actual output

### Include

Extends the base `include` with additional file types:

- `**/*.tsx` — React/JSX components
- `src/**/*.mts` — explicit ES module TypeScript files
- `src/**/*.vue` — Vue single-file components
- `src/**/*.svelte` — Svelte components