import React from 'react';
import MarkdownNative from 'react-native-markdown-display';
import MarkdownWeb from 'react-markdown';
import { isNativeDevice } from '../../utils/platformDetector';

export default ({ children: markdownData }) =>
  isNativeDevice ? (
    <MarkdownNative>{markdownData}</MarkdownNative>
  ) : (
    <MarkdownWeb>{markdownData}</MarkdownWeb>
  );
