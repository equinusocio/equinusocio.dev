import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CDA_TOKEN ?? '',
});

export const previewClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CPA_TOKEN ?? '',
  host: 'preview.equinusocio.dev',
});
