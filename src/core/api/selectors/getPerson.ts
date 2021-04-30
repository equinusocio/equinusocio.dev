/* eslint-disable @typescript-eslint/naming-convention */

import { client } from '@/core/api/client';

export type PersonType = {
  id: string;
  name: string;
  shortBio: string;
  image: {
    id: string;
  };
}

export type PersonResponse = {
  items: PersonType[];
}

export async function getPerson(id: string) {
  try {
    const post = await client.getEntries<PersonResponse>({
      content_type: 'person',
      'sys.id': id,
    });

    return {
      id: post.items[0].sys.id,
      ...post.items[0].fields,
    };
  } catch {
    return [];
  }
}
