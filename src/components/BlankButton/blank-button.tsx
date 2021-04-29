import clsx from 'clsx';
import React, { forwardRef, HTMLAttributes, MouseEvent } from 'react';

import styles from './blank-button.module.css';

interface IBlankButton extends HTMLAttributes<HTMLButtonElement> {
  onClick: (event: MouseEvent<HTMLOrSVGElement>) => void;
}

export const BlankButton = forwardRef<HTMLButtonElement, IBlankButton>(
  ({
    children,
    className,
    onClick,
    ...props
  }: IBlankButton, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      type="button"
      className={clsx(styles.BlankButton, className)}
      {...props}
    >
      {children}
    </button>
  ),
);

