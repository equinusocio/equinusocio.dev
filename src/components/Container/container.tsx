import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import style from './container.module.css';

export interface IContainerProps extends HTMLAttributes<HTMLElement> {
  size?: 'full' | 'medium' | 'large';
  padding?: boolean;
}

export const Container = ({
  children,
  className,
  size = 'large',
  padding = true,
  ...attributes
}: IContainerProps) => (
  <div
    className={clsx(style.Container, className)}
    data-container-size={size}
    data-container-padding={padding}
    {...attributes}
  >
    {children}
  </div>
);
