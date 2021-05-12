import clsx from 'clsx';
import React, { CSSProperties, HTMLAttributes } from 'react';
import style from './slider.module.css';

interface ISliderProps extends HTMLAttributes<HTMLElement> {
  rowGap?: string;
  columnGap?: string;
  columnSize?: string;
  desktopColumnSize?: string;
  mobileGap?: string;
}

export const Slider = ({
  children,
  className,
  rowGap = '1.09rem',
  columnGap = '1.09rem',
  columnSize = 'max(300px, 88vw)',
  mobileGap = '0.8rem',
  desktopColumnSize = '23ch',
  ...props
}: ISliderProps) => {
  const dynamicStyle: CSSProperties = {
    '--mobileGap': mobileGap,
    '--rGap': rowGap,
    '--cGap': columnGap,
    '--columnSize': columnSize,
    '--desktopColumnSize': desktopColumnSize,
  };

  return (
    <div
      className={clsx(style.Slider, className)}
      style={dynamicStyle}
      {...props}
    >
      {children}
    </div>
  );
};
