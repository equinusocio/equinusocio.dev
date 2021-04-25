import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { PropsClass } from 'types/css';
import style from './text.module.css';

interface TextProps extends PropsWithChildren<PropsClass> {
  className?: string;
}

export const Text = ({ children, className, ...props }: TextProps) => (
  <div className={clsx(style.Text, className)} {...props}>
    {children}
  </div>
);
