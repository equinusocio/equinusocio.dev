export type PostType = {
  id: string;
  tags: string[];
  title: string;
  slug: string;
  heroImage: Record<string, any>;
  description: string;
  body: string;
}

export type EntriesResponse = {
  items: PostType[]
}
