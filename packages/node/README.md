# @abelspithost/tsconfig-node

[![npm version](https://img.shields.io/npm/v/@abelspithost/tsconfig-node)](https://www.npmjs.com/package/@abelspithost/tsconfig-node)

TypeScript configuration preset for Node.js projects. Extends [`@abelspithost/tsconfig`](../base).

## Installation

```bash
npm install -D @abelspithost/tsconfig-node @types/node typescript
```

Peer dependencies:

- `typescript` >= 6.0.0
- `@types/node` >= 24.0.0

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

- `target` — set to `ESNext`, targeting modern Node.js (20+); downgrade if supporting older runtimes
- `lib` — set to `["ESNext"]`, excludes DOM types

### Modules

- `module` — set to `NodeNext`, enables Node.js native ESM resolution
- `moduleResolution` — set to `NodeNext`, resolves modules using Node.js ESM rules including `exports` fields in `package.json`

### Types

- `types` — set to `["node"]`, includes Node.js global type definitions and excludes unrelated `@types/*` packages from auto-inclusion
