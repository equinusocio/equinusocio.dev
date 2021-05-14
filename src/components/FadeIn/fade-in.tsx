import React, { CSSProperties, HTMLAttributes } from 'react';
import { useInViewRef } from 'rooks';

import style from './fade-in.module.css';

export interface IFadeInProps extends HTMLAttributes<HTMLElement> {
  delay?: string;
  duration?: string;
  onlyDesktop?: boolean;
}

export const FadeIn = ({
  children,
  delay,
  duration = '0.8s',
  onlyDesktop,
}: IFadeInProps) => {
  const [componentRef, inView] = useInViewRef();

  const dynamicStyle: CSSProperties = {
    '--delay': delay,
    '--duration': duration,
  };

  return (
    <div
      data-fade-in-is-running={inView}
      data-fade-in-only-desktop={Boolean(onlyDesktop)}
      className={style.FadeIn}
      style={dynamicStyle}
      ref={componentRef}
    >
      {children}
    </div>
  );
};
