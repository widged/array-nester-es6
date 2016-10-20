/* jshint esnext: true */

var Nester  = require('../src/Nester.es6.js');

/*
  FluentNester provides a fluent interface to Nester.
  The interface is similar to d3.collection.nest.
*/
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

  sortKeys(fn) {
    this.state.keys[length-1].sort =  order;
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
    var packer = ({k,v}) => { return {key: k, values: v}; };
    var nester = new Nester(keys, wrapup, packer);
    return nester.run(list, depth);
  }

}
