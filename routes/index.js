'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');
var requireTree         = require('require-tree');
var controllers         = requireTree('../controllers');
// End of dependencies.


module.exports = function () {
  this.get('/', controllers.render('index'));
  this.get('/editor', controllers.render('edit'));
  this.get('/stylesheets/main.css', controllers.stylus('stylus/main.styl', ['nib']));
};