import React, { PropsWithChildren } from 'react';
import { ReactMarkdownProps } from 'react-markdown/src/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface ICodeBlock extends PropsWithChildren<ReactMarkdownProps> {
  className?: string;
  inline?: boolean;
}

export const CodeBlock = ({
  node,
  inline,
  className = '',
  children,
  ...props
}: ICodeBlock) => {
  const match = /language-(\w+)/.exec(className);

  return !inline && match ? (
    <SyntaxHighlighter
      style={dark}
      language={match[1]}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props} />
  );
};
