'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var express             = require('express');
var bootable            = require('bootable');

// End of Dependencies


var app = bootable(express());


// Setup initializers
app.phase(bootable.initializers('setup/initializers'));

// Setup params
app.phase(bootable.initializers('params'));

// Setup environments
app.phase(require('bootable-environment')('setup/environments', app));

// Setup routes
app.phase(bootable.routes('routes', app));


app.boot(function (err) {
  if (err) throw err;
  app.listen(config.get('express:port'), function () {
    log.info('Express listen port', config.get('express:port'));
  });
});
