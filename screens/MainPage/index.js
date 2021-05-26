import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Menu from './Menu';
import styles from '../../styles/container';

export default ({ navigation }) => {
  const viewerCallback = (viewerData) => navigation.push('Viewer', viewerData);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Menu viewerCallback={viewerCallback} />
      </SafeAreaView>
    </>
  );
};
