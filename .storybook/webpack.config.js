const path = require('path');

// Export a function. Accept the base config as the only param.
const custom = require('../build/webpack.base.conf');

module.exports = async ({ config, mode }) => {
  return { ...config, module: { ...config.module, rules: custom.module.rules } };
};