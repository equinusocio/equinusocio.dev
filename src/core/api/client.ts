import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_CDA_TOKEN ?? '',
});

export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_CPA_TOKEN ?? '',
  host: 'preview.equinusocio.dev',
});
