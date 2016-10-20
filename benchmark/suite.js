#!/usr/bin/env babel-node

var benchmarkSuite    = require('./benchmark-suite.es6.js');

var Grouper    = require('../src/Grouper.es6.js');
var GrouperSlower    = require('../src/Grouper-slower.es6.js');
var Nester     = require('../src/Nester.es6.js');
var Indexer    = require('../src/Indexer.es6.js');
var IndexerOptimised    = require('../src/Indexer-optimised.es6.js');
var KeyNester  = require('../src/KeyNester.es6.js');
var FluentNester  = require('../src/FluentNester.es6.js');
var {nest: d3nest}   = require('./d3-collection/index.js');
var {sort}   = require('../src/utils.es6.js');

var tests = ({lineQty}) => {
  var arr = Array.from(new Array(lineQty)).map((d,i) => { return i});
  var keys = [
    {label: function(d) { return d % 2; }, sort: sort.ascendingNumbers },
    {label: function(d) { return d % 3; }, sort: sort.ascendingNumbers  },
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

  suite.KeyNester = () => {
    var indexer = new Indexer(keys);
    var indexed = indexer.run(arr);
    var nester = new KeyNester((leaves) => {
      return leaves.reduce((acc, {i}) => { return acc.concat(indexed[i].v) }, [])
    });
    return nester.run(indexed.map(pickK))
  };

  return Object.keys(suite).filter((k) => { return !/_skip$/.test(k); }).map((k) => { return {name: k, method: suite[k]}; });
}

console.log('----------------------------------')
benchmarkSuite(tests, 50, {lineQty: 30000}).map(({name, padding, average, result}) => {
  console.log(name + padding, Math.round(average * 100000))
//  console.log(JSON.stringify(result))
});
/*
0.005256145
0.001697947
*/
