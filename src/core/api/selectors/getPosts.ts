/* eslint-disable @typescript-eslint/naming-convention */

import { client } from '@/core/api/client';

export async function getPosts() {
  try {
    const posts = await client.getEntries<Record<any, string>>({
      content_type: 'blogPost',
    });

    return posts.items.map(post => ({
      id: post.sys.id,
      ...post.fields,
    }));
  } catch {
    return [];
  }
}
