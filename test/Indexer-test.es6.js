/* jshint esnext: true */
// mocha --compilers js:./test/compiler.js test/*-test.es6.js

(function() {

  'use strict';

  var assert   = require('assert');
  var Indexer  = require('../src/Indexer.es6.js');
  var compare  = require('./compare.es6.js');

  describe('Indexer', function() {
    it('it attaches an index to each line', function() {
      var cv = (d) => { return /[aeiou]/i.test(d) ? 'v' : 'c'; };
      var indexer = new Indexer([
              {label: function(d) { return cv(d[0]); } },
              {label: function(d) { return cv(d[1]); } },
      ]);
      var data = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium".split(/\W+/);
      var expected = [
        {"k":["v","c"],"v":["At","et","accusamus","et","odio"]},
        {"k":["c","v"],"v":["vero","dignissimos","ducimus","qui"]},
        {"k":["v","v"],"v":["eos","iusto"]},
        {"k":["c","c"],"v":["blanditiis","praesentium"]}
      ];
      assert.deepEqual(expected,indexer.run(data));
    });

    it('it sorts indexes as a function of a sort function ', function() {
      var cv = (d) => { return /[aeiou]/i.test(d) ? 'v' : 'c'; };
      var indexer = new Indexer([
              {label: function(d) { return cv(d[0]); }, sort: compare.ascendingStrings },
              {label: function(d) { return cv(d[1]); }, sort: compare.descendingStrings },
      ]);
      var data = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium".split(/\W+/);
      var expected = [
        {"k":["c","v"],"v":["vero","dignissimos","ducimus","qui"]},
        {"k":["c","c"],"v":["blanditiis","praesentium"]},
        {"k":["v","v"],"v":["eos","iusto"]},
        {"k":["v","c"],"v":["At","et","accusamus","et","odio"]}
      ];

      assert.deepEqual(expected,indexer.run(data));
    });

    it("is preserves the type of the value indexed ", function() {
      var data = [[1, 1, 1], [1, 1, 2], [1, 2, 1], [1, 2, 2], [2, 1, 1], [2, 1, 2], [2, 2, 1], [2, 2, 2]];
      var indexer = new Indexer(
            [
                  {label: function(d) { return d[0]; }, sort: compare.descendingNumbers },
                  {label: function(d) { return d[1]; }, sort: compare.ascendingNumbers },
                  {label: function(d) { return d[2]; }, sort: compare.descendingNumbers }
            ]
      );
      var expected = [
          {"k":[2,1,2],"v":[[2,1,2]]},
          {"k":[2,1,1],"v":[[2,1,1]]},
          {"k":[2,2,2],"v":[[2,2,2]]},
          {"k":[2,2,1],"v":[[2,2,1]]},
          {"k":[1,1,2],"v":[[1,1,2]]},
          {"k":[1,1,1],"v":[[1,1,1]]},
          {"k":[1,2,2],"v":[[1,2,2]]},
          {"k":[1,2,1],"v":[[1,2,1]]}
        ];

      var indexed = indexer.run(data);
      assert.deepEqual(expected,indexer.run(data));
    });

  });

} ());
