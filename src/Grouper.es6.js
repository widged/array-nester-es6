/* jshint esnext: true */

// #############################################################################
// ##  Group lines of data with an index dynmically computed from the line content.
// #############################################################################

// See test/Grouper-test.es6.js for examples and usage information.

class Grouper {
  constructor (kFn, sort) {
    this.state = {kFn, sort};
  }

  run(lines) {
    var {kFn, sort} = this.state;
    var ks = [], vs = [];
    // lightweight dictionary implementation with keys and values on the same index.
    // Benchmarking indicates that  `ks = [], vs = []``  is more efficient than using
    // `var gps = {}; if(!gps.hasOwnProperty(k))`
    for (var l = 0, nl = lines.length; l < nl; l++) {
      var line = lines[l];
      var k = (typeof kFn === 'function') ? kFn(line) : kFn;
      var idx = ks.indexOf(k); if(idx === -1) { idx = ks.length; ks.push(k); }
      if(vs[idx] === undefined) { vs[idx] = []; }
      vs[idx].push(line);
    }
    var sortK = (typeof sort === 'function') ? (a,b) => { return sort(a.k, b.k); } : undefined;
    return ks
        .map((k,i) => { return {k, v: vs[i]}; })
        .sort(sortK);
  }
}

export default Grouper;
