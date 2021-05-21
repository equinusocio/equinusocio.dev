import React, { HTMLAttributes, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import style from './page-layout.module.css';

const DynamicCursor = dynamic(async () => import('@/components/Cursor').then(mod => mod.Cursor));

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
    <DynamicCursor />
    {(header || hero) && (
    <section>
      {header}
      {hero}
    </section>
    )}
    {children}
  </main>
);
