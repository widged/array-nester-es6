/* jshint esnext: true */
// mocha --compilers js:./test/compiler.js test/*-test.es6.js

(function() {

  'use strict';

  var assert  = require('assert');
  var Indexer  = require('../src/Indexer.es6.js');
  var {sort}   = require('../src/utils.es6.js');

  describe('Indexer', function() {
    it('it attaches an index to each line', function() {
      var cv = (d) => { return /[aeiou]/i.test(d) ? 'v' : 'c'; };
      var index = Indexer([
              {label: function(d) { return cv(d[0]); }, sort: sort.ascendingStrings },
              {label: function(d) { return cv(d[1]); }, sort: sort.descendingStrings },
      ]);
      var data = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium".split(/\W+/);
      var expected = [
        {"k":["c","v"],"v":["vero","dignissimos","ducimus","qui"]},
        {"k":["c","c"],"v":["blanditiis","praesentium"]},
        {"k":["v","v"],"v":["eos","iusto"]},
        {"k":["v","c"],"v":["At","et","accusamus","et","odio"]}
      ];
      assert.deepEqual(expected,index(data));
    });

  });

} ());
