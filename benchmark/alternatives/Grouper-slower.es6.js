/* jshint esnext: true */

class Grouper {
  constructor (kFn, sort) {
    this.state = {kFn, sort};
  }

  run(lines) {
    var {kFn, sort} = this.state;
    var gps = {};
    for (var l = 0, nl = lines.length; l < nl; l++) {
      var line = lines[l];
      var k = (typeof kFn === 'function') ? kFn(line) : kFn;
      if(!gps.hasOwnProperty(k)) { gps[k] = [line] } else { gps[k].push(line); }
    }
    var sortK = (typeof sort === 'function') ? (a,b) => { return sort(a.k, b.k); } : undefined;
    return Object.keys(gps)
        .map((k,i) => { return {k, v: gps[k]}; })
        .sort(sortK);
  }
}

export default Grouper;
