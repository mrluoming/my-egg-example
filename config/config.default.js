'use strict';

module.exports = appInfo => {
  const config = exports = {};
  console.log('load default config');
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534494909070_9854';

  // add your config here
  config.middleware = [ 'debug' ];

  return config;
};
