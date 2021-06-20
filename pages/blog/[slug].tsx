import React from 'react';
import { Meta } from '@/components/Meta';
import ReactMarkdown from 'react-markdown';
import { Params } from 'next/dist/next-server/server/router';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { Heading } from '@/components/Heading';
import { Prose } from '@/components/Prose';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';
import raw from 'rehype-raw';
import { Stack } from '@/components/Stack';
import { FormattedDate } from '@/components/FormattedDate';
import { Text } from '@/components/Text';
import { CodeBlock } from '@/components/CodeBlock';
import { Tag } from '@/components/Tag';
import { slugify } from '@/core/utils/slugify';
import { PostType } from 'pages/api/posts';

const Post = ({
  title, body, publishDate, tags,
}: PostType) => {
  const rehypePlugins: any[] = [
    raw,
  ];

  const components = {
    code: CodeBlock,
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
  };

  return (
    <PageLayout
      header={<Header isSticky />}
      hero={(
        <Stack rowGap="0.5rem" horizontalAlign="center" verticalAlign="center">
          <Text size="small">
            {publishDate && <FormattedDate date={publishDate} />}
          </Text>
          <Heading as="h1">{title}</Heading>
          {tags?.map(item => <Tag url={`/blog/tag/${slugify(item)}`} key={item}>{item}</Tag>)}
        </Stack>
    )}
    >
      <Meta title={title} />
      <Container size="medium">
        <Prose>
          <ReactMarkdown rehypePlugins={rehypePlugins} components={components}>
            {body}
          </ReactMarkdown>
        </Prose>
      </Container>
    </PageLayout>
  );
};

export const getStaticPaths = async () => {
  const data = await fetch('http://localhost:3000/api/posts');
  const posts = await data.json();

  const paths = posts.map((post: Partial<PostType>) => ({
    params: {
      slug: post.slug,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }: Params) => {
  const data = await fetch(`http://localhost:3000/api/${params.slug}`);
  const post = await data.json();

  return {
    props: { ...post },
    revalidate: 120,
  };
};

export default Post;

