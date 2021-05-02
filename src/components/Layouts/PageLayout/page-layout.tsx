import React, { HTMLAttributes } from 'react';
import { Header } from '@/components/Header';
import { Cursor } from '@/components/Cursor';
import style from './page-layout.module.css';

interface IPageLayoutProps extends HTMLAttributes<HTMLElement>{
  showHeader?: boolean;
}

export const PageLayout = ({
  children,
  showHeader = true,
  ...props
}: IPageLayoutProps) => (
  <main className={style.PageLayout} {...props}>
    <Cursor />
    {showHeader && <Header />}
    {children}
  </main>
);
