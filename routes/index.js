'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

// End of dependencies.


module.exports = function () {
  this.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
  });
};