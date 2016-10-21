var compare        = require('../../test/compare.es6.js');

var Indexer        = require('../../src/Indexer.es6.js');
var IndexerFn    = require('../alternatives/Indexer-fn.es6.js');

var suite = ({lineQty}) => {
  var arr = Array.from(new Array(lineQty)).map((d,i) => { return i});
  var keys = [
    {label: function(d) { return d % 2; }, sort: compare.ascendingNumbers },
    {label: function(d) { return d % 3; }, sort: compare.ascendingNumbers  },
  ]
  var pickK = ({k}) => { return k; };

  var run = {};

  run.Indexer = () => {
    var indexer = new Indexer(keys);
    return indexer.run(arr);
  };

  run.IndexerFn = () => {
    var indexer = new IndexerFn(keys);
    return indexer.run(arr);
  };


  return Object.keys(run).filter((k) => { return !/_skip$/.test(k); }).map((k) => { return {name: k, method: run[k]}; });
}

export default suite
