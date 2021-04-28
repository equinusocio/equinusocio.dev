/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Meta } from '@/components/Meta';
import { Heading } from '@/components/Heading';
import { getPosts } from '@/core/api/selectors';
import Link from 'next/link';
import { PostType } from '@/core/api/selectors/getPost';

const Home = ({ posts }: Record<string, Record<string, any>[]>) => (
  <div>
    <Meta title="Some awesome title" />
    <div>Blog</div>

    <Heading as="h3">Ciao</Heading>

    {posts.map((item: Record<string, any>) => (
      <Link key={item.id} href={`/blog/${encodeURIComponent(item.slug)}`}>
        <a>
          {item.title}
          {' '}
          —
        </a>
      </Link>
    ))}
  </div>
);

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
  };
};

export default Home;

