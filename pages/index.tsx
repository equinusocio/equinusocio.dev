/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Meta } from '@/components/Meta';
import getPosts from '@/api/getPosts';
import Link from 'next/link';

const Home = ({ posts }: any) => (
  <div>
    <Meta title="Some awesome title" />
    <div>Blog</div>

    {posts.map((item: any) => (
      <Link href={`/blog/${item.fields.slug}`}>
        <a>
          {item.fields.title}
          {' '}
          —
        </a>
      </Link>
    ))}
  </div>
);

export const getServerSideProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
  };
};

export default Home;

