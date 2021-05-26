import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const menuButtons = {
  item1: {
    title: 'Python Design Patterns',
    screen: 'PythonDesignPatterns',
  },
};

export default ({ navigation }) => {
  const menuButtonKeys = Object.keys(menuButtons);
  const firstKey = menuButtonKeys[0];

  const onPress = () => null;

  return (
    <View style={menuStyles.container}>
      {Object.keys(menuButtons).length === 1 ? (
        <Button
          title={menuButtons[firstKey].title}
          onPress={() => navigation(menuButtons[firstKey].screen)}
        />
      ) : (
        Object.keys(menuButtons).map((button) => {
          const { title, screen } = menuButtons[button];
          return <Button title={title} onPress={() => navigation(screen)} key={title} />;
        })
      )}
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    paddingTop: '1%',
    paddingBottom: '1%',
  },
});
