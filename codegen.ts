import type { CodegenConfig } from '@graphql-codegen/cli';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const url = process.env.VITE_URL;

const config: CodegenConfig = {
  overwrite: true,
  schema: url,
  documents: 'src/app/data/graphql/**/*.graphql',
  generates: {
    'src/app/data/graphql/generated/index.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
};

export default config;
