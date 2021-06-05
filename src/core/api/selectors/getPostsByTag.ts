/* eslint-disable @typescript-eslint/naming-convention */

import { client } from '@/core/api/client';
import { EntriesResponse } from './getPost';

export async function getPostsByTag(tag: string) {
  try {
    const posts = await client.getEntries<Record<'any', EntriesResponse>>({
      content_type: 'blogPost',
      'fields.tags[in]': tag,
    });

    return posts.items.map(post => ({
      id: post.sys.id,
      ...post.fields,
    }));
  } catch {
    return [];
  }
}
