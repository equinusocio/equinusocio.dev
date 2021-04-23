/* eslint-disable @typescript-eslint/naming-convention */

import { client } from './client';

export default async function getPage() {
  return client.getContentTypes().then(response => response)
    .catch((error) => { throw new Error(error); });
}
