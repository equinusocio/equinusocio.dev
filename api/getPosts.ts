/* eslint-disable @typescript-eslint/naming-convention */

import { client } from './client';

export default async function getPosts() {
  return client.getEntries({
    content_type: 'blogPost',
  }).then((response) => {
    const posts = response.items.map(post => ({
      id: post.sys.id,
      fields: post.fields,
    }));
    return posts;
  })
    .catch((error) => { throw new Error(error); });
}
