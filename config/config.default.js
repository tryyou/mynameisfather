'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1520822818336_1250';

  // add your config here
  config.middleware = [];

  config.security = {
    csp: {
      // ignore: '/demo',
      // enable: false,
    },
    // ignore:'/api/',
    csrf: {
      enable: false,
      // enable: false,
      // ignoreJSON: true,
      // domainWhiteList: ['http://localhost:8080', 'http://10.0.0.12:8080', 'http://127.0.0.1:8080'],
    },
  };
  config.cors = {
    // enable: false,
    // origin: '*',
    // allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    // credentials: true
  };
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'smallbook',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }

  // config.view = {
  //   root: [
  //     path.join(appInfo.baseDir, 'app/view'),
  //     path.join(appInfo.baseDir, 'path/to/another'),
  //   ].join(',')
  // };
  config.view = {
    defaultExtension:'.nj',
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    },

  }


  return config;
};