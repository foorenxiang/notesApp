import React, { useState, useEffect } from 'react';
import { Button, View } from 'react-native';
import { fetchNotes } from '../../utils/fetchTools';
import menuStyles from '../../styles/menu';
import buttonStyles from '../../styles/button';

const cachedData = {
  // screenName: {
  //   screen: 'screen title',
  //   markdownData: '',
  // },
};

const useEffectCallback = (setNotes) => {
  (async () => {
    const data = await fetchNotes();
    setNotes(() => data);
  })();
};

const MenuButtons = ({ titles, onPressHandler }) =>
  titles.map((title) => (
    <View style={buttonStyles.container} key={`${title}_view`}>
      <Button
        title={title}
        onPress={() => onPressHandler(title)}
        key={`${title}_button`}
        style={buttonStyles.button}
      />
    </View>
  ));

export default ({ viewerCallback }) => {
  const [notes, setNotes] = useState(cachedData);

  useEffect(() => useEffectCallback(setNotes), []);
  const titles = () => Object.keys(notes);

  const onPressHandler = (selectedTitle) => {
    return viewerCallback({
      title: selectedTitle,
      markdownData: notes[selectedTitle].markdownData,
    });
  };

  return (
    <View style={menuStyles.container}>
      <MenuButtons titles={titles()} onPressHandler={onPressHandler} />
    </View>
  );
};
