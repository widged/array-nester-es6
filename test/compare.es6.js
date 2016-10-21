/* jshint esnext: true */

// #############################################################################
// ##  Comparison functions for to be used as argument to `arr.sort()`;
// #############################################################################

// See test/compare-test.es6.js for examples and usage information.

var FN = {};

FN.descendingNumbers   = (a,b) => { return b - a; };
FN.ascendingNumbers    = (a,b) => { return a - b; };
FN.ascendingStrings    = (a,b) => { return a > b ? +1 : a < b ? -1 : 0; };
FN.descendingStrings   = (a,b) => { return a > b ? -1 : a < b ? +1 : 0; };

export default FN;
