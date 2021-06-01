// https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada
// https://www.npmjs.com/package/react-syntax-highlighter
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as highlightingStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={highlightingStyle}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
};
