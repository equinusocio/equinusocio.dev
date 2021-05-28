import React, { HTMLAttributes } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { ReactMarkdownProps } from 'react-markdown/src/ast-to-react';
import clsx from 'clsx';
import theme from './theme';
// import dracula from 'prism-react-renderer/themes/dracula';
import styles from './code-block.module.css';

export interface ICodeBlockProps extends HTMLAttributes<HTMLElement>, ReactMarkdownProps {
  children: any;
  inline?: boolean;
}

export const CodeBlock = ({
  node,
  className,
  children,
  inline,
  ...props
}: ICodeBlockProps) => {
  const match = /language-(\w+)/.exec(className ?? '');

  return !inline && match ? (
    <Highlight {...defaultProps} theme={theme} code={String(children).replace(/\n$/, '')} language={match[1] as Language}>
      {({
        className, style, tokens, getLineProps, getTokenProps,
      }) => (
        <div className={clsx(styles.CodeBlock)}>
          <pre className={clsx(styles.Code, className)} style={{ ...style }} {...props}>
            <div>
              {tokens.map((line, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                  // eslint-disable-next-line react/no-array-index-key
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </div>
          </pre>
        </div>
      )}
    </Highlight>
  ) : (
    <code className={className} {...props}>{children}</code>
  );
};
