import React from 'react';
import { Meta } from '@/components/Meta';
import ReactMarkdown from 'react-markdown';
import { getPost, getPosts } from '@/api/selectors';
import { PostType } from '@/api/selectors/getPost';

const Post = ({title, body}: PostType) => (
  <div>
    <Meta title="Some awesome title" />
    <h1>{title}</h1>
    <ReactMarkdown>{body}</ReactMarkdown>
  </div>
);

export const getStaticPaths = async () => {
  const posts = await getPosts();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: PostType) => ({
    params: {
      id: post.id,
      slug: post.slug
    },
  }))

  return { paths, fallback: true }
}


export const getStaticProps = async ({ slug }: PostType) => {
  const post = await getPost(slug);

  return {
    props: { ...post },
    revalidate: 1,
  };
};

export default Post;

