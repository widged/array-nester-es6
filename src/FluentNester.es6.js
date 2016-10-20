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

  key({label, sort}) {
    this.state.keys = this.state.keys.slice().concat([{label, sort}]);
    return this;
  }

  rollup(_) {
    this.state.rollup = _;
    return this;
  }

  sortValues(_) {
    this.state.sortValues = _;
    return this;
  }

  nest(list, depth) {
    let {keys, rollup, sortValues} = this.state;
    var wrapup = (arr) => {
      if(typeof rollup === 'function') {
        arr = rollup(arr);
      } else if(typeof sortValues === 'function') {
        arr.sort(sortValues);
      }
      return arr;
    };
    var nestLines = Nester(keys, wrapup);
    return nestLines(list, depth);
  }

}
