/* eslint-disable @typescript-eslint/naming-convention */

import { client } from '@/api/client';

export async function getPost(slug: string) {
  try {
    const post = await client.getEntries<Record<any, string>>({
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
