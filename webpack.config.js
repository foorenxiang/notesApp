const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  // Customize the config before returning it.
  const modifiedEnv = { ...env, offline: true };
  const config = await createExpoWebpackConfigAsync(modifiedEnv, argv);
  return config;
};
