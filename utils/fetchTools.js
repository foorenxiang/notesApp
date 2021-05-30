'use strict';

import {
  SERVED_NOTES_URL,
  NOTES_REPOSITORY_URL,
  LANGUAGE_EXTENSIONS_DESCRIPTORS_URL,
} from './constants';
import startCase from 'lodash.startcase';
import isURL from './isURL';
import stripHTMLFromString from './stripHTMLFromString';

const logError = (err, url) => {
  console.error(err);
  console.error(`Failed to load data from ${url}`);
};

export const fetchText = async (url) => {
  try {
    const response = await fetch(url);
    return response.text();
  } catch (err) {
    logError(err, url);
    return '';
  }
};

export const fetchJSON = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    logError(err, url);
    return {};
  }
};

export const fetchNoteSubjects = async () => {
  const data = await fetchJSON(SERVED_NOTES_URL);
  const notes = {};
  for (const noteSubject in data) {
    const title = startCase(noteSubject);
    const URI = data[noteSubject];
    const url = isURL(URI) ? URI : `${NOTES_REPOSITORY_URL}${URI}`;
    notes[noteSubject] = {
      title,
      url,
    };
  }
  return notes;
};

const fileExtensionFromURL = (url) => {
  const splitURLFragments = url.split('.');
  const last_index = splitURLFragments.length - 1;
  const ext = splitURLFragments[last_index].toLowerCase();
  return ext;
};

const fetchMarkdownData = async (markdownURL) => {
  const markdownData = await fetchText(markdownURL);
  return stripHTMLFromString(markdownData);
};

const languageNameFromExtension = async (providedExt) => {
  const providedExtWithPeriod = `.${providedExt}`;

  const sourceFileExtensionDescriptors = await fetchJSON(LANGUAGE_EXTENSIONS_DESCRIPTORS_URL);

  const isExtensionInDescriptorObject = (descriptorObject) => {
    return 'extensions' in descriptorObject
      ? !!descriptorObject.extensions.find((ext) => providedExtWithPeriod === ext)
      : false;
  };

  const detectedExtensionName = sourceFileExtensionDescriptors.find((descriptorObject) =>
    isExtensionInDescriptorObject(descriptorObject)
  )?.name;

  return detectedExtensionName;
};

const fetchSourceFile = async (url, fileExtension) => {
  const sourceFileText = await fetchText(url);

  const language = await languageNameFromExtension(fileExtension);

  const sourceFileTextAsMarkdown = (sourceFileText) => {
    const MARKDOWN_CODEBLOCK = '```';

    const title = language
      ? `### ${language}${' source file'} (.${fileExtension})\n`
      : `### .${fileExtension}${' source file'} \n`;
    const markdownCodeblockPrefix = `${MARKDOWN_CODEBLOCK} ${language}\n`;
    const markdownCodeblockSuffix = MARKDOWN_CODEBLOCK;
    return `${title}${markdownCodeblockPrefix}${sourceFileText}${markdownCodeblockSuffix}`;
  };

  return sourceFileTextAsMarkdown(sourceFileText);
};

const appendSource = (url, markdownData) => `From source: ${url}\n${markdownData}`;

const getMarkdownData = async (url) => {
  const fileExtension = fileExtensionFromURL(url);
  return fileExtension === 'md'
    ? await fetchMarkdownData(url)
    : await fetchSourceFile(url, fileExtension);
};

export const fetchNotesData = async (url) => {
  const notesData = appendSource(url, await getMarkdownData(url));
  return notesData;
};
