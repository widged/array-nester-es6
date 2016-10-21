/* jshint esnext: true */

var compare        = require('../../test/compare.es6.js');
var generateData = (lineQty) => {

  var arr = Array.from(new Array(lineQty)).map((d,i) => { return i});
  var keys = [
    {label: function(d) { return d % 2; }, sort: compare.ascendingNumbers },
    {label: function(d) { return d % 3; }, sort: compare.ascendingNumbers  },
  ];

  return {arr, keys};

};

export default generateData;
