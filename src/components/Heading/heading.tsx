import clsx from 'clsx';
import React, {
  useMemo, FC, HTMLAttributes,
} from 'react';
import style from './heading.module.css';

interface IHeadingProps extends HTMLAttributes<HTMLOrSVGElement> {
  // eslint-disable-next-line no-undef
  as?: keyof JSX.IntrinsicElements;
  semantic?: boolean;
  display?: boolean;
  align?: 'start' | 'center' | 'end';
}

export const Heading: FC<IHeadingProps> = ({
  as = 'h1',
  semantic = true,
  children,
  display,
  align,
  className,
  ...props
}: IHeadingProps) => {
  const As = as;

  const computedClassName = as.toUpperCase();

  const cssClasses = useMemo(
    () => ({
      className: clsx(style.Heading, style[computedClassName], display && style.Display, className),
    }),
    [className, computedClassName, display],
  );

  return semantic ? (
    <As {...cssClasses} {...props}>
      {children}
    </As>
  ) : (
    <span {...cssClasses} {...props}>
      {children}
    </span>
  );
};
