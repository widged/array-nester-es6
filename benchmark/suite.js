#!/usr/bin/env babel-node

var benchmarkSuite    = require('./benchmark-suite.es6.js');

var Grouper        = require('../src/Grouper.es6.js');
var Nester         = require('../src/Nester.es6.js');
var Indexer        = require('../src/Indexer.es6.js');
var IndexNester    = require('../src/IndexNester.es6.js');
var FluentNester   = require('../src/FluentNester.es6.js');
var {nest: d3nest} = require('./d3-collection/index.js');
var compare        = require('../test/compare.es6.js');

var GrouperSlower    = require('./alternatives/Grouper-slower.es6.js');
var IndexerOptimised    = require('./alternatives/Indexer-optimised.es6.js');

var tests = ({lineQty}) => {
  var arr = Array.from(new Array(lineQty)).map((d,i) => { return i});
  var keys = [
    {label: function(d) { return d % 2; }, sort: compare.ascendingNumbers },
    {label: function(d) { return d % 3; }, sort: compare.ascendingNumbers  },
  ]
  var pickK = ({k}) => { return k; };

  var suite = {};

  suite.Grouper = () => {
    var grouper = new Grouper(keys[0].label);
    return grouper.run(arr);
  };

  suite.GrouperSlower = () => {
    var grouper = new GrouperSlower(keys[0].label);
    return grouper.run(arr);
  };



  suite.Nester = () => {

    var nester = new Nester(keys);
    return nester.run(arr);
  };

  suite.FluentNester = () => {
    return (new FluentNester()).key(keys[0]).key(keys[1]).entries(arr.slice())
  };

  suite.d3nest = () => {
    return d3nest().key(keys[0].label).key(keys[1].label).entries(arr.slice())
  };

  suite.IndexerOptimised = () => {
    var indexer = new IndexerOptimised(keys);
    return indexer.run(arr);
  };

  suite.Indexer = () => {
    var indexer = new Indexer(keys);
    return indexer.run(arr);
  };

  suite.IndexNester = () => {
    var indexer = new Indexer(keys);
    var indexed = indexer.run(arr);
    var nester = new IndexNester((leaves) => {
      return leaves.reduce((acc, {i}) => { return acc.concat(indexed[i].v) }, [])
    });
    return nester.run(indexed.map(pickK))
  };

  return Object.keys(suite).filter((k) => { return !/_skip$/.test(k); }).map((k) => { return {name: k, method: suite[k]}; });
}

console.log('----------------------------------')
benchmarkSuite(tests, 50, {lineQty: 30000}).map(({name, padding, average, result}) => {
  console.log(name + padding + '  ', (Math.round(average * Math.pow(10,6)) / Math.pow(10,3)).toFixed(3))
//  console.log(JSON.stringify(result))
});
console.log('----------------------------------')
/*
0.005256145
0.001697947
*/
