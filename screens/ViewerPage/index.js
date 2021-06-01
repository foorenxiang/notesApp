import React from 'react';
import { ScrollView } from 'react-native';
import MarkdownRenderer from './MarkdownRenderer';

export default ({ route, navigation }) => {
  const { markdownData } = route.params;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        paddingHorizontal: '5%',
      }}
    >
      <MarkdownRenderer>{markdownData}</MarkdownRenderer>
    </ScrollView>
  );
};
