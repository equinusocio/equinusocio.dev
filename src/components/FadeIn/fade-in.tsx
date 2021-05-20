import React, { CSSProperties, HTMLAttributes } from 'react';
import { useIntersection } from 'react-use';

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
  const componentRef = React.useRef(null);
  const intersection = useIntersection(componentRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  const dynamicStyle: CSSProperties = {
    '--delay': delay,
    '--duration': duration,
  };

  return (
    <div
      data-fade-in-is-running={intersection && intersection.intersectionRatio === 1}
      data-fade-in-only-desktop={Boolean(onlyDesktop)}
      className={style.FadeIn}
      style={dynamicStyle}
      ref={componentRef}
    >
      {children}
    </div>
  );
};
