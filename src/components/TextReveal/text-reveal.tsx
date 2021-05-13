import clsx from 'clsx';
import React, { CSSProperties, HTMLAttributes } from 'react';
import { useInViewRef } from 'rooks';
import styles from './text-reveal.module.css';

interface ITextRevealProps extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

export const TextReveal = ({
  children,
  className,
  color,
  style,
  ...props
}: ITextRevealProps) => {
  const [componentRef, inView] = useInViewRef();

  const dynamicStyle: CSSProperties = {
    '--c': color,
  };

  return (
    <span
      ref={componentRef}
      data-text-reveal-is-running={inView}
      style={{ ...style, ...dynamicStyle }}
      className={clsx(styles.TextReveal, className)}
      {...props}
    >
      {children}
    </span>
  );
};
