'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var express             = require('express');
var pwd                 = process.env.PWD;
var loghelper           = require('../../util').expressLogHelper;

// End of dependencies.


module.exports = function () {

  this.set('port', config.get('express:port'));
  this.set('views', pwd + '/views');
  this.set('view engine', 'jade');
  this.use(express.favicon());
  this.use(express.logger(loghelper));
  this.use(express.bodyParser());
  this.use(express.methodOverride());
  this.use(this.router);
  this.use(express.static(pwd, '/public'));

};