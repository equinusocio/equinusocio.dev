/* eslint-disable @typescript-eslint/naming-convention */

import { client } from '@/core/api/client';
import { EntriesResponse } from './getPost';

export async function getPosts() {
  try {
    const posts = await client.getEntries<EntriesResponse>({
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
