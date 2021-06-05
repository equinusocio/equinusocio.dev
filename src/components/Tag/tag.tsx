import clsx from 'clsx';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import style from './tag.module.css';

export interface ITagProps extends HTMLAttributes<HTMLElement> {
  url: string;
}

export const Tag = ({
  children,
  className,
  url,
  ...props
}: ITagProps) => (
  <Link href={url} {...props}>
    <a className={clsx(style.Tag, className)}>
      #
      {children}
    </a>
  </Link>
);
