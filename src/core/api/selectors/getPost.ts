/* eslint-disable @typescript-eslint/naming-convention */

import { client } from '@/core/api/client';
import { EntriesResponse } from 'types/api';

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
