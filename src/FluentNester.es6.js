/* jshint esnext: true */

// #############################################################################
// ##  FluentNester provides a fluent interface to Nester.
// ##  The interface is equivalent to d3.collection.nest.
// #############################################################################

// See test/FluentNester-test.es6.js for examples and usage information.

var Nester  = require('../src/Nester.es6.js');

export default class FluentNester {

  constructor() {
    this.state = {
      nest : {},
      keys : [],
      sortValues : undefined,
      rollup : undefined
    };
  }

  key(d) {
    if(typeof d === 'function') { d = {label: d}; }
    this.state.keys = this.state.keys.slice().concat([d]);
    return this;
  }

  rollup(_) {
    this.state.rollup = _;
    return this;
  }

  sortKeys(compare) {
    this.state.keys[length-1].sort =  compare;
    return this;
  }

  sortValues(_) {
    this.state.sortValues = _;
    return this;
  }

  entries(list, depth) {
    let {keys, rollup, sortValues} = this.state;
    var wrapup = (arr) => {
      if(typeof rollup === 'function') {
        arr = rollup(arr);
      } else if(typeof sortValues === 'function') {
        arr.sort(sortValues);
      }
      return arr;
    };
    var packer = ({k,v}) => { return {key: k.toString(), values: v}; };
    var nester = new Nester(keys, wrapup, packer);
    return nester.run(list, depth);
  }

}
