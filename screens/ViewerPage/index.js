import React from 'react';
import { ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-display';

export default ({ route, navigation }) => {
  const { markdownData } = route.params;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        paddingHorizontal: '5%',
      }}
    >
      <Markdown>{markdownData}</Markdown>
    </ScrollView>
  );
};
