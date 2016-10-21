var compare        = require('../test/compare.es6.js');

var Grouper        = require('../src/Grouper.es6.js');
var GrouperSlower    = require('./alternatives/Grouper-slower.es6.js');

var suite = ({lineQty}) => {
  var arr = Array.from(new Array(lineQty)).map((d,i) => { return i});
  var keys = [
    {label: function(d) { return d % 2; }, sort: compare.ascendingNumbers },
    {label: function(d) { return d % 3; }, sort: compare.ascendingNumbers  },
  ]
  var pickK = ({k}) => { return k; };

  var run = {};

  run.Grouper = () => {
    var grouper = new Grouper(keys[0].label);
    return grouper.run(arr);
  };

  run.GrouperSlower = () => {
    var grouper = new GrouperSlower(keys[0].label);
    return grouper.run(arr);
  };


  return Object.keys(run).filter((k) => { return !/_skip$/.test(k); }).map((k) => { return {name: k, method: run[k]}; });
}

export default suite
