import { createConfig } from '@abelspithost/commitlint';

export default createConfig({
  scopes: ['root', 'tsconfig', 'tsconfig-node', 'tsconfig-web'],
});
