import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { Header } from '@/components/Header';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { PostCard } from '@/components/PostCard';
import { Section } from '@/components/Section';
import { Stack } from '@/components/Stack';
import { PostType } from 'pages/api/posts';
import React from 'react';

const Blog = ({ posts }: {posts: PostType[]}) => (
  <PageLayout>
    <Section accent>
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
  const data = await fetch('http://localhost:3000/api/posts');
  const posts = await data.json();

  return {
    props: { posts },
    revalidate: 120,
  };
};

export default Blog;
