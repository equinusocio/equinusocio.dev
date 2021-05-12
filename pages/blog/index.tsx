import { PageLayout } from '@/components/Layouts/PageLayout';
import { getPosts } from '@/core/api/selectors';
import { PostType } from '@/core/api/selectors/getPost';
import Link from 'next/link';
import React from 'react';

const Blog = ({ posts }: Record<string, PostType[]>) => (
  <PageLayout>
    {posts.map((item: PostType) => (
      <Link key={item.id} href={`/blog/${encodeURIComponent(item.slug)}`}>
        <a>
          {item.title}
          {' '}
          —
        </a>
      </Link>
    ))}
  </PageLayout>
);

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
    revalidate: 120,
  };
};

export default Blog;
