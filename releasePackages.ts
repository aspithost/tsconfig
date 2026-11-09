import { releasePackages } from '@abelspithost/conventional-commits-changelog';

await releasePackages({
  changelogWriterOptions: {
    remoteRepositoryInformation: {
      host: 'https://github.com',
      owner: 'aspithost',
      repository: 'tsconfig',
    },
  },
});
