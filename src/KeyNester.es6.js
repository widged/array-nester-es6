/* jshint esnext: true */

var Grouper     = require('./Grouper.es6.js');
var {indexify}  = require('./utils.es6.js');

class KeyNester {
  constructor(rollup) {
    if (typeof rollup !== 'function') { rollup = (d) => { return d; }; }
    this.state = {rollup};
  }

  run(lines, maxDepth) {
    var {rollup} = this.state;
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


export default KeyNester;
