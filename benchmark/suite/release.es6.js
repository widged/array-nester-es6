var compare        = require('../../test/compare.es6.js');

var Grouper        = require('../../src/Grouper.es6.js');
var Nester         = require('../../src/Nester.es6.js');
var Indexer        = require('../../src/Indexer.es6.js');
var IndexNester    = require('../../src/IndexNester.es6.js');
var FluentNester   = require('../../src/FluentNester.es6.js');

var generateData = require('./generate-data.es6.js');

var pickK = ({k}) => { return k; };

var suite = ({lineQty}) => {

  var {arr, keys} = generateData(lineQty);

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


  return Object.keys(run).map((k) => { return {name: k, method: run[k]}; });
}

export default suite
