var Grouper = (kFn, sort) => {
  return (arr) => {
    var ks = [], vs = []; // lightweight dictionary implementation with keys and values on the same index.
    arr.forEach(function(d) {
      var k = (typeof kFn === 'function') ? kFn(d) : d;
      var idx = ks.indexOf(k); if(idx === -1) { idx = ks.length; ks.push(k); }
      if(vs[idx] === undefined) { vs[idx] = []; }
      vs[idx].push(d);
    });
    var sortK = (typeof sort === 'function') ? (a,b) => { return sort(a.k, b.k); } : undefined;
    return ks
        .map((k,i) => { return {k,i}; })
        .sort(sortK)
        .map(({k,i}) => { return {k, v: vs[i]}; });
  }
};

export default Grouper;
