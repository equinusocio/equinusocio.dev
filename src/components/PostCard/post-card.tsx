import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { Stack } from '@/components/Stack';
import { Text } from '@/components/Text';
import Link from 'next/link';
import { Heading } from '@/components/Heading';
import style from './post-card.module.css';

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
    <Link href={!externalUrl ? `/blog/${encodeURIComponent(slug)}` : externalUrl}>
      <a target={externalUrl && '_blank'}>
        <Stack rowGap="1.45rem" horizontalAlign="start">
          <Stack rowGap="0.72rem">
            <Text as="span">
              <time dateTime={new Date(date).toISOString()}>
                {new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(new Date(date))}
              </time>
            </Text>
            <Heading as="h3">{ title }</Heading>

            <Text className={style.Abstract}>
              {abstract}
            </Text>
          </Stack>

        </Stack>
      </a>
    </Link>
    {/* {% call Stack(columns=1, rowGap="1.45rem", horizontalAlign="start") -%}
        {% call Stack(columns=1, rowGap="0.72rem") -%}
          {% call Label() %}
            <time class="PostCard__Date" datetime="{{ date | htmlDate }}">{{ date | dateFilter }}</time>
          {% endcall %}
          <h3 class="PostCard__Title">{{ title }}</h3>

          <p class="PostCard__Abstract">
            {{ abstract }}
          </p>
        {% endcall %}

        {% call Button(href=url, label=title, external=externalUrl) -%}
          Read this story
          {% if isExternal %}
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12"><path d="M6.793 3.793L.586 10 2 11.414l6.207-6.207L11 8V1H4l2.793 2.793z" fill="var(--contrast-color)" /></svg>
          {% else %}
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12"><path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" /></svg>
          {% endif %}
        {% endcall %}
      {% endcall %} */}
  </article>
);
