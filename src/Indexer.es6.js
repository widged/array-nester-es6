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
    var ks = []; vs = [];
    var gps = {};
    var kds = Array.from(new Array(keys.length)).map(() => { return []; }), vs = [];
    for (var l = 0, nl = lines.length; l < nl; l++) {
      var line = lines[l];
      var index = '';
      for(var i = 0, ni = maxDepth; i < ni; i++) {
        var key = keys[i].label;
        if (typeof key === 'function') { key = key(line); }
        var kd = kds[i];
        var idx = kd.indexOf(key); if(idx === -1) { idx = kd.length; kd.push(key); }
        var sep = (i === 0) ? '' : ';';
        index = index + sep + idx;
      }
      if(!gps.hasOwnProperty(index)) { gps[index] = [line]; } else { gps[index].push(line); }
    }
    var compareOnAllKeys = (a,b) => {
      return keys.reduce(
        (acc, {sort}, i) => {
          return (acc === 0 && typeof sort === 'function') ? sort(a[i],b[i]) : acc;
      }, 0);
    };
    return Object.keys(gps).map((index,i) => {
      var indices = index.split(';').map((n,i) => { return kds[i][n]; });
      return {k: indices, v: gps[index]};
    }).sort((a,b) => { return compareOnAllKeys(a.k, b.k); });
  }
}

export default Indexer;
