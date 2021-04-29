/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Meta } from '@/components/Meta';
import { getPosts } from '@/core/api/selectors';
import Link from 'next/link';
import { PostType } from '@/core/api/selectors/getPost';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

const Home = ({ posts }: Record<string, Record<string, any>[]>) => (
  <div>
    <Meta title="Some awesome title" />
    <div>Blog</div>

    <ThemeSwitcher />

    {posts.map((item: PostType) => (
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

