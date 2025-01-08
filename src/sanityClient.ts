// sanityClient.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'tr3yh6z2', // Replace with your actual Sanity project ID
  dataset: 'production',      // Replace with your dataset name (e.g., "production")
  useCdn: true,               // Set to `false` if you need fresh data from the database
  apiVersion: '2023-12-01',
});
