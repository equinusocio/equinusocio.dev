import { Container } from '@/components/Container';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { PostCard } from '@/components/PostCard';
import { getPosts } from '@/core/api/selectors';
import { PostType } from '@/core/api/selectors/getPost';
import React from 'react';

const Blog = ({ posts }: {posts: PostType[]}) => (
  <PageLayout>
    <Container>
      {posts.map((item: PostType) => (
        <PostCard
          key={item.id}
          title={item.title}
          slug={item.slug}
          date={item.publishDate}
          abstract={item.description}
          externalUrl={item.externalUrl}
        />
      ))}
    </Container>
  </PageLayout>
);

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
    revalidate: 120,
  };
};

export default Blog;
