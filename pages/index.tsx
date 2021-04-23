import React from 'react';
import { Meta } from '@/components/Meta';
import getPosts from '@/api/getPosts';
import ReactMarkdown from 'react-markdown';

const Home = ({ posts }: {posts: any[]}) => (
  <div>
    <Meta title="Some awesome title" />
    <div>Something here</div>

    <div>{posts[0].title}</div>
    <ReactMarkdown>{posts[0].body}</ReactMarkdown>

  </div>
);

export default Home;

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
  };
};
