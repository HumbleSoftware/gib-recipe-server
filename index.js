'use strict';

// Module:
var browserSync = require('browser-sync');

module.exports = {
  browserSync: browserSync,
  serverTask: serverTask
}

function serverTask (options) {

  options = config(options);

  // Task:
  return function () {
    browserSync.init({
      port: options.port,
      server: options.root,
      open: false
    });
  }
}

function config (options) {

  // Defaults:
  options      = options || {};
  options.port = options.port || 8080;
  options.root = options.root || './build';

  return options;
}
