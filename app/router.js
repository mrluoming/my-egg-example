'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  console.log('router set');
  app.middleware.debug();
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list/:id', controller.home.list);
  router.get('/isios', controller.home.isIOS);
};
