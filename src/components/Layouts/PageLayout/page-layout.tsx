import React, { HTMLAttributes, ReactNode } from 'react';
import { Cursor } from '@/components/Cursor';
import style from './page-layout.module.css';

export interface IPageLayoutProps extends HTMLAttributes<HTMLElement> {
  hero?: ReactNode;
  header?: ReactNode;
}

export const PageLayout = ({
  children,
  header,
  hero,
  ...props
}: IPageLayoutProps) => (
  <main className={style.PageLayout} {...props}>
    <Cursor />
    {(header || hero) && (
    <section>
      {header}
      {hero}
    </section>
    )}
    {children}
  </main>
);
