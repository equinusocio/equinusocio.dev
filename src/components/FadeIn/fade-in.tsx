import React, { HTMLAttributes, useEffect } from 'react';
import {
  LazyMotion, domAnimation, m, useReducedMotion, useAnimation,
} from 'framer-motion';
import { useInViewRef } from 'rooks';

export interface IFadeInProps extends HTMLAttributes<HTMLElement> {
  custom?: Record<string, any>;
}

export const FadeIn = ({
  children,
  custom,
}: IFadeInProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [componentRef, inView] = useInViewRef();
  const controls = useAnimation();

  const fadeIn = {
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom?.delay,
        duration: 0.8,
      },
    }),
    hidden: {
      opacity: 0,
      y: '20%',
      transition: { duration: 0.8 },
    },
  };

  useEffect(() => {
    if (inView) {
      void controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div ref={componentRef} variants={fadeIn} initial={shouldReduceMotion ? 'visible' : 'hidden'} animate={controls}>
        {children}
      </m.div>
    </LazyMotion>
  );
};
