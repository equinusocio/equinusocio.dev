import clsx from 'clsx';
import React, { CSSProperties, HTMLAttributes } from 'react';
import { useIntersection } from 'react-use';
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
  const componentRef = React.useRef(null);
  const intersection = useIntersection(componentRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  const dynamicStyle: CSSProperties = {
    '--c': color,
  };

  return (
    <span
      ref={componentRef}
      className={styles.TextReveal}
      data-text-reveal-is-running={intersection?.isIntersecting}
      style={{ ...style, ...dynamicStyle }}
      {...props}
    >
      {children}
    </span>
  );
};
