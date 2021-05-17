import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { PostCard } from '@/components/PostCard';
import { Section } from '@/components/Section';
import { Stack } from '@/components/Stack';
import { getPosts } from '@/core/api/selectors';
import { PostType } from '@/core/api/selectors/getPost';
import React from 'react';

const Blog = ({ posts }: {posts: PostType[]}) => (
  <PageLayout>
    <Section isFirst>
      <Header isSticky />
      <Container>
        <Stack rowGap="2rem">
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
        </Stack>
      </Container>
    </Section>
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
