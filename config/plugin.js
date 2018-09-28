'use strict';

// had enabled by egg
// exports.static = true;

const path = require('path');
console.log('load config/plugin');
exports.uab = {
  enable: true,
  path: path.join(__dirname, '../lib/plugins/egg-ua'),
};
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
