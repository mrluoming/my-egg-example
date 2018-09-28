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

  return config;
};
