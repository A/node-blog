'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var Post                = require('mongoose').model('Post');

// End of dependencies.


// Setup variables for jade
module.exports = function () {
  return function (req, res, next) {
    res.locals.user = req.user;
    Post.find(null, '_id title date', function (err, posts) {
      err
        ? next(err)
        : res.locals.posts = posts,
          next();
    });
  };
};
