/* jshint esnext: true */

class Dict {
  constructor() {
    this.state = {keys: []};
  }
  indexOf(key) {
    let {keys} = this.state;
    let idx = keys.indexOf(key); 
    if(idx === -1) { 
        idx = keys.length; 
        keys.push(key); 
    }
    return idx;
  }
  keyAt(idx) {
    let {keys} = this.state;
    return keys[idx];
  }
  listKeys() {
    return this.state.keys;
  }
}

class FN {

  static identity(d) {
    return d;
  }

  static nestLines(lines, keys, rollup) {
    if(typeof rollup !== 'function') { rollup = FN.identity; }
    if (!keys.length) return rollup(lines);
    var keyValues = [];
    var key = keys.shift();
    var dict = new Dict();
    lines.forEach(function(line) {
      if(typeof key.label !== 'function') { key.label = FN.identity; }
      var keyStr = key.label(line);
      var idx = dict.indexOf(keyStr); 
      if(keyValues[idx] === undefined) { keyValues[idx] = {key: keyStr, data: []}; }
      keyValues[idx].data.push(line);
    });

    keyValues.forEach(function(kv) {
      kv.values = FN.nestLines([].concat(kv.data), [].concat(keys), rollup);
      delete kv.data;
    });

    if(typeof key.sort === 'function') {
      keyValues.sort(function(a, b) { return key.sort(a.key, b.key); });
    }
    if(typeof key.sortValues === 'function') {
      keyValues.sort(function(a, b) { return key.sortValues(a.values, b.values); });
    }
    return keyValues;
  }  

}

export default class Nester {

  constructor() {
    this.state = {
      nest : {},
      keys : [],
      sortValues : undefined,
      rollup : undefined
    };
  }

  key(d) {
    let {keys} = this.state;
    keys.push(d);
    return this;
  }

  rollup(f) {
    this.state.rollup = f;
    return this;
  }

  nest(list, depth) {
    let {keys, rollup} = this.state;
    return FN.nestLines(list, keys, rollup);
  }

}