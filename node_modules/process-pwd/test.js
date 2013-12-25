/* globals describe, it */

'use strict';

/**
 * Module dependencies.
 */

var pwd                 = require('./index.js');
var assert              = require('assert');

// End of dependencies.

describe('test', function(){

  it('should be a string', function(done){
    assert('string' === typeof pwd);
    done();
  });

});