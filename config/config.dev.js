'use strict';

module.exports = () => {
  console.log('load dev config');

  const config = exports = {};
  config.sequelize = {
    dialect: 'mysql',
    host: 'testhost',
    port: 3306,
    username: 'testname',
    password: 'testpassword',
    database: 'testdb',
    logging: true,
  };
  config.redis = {
    client: {
      host: '127.0.0.1',
      port: 6379,
      password: 'test',
      db: 0,
    },
  };
  return config;
};
