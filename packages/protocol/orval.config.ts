import { defineConfig } from 'orval';

const client = 'fetch';
const override = {
  mutator: {
    path: './src/custom-fetch.ts',
    name: 'customFetch'
  }
};

export default defineConfig({
  openapiIvy: {
    input: {
      target: 'target/smart-neo/openapi.json',
      filters: { tags: ['smart-neo'] }
    },
    output: {
      target: './src/ivy-client.ts',
      client,
      prettier: true,
      override
    }
  }
});
