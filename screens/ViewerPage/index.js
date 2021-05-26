import React from 'react';
import { ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-display';
import stripHTMLFromString from '../../utils/stripHTMLFromString';

export default ({ route, navigation }) => {
  const { markdownData } = route.params;
  console.log('Route.params:', route.params.markdownData.markdownData);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        paddingHorizontal: '5%',
      }}
    >
      <Markdown>{stripHTMLFromString(markdownData)}</Markdown>
    </ScrollView>
  );
};
