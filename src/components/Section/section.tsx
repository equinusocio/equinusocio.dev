import clsx from 'clsx';
import React, { CSSProperties, HTMLAttributes } from 'react';
import style from './section.module.css';

interface ISectionProps extends HTMLAttributes<HTMLElement> {
  showBg?: boolean;
  bg?: string;
  color?: 'accent' | 'accent-gradient' | 'bright' | 'dark';
}

export const Section = ({
  children,
  showBg = true,
  className,
  color = 'accent-gradient',
  bg,
  ...props
}: ISectionProps) => {
  const dynamicStyle: CSSProperties = {
    '--bg': bg,
  };

  return (
    <section
      data-section-show-bg={showBg}
      data-section-color={color}
      style={dynamicStyle}
      className={clsx(style.Section, className)}
      {...props}
    >
      {children}
    </section>
  );
};
