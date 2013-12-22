'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var Post                = require('mongoose').model('Post');

// End of dependencies.

// Create post
exports.create = function () {
  return function (req, res, next) {
    var post = new Post(req.body);
    post.save(function (err, post) {
      next(err, post);
    });
  };
};