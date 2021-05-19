import clsx from 'clsx';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import { Stack } from '@/components/Stack';
import { Text } from '@/components/Text';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useRouter } from 'next/router';
import style from './header.module.css';

export interface IHeaderProps extends HTMLAttributes<HTMLElement> {
  isSticky?: boolean;
}

export const Header = ({
  className,
  isSticky,
  ...props
}: IHeaderProps) => {
  const router = useRouter();

  return (
    <header data-header-sticky={isSticky} className={clsx(style.Header, className)} {...props}>
      <Stack as="nav" columnGap="1.22rem" inline verticalAlign="center" horizontalAlign="end">
        <Link href="/">
          <a aria-current={router.asPath === '/' ? 'page' : undefined}><Text as="span" size="small" weight="bold">HOME</Text></a>
        </Link>
        <Link href="/blog">
          <a aria-current={router.asPath.includes('/blog/') ? 'page' : undefined}><Text as="span" size="small" weight="bold">STORIES</Text></a>
        </Link>
      </Stack>
      <div className={style.Separator} />
      <ThemeSwitcher />
    </header>
  );
};
