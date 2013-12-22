'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

// End of dependencies.

/**
 * Wraper for res.redirect
 * @return {functoin} express middleware
 */
module.exports = function (url) {
  return function (req, res) {
    res.redirect(url);
  };
};