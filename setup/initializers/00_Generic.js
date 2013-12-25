'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var pwd                 = process.env.PWD;

// End of dependencies.


module.exports = function (done) {

  // Setup nconf
  config.file({'file': pwd + '/config.json'});

  process.env.MONGOLAB_URI
    && config.set('mongodb:host', process.env.MONGOLAB_URI);

  process.env.PORT
    && config.set('express:port', process.env.PORT);
  // You can do moar setups here
  // ...


  done();

};