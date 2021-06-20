/* eslint-disable @typescript-eslint/naming-convention */
import { client } from '@/core/api/client';
import { EntriesResponse } from '../posts';

async function getPostsByTag(tag: string) {
  try {
    const posts = await client.getEntries<EntriesResponse>({
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

export default async function handler(_req: any, res: any) {
  const { tag } = _req.query;
  const post = await getPostsByTag(tag);

  res.status(200).json(post);
  res.end();
}

// /* eslint-disable @typescript-eslint/naming-convention */

// import { client } from '@/core/api/client';
// import { EntriesResponse } from './posts';

// async function getPostsByTag(tag: string) {
//   try {
//     const posts = await client.getEntries<Record<'any', EntriesResponse>>({
//       content_type: 'blogPost',
//       'fields.tags[in]': tag,
//     });

//     return posts.items.map(post => ({
//       id: post.sys.id,
//       ...post.fields,
//     }));
//   } catch {
//     return [];
//   }
// }

// export default async function handler(_req: any, res: any) {
//   const { tag } = _req.query;
//   const posts = await getPostsByTag(tag);

//   res.status(200).json(posts);
//   res.end();
// }
