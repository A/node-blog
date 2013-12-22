'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var Post                = require('mongoose').model('Post');
var marked              = require('marked');


// End of dependencies.


module.exports = function (done) {

  this.param('post', function (req, res, next, id) {
    Post.findById(id, function (err, post) {
      post.markdown = marked(post.content);
      res.locals.post = post;
      next(err);
    });
  });

  done();

};