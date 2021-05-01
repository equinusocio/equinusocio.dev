import clsx from 'clsx';
import React, { CSSProperties, HTMLAttributes } from 'react';
import { Stack } from '@/components/Stack';
import style from './section.module.css';

interface ISectionProps extends HTMLAttributes<HTMLElement> {
  showBg?: boolean;
  bg?: string;
  color?: 'accent' | 'bright' | 'dark';
  isFirst?: boolean;
}

export const Section = ({
  children,
  showBg = true,
  className,
  color = 'accent',
  isFirst = false,
  bg,
  ...props
}: ISectionProps) => {
  const dynamicStyle: CSSProperties = {
    '--bg': (showBg && bg) && `url(/${bg})`,
  };

  return (
    <Stack
      as="section"
      data-section-show-bg={showBg}
      data-section-color={color}
      data-section-is-first={isFirst}
      style={dynamicStyle}
      className={clsx(style.Section, className)}
      {...props}
    >
      {children}
    </Stack>
  );
};
