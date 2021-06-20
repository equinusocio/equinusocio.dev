import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn/';
import { Header } from '@/components/Header';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { PostCard } from '@/components/PostCard';
import { Section } from '@/components/Section';
import { Stack } from '@/components/Stack';
import { Params } from 'next/dist/next-server/server/router';
import { PostType } from 'pages/api/posts';
import React from 'react';

const TagName = ({ tagName, posts }: {tagName: string; posts: PostType[]}) => (
  <PageLayout>
    <Section accent>
      <Header isSticky />
      <Container size="medium" style={{ counterReset: 'post-counter' }}>
        #
        {tagName}
        <Stack as="ol" rowGap="2rem" role="list">
          {posts?.map((item: PostType, i: number) => (
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

export const getStaticPaths = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/posts`);
  const posts = await data.json();

  const paths = posts.map((post: Partial<PostType>) => ({
    params: {
      id: post.slug,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }: Params) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/tag/${params.id.replace('-', ' ')}`);
  const posts = await data.json();

  return {
    props: {
      posts,
      tagName: params.id,
    },
    revalidate: 120,
  };
};

export default TagName;

