/* jshint esnext: true */
// mocha --compilers js:./test/compiler.js test/*-test.es6.js

(function() {

  'use strict';

  var assert  = require('assert');
  var {compose, indexify, pick, sort}  = require('../src/utils.es6.js');

  describe('recursive nester', function() {

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

      it('indexify', function() {
        var actual = 'a,b,c,d,e,f,g'.split(',').map(indexify);
        var expected = [{"d":"a","i":0},{"d":"b","i":1},{"d":"c","i":2},{"d":"d","i":3},{"d":"e","i":4},{"d":"f","i":5},{"d":"g","i":6}];
        assert.deepEqual(actual, expected);
      });

      it('pick', function() {
        var data = [{"d":"a","i":0},{"d":"b","i":1},{"d":"c","i":2},{"d":"d","i":3},{"d":"e","i":4},{"d":"f","i":5},{"d":"g","i":6}];
        var actual = data.map(pick('d'));
        var expected = ["a","b","c","d","e","f","g"];
        assert.deepEqual(actual, expected);
      });

      it('sort.ascendingNumbers', function() {
        var actual = [1,3,4,6,2,5].sort(sort.ascendingNumbers);
        var expected = [ 1, 2, 3, 4, 5, 6 ];
        assert.deepEqual(actual, expected);
      });

      it('sort.descendingNumbers', function() {
        var actual = [1,3,4,6,2,5].sort(sort.descendingNumbers);
        var expected = [6,5,4,3,2,1];
        assert.deepEqual(actual, expected);
      });

      it('sort.ascendingStrings', function() {
        var actual = 'fghijabcde'.split('').sort(sort.ascendingStrings);
        var expected = ["a","b","c","d","e","f","g","h","i","j"];
        assert.deepEqual(actual, expected);
      });

      it('sort.descendingNumbers', function() {
        var actual = 'fghijabcde'.split('').sort(sort.descendingStrings);
        var expected = ["j","i","h","g","f","e","d","c","b","a"];
        assert.deepEqual(actual, expected);
      });

    });
  });

} ());
