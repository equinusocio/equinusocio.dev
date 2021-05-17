import React from 'react';
import { Meta } from '@/components/Meta';
import ReactMarkdown from 'react-markdown';
import { getPost, getPosts } from '@/core/api/selectors';
import { PostType } from '@/core/api/selectors/getPost';
import { Params } from 'next/dist/next-server/server/router';

const Post = ({ title, body }: PostType) => (
  <div>
    <Meta title="Some awesome title" />
    <h1>{title}</h1>
    <ReactMarkdown>{body}</ReactMarkdown>
  </div>
);

export const getStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts.map((post: Partial<PostType>) => ({
    params: {
      slug: post.slug,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }: Params) => {
  const post = await getPost(params.slug);

  return {
    props: { ...post },
    revalidate: 120,
  };
};

export default Post;

