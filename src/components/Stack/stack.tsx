import clsx from 'clsx';
import React, {
  CSSProperties,
  FC, HTMLAttributes, useMemo,
} from 'react';
import style from './stack.module.css';

interface IStackProps extends HTMLAttributes<HTMLOrSVGElement> {
  // eslint-disable-next-line no-undef
  as?: keyof JSX.IntrinsicElements;
  columnGap?: string;
  rowGap?: string;
  columns?: number;
  inline?: boolean;
  verticalAlign?: 'unset' | 'start' | 'center' | 'end';
  horizontalAlign?: 'unset' | 'start' | 'center' | 'end';
}

export const Stack: FC<IStackProps> = ({
  as = 'div',
  columnGap = '1.45rem',
  rowGap = '1.45rem',
  columns = 1,
  inline = false,
  verticalAlign = 'unset',
  horizontalAlign = 'unset',
  className,
  children,
  ...props
}: IStackProps) => {
  const As = as;

  const dynamicStyle: CSSProperties = useMemo(() => ({
    '--columnGap': columnGap,
    '--rowGap': rowGap,
    '--columns': columns,
    '--vAlign': verticalAlign,
    '--hAlign': horizontalAlign,
  }), [columnGap, rowGap, columns, verticalAlign, horizontalAlign]);

  return (
    <As
      style={dynamicStyle}
      className={clsx(style.Stack, className)}
      data-stack-inline={inline}
      {...props}
    >
      {children}
    </As>
  );
};
