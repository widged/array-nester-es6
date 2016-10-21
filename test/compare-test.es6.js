/* jshint esnext: true */
// mocha --compilers js:./test/compiler.js test/*-test.es6.js

(function() {

  'use strict';

  var assert  = require('assert');
  var compare  = require('./compare.es6.js');

  describe('compare', function() {
    it('compare.ascendingNumbers', function() {
      var actual = [1,3,4,6,2,5].sort(compare.ascendingNumbers);
      var expected = [ 1, 2, 3, 4, 5, 6 ];
      assert.deepEqual(actual, expected);
    });

    it('compare.descendingNumbers', function() {
      var actual = [1,3,4,6,2,5].sort(compare.descendingNumbers);
      var expected = [6,5,4,3,2,1];
      assert.deepEqual(actual, expected);
    });

    it('compare.ascendingStrings', function() {
      var actual = 'fghijabcde'.split('').sort(compare.ascendingStrings);
      var expected = ["a","b","c","d","e","f","g","h","i","j"];
      assert.deepEqual(actual, expected);
    });

    it('compare.descendingNumbers', function() {
      var actual = 'fghijabcde'.split('').sort(compare.descendingStrings);
      var expected = ["j","i","h","g","f","e","d","c","b","a"];
      assert.deepEqual(actual, expected);
    });

  });

} ());
