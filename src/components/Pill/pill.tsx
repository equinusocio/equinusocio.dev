import clsx from 'clsx';
import React, {
  HTMLAttributes,
  ReactNode,
  Children,
  cloneElement,
} from 'react';
import style from './pill.module.css';

interface IPillProps extends HTMLAttributes<HTMLElement> {
  icon?: ReactNode;
}

export const Pill = ({
  children,
  className,
  icon,
  ...props
}: IPillProps) => (
  <span className={clsx(style.Pill, className)} {...props}>
    {Children.map(icon, (child: any) => cloneElement(
      child,
      {
        'aria-hidden': 'true',
        role: 'presentation',
      },
    ))}
    {children}
  </span>
);
