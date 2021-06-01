import React from 'react';
import MarkdownNative from 'react-native-markdown-display';
import MarkdownWeb from 'react-markdown';
import { isNativeDevice } from '../../utils/platformDetector';
import { Prism } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import { coy } from 'react-syntax-highlighter/dist/styles/prism';

export default ({ children: markdownData }) =>
  isNativeDevice ? (
    <MarkdownNative>{markdownData}</MarkdownNative>
  ) : (
    <Prism language="markdown" style={dark}>
      {/* <MarkdownWeb>{markdownData}</MarkdownWeb> */}
      {markdownData}
    </Prism>
  );
