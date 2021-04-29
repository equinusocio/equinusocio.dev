/* eslint-disable @typescript-eslint/naming-convention */
import { Feed } from 'feed';
import { getPosts } from '@/core/api/selectors';
import marked from 'marked';
import sanitizeHtml from 'sanitize-html';

export default async function handler(_req: any, res: any) {
  const items: Record<string, any>[] = await getPosts();

  const feed = new Feed({
    title: 'Mattia Astorino - UX Engineer',
    description: 'I\'m Mattia Astorino, UX Engineer in Milan and member of Open Source Design.',
    id: process.env.NEXT_PUBLIC_DOMAIN,
    link: process.env.NEXT_PUBLIC_DOMAIN,
    generator: 'equinusocio.dev',
    author: {
      name: 'Mattia Astorino',
      link: 'https://twitter.com/equinusocio',
    },
    copyright: `${new Date().getFullYear()} Mattia Astorino`,
    language: 'en',
    image: `${process.env.NEXT_PUBLIC_DOMAIN}/cover.jpg`,
    updated: new Date(),
    ttl: 60,
    feedLinks: {
      atom: `${process.env.NEXT_PUBLIC_DOMAIN}/api/feed`,
    },
  });

  items.forEach(({
    id, title, description, publishDate, slug, body,
  }) => {
    feed.addItem({
      id,
      author: [
        {
          name: 'Mattia Astorino',
          link: 'https://twitter.com/equinusocio',
        },
      ],
      title,
      description,
      link: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${slug}`,
      date: new Date(publishDate),
      content: sanitizeHtml(marked(body)),
      image: `${process.env.NEXT_PUBLIC_DOMAIN}/cover.jpg`,
    });
  });

  const rss = feed.atom1();
  res.setHeader('Content-Type', 'text/xml');
  res.write(rss);
  res.end();
}