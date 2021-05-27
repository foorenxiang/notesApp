import React, { useState, useEffect } from 'react';
import { Button, View } from 'react-native';
import { fetchNoteSubjects, fetchMarkdownData } from '../../utils/fetchTools';
import localNotes from '../../localData/localNotesManifest';
import stripHTMLFromString from '../../utils/stripHTMLFromString';
import makeArrayUnique from '../../utils/returnUniqueArray';
import menuStyles from '../../styles/menu';
import buttonStyles from '../../styles/button';

const useEffectCallback = (setOnlineNotes) => {
  (async () => {
    const onlineNoteSubjects = await fetchNoteSubjects();
    setOnlineNotes(() => onlineNoteSubjects);
  })();
};

const MenuButtons = ({ titles, onPressHandler }) =>
  titles.map((title) => (
    <View style={buttonStyles.container} key={`${title}_view`}>
      <Button
        title={title in localNotes ? `${title} (local)` : title}
        onPress={() => onPressHandler(title)}
        key={`${title}_button`}
        style={buttonStyles.button}
      />
    </View>
  ));

export default ({ viewerCallback }) => {
  const [onlineNotes, setOnlineNotes] = useState({});

  useEffect(() => useEffectCallback(setOnlineNotes), []);
  const titles = () => {
    const mergedNotesTitles = [...Object.keys(localNotes), ...Object.keys(onlineNotes)];
    return makeArrayUnique(mergedNotesTitles);
  };

  const onPressHandler = async (selectedTitle) => {
    // Loading selected markdown data before navigation for better experience

    const isNoteLocal = selectedTitle in localNotes;
    if (isNoteLocal) {
      return viewerCallback({
        title: selectedTitle,
        markdownData: stripHTMLFromString(localNotes[selectedTitle]),
      });
    }

    const markdownURL = onlineNotes[selectedTitle].markdownURL;
    return viewerCallback({
      title: selectedTitle,
      markdownData: await fetchMarkdownData(markdownURL),
    });
  };

  return (
    <View style={menuStyles.container}>
      <MenuButtons titles={titles()} onPressHandler={onPressHandler} />
    </View>
  );
};
