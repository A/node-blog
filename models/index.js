'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var mongoose            = require('mongoose');

// End of dependencies.


mongoose.model('Post', {
  'title': {
    type: String,
    required: true
  },
  'content': {
    type: String,
    required: true
  },
  'tags': Array,
  'date': {
    type: Date,
    default: Date.now
  }
});