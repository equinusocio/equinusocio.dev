import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { Stack } from '@/components/Stack';
import { Text } from '@/components/Text';
import Link from 'next/link';
import { Heading } from '@/components/Heading';
import style from './post-card.module.css';
import { FormattedDate } from '../FormattedDate';

export interface IPostCardProps extends HTMLAttributes<HTMLElement> {
  url?: string;
  slug: string;
  title: string;
  date: string;
  abstract: string;
  externalUrl?: string;
}

export const PostCard = ({
  className,
  url,
  date,
  title,
  slug,
  externalUrl,
  abstract,
  ...props
}: IPostCardProps) => (
  <article className={clsx(style.PostCard, className)} {...props}>
    <Link href={externalUrl ?? `/blog/${encodeURIComponent(slug)}`}>
      <a target={externalUrl && '_blank'}>
        <Stack rowGap="1.45rem" horizontalAlign="start">
          <Stack rowGap="0.72rem">
            <Text as="span" size="small">
              <FormattedDate date={date} />
            </Text>
            <Heading as="h3">{ title }</Heading>

            <Text className={style.Abstract}>
              {abstract}
            </Text>
          </Stack>

        </Stack>
      </a>
    </Link>
  </article>
);
