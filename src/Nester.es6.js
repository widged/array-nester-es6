/* jshint esnext: true */

var Grouper  = require('./Grouper.es6.js');

/**
 * Nest lines of data with a succession of indices dynmically computed
 * from the line content.
 *
 * See test/Nester-test.es6.js for usage information.
 *
 * **Example:**
 *
 * ```js
 * var cv = (d) => { return /[aeiou]/i.test(d) ? 'v' : 'c'; };
 * var nester = new Nester([
 *   {label: function(d) { return cv(d[0]); }, sort: compare.ascendingStrings },
 *   {label: function(d) { return cv(d[1]); }, sort: compare.descendingStrings },
 * ]);
 * var nester = nester.run("At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium".split(/\W+/));
 * =>
 *   [
 *     {"k":"c","v":[
 *       {"k":"v","v":["vero","dignissimos","ducimus","qui"]},
 *       {"k":"c","v":["blanditiis","praesentium"]}
 *     ]},
 *     {"k":"v","v":[
 *       {"k":"v","v":["eos","iusto"]},
 *       {"k":"c","v":["At","et","accusamus","et","odio"]}
 *     ]}
 *   ];
 *
 */
class Nester {

  // the `pack` function can be used to reformat the {k,v} value for compatibility with other libraries. For instance, d3 uses {key,values}.
  constructor(keys, rollup, pack) {
    var identity = (d) => { return d; };
    if (typeof rollup !== 'function') { rollup = identity; }
    if (typeof pack   !== 'function') { pack   = identity; }
    this.state = {keys, rollup, pack};
  }

  run(lines, maxDepth) {
    var {keys, rollup, pack} = this.state;
    var keyQty = keys ? keys.length : 0;
    if(!maxDepth || maxDepth >= keyQty) { maxDepth = keyQty; }
    var recurse = (arr, depth) => {
      if (depth >= maxDepth) { return rollup(arr); }
      var {label, sort} = keys[depth];
      var group = new Grouper(label, sort);
      var gps = group.run(arr);
      for (var i = 0, ni = gps.length; i < ni; i++) {
        var {k,v} = gps[i];
        gps[i] = pack({k, v: recurse(v, depth+1)});
      }
      return gps;
    };
    return recurse(lines, 0);
  }

}

export default Nester;
