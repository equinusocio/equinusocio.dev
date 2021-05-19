import React, { HTMLAttributes } from 'react';
import style from './prose.module.css';

export const Prose = ({
  children,
  ...props
}: HTMLAttributes<HTMLElement>) => (
  <div className={style.Prose} {...props}>
    {children}
  </div>
);
