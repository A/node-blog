'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var requireTree         = require('require-tree');
var controllers         = requireTree('../controllers');
var express             = require('express');

// End of dependencies.


module.exports = function () {

  // Render index page
  this.get('/', controllers.render('index'));

  // Auth user by express.basicAuth. On success create field `req.user`.
  this.get('/login', express.basicAuth.apply(null, config.get('credentials')), controllers.redirect('/'));

  // create or update posts.
  this.post('/editor', controllers.render('edit'));

  // Return compiled stylus-file.
  this.get('/stylesheets/main.css', controllers.stylus('stylus/main.styl', ['nib']));

};