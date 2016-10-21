/* jshint esnext: true */
// mocha --compilers js:./test/compiler.js test/*-test.es6.js

(function() {

  'use strict';

  var assert      = require('assert');
  var IndexNester = require('../src/IndexNester.es6.js');
  var Indexer     = require('../src/Indexer.es6.js');
  var compare     = require('./compare.es6.js');

  describe('IndexNester', function() {

    it('is typically used to nest key indexes', function() {
      var data =   [[1, 1, 1], [1, 1, 2], [1, 2, 1], [1, 2, 2], [2, 1, 1], [2, 1, 2], [2, 2, 1], [2, 2, 2]];
      var values = data.map((d) => { return d.join('-') });
      var nester = new IndexNester((leaves) => { return leaves.map(({d,i}) => { return values[i]; }); });
      var expected = [
        {"k":1,"v":[
          {"k":1,"v":[
            {"k":1,"v":["1-1-1"]},
            {"k":2,"v":["1-1-2"]}
          ]},
          {"k":2,"v":[
            {"k":1,"v":["1-2-1"]},
            {"k":2,"v":["1-2-2"]}
          ]}
        ]},
        {"k":2,"v":[
          {"k":1,"v":[
            {"k":1,"v":["2-1-1"]},
            {"k":2,"v":["2-1-2"]}
          ]},
          {"k":2,"v":[
            {"k":1,"v":["2-2-1"]},
            {"k":2,"v":["2-2-2"]}
          ]}
        ]}
      ];
      assert.deepEqual(expected,nester.run(data));
    });


  });

} ());
