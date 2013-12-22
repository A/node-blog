'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var express             = require('express');

// End of dependencies.


// Без флага authRequired проверяет, есть ли `req.headers.authorization`, если нет — ничего не делает, 
// если есть — проверяет корректность авторизационных данных. 
// С флагом authRequired требует авторизации для доступа к странице.
module.exports = function (credentials, authRequired) {
  return authRequired
    ? express.basicAuth.apply(credentials)
    : function (req, res, next) {
        credentials.push(next);
        var mw = express.basicAuth.apply(credentials);
        req.headers.authorization
          ? mw(req, res, next)
          : next();
      };
};