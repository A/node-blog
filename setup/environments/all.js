'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var express             = require('express');
var pwd                 = require('process-pwd');
var loggerformat        = require('up-express-logger');

// End of dependencies.


module.exports = function () {
  this.set('port', config.get('express:port'));
  this.set('views', pwd + '/views');
  this.set('view engine', 'jade');
  this.use(express.favicon());
  this.use(express.logger(loggerformat));
  this.use(express.urlencoded()); // Replace for depricated connect.bodyParser()
  this.use(express.json()); // Replace for depricated connect.bodyParser()
  this.use(express.methodOverride());
  this.use(this.router);
  this.use(express.static(pwd + '/public'));

};