import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher';
import style from './header.module.css';

export const Header = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => (
  <header className={clsx(style.Header, className)} {...props}>
    <ThemeSwitcher />
  </header>
);
