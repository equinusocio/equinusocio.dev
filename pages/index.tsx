import React from 'react';
import { Meta } from '@/components/Meta';
import getPosts from '@/api/getPosts';

const Home = ({ stories }: any) => (
  <div>
    <Meta title="Some awesome title" />
    <div>Something here</div>
    {console.log(stories)}
  </div>
);

export default Home;

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { stories: posts.items },
  };
};
