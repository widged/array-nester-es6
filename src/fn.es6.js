/* jshint esnext: true */

// #############################################################################
// ##  Utility functions to manipulate data in the functional style.
// #############################################################################

// See test/fn-test.es6.js for examples and usage information.

/*
  compose

  Compose multiple functions into a single one. It helps avoid unnecessary
  looping over data by replacing `arr.map(fn1).map(fn2)` with
  `arr.map(compose(fn1,fn2))`
*/
var compose = (...fns) => {
      if(fns.length === 0) { return; }
      if(fns.length === 1) { return fns[0]; }
      return fns.reduce((acc, fn) => {
         return (d) => { return fn(acc(d)); };
      });
};

/*
  pick

  Returns a function that will pick the specified attrbitue from an object.
  Written to be used the functional way: `arr.map(pick('k'))`
*/
var pick          = (k) => { return (obj) => { return obj[k]; } ; };

export {compose, pick};
