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
  verticalAlign?: 'unset' | 'start' | 'center' | 'end' | 'space-between';
  horizontalAlign?: 'unset' | 'start' | 'center' | 'end' | 'space-between';
  column?: boolean;
  wrap?: boolean;
}

export const Stack: FC<IStackProps> = ({
  as = 'div',
  columnGap = '1.45rem',
  rowGap = '1.45rem',
  verticalAlign = 'unset',
  horizontalAlign = 'unset',
  column,
  className,
  wrap = true,
  children,
  ...props
}: IStackProps) => {
  const As = as;

  const dynamicStyle: CSSProperties = useMemo(() => ({
    '--columnGap': columnGap,
    '--rowGap': rowGap,
    '--vAlign': verticalAlign,
    '--hAlign': horizontalAlign,
  }), [columnGap, rowGap, verticalAlign, horizontalAlign]);

  return (
    <As
      style={dynamicStyle}
      data-stack-column={column}
      data-stack-wrap={wrap}
      className={clsx(style.Stack, className)}
      {...props}
    >
      {children}
    </As>
  );
};
