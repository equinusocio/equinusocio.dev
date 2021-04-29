/* eslint-disable @typescript-eslint/naming-convention */
import RSS from 'rss';
import { getPosts } from '@/core/api/selectors';
import marked from 'marked';
import sanitizeHtml from 'sanitize-html';

export default async function handler(_req: any, res: any) {
  const items: Record<string, any>[] = await getPosts();

  const feed = new RSS({
    title: 'Mattia Astorino - UX Engineer',
    description: 'I\'m Mattia Astorino, UX Engineer in Milan and member of Open Source Design.',
    site_url: process.env.NEXT_PUBLIC_DOMAIN,
    feed_url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/rss`,
    managingEditor: 'Mattia Astorino',
    webMaster: 'Mattia Astorino',
    copyright: `${new Date().getFullYear()} Mattia Astorino`,
    language: 'en',
    image_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cover.jpg`,
    pubDate: new Date().toLocaleString(),
    ttl: 60,
  });

  items.forEach(({
    id, title, description, publishDate, slug, body,
  }) => {
    feed.item({
      guid: id,
      author: 'Mattia Astorino',
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${slug}`,
      date: publishDate,
      custom_elements: [
        {
          content: [
            `${sanitizeHtml(marked(body))}`,
            {
              _attr: {
                type: 'html',
              },
            },
          ],
        },
      ],
    });
  });

  const rss = feed.xml({ indent: true });
  res.setHeader('Content-Type', 'text/xml');
  res.write(rss);
  res.end();
}
