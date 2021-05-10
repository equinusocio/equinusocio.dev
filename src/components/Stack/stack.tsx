import clsx from 'clsx';
import React, {
  CSSProperties,
  FC, HTMLAttributes, useMemo,
} from 'react';
import style from './stack.module.css';

export interface IStackProps extends HTMLAttributes<HTMLOrSVGElement> {
  // eslint-disable-next-line no-undef
  as?: keyof JSX.IntrinsicElements;
  columnGap?: string;
  rowGap?: string;
  verticalAlign?: 'unset' | 'start' | 'center' | 'end';
  horizontalAlign?: 'unset' | 'start' | 'center' | 'end';
  columns?: number;
  inline?: boolean;
}

export const Stack: FC<IStackProps> = ({
  as = 'div',
  columnGap = '1.45rem',
  rowGap = '1.45rem',
  verticalAlign = 'unset',
  horizontalAlign = 'unset',
  columns = 1,
  inline,
  className,
  children,
  ...props
}: IStackProps) => {
  const As = as;

  const dynamicStyle: CSSProperties = useMemo(() => ({
    '--columnGap': columnGap,
    '--rowGap': rowGap,
    '--vAlign': verticalAlign,
    '--hAlign': horizontalAlign,
    '--columns': columns,
  }), [columnGap, rowGap, verticalAlign, horizontalAlign, columns]);

  return (
    <As
      style={dynamicStyle}
      data-stack-inline={inline}
      className={clsx(style.Stack, className)}
      {...props}
    >
      {children}
    </As>
  );
};
