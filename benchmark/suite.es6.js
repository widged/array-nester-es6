var Grouper        = require('../src/Grouper.es6.js');
var Nester         = require('../src/Nester.es6.js');
var Indexer        = require('../src/Indexer.es6.js');
var IndexNester    = require('../src/IndexNester.es6.js');
var FluentNester   = require('../src/FluentNester.es6.js');
var {nest: d3nest} = require('./d3-collection/index.js');
var compare        = require('../test/compare.es6.js');

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

  run.Indexer = () => {
    var indexer = new Indexer(keys);
    return indexer.run(arr);
  };

  run.IndexAndNest = () => {
    var indexer = new Indexer(keys);
    var indexed = indexer.run(arr);
    var nester = new IndexNester((leaves) => {
      return leaves.reduce((acc, {i}) => { return acc.concat(indexed[i].v) }, [])
    });
    return nester.run(indexed.map(pickK))
  };

  run.Nester = () => {
    var nester = new Nester(keys);
    return nester.run(arr);
  };

  run.FluentNester = () => {
    return (new FluentNester()).key(keys[0]).key(keys[1]).entries(arr.slice())
  };

  run.d3nest = () => {
    return d3nest().key(keys[0].label).key(keys[1].label).entries(arr.slice())
  };

  return Object.keys(run).filter((k) => { return !/_skip$/.test(k); }).map((k) => { return {name: k, method: run[k]}; });
}

export default suite
