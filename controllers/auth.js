'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var express             = require('express');

// End of dependencies.


exports.login = function (credentials) {
  return express.basicAuth.apply(credentials);
};


exports.check = function (credentials) {
  
  var user = credentials[0];
  var pwd = credentials[1];


  return function (req, res, next) {
    req.headers.authorization
      ? express.basicAuth(user, pwd, next)(req, res, next)
      : next();
  };

};


exports.logout = function () {
  return function (req, res, next) {
    res.send(401);
  };
};