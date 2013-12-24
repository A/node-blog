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


// Remove post
exports.remove = function () {
  return function (req, res, next) {
    res.locals.post.remove(function (err) {
      next(err);
    });
  };
};


// Remove post
exports.update = function () {
  return function (req, res, next) {
    var post = res.locals.post;
    post.title = req.body.title;
    post.content = req.body.content;
    post.save(function (err) {
      next(err);
    });
  };
};