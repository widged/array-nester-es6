/* jshint esnext: true */
// mocha --compilers js:./test/compiler.js test/*-test.es6.js

(function() {

  'use strict';

  var assert  = require('assert');
  var FluentNester  = require('../src/FluentNester.es6.js');

  // ##################################################

  describe('FluentNester', function() {
      it('returns an array of each distinct key in arbitrary order', function() {
        var data = [{foo: 1}, {foo: 1}, {foo: 2}];
        var nester = (new FluentNester()).key({label: function({foo}) { return foo; }});
        var expected = [{"key":1,"values":[{"foo":1},{"foo":1}]},{"key":2,"values":[{"foo":2}]}];
        assert.deepEqual(expected,nester.nest(data));
      });

      it('keys can be sorted using an optional comparator', function() {
        var data = [{foo: 1}, {foo: 1}, {foo: 2}];
        var nester = (new FluentNester()).key({label: function(d) { return d.foo; }, sort: function(a, b) { return b -a; }});
        var expected = [{"key":2,"values":[{"foo":2}]},{"key":1,"values":[{"foo":1},{"foo":1}]}];
        assert.deepEqual(expected, nester.nest(data));
      });

      it('sortValues can be added to specify an order for the leaves', function() {
        var data = [{foo: 3}, {foo: 1}, {foo: 2}, {foo: 5}, {foo: 4}, {foo: 0}, {foo: 6}];
        var nester = (new FluentNester())
                        .key({label: function(d) { return d.foo % 2; }, sort: function(a, b) { return a - b; }})
                        .sortValues((a,b) => { return a.foo - b.foo;});
        var expected = [{"key":0,"values":[{"foo":0},{"foo":2},{"foo":4},{"foo":6}]},{"key":1,"values":[{"foo":1},{"foo":3},{"foo":5}]}];
        assert.deepEqual(expected, nester.nest(data));
      });
  });

} ());
