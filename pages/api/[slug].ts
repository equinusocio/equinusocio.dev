/* eslint-disable @typescript-eslint/naming-convention */
import { client } from '@/core/api/client';
import { EntriesResponse } from './posts';

async function getPost(slug: string) {
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

export default async function handler(_req: any, res: any) {
  const { slug } = _req.query;
  const post = await getPost(slug);

  res.status(200).json(post);
  res.end();
}
