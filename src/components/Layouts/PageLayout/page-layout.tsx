import React, { HTMLAttributes } from 'react';
import { Header } from '@/components/Header';
import style from './page-layout.module.css';

export const PageLayout = ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
  <main className={style.PageLayout} {...props}>
    <Header />
    <div>
      {children}
    </div>
  </main>
);
