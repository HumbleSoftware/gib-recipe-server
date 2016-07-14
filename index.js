'use strict';

// Module:
var browserSync = require('browser-sync');
var bus         = null;

module.exports = {
  refresh: function () {
    return browserSync.reload();
  },
  refreshStream: function () {
    return browserSync.stream();
  },
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

function register (b) {
  bus = b;
}
