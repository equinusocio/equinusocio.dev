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

async function getPosts() {
  try {
    const posts = await client.getEntries<Record<'any', EntriesResponse>>({
      content_type: 'blogPost',
      order: '-sys.createdAt',
    });

    return posts.items.map(post => ({
      id: post.sys.id,
      ...post.fields,
    }));
  } catch {
    return [];
  }
}

export default async function handler(_req: any, res: any) {
  const items: Record<string, any>[] = await getPosts();
  res.status(200).json(items);
  res.end();
}
