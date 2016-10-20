/* jshint esnext: true */
// mocha --compilers js:./test/compiler.js test/*-test.es6.js

(function() {

  'use strict';

  var assert  = require('assert');
  var Nester  = require('../src/Nester.es6.js');


    describe('Nester', function() {
      it('returns an array of each distinct key in arbitrary order', function() {
        var data = [{foo: 1}, {foo: 1}, {foo: 2}];
        var nester = new Nester( [{label: function({foo}) { return foo; }}] );
        var expected = [{"k":1,"v":[{"foo":1},{"foo":1}]},{"k":2,"v":[{"foo":2}]}];
        assert.deepEqual(expected,nester.run(data));
      });

      it('acceps multiple keys', function() {
        var data = [[0, 1], [0, 2], [1, 1], [1, 2], [0, 2]];
        var nester = new Nester(
          [{label: function(d) { return d[0]; } },{label: function(d) { return d[1]; } }]
        );
        var expected = [ {
          "k":0,"v":[
            {"k":1,"v":[[0,1]]},
            {"k":2,"v":[[0,2],[0,2]]}
          ]}, {
          "k":1,"v":[
            {"k":1,"v":[[1,1]]},
            {"k":2,"v":[[1,2]]}
          ]}
        ];
        assert.deepEqual(expected,nester.run(data));
      });

      it('sort keys based on an optional comparator function', function() {
        var data = [{foo: 1}, {foo: 1}, {foo: 2}];
        var nester = new Nester( [{label: function(d) { return d.foo; }, sort: function(a, b) { return b -a; }}] );
        var expected = [{"k":2,"v":[{"foo":2}]},{"k":1,"v":[{"foo":1},{"foo":1}]}];
        assert.deepEqual(expected,nester.run(data));
      });

      it('aggregates values based on an optional rollup function', function() {
        var data = [{foo: 1, bar: 2}, {foo: 1, bar: 0}, {foo: 1, bar: 1}, {foo: 2}];
        var nester = new Nester(
          [{label: function(d) { return d.foo; } }],
          (leaves) => { return leaves.reduce((acc,d) => { return acc+(d.bar||0); }, 0); }
        );
        var expected = [{"k":1,"v":3},{"k":2,"v":0}];
        assert.deepEqual(expected,nester.run(data));
      });

      it('formats the returned {k,v} with an optional pack function', function() {
        var data = [[0, 1], [0, 2], [1, 1], [1, 2], [0, 2]];
        var nester = new Nester(
          [{label: function(d) { return d[0]; } },{label: function(d) { return d[1]; } }],
          undefined,
          ({k,v}) => { return {key: k, values: v}; }
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
        assert.deepEqual(expected,nester.run(data));
      });

      it('if no keys are specified, the input array is returned', function() {
        var data = [{foo: 1, bar: 2}, {foo: 1, bar: 0}, {foo: 1, bar: 1}, {foo: 2}];
        var nester = new Nester();
        assert.deepEqual(data,nester.run(data));
      });

    });

} ());
