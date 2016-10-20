/* jshint esnext: true */

class Indexer {

  constructor(keys, rollup)  {
    if (typeof rollup !== 'function') { rollup = (d) => { return d; }; }
    this.state = {keys, rollup};
  }

  run(lines, maxDepth) {
    var {keys, rollup} = this.state;
    if(!keys || !keys.length) { return (lines) => { return rollup(lines); }; }
    if(!maxDepth || maxDepth > keys.length) { maxDepth = keys.length; }
    var gps = {};
    keys = keys.slice(0,maxDepth);
    var sorts  = keys.map(({sort}) => { return sort; });
    var labels = keys.map(({label}) => { return label; });
    for (var l = 0, nl = lines.length; l < nl; l++) {
      var line = lines[l];
      var index = '';
      for(var i = 0, ni = maxDepth; i < ni; i++) {
        var key = labels[i];
        if (typeof key === 'function') { key = key(line); }
        var sep = (i === 0) ? '' : ';';
        index = index + sep + key;
      }
      if(!gps.hasOwnProperty(index)) { gps[index] = [line]; } else { gps[index].push(line); }
    }
    var compareAtAllDepths = (a,b, sorts) => {
      return sorts.reduce(
        (acc, sort, i) => {
          return (acc === 0 && typeof sort === 'function') ? sort(a[i],b[i]) : acc;
      }, 0);
    };
    return Object.keys(gps).map((index,i) => {
      var indices = index.split(';');
      return {k: indices, v: gps[index]};
    }).sort((a,b) => { return compareAtAllDepths(a.k, b.k, sorts); });
  }
}

export default Indexer;
