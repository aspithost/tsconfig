# @abelspithost/tsconfig-node

TypeScript configuration preset for Node.js projects. Extends [`@abelspithost/tsconfig`](../base).

## Installation

```bash
npm install -D @abelspithost/tsconfig-node @types/node typescript
```

Peer dependencies:

- `typescript` >= 5.0.0
- `@types/node` >= 20.0.0

## Usage

```jsonc
// tsconfig.json
{
  "extends": "@abelspithost/tsconfig-node"
}
```

## What's included

Inherits all settings from the [base config](../base) and adds:

### Language and Environment

- `target` — set to `esnext`, compiles to the latest ECMAScript standard
- `lib` — set to `["ESNext"]`

### Modules

- `module` — set to `nodenext`, enables Node.js native ESM module resolution
- `moduleResolution` — set to `nodenext`, resolves modules using Node.js ESM rules (including `exports` in `package.json`)

### Types

- `types` — set to `["node"]`, includes Node.js type definitions globally
