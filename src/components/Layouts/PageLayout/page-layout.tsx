import React, { HTMLAttributes } from 'react';
import { Cursor } from '@/components/Cursor';
import style from './page-layout.module.css';

export const PageLayout = ({
  children,
  ...props
}: HTMLAttributes<HTMLElement>) => (
  <main className={style.PageLayout} {...props}>
    <Cursor />
    {children}
  </main>
);
