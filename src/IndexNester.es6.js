/* jshint esnext: true */

var Grouper     = require('./Grouper.es6.js');

/**
 * Nest a list of indices
 * See test/IndexNester-test.es6.js for usage information.
 *
 * **Example:**
 *
 * ```js
 *  var data =   [[1, 'a'], [1, 'b'], [2, 'c'], [2, 'd']];
 *  var values = data.map((d) => { return d.join('-') });
 *  var nester = new IndexNester((leaves) => { return leaves.map(({d,i}) => { return values[i]; }); });
 * =>
 *   [
 *     {"k":1,"v":[
 *       {"k":"a","v":["1-a"]},
 *       {"k":"b","v":["1-b"]}
 *     ]},
 *     {"k":2,"v":[
 *       {"k":"c","v":["2-c"]},
 *       {"k":"d","v":["2-d"]}
 *     ]}
 *   ];
 *
 */
class IndexNester {
  constructor(rollup) {
    if (typeof rollup !== 'function') { rollup = (d) => { return d; }; }
    this.state = {rollup};
  }

  run(lines, maxDepth) {
    var {rollup} = this.state;
    var indexify      = (d,i) => { return {d,i}; };
    var indexed = lines.map(indexify);
    var keyQty = lines[0].length;
    if(!maxDepth || maxDepth > keyQty) { maxDepth = keyQty; }
    var recurse = (arr, depth) => {
          if(depth >= maxDepth) { return rollup(arr); } // in indexified format: {d,i}
          var grouper = new Grouper((d) => { return d.d[depth]; });
          return grouper.run(arr)
                  .map(({k,v}) => { return { k: k, v: recurse(v, depth+1) }; });
    }
    return recurse(indexed, 0);
  }

}

export default IndexNester;
