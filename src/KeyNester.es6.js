/* jshint esnext: true */

var Grouper  = require('./Grouper.es6.js');

var {indexify}  = require('./utils.es6.js');


var KeyNester = (leaves) => {
  return (keys, maxDepth) => {
    var indexed = keys.map(indexify);
    var keyQty = keys[0].length;
    if(!maxDepth || maxDepth > keyQty) { maxDepth = keyQty; }
    var recurse = (arr, depth) => {
          if(depth >= maxDepth) { return arr.map(leaves); } // in indexified format: {d,i}
          var group = Grouper((d) => { return d.d[depth]; });
          return group(arr)
                  .map(({k,v}) => { return { k: k, v: recurse(v, depth+1) }; });
    }
    return recurse(indexed, 0);
  }

}


export default KeyNester;
