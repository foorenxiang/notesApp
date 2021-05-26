import { SERVED_NOTES_URL, NOTES_REPOSITORY_URL } from './constants';
import _ from 'lodash';
import isURL from './isURL';
import stripHTMLFromString from './stripHTMLFromString';

const logError = (err, url) => {
  console.error(err);
  console.error(`Failed to load data from ${url}`);
};

export const fetchText = async (url) => {
  try {
    const response = await fetch(url);
    const textData = await response.text();
    return textData;
  } catch (err) {
    logError(err, url);
    return '';
  }
};

export const fetchJSON = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    logError(err, url);
    return {};
  }
};

export const fetchNoteSubjects = async () => {
  const data = await fetchJSON(SERVED_NOTES_URL);
  const notes = {};
  for (const noteSubject in data) {
    const title = _.startCase(noteSubject);
    const URI = data[noteSubject];
    const markdownURL = isURL(URI) ? URI : `${NOTES_REPOSITORY_URL}${URI}`;
    notes[noteSubject] = {
      title,
      markdownURL,
    };
  }
  return notes;
};

export const fetchMarkdownData = async (markdownURL) => {
  const markdownData = await fetchText(markdownURL);
  return stripHTMLFromString(markdownData);
};
