// https://github.com/storybookjs/storybook/issues/8069

// The React Native packager resolves all the imports at build-time, so it’s not possible to load modules dynamically. There is a third party loader react-native-storybook-loader to automatically generate the import statements for all stories.

// import { promisify } from 'util';
// import { readdir } from 'fs';

// const scanDirectory = async (directory) => {
//   const whitelistedExtensions = ['.md'];

//   const isWhitelistedFile = (file) => null;
//   // whitelistedExtensions.some((ext) => path.extname(file) === ext);

//   const filterWhiteListedFiles = (files) => files.filter((file) => isWhitelistedFile(file));

//   // https://stackabuse.com/converting-callbacks-to-promises-in-node-js/
//   // https://stackoverflow.com/questions/63742173/typeerror-fs-readdirsync-is-not-a-function-react-js

//   const applyRequireContext = ({ directory, useSubdirectories = false, regex = /^\.\// }) =>
//     require.context(directory, useSubdirectories, regex);

//   const scannedFiles = applyRequireContext({
//     directory: DATA_FOLDER,
//     useSubdirectories: false,
//     regex: /\.(md|pdf|jpg)$/,
//   });
//   console.log(scannedFiles);

//   // const scanFiles = promisify(fs.readdir);
//   // const scannedFiles = await scanFiles(directory);
//   // const whitelistedFiles = filterWhiteListedFiles(scannedFiles);
//   // console.log(whitelistedFiles);
//   // return whitelistedFiles;
// };
