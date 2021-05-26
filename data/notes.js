'use strict';

// import notesString from './notesString';

const SERVED_NOTES_URL = 'https://foorenxiang.github.io/static/servedNotes.json';

const fetch_notes = async () => {
  const response = await fetch(SERVED_NOTES_URL);
  const data = await response.json();
  return data;
};

let notesString = 'test';

fetch_notes().then((data) => console.log(data));

export default notesString;
