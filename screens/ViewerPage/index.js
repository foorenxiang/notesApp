import React from 'react';
import { ScrollView } from 'react-native';
import MarkdownNative from 'react-native-markdown-display';
import MarkdownWeb from 'markdown-to-jsx';
import { isNativeDevice } from '../../utils/platformDetector';

export default ({ route, navigation }) => {
  const { markdownData } = route.params;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        paddingHorizontal: '5%',
      }}
    >
      {isNativeDevice ? (
        <MarkdownNative>{markdownData}</MarkdownNative>
      ) : (
        <MarkdownWeb>{markdownData}</MarkdownWeb>
      )}
    </ScrollView>
  );
};
