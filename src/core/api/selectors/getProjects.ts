/* eslint-disable @typescript-eslint/naming-convention */

import { client } from '@/core/api/client';

export type ProjectType = {
  id: string;
  label: string;
  title: string;
  background: string[];
  body: Record<string, any>;
}

export type ProjectsResponse = {
  items: ProjectType[];
}

export async function getProjects() {
  try {
    const projects = await client.getEntries<Record<any, string>>({
      content_type: 'project',
    });

    return projects.items.map(prj => ({
      id: prj.sys.id,
      ...prj.fields,
    }));
  } catch {
    return [];
  }
}
