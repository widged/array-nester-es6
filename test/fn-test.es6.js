/* jshint esnext: true */
// mocha --compilers js:./test/compiler.js test/*-test.es6.js

(function() {

  'use strict';

  var assert  = require('assert');
  var {compose, pick}  = require('../src/fn.es6.js');

  describe('fn', function() {

    describe('compose', function() {
      it('compose multiple functions', function() {
        var fn = compose(
              // store multiple arguments as arrays so that they can easily
              // be passed to the next function;
              ([a,b]) => { return [a+1,b+1]; },
              ([a,b]) => { return a*b ; }
        );
        var actual   = fn([3,4]);
        var expected = 20;
        assert.deepEqual(expected,actual);
      });
    });


    describe('pick', function() {
      it('pick', function() {
        var data = [{"d":"a","i":0},{"d":"b","i":1},{"d":"c","i":2},{"d":"d","i":3},{"d":"e","i":4},{"d":"f","i":5},{"d":"g","i":6}];
        var actual = data.map(pick('d'));
        var expected = ["a","b","c","d","e","f","g"];
        assert.deepEqual(actual, expected);
      });
    });

  });

} ());
