/* eslint-disable @typescript-eslint/naming-convention */

import { client } from './client';

export default async function getPosts() {
  try {
    const posts = await client.getEntries<Record<any, string>>({
      content_type: 'blogPost',
    });

    return posts.items.map(post => post);
  } catch {
    return [];
  }
}
