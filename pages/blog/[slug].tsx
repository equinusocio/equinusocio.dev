import React from 'react';
import { Meta } from '@/components/Meta';
import getPost from '@/api/getPost';
import ReactMarkdown from 'react-markdown';

const Post = ({ post }: Record<string, any>) => (
  <div>
    <Meta title="Some awesome title" />
    <h1>{post.fields.title}</h1>
    <ReactMarkdown>{post.fields.body}</ReactMarkdown>

  </div>
);

// export const getStaticPaths = async () => {
//   const posts = await getPosts();

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post: Record<string, any>) => ({
//     params: {
//       slug: post.fields.slug,
//     },
//   }));

//   return { paths, fallback: false };
// };

export const getServerSideProps = async ({ params }: Record<string, any>) => {
  const post = await getPost(params.slug);

  return {
    props: { post },
  };
};

export default Post;

