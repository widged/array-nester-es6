/* jshint esnext: true */

// #############################################################################
// ##  Nest a succession of indices \
// #############################################################################

// See test/IndexNester-test.es6.js for examples and usage information.

var Grouper     = require('./Grouper.es6.js');

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
