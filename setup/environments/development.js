'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var express             = require('express');

// End of dependencies.


module.exports = function () {

  this.use(express.errorHandler());

};