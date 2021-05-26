import { SERVED_NOTES_URL, NOTES_REPOSITORY_URL } from './constants';
import _ from 'lodash';

export const fetchText = async (url) => {
  const response = await fetch(url);
  const textData = await response.text();
  return textData;
};

export const fetchJSON = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchNotes = async () => {
  const data = await fetchJSON(SERVED_NOTES_URL);
  const notes = {};
  for (const noteSubject in data) {
    const title = _.startCase(noteSubject);
    const relativeURI = data[noteSubject];
    const markdownURL = `${NOTES_REPOSITORY_URL}${relativeURI}`;
    const markdownData = await fetchText(markdownURL);
    notes[noteSubject] = {
      title,
      markdownData,
    };
  }
  return notes;
};
