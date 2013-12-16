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


  // You can do moar setups here
  // ...


  done();

};