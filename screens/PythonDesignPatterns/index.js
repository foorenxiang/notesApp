import React from 'react';
import { ScrollView } from 'react-native';
// import PDFReader from 'rn-pdf-reader-js';
import Markdown from 'react-native-markdown-display';
import style from '../../styles/container';
import notes from './notes';

export default () => (
  <>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        paddingHorizontal: '5%',
      }}
    >
      <Markdown>{notes}</Markdown>
    </ScrollView>
    {/* <PDFReader
      source={{
        uri: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      }}
    /> */}
  </>
);
