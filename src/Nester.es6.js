/* jshint esnext: true */

var Grouper  = require('./Grouper.es6.js');

var Nester = (keys, rollup) => {
  if (typeof rollup !== 'function') { rollup = (d) => { return d; }; }
  var keyQty = keys ? keys.length : 0;
  return (lines, maxDepth) => {
    if(!maxDepth || maxDepth >= keyQty) { maxDepth = keyQty; }
    var recurse = (arr, depth) => {
      if (depth >= maxDepth) { return rollup(arr); }
      var {label, sort} = keys[depth];
      var group = Grouper(label, sort);
      return group(arr)
                .map(({k,v}) => { return { key: k, values: recurse(v, depth+1) };
      });
    };
    return recurse(lines, 0);
  };
};

export default Nester;
