/* eslint-disable @typescript-eslint/naming-convention */
import RSS from 'rss';
import { getPosts } from '@/core/api/selectors';

export default async function handler(_req: any, res: any) {
  const items: Record<string, any>[] = await getPosts();

  const feed = new RSS({
    title: 'Mattia Astorino - UX Engineer',
    description: 'I\'m Mattia Astorino, UX Engineer in Milan and member of Open Source Design.',
    feed_url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/rss`,
    site_url: process.env.NEXT_PUBLIC_DOMAIN,
    managingEditor: 'Mattia Astorino',
    webMaster: 'Mattia Astorino',
    copyright: `${new Date().getFullYear()} Mattia Astorino`,
    language: 'en',
    image_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cover.jpg`,
    pubDate: new Date().toLocaleString(),
    ttl: 60,
  });

  items.forEach(({
    title, description, publishDate, slug,
  }) => {
    feed.item({
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${slug}`,
      date: publishDate,
    });
  });

  const xml = feed.xml();
  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();
}
