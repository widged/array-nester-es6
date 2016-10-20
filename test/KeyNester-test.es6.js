/* jshint esnext: true */
// mocha --compilers js:./test/compiler.js test/*-test.es6.js

(function() {

  'use strict';

  var assert         = require('assert');
  var KeyNester      = require('../src/KeyNester.es6.js');
  var Indexer        = require('../src/Indexer.es6.js');
  var {pick, sort}   = require('../src/utils.es6.js');

  describe('KeyNester', function() {
    it('attaches an index to each line', function() {
      var data = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium".split(/\W+/);
      var cv = (d) => { return /[aeiou]/i.test(d) ? 'v' : 'c'; }
      var indexer = new Indexer(
            [
                  {label: function(d) { return cv(d[0]) }, sort: sort.ascendingStrings },
                  {label: function(d) { return cv(d[1]) }, sort: sort.descendingStrings },
            ]
      );
      var expected = [
        {"k":["c","v"],"v":["vero","dignissimos","ducimus","qui"]},
        {"k":["c","c"],"v":["blanditiis","praesentium"]},
        {"k":["v","v"],"v":["eos","iusto"]},
        {"k":["v","c"],"v":["At","et","accusamus","et","odio"]}
      ];
      assert.deepEqual(expected,indexer.run(data));
    });

    it('is typically used to nest key indexes', function() {
      var data = [[1, 1, 1], [1, 1, 2], [1, 2, 1], [1, 2, 2], [2, 1, 1], [2, 1, 2], [2, 2, 1], [2, 2, 2]];
      var indexer = new Indexer(
            [
                  {label: function(d) { return '_'+d[0]; }, sort: sort.descendingNumbers },
                  {label: function(d) { return '_'+d[1]; }, sort: sort.ascendingNumbers },
                  {label: function(d) { return '_'+d[2]; }, sort: sort.descendingNumbers }
            ]
      );
      var indexed = indexer.run(data);
      var nester = new KeyNester((leaves) => { return leaves.map(({d,i}) => { return pick('v')(indexed[i]); })
      });
      var actual = nester.run(indexed.map(pick('k')));
      var expected = [
        {"k":"_1","v":[
          {"k":"_1","v":[{"k":"_1","v":[[[1,1,1]]]}, {"k":"_2","v":[[[1,1,2]]]}]},
          {"k":"_2","v":[{"k":"_1","v":[[[1,2,1]]]},{"k":"_2","v":[[[1,2,2]]]}]}
        ]},
        {"k":"_2","v":[
          {"k":"_1","v":[{"k":"_1","v":[[[2,1,1]]]},{"k":"_2","v":[[[2,1,2]]]}]},
          {"k":"_2","v":[{"k":"_1","v":[[[2,2,1]]]},{"k":"_2","v":[[[2,2,2]]]}]}
        ]}
      ];
      assert.deepEqual(expected,actual);

    });

  });

} ());
