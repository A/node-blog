'use strict';

/**
 * Module dependencies.
 */
var log                 = require('winston-wrapper')(module);
var config              = require('nconf');

var models              = require('../../models/');
var mongoose            = require('mongoose');

// End of dependencies.


module.exports = function (done) {

  mongoose.connection.on('open', function () {
    log.info('Connected to mongo server!'.green);
    return done();
  });

  mongoose.connection.on('error', function (err) {
    log.error('Could not connect to mongo server!');
    log.error(err.message);
    done(err);
    return err;
  });

  try {
    mongoose.connect(config.get('mongodb:host'));
    mongoose.connection;
    log.info('Started connection on ' + (config.get('mongodb:host')) + ', waiting for it to open...');
  } catch (err) {
    log.error(('Setting up failed to connect to ' + config.get('mongodb:host')), err.message);
  }

};