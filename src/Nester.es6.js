/* jshint esnext: true */

var Grouper  = require('./Grouper.es6.js');

// the `pack` function can be used to reformat the {k,v} value for compatibility with other libraries. For instance, d3 uses {key,values}.

var identity = (d) => { return d; };
var Nester = (keys, rollup, pack) => {
  if (typeof rollup !== 'function') { rollup = identity; }
  if (typeof pack   !== 'function') { pack   = identity; }
  var keyQty = keys ? keys.length : 0;
  return (lines, maxDepth) => {
    if(!maxDepth || maxDepth >= keyQty) { maxDepth = keyQty; }
    var recurse = (arr, depth) => {
      if (depth >= maxDepth) { return rollup(arr); }
      var {label, sort} = keys[depth];
      var group = Grouper(label, sort);
      return group(arr).map(({k,v}, i) => { return pack({k, v: recurse(v, depth+1)}); });
    };
    return recurse(lines, 0);
  };
};

export default Nester;
