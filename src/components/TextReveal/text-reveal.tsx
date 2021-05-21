import React, { HTMLAttributes } from 'react';
import { useIntersection } from 'react-use';
import styles from './text-reveal.module.css';

export const TextReveal = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  const componentRef = React.useRef(null);
  const intersection = useIntersection(componentRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  return (
    <span
      ref={componentRef}
      className={styles.TextReveal}
      data-text-reveal-is-running={intersection?.isIntersecting}
      {...props}
    >
      {children}
    </span>
  );
};
