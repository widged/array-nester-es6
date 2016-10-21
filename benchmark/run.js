#!/usr/bin/env babel-node

var benchmarkSuite = require('./lib/benchmark-suite.es6.js');
var release        = require('./suite/release.es6.js');
var optGrouper     = require('./suite/opt-grouper.es6.js');
var optIndexer     = require('./suite/opt-indexer.es6.js');
var d3nest         = require('./suite/lib-d3nest.es6.js');

// var nesters = suite.filter()

var {sum,average,maxLength, paddingForMax} = require('./lib/utils.es6.js');


var configs = {
  default:      {repetitions: 100, lineQty:   50000},
  checkResults: {repetitions:   1, lineQty:      30}, // results will show whenever there is a single repetition
  tinydata:     {repetitions: 500, lineQty:     100},
  smalldata:    {repetitions: 100, lineQty:    1000},
  bigdata:      {repetitions:  10, lineQty: 1000000}
}


var checkOpt = false;
if(checkOpt) {

  benchmarkSuite(configs.default, optGrouper)
  benchmarkSuite(configs.checkResults, optGrouper)

  benchmarkSuite(configs.default, optIndexer)
  benchmarkSuite(configs.checkResults, optIndexer)



} else {

  var anyNest = ({name}) => {return /nest/i.test(name);};
  var notNest = ({name}) => {return !/nest/i.test(name);};

  benchmarkSuite(configs.default, release, anyNest);
  benchmarkSuite(configs.default, d3nest);

  benchmarkSuite(configs.checkResults, release, anyNest);
  benchmarkSuite(configs.checkResults, d3nest);


  benchmarkSuite(configs.default, release, notNest);
  benchmarkSuite(configs.checkResults, release, notNest);


}
