'use strict';
const path = require ('path');

const name = '微软资产管理服务平台';

function resolve (dir) {
  return path.join (__dirname, dir);
}

module.exports = {
  assetsDir: './',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
      
    },
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '~': resolve ('src'),
      },
    },
  },
};
