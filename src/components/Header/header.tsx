import clsx from 'clsx';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher';
import style from './header.module.css';

export const Header = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => (
  <header className={clsx(style.Header, className)} {...props}>
    <Link href="/blog"><a>STORIES</a></Link>
    <ThemeSwitcher />
  </header>
);
