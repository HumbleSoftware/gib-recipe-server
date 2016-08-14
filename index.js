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
  register: register,
  serverTask: serverTask
}

function serverTask (options) {

  options = config(options);

  // Bus:
  if (bus) {
    bus.on('notify-error', function (message, title) {
      var notify = '<b>' + title + ':</b> ' + message;
      browserSync.notify(notify, options.notifyDuration)
    });
  }

  // Task:
  return function () {
    browserSync.init({
      port: options.port,
      server: options.root,
      middleware: options.middleware,
      open: false
    });
  }
}

function config (options) {

  // Defaults:
  options                = options || {};
  options.port           = options.port || 8080;
  options.root           = options.root || './build';
  options.notifyDuration = options.notifyDuration || 10000;
  options.middleware     = options.middleware || [];

  return options;
}

function register (b) {
  bus = b;
}
