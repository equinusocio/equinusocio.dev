import React from 'react';
import { Meta } from '@/components/Meta';
import ReactMarkdown from 'react-markdown';
import { getPost, getPosts } from '@/core/api/selectors';
import { PostType } from '@/core/api/selectors/getPost';
import { Params } from 'next/dist/next-server/server/router';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { Heading } from '@/components/Heading';
import { Prose } from '@/components/Prose';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';

const Post = ({ title, body }: PostType) => {
  const components = {
    // "image": ImageRenderer,
    h2({ children }: {children: any}) {
      return (
        <Heading as="h2">
          {children}
        </Heading>
      );
    },
    h3({ children }: {children: any}) {
      return (
        <Heading as="h3">
          {children}
        </Heading>
      );
    },
    h4({ children }: {children: any}) {
      return (
        <Heading as="h4">
          {children}
        </Heading>
      );
    },
    h5({ children }: {children: any}) {
      return (
        <Heading as="h5">
          {children}
        </Heading>
      );
    },
    h6({ children }: {children: any}) {
      return (
        <Heading as="h6">
          {children}
        </Heading>
      );
    },
    // "code": CodeRenderer
  };

  return (
    <PageLayout
      header={<Header isSticky />}
      hero={(
        <>
          <Heading as="h1">{title}</Heading>
          <span>lorem</span>
        </>
    )}
    >
      <Meta title={title} />
      <Container size="medium">
        <Prose>
          <ReactMarkdown components={components}>
            {body}
          </ReactMarkdown>
        </Prose>
      </Container>
    </PageLayout>
  );
};

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

