'use strict';

/**
 * Module dependencies.
 */
var log            = require('winston-wrapper')(module);
var config         = require('nconf');
var stylus         = require('connect-stylus');

// End of dependencies.


/**
 * Wrapper for connect-stylus.
 * TODO: Посмотреть http://learnboost.github.io/stylus/docs/middleware.html
 * @param  {file} Stylus file
 * @return {Connect middleware}
 */
module.exports = function (file, use) {
  return stylus({
    watch: 'production' !== process.env,
    entry: file,
    use: use
  });
};