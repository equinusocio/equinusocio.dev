/* eslint-disable @typescript-eslint/naming-convention */

import { client } from '@/api/client';

export type PostType = {
  id: string;
  tags: string[];
  title: string;
  slug: string;
  heroImage: Record<string, any>;
  description: string;
  body: string;
}

export async function getPost(slug: string) {
  try {
    const post = await client.getEntries<Record<any, string>>({
      content_type: 'blogPost',
      'fields.slug': slug,
    });

    return {
      id: post.items[0].sys.id,
      ...post.items[0].fields,
    } as PostType;
  } catch {
    return [];
  }
}
