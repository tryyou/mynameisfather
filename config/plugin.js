'use strict';

// had enabled by egg
// exports.static = true;
exports.cors = {
    enable: true,
    package: 'egg-cors',
};
exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};
exports.view = {
    enable: true,
    package: 'egg-view',
};