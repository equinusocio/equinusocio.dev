import clsx from 'clsx';
import React, {
  HTMLAttributes,
  ReactNode,
} from 'react';
import style from './pill.module.css';

interface IPillProps extends HTMLAttributes<HTMLElement> {
  icon?: ReactNode;
  color?: 'purple' | 'cyan' | 'blue' | 'orange' | 'violet' | 'lime' | 'green' | 'yellow' | 'black' | 'pink' | 'grey';
}

export const Pill = ({
  children,
  className,
  icon,
  color = 'grey',
  ...props
}: IPillProps) => (
  <span data-pill-color={color} className={clsx(style.Pill, className)} {...props}>
    {icon}
    {children}
  </span>
);
