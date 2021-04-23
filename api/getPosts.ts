/* eslint-disable @typescript-eslint/naming-convention */

import { client } from './client';

export default async function getPosts() {
  try {
    const posts = await client.getEntries({
      content_type: 'blogPost',
    });
    return posts.items.map((post: Record<string, any>) => ({
      id: post.sys.id,
      ...post.fields,
    }));
  } catch (error) {
    return console.error(error);
  }
}
