import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import { Stack, IStackProps } from '@/components/Stack';
import style from './section.module.css';

interface ISectionProps extends IStackProps {
  showBg?: boolean;
  bg?: string;
  accent?: boolean;
  isFirst?: boolean;
}

export const Section = ({
  children,
  showBg = true,
  className,
  accent,
  isFirst = false,
  bg,
  ...props
}: ISectionProps) => {
  const dynamicStyle: CSSProperties = {
    ...props.style,
    '--bg': (showBg && bg) && `url(/${bg})`,
  };

  return (
    <Stack
      as="section"
      data-section-show-bg={showBg}
      data-section-accent={accent}
      data-section-is-first={isFirst}
      className={clsx(style.Section, className)}
      {...props}
    >
      <span className={style.Bg} style={dynamicStyle} />
      {children}
    </Stack>
  );
};
