/* jshint esnext: true */
// mocha --compilers js:./test/compiler.js test/*-test.es6.js

(function() {

  'use strict';

  var assert  = require('assert');
  var Nester  = require('../src/Nester.es6.js');


  // ##################################################


    describe('recursive nester', function() {
      it('returns an array of each distinct key in arbitrary order', function() {
        var data = [{foo: 1}, {foo: 1}, {foo: 2}];
        var nest = Nester( [{label: function({foo}) { return foo; }}] );
        var expected = [{"key":1,"values":[{"foo":1},{"foo":1}]},{"key":2,"values":[{"foo":2}]}];
        assert.deepEqual(expected,nest(data));
      });

      it('keys can be sorted using an optional comparator', function() {
        var data = [{foo: 1}, {foo: 1}, {foo: 2}];
        var nest = Nester( [{label: function(d) { return d.foo; }, sort: function(a, b) { return b -a; }}] );
        var expected = [{"key":2,"values":[{"foo":2}]},{"key":1,"values":[{"foo":1},{"foo":1}]}];
        assert.deepEqual(expected,nest(data));
      });

      it('values can be aggregated using an optional rollup', function() {
        var data = [{foo: 1, bar: 2}, {foo: 1, bar: 0}, {foo: 1, bar: 1}, {foo: 2}];
        var nest = Nester(
          [{label: function(d) { return d.foo; } }],
          (leaves) => { return leaves.reduce((acc,d) => { return acc+(d.bar||0); }, 0); }
        );
        var expected = [{"key":1,"values":3},{"key":2,"values":0}];
        assert.deepEqual(expected,nest(data));
      });

      it('multiple key functions can be specified', function() {
        var data = [[0, 1], [0, 2], [1, 1], [1, 2], [0, 2]];
        var nest = Nester(
          [{label: function(d) { return d[0]; } },{label: function(d) { return d[1]; } }]
        );
        var expected = [ {
          "key":0,"values":[
            {"key":1,"values":[[0,1]]},
            {"key":2,"values":[[0,2],[0,2]]}
          ]}, {
          "key":1,"values":[
            {"key":1,"values":[[1,1]]},
            {"key":2,"values":[[1,2]]}
          ]}
        ];
        assert.deepEqual(expected,nest(data));
      });


      it('if no keys are specified, the input array is returned', function() {
        var data = [{foo: 1, bar: 2}, {foo: 1, bar: 0}, {foo: 1, bar: 1}, {foo: 2}];
        var nest = Nester();
        assert.deepEqual(data,nest(data));
      });

    });

} ());
