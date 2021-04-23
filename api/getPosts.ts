/* eslint-disable @typescript-eslint/naming-convention */

import { client } from './client';

export default async function getPosts() {
  return client.getEntries({
    content_type: 'blogPost',
  }).then(response => response)
    .catch((error) => { throw new Error(error); });
}
