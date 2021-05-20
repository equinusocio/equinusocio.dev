import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
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
    <Section isFirst accent>
      <Header isSticky />
      <Container size="medium" style={{ counterReset: 'post-counter' }}>
        <Stack as="ol" rowGap="2rem" role="list">
          {posts.map((item: PostType, i: number) => (
            <li key={item.id}>
              <FadeIn delay={`${i < 3 ? i * 0.1 : 0}s`}>
                <PostCard
                  title={item.title}
                  slug={item.slug}
                  date={item.publishDate}
                  abstract={item.description}
                  externalUrl={item.externalUrl}
                />
              </FadeIn>
            </li>
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
