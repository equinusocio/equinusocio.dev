/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Meta } from '@/components/Meta';
import { Text } from '@/components/Text';
import { getPosts } from '@/api/selectors';
import Link from 'next/link';

const Home = ({ posts }: any) => (
  <div>
    <Meta title="Some awesome title" />
    <div>Blog</div>

    <Text>Ciao</Text>

    {posts.map((item: any) => (
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

