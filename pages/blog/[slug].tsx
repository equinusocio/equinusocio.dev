import React from 'react';
import { Meta } from '@/components/Meta';
import ReactMarkdown from 'react-markdown';
import { getPost } from '@/api/selectors';

const Post = ({ post }: Record<string, any>) => (
  <div>
    <Meta title="Some awesome title" />
    <h1>{post.title}</h1>
    <ReactMarkdown>{post.body}</ReactMarkdown>
  </div>
);

export const getServerSideProps = async ({ params }: Record<string, any>) => {
  const post = await getPost(params.slug);

  return {
    props: { post },
  };
};

export default Post;

