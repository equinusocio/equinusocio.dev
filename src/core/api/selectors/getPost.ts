/* eslint-disable @typescript-eslint/naming-convention */

import { client } from '@/core/api/client';

export type PostType = {
  id: string;
  tags: string[];
  title: string;
  slug: string;
  heroImage?: Record<string, any>;
  description: string;
  publishDate: string;
  externalUrl?: string;
  body: string;
}

export type EntriesResponse = {
  items: PostType[];
}

export async function getPost(slug: string) {
  try {
    const post = await client.getEntries<EntriesResponse>({
      content_type: 'blogPost',
      'fields.slug': slug,
    });

    return {
      id: post.items[0].sys.id,
      ...post.items[0].fields,
    };
  } catch {
    return [];
  }
}
