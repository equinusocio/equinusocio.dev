import clsx from 'clsx';
import React, {
  CSSProperties, FC, HTMLAttributes,
} from 'react';
import style from './text.module.css';

interface ITextProps extends HTMLAttributes<HTMLOrSVGElement> {
  // eslint-disable-next-line no-undef
  as?: keyof JSX.IntrinsicElements;
  size?: 'small';
  color: string;
  weight: 'thin' | 'medium' | 'bold';
}

export const Text: FC<ITextProps> = ({
  as = 'p',
  size,
  color,
  weight,
  children,
  className,
  ...props
}: ITextProps) => {
  const As = as;

  const dynamicStyle: CSSProperties = {
    '--fw': weight,
  };

  return (
    <As style={dynamicStyle} data-text-weight={weight} className={clsx(style.Text, className)} {...props}>
      {children}
    </As>
  );
};
