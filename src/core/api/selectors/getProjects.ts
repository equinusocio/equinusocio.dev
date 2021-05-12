/* eslint-disable @typescript-eslint/naming-convention */

import { client } from '@/core/api/client';

export type ProjectType = {
  id: string;
  label: string;
  title: string;
  background: string[];
  body: string;
  url: string;
}

export type ProjectsResponse = {
  items: ProjectType[];
}

export async function getProjects() {
  try {
    const projects = await client.getEntries<any>({
      content_type: 'project',
    });

    // console.log(projects.items[0].fields.text.content[0].content[0].value);

    return projects.items.map(prj => ({
      id: prj.sys.id,
      body: prj.fields.text.content[0].content[0].value,
      ...prj.fields,
    }));
  } catch {
    return [];
  }
}
