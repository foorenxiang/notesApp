import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Menu from './Menu';
import styles from '../../styles/container';

export default ({ navigation }) => {
  const navigationCallback = (screen) => navigation.push(screen);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Menu navigation={navigationCallback} />
      </SafeAreaView>
    </>
  );
};
