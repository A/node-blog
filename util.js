'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

// End of dependencies.


exports.expressLogHelper = 'req'.green + ': [' + ':method'.grey  + ']' + ' :status :url '.grey + ':response-time ms'.green;