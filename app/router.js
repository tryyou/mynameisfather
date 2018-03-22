'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);

  router.post('/demo', controller.demo.example);
  router.get('/getdemo', controller.demo.getdemo);

  router.get('/alluser', controller.user.user.getAllUser);
  router.get('/adduser', controller.user.user.addUser);

};
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

};
 

