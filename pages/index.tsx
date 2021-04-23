import React from 'react';
import { Meta } from '@/components/Meta';
import getPosts from '@/api/getPosts';

const Home = ({ posts }: {posts: any[]}) => (
  <div>
    <Meta title="Some awesome title" />
    <div>Something here</div>

    {posts.map((item: Record<string, any>) => (
      <div>
        <span>{item.id}</span>
        —
        <span>{item.fields.title}</span>
      </div>
    ))}
  </div>
);

export default Home;

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
  };
};
