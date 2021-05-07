import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import style from './text-reveal.module.css';

interface ITextRevealProps extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

export const TextReveal = ({
  children,
  className,
  ...props
}: ITextRevealProps) => (
  <span className={clsx(style.TextReveal, className)} {...props}>
    {children}
  </span>
);
