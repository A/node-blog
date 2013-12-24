'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var Post                = require('mongoose').model('Post');
var auth                = require('../../controllers/auth');

// End of dependencies.


// Setup variables for jade
module.exports = function (done) {

  // Get posts
  this.use(function (req, res, next) {
    Post.find(null, '_id title date', function (err, posts) {
      err
        ? next(err)
        : res.locals.posts = posts,
          next();
    });
  });


  // Check auth
  this.use(auth.check(config.get('credentials')));


  // Provide user to jade if it exists
  this.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
  });


  done();

};