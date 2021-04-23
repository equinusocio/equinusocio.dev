/* eslint-disable @typescript-eslint/naming-convention */

import { client } from './client';

export default async function getPost(slug: string) {
  try {
    const post = await client.getEntries<Record<any, string>>({
      content_type: 'blogPost',
      'fields.slug': slug,
    });

    return post.items[0];
  } catch {
    return [];
  }
}
