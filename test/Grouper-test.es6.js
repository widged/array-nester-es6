/* jshint esnext: true */
// mocha --compilers js:./test/compiler.js test/*-test.es6.js

(function() {

  'use strict';

  var assert  = require('assert');
  var Grouper  = require('../src/Grouper.es6.js');


  // ##################################################

  describe('Grouper', function() {
    it('splits data according the even/odd label function', function() {
      var data = [{foo: 1}, {foo: 2}, {foo: 3}];
      var group = Grouper(({foo}) => { return (foo % 2 === 0) ? 'even' : 'odd'; });
      var expected = [{"k":"odd","v":[{"foo":1},{"foo":3}]},{"k":"even","v":[{"foo":2}]}];
      assert.deepEqual(expected,group(data));
    });

    it('sort key values according to the sort function', function() {
      var data = [{foo: 2}, {foo: 1}, {foo: 3}];
      var group = Grouper(({foo}) => { return foo; }, (a,b) => { return a - b; });
      var expected = [{"k":1,"v":[{"foo":1}]},{"k":2,"v":[{"foo":2}]},{"k":3,"v":[{"foo":3}]}];
      assert.deepEqual(expected,group(data));
    });
  });


} ());
