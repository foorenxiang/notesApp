import React from 'react';
import MarkdownNative from 'react-native-markdown-display';
import MarkdownWeb from 'react-markdown';
import highlighter from './markdownHighlighter';
import { isNativeDevice } from '../../utils/platformDetector';
// import { Prism } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default ({ children: markdownData }) =>
  isNativeDevice ? (
    <MarkdownNative>{markdownData}</MarkdownNative>
  ) : (
    <>
      {/* <Prism language="markdown" style={dark}>
        {markdownData}
      </Prism> */}
      <MarkdownWeb components={highlighter}>{markdownData}</MarkdownWeb>
    </>
  );
