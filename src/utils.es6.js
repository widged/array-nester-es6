/* jshint esnext: true */

/*
  Compose multiple funtions in a single one that can be passed to a map function.
*/
var compose = (...fns) => {
      if(fns.length === 0) { return; }
      if(fns.length === 1) { return fns[0]; }
      return fns.reduce((acc, fn) => {
         return (d) => { return fn(acc(d)); };
      });
};

var pick          = (k) => { return (obj) => { return obj[k]; } ; };
var indexify      = (d,i) => { return {d,i}; };

var sort = {};
sort.descendingNumbers   = (a,b) => { return b - a; };
sort.ascendingNumbers    = (a,b) => { return a - b; };
sort.ascendingStrings   = (a,b) => { return a > b ? +1 : a < b ? -1 : 0; };
sort.descendingStrings    = (a,b) => { return a > b ? -1 : a < b ? +1 : 0; };

export {compose, pick, indexify, sort};
