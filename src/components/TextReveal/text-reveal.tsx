import clsx from 'clsx';
import React, { CSSProperties, HTMLAttributes } from 'react';
import styles from './text-reveal.module.css';

interface ITextRevealProps extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
  isRunning?: boolean;
}

export const TextReveal = ({
  children,
  className,
  color,
  style,
  isRunning = true,
  ...props
}: ITextRevealProps) => {
  const dynamicStyle: CSSProperties = {
    '--c': color,
  };

  return (
    <span
      data-text-reveal-is-running={isRunning}
      style={{ ...style, ...dynamicStyle }}
      className={clsx(styles.TextReveal, className)}
      {...props}
    >
      {children}
    </span>
  );
};
